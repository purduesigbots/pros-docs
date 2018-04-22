=======================
Programming the Clawbot
=======================

.. note ::

    This tutorial is very much incomplete. This tutorial will guide you through
    creating and uploading code in the PROS 3 CLI environment.

Objective:
==========

This tutorial will guide you through basic programming of the VEX
Clawbot.

Intended Audience:
==================

This tutorial is intended for developers with some programming experience, but with little to no
experience with the PROS library. If you haven't programmed before, we recommend checking out all
the "Introduction and Basic C++ Features" sections of
`this tutorial series <https://www.studytonight.com/cpp/introduction-to-cpp.php>`__; be sure to
check out the "Classes and Objects" section as well.

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

Okapi uses something called a `ChassisController <../../api/chassis/controller/chassis-controller.html>`_
to interact with a robot's chassis. This interface lets you use open-loop control methods to drive
the robot around with a joystick, like tank and arcade control. It also provides methods to move
the robot programmatically, like driving in an arc or only powering one side of the chassis. It
also provides closed-loop control methods to drive a specific distance or turn a specific angle.

There are two main subclasses we can use:
`ChassisControllerIntegrated <../../api/chassis/controller/chassis-controller-integrated.html>`_
and `ChassisControllerPID <../../api/chassis/controller/chassis-controller-pid.html>`_.
`ChassisControllerIntegrated <../../api/chassis/controller/chassis-controller-integrated.html>`_
uses the V5 motor's built-in position and velocity control to move the robot around. **This class
is the easiest to use**, and should be used by default. The other class,
`ChassisControllerPID <../../api/chassis/controller/chassis-controller-pid.html>`_, uses two PID
controllers running on the V5 brain and sends velocity commands to the motors.

We will be using
`ChassisControllerIntegrated <../../api/chassis/controller/chassis-controller-integrated.html>`_
for this tutorial. Let's initialize it now with our two motors in ports ``1`` and ``10``.

.. highlight:: cpp
::

  // Chassis Controller - lets us drive the robot around with open- or closed-loop control
  okapi::ChassisControllerIntegrated robotChassisController(1_rm, 10_m);

The ``_m`` syntax is called a used-defined literal. It's a succinct way of initializing a motor,
and is equivalent to calling the normal constructor. For example,

.. highlight:: cpp
::

  using namespace okapi::literals;
  okapi::Motor foo = 1_m; // Motor in port 1
  okapi::Motor foo(1);    // Motor in port 1

  okapi::Motor bar = 1_rm;   // Reversed motor in port 1
  okapi::Motor bar(1, true); // Reversed motor in port 1

Next, let's setup tank or arcade control.
`ChassisController <../../api/chassis/controller/chassis-controller.html>`_ provides methods for us
to use, we just need to pass in joystick values which have been scaled to be in the range
``[-1, 1]``. Okapi's `Controller <../../api/device/controller.html>`_ returns analog values in the
range ``[-1, 1]``, so we don't need to do any division ourselves.

.. tabs ::
   .. tab :: Tank drive
      .. highlight:: cpp
      ::

        // Joystick to read analog values for tank or arcade control.
        // Master controller by default.
        okapi::Controller controller;

        while (true) {
          // Tank drive with left and right sticks.
          robotChassisController.tank(controller.getAnalog(E_CONTROLLER_ANALOG_LEFT_Y),
                                      controller.getAnalog(E_CONTROLLER_ANALOG_RIGHT_Y));

          // Wait and give up the time we don't need to other tasks.
          // Additionally, joystick values, motor telemetry, etc. all updates every 10 ms.
          pros::Task::delay(10);
        }

   .. tab :: Arcade drive
      .. highlight:: cpp
      ::

        // Joystick to read analog values for tank or arcade control.
        // Master controller by default.
        okapi::Controller controller;

        while (true) {
          // Arcade drive with the left stick.
          robotChassisController.arcade(controller.getAnalog(E_CONTROLLER_ANALOG_LEFT_Y),
                                        controller.getAnalog(E_CONTROLLER_ANALOG_LEFT_X));

          // Wait and give up the time we don't need to other tasks.
          // Additionally, joystick values, motor telemetry, etc. all updates every 10 ms.
          pros::Task::delay(10);
        }

