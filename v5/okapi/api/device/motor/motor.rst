=====
Motor
=====

.. contents:: :local:

okapi::Motor
============

An `AbstractMotor <abstract-abstract-motor.html>`_ which is also a ``pros::Motor``. This is a V5
motor, not an ADI (or 3-wire) motor.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Motor(const std::uint8_t port,
              const bool reverse = false,
              const motor_encoder_units_e_t encoder_units = E_MOTOR_ENCODER_DEGREES,
              const motor_gearset_e_t gearset = E_MOTOR_GEARSET_36)

=============== ===================================================================
 Parameters
=============== ===================================================================
 port            The V5 port number the motor is in.
 reverse         Whether the motor's direction is reversed.
 encoder_units   The motor's encoder units.
 gearset         The motor's gearset.
=============== ===================================================================

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
          using namespace okapi::literals;
          1_m; // Motor in port 1
          1_rm; // Reversed motor in port 1
        }

=============== ===================================================================
Parameters
=============== ===================================================================
 iport           The V5 port number the motor is in.
=============== ===================================================================

Methods
-------

moveAbsolute
~~~~~~~~~~~~

Sets the target absolute position for the motor to move to.

This movement is relative to the position of the motor when initialized or the position when it was
most recently reset with ``set_zero_position()``.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t moveAbsolute(const double iposition, const std::int32_t ivelocity) const override

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

        virtual std::int32_t moveRelative(const double iposition, const std::int32_t ivelocity) const override

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

        virtual std::int32_t moveVelocity(const std::int16_t ivelocity) const override

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

        virtual std::int32_t moveVoltage(const std::int16_t ivoltage) const override

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

        virtual double getTargetPosition() const override

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

        virtual double getPosition() const override

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

        virtual std::int32_t getTargetVelocity() const override

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

        virtual double getActualVelocity() const override

**Returns:** The motor's actual velocity in ``motor_encoder_units_e_t`` per second or
``PROS_ERR_F`` if the operation failed, setting errno.

----

tarePosition
~~~~~~~~~~~~

Sets the "absolute" zero position of the motor to its current position.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t tarePosition() const override

=============== ===================================================================
 Parameters
=============== ===================================================================
 iposition       The new reference position in its encoder units.
=============== ===================================================================

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

        virtual std::int32_t setBrakeMode(const motor_brake_mode_e_t imode) const override

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

        virtual std::int32_t setCurrentLimit(const std::int32_t ilimit) const override

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

        virtual std::int32_t setEncoderUnits(const motor_encoder_units_e_t iunits) const override

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

        virtual std::int32_t setGearing(const motor_gearset_e_t igearset) const override

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

        virtual std::int32_t setReversed(const bool ireverse) const override

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

        virtual std::int32_t setVoltageLimit(const std::int32_t ilimit) const override

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

        virtual IntegratedEncoder getEncoder() const override

**Returns:** The encoder associated with this motor.

----

controllerSet
~~~~~~~~~~~~~

Writes the value of the controller output. This method might be automatically called in another
thread by the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void controllerSet(const double ivalue) override

=============== ===================================================================
Parameters
=============== ===================================================================
 ivalue          The controller's output.
=============== ===================================================================
