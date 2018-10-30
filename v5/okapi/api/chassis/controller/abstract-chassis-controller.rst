=============================
(Abstract) Chassis Controller
=============================

.. contents:: :local:

okapi::ChassisController
========================

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        explicit ChassisController(const std::shared_ptr<ChassisModel> &imodel,
                                   double imaxVelocity,
                                   double imaxVoltage = 12000);

=================   ===================================================================
 Parameters
=================   ===================================================================
 imodel              The underlying `ChassisModel <../model/abstract-chassis-model.html>`_ to control.
 imaxVelocity        The maximum velocity.
 imaxVoltage         The maximum voltage.
=================   ===================================================================

Methods
-------

moveDistance
~~~~~~~~~~~~

Drives the robot straight for a distance (using closed-loop control). Blocks while the robot is
driving.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void moveDistance(QLength itarget) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 itarget         The distance to travel.
=============== ===================================================================

----

moveDistance
~~~~~~~~~~~~

Drives the robot straight for a distance with units of motor degrees (using closed-loop control).
Blocks while the robot is driving.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void moveDistance(double itarget) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 itarget         The distance to travel in motor degrees.
=============== ===================================================================

----

moveDistanceAsync
~~~~~~~~~~~~~~~~~

Drives the robot straight for a distance (using closed-loop control). Returns immediately (does not
block while the robot is driving).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void moveDistanceAsync(QLength itarget) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 itarget         The distance to travel.
=============== ===================================================================

----

moveDistanceAsync
~~~~~~~~~~~~~~~~~

Drives the robot straight for a distance with units of motor degrees (using closed-loop control).
Returns immediately (does not block while the robot is driving).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void moveDistanceAsync(double itarget) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 itarget         The distance to travel in motor degrees.
=============== ===================================================================

----

turnAngle
~~~~~~~~~

Turns the robot clockwise in place (using closed-loop control). Blocks while the robot is turning.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void turnAngle(QAngle idegTarget) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn.
=============== ===================================================================

----

turnAngle
~~~~~~~~~

Turns the robot clockwise in place with units of motor degrees (using closed-loop control). Blocks
while the robot is turning.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void turnAngle(double idegTarget) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn in motor degrees.
=============== ===================================================================

----

turnAngleAsync
~~~~~~~~~~~~~~

Turns the robot clockwise in place (using closed-loop control). Returns immediately (does not block
while the robot is driving).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void turnAngleAsync(QAngle idegTarget) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn.
=============== ===================================================================

----

turnAngleAsync
~~~~~~~~~~~~~~

Turns the robot clockwise in place with units of motor degrees (using closed-loop control). Returns
immediately (does not block while the robot is driving).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void turnAngleAsync(double idegTarget) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn in motor degrees.
=============== ===================================================================

----

setTurnsMirrored
~~~~~~~~~~~~~~~~

Sets whether turns should be mirrored.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setTurnsMirrored(bool ishouldMirror)

=============== ===================================================================
Parameters
=============== ===================================================================
 ishouldMirror   Whether turns should be mirrored.
=============== ===================================================================

----

waitUntilSettled
~~~~~~~~~~~~~~~~

Delays until the currently executing movement completes.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void waitUntilSettled() = 0

----

forward
~~~~~~~

Drives the robot forwards (using open-loop control).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void forward(double ispeed) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 ispeed          The motor power in the range ``[-1, 1]``.
=============== ===================================================================

----

driveVector
~~~~~~~~~~~

Drives the robot in an arc (using open-loop control).

The algorithm is (approximately):
::

  leftPower = forwardSpeed + yaw
  rightPower = forwardSpeed - yaw

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void driveVector(double iforwardSpeed, double iyaw) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 iforwardSpeed   The speed in the forward direction in the range ``[-1, 1]``.
 iyaw            The speed around the vertical axis in the range ``[-1, 1]``.
=============== ===================================================================

----

rotate
~~~~~~

Turns the robot clockwise (using open-loop control).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void rotate(double ispeed) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 ispeed          The motor power in the range ``[-1, 1]``.
=============== ===================================================================

----

stop
~~~~

Stops the robot (set all the motors to ``0``).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void stop() override

----

tank
~~~~

Drives the robot with a tank drive layout. Uses voltage mode.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void tank(double ileftSpeed, double irightSpeed, double ithreshold = 0) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 ileftSpeed      The left side speed in the range ``[-1, 1]``.
 irightSpeed     The right side speed in the range ``[-1, 1]``.
 ithreshold      The joystick deadband in the range ``[-1, 1]``.
