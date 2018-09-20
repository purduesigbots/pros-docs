.. highlight:: c
   :linenothreshold: 5

============
Motors C API
============

.. note:: Additional example code for this module can be found in
          `its Tutorial <../../tutorials/topical/motors.html>`_.

.. contents:: :local:

Movement Functions
==================

motor_move
----------

Sets the voltage for the motor from -127 to 127.

This is designed to map easily to the input from the controller's analog
stick for simple opcontrol use. The actual behavior of the motor is analogous
to use of `motor_move_voltage`_, or `motorSet <../../../cortex/api/index.html#motorSet>`_
from the PROS 2 API.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::move <../cpp/motors.html#move>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t motor_move ( uint8_t port,
                              const int8_t voltage )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 voltage      The new motor voltage from -127 to 127
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_move_absolute
-------------------

Sets the target absolute position for the motor to move to.

This movement is relative to the position of the motor when initialized or
the position when it was most recently reset with `motor_tare_position`_.

.. note:: This function simply sets the target for the motor, it does not block program
          execution until the movement finishes. The example code shows how to block
          until a movement is finished.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::move_absolute <../cpp/motors.html#move-absolute>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_move_absolute ( uint8_t port,
                                      double position,
                                      int32_t velocity )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          motor_move_absolute(1, 100, 100); // Moves 100 units forward
          while (!((motor_get_position(1) < 105) && (motor_get_position(1) > 95))) {
            // Continue running this loop as long as the motor is not within +-5 units of its goal
            delay(2);
          }
          motor_move_absolute(1, 100, 100); // This will not cause a movement
          while (!((motor_get_position(1) < 105) && (motor_get_position(1) > 95))) {
            delay(2);
          }

          motor_tare_position(1);
          motor_move_absolute(1, 100, 100); // Moves 100 units forward
          while (!((motor_get_position(1) < 105) && (motor_get_position(1) > 95))) {
            delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 position     The absolute position to move to in the motor's encoder units
 velocity     The maximum allowable velocity for the movement
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_move_relative
-------------------

Sets the relative target position for the motor to move to.

This movement is relative to the current position of the motor as given in
`motor_get_position`_.

.. note:: This function simply sets the target for the motor, it does not block program
          execution until the movement finishes. The example code shows how to block
          until a movement is finished.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::move_relative <../cpp/motors.html#move-relative>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_move_relative ( uint8_t port,
                                      double position,
                                      int32_t velocity )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          motor_move_relative(1, 100, 100); // Moves 100 units forward
          while (!((motor_get_position(1) < 105) && (motor_get_position(1) > 95))) {
            // Continue running this loop as long as the motor is not within +-5 units of its goal
            delay(2);
          }

          motor_move_relative(1, 100, 100); // Also moves 100 units forward
          while (!((motor_get_position(1) < 205) && (motor_get_position(1) > 195))) {
            delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 position     The relative position to move to in the motor's encoder units
 velocity     The maximum allowable velocity for the movement
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_move_velocity
-------------------

Sets the velocity for the motor.

This velocity corresponds to different actual speeds depending on the gearset
used for the motor. This results in a range of +-100 for
`E_MOTOR_GEARSET_36 <motors.html#motor-gearset-e-t>`_,
+-200 for `E_MOTOR_GEARSET_18 <motors.html#motor-gearset-e-t>`_, and +-600 for
`blue <motors.html#motor-gearset-e-t>`_. The velocity
is held with PID to ensure consistent speed, as opposed to setting the motor's
voltage.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::move_velocity <../cpp/motors.html#move-velocity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_move_velocity ( uint8_t port,
                                      int16_t velocity )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          motor_move_velocity(1, 100);
          delay(1000); // Move at 100 RPM for 1 second
          motor_move_velocity(1, 0);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 velocity     The new motor velocity from +-100, +-200, or +-600 depending
              on the motor's `gearset <motors.html#motor-gearset-e-t>`_
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_move_voltage
------------------

