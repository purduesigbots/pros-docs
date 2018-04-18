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

        ChassisController(std::shared_ptr<ChassisModel> imodel)

=================   ===================================================================
 Parameters
=================   ===================================================================
 imodel              The underlying `ChassisModel <../model/abstract-chassis-model.html>`_ to control.
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

        virtual void moveDistance(const int itarget) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 itarget         The distance to travel.
=============== ===================================================================

----

turnAngle
~~~~~~~~~

Turns the robot clockwise in place (using closed-loop control). Blocks while the robot is turning.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void turnAngle(const float idegTarget) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn.
=============== ===================================================================

----

forward
~~~~~~~

Drives the robot forwards (using open-loop control).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void forward(const double ispeed) const

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

        virtual void driveVector(const double iySpeed, const double izRotation) const

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

        virtual void rotate(const double ispeed) const

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

        virtual void stop() const

----

tank
~~~~

Drives the robot with a tank drive layout. Uses voltage mode.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void tank(const double ileftSpeed, const double irightSpeed, const double ithreshold = 0) const

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

        virtual void arcade(const double iySpeed, const double izRotation, const double ithreshold = 0) const

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

        virtual void left(const double ispeed) const

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

        virtual void right(const double ispeed) const

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

        virtual std::valarray<std::int32_t> getSensorVals() const

**Returns:** The current sensor values (the formatting is implementation dependent).

----

resetSensors
~~~~~~~~~~~~

Resets the sensors to their zero point.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void resetSensors() const

----

setBrakeMode
~~~~~~~~~~~~

Sets the brake mode for each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setBrakeMode(const motor_brake_mode_e_t mode) const

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

        virtual void setEncoderUnits(const motor_encoder_units_e_t units) const

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

        virtual void setGearing(const motor_gearset_e_t gearset) const

=============== ===================================================================
Parameters
=============== ===================================================================
 gearset         The new gearset.
=============== ===================================================================
