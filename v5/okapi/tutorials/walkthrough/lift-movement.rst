=============
Lift Movement
=============

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.X.X and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

In VEX, a large majority of games require the use of a lift, and it serves as a great example for controlling
non-chassis systems.

The easiest place to start with controlling a lift is having it move with joystick buttons,
as is common in a lot of op control code for the subject. The following code snippet shows how to do this:

.. highlight: cpp
.. code-block:: cpp
   :linenos:

   using namespace okapi;

   const int LIFT_MOTOR = 1; // Controlling a lift with a single motor on port 1

   ControllerButton btnUp(E_CONTROLLER_DIGITAL_R1);
   ControllerButton btnDown(E_CONTROLLER_DIGITAL_R2);
   Motor lift(LIFT_MOTOR);

   void opcontrol() {
     while (true) {
       if (btnUp.isPressed()) {
         lift.moveVoltage(12000);
       } else if (btnDown.isPressed()) {
         lift.moveVoltage(-12000);
       } else {
         lift.moveVoltage(0);
       }

       pros::delay(10);
     }
   }

One improvement that can be made to this lift code would be a switch to using set heights and a PID controller.
This is a common approach used for stacking games where movement to precise heights is important.

.. highlight: cpp
.. code-block:: cpp
   :linenos:

   using namespace okapi;

   const int LIFT_MOTOR = 1; // Controlling a lift with a single motor on port 1

   const int NUM_HEIGHTS = 4;
   const int height1 = 20;
   const int height2 = 60;
   const int height3 = 100;
   const int height4 = 140;

   const int heights[NUM_HEIGHTS] = {height1, height2, height3, height4};

   ControllerButton btnUp(E_CONTROLLER_DIGITAL_R1);
   ControllerButton btnDown(E_CONTROLLER_DIGITAL_R2);
   auto liftControl = AsyncControllerFactory::posIntegrated(LIFT_MOTOR);

   void opcontrol() {
     int goalHeight = 0;

     while (true) {
       if (btnUp.changedToPressed() && goalHeight < NUM_HEIGHTS - 1) {
         // If the goal height is not at maximum and the up button is pressed, increase the setpoint
         goalHeight++;
         liftControl.setTarget(heights[goalHeight]);
       } else if (btnDown.changedToPressed() && goalHeight > 0) {
         goalHeight--;
         liftControl.setTarget(heights[goalHeight]);
       }

       pros::delay(10);
     }
   }
