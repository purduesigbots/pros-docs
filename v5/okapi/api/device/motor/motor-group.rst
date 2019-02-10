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

Throws a ``std::invalid_argument`` exception if no motors are passed in.

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
 imotors         The motors in the group.
=============== ===================================================================

Movement Methods
----------------

moveAbsolute
~~~~~~~~~~~~

Sets the target absolute position for the motor to move to.

This movement is relative to the position of the motor when initialized or the position when it was
most recently reset with ``set_zero_position()``.

This function simply sets the target for the motor, it does not block program execution until the
movement finishes.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t moveAbsolute(double iposition, std::int32_t ivelocity) override

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

This function simply sets the target for the motor, it does not block program execution until the
movement finishes.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t moveRelative(double iposition, std::int32_t ivelocity) override

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

        virtual std::int32_t moveVelocity(std::int16_t ivelocity) override

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

Sets the voltage for the motor from ``-12000`` to ``12000``.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t moveVoltage(std::int16_t ivoltage) override

=============== ===================================================================
 Parameters
=============== ===================================================================
 ivoltage        The new voltage value from ``-12000`` to ``12000``.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

modifyProfiledVelocity
~~~~~~~~~~~~~~~~~~~~~~

Changes the output velocity for a profiled movement (`moveAbsolute`_ or `moveRelative`_). This will
have no effect if the motor is not following a profiled movement.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t modifyProfiledVelocity(std::int32_t ivelocity) override

=============== ===================================================================
 Parameters
=============== ===================================================================
 ivelocity       The new motor velocity from ``-+-100``, ``+-200``, or ``+-600`` depending on the motor's gearset.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

Telemetry Methods
-----------------

getTargetPosition
~~~~~~~~~~~~~~~~~

Gets the target position set for the motor by the user.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getTargetPosition() override

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

        virtual double getPosition() override

**Returns:** The motor's absolute position in its encoder units or ``PROS_ERR_F`` if the operation
failed, setting errno.

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

        virtual std::int32_t tarePosition() override

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

        virtual std::int32_t getTargetVelocity() override

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

        virtual double getActualVelocity() override

**Returns:** The motor's actual velocity in RPM or ``PROS_ERR_F`` if the operation failed,
setting errno.

----

getCurrentDraw
~~~~~~~~~~~~~~

Gets the current drawn by the motor in mA.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t getCurrentDraw() override

**Returns:** The motor's current in mA or ``PROS_ERR`` if the operation failed, setting errno.

----

getDirection
~~~~~~~~~~~~

Gets the direction of movement for the motor.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t getDirection() override

**Returns:** ``1`` for moving in the positive direction, ``-1`` for moving in the negative
direction, or ``PROS_ERR`` if the operation failed, setting errno.

----

getEfficiency
~~~~~~~~~~~~~

Gets the efficiency of the motor in percent.

An efficiency of 100% means that the motor is moving electrically while drawing no electrical
power, and an efficiency of 0% means that the motor is drawing power but not moving.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getEfficiency() override

**Returns:** The motor's efficiency in percent or ``PROS_ERR`` if the operation failed,
setting errno.

----

isOverCurrent
~~~~~~~~~~~~~

Checks if the motor is drawing over its current limit.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t isOverCurrent() override

**Returns:** ``1`` if the motor's current limit is being exceeded and ``0`` if the current limit
is not exceeded, or ``PROS_ERR`` if the operation failed, setting errno.

----

isOverTemp
~~~~~~~~~~

Checks if the motor's temperature is above its limit.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t isOverTemp() override

**Returns:** ``1`` if the temperature limit is exceeded and ``0`` if the the temperature is below
the limit, or ``PROS_ERR`` if the operation failed, setting errno.

----

isStopped
~~~~~~~~~

Checks if the motor is stopped.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t isStopped() override

**Returns:** ``1`` if the motor is not moving, ``0`` if the motor is moving, or ``PROS_ERR`` if
the operation failed, setting errno.

----

getZeroPositionFlag
~~~~~~~~~~~~~~~~~~~

Checks if the motor is at its zero position.

Although this function forwards data from the motor, the motor presently does not provide any
value. This function returns PROS_ERR with errno set to ENOSYS.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t getZeroPositionFlag() override

**Returns:** ``1`` if the motor is at zero absolute position, ``0`` if the motor has moved from
its absolute zero, or ``PROS_ERR`` if the operation failed, setting errno.

----

getFaults
~~~~~~~~~

Gets the faults experienced by the motor. Compare this bitfield to the bitmasks in
``pros::motor_fault_e_t``.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual uint32_t getFaults() override

**Returns:** A currently unknown bitfield containing the motor's faults.
``0b00000100`` = Current Limit Hit

----

getFlags
~~~~~~~~

Gets the flags set by the motor's operation. Compare this bitfield to the bitmasks in
``pros::motor_flag_e_t``.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual uint32_t getFlags() override

**Returns:** A currently unknown bitfield containing the motor's flags. These seem to be unrelated
to the individual ``get_specific_flag`` functions

----

getRawPosition
~~~~~~~~~~~~~~

Gets the raw encoder count of the motor at a given timestamp.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t getRawPosition(std::uint32_t *timestamp) override;

=============== ===================================================================
 Parameters
=============== ===================================================================
 timestamp       A pointer to a time in milliseconds for which the encoder count will be returned. If ``NULL``, the timestamp at which the encoder count was read will not be supplied
=============== ===================================================================