Sets the voltage for the motor from -12000 mV to 12000 mV.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::move_voltage <../cpp/motors.html#move-voltage>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_move_voltage ( uint8_t port,
                                     int16_t voltage )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          motor_move_voltage(1, 12000);
          delay(1000); // Move at max voltage for 1 second
          motor_move_voltage(1, 0);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 voltage      The new voltage for the motor from -12000 mV to 12000 mV
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_modify_profiled_velocity
------------------------------

Changes the output velocity for a profiled movement (`motor_move_absolute`_ or
`motor_move_relative`_). This will have no effect if the motor is not following
a profiled movement.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::modify_profiled_velocity <../cpp/motors.html#modify-profiled-velocity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_modify_profiled_velocity ( uint8_t port,
                                                 const int32_t velocity )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          motor_move_absolute(1, 100, 100);
          delay(100);
          motor_modify_profiled_velocity(1, 0); // Stop the motor early
        }

============ =====================================================================================
 Parameters
============ =====================================================================================
 port         The V5 port number from 1-21
 velocity     The new motor velocity from +-100, +-200, or +-600 depending on the motor's gearset
============ =====================================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_get_target_position
-------------------------

Gets the target position set for the motor by the user.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_target_position <../cpp/motors.html#get-target-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double motor_get_target_position ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          motor_move_absolute(1, 100, 100);
          printf("Motor Target: %d\n", motor_get_target_position(1));
          // Prints 100
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The target position in its encoder units or ``PROS_ERR_F`` if the
operation failed, setting ``errno``.

----

motor_get_target_velocity
-------------------------

Gets the velocity commanded to the motor by the user.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_target_velocity <../cpp/motors.html#get-target-velocity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_get_target_velocity ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move_velocity(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Commanded Velocity: %d\n", motor_get_target_velocity(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The commanded motor velocity from +-100, +-200, +-600, or ``PROS_ERR`` if the
operation failed, setting ``errno``.

----

Telemetry Functions
===================

motor_get_actual_velocity
-------------------------

Gets the actual velocity of the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_actual_velocity <../cpp/motors.html#get-actual-velocity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double motor_get_actual_velocity ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Actual velocity: %lf\n", motor_get_actual_velocity(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's actual velocity in `motor_encoder_units_e_t`_ per second
or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----

motor_get_current_draw
-----------------------

Gets the current drawn by the motor in mA.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_current_draw <../cpp/motors.html#get-current-draw>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t motor_get_current_draw ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Current Draw: %d\n", motor_get_current_draw(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's current in mA or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_get_direction
-------------------

Gets the direction of movement for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_direction <../cpp/motors.html#get-direction>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t motor_get_direction ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Direction: %d\n", motor_get_direction(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** 1 for moving in the positive direction, -1 for moving in the
negative direction, and ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_get_efficiency
--------------------

Gets the efficiency of the motor in percent.

An efficiency of 100% means that the motor is moving electrically while
drawing no electrical power, and an efficiency of 0% means that the motor
is drawing power but not moving.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_efficiency <../cpp/motors.html#get-efficiency>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t motor_get_efficiency ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Efficiency: %d\n", motor_get_efficiency(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's efficiency in percent or ``PROS_ERR_F`` if the operation
failed, setting ``errno``.

----

motor_get_faults
----------------

Gets the faults experienced by the motor.

Compare this bitfield to the bitmasks in `motor_fault_e_t`_.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_faults <../cpp/motors.html#get-faults>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         uint32_t motor_get_faults ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Faults: %d\n", motor_get_faults(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** Currently unknown bitfield.

----

motor_get_flags
---------------

Gets the flags set by the motor's operation.

Compare this bitfield to the bitmasks in `motor_flag_e_t`_.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_flags <../cpp/motors.html#get-flags>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         uint32_t motor_get_flags ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Flags: %d\n", motor_get_flags(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** A currently unknown bitfield

----

motor_get_position
------------------

