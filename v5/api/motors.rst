=========
Motor API
=========

Functions
=========

motor_get_actual_velocity
-------------------------

::

  double motor_get_actual_velocity ( uint8_t port )

Gets the actual velocity of the motor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's actual velocity in `motor_encoder_units_e_t`_ per second
or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

motor_get_brake_mode
--------------------

::

  motor_brake_mode_e_t motor_get_brake_mode ( uint8_t port )

Gets the brake mode of the motor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** One of `motor_brake_mode_e_t`_, according to what was set for the motor,
or ``E_MOTOR_BRAKE_INVALID`` if the operation failed, setting ``errno``.

motor_get_current
-----------------

::

  int32_t motor_get_current ( uint8_t port )

Gets the current drawn by the motor in mA.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's current in mA or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_get_current_limit
-----------------------

::

  int32_t motor_get_current_limit ( uint8_t port )

Gets the current limit for the motor in mA.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's current limit in mA or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_get_current_limit_flag
----------------------------

::

  int32_t motor_get_current_limit_flag ( uint8_t port )

Gets the current limit flag for the motor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** 1 if the motor's current limit is being exceeded and 0 if the current
limit is not exceeded, or ``PROS_ERR`` if the operation failed, setting
``errno``.

motor_get_direction
-------------------

::

  int32_t motor_get_direction ( uint8_t port )

Gets the direction of movement for the motor.

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

::

  double motor_get_efficiency ( uint8_t port )

Gets the efficiency of the motor in percent

An efficiency of 100% means that the motor is moving electrically while
drawing no electrical power, and an efficiency of 0% means that the motor
is drawing power but not moving.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's efficiency in percent or ``PROS_ERR_F`` if the operation
failed, setting ``errno``.

motor_get_encoder_units
-----------------------

::

  motor_encoder_units_e_t motor_get_encoder_units ( uint8_t port )

Gets the encoder units set for the motor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** One of `motor_encoder_units_e_t`_ according to what is set for the motor
or ``E_MOTOR_ENCODER_INVALID`` if the operation failed.

motor_get_faults
----------------

::

  uint32_t motor_get_faults ( uint8_t port )

Gets the faults experienced by the motor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** Currently unknown bitfield.

motor_get_flags
---------------

::

  uint32_t motor_get_flags ( uint8_t port )

Gets the flags set by the motor's operation.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** A currently unknown bitfield

motor_get_gearing
-----------------

::

  motor_gearset_e_t motor_get_gearing ( uint8_t port )

Gets the gearset that was set for the motor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** One of `motor_gearset_e_t`_ according to what is set for the motor,
or ``E_GEARSET_INVALID`` if the operation failed.

motor_get_raw_position
----------------------

::

  int32_t motor_get_raw_position ( uint8_t port,
                                 uint32_t* timestamp )

Gets the raw encoder count of the motor at a given timestamp.

============ =======================================================
 Parameters
============ =======================================================
 port         The V5 port number from 1-21
 timestamp    A pointer to a time in milliseconds (?) for which the
              encoder count will be returned
============ =======================================================

**Returns:** The raw encoder count at the given timestamp or ``PROS_ERR`` if the
operation failed, setting ``errno``.

motor_get_temp_limit_flag
-------------------------

::

  int32_t motor_get_temp_limit_flag ( uint8_t port )

Gets the temperature limit flag for the motor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** 1 if the temperature limit is exceeded and 0 if the the
temperature is below the limit, or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_get_position
------------------

::

  double motor_get_position ( uint8_t port )

Gets the absolute position of the motor in its encoder units.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's absolute position in its encoder units or ``PROS_ERR_F``
if the operation failed, setting ``errno``.

motor_get_power
---------------

::

  double motor_get_power ( uint8_t port )

Gets the power drawn by the motor in Watts.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's power draw in Watts or ``PROS_ERR_F`` if the operation
failed, setting ``errno``.

motor_get_reverse
-----------------

::

  int32_t motor_get_reverse ( uint8_t port )

Gets the operation direction of the motor as set by the user.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** 1 if the motor has been reversed and 0 if the motor was not reversed,
or ``PROS_ERR`` if the operation failed, setting ``errno``.

motor_get_temperature
---------------------

::

  double motor_get_temperature ( uint8_t port )

Gets the temperature of the motor in degrees Celsius.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's temperature in degrees Celsius or ``PROS_ERR_F`` if the
operation failed, setting ``errno``.

motor_get_target
----------------

::

  double motor_get_target ( uint8_t port )

Gets the target position set for the motor by the user.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The target position in its encoder units or ``PROS_ERR_F`` if the
operation failed, setting ``errno``.

motor_get_torque
----------------

