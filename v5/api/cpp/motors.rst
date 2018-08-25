.. highlight:: cpp
   :linenothreshold: 5

==============
Motors C++ API
==============

.. note:: Additional example code for this module can be found in
          `its Tutorial <../../tutorials/topical/motors.html>`_.

.. contents:: :local:

pros::Motor
===========

Constructor(s)
--------------

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        explicit Motor ( const std::uint8_t port,
                         const motor_gearset_e_t_ gearset = E_MOTOR_GEARSET_36,
                         const bool reverse = false,
                         const motor_encoder_units_e_t encoder_units = E_MOTOR_ENCODER_DEGREES )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1, E_MOTOR_GEARSET_18);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor.move(master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y));
            pros::delay(2);
          }
        }

=============== ===================================================================
 Parameters
=============== ===================================================================
 port            The V5 port number from 1-21
 gearset         The new motor `gearset <motor_gearset_e_t_>`_
 reverse         ``1`` reverses the motor, ``0`` is default
 encoder_units   The new `motor encoder units <motor_encoder_units_e_t_>`_
=============== ===================================================================

----

Operator Overloads
------------------

Sets the voltage for the motor from -127 to 127.

This is designed to map easily to the input from the controller's analog
stick for simple opcontrol use. The actual behavior of the motor is analogous
to use of `move_voltage`_, or `motorSet <../../../cortex/api/index.html#motorSet>`_
from the PROS 2 API.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t operator= ( const std::int8_t voltage ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1, E_MOTOR_GEARSET_18);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            pros::delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 voltage      The new motor voltage from -127 to 127
============ ===============================================================

----

Literal(s)
----------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        okapi::Motor operator"" _m(const unsigned long long iport)
        okapi::Motor operator"" _rm(const unsigned long long iport)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          using namespace pros::literals;
          auto motor1 = 1_m; // Motor in port 1
          auto motor1_reversed = 1_rm; // Reversed motor in port 1
        }

----

Movement Functions
------------------

move
~~~~

Sets the voltage for the motor from -127 to 127.

This is designed to map easily to the input from the controller's analog
stick for simple opcontrol use. The actual behavior of the motor is analogous
to use of `move_voltage`_, or `motorSet <../../../cortex/api/index.html#motorSet>`_
from the PROS 2 API.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_move <../c/motors.html#motor-move>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         int32_t motor_move ( const int8_t voltage )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor.move(master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y));
            pros::delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 voltage      The new motor voltage from -127 to 127
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

move_absolute
~~~~~~~~~~~~~

Sets the target absolute position for the motor to move to.

This movement is relative to the position of the motor when initialized or
the position when it was most recently reset with `tare_position`_.

.. note:: This function simply sets the target for the motor, it does not block program
          execution until the movement finishes. The example code shows how to block
          until a movement is finished.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_move_absolute <../c/motors.html#motor-move-absolute>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::move_absolute ( double position,
                                             int32_t velocity )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor motor (1);
          motor.move_absolute(100, 100); // Moves 100 units forward
          while (!((motor.get_position() < 105) && (motor.get_position() > 95))) {
            // Continue running this loop as long as the motor is not within +-5 units of its goal
            pros::delay(2);
          }
          motor.move_absolute(100, 100); // This does not cause a movement
          while (!((motor.get_position() < 105) && (motor.get_position() > 95))) {
            pros::delay(2);
          }

          motor.tare_position();
          motor.move_absolute(100, 100); // Moves 100 units forward
          while (!((motor.get_position() < 105) && (motor.get_position() > 95))) {
            pros::delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 position     The absolute position to move to in the motor's encoder units
 velocity     The maximum allowable velocity for the movement
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

move_relative
~~~~~~~~~~~~~

Sets the relative target position for the motor to move to.

This movement is relative to the current position of the motor as given in
`get_position`_.

.. note:: This function simply sets the target for the motor, it does not block program
          execution until the movement finishes. The example code shows how to block
          until a movement is finished.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_move_relative <../c/motors.html#motor-move-relative>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::move_relative ( double position,
                                             int32_t velocity )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor motor (1);
          motor.move_relative(100, 100); // Moves 100 units forward
          while (!((motor.get_position() < 105) && (motor.get_position() > 95))) {
            // Continue running this loop as long as the motor is not within +-5 units of its goal
            pros::delay(2);
          }
          motor.move_relative(100, 100); // Also moves 100 units forward
          while (!((motor.get_position() < 205) && (motor.get_position() > 195))) {
            pros::delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 position     The relative position to move to in the motor's encoder units
 velocity     The maximum allowable velocity for the movement
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

move_velocity
~~~~~~~~~~~~~

Sets the velocity for the motor.

This velocity corresponds to different actual speeds depending on the gearset
used for the motor. This results in a range of +-100 for
`E_MOTOR_GEARSET_36 <motor_gearset_e_t_>`_,
+-200 for `E_MOTOR_GEARSET_18 <motor_gearset_e_t_>`_, and +-600 for
`blue <motor_gearset_e_t_>`_. The velocity
is held with PID to ensure consistent speed, as opposed to setting the motor's
voltage.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_move_velocity <../c/motors.html#motor-move-velocity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::move_velocity ( uint8_t port,
                                             int16_t velocity )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor motor (1);
          motor.move_velocity(100);
          pros::delay(1000); // Move at 100 RPM for 1 second
          motor.move_velocity(0);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 velocity     The new motor velocity from +-100, +-200, or +-600 depending
              on the motor's `gearset <motor_gearset_e_t_>`_
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

