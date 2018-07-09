========================
(Abstract) Chassis Model
========================

.. contents:: :local:

okapi::ChassisModel
===================

Methods
-------

forward
~~~~~~~

Drives the robot forwards (using open-loop control).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void forward(double ispeed) const = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 ispeed          The motor power.
=============== ===================================================================

----

driveVector
~~~~~~~~~~~

Drives the robot in an arc (using open-loop control).

The algorithm is (approximately):
::

  leftPower = ySpeed + zRotation
  rightPower = ySpeed - zRotation

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void driveVector(double iySpeed, double izRotation) const = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 iySpeed         The speed on the y axis (forward).
 izRotation      The speed around the z axis (up).
=============== ===================================================================

----

rotate
~~~~~~

Turns the robot clockwise (using open-loop control).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void rotate(double ispeed) const = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 ispeed          The motor power.
=============== ===================================================================

----

stop
~~~~

Stops the robot (set all the motors to ``0``).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void stop() const = 0

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
 ileftSpeed      The left side speed.
 irightSpeed     The right side speed.
 ithreshold      The joystick deadband.
=============== ===================================================================

----

arcade
~~~~~~

Drives the robot with an arcade drive layout. Uses voltage mode.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void arcade(double iySpeed, double izRotation, double ithreshold = 0) const = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 iySpeed         The speed on the y axis (forward).
 izRotation      The speed around the z axis (up).
 ithreshold      The joystick deadband.
=============== ===================================================================

----

left
~~~~

Powers the left side motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void left(double ispeed) const = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 ispeed          The new speed.
=============== ===================================================================

----

right
~~~~~

Powers the right side motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void right(double ispeed) const = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 ispeed          The new speed.
=============== ===================================================================

----

getSensorVals
~~~~~~~~~~~~~

Returns the current sensor values. Ideally, return the values in the format ``{left, right, ...}``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::valarray<std::int32_t> getSensorVals() const = 0

**Returns:** The current sensor values (the formatting is implementation dependent).

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
