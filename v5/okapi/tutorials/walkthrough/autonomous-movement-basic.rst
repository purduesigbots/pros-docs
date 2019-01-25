===================
Moving Autonomously
===================

.. note:: This tutorial covers only sequential movement (only one subsystem operating at a time).
          For a tutorial on asynchronous movements, see `Asynchronous Autonomous Movement <./autonomous-movement-async.html>`_.

Arguably the most fundamental task with regard to creating a good autonomous routine
is ensuring consistent and accurate movement of the chassis. Robotic autonomous movement
is an unsolved problem even among professional engineers, so it is obviously a difficult
task. OkapiLib makes it easy to get reasonably accurate autonomous movements.

The basis for this autonomous movement is the ``ChassisController`` class. Take a look at its
`API <../../api/chassis/controller/chassis-controller-integrated.html>`_ for more detailed info on it.

We'll use a ``ChassisControllerIntegrated`` for this tutorial, using the V5 motors' onboard
PID makes setup a much quicker and easier process (No PID tuning needed!).

Let's start by creating the ``ChassisControllerIntegrated`` with drive motors in ports 1 and 2:

.. highlight: cpp
.. code-block:: cpp
   :linenos:

   using namespace okapi;

   const int DRIVE_MOTOR_LEFT = 1;
   const int DRIVE_MOTOR_RIGHT = 2;

   auto chassis = ChassisControllerFactory::create(DRIVE_MOTOR_LEFT, DRIVE_MOTOR_RIGHT);

Now that we've created a ChassisController, let's start moving around. There are two fundamental movement types -
``moveDistance()`` and ``turnAngle()``, for moving forward/backward and turning on a point.

.. highlight: cpp
.. code-block:: cpp
   :linenos:

   using namespace okapi;

   const int DRIVE_MOTOR_LEFT = 1;
   const int DRIVE_MOTOR_RIGHT = 2;

   auto chassis = ChassisControllerFactory::create(DRIVE_MOTOR_LEFT, DRIVE_MOTOR_RIGHT);

   void autonomous() {
     // Move to first goal
     chassis.moveDistance(1000);
     // Turn to face second goal
     chassis.turnAngle(100);
     // Drive toward second goal
     chassis.moveDistance(1500);
   }

If you'd like to set movements in real life units, that's possible as well. Just pass in the
drive's gearset and dimensions, and then use the appropriate suffix
for the units that you would like the movement to occur in.

.. highlight: cpp
.. code-block:: cpp
   :linenos:

   using namespace okapi;

   const int DRIVE_MOTOR_LEFT = 1;
   const int DRIVE_MOTOR_RIGHT = 2;
   const auto WHEEL_DIAMETER = 4_in;
   const auto CHASSIS_WIDTH = 13.5_in;

   auto chassis = ChassisControllerFactory::create(
     DRIVE_MOTOR_LEFT, DRIVE_MOTOR_RIGHT,
     AbstractMotor::gearset::red,
     {WHEEL_DIAMETER, CHASSIS_WIDTH}
   );

   void autonomous() {
     // Move 1 meter to the first goal
     chassis.moveDistance(1_m);
     // Turn 90 degrees to face second goal
     chassis.turnAngle(90_deg);
     // Drive 1 and a half feet toward second goal
     chassis.moveDistance(1.5_ft);
   }