move_voltage
~~~~~~~~~~~~

Sets the voltage for the motor from -12000 mV to 12000 mV.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_move_voltage <../c/motors.html#motor-move-voltage>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::move_voltage ( int16_t voltage )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          motor.move_voltage(12000);
          pros::delay(1000); // Move at max voltage for 1 second
          motor.move_voltage(0);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 voltage      The new voltage for the motor from -12000 mV to 12000 mV
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

modify_profiled_velocity
~~~~~~~~~~~~~~~~~~~~~~~~

Changes the output velocity for a profiled movement (`move_absolute`_ or
`move_relative`_). This will have no effect if the motor is not following
a profiled movement.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_modify_profiled_velocity <../c/motors.html#motor-modify-profiled-velocity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t pros::Motor::modify_profiled_velocity ( const int32_t velocity )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          pros::Motor motor (1);
          motor.move_absolute(1, 100, 100);
          pros::delay(100);
          motor.modify_profiled_velocity(1, 0); // Stop the motor early
        }

============ =====================================================================================
 Parameters
============ =====================================================================================
 velocity     The new motor velocity from +-100, +-200, or +-600 depending on the motor's gearset
============ =====================================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

get_target_position
~~~~~~~~~~~~~~~~~~~

Gets the target position set for the motor by the user.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_target_position <../c/motors.html#motor-get-target-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double pros::Motor::get_target_position ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor motor (1);
          motor.move_absolute(100, 100);
          std::cout << "Motor Target: " << motor.get_target_position();
          // Prints 100
        }

**Returns:** The target position in its encoder units or ``PROS_ERR_F`` if the
operation failed, setting ``errno``.

----

get_target_velocity
~~~~~~~~~~~~~~~~~~~

Gets the velocity commanded to the motor by the user.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_target_velocity <../c/motors.html#motor-get-target-velocity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::get_target_velocity ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor.move_velocity(master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y));
            std::cout << "Motor Velocity: " << motor.get_target_velocity();
            // Prints the value of E_CONTROLLER_ANALOG_LEFT_Y
            pros::delay(2);
          }
        }

**Returns:** The commanded motor velocity from +-100, +-200, +-600, or ``PROS_ERR`` if the
operation failed, setting ``errno``.

----

Telemetry Functions
-------------------

get_actual_velocity
~~~~~~~~~~~~~~~~~~~

Gets the actual velocity of the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_actual_velocity <../c/motors.html#motor-get-actual-velocity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double pros::Motor::get_actual_velocity ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          while (true) {
            motor = controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y);
            printf("Actual velocity: %lf\n", motor.get_actual_velocity());
            pros::delay(2);
          }
        }

**Returns:** The motor's actual velocity in
`motor_encoder_units_e_t <motor_encoder_units_e_t_>`_ per second
or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----

