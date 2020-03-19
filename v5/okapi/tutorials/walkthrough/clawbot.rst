=======================
Programming the Clawbot
=======================

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.x.x and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

.. note:: An updated version of the clawbot tutorial for Okapi 4.x.x and above can be found
         `here <https://okapilib.github.io/OkapiLib/md_docs_tutorials_walkthrough_clawbot.html>`_.

Objective:
==========

This tutorial will guide you through basic programming of the VEX
Clawbot.

Intended Audience:
==================

This tutorial is intended for developers with some programming experience, but
with little to no experience with the PROS library. If you haven't programmed
before, we recommend checking out all the "Introduction and Basic C++ Features"
sections of `this tutorial series
<https://www.studytonight.com/cpp/introduction-to-cpp.php>`__; be sure to check
out the "Classes and Objects" section as well.

Goals:
======

At the end of this tutorial you will have:

-  Understood the basic organization of an OkapiLib project
-  Programmed a basic chassis with "tank" control or "arcade" control
-  Programmed buttons to control the clawbot's lift
-  Programmed a joystick axis to control the clawbot's claw
-  Understood the standard subsystem module methodology
-  Programmed an encoder-based autonomous routine

Here's the robot we'll be programming:

.. image:: /images/tuts/clawbot1.jpg

You can follow VEX's tutorial for building this robot `here <https://v5beta.vex.com/parent-wrapper.php?id=v5-with-clawbot>`_.

For the purposes of this tutorial, we've plugged in our motors into the
following ports:

+--------+----------------+--------+---------------+
| Port   | Description    | Port   | Description   |
+========+================+========+===============+
| 1      | Left Wheels    | 11     |               |
+--------+----------------+--------+---------------+
| 2      |                | 12     |               |
+--------+----------------+--------+---------------+
| 3      | Claw Motor     | 13     |               |
+--------+----------------+--------+---------------+
| 4      |                | 14     |               |
+--------+----------------+--------+---------------+
| 5      | Vision Sensor  | 15     |               |
+--------+----------------+--------+---------------+
| 6      |                | 16     |               |
+--------+----------------+--------+---------------+
| 7      |                | 17     |               |
+--------+----------------+--------+---------------+
| 8      | Arm Motor      | 18     |               |
+--------+----------------+--------+---------------+
| 9      |                | 19     |               |
+--------+----------------+--------+---------------+
| 10     | Right Wheels   | 20     |               |
+--------+----------------+--------+---------------+

Port 21: Radio

For the ADI:

+--------+----------------+--------+---------------+
| Port   | Description    | Port   | Description   |
+========+================+========+===============+
| A      | Left Bumper    | E      |               |
+--------+----------------+--------+---------------+
| B      | Right Bumper   | F      |               |
+--------+----------------+--------+---------------+
| C      |                | G      |               |
+--------+----------------+--------+---------------+
| D      |                | H      | Arm Limit     |
+--------+----------------+--------+---------------+


To create, build, and upload a new project in PROS 3, run

.. code :: bash

    prosv5 conduct new <path_to_project>
    prosv5 make
    prosv5 upload
    prosv5 terminal


The last 3 commands can be simplified to :code:`prosv5 mut`.

Tank/Arcade Control
-------------------

OkapiLib uses something called a `ChassisController
<../../api/chassis/controller/abstract-chassis-controller.html>`_ to interact
with a robot's chassis. This interface lets you use open-loop control methods
to drive the robot around with a joystick, like tank and arcade control. It
also provides methods to move the robot programmatically, like driving in an
arc or only powering one side of the chassis. It also provides closed-loop
control methods to drive a specific distance or turn a specific angle.

There are two main subclasses we can use: `ChassisControllerIntegrated
<../../api/chassis/controller/chassis-controller-integrated.html>`_ and
`ChassisControllerPID
<../../api/chassis/controller/chassis-controller-pid.html>`_.
`ChassisControllerIntegrated
<../../api/chassis/controller/chassis-controller-integrated.html>`_ uses the V5
motor's built-in position and velocity control to move the robot around. **This
class is the easiest to use**, and should be used by default. The other class,
`ChassisControllerPID
<../../api/chassis/controller/chassis-controller-pid.html>`_, uses two PID
controllers running on the V5 brain and sends velocity commands to the motors.

We will be using `ChassisControllerIntegrated
<../../api/chassis/controller/chassis-controller-integrated.html>`_ for this
tutorial. Let's initialize it with our two motors in ports ``1`` and ``10``,
with the motor in port ``1`` reversed.

.. highlight:: cpp
.. code-block:: cpp
   :linenos:

   using namespace okapi;

   // Chassis Controller - lets us drive the robot around with open- or closed-loop control
   auto drive = ChassisControllerFactory::create(-1, 10);

