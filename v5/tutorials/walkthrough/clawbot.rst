=======================
Programming the Clawbot
=======================

.. contents:: :local:

Objective
=========

This tutorial will guide you through basic programming of the VEX
Clawbot.

Intended Audience
=================

This tutorial is intended for developers with some programming
experience, but with little to no experience with the PROS library. If
you haven't programmed before, we recommend checking out all the
"Introduction and Basic C Features" sections of `this tutorial
series <http://www.studytonight.com/c/overview-of-c.php>`__; you may also
benefit from the "Pointers, Arrays and Strings" sections as well
(although they aren't as pertinent).

Goals
=====

At the end of this tutorial you will have:

-  Understood the basic project structure of PROS
-  Programmed a basic chassis with "tank" control or "arcade" control
-  Programmed buttons to control the clawbot's lift
-  Programmed a joystick axis to control the clawbot's claw
-  Understood the standard subsystem module methodology
-  Programmed a dead-reckoned autonomous routine

The Clawbot 
===========

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

Creating the Project 
====================

With Atom started, you can create a new PROS project by clicking the
``PROS`` menu, then click ``Create new Project``.

Create a directory that you'd like to keep the source files for your
Clawbot project.

Pick a directory to create the new project in and click Create. The PROS
CLI will now copy the latest kernel template into the specified
directory and Atom will open it.

PROS Project Structure
======================

When you create your project, PROS will copy all of the files necessary
to build your project. The structure of the project looks like:

.. highlight:: none

::

  project
  │   project.pros        (used by PROS CLI to know kernel version and other metadata)
  │   Makefile            (instructs make how to compile your project)
  |   common.mk           (helper file for Makefile)
  │
  └───src                 (source files should go here)
  │   │   autonomous.cpp  (source for autonomous function)
  │   │   initialize.cpp  (source for initialization)
  │   │   opcontrol.cpp   (source for operator control)
  |
  └───include             (Header files should go in here)
  │   │   api.h           (Lets source files know PROS API functions)
  │   │   main.h          (Includes api.h and anything else you want to include project-wide)
  |   └───pros            (Contains all of the specific header files for the PROS API functions)
  |   └───okapi           (Contains all of the header files for OkapiLib)
  |   └───display         (Contains all of the header files for LVGL, the graphics library for the V5 screen)
  │
  └───firmware 
      │   libpros.a       (Pre-compiled PROS library)
      │   okapilib.a      (Pre-compiled OkapiLib library)
      |   v5.ld           (Instructs the linker how to construct binaries for the V5)


.. note::
   By convention, the ``opcontrol()``, ``autonomous()``, and initialize functions are separated into separate 
   files (opcontrol.cpp, autonomous.cpp, and initialize.cpp). They could be all in the same file, but it can be helpful to 
   organize your functions into multiple files to keep things from becoming messy.

Drive Control 
=============

Let's start with the simplest operator control setup for the clawbot - tank drive control. We'll map
the controller's left joystick to the left drive motor and the controller's right joystick 
to the right drive motor.

The controller joystick can be read with the following function:

.. tabs ::

   .. group-tab :: C++
      .. highlight:: cpp
      ::

         std::int32_t pros::Controller::get_analog ( pros::controller_analog_e_t channel )

   .. group-tab :: C
      .. highlight:: c
      ::

       int32_t controller_get_analog ( controller_id_e_t id,
                                        controller_analog_e_t channel )

And we'll set the motors with the following function:

.. tabs ::

   .. group-tab :: C++
      .. highlight:: cpp
      ::

         std::int32_t motor_move ( const std::int8_t voltage )

   .. group-tab :: C
      .. highlight:: c
      ::

       int32_t motor_move ( uint8_t port,
                              const int8_t voltage )
                            
Before we get started with the tank drive control, it's important to note that in C++, smart devices have
`constructors` that create the smart device object. Constructors are a standard C++ concept, and they're
very important because a constructor is necessary to define a `class` for objects like the motors and 
controllers. 

We'll be calling the constructors for the motors and controller at the beginning of ``opcontrol()``, 
and then we'll run the tank drive code.

.. tabs ::

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: opcontrol.cpp 
         :linenos:

         #define LEFT_WHEELS_PORT 1
         #define RIGHT_WHEELS_PORT 10

         void opcontrol() {
           pros::Motor left_wheels (LEFT_WHEELS_PORT);
           pros::Motor right_wheels (RIGHT_WHEELS_PORT, true); // This reverses the motor
           pros::Controller master (CONTROLLER_MASTER);

           while (true) {
             left_wheels.move(master.get_analog(ANALOG_LEFT_Y));
             right_wheels.move(master.get_analog(ANALOG_RIGHT_Y));

             pros::delay(2);
           }
         }

   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: opcontrol.c
         :linenos:

         #define LEFT_WHEELS_PORT 1
         #define RIGHT_WHEELS_PORT 10

         void opcontrol() {
           while (true) {
             int left = controller_get_analog(CONTROLLER_MASTER, ANALOG_LEFT_Y);
             int right = controller_get_analog(CONTROLLER_MASTER, ANALOG_RIGHT_Y);
             right *= -1; // This will reverse the right motor
             motor_move(LEFT_WHEELS_PORT, left);
             motor_move(RIGHT_WHEELS_PORT, right);

             delay(2);
           }
         }

To test this code, run the following commands in the terminal window to create, build, and upload the code.

.. code :: bash

    prosv5 make
    prosv5 upload

These 2 commands can be simplified to ```prosv5 mu``.

Arcade Control 
==============

While tank drive control is perfectly suitable for the driving style of some individuals, it is worth
covering the arcade control method as well. This is similar to the movement style of many video games,
where one joystick axis covers forward/backward movement and the other joystick covers turning.

We will take the previous tank drive control code and modify it slightly to become arcade control. 
The sum or difference of the power and turn joysticks will be the power values sent to the left and right 
wheels. 

.. tabs ::

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: opcontrol.cpp 
         :linenos:

         #define LEFT_WHEELS_PORT 1
         #define RIGHT_WHEELS_PORT 10

         void opcontrol() {
           pros::Motor left_wheels (LEFT_WHEELS_PORT);
           pros::Motor right_wheels (RIGHT_WHEELS_PORT, true);
           pros::Controller master (CONTROLLER_MASTER);

           while (true) {
             int power = master.get_analog(ANALOG_LEFT_Y);
             int turn = master.get_analog(ANALOG_RIGHT_X);
             int left = power + turn;
             int right = power - turn;
             left_wheels.move(left);
             right_wheels.move(right);

             pros::delay(2);
           }
         }

   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: opcontrol.c
         :linenos:

         #define LEFT_WHEELS_PORT 1
         #define RIGHT_WHEELS_PORT 10

         void opcontrol() {
           while (true) {
             int power = controller_get_analog(CONTROLLER_MASTER, ANALOG_LEFT_Y);
             int turn = controller_get_analog(CONTROLLER_MASTER, ANALOG_RIGHT_X);
             int left = power + turn;
             int right = power - turn;
             right *= -1; // This reverses the right motor
             motor_move(LEFT_WHEELS_PORT, left);
             motor_move(RIGHT_WHEELS_PORT, right);

             delay(2);
           }
         }


As with the tank drive code, this can be uploaded with the ``prosv5 mu`` command.

Arm Control 
===========

Next, let's control the clawbot's arm. This will not require the use of a joystick, but instead 
we will use the controller's buttons. 

We will use the following function to read the button press from the controller:

.. tabs ::

   .. group-tab :: C++
      .. highlight:: cpp
      ::

         std::int32_t pros::Controller::get_digital ( pros::controller_digital_e_t button )

   .. group-tab :: C
      .. highlight:: c
      ::

       int32_t controller_get_digital ( controller_id_e_t id,
                                        controller_digital_e_t button )

We will use a different motor movement function than on the drivetrain. By using the velocity-controlled 
movement functions, we can ensure that the lift moves at a constant speed regardless of the weight that 
the lift is holding.

.. tabs ::

   .. group-tab :: C++
      .. highlight:: cpp
      ::

         std::int32_t pros::Motor::move_velocity ( const std::int32_t velocity )

   .. group-tab :: C
      .. highlight:: c
      ::
        
        int32_t motor_move_velocity ( uint8_t port, 
                                      const int32_t velocity )

To actuate the lift, we will check if the upmost right trigger is pressed or if the bottommost right trigger
is pressed on the controller, and move the lift in that direction if so.

.. tabs ::

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: opcontrol.cpp 
         :linenos:

         #define LEFT_WHEELS_PORT 1
         #define RIGHT_WHEELS_PORT 10
         #define ARM_PORT 8

         void opcontrol() {
           pros::Motor left_wheels (LEFT_WHEELS_PORT);
           pros::Motor right_wheels (RIGHT_WHEELS_PORT, true);
           pros::Motor arm (ARM_PORT, MOTOR_GEARSET_36); // The arm motor has the 100rpm (red) gearset
           pros::Controller master (CONTROLLER_MASTER);

           while (true) {
             int power = master.get_analog(ANALOG_LEFT_Y);
             int turn = master.get_analog(ANALOG_RIGHT_X);
             int left = power + turn;
             int right = power - turn;
             left_wheels.move(left);
             right_wheels.move(right);

             if (master.get_digital(DIGITAL_R1)) {
               arm.move_velocity(100); // This is 100 because it's a 100rpm motor
             }
             else if (master.get_digital(DIGITAL_R2)) {
               arm.move_velocity(-100);
             }
             else {
               arm.move_velocity(0);
             }

             pros::delay(2);
           }
         }

   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: opcontrol.c
         :linenos:

         #define LEFT_WHEELS_PORT 1
         #define RIGHT_WHEELS_PORT 10
         #define ARM_PORT 8

         void opcontrol() {
           motor_set_gearing(ARM_PORT, MOTOR_GEARSET_36); // Establish that there is a 100rpm (red) gearset in the arm motor
           while (true) {
             int power = controller_get_analog(CONTROLLER_MASTER, ANALOG_LEFT_Y);
             int turn = controller_get_analog(CONTROLLER_MASTER, ANALOG_RIGHT_X);
             int left = power + turn;
             int right = power - turn;
             right *= -1; // This reverses the right motor
             motor_move(LEFT_WHEELS_PORT, left);
             motor_move(RIGHT_WHEELS_PORT, right);

             if (master.get_digital(DIGITAL_R1)) {
               motor_move_velocity(ARM_PORT, 100); // This is 100 because it's a 100rpm motor
             }
             else if (master.get_digital(DIGITAL_R2)) {
               motor_move_velocity(ARM_PORT, -100);
             }
             else {
               motor_move_velocity(ARM_PORT, 0);
             }

             delay(2);
           }
         }
       
Claw Control 
============

We will control the claw in the same manner as the lift, by toggling its movement with a controller button.

.. tabs ::

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: opcontrol.cpp 
         :linenos:

         #define LEFT_WHEELS_PORT 1
         #define RIGHT_WHEELS_PORT 10
         #define ARM_PORT 8
         #define CLAW_PORT 3

         void opcontrol() {
           pros::Motor left_wheels (LEFT_WHEELS_PORT);
           pros::Motor right_wheels (RIGHT_WHEELS_PORT, true);
           pros::Motor arm (ARM_PORT, GEARSET_36); // The arm motor has the 100rpm (red) gearset
           pros::Motor claw (CLAW_PORT, GEARSET_36);
           pros::Controller master (CONTROLLER_MASTER);

           while (true) {
             int power = master.get_analog(ANALOG_LEFT_Y);
             int turn = master.get_analog(ANALOG_RIGHT_X);
             int left = power + turn;
             int right = power - turn;
             left_wheels.move(left);
             right_wheels.move(right);

             if (master.get_digital(DIGITAL_R1)) {
               arm.move_velocity(100); // This is 100 because it's a 100rpm motor
             }
             else if (master.get_digital(DIGITAL_R2)) {
               arm.move_velocity(-100);
             }
             else {
               arm.move_velocity(0);
             }

             if (master.get_digital(DIGITAL_L1)) {
               claw.move_velocity(100);
             }
             else if (master.get_digital(DIGITAL_L2)) {
               claw.move_velocity(-100);
             }
             else {
               claw.move_velocity(0);
             }

             pros::delay(2);
           }
         }

   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: opcontrol.c
         :linenos:

         #define LEFT_WHEELS_PORT 1
         #define RIGHT_WHEELS_PORT 10
         #define ARM_PORT 8
         #define CLAW_PORT 3

         void opcontrol() {
           motor_set_gearing(ARM_PORT, MOTOR_GEARSET_36); // Establish that there is a 100rpm (red) gearset in the arm motor
           motor_set_gearing(CLAW_PORT, MOTOR_GEARSET_36);
           while (true) {
             int power = controller_get_analog(CONTROLLER_MASTER, ANALOG_LEFT_Y);
             int turn = controller_get_analog(CONTROLLER_MASTER, ANALOG_RIGHT_X);
             int left = power + turn;
             int right = power - turn;
             right *= -1; // This reverses the right motor
             motor_move(LEFT_WHEELS_PORT, left);
             motor_move(RIGHT_WHEELS_PORT, right);

             if (master.get_digital(DIGITAL_R1)) {
               motor_move_velocity(ARM_PORT, 100); // This is 100 because it's a 100rpm motor
             }
             else if (master.get_digital(DIGITAL_R2)) {
               motor_move_velocity(ARM_PORT, -100);
             }
             else {
               motor_move_velocity(ARM_PORT, 0);
             }

             if (master.get_digital(DIGITAL_R1)) {
               motor_move_velocity(CLAW_PORT, 100); // This is 100 because it's a 100rpm motor
             }
             else if (master.get_digital(DIGITAL_R2)) {
               motor_move_velocity(CLAW_PORT, -100);
             }
             else {
               motor_move_velocity(CLAW_PORT, 0);
             }

             delay(2);
           }
         }

Reading the Switches 
====================

The bump switches, or buttons, are plugged into the ADI and attached to the rear of the robot. We'll 
monitor the status of the bump switches, and prevent the robot from driving backwards if the switches are 
pressed.

We will be using the digital reading functionality of the ADI for this.

.. tabs ::

   .. group-tab :: C++
      .. highlight:: cpp
      ::

         std::int32_t pros::ADIDigitalIn::get_value ( ) const

   .. group-tab :: C
      .. highlight:: c
      ::
        
        int32_t adi_get_value (uint8_t port )

And here is the updated code:

.. tabs ::

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: opcontrol.cpp 
         :linenos:

         #define LEFT_WHEELS_PORT 1
         #define RIGHT_WHEELS_PORT 10
         #define ARM_PORT 8
         #define CLAW_PORT 3

         #define LEFT_BUMPER_PORT 'a'
         #define RIGHT_BUMPER_PORT 'b'

         void opcontrol() {
           pros::Motor left_wheels (LEFT_WHEELS_PORT);
           pros::Motor right_wheels (RIGHT_WHEELS_PORT, true);
           pros::Motor arm (ARM_PORT, MOTOR_GEARSET_36); // The arm motor has the 100rpm (red) gearset
           pros::Motor claw (CLAW_PORT, MOTOR_GEARSET_36);

           pros::ADIDigitalIn left_bumper (LEFT_BUMPER_PORT);
           pros::ADIDigitalIn right_bumper (RIGHT_BUMPER_PORT);

           pros::Controller master (CONTROLLER_MASTER);

           while (true) {
             int power = master.get_analog(ANALOG_LEFT_Y);
             int turn = master.get_analog(ANALOG_RIGHT_X);
             int left = power + turn;
             int right = power - turn;
             
             if (left_bumper.get_value() || right_bumper.get_value()) {
               // One of the bump switches is currently pressed
               if (left < 0) {
                 left = 0;
               }
               if (right < 0) {
                 right = 0;
               }
             }
             left_wheels.move(left);
             right_wheels.move(right);

             if (master.get_digital(DIGITAL_R1)) {
               arm.move_velocity(100); // This is 100 because it's a 100rpm motor
             }
             else if (master.get_digital(DIGITAL_R2)) {
               arm.move_velocity(-100);
             }
             else {
               arm.move_velocity(0);
             }

             if (master.get_digital(DIGITAL_L1)) {
               claw.move_velocity(100);
             }
             else if (master.get_digital(DIGITAL_L2)) {
               claw.move_velocity(-100);
             }
             else {
               claw.move_velocity(0);
             }

             pros::delay(2);
           }
         }

   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: opcontrol.c
         :linenos:

         #define LEFT_WHEELS_PORT 1
         #define RIGHT_WHEELS_PORT 10
         #define ARM_PORT 8
         #define CLAW_PORT 3

         #define LEFT_BUMPER_PORT 'a'
         #define RIGHT_BUMPER_PORT 'b'

         void opcontrol() {
           motor_set_gearing(ARM_PORT, MOTOR_GEARSET_36); // Establish that there is a 100rpm (red) gearset in the arm motor
           motor_set_gearing(CLAW_PORT, MOTOR_GEARSET_36);

           adi_port_set_config(LEFT_BUMPER_PORT, ADI_DIGITAL_IN);
           adi_port_set_config(RIGHT_BUMPER_PORT, ADI_DIGITAL_IN);
           while (true) {
             int power = controller_get_analog(CONTROLLER_MASTER, ANALOG_LEFT_Y);
             int turn = controller_get_analog(CONTROLLER_MASTER, ANALOG_RIGHT_X);
             int left = power + turn;
             int right = power - turn;
             
             if (adi_port_get_value(LEFT_BUMPER_PORT) || adi_port_get_value(RIGHT_BUMPER_PORT)) {
               // One of the bump switches is currently pressed
               if (left < 0) {
                 left = 0;
               }
               if (right < 0) {
                 right = 0;
               }
             }
             right *= -1; // This reverses the right motor
             motor_move(LEFT_WHEELS_PORT, left);
             motor_move(RIGHT_WHEELS_PORT, right);

             if (master.get_digital(DIGITAL_R1)) {
               motor_move_velocity(ARM_PORT, 100); // This is 100 because it's a 100rpm motor
             }
             else if (master.get_digital(DIGITAL_R2)) {
               motor_move_velocity(ARM_PORT, -100);
             }
             else {
               motor_move_velocity(ARM_PORT, 0);
             }

             if (master.get_digital(DIGITAL_R1)) {
               motor_move_velocity(CLAW_PORT, 100); // This is 100 because it's a 100rpm motor
             }
             else if (master.get_digital(DIGITAL_R2)) {
               motor_move_velocity(CLAW_PORT, -100);
             }
             else {
               motor_move_velocity(CLAW_PORT, 0);
             }

             delay(2);
           }
         }

We will use a similar technique for reading the limit switch. If the limit switch is pressed, then 
we will prevent the lift from being driven down further.

.. tabs ::

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: opcontrol.cpp 
         :linenos:

         #define LEFT_WHEELS_PORT 1
         #define RIGHT_WHEELS_PORT 10
         #define ARM_PORT 8
         #define CLAW_PORT 3

         #define LEFT_BUMPER_PORT 'a'
         #define RIGHT_BUMPER_PORT 'b'
         #define ARM_LIMIT_SWITCH_PORT 'h'

         void opcontrol() {
           pros::Motor left_wheels (LEFT_WHEELS_PORT);
           pros::Motor right_wheels (RIGHT_WHEELS_PORT, true);
           pros::Motor arm (ARM_PORT, MOTOR_GEARSET_36); // The arm motor has the 100rpm (red) gearset
           pros::Motor claw (CLAW_PORT, MOTOR_GEARSET_36);

           pros::ADIDigitalIn left_bumper (LEFT_BUMPER_PORT);
           pros::ADIDigitalIn right_bumper (RIGHT_BUMPER_PORT);
           pros::ADIDigitalIn arm_limit (ARM_LIMIT_SWITCH_PORT);

           pros::Controller master (CONTROLLER_MASTER);

           while (true) {
             int power = master.get_analog(ANALOG_LEFT_Y);
             int turn = master.get_analog(ANALOG_RIGHT_X);
             int left = power + turn;
             int right = power - turn;

             if (left_bumper.get_value() || right_bumper.get_value()) {
               // One of the bump switches is currently pressed
               if (left < 0) {
                 left = 0;
               }
               if (right < 0) {
                 right = 0;
               }
             }
             left_wheels.move(left);
             right_wheels.move(right);

             if (master.get_digital(DIGITAL_R1)) {
               arm.move_velocity(100); // This is 100 because it's a 100rpm motor
             }
             else if (master.get_digital(DIGITAL_R2) && !arm_limit.get_value()) {
               arm.move_velocity(-100);
             }
             else {
               arm.move_velocity(0);
             }

             if (master.get_digital(DIGITAL_L1)) {
               claw.move_velocity(100);
             }
             else if (master.get_digital(DIGITAL_L2)) {
               claw.move_velocity(-100);
             }
             else {
               claw.move_velocity(0);
             }

             pros::delay(2);
           }
         }

   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: opcontrol.c
         :linenos:

         #define LEFT_WHEELS_PORT 1
         #define RIGHT_WHEELS_PORT 10
         #define ARM_PORT 8
         #define CLAW_PORT 3

         #define LEFT_BUMPER_PORT 'a'
         #define RIGHT_BUMPER_PORT 'b'
         #define ARM_LIMIT_SWITCH_PORT 'h'

         void opcontrol() {
           motor_set_gearing(ARM_PORT, GEARSET_36); // Establish that there is a 100rpm (red) gearset in the arm motor
           motor_set_gearing(CLAW_PORT, GEARSET_36);

           adi_port_set_config(LEFT_BUMPER_PORT, ADI_DIGITAL_IN);
           adi_port_set_config(RIGHT_BUMPER_PORT, ADI_DIGITAL_IN);
           adi_port_set_config(ARM_LIMIT_SWITCH_PORT, ADI_DIGITAL_IN);
           while (true) {
             int power = controller_get_analog(CONTROLLER_MASTER, CONTROLLER_ANALOG_LEFT_Y);
             int turn = controller_get_analog(CONTROLLER_MASTER, CONTROLLER_ANALOG_RIGHT_X);
             int left = power + turn;
             int right = power - turn;
             
             if (adi_port_get_value(LEFT_BUMPER_PORT) || adi_port_get_value(RIGHT_BUMPER_PORT)) {
               // One of the bump switches is currently pressed
               if (left < 0) {
                 left = 0;
               }
               if (right < 0) {
                 right = 0;
               }
             }
             right *= -1; // This reverses the right motor
             motor_move(LEFT_WHEELS_PORT, left);
             motor_move(RIGHT_WHEELS_PORT, right);

             if (master.get_digital(CONTROLLER_DIGITAL_R1)) {
               motor_move_velocity(ARM_PORT, 100); // This is 100 because it's a 100rpm motor
             }
             else if (master.get_digital(CONTROLLER_DIGITAL_R2) && !adi_port_get_value(ARM_LIMIT_SWITCH_PORT)) {
               motor_move_velocity(ARM_PORT, -100);
             }
             else {
               motor_move_velocity(ARM_PORT, 0);
             }

             if (master.get_digital(CONTROLLER_DIGITAL_R1)) {
               motor_move_velocity(CLAW_PORT, 100); // This is 100 because it's a 100rpm motor
             }
             else if (master.get_digital(CONTROLLER_DIGITAL_R2)) {
               motor_move_velocity(CLAW_PORT, -100);
             }
             else {
               motor_move_velocity(CLAW_PORT, 0);
             }

             delay(2);
           }
         }