get_current_draw
~~~~~~~~~~~~~~~~

Gets the current drawn by the motor in mA.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_current_draw <../c/motors.html#motor-get-current-draw>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         int32_t pros::Motor::get_current_draw ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Current Draw: " << motor.get_current_draw();
            pros::delay(2);
          }
        }

**Returns:** The motor's current in mA or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

get_direction
~~~~~~~~~~~~~

Gets the direction of movement for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_direction <../c/motors.html#motor-get-direction>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         int32_t pros::Motor::get_direction ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Direction: " << motor.get_direction();
            pros::delay(2);
          }
        }

**Returns:** 1 for moving in the positive direction, -1 for moving in the
negative direction, and ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

get_efficiency
~~~~~~~~~~~~~~

Gets the efficiency of the motor in percent.

An efficiency of 100% means that the motor is moving electrically while
drawing no electrical power, and an efficiency of 0% means that the motor
is drawing power but not moving.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_efficiency <../c/motors.html#motor-get-efficiency>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         int32_t pros::Motor::get_efficiency ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Efficiency: " << motor.get_efficiency();
            pros::delay(2);
          }
        }

**Returns:** The motor's efficiency in percent or ``PROS_ERR_F`` if the operation
failed, setting ``errno``.

----

get_faults
~~~~~~~~~~

Gets the faults experienced by the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_faults <../c/motors.html#motor-get-faults>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::uint32_t pros::Motor::get_faults ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Faults: " << motor.get_faults();
            pros::delay(2);
          }
        }

**Returns:** Currently unknown bitfield.

----

get_flags
~~~~~~~~~

Gets the flags set by the motor's operation.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_flags <../c/motors.html#motor-get-flags>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::uint32_t pros::Motor::get_flags ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Flags: " << motor.get_flags();
            pros::delay(2);
          }
        }

**Returns:** A currently unknown bitfield

----

get_position
~~~~~~~~~~~~

Gets the absolute position of the motor in its encoder units.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_position <../c/motors.html#motor-get-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double pros::Motor::get_position ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Position: " << motor.get_position();
            pros::delay(2);
          }
        }

**Returns:** The motor's absolute position in its encoder units or ``PROS_ERR_F``
if the operation failed, setting ``errno``.

----

get_power
~~~~~~~~~

Gets the power drawn by the motor in Watts.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_power <../c/motors.html#motor-get-power>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double pros::Motor::get_power ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Power: " << motor.get_power();
            pros::delay(2);
          }
        }

**Returns:** The motor's power draw in Watts or ``PROS_ERR_F`` if the operation
failed, setting ``errno``.

----

get_raw_position
~~~~~~~~~~~~~~~~

Gets the raw encoder count of the motor at a given timestamp.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_raw_position <../c/motors.html#motor-get-raw-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor::get_raw_position ( std::uint32_t* timestamp )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          std::uint32_t now = pros::millis();
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Position: " << motor.get_raw_position(&now);
            pros::delay(2);
          }
        }

============ =======================================================
 Parameters
============ =======================================================
 timestamp    A pointer to a time in milliseconds for which the
              encoder count will be returned
============ =======================================================

**Returns:** The raw encoder count at the given timestamp or ``PROS_ERR`` if the
operation failed, setting ``errno``.

----

get_temperature
~~~~~~~~~~~~~~~

Gets the temperature of the motor in degrees Celsius. The resolution of this
eading is 5 degrees Celsius. The motor will start to reduce its power when the
temperature reading is greater than or equal to 55 C.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_temperature <../c/motors.html#motor-get-temperature>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double pros::Motor::get_temperature ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Temperature: " << motor.get_temperature();
            pros::delay(2);
          }
        }

**Returns:** The motor's temperature in degrees Celsius or ``PROS_ERR_F`` if the
operation failed, setting ``errno``.

----

get_torque
~~~~~~~~~~

Gets the torque generated by the motor in Nm.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_torque <../c/motors.html#motor-get-torque>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double pros::Motor::get_torque ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Torque: " << motor.get_torque();
            pros::delay(2);
          }
        }