Next, let's setup tank or arcade control. `ChassisController
<../../api/chassis/controller/abstract-chassis-controller.html>`_ provides
methods for us to use, we just need to pass in joystick values which have been
scaled to be in the range ``[-1, 1]``. OkapiLib's `Controller
<../../api/device/controller.html>`_ returns analog values in the range ``[-1,
1]``, so we don't need to do any division ourselves.

.. tabs ::
   .. tab :: Tank drive
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         // Joystick to read analog values for tank or arcade control.
         // Master controller by default.
         Controller masterController;

         while (true) {
           // Tank drive with left and right sticks.
           drive.tank(masterController.getAnalog(ControllerAnalog::leftY),
                      masterController.getAnalog(ControllerAnalog::rightY));

           // Wait and give up the time we don't need to other tasks.
           // Additionally, joystick values, motor telemetry, etc. all updates every 10 ms.
           pros::delay(10);
         }

   .. tab :: Arcade drive
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         // Joystick to read analog values for tank or arcade control.
         // Master controller by default.
         Controller masterController;

         while (true) {
           // Arcade drive with the left stick.
           drive.arcade(masterController.getAnalog(ControllerAnalog::leftY),
                        masterController.getAnalog(ControllerAnalog::leftX));

           // Wait and give up the time we don't need to other tasks.
           // Additionally, joystick values, motor telemetry, etc. all updates every 10 ms.
           pros::delay(10);
         }

Arm Control
-----------

This section will focus on controlling the clawbot's arm. There are two parts
to this: first, the arm has a limit switch at the bottom of its travel range,
so we should use that button to tell when we've hit a hard stop; second, the
arm should be user-controlled with two buttons on the controller.

First, let's focus on the limit switch at the bottom of the arm's travel range.
When the arm hits this button, the arm motor should stop trying to make the arm
move down. We can accomplish this using an if-statement that checks whether the
button is pressed.

We can define our button as an `ADIButton <../../api/device/button/adi-button.html>`_:

.. highlight:: cpp
.. code-block:: cpp

   ADIButton armLimitSwitch('H');

And the arm motor:

.. highlight:: cpp
.. code-block:: cpp

   Motor armMotor = 8_rmtr;

The ``_mtr`` syntax is called a user-defined literal. It's a succinct way of
initializing a motor, and is equivalent to calling the normal constructor. For
example,

.. highlight:: cpp
.. code-block:: cpp

   Motor foo = 1_mtr; // Motor in port 1
   Motor foo(1);      // Motor in port 1

   Motor bar = 1_rmtr; // Reversed motor in port 1
   Motor bar(1, true); // Reversed motor in port 1

Then we can check if it's pressed and stop powering the arm motor:

.. highlight:: cpp
.. code-block:: cpp

   // Don't power the arm if it is all the way down
   if (armLimitSwitch.isPressed()) {
     armMotor.moveVoltage(0);
   } else {
     // Normal arm control
   }

Next, let's add the logic to make the arm user-controller with two buttons on
the controller. First, we need to define our two controller buttons as
`ControllerButton <../../api/device/button/controller-button.html>`_ instances:

.. highlight:: cpp
.. code-block:: cpp

   ControllerButton armUpButton(ControllerDigital::A);
   ControllerButton armDownButton(ControllerDigital::B);

Then we can use them along with our limit switch logic from above to control
the arm:

.. highlight:: cpp
.. code-block:: cpp
   :linenos:

   // Don't power the arm if it is all the way down
   if (armLimitSwitch.isPressed()) {
     armMotor.moveVoltage(0);
   } else {
     // Else, the arm isn't all the way down
     if (armUpButton.isPressed()) {
       armMotor.moveVoltage(12000); // 12,000 millivolts
     } else if (armDownButton.isPressed()) {
       armMotor.moveVoltage(-12000); // -12,000 millivolts
     } else {
       armMotor.moveVoltage(0); // 0 millivolts, the motor will coast
     }
   }

Autonomous Routine
------------------

To illustrate the closed-loop control method that `ChassisController
<../../api/chassis/controller/abstract-chassis-controller.html>`_ has, let's
make a simple autonomous routine to drive in a square.

Writing an autonomous routine is much easier when distances and turns can be
done with real life units, so let's configure the `ChassisController
<../../api/chassis/controller/abstract-chassis-controller.html>`_ with the
clawbot chassis's dimensions. This will require a change to the drive's
constructors; two additional parameters are needed. The first is the gearset of
the motors on the chassis, in this example we will use the standard Green
cartridges. The second is a `list
<http://www.cplusplus.com/reference/initializer_list/initializer_list/>`_
containing firstly the wheel diameter (4") and secondly, the width of the wheel
track (11.5").

.. highlight:: cpp
.. code-block:: cpp
   :linenos:

   // Chassis Controller - lets us drive the robot around with open- or closed-loop control
   auto drive = ChassisControllerFactory::create(
     1, 10,
     AbstractMotor::gearset::green,
     {4_in, 11.5_in}
   );

After this, you can move the chassis in actual units, such as inches and
degrees.

.. highlight:: cpp
.. code-block:: cpp
   :linenos:

     for (int i = 0; i < 4; i++) {
       drive.moveDistance(12_in); // Drive forward 12 inches
       drive.turnAngle(90_deg);   // Turn in place 90 degrees
     }

Wrap Up
-------

This is the final product from this tutorial.

.. tabs ::
   .. tab :: Tank drive
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         // Chassis Controller - lets us drive the robot around with open- or closed-loop control
         auto drive = ChassisControllerFactory::create(
           1, 10,
           AbstractMotor::gearset::green,
           {4_in, 11.5_in}
         );

         void opcontrol() {
           // Joystick to read analog values for tank or arcade control
           // Master controller by default
           Controller masterController;

           // Arm related objects
           ADIButton armLimitSwitch('H');
           ControllerButton armUpButton(ControllerDigital::A);
           ControllerButton armDownButton(ControllerDigital::B);
           Motor armMotor = 8_rmtr;

           // Button to run our sample autonomous routine
           ControllerButton runAutoButton(ControllerDigital::X);

           while (true) {
             // Tank drive with left and right sticks
             drive.tank(masterController.getAnalog(ControllerAnalog::leftY),
                        masterController.getAnalog(ControllerAnalog::rightY));

             // Don't power the arm if it is all the way down
             if (armLimitSwitch.isPressed()) {
               armMotor.moveVoltage(0);
             } else {
               // Else, the arm isn't all the way down
               if (armUpButton.isPressed()) {
                 armMotor.moveVoltage(12000);
               } else if (armDownButton.isPressed()) {
                 armMotor.moveVoltage(-12000);
               } else {
                 armMotor.moveVoltage(0);
               }
             }

             // Run the test autonomous routine if we press the button
             if (runAutoButton.changedToPressed()) {
               // Drive the robot in a square pattern using closed-loop control
               for (int i = 0; i < 4; i++) {
                 drive.moveDistance(12_in); // Drive forward 12 inches
                 drive.turnAngle(90_deg);   // Turn in place 90 degrees
               }
             }

             // Wait and give up the time we don't need to other tasks.
             // Additionally, joystick values, motor telemetry, etc. all updates every 10 ms.
             pros::delay(10);
           }
         }

   .. tab :: Arcade drive
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         // Chassis Controller - lets us drive the robot around with open- or closed-loop control
         auto drive = ChassisControllerFactory::create(
           1, 10,
           AbstractMotor::gearset::green,
           {4_in, 11.5_in}
         );

         void opcontrol() {
           // Joystick to read analog values for tank or arcade control
           // Master controller by default
           Controller masterController;

           // Arm related objects
           ADIButton armLimitSwitch('H');
           ControllerButton armUpButton(ControllerDigital::A);
           ControllerButton armDownButton(ControllerDigital::B);
           Motor armMotor = 8_rmtr;

           // Button to run our sample autonomous routine
           ControllerButton runAutoButton(ControllerDigital::X);

           while (true) {
             // Arcade drive with the left stick
             drive.arcade(masterController.getAnalog(ControllerAnalog::leftY),
                          masterController.getAnalog(ControllerAnalog::rightY));

             // Don't power the arm if it is all the way down
             if (armLimitSwitch.isPressed()) {
               armMotor.moveVoltage(0);
             } else {
               // Else, the arm isn't all the way down
               if (armUpButton.isPressed()) {
                 armMotor.moveVoltage(12000);
               } else if (armDownButton.isPressed()) {
                 armMotor.moveVoltage(-12000);
               } else {
                 armMotor.moveVoltage(0);
               }
             }

             // Run the test autonomous routine if we press the button
             if (runAutoButton.changedToPressed()) {
               // Drive the robot in a square pattern using closed-loop control
               for (int i = 0; i < 4; i++) {
                 drive.moveDistance(12_in); // Drive forward 12 inches
                 drive.turnAngle(90_deg);   // Turn in place 90 degrees
               }
             }

             // Wait and give up the time we don't need to other tasks.
             // Additionally, joystick values, motor telemetry, etc. all updates every 10 ms.
             pros::delay(10);
           }
         }