Arm Control
-----------

This section will focus on controlling the clawbot's arm. There are two parts to this: first, the
arm has a limit switch at the bottom of its travel range, so we should use that button to tell when
we've hit a hard stop; second, the arm should be user-controlled with two buttons on the
controller.

First, let's focus on the limit switch at the bottom of the arm's travel range. When the arm hits
this button, the arm motor should stop trying to make the arm move down. We can accomplish this
using an if-statement that checks whether the button is pressed.

We can define our button as an `ADIButton <../../api/device/button/adi-button.html>`_:

.. highlight:: cpp
::

  okapi::ADIButton armLimitSwitch('H');

And the arm motor:

.. highlight:: cpp
::

  okapi::Motor armMotor = 8_rm;

Then we can check if it's pressed and stop powering the arm motor:

.. highlight:: cpp
::

  // Don't power the arm if it is all the way down
  if (armLimitSwitch.isPressed()) {
    armMotor.move_voltage(0);
  } else {
    // Normal arm control
  }

Next, let's add the logic to make the arm user-controller with two buttons on the controller.
First, we need to define our two controller buttons as
`ControllerButton <../../api/device/button/controller-button.html>`_ instances:

.. highlight:: cpp
::

  okapi::ControllerButton armUpButton(E_CONTROLLER_DIGITAL_A);
  okapi::ControllerButton armDownButton(E_CONTROLLER_DIGITAL_B);

Then we can use them along with our limit switch logic from above to control the arm:

.. highlight:: cpp
::

  // Don't power the arm if it is all the way down
  if (armLimitSwitch.isPressed()) {
    armMotor.move_voltage(0);
  } else {
    // Else, the arm isn't all the way down
    if (armUpButton.isPressed()) {
      armMotor.move_voltage(127);
    } else if (armDownButton.isPressed()) {
      armMotor.move_voltage(-127);
    } else {
      armMotor.move_voltage(0);
    }
  }

Autonomous Routine
------------------

To illustrate the closed-loop control method that
`ChassisController <../../api/chassis/controller/chassis-controller.html>`_ has, let's make a
simple autonomous routine to drive in a square.

First we need to calculate the number of ticks equivalent to driving forward 12 inches. The formula for this
is:

.. tabs ::
   .. tab :: Formula
      .. highlight:: cpp
      ::

        ((ticks per wheel rotation) / ((wheel diameter) * pi)) * 12

   .. tab :: Result
     .. highlight:: cpp
     ::

       (1800 ticks / (4 in * pi)) * 12 in = 1719 ticks

Let's follow the same procedure for calculate the ticks equivalent to a 90 degree turn:

.. tabs ::
   .. tab :: Formula
      .. highlight:: cpp
      ::

        ((ticks per wheel rotation) / ((wheel diameter) * pi)) * ((center-to-center wheel distance) * (pi) * (1/4))

   .. tab :: Result
     .. highlight:: cpp
     ::

       (1800 ticks / (4 in * pi)) * (11.498 in * pi * (1/4)) = 1294 ticks

Now that we know how far we need to drive, we can program the routine. We will use
`ChassisController <../../api/chassis/controller/chassis-controller.html>`_'s ``moveDistance``
method to drive along a straight line and ``turnAngle`` method to turn in place.

.. highlight:: cpp
::

    for (int i = 0; i < 4; i++) {
      robotChassisController.moveDistance(1719); // Drive forward 12 inches
      robotChassisController.turnAngle(1294);    // Turn in place 90 degrees
    }

Wrap Up
-------

This is the final product from this tutorial.

