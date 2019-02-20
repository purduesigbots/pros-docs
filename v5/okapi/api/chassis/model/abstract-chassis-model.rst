========================
(Abstract) Chassis Model
========================

.. contents:: :local:

okapi::ChassisModel
===================

A version of the `ReadOnlyChassisModel <abstract-read-only-chassis-model.html>`_ that also supports write
methods, such as setting motor speed. Because this class can write to motors, there can only be one
owner and as such copying is disabled.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisModel(double imaxVelocity, double imaxVoltage = 12000)

=================   ===================================================================
 Parameters
=================   ===================================================================
 imaxVelocity        The maximum velocity.
 imaxVoltage         The maximum voltage.
=================   ===================================================================

Methods
-------

forward
~~~~~~~

Drives the robot forwards (using open-loop control). Uses velocity mode.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void forward(double ispeed) const = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 ispeed          The motor power in the range ``[-1, 1]``.
=============== ===================================================================

----

driveVector
~~~~~~~~~~~

Drives the robot in an arc (using open-loop control). Uses velocity mode.

The algorithm is (approximately):
::

  leftPower = forwardSpeed + yaw
  rightPower = forwardSpeed - yaw

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void driveVector(double iforwardSpeed, double iyaw) const = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 iforwardSpeed   The speed in the forward direction in the range ``[-1, 1]``.
 iyaw            The speed around the vertical axis in the range ``[-1, 1]``.
=============== ===================================================================

----

rotate
~~~~~~

Turns the robot clockwise (using open-loop control). Uses velocity mode.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void rotate(double ispeed) const = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 ispeed          The motor power in the range ``[-1, 1]``.
=============== ===================================================================

----

stop
~~~~

Stops the robot (set all the motors to ``0``). Uses velocity mode.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void stop() = 0

----

tank
~~~~

Drives the robot with a tank drive layout. Uses voltage mode.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void tank(double ileftSpeed, double irightSpeed, double ithreshold = 0) const = 0

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

        virtual void arcade(double iforwardSpeed, double iyaw, double ithreshold = 0) const = 0

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

Powers the left side motors. Uses velocity mode.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void left(double ispeed) const = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 ispeed          The new speed in the range ``[-1, 1]``.
=============== ===================================================================

----

right
~~~~~

Powers the right side motors. Uses velocity mode.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void right(double ispeed) const = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 ispeed          The new speed in the range ``[-1, 1]``.
=============== ===================================================================

----

resetSensors
~~~~~~~~~~~~

Resets the sensors to their zero point.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void resetSensors() const = 0

----

setBrakeMode
~~~~~~~~~~~~

Sets the brake mode for each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setBrakeMode(AbstractMotor::brakeMode mode) const = 0

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

        virtual void setEncoderUnits(AbstractMotor::encoderUnits units) const = 0

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

        virtual void setGearing(AbstractMotor::gearset gearset) const = 0

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

        virtual void setPosPID(double ikF, double ikP, double ikI, double ikD) const = 0

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

        virtual void setPosPID(double ikF, double ikP, double ikI, double ikD,
                               double ifilter, double ilimit, double ithreshold, double iloopSpeed) const = 0

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

        virtual void setPosPID(double ikF, double ikP, double ikI, double ikD) const = 0

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

        virtual void setPosPID(double ikF, double ikP, double ikI, double ikD,
                               double ifilter, double ilimit, double ithreshold, double iloopSpeed) const = 0

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

        virtual void setMaxVelocity(double imaxVelocity)

=============== ===================================================================
Parameters
=============== ===================================================================
 imaxVelocity    The new maximum velocity in RPM.
=============== ===================================================================

----

setMaxVoltage
~~~~~~~~~~~~~

Sets a new maximum voltage in mV ``[0-12000]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setMaxVoltage(double imaxVoltage)

=============== ===================================================================
Parameters
=============== ===================================================================
 imaxVoltage     The new maximum voltage in mV.
=============== ===================================================================
