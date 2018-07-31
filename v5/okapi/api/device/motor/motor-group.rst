===========
Motor Group
===========

.. contents:: :local:

okapi::MotorGroup
=================

An `AbstractMotor <abstract-abstract-motor.html>`_ which is group of multiple
`Motor <motor.html>`_. This class can be used to pass a group of motors that mechanically act as
one motor, such as one side of a drivetrain or the motors on a lift.

The `Motor <motor.html>`_ class is implicitly constructable, which means that you can just pass
port numbers to a `MotorGroup` instead of using the literals or full constructors.

This class implements methods such as ``getTargetPosition()`` by only calling the method on the
first motor. The rest of the methods, such as ``moveVelocity()`` work as expected and are called on
all the motors.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        MotorGroup(const std::initializer_list<Motor> &imotors)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          using namespace okapi::literals;

          // Two motors in ports 1 and 2 grouped together
          okapi::MotorGroup group1({1, 2});
          okapi::MotorGroup group2({1_mtr, 2_mtr});
          okapi::MotorGroup group3({Motor(1), Motor(2)});
        }

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotors         The motors to use.
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
This results in a range of ``+-100`` for ``red``, ``+-200`` for
``green``, and ``+-600`` for ``blue``. The velocity is held with PID to
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

move
~~~~

Sets the voltage for the motor from ``-127`` to ``127``.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t move(const std::int8_t ivoltage) const override

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

Sets one of ``AbstractMotor::brakeMode`` to the motor.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setBrakeMode(const AbstractMotor::brakeMode imode) const override

=============== ===================================================================
 Parameters
=============== ===================================================================
 imode           The new motor brake mode.
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

Sets one of ``AbstractMotor::encoderUnits`` for the motor encoder.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setEncoderUnits(const AbstractMotor::encoderUnits iunits) const override

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

Sets one of ``AbstractMotor::gearset`` for the motor.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setGearing(const AbstractMotor::gearset igearset) const override

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

controllerSet
~~~~~~~~~~~~~

Writes the value of the controller output. This method might be automatically called in another
thread by the controller. The range of input values is expected to be [-1, 1].

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void controllerSet(const double ivalue) override

=============== ===================================================================
Parameters
=============== ===================================================================
 ivalue          The controller's output in the range [-1, 1].
=============== ===================================================================

----

getEncoder
~~~~~~~~~~

Returns the encoder associated with this motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::shared_ptr<ContinuousRotarySensor> getEncoder() const override

**Returns:** The encoder associated with this motor.
