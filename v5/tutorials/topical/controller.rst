==========
Controller
==========

.. note:: For a full list of functions for interacting with the V5 Controller, see its
          `C API <../../api/c/misc.html>`_ and `C++ API <../../api/cpp/misc.html>`_.

Feedback from the V5 Controller comes in two forms - analog and digital. The
analog data comes from the `joysticks <https://en.wikipedia.org/wiki/Analog_stick>`_,
and the digital data comes from the buttons.

The analog data is a value in the range of [-127,127], and digital data is either
1 or 0 (pressed or unpressed, respectively).

Analog Data
===========

Retrieve analog values from the V5 Controller in the following manner:

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: opcontrol.c
         :linenos:

         #define MOTOR_PORT 1

         void opcontrol() {
          while (true) {
            motor_move(MOTOR_PORT, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            delay(2);
          }
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: opcontrol.cpp
         :linenos:

         #define MOTOR_PORT 1

         void opcontrol() {
           pros::Controller master (E_CONTROLLER_MASTER);
           pros::Motor example_motor (MOTOR_PORT);
           while (true) {
             example_motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
             pros::delay(2);
           }
         }

The controller returns a range of [-127,127] for analog data, which is why the
`motor_move <../../api/c/motors.html#motor-move>`_ function is appropriate for easy
use with the controllers.

Digital Data
============

Retrieve Digital Values from the V5 Controller in the following manner:

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: opcontrol.c
         :linenos:

         #define MOTOR_PORT 1

         void opcontrol() {
          while (true) {
            if (controller_get_digital(E_CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_A)) {
              motor_move(MOTOR_PORT, 127);
            }
            else {
              motor_move(MOTOR_PORT, 0);
            }

            delay(2);
          }
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: opcontrol.cpp
         :linenos:

         #define MOTOR_PORT 1

         void opcontrol() {
           pros::Controller master (E_CONTROLLER_MASTER);
           pros::Motor example_motor (MOTOR_PORT);
           while (true) {
             if (master.get_digital(E_CONTROLLER_DIGITAL_A)) {
               example_motor = 127;
             }
             else {
               example_motor = 0;
             }

             pros::delay(2);
           }
         }