=============== ===================================================================

----

arcade
~~~~~~

Drives the robot with an arcade drive layout. Uses voltage mode.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void arcade(double iforwardSpeed, double iyaw, double ithreshold = 0) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 iforwardSpeed   The speed in the forward direction in the range ``[-1, 1]``.
 iyaw            The speed around the vertical axis in the range ``[-1, 1]``.
 ithreshold      The joystick deadband in the range ``[-1, 1]``.
=============== ===================================================================

----

left
~~~~

Powers the left side motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void left(double ispeed) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 ispeed          The new speed in the range ``[-1, 1]``.
=============== ===================================================================

----

right
~~~~~

Powers the right side motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void right(double ispeed) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 ispeed          The new speed in the range ``[-1, 1]``.
=============== ===================================================================

----

getSensorVals
~~~~~~~~~~~~~

Returns the current sensor values. Ideally, return the values in the format ``{left, right, ...}``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::valarray<std::int32_t> getSensorVals() const override

**Returns:** The current sensor values (the formatting is implementation dependent).

----

resetSensors
~~~~~~~~~~~~

Resets the sensors to their zero point.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void resetSensors() const override

----

setBrakeMode
~~~~~~~~~~~~

Sets the brake mode for each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setBrakeMode(AbstractMotor::brakeMode mode) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 mode            The new brake mode.
=============== ===================================================================

----

setEncoderUnits
~~~~~~~~~~~~~~~

Sets the encoder units for each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setEncoderUnits(AbstractMotor::encoderUnits units) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 units           The new units.
=============== ===================================================================

----

setGearing
~~~~~~~~~~

Sets the gearset for each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setGearing(AbstractMotor::gearset gearset) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 gearset         The new gearset.
=============== ===================================================================

----

setPosPID
~~~~~~~~~

Sets new PID constants.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setPosPID(double ikF, double ikP, double ikI, double ikD) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 ikF             The feed-forward constant.
 ikP             The proportional constant.
 ikI             The integral constant.
 ikD             The derivative constant.
=============== ===================================================================

----

setPosPIDFull
~~~~~~~~~~~~~

Sets new PID constants.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setPosPID(double ikF, double ikP, double ikI, double ikD,
                       double ifilter, double ilimit, double ithreshold, double iloopSpeed) const override

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

----

setVelPID
~~~~~~~~~

Sets new PID constants.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setPosPID(double ikF, double ikP, double ikI, double ikD) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 ikF             The feed-forward constant.
 ikP             The proportional constant.
 ikI             The integral constant.
 ikD             The derivative constant.
=============== ===================================================================

----

setVelPIDFull
~~~~~~~~~~~~~

Sets new PID constants.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setPosPID(double ikF, double ikP, double ikI, double ikD,
                       double ifilter, double ilimit, double ithreshold, double iloopSpeed) const override

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

----

setMaxVelocity
~~~~~~~~~~~~~~

Sets a new maximum velocity in RPM ``[0-600]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setMaxVelocity(double imaxVelocity) override

=============== ===================================================================
Parameters
=============== ===================================================================
 imaxVelocity    The new maximum velocity.
=============== ===================================================================

----

setMaxVoltage
~~~~~~~~~~~~~

Sets a new maximum voltage in mV ``[0-12000]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setMaxVoltage(double imaxVoltage) override

=============== ===================================================================
Parameters
=============== ===================================================================
 imaxVoltage     The new maximum voltage.
=============== ===================================================================

----

getChassisModel
~~~~~~~~~~~~~~~

Get the underlying ``ChassisModel``. This should be used sparingly and carefully because it can
result in multiple owners writing to the same set of motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::shared_ptr<ChassisModel> getChassisModel() const

**Returns:** The underlying ``ChassisModel``.

----

getChassisScales
~~~~~~~~~~~~~~~~

Get the ``ChassisScales``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual ChassisScales getChassisScales() const = 0

**Returns:** The ``ChassisScales``.

----

getGearsetRatioPair
~~~~~~~~~~~~~~~~~~~

Get the ``GearsetRatioPair``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual AbstractMotor::GearsetRatioPair getGearsetRatioPair() const = 0

**Returns:** The ``GearsetRatioPair``.