**Returns:** The motor's torque in NM or ``PROS_ERR_F`` if the operation failed,
setting ``errno``.

----

get_voltage
~~~~~~~~~~~

Gets the voltage delivered to the motor in mV.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_voltage <../c/motors.html#motor-get-voltage>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double pros::Motor::get_voltage ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Voltage: " << motor.get_voltage();
            pros::delay(2);
          }
        }

**Returns:** The motor's voltage in mV or ``PROS_ERR_F`` if the operation failed,
setting ``errno``.

----

get_zero_position_flag
~~~~~~~~~~~~~~~~~~~~~~

Gets the zero position flag for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_zero_position_flag <../c/motors.html#motor-get-zero-position-flag>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::get_zero_position_flag ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Is the motor at zero position?: " << motor.get_zero_position_flag();
            pros::delay(2);
          }
        }

**Returns:** ``1`` if the motor is at zero absolute position and ``0`` if the motor has
moved from its absolute zero, or ``PROS_ERR`` if the operation failed
setting ``errno``.

----

is_stopped
~~~~~~~~~~

Gets the zero velocity flag for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_is_stopped <../c/motors.html#motor-is-stopped>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t motor_is_stopped ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Is the motor stopped?: " << motor.is_stopped();
            pros::delay(2);
          }
        }

**Returns:** ``1`` if the motor is not moving and ``0`` if the motor is moving,
or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

is_over_current
~~~~~~~~~~~~~~~

Detects if the motor is drawing over its current limit.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_is_over_current <../c/motors.html#motor-is-over-current>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         int32_t pros::Motor::is_over_current ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Is the motor over its current limit?: " << motor.is_over_current();
            pros::delay(2);
          }
        }

**Returns:** 1 if the motor's current limit is being exceeded and 0 if the current
limit is not exceeded, or ``PROS_ERR`` if the operation failed, setting
``errno``.

----

is_over_temp
~~~~~~~~~~~~

Gets the temperature limit flag for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_is_over_temp <../c/motors.html#motor-is-over-temp>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::is_over_temp ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Is the motor over its temperature limit?: " << motor.is_over_temp();
            pros::delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** 1 if the temperature limit is exceeded and 0 if the the
temperature is below the limit, or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

Configuration Functions
-----------------------

convert_pid
~~~~~~~~~~~

Takes in floating point values and returns a properly formatted pid struct.
The ``pros::motor_pid_s_t`` struct is in 4.4 format, i.e. 0x20 is 2.0, 0x21 is 2.0625,
etc.

This function will convert the floating point values to the nearest 4.4
value.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_convert_pid <../c/motors.html#motor-convert-pid>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        pros::motor_pid_s_t pros::Motor::convert_pid ( double kf,
                                                       double kp,
                                                       double ki,
                                                       double kd )

   .. tab :: Example
      .. highlight:: c
      ::

        #define KF 0
        #define KP 1.0f
        #define KI 0.001f
        #define KD 0.1f

        void initialize() {
          pros::Motor motor (1);
          pros:motor_pid_s_t pid = pros::Motor::convert_pid(KF, KP, KI, KD);
          motor.set_pos_pid(pid);
        }

============ ==============================
 Parameters
============ ==============================
 kf           The feedforward constant
 kp           The proportional constant
 ki           The integral constant
 kd           The derivative constant
============ ==============================

**Returns:** A ``pros::motor_pid_s_t`` struct formatted properly in 4.4.

----

convert_pid_full
~~~~~~~~~~~~~~~~

Takes in floating point values and returns a properly formatted pid struct.
The ``pros::motor_pid_full_s_t`` struct is in 4.4 format, i.e. 0x20 is 2.0, 0x21 is 2.0625,
etc.

