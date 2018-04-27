======
Motors
======

.. note:: For a full list of functions for interacting with the V5 Motors, see its
          `C API <../../api/c/motors.html>`_ and `C++ API <../../api/cpp/motors.html>`_.

Initialization
==============

V5 Motors should be configured before use in your code. Configuration options like
the gearset and encoder units are important to address first thing in your user program
to ensure that functions like `motor_move_velocity <../../api/c/motors.html#motor-move-velocity>`_
will work as expected.

When declaring motors in C++, it is not necessary to set the configuration for the motor
with its constructor (beyond its port number) more than once for the given port.
An example of this is given below.

.. tabs::
   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: initialize.c
         :linenos:

         #define MOTOR_PORT 1

         void initialize() {
           motor_set_gearing(MOTOR_PORT, E_MOTOR_GEARSET_18);
           motor_set_reversed(MOTOR_PORT, true);
           motor_set_encoder_units(MOTOR_PORT, E_MOTOR_ENCODER_DEGREES);
         }

   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: initialize.cpp
         :linenos:

         #define MOTOR_PORT 1

         void initialize() {
           pros::Motor drive_left_initializer (MOTOR_PORT, E_MOTOR_GEARSET_18, true, E_MOTOR_ENCODER_DEGREES);
         }

      .. code-block:: cpp
         :caption: opcontrol.cpp
         :linenos:

         #define MOTOR_PORT 1

         void opcontrol() {
           pros::Motor drive_left (MOTOR_PORT);
           // drive_left will have the same configuration as drive_left_initializer
         }

Simple Usage
============

The easiest way to interact with the motors is through the `motor_move <../../api/c/motors.html#motor-move>`_
function. This is analogous to the `motorSet <../../../cortex/api/index.html#motorSet>`_
function from PROS 2.

.. tabs::
   .. group-tab:: C
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

   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: opcontrol.cpp
         :linenos:

         #define MOTOR_PORT 1

         void opcontrol() {
           pros::Motor drive_left (MOTOR_PORT);
           pros::Controller master (E_CONTROLLER_MASTER);
           while (true) {
             drive_left.move(master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y));
             pros::delay(2);
           }
         }

Autonomous Movement
===================

The V5 Motors can move in a number of different ways that are better suited towards
autonomous movement than the simple ``motor_move()`` example shown above.

Profile Movements
-----------------

Profile movements are movements to a given position that are executed by the motor's
firmware. There are two functions that achieve this, ``motor_move_absolute()`` and
``motor_move_relative()``. These two functions are practically similar, but
``motor_move_relative()`` takes into account the zero position of the motor's encoder.

These functions are very well suited to movement in autonomous.

.. tabs::
   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: autonomous.c
         :linenos:

         #define MOTOR_PORT 1
         #define MOTOR_MAX_SPEED 100 // The motor has the 36 Gearset

         void autonomous() {
           motor_move_relative(MOTOR_PORT, 1000, MOTOR_MAX_SPEED);
           // This will move 1000 ticks forward
           motor_move_relative(MOTOR_PORT, 1000, MOTOR_MAX_SPEED);
           // This moves an additional 1000 ticks forward
           motor_move_absolute(MOTOR_PORT, 1000, MOTOR_MAX_SPEED);
           // This moves 1000 ticks backwards to the 1000 tick position
         }

   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: autonomous.cpp
         :linenos:

         #define MOTOR_PORT 1
         #define MOTOR_MAX_SPEED 100 // The motor has the 36 Gearset

         void autonomous() {
           pros::Motor drive_left (MOTOR_PORT);
           drive_left.move_relative(1000, MOTOR_MAX_SPEED);
           // This will move 1000 ticks forward
           drive_left.move_relative(1000, MOTOR_MAX_SPEED);
           // This moves an additional 1000 ticks forward
           drive_left.move_absolute(1000, MOTOR_MAX_SPEED);
           // This moves 1000 ticks backwards to the 1000 tick position
         }

