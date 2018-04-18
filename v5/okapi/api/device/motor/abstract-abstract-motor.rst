=========================
(Abstract) Abstract Motor
=========================

.. contents:: :local:

okapi::AbstractMotor
====================

Methods
-------

moveAbsolute
~~~~~~~~~~~~

Sets the target absolute position for the motor to move to.

This movement is relative to the position of the motor when initialized or the position when it was
most recently reset with ``setZeroPosition()``.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t moveAbsolute(const double iposition, const std::int32_t ivelocity) const = 0

=============== ===================================================================
 Parameters
=============== ===================================================================
 iposition        The absolute position to move to in the motor's encoder units.
 ivelocity        The maximum allowable velocity for the movement in RPM.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

moveRelative
~~~~~~~~~~~~

Sets the relative target position for the motor to move to.

This movement is relative to the current position of the motor. Providing ``10.0`` as the position
parameter would result in the motor moving clockwise ``10`` units, no matter what the current
position is.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t moveRelative(const double iposition, const std::int32_t ivelocity) const = 0

=============== ===================================================================
 Parameters
=============== ===================================================================
 iposition        The absolute position to move to in the motor's encoder units.
 ivelocity        The maximum allowable velocity for the movement in RPM.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

moveVelocity
~~~~~~~~~~~~

Sets the velocity for the motor.

This velocity corresponds to different actual speeds depending on the gearset used for the motor.
This results in a range of ``+-100`` for ``E_MOTOR_GEARSET_36``, ``+-200`` for
``E_MOTOR_GEARSET_18``, and ``+-600`` for ``E_MOTOR_GEARSET_6``. The velocity is held with PID to
ensure consistent speed, as opposed to setting the motor's voltage.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t moveVelocity(const std::int16_t ivelocity) const = 0

=============== ===================================================================
 Parameters
=============== ===================================================================
 ivelocity       The new motor velocity from ``-+-100``, ``+-200``, or ``+-600`` depending on the motor's gearset.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

moveVoltage
~~~~~~~~~~~

Sets the voltage for the motor from ``-127`` to ``127``.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t moveVoltage(const std::int16_t ivoltage) const = 0

=============== ===================================================================
 Parameters
=============== ===================================================================
 ivoltage        The new voltage value from ``-127`` to ``127``.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

getTargetPosition
~~~~~~~~~~~~~~~~~

Gets the target position set for the motor by the user.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getTargetPosition() const = 0

**Returns:** The target position in its encoder units or ``PROS_ERR_F`` if the operation failed,
setting errno.

----

getPosition
~~~~~~~~~~~

Gets the absolute position of the motor in its encoder units.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getPosition() const = 0

**Returns:** The motor's absolute position in its encoder units or ``PROS_ERR_F`` if the operation
failed, setting errno.

----

getTargetVelocity
~~~~~~~~~~~~~~~~~

Gets the velocity commanded to the motor by the user.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t getTargetVelocity() const = 0

**Returns:** The commanded motor velocity from ``+-100``, ``+-200``, or ``+-600``, or ``PROS_ERR``
if the operation failed, setting errno.

----

getActualVelocity
~~~~~~~~~~~~~~~~~

Gets the actual velocity of the motor.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getActualVelocity() const = 0

**Returns:** The motor's actual velocity in ``motor_encoder_units_e_t`` per second or
``PROS_ERR_F`` if the operation failed, setting errno.

----

tarePosition
~~~~~~~~~~~~

Sets the "absolute" zero position of the motor to its current position.

This will be the future reference point for the motor's "absolute" position.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t tarePosition() const = 0

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

setBrakeMode
~~~~~~~~~~~~

Sets one of ``motor_brake_mode_e_t`` to the motor.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setBrakeMode(const motor_brake_mode_e_t imode) const = 0

=============== ===================================================================
 Parameters
=============== ===================================================================
 imode           The ``motor_brake_mode_e_t`` to set for the motor.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

setCurrentLimit
~~~~~~~~~~~~~~~

Sets the current limit for the motor in mA.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setCurrentLimit(const std::int32_t ilimit) const = 0

=============== ===================================================================
 Parameters
=============== ===================================================================
 ilimit          The new current limit in mA.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

setEncoderUnits
~~~~~~~~~~~~~~~

Sets one of ``motor_encoder_units_e_t`` for the motor encoder.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setEncoderUnits(const motor_encoder_units_e_t iunits) const = 0

=============== ===================================================================
 Parameters
=============== ===================================================================
 iunits          The new motor encoder units.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

setGearing
~~~~~~~~~~

Sets one of ``motor_gearset_e_t`` for the motor.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setGearing(const motor_gearset_e_t igearset) const = 0

=============== ===================================================================
 Parameters
=============== ===================================================================
 igearset        The new motor gearset.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

setReversed
~~~~~~~~~~~

Sets the reverse flag for the motor.

This will invert its movements and the values returned for its position.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setReversed(const bool ireverse) const = 0

=============== ===================================================================
 Parameters
=============== ===================================================================
 ireverse        ``true`` reverses the motor, ``false`` is default.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

setVoltageLimit
~~~~~~~~~~~~~~~

Sets the voltage limit for the motor in Volts.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setVoltageLimit(const std::int32_t ilimit) const = 0

=============== ===================================================================
 Parameters
=============== ===================================================================
 ilimit          The new voltage limit in Volts.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

getEncoder
~~~~~~~~~~

Returns the encoder associated with this motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual IntegratedEncoder getEncoder() const = 0

**Returns:** The encoder associated with this motor.