This function will convert the floating point values to the nearest 4.4
value.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_convert_pid_full <../c/motors.html#motor-convert-pid-full>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        pros::motor_pid_full_s_t pros::Motor::convert_pid_full ( double kf,
                                                                 double kp,
                                                                 double ki,
                                                                 double kd,
                                                                 double filter,
                                                                 double limit,
                                                                 double threshold,
                                                                 double loopspeed )

   .. tab :: Example
      .. highlight:: c
      ::

        #define KF 0
        #define KP 1.0f
        #define KI 0.001f
        #define KD 0.1f
        #define FILTER 1.0f
        #define LIMIT 1.0f
        #define THRESHOLD 1.0f
        #define LOOPSPEED 10

        void initialize() {
          pros::Motor motor (1);
          pros::motor_pid_full_s_t pid = pros::Motor::convert_pid_full(KF, KP, KI, KD,
                                         FILTER, LIMIT, THRESHOLD, LOOPSPEED);
          motor.set_pos_pid_full(1, pid);
        }

============ =============================================================================
 Parameters
============ =============================================================================
 kf           The feedforward constant
 kp           The proportional constant
 ki           The integral constant
 kd           The derivative constant
 filter       A constant used for filtering the profile acceleration
 limit        The integral limit
 threshold    The threshold for determining if a position movement has reached its goal.

              This has no effect for velocity PID controllers.
 loopspeed    The rate at which the PID computation is run (in ms)
============ =============================================================================

**Returns:** A ``pros::motor_pid_s_t`` struct formatted properly in 4.4.

----

get_brake_mode
~~~~~~~~~~~~~~

Gets the brake mode of the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_brake_mode <../c/motors.html#motor-get-brake-mode>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        motor_brake_mode_e_t pros::Motor::get_brake_mode ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor motor (1);
          motor.set_brake_mode(E_MOTOR_BRAKE_HOLD);
          std::cout << "Brake Mode: " << motor.get_brake_mode();
        }

**Returns:** One of `motor_brake_mode_e_t <motor_brake_mode_e_t_>`_, according to what was set for the motor,
or ``E_MOTOR_BRAKE_INVALID`` if the operation failed, setting ``errno``.

----

get_current_limit
~~~~~~~~~~~~~~~~~

Gets the current limit for the motor in mA.

The default limit is 2500 mA.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_current_limit <../c/motors.html#motor-get-current-limit>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         int32_t pros::Motor::get_current_limit ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          while (true) {
            std::cout << "Motor Current Limit: " << motor.get_current_limit();
            pros::delay(2);
          }
        }

**Returns:** The motor's current limit in mA or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

get_encoder_units
~~~~~~~~~~~~~~~~~

Gets the encoder units set for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_encoder_units <../c/motors.html#motor-get-encoder-units>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         motor_encoder_units_e_t pros::Motor::get_encoder_units ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor motor (1, E_MOTOR_GEARSET_06, false, E_MOTOR_ENCODER_COUNTS);
          std::cout << "Motor Encoder Units: " << motor.get_encoder_units();
        }

**Returns:** One of `motor_encoder_units_e_t`_ according to what is set for the motor
or ``E_MOTOR_ENCODER_INVALID`` if the operation failed.

----

get_gearing
~~~~~~~~~~~

