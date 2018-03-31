============
Motors C API
============

Functions
=========

motor_get_actual_velocity
-------------------------

Gets the actual velocity of the motor.

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

motor_get_brake_mode
--------------------

Gets the brake mode of the motor.

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

motor_get_current
-----------------

Gets the current drawn by the motor in mA.

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

motor_get_current_limit
-----------------------

Gets the current limit for the motor in mA.

The default limit is 2500 mA.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t motor_get_current_limit ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Current Limit: %d\n", motor_get_current_limit(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's current limit in mA or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_get_direction
-------------------

Gets the direction of movement for the motor.

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

motor_get_efficiency
--------------------

Gets the efficiency of the motor in percent

An efficiency of 100% means that the motor is moving electrically while
drawing no electrical power, and an efficiency of 0% means that the motor
is drawing power but not moving.

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

motor_get_encoder_units
-----------------------

Gets the encoder units set for the motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         motor_encoder_units_e_t motor_get_encoder_units ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            printf("Motor Encoder Units: %d\n", motor_get_encoder_units(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** One of `motor_encoder_units_e_t`_ according to what is set for the motor
or ``E_MOTOR_ENCODER_INVALID`` if the operation failed.

motor_get_faults
----------------

Gets the faults experienced by the motor.

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

motor_get_flags
---------------

Gets the flags set by the motor's operation.

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

motor_get_gearing
-----------------

Gets the `gearset <motor_gearset_e_t>`_` that was set for the motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         motor_gearset_e_t motor_get_gearing ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            printf("Motor Gearing Number: %d\n", motor_get_gearing(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** One of `motor_gearset_e_t`_ according to what is set for the motor,
or ``E_GEARSET_INVALID`` if the operation failed.

motor_get_position
------------------

Gets the absolute position of the motor in its encoder units.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double motor_get_position ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
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

motor_get_power
---------------

Gets the power drawn by the motor in Watts.

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

motor_get_raw_position
----------------------

Gets the raw encoder count of the motor at a given timestamp.

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
 timestamp    A pointer to a time in milliseconds (?) for which the
              encoder count will be returned
============ =======================================================

**Returns:** The raw encoder count at the given timestamp or ``PROS_ERR`` if the
operation failed, setting ``errno``.

motor_get_target
----------------

Gets the target position set for the motor by the user.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double motor_get_target ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
          while (true) {
            motor_move_absolute(1, 100);
            printf("Motor Target: %d\n", motor_get_target(1));
            // Will print 100
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The target position in its encoder units or ``PROS_ERR_F`` if the
operation failed, setting ``errno``.

motor_get_temperature
---------------------

Gets the temperature of the motor in degrees Celsius.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double motor_get_temperature ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
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

motor_get_torque
----------------

Gets the torque generated by the motor in Nm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double motor_get_torque ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
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

motor_get_velocity
------------------

Gets the velocity commanded to the motor by the user.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_get_velocity ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Commanded Velocity: %d\n", motor_get_velocity(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The commanded motor velocity from -128 to 127 or ``PROS_ERR`` if the
operation failed, setting ``errno``.

motor_get_voltage
-----------------

Gets the voltage delivered to the motor in V.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double motor_get_voltage ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
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

**Returns:** The motor's voltage in V or ``PROS_ERR_F`` if the operation failed,
setting ``errno``.

motor_get_voltage_limit
-----------------------

Gets the voltage limit set by the user.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_get_voltage_limit ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
          while (true) {
            printf("Motor Voltage Limit: %d\n", motor_get_voltage_limit(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's voltage limit in V or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_get_zero_position_flag
----------------------------

Gets the zero position flag for the motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_get_zero_position_flag ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
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

motor_get_zero_velocity_flag
----------------------------

Gets the zero velocity flag for the motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_is_stopped ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
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

motor_is_over_current
---------------------

Detects if the motor is drawing over its current limit.

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

motor_is_reversed
-----------------

Gets the operation direction of the motor as set by the user.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_is_reversed ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
          while (true) {
            printf("Is the Motor reversed?: %lf\n", motor_is_reversed(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** 1 if the motor has been reversed and 0 if the motor was not reversed,
or ``PROS_ERR`` if the operation failed, setting ``errno``.

motor_is_over_temp
------------------

Gets the temperature limit flag for the motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t motor_is_over_temp ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
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

motor_move
----------

Sets the voltage for the motor from -127 to 127.

This is designed to map easily to the input from the controller's analog
stick for simple opcontrol use. The actual behavior of the motor is analogous
to use of `motor_move_voltage`_, or `motorSet <../../../cortex/api/index.html#motorSet>`_
from the PROS 2 API.

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

motor_move_absolute
-------------------

Sets the target absolute position for the motor to move to.

This movement is relative to the position of the motor when initialized or
the position when it was most recently reset with `motor_tare_position`_.

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
          motor_move_absolute(1, 100, 100); // Move 100 units forward
          motor_move_absolute(1, 100, 100); // This will not cause a movement

          motor_tare_position(1);
          motor_move_absolute(1, 100, 100); // This will move 100 units forward
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

motor_move_relative
-------------------

Sets the relative target position for the motor to move to.

This movement is relative to the current position of the motor as given in
`motor_get_position`_.

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
          motor_move_relative(1, 100, 100); // Move 100 units forward
          motor_move_relative(1, 100, 100); // Also move 100 units forward
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

motor_move_velocity
-------------------

Sets the velocity for the motor.

This velocity corresponds to different actual speeds depending on the gearset
used for the motor. This results in a range of +-100 for
`E_MOTOR_GEARSET_36 <motor_gearset_e_t>`_,
+-200 for `E_MOTOR_GEARSET_18 <motor_gearset_e_t>`_, and +-600 for
`E_MOTOR_GEARSET_6 <motor_gearset_e_t>`_. The velocity
is held with PID to ensure consistent speed, as opposed to setting the motor's
voltage.

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
          motor_move_velocity(1,0);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 velocity     The new motor velocity from +-100, +-200, or +-600 depending
              on the motor's `gearset <motor_gearset_e_t>`_
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_move_voltage
------------------

Sets the voltage for the motor from -12000 mV to 12000 mV.

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
          motor_move_voltage(1,0);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 voltage      The new PWM value from -128 to 127
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_tare_position
-------------------

Sets the "absolute" zero position of the motor to its current position.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t motor_tare_position ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          motor_move_absolute(1, 100, 100); // Move 100 units forward
          motor_move_absolute(1, 100, 100); // This will not cause a movement

          motor_tare_position(1);
          motor_move_absolute(1, 100, 100); // This will move 100 units forward
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_set_brake_mode
--------------------

Sets one of `motor_brake_mode_e_t`_ to the motor.

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

motor_set_current_limit
-----------------------

Sets the current limit for the motor in mA.

The default limit is 2500 mA.

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

motor_set_encoder_units
-----------------------

Sets one of `motor_encoder_units_e_t`_ for the motor encoder.

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

motor_set_gearing
-----------------

Sets one of `motor_gearset_e_t`_ for the motor.

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

motor_set_reversed
------------------

Sets the reverse flag for the motor.

This will invert its movements and the values returned for its position.

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

motor_set_voltage_limit
-----------------------

Sets the voltage limit for the motor in mV.

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
          motor_set_voltage_limit(1,10000);
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
 limit        The new voltage limit in Volts
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_set_zero_position
-----------------------

Sets the zero position for the motor in its encoder units.

This will be the future reference point for the motor's "absolute" position.

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
          motor_move_absolute(1, 100, 100); // Move 100 units forward
          motor_move_absolute(1, 100, 100); // This will not cause a movement

          motor_set_zero_position(1, 80);
          motor_move_absolute(1, 100, 100); // This will move 120 units forward
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 position     The new reference position in its encoder units
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

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

motor_encoder_units_e_t
-----------------------

Indicates the units used by the motor's encoder.

::

  typedef enum motor_encoder_units_e {
    E_MOTOR_ENCODER_DEGREES = 0,
    E_MOTOR_ENCODER_ROTATIONS = 1,
    E_MOTOR_ENCODER_COUNTS = 2,
    E_MOTOR_ENCODER_INVALID = INT32_MAX
  } motor_encoder_units_e_t;

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

Typedefs
========

None.