For further reading material on the algorithms that create these profiled movement,
see `Mathematics of Motion Control Profiles <https://pdfs.semanticscholar.org/a229/fdba63d8d68abd09f70604d56cc07ee50f7d.pdf>`_
for the `Feedforward <https://en.wikipedia.org/wiki/Feed_forward_(control)>`_ control,
and `George Gillard's PID Explanation <http://georgegillard.com/documents/2-introduction-to-pid-controllers>`_
for the `feedback <https://en.wikipedia.org/wiki/Control_theory#PID_feedback_control>`_ control.

Velocity Controller Movement
----------------------------

The final ``move`` function available with the PROS Motor API is ``motor_move_velocity()``.
This ensures consistent velocity output from the motor through the use of
`PID <http://georgegillard.com/documents/2-introduction-to-pid-controllers>`_.

.. tabs::
   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: autonomous.c
         :linenos:

         #define MOTOR_PORT 1
         #define MOTOR_MAX_SPEED 100 // The motor has the 36 Gearset

         void autonomous() {
           motor_move_velocity(MOTOR_PORT, MOTOR_MAX_SPEED);
           delay(1000); // Move at full speed for 1 second
         }

   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: autonomous.cpp
         :linenos:

         #define MOTOR_PORT 1
         #define MOTOR_MAX_SPEED 100 // The motor has the 36 Gearset

         void autonomous() {
           pros::Motor drive_left (MOTOR_PORT);
           drive_left.move_velocity(MOTOR_MAX_SPEED);
           pros::delay(1000); // Move at full speed for 1 second
         }

Telemetry
=========

The V5 motors return a plethora of diagnostic information about their performance.
The motors return the following parameters:

============= ============================== ============================================================
 Parameter     C Function                     C++ Function
============= ============================== ============================================================
 Position      motor_get_position_            `pros::Motor::get_position <get_position_>`_
 Velocity      motor_get_actual_velocity_     `pros::Motor::get_actual_velocity <get_actual_velocity_>`_
 Current       motor_get_current_draw_        `pros::Motor::get_current_draw <get_current_draw_>`_
 Efficiency    motor_get_efficiency_          `pros::Motor::get_efficiency <get_efficiency_>`_
 Power         motor_get_power_               `pros::Motor::get_power <get_power_>`_
 Temperature   motor_get_temperature_         `pros::Motor::get_temperature <get_temperature_>`_
 Torque        motor_get_torque_              `pros::Motor::get_torque <get_torque_>`_
 Voltage       motor_get_voltage_             `pros::Motor::get_voltage <get_voltage_>`_
 Direction     motor_get_direction_           `pros::Motor::get_direction <get_direction_>`_
============= ============================== ============================================================

.. _motor_get_position: ../../api/c/motors.html#motor-get-position
.. _motor_get_actual_velocity: ../../api/c/motors.html#motor-get-actual-velocity
.. _motor_get_current_draw: ../../api/c/motors.html#motor-get-current-draw
.. _motor_get_efficiency: ../../api/c/motors.html#motor-get-efficiency
.. _motor_get_power: ../../api/c/motors.html#motor-get-power
.. _motor_get_temperature: ../../api/c/motors.html#motor-get-temperature
.. _motor_get_torque: ../../api/c/motors.html#motor-get-torque
.. _motor_get_voltage: ../../api/c/motors.html#motor-get-voltage
.. _motor_get_direction: ../../api/c/motors.html#motor-get-direction

.. _get_position: ../../api/cpp/motors.html#get-position
.. _get_actual_velocity: ../../api/cpp/motors.html#get-actual-velocity
.. _get_current_draw: ../../api/cpp/motors.html#get-current-draw
.. _get_efficiency: ../../api/cpp/motors.html#get-efficiency
.. _get_power: ../../api/cpp/motors.html#get-power
.. _get_temperature: ../../api/cpp/motors.html#get-temperature
.. _get_torque: ../../api/cpp/motors.html#get-torque
.. _get_voltage: ../../api/cpp/motors.html#get-voltage
.. _get_direction: ../../api/cpp/motors.html#get-direction