**Returns:** The raw encoder count at the given timestamp or ``PROS_ERR`` if
the operation failed, setting errno.

----

getPower
~~~~~~~~

Gets the power drawn by the motor in Watts.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getPower() override;

**Returns:** The motor's power draw in Watts or ``PROS_ERR`` if
the operation failed, setting errno.

----

getTemperature
~~~~~~~~~~~~~~

Gets the temperature of the motor in degrees Celsius.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getTemperature() override;

**Returns:** The motor's temperature in degrees Celsius or ``PROS_ERR`` if
the operation failed, setting errno.

----

getTorque
~~~~~~~~~

Gets the torque generated by the motor in Newton Metres (Nm).

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getTorque() override;

**Returns:** The motor's torque in Nm or ``PROS_ERR`` if
the operation failed, setting errno.

----

getVoltage
~~~~~~~~~~

Gets the voltage delivered to the motor in millivolts.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t getVoltage() override;

**Returns:** The motor's voltage in mV or ``PROS_ERR`` if
the operation failed, setting errno.

Configuration Methods
---------------------

setBrakeMode
~~~~~~~~~~~~

Sets one of ``AbstractMotor::brakeMode`` to the motor.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setBrakeMode(AbstractMotor::brakeMode imode) override

=============== ===================================================================
 Parameters
=============== ===================================================================
 imode           The new motor brake mode.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

getBrakeMode
~~~~~~~~~~~~

Gets the brake mode that was set for the motor.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual brakeMode getBrakeMode() override

**Returns:** One of ``brakeMode``, according to what was set for the motor, or
``brakeMode::invalid`` if the operation failed, setting errno.

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

        virtual std::int32_t setCurrentLimit(std::int32_t ilimit) override

=============== ===================================================================
 Parameters
=============== ===================================================================
 ilimit          The new current limit in mA.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

getCurrentLimit
~~~~~~~~~~~~~~~

Gets the current limit for the motor in mA.

The default value is ``2500`` mA.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t getCurrentLimit() override

**Returns:** The motor's current limit in mA or ``PROS_ERR`` if the operation failed,
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

        virtual std::int32_t setEncoderUnits(AbstractMotor::encoderUnits iunits) override

=============== ===================================================================
 Parameters
=============== ===================================================================
 iunits          The new motor encoder units.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

getEncoderUnits
~~~~~~~~~~~~~~~

Gets the encoder units that were set for the motor.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual encoderUnits getEncoderUnits() override

**Returns:** One of ``encoderUnits`` according to what is set for the motor or
``encoderUnits::invalid`` if the operation failed.

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

        virtual std::int32_t setGearing(AbstractMotor::gearset igearset) override

=============== ===================================================================
 Parameters
=============== ===================================================================
 igearset        The new motor gearset.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

getGearing
~~~~~~~~~~

Gets the gearset that was set for the motor.

This function uses the following values of errno when an error state is reached:
  EACCES - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual gearset getGearing() override

**Returns:** One of ``gearset`` according to what is set for the motor, or ``gearset::invalid`` if
the operation failed.

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

        virtual std::int32_t setReversed(bool ireverse) override

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

        virtual std::int32_t setVoltageLimit(std::int32_t ilimit) override

=============== ===================================================================
 Parameters
=============== ===================================================================
 ilimit          The new voltage limit in Volts.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

setPosPID
~~~~~~~~~

Sets new PID constants.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setPosPID(double ikF, double ikP, double ikI, double ikD) override

=============== ===================================================================
Parameters
=============== ===================================================================
 ikF             The feed-forward constant.
 ikP             The proportional constant.
 ikI             The integral constant.
 ikD             The derivative constant.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

setPosPIDFull
~~~~~~~~~~~~~

Sets new PID constants.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setPosPID(double ikF, double ikP, double ikI, double ikD,
                                       double ifilter, double ilimit, double ithreshold, double iloopSpeed) override

=============== ===================================================================
Parameters
=============== ===================================================================
 ikF             The feed-forward constant.
 ikP             The proportional constant.
 ikI             The integral constant.
 ikD             The derivative constant.
 ifilter         A constant used for filtering the profile acceleration.
 ilimit          The integral limit.
 ithreshold      The threshold for determining if a position movement has reached its goal.
 iloopSpeed      The rate at which the PID computation is run (in ms).
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

setVelPID
~~~~~~~~~

Sets new PID constants.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setPosPID(double ikF, double ikP, double ikI, double ikD) override

=============== ===================================================================
Parameters
=============== ===================================================================
 ikF             The feed-forward constant.
 ikP             The proportional constant.
 ikI             The integral constant.
 ikD             The derivative constant.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

setVelPIDFull
~~~~~~~~~~~~~

Sets new PID constants.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setPosPID(double ikF, double ikP, double ikI, double ikD,
                                       double ifilter, double ilimit, double ithreshold, double iloopSpeed) override

=============== ===================================================================
Parameters
=============== ===================================================================
 ikF             The feed-forward constant.
 ikP             The proportional constant.
 ikI             The integral constant.
 ikD             The derivative constant.
 ifilter         A constant used for filtering the profile acceleration.
 ilimit          The integral limit.
 ithreshold      The threshold for determining if a position movement has reached its goal.
 iloopSpeed      The rate at which the PID computation is run (in ms).
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

        virtual void controllerSet(double ivalue) override

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

        virtual std::shared_ptr<ContinuousRotarySensor> getEncoder() override

**Returns:** The encoder associated with this motor.