::

  double motor_get_torque ( uint8_t port )

Gets the torque generated by the motor in NM.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's torque in NM or ``PROS_ERR_F`` if the operation failed,
setting ``errno``.

motor_get_velocity
------------------

::

  int32_t motor_get_velocity ( uint8_t port )

Gets the velocity commanded to the motor by the user.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The commanded motor velocity from -128 to 127 or ``PROS_ERR`` if the
operation failed, setting ``errno``.

motor_get_voltage
-----------------

::

  double motor_get_voltage ( uint8_t port )

Gets the voltage delivered to the motor in V.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's voltage in V or ``PROS_ERR_F`` if the operation failed,
setting ``errno``.

motor_get_voltage_limit
-----------------------

::

  int32_t motor_get_voltage_limit ( uint8_t port )

Gets the voltage limit set by the user.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's voltage limit in V or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_get_zero_velocity_flag
----------------------------

::

  int32_t motor_get_zero_velocity_flag ( uint8_t port )

Gets the zero velocity flag for the motor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** ``1`` if the motor is not moving and ``0`` if the motor is moving,
or ``PROS_ERR`` if the operation failed, setting ``errno``.

motor_get_zero_position_flag
----------------------------

::

  int32_t motor_get_zero_position_flag ( uint8_t port )

Gets the zero position flag for the motor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** ``1`` if the motor is at zero absolute position and ``0`` if the motor has
moved from its absolute zero, or ``PROS_ERR`` if the operation failed
setting ``errno``.

motor_reset_position
--------------------

::

  int32_t motor_reset_position ( uint8_t port )

Sets the "absolute" zero position of the motor to its current position.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_set_absolute_target
-------------------------

::

  int32_t motor_set_absolute_target ( uint8_t port,
                                      double position,
                                      int32_t velocity )

Sets the target absolute position for the motor to move to.

This movement is relative to the position of the motor when initialized or
the position when it was most recently reset with `motor_reset_position`_.

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 position     The absolute position to move to in the motor's encoder units
 velocity     The maximum allowable velocity for the movement
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_set_brake_mode
--------------------

::

  int32_t motor_set_brake_mode ( uint8_t port,
                                 motor_brake_mode_e_t mode )

Sets one of `motor_brake_mode_e_t`_ to the motor.

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

::

  int32_t motor_set_current_limit ( uint8_t port,
                                    int32_t limit )

Sets the current limit for the motor in mA.

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

::

  int32_t motor_set_encoder_units ( uint8_t port,
                                    motor_encoder_units_e_t units )

Sets one of `motor_encoder_units_e_t`_ for the motor encoder.

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

::

  int32_t motor_set_gearing ( uint8_t port,
                              motor_gearset_e_t gearset )

Sets one of `motor_gearset_e_t`_ for the motor.


============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 gearset      The new motor gearset
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_set_position
------------------

::

  int32_t motor_set_position ( uint8_t port,
                               double position )

Sets the position for the motor in its encoder units.

This will be the future reference point for the motor's "absolute" position.

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 position     The new reference position in its encoder units
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_set_relative_target
-------------------------

::

  int32_t motor_set_relative_target ( uint8_t port,
                                      double position,
                                      int32_t velocity )

Sets the relative target position for the motor to move to.

This movement is relative to the current position of the motor as given in
`motor_get_position`_.

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 position     The relative position to move to in the motor's encoder units
 velocity     The maximum allowable velocity for the movement
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_set_reverse
-----------------

::

  int32_t motor_set_reverse ( uint8_t port,
                              bool reverse )

Sets the reverse flag for the motor.

This will invert its movements and the values returned for its position.

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 reverse      ``1`` reverses the motor, ``0`` is default
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_set_velocity
------------------

::

  int32_t motor_set_velocity ( uint8_t port,
                               int16_t velocity )

Sets the velocity for the motor from -128 to 127.

This velocity corresponds to different actual speeds depending on the gearset
used for the motor. The velocity is held with PID to ensure consistent speed,
as opposed to setting the motor's voltage.

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 velocity     The new motor velocity from -128 to 127
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_set_voltage
-----------------

::

  int32_t motor_set_voltage ( uint8_t port,
                              int16_t voltage )

Sets the voltage for the motor from -128 to 127.

This voltage is controlled by PWM, and does not immediately correspond to
the value returned by `motor_get_voltage`_ (which is in Volts)

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 voltage      The new PWM value from -128 to 127
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

motor_set_voltage_limit
-----------------------

::

  int32_t motor_set_voltage_limit ( uint8_t port,
                                    int32_t limit )

Sets the voltage limit for the motor in Volts.

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 limit        The new voltage limit in Volts
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
