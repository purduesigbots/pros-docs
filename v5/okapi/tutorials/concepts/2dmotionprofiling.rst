===================
2D Motion Profiling
===================

Motion Profiling is a controls algorithm that defines a movement as a series of
steps. In one dimension, it defines a motor's position, speed, acceleration, etc.
at every timestep during the movement. In two dimensions, it defines your robot's
position, speed, acceleration, etc. and heading at every timestep during the movement.

There is a lot of interesting math that goes into calculating these values, which
you can learn about in examples like these:

* http://www2.informatik.uni-freiburg.de/~lau/students/Sprunk2008.pdf
* https://github.com/AtsushiSakai/PythonRobotics/blob/master/PathPlanning/QuinticPolynomialsPlanner/animation.gif
* https://www.dis.uniroma1.it/~deluca/rob1_en/13_TrajectoryPlanningJoints.pdf

OkapiLib, through `Pathfinder <https://github.com/JacisNonsense/Pathfinder>`_, does
this math for you and ties both the motion profiling and profile following actions
to the same `async controllers <../walkthrough/autonomous-movement-async.html>`_ that
are used for other simpler movements. Creating and following a 2D Motion Profile is a simple
three step process.

First, before creating any profiles, we need to create a motion profile Async Controller.
This requires first initializing a Chassis Controller (or Chassis Model) to pass into the
constructor for the controller.

.. note:: The "linear" properties of the chassis given to ``AsyncControllerFactory::motionProfile``
          are for its forward/backwards movements, not the maximum properties for turning or other
          movements.

.. highlight:: cpp
.. code-block:: cpp

   auto myChassis = okapi::ChassisControllerFactory::create(
     {-1, -2}, // Left motors
     {3, 4},   // Right motors
     AbstractMotor::gearset::red, // Torque gearset
     {4_in, 12.5_in} // 4 inch wheels, 12.5 inch wheelbase width
   );
   auto profileController = AsyncControllerFactory::motionProfile(
     1.0,  // Maximum linear velocity of the Chassis in m/s
     2.0,  // Maximum linear acceleration of the Chassis in m/s/s
     10.0, // Maximum linear jerk of the Chassis in m/s/s/s
     myChassis, // Chassis Controller
     12.5_in // Wheelbase width
   );

Next, let's create a motion profile. A profile is created with a list of points and a name.
Each of the points contains the desired x and y coordinates and heading. The points given to the
controller form a path from the first given point to the last. The path will be generated
assuming that all of the points are relative to the first, so if you pass in
an x value of ``-4_ft`` for the first point, then passing an x value of ``0_ft`` for the second
point will result in a forward movement of 4 feet.

.. note:: This function computes the set of steps for the desired profile, which
          may take some time.

.. highlight:: cpp
.. code-block:: cpp

   profileController.generatePath({
     Point{0_ft, 0_ft, 0_deg},  // Profile starting position, this will normally be (0, 0, 0)
     Point{3_ft, 0_ft, 0_deg}}, // The next point in the profile, 3 feet forward
     "A" // Profile name
     );

After the profile is created, it is added to a map of available profiles stored in the controller.
You can then set a target using the name you gave the profile.

.. highlight:: cpp
.. code-block:: cpp

   profileController.setTarget("A");

And then as with any Async Controller movement, you can call ``waitUntilSettled()``
to block program execution until the movement is finished and the robot reaches the
desired end point.

.. highlight:: cpp
.. code-block:: cpp

   profileController.waitUntilSettled();

Wrap-up
=======

In total, here is how to initialize and use a 2D motion profiling controller:

.. highlight:: cpp
.. code-block:: cpp
   :linenos:

   auto myChassis = okapi::ChassisControllerFactory::create(
     {-1, -2}, // Left motors
     {3, 4},   // Right motors
     AbstractMotor::gearset::red, // Torque gearset
     {4_in, 12.5_in} // 4 inch wheels, 12.5 inch wheelbase width
   );

   auto profileController = AsyncControllerFactory::motionProfile(
     1.0,  // Maximum linear velocity of the Chassis in m/s
     2.0,  // Maximum linear acceleration of the Chassis in m/s/s
     10.0, // Maximum linear jerk of the Chassis in m/s/s/s
     myChassis, // Chassis Controller
     12.5_in // Wheelbase width
   );

   profileController.generatePath({Point{0_ft, 0_ft, 0_deg}, Point{3_ft, 0_ft, 0_deg}}, "A");
   profileController.setTarget("A");
   profileController.waitUntilSettled();