Gets the absolute position of the motor in its encoder units.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_position <../cpp/motors.html#get-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double motor_get_position ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Position: %lf\n", motor_get_position(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's absolute position in its encoder units or ``PROS_ERR_F``
if the operation failed, setting ``errno``.

----

motor_get_power
---------------

Gets the power drawn by the motor in Watts.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_power <../cpp/motors.html#get-power>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double motor_get_power ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Power: %lf\n", motor_get_power(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's power draw in Watts or ``PROS_ERR_F`` if the operation
failed, setting ``errno``.

----

motor_get_raw_position
----------------------

Gets the raw encoder count of the motor at a given timestamp.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_raw_position <../cpp/motors.html#get-raw-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_get_raw_position ( uint8_t port,
                                         uint32_t* timestamp )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Encoder Count: %d\n", motor_get_raw_position(1, &now));
            delay(2);
          }
        }

============ =======================================================
 Parameters
============ =======================================================
 port         The V5 port number from 1-21
 timestamp    A pointer to a time in milliseconds for which the
              encoder count will be returned
============ =======================================================

**Returns:** The raw encoder count at the given timestamp or ``PROS_ERR`` if the
operation failed, setting ``errno``.

----

motor_get_temperature
---------------------

Gets the temperature of the motor in degrees Celsius. The resolution of this
eading is 5 degrees Celsius. The motor will start to reduce its power when the
temperature reading is greater than or equal to 55 C.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_temperature <../cpp/motors.html#get-temperature>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double motor_get_temperature ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Temperature: %lf\n", motor_get_temperature(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's temperature in degrees Celsius or ``PROS_ERR_F`` if the
operation failed, setting ``errno``.

----

motor_get_torque
----------------

Gets the torque generated by the motor in Nm.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_torque <../cpp/motors.html#get-torque>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double motor_get_torque ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Torque: %lf\n", motor_get_torque(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's torque in NM or ``PROS_ERR_F`` if the operation failed,
setting ``errno``.

----

motor_get_voltage
-----------------

Gets the voltage delivered to the motor in mV.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_voltage <../cpp/motors.html#get-voltage>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double motor_get_voltage ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Voltage: %lf\n", motor_get_voltage(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's voltage in mV or ``PROS_ERR_F`` if the operation failed,
setting ``errno``.

----

motor_get_zero_position_flag
----------------------------

Gets the zero position flag for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_zero_position_flag <../cpp/motors.html#get-zero-position-flag>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_get_zero_position_flag ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Is the motor at its zero position? %d\n", motor_get_zero_position_flag(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** ``1`` if the motor is at zero absolute position and ``0`` if the motor has
moved from its absolute zero, or ``PROS_ERR`` if the operation failed
setting ``errno``.

----

motor_is_stopped
----------------

Gets the zero velocity flag for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::is_stopped <../cpp/motors.html#is-stopped>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_is_stopped ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Is the motor stopped? %d\n", motor_is_stopped(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** ``1`` if the motor is not moving and ``0`` if the motor is moving,
or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

motor_is_over_current
---------------------

Detects if the motor is drawing over its current limit.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::is_over_current <../cpp/motors.html#is-over-current>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t motor_is_over_current ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Current Limit Hit?: %d\n", motor_is_over_current(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** 1 if the motor's current limit is being exceeded and 0 if the current
limit is not exceeded, or ``PROS_ERR`` if the operation failed, setting
``errno``.

----

motor_is_over_temp
------------------

Gets the temperature limit flag for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::is_over_temp <../cpp/motors.html#is-over-temp>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_is_over_temp ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Temp Limit: %d\n", motor_is_over_temp(1));
            delay(2);
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
=======================

motor_convert_pid
-----------------

Takes in floating point values and returns a properly formatted pid struct.
The `motor_pid_s_t`_ struct is in 4.4 format, i.e. 0x20 is 2.0, 0x21 is 2.0625,
etc.