Gets the `gearset <motor_gearset_e_t_>`_` that was set for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_gearing <../c/motors.html#motor-get-gearing>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         motor_gearset_e_t pros::Motor::get_gearing ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor motor (1, E_MOTOR_GEARSET_06, false, E_MOTOR_ENCODER_COUNTS);
          std::cout << "Motor Gearing: " << motor.get_gearing();
        }

**Returns:** One of `motor_gearset_e_t <motor_gearset_e_t_>`_ according to what is set for the motor,
or ``E_GEARSET_INVALID`` if the operation failed.

----

get_voltage_limit
~~~~~~~~~~~~~~~~~

Gets the voltage limit set by the user.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_voltage_limit <../c/motors.html#motor-get-voltage-limit>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::get_voltage_limit ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor motor (1);
          std::cout << "Motor Voltage Limit: " << motor.get_voltage_limit();
        }

**Returns:** The motor's voltage limit in V or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

is_reversed
~~~~~~~~~~~

Gets the operation direction of the motor as set by the user.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_is_reversed <../c/motors.html#motor-is-reversed>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::is_reversed ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor motor (1);
          std::cout << "Is the motor reversed? " << motor.is_reversed();
          // Prints "0"
        }

**Returns:** 1 if the motor has been reversed and 0 if the motor was not reversed,
or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

set_brake_mode
~~~~~~~~~~~~~~

Sets one of `motor_brake_mode_e_t`_ to the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_set_brake_mode <../c/motors.html#motor-set-brake-mode>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::set_brake_mode ( motor_brake_mode_e_t mode )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor motor (1);
          motor.set_brake_mode(E_MOTOR_BRAKE_HOLD);
          std::cout << "Brake Mode: " << motor.get_brake_mode();
        }

============ ===============================================================
 Parameters
============ ===============================================================
 mode         The `motor_brake_mode_e_t`_ to set for the motor
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_current_limit
~~~~~~~~~~~~~~~~~

Sets the current limit for the motor in mA.

The default limit is 2500 mA.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_set_current_limit <../c/motors.html#motor-set-current-limit>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::set_current_limit ( int32_t limit )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);

          motor.set_current_limit(1000);
          while (true) {
            motor = controller_get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            // The motor will reduce its output at 1000 mA instead of the default 2500 mA
            pros::delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 limit        The new current limit in mA
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_encoder_units
~~~~~~~~~~~~~~~~~

Sets one of `motor_encoder_units_e_t`_ for the motor encoder.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_set_encoder_units <../c/motors.html#motor-set-encoder-units>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::set_encoder_units ( motor_encoder_units_e_t units )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor motor (1);
          motor.set_encoder_units(E_MOTOR_ENCODER_DEGREES);
          std::cout << "Encoder Units: " << motor.get_encoder_units();
        }

============ ===============================================================
 Parameters
============ ===============================================================
 units        The new `motor encoder units <motor_encoder_units_e_t_>`_
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_gearing
~~~~~~~~~~~

Sets one of `motor_gearset_e_t <motor_gearset_e_t_>`_ for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_set_gearing <../c/motors.html#motor-set-gearing>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::set_gearing ( motor_gearset_e_t_ gearset )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor motor (1);
          motor.set_gearing(E_MOTOR_GEARSET_06);
          std::cout << "Brake Mode: " << motor.get_gearing();
        }

============ ===============================================================
 Parameters
============ ===============================================================
 gearset      The new motor gearset
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_pos_pid
~~~~~~~~~~~

Sets one of ``pros::motor_pid_s_t`` for the motor. This intended to just modify the
main PID constants.

Only non-zero values of the struct will change the existing motor constants.

.. warning:: This feature is in beta, it is advised to use caution when modifying
             the PID values. The motor could be damaged by particularly large constants.

Analogous to `motor_set_pos_pid <../c/motors.html#motor-set-pos-pid>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::set_pos_pid ( const motor_pid_s_t pid )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define KF 0
        #define KP 1.0f
        #define KI 0.001f
        #define KD 0.1f

        void initialize() {
          pros::Motor motor (1);
          pros::motor_pid_s_t pid = pros::Motor::convert_pid(KF, KP, KI, KD);
          motor.set_pos_pid(pid);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 pid          The new motor PID constants
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_pos_pid_full
~~~~~~~~~~~~~~~~

Sets one of ``pros::motor_pid_full_s_t`` for the motor. This intended to just modify the
main PID constants.

Only non-zero values of the struct will change the existing motor constants.

.. warning:: This feature is in beta, it is advised to use caution when modifying
             the PID values. The motor could be damaged by particularly large constants.

Analogous to `motor_set_pos_pid_full <../c/motors.html#motor-set-pos-pid-full>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::set_pos_pid_full ( const motor_pid_full_s_t pid )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define KF 0
        #define KP 1.0f
        #define KI 0.001f
        #define KD 0.1f
        #define FILTER 1.0f
        #define LIMIT 1.0f
        #define THRESHOLD 1.0f
        #define LOOPSPEED 10

        void initialize() {
          pros::Motor motor (1);
          pros::motor_pid_full_s_t pid = pros::Motor::convert_pid_full(KF, KP, KI, KD,
                                         FILTER, LIMIT, THRESHOLD, LOOPSPEED);
          motor.set_pos_pid_full(pid);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 pid          The new motor PID constants
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_reversed
~~~~~~~~~~~~

Sets the reverse flag for the motor.

This will invert its movements and the values returned for its position.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_set_reversed <../c/motors.html#motor-set-reversed>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::set_reversed ( bool reverse )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor motor (1);
          motor.set_reversed(true);
          std::cout << "Is this motor reversed? " << motor.is_reversed();
        }

============ ===============================================================
 Parameters
============ ===============================================================
 reverse      ``1`` reverses the motor, ``0`` is default
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_vel_pid
~~~~~~~~~~~

Sets one of ``pros::motor_pid_s_t`` for the motor. This intended to just modify the
main PID constants.

Only non-zero values of the struct will change the existing motor constants.

.. warning:: This feature is in beta, it is advised to use caution when modifying
             the PID values. The motor could be damaged by particularly large constants.

Analogous to `motor_set_vel_pid <../c/motors.html#motor-set-vel-pid>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::set_vel_pid ( const motor_pid_s_t pid )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define KF 0
        #define KP 1.0f
        #define KI 0.001f
        #define KD 0.1f

        void initialize() {
          pros::Motor motor (1);
          pros::motor_pid_s_t pid = pros::Motor::convert_pid(KF, KP, KI, KD);
          motor.set_vel_pid(pid);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 pid          The new motor PID constants
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_vel_pid_full
~~~~~~~~~~~~~~~~

Sets one of ``pros::motor_pid_full_s_t`` for the motor. This intended to just modify the
main PID constants.

Only non-zero values of the struct will change the existing motor constants.

.. warning:: This feature is in beta, it is advised to use caution when modifying
             the PID values. The motor could be damaged by particularly large constants.

Analogous to `motor_set_vel_pid_full <../c/motors.html#motor-set-vel-pid-full>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::set_vel_pid_full ( const motor_pid_full_s_t pid )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define KF 0
        #define KP 1.0f
        #define KI 0.001f
        #define KD 0.1f
        #define FILTER 1.0f
        #define LIMIT 1.0f
        #define THRESHOLD 1.0f
        #define LOOPSPEED 10

        void initialize() {
          pros::Motor motor (1);
          pros::motor_pid_full_s_t pid = pros::Motor::convert_pid_full(KF, KP, KI, KD,
                                         FILTER, LIMIT, THRESHOLD, LOOPSPEED);
          motor.set_vel_pid_full(pid);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 pid          The new motor PID constants
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_voltage_limit
~~~~~~~~~~~~~~~~~

Sets the voltage limit for the motor in mV.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_set_voltage_limit <../c/motors.html#motor-set-voltage-limit>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::set_voltage_limit ( int32_t limit )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor motor (1);
          pros::Controller master (E_CONTROLLER_MASTER);

          motor.set_voltage_limit(10000);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            // The motor will not output more than 10 V
            pros::delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 limit        The new voltage limit in Volts
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_zero_position
~~~~~~~~~~~~~~~~~

Sets the zero position for the motor in its encoder units.

This will be the future reference point for the motor's "absolute" position.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_set_zero_position <../c/motors.html#motor-set-zero-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        int32_t pros::Motor::set_zero_position ( double position )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor motor (1);
          motor.move_absolute(100, 100); // Moves 100 units forward
          motor.move_absolute(100, 100); // This does not cause a movement

          motor.set_zero_position(80);
          motor.move_absolute(100, 100); // Moves 120 units forward
        }

============ ===============================================================
 Parameters
============ ===============================================================
 position     The new reference position in its encoder units
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

tare_position
~~~~~~~~~~~~~

Sets the "absolute" zero position of the motor to its current position.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_tare_position <../c/motors.html#motor-tare-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         int32_t pros::Motor::tare_position ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor motor (1);
          motor.move_absolute(100, 100); // Moves 100 units forward
          motor.move_absolute(100, 100); // This does not cause a movement

          motor.tare_position();
          motor.move_absolute(100, 100); // Moves 100 units forward
        }

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

.. _motor_gearset_e_t: ../c/motors.html#motor-gearset-e-t
.. _motor_encoder_units_e_t: ../c/motors.html#motor-encoder-units-e-t
.. _motor_brake_mode_e_t: ../c/motors.html#motor-brake-mode-e-t
