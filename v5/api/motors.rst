=========
Motor API
=========

Functions
=========

motor_get_actual_velocity
-------------------------

::

  double motor_get_actual_velocity ( int port )

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

  motor_brake_mode_e_t motor_get_brake_mode ( int port )

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

  int32_t motor_get_current ( int port )

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

  int32_t motor_get_current_limit ( int port )

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

  int32_t motor_get_current_limit_flag ( int port )

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

  int32_t motor_get_direction ( int port )

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

  double motor_get_efficiency ( int port )

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

  motor_encoder_units_e_t motor_get_encoder_units ( int port )

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

  uint32_t motor_get_faults ( int port )

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

  uint32_t motor_get_flags ( int port )

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

  motor_gearset_e_t motor_get_gearing ( int port )

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

  int32_t motor_get_raw_position ( int port,
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

  int32_t motor_get_temp_limit_flag ( int port )

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

  double motor_get_position ( int port )

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

  double motor_get_power ( int port )

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

  int32_t motor_get_reverse ( int port )

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

  double motor_get_temperature ( int port )

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

  double motor_get_target ( int port )

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

  double motor_get_torque ( int port )

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

  int32_t motor_get_velocity ( int port )

Gets the velocity commanded to the motor by the user.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The commanded motor velocity from -128 to 127 or ``PROS_ERR`` if the
operation failed, setting ``errno``.

Macros
======

Enumerated Values
=================

motor_brake_mode_e_t
-----------------

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