This function will convert the floating point values to the nearest 4.4
value.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        motor_pid_s_t motor_convert_pid ( double kf,
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
          motor_pid_s_t pid = motor_convert_pid(KF, KP, KI, KD);
          motor_set_pos_pid(1, pid);
        }

============ ==============================
 Parameters
============ ==============================
 kf           The feedforward constant
 kp           The proportional constant
 ki           The integral constant
 kd           The derivative constant
============ ==============================

**Returns:** A `motor_pid_s_t`_ struct formatted properly in 4.4.

----

motor_convert_pid_full
----------------------

Takes in floating point values and returns a properly formatted pid struct.
The `motor_pid_full_s_t`_ struct is in 4.4 format, i.e. 0x20 is 2.0, 0x21 is 2.0625,
etc.

This function will convert the floating point values to the nearest 4.4
value.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        motor_pid_full_s_t motor_convert_pid_full ( double kf,
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
          motor_pid_full_s_t pid = motor_convert_pid_full(KF, KP, KI, KD,
                                   FILTER, LIMIT, THRESHOLD, LOOPSPEED);
          motor_set_pos_pid_full(1, pid);
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

**Returns:** A motor_pid_s_t struct formatted properly in 4.4.

----

motor_get_brake_mode
--------------------

Gets the brake mode of the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_brake_mode <../cpp/motors.html#get-brake-mode>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        motor_brake_mode_e_t motor_get_brake_mode ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          motor_set_brake_mode(1, E_MOTOR_BRAKE_HOLD);
          printf("Brake Mode: %d\n", motor_get_brake_mode(1));
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** One of `motor_brake_mode_e_t`_, according to what was set for the motor,
or ``E_MOTOR_BRAKE_INVALID`` if the operation failed, setting ``errno``.

----

motor_get_current_limit
-----------------------

Gets the current limit for the motor in mA. The default limit is 2500 mA.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_current_limit <../cpp/motors.html#get-current-limit>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t motor_get_current_limit ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          printf("Motor Current Limit: %d\n", motor_get_current_limit(1));
          // Prints "Motor Current Limit: 2500"
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's current limit in mA or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_get_encoder_units
-----------------------

Gets the `encoder units <motors.html#motor-encoder-units-e-t>`_ set for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_encoder_units <../cpp/motors.html#get-encoder-units>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         motor_encoder_units_e_t motor_get_encoder_units ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          printf("Motor Encoder Units: %d\n", motor_get_encoder_units(1));
          // Prints E_MOTOR_ENCODER_DEGREES by default
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** One of `motor_encoder_units_e_t`_ according to what is set for the motor
or ``E_MOTOR_ENCODER_INVALID`` if the operation failed.

----

motor_get_gearing
-----------------

Gets the `gearset <motors.html#motor-gearset-e-t>`_` that was set for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_gearing <../cpp/motors.html#get-gearing>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         motor_gearset_e_t motor_get_gearing ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          printf("Motor Gearing Number: %d\n", motor_get_gearing(1));
          // Prints E_MOTOR_GEARSET_36 by default
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** One of `motor_gearset_e_t`_ according to what is set for the motor,
or ``E_GEARSET_INVALID`` if the operation failed.

----

motor_get_pos_pid
-----------------

Gets the position PID that was set for the motor. This function will return
zero for all of the parameters if the motor_set_pos_pid or
motor_set_pos_pid_full functions have not been used.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Additionally, in an error state all values of the returned struct are set
to their negative maximum values.

Analogous to `pros::Motor::get_pos_pid <../cpp/motors.html#get-pos-pid>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        motor_pid_full_s_t motor_get_pos_pid ( uint8_t port )

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
          motor_pid_full_s_t pid = motor_convert_pid_full(KF, KP, KI, KD,
                                   FILTER, LIMIT, THRESHOLD, LOOPSPEED);
          motor_set_pos_pid_full(1, pid);
          motor_pid_full_s_t pid_returned = motor_get_pos_pid(1);
          // pid_returned will be equal to pid
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** A ``motor_pid_full_s_t`` containing the position PID constants last set
to the given motor

----

motor_get_vel_pid
-----------------

Gets the velocity PID that was set for the motor. This function will return
zero for all of the parameters if the motor_set_vel_pid or
motor_set_vel_pid_full functions have not been used.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Additionally, in an error state all values of the returned struct are set
to their negative maximum values.

Analogous to `pros::Motor::get_vel_pid <../cpp/motors.html#get-vel-pid>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        motor_pid_full_s_t motor_get_vel_pid ( uint8_t port )

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
          motor_pid_full_s_t pid = motor_convert_pid_full(KF, KP, KI, KD,
                                   FILTER, LIMIT, THRESHOLD, LOOPSPEED);
          motor_set_vel_pid_full(1, pid);
          motor_pid_full_s_t pid_returned = motor_get_vel_pid(1);
          // pid_returned will be equal to pid
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** A ``motor_pid_full_s_t`` containing the velocity PID constants last set
to the given motor

----

motor_get_voltage_limit
-----------------------

Gets the voltage limit set by the user.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::get_voltage_limit <../cpp/motors.html#get-voltage-limit>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_get_voltage_limit ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          printf("Motor Voltage Limit: %d\n", motor_get_voltage_limit(1));
          // Prints 0 by default, indicating no limit
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's voltage limit in V or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_is_reversed
-----------------

Gets the operation direction of the motor as set by the user.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::is_reversed <../cpp/motors.html#is-reversed>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_is_reversed ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          printf("Is the motor reversed? %d\n", motor_is_reversed(1));
          // Prints "Is the motor reversed? 0"
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** 1 if the motor has been reversed and 0 if the motor was not reversed,
or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

motor_set_brake_mode
--------------------

Sets one of `motor_brake_mode_e_t`_ to the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::set_brake_mode <../cpp/motors.html#set-brake-mode>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_set_brake_mode ( uint8_t port,
                                       motor_brake_mode_e_t mode )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          motor_set_brake_mode(1, E_MOTOR_BRAKE_HOLD);
          printf("Brake Mode: %d\n", motor_get_brake_mode(1));
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 mode         The `motor_brake_mode_e_t`_ to set for the motor
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_set_current_limit
-----------------------

Sets the current limit for the motor in mA.

The default limit is 2500 mA.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::set_current_limit <../cpp/motors.html#set-current-limit>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_set_current_limit ( uint8_t port,
                                          int32_t limit )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          motor_set_current_limit(1, 1000);
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            // The motor will reduce its output at 1000 mA instead of the default 2500 mA
            delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 limit        The new current limit in mA
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_set_encoder_units
-----------------------

Sets one of `motor_encoder_units_e_t`_ for the motor encoder.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::set_encoder_units <../cpp/motors.html#set-encoder-units>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_set_encoder_units ( uint8_t port,
                                          motor_encoder_units_e_t units )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          motor_set_encoder_units(1, E_MOTOR_ENCODER_DEGREES);
          printf("Encoder Units: %d\n", motor_get_encoder_units(1));
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 units        The new motor encoder units
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_set_gearing
-----------------

Sets one of `motor_gearset_e_t`_ for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::set_gearing <../cpp/motors.html#set-gearing>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_set_gearing ( uint8_t port,
                                    motor_gearset_e_t gearset )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          motor_set_gearing(1, E_MOTOR_GEARSET_06);
          printf("Brake Mode: %d\n", motor_get_gearing(1));
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 gearset      The new motor gearset
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_set_pos_pid
-----------------

Sets one of `motor_pid_s_t`_ for the motor. This intended to just modify the
main PID constants.

Only non-zero values of the struct will change the existing motor constants.

.. warning:: This feature is in beta, it is advised to use caution when modifying
             the PID values. The motor could be damaged by particularly large constants.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::set_pos_pid <../cpp/motors.html#set-pos-pid>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_set_pos_pid ( uint8_t port,
                                    const motor_pid_s_t pid )

   .. tab :: Example
      .. highlight:: c
      ::

        #define KF 0
        #define KP 1.0f
        #define KI 0.001f
        #define KD 0.1f

        void initialize() {
          motor_pid_s_t pid = motor_convert_pid(KF, KP, KI, KD);
          motor_set_pos_pid(1, pid);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 pid          The new motor PID constants
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_set_pos_pid_full
----------------------

Sets one of `motor_pid_full_s_t`_ for the motor.

Only non-zero values of the struct will change the existing motor constants.

.. warning:: This feature is in beta, it is advised to use caution when modifying
             the PID values. The motor could be damaged by particularly large constants.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::set_pos_pid_full <../cpp/motors.html#set-pos-pid-full>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_set_pos_pid_full ( uint8_t port,
                                         const motor_pid_full_s_t pid )

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
          motor_pid_full_s_t pid = motor_convert_pid_full(KF, KP, KI, KD,
                                   FILTER, LIMIT, THRESHOLD, LOOPSPEED);
          motor_set_pos_pid_full(1, pid);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 pid          The new motor PID constants
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_set_reversed
------------------

Sets the reverse flag for the motor.

This will invert its movements and the values returned for its position.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::set_reversed <../cpp/motors.html#set-reversed>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_set_reversed ( uint8_t port,
                                     bool reverse )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          motor_set_reversed(1, true);
          printf("Is this motor reversed? %d\n", motor_is_reversed(1));
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 reverse      ``1`` reverses the motor, ``0`` is default
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_set_vel_pid
-----------------

Sets one of `motor_pid_s_t`_ for the motor. This intended to just modify the
main PID constants.

Only non-zero values of the struct will change the existing motor constants.

.. warning:: This feature is in beta, it is advised to use caution when modifying
             the PID values. The motor could be damaged by particularly large constants.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::set_vel_pid <../cpp/motors.html#set-vel-pid>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_set_vel_pid ( uint8_t port,
                                    const motor_pid_s_t pid )

   .. tab :: Example
      .. highlight:: c
      ::

        #define KF 0
        #define KP 1.0f
        #define KI 0.001f
        #define KD 0.1f

        void initialize() {
          motor_pid_s_t pid = motor_convert_pid(KF, KP, KI, KD);
          motor_set_vel_pid(1, pid);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 pid          The new motor PID constants
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_set_vel_pid_full
----------------------

Sets one of `motor_pid_full_s_t`_ for the motor.

Only non-zero values of the struct will change the existing motor constants.

.. warning:: This feature is in beta, it is advised to use caution when modifying
             the PID values. The motor could be damaged by particularly large constants.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::set_vel_pid_full <../cpp/motors.html#set-vel-pid-full>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_set_vel_pid_full ( uint8_t port,
                                         const motor_pid_full_s_t pid )

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
          motor_pid_full_s_t pid = motor_convert_pid_full(KF, KP, KI, KD,
                                   FILTER, LIMIT, THRESHOLD, LOOPSPEED);
          motor_set_vel_pid_full(1, pid);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 pid          The new motor PID constants
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_set_voltage_limit
-----------------------

Sets the voltage limit for the motor in mV.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::set_voltage_limit <../cpp/motors.html#set-voltage-limit>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_set_voltage_limit ( uint8_t port,
                                          int32_t limit )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          motor_set_voltage_limit(1, 10000);
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            // The motor will not output more than 10 V
            delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 limit        The new voltage limit in mV
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_set_zero_position
-----------------------

Sets the zero position for the motor in its encoder units.

This will be the future reference point for the motor's "absolute" position.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::set_zero_position <../cpp/motors.html#set-zero-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_set_zero_position ( uint8_t port,
                                          double position )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          motor_move_absolute(1, 100, 100); // Moves 100 units forward
          while (!((motor_get_position(1) - 100 < 105) && (motor_get_position(1) - 100 > 95))) {
            // Continue running this loop as long as the motor is not within +-5 units of its goal
            delay(2);
          }
          motor_move_absolute(1, 100, 100); // This does not cause a movement
          while (!((motor_get_position(1) - 100 < 105) && (motor_get_position(1) - 100 > 95))) {
            delay(2);
          }

          motor_set_zero_position(1, 80);
          motor_move_absolute(1, 100, 100); // Moves 120 units forward
          while (!((motor_get_position(1) - 100 < 105) && (motor_get_position(1) - 100 > 95))) {
            delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 position     The new reference position in its encoder units
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motor_tare_position
-------------------

Sets the "absolute" zero position of the motor to its current position.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `pros::Motor::tare_position <../cpp/motors.html#tare-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t motor_tare_position ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          motor_move_absolute(1, 100, 100); // Moves 100 units forward
          while (!((motor_get_position(1) - 100 < 105) && (motor_get_position(1) - 100 > 95))) {
            // Continue running this loop as long as the motor is not within +-5 units of its goal
            delay(2);
          }
          motor_move_absolute(1, 100, 100); // This does not cause a movement
          while (!((motor_get_position(1) - 100 < 105) && (motor_get_position(1) - 100 > 95))) {
            delay(2);
          }

          motor_tare_position(1);
          motor_move_absolute(1, 100, 100); // Moves 100 units forward
          while (!((motor_get_position(1) - 100 < 105) && (motor_get_position(1) - 100 > 95))) {
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

Macros
======

None.

Enumerated Values
=================

motor_brake_mode_e_t
--------------------

Indicates the current 'brake mode' of the motor.

::

  typedef enum motor_brake_mode_e {
    E_MOTOR_BRAKE_COAST = 0, // Motor coasts when stopped, traditional behavior
    E_MOTOR_BRAKE_BRAKE = 1, // Motor brakes when stopped
    E_MOTOR_BRAKE_HOLD = 2, // Motor actively holds position when stopped
    E_MOTOR_BRAKE_INVALID = INT32_MAX
  } motor_brake_mode_e_t;

================================== ===========================================================
 Value
================================== ===========================================================
 E_MOTOR_BRAKE_COAST                Motor coasts when stopped, traditional behavior
 E_MOTOR_BRAKE_BRAKE                Motor brakes when stopped 
 E_MOTOR_BRAKE_HOLD                 Motor actively holds position when stopped 
 E_MOTOR_BRAKE_INVALID              Invalid brake mode
================================== ===========================================================

----

motor_encoder_units_e_t
-----------------------

Indicates the units used by the motor's encoder.

::

  typedef enum motor_encoder_units_e {
    E_MOTOR_ENCODER_DEGREES = 0,   // Position is recorded as angle in degrees
                                   // as a floating point number
    E_MOTOR_ENCODER_ROTATIONS = 1, // Position is recorded as angle in rotations
                                   // as a floating point number
    E_MOTOR_ENCODER_COUNTS = 2,    // Position is recorded as raw encoder ticks
                                   // as a whole number
    E_MOTOR_ENCODER_INVALID = INT32_MAX
  } motor_encoder_units_e_t;

================================== =======================================================================
 Value
================================== =======================================================================
 E_MOTOR_ENCODER_DEGREES            Position is recorded as angle in degrees as a floating point number 
 E_MOTOR_ENCODER_ROTATIONS          Position is recorded as angle in rotations as a floating point number 
 E_MOTOR_ENCODER_COUNTS             Position is recorded as raw encoder ticks as a whole number 
 E_MOTOR_BRAKE_INVALID              Invalid motor encoder units
================================== =======================================================================

----

motor_fault_e_t
---------------

::

  typedef enum motor_fault_e {
  	E_MOTOR_FAULT_NO_FAULTS = 0x00,
  	E_MOTOR_FAULT_MOTOR_OVER_TEMP = 0x01,  // Analogous to motor_is_over_temp()
  	E_MOTOR_FAULT_DRIVER_FAULT = 0x02,     // Indicates a motor h-bridge fault
  	E_MOTOR_FAULT_OVER_CURRENT = 0x04,     // Analogous to motor_is_over_current()
  	E_MOTOR_FAULT_DRV_OVER_CURRENT = 0x08  // Indicates an h-bridge over current
  } motor_fault_e_t;

================================== ===========================================================
 Value
================================== ===========================================================
 E_MOTOR_FAULT_NO_FAULTS            No faults
 E_MOTOR_BRAKE_BRAKE                Motor brakes when stopped 
 E_MOTOR_BRAKE_HOLD                 Motor actively holds position when stopped 
 E_MOTOR_BRAKE_INVALID              Invalid brake mode
================================== ===========================================================

----

motor_flag_e_t
--------------

::

  typedef enum motor_flag_e {
    E_MOTOR_FLAGS_NONE = 0x00,
    E_MOTOR_FLAGS_BUSY = 0x01,           // Cannot currently communicate to the motor
    E_MOTOR_FLAGS_ZERO_VELOCITY = 0x02,  // Analogous to motor_is_stopped()
    E_MOTOR_FLAGS_ZERO_POSITION = 0x04   // Analogous to motor_get_zero_position_flag()
  } motor_flag_e_t;

================================== ===========================================================
 Value
================================== ===========================================================
 E_MOTOR_FLAGS_NONE                 There are no flags raised
 E_MOTOR_FLAGS_BUSY                 Cannot currently communicate to the motor 
 E_MOTOR_FLAGS_ZERO_VELOCITY        Analogous to motor_is_stopped() 
 E_MOTOR_FLAGS_ZERO_POSITION        Analogous to motor_get_zero_position_flag()
================================== ===========================================================

----

motor_gearset_e_t
-----------------

Indicates the internal gearing used by the motor.

::

  typedef enum motor_gearset_e {
  	E_MOTOR_GEARSET_36 = 0, // 36:1, 100 RPM, Red gear set
  	E_MOTOR_GEARSET_18 = 1, // 18:1, 200 RPM, Green gear set
  	E_MOTOR_GEARSET_06 = 2, // 6:1, 600 RPM, Blue gear set
  	E_MOTOR_GEARSET_INVALID = INT32_MAX
  } motor_gearset_e_t;

================================== ===========================================================
 Value
================================== ===========================================================
 E_MOTOR_GEARSET_36                 36:1, 100 RPM, Red gear set
 E_MOTOR_GEARSET_18                 18:1, 200 RPM, Green gear set
 E_MOTOR_GEARSET_06                 6:1, 600 RPM, Blue Gear Set
 E_MOTOR_GEARSET_INVALID            Error return code
================================== ===========================================================

Typedefs
========

motor_pid_full_s_t
------------------

Holds the information about a Motor's position or velocity PID controls.

These values are in 4.4 format, meaning that a value of 0x20 represents 2.0,
0x21 represents 2.0625, 0x22 represents 2.125, etc.

::

  typedef struct motor_pid_full_s {
    uint8_t kf;        // The feedforward constant
    uint8_t kp;        // The proportional constant
    uint8_t ki;        // The integral constants
    uint8_t kd;        // The derivative constant
    uint8_t filter;    // A constant used for filtering the profile acceleration
    uint16_t limit;    // The integral limit
    uint8_t threshold; // The threshold for determining if a position movement has
                       // reached its goal. This has no effect for velocity PID
                       // calculations.
    uint8_t loopspeed; // The rate at which the PID computation is run in ms
  } motor_pid_full_s_t;

----

motor_pid_s_t
-------------

Holds just the constants for a Motor's position or velocity PID controls.

These values are in 4.4 format, meaning that a value of 0x20 represents 2.0,
0x21 represents 2.0625, 0x22 represents 2.125, etc.

::

  typedef struct motor_pid_s {
    uint8_t kf;        // The feedforward constant
    uint8_t kp;        // The proportional constant
    uint8_t ki;        // The integral constants
    uint8_t kd;        // The derivative constant
  } motor_pid_s_t;