.. tabs ::
   .. tab :: Tank drive
      .. highlight:: cpp
      ::

        using namespace okapi::literals;

        void opcontrol() {
          pros::c::task_delay(100);

          // Chassis Controller - lets us drive the robot around with open- or closed-loop control
          okapi::ChassisControllerIntegrated robotChassisController(1_rm, 10_m);

          // Joystick to read analog values for tank or arcade control
          // Master controller by default
          okapi::Controller controller;

          // Arm related objects
          okapi::ADIButton armLimitSwitch('H');
          okapi::ControllerButton armUpButton(E_CONTROLLER_DIGITAL_A);
          okapi::ControllerButton armDownButton(E_CONTROLLER_DIGITAL_B);
          okapi::Motor armMotor = 8_rm;

          // Button to run our sample autonomous routine
          okapi::ControllerButton runAutoButton(E_CONTROLLER_DIGITAL_X);

          while (true) {
            // Tank drive with left and right sticks
            robotChassisController.tank(controller.getAnalog(E_CONTROLLER_ANALOG_LEFT_Y),
                                        controller.getAnalog(E_CONTROLLER_ANALOG_RIGHT_Y));

            // Don't power the arm if it is all the way down
            if (armLimitSwitch.isPressed()) {
              armMotor.move_voltage(0);
            } else {
              // Else, the arm isn't all the way down
              if (armUpButton.isPressed()) {
                armMotor.move_voltage(127);
              } else if (armDownButton.isPressed()) {
                armMotor.move_voltage(-127);
              } else {
                armMotor.move_voltage(0);
              }
            }

            // Run the test autonomous routine if we press the button
            if (runAutoButton.changedToPressed()) {
              // Drive the robot in a square pattern using closed-loop control
              for (int i = 0; i < 4; i++) {
                robotChassisController.moveDistance(2116); // Drive forward 12 inches
                robotChassisController.turnAngle(1662);    // Turn in place 90 degrees
              }
            }

            // Wait and give up the time we don't need to other tasks.
            // Additionally, joystick values, motor telemetry, etc. all updates every 10 ms.
            pros::Task::delay(10);
          }
        }

   .. tab :: Arcade drive
      .. highlight:: cpp
      ::

        using namespace okapi::literals;

        void opcontrol() {
          pros::c::task_delay(100);

          // Chassis Controller - lets us drive the robot around with open- or closed-loop control
          okapi::ChassisControllerIntegrated robotChassisController(1_rm, 10_m);

          // Joystick to read analog values for tank or arcade control
          // Master controller by default
          okapi::Controller controller;

          // Arm related objects
          okapi::ADIButton armLimitSwitch('H');
          okapi::ControllerButton armUpButton(E_CONTROLLER_DIGITAL_A);
          okapi::ControllerButton armDownButton(E_CONTROLLER_DIGITAL_B);
          okapi::Motor armMotor = 8_rm;

          // Button to run our sample autonomous routine
          okapi::ControllerButton runAutoButton(E_CONTROLLER_DIGITAL_X);

          while (true) {
            // Arcade drive with the left stick
            robotChassisController.arcade(controller.getAnalog(E_CONTROLLER_ANALOG_LEFT_Y),
                                          controller.getAnalog(E_CONTROLLER_ANALOG_LEFT_X));

            // Don't power the arm if it is all the way down
            if (armLimitSwitch.isPressed()) {
              armMotor.move_voltage(0);
            } else {
              // Else, the arm isn't all the way down
              if (armUpButton.isPressed()) {
                armMotor.move_voltage(127);
              } else if (armDownButton.isPressed()) {
                armMotor.move_voltage(-127);
              } else {
                armMotor.move_voltage(0);
              }
            }

            // Run the test autonomous routine if we press the button
            if (runAutoButton.changedToPressed()) {
              // Drive the robot in a square pattern using closed-loop control
              for (int i = 0; i < 4; i++) {
                robotChassisController.moveDistance(2116); // Drive forward 12 inches
                robotChassisController.turnAngle(1662);    // Turn in place 90 degrees
              }
            }

            // Wait and give up the time we don't need to other tasks.
            // Additionally, joystick values, motor telemetry, etc. all updates every 10 ms.
            pros::Task::delay(10);
          }
        }
