=============
X-Drive Model
=============

.. contents:: :local:

okapi::XDriveModel
==================

The model for an x-drive chassis. If you are trying to make an instance of this class, you should
most likely be creating a type of
`ChassisController <../controller/abstract-chassis-controller.html>`_ instead. If you really do
mean to make an instance of a
`ChassisModel <abstract-chassis-model.html>`_, then you should probably be using the
`ChassisModelFactory <chassis-model-factory.html>`_ instead of a constructor from this class.

Constructor(s)
--------------

This constructor infers the encoders from the motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        XDriveModel(const std::shared_ptr<AbstractMotor> &itopLeftMotor,
                    const std::shared_ptr<AbstractMotor> &itopRightMotor,
                    const std::shared_ptr<AbstractMotor> &ibottomRightMotor,
                    const std::shared_ptr<AbstractMotor> &ibottomLeftMotor,
                    double imaxVelocity,
                    double imaxVoltage = 12000)

==================   ===================================================================
 Parameters
==================   ===================================================================
 itopLeftMotor        The top left motor.
 itopRightMotor       The top right motor.
 ibottomRightMotor    The bottom right motor.
 ibottomLeftMotor     The bottom left motor.
 imaxVelocity         The maximum velocity output value to the motors.
 imaxVoltage          The maximum voltage output value to the motors.
==================   ===================================================================

This constructor does not infer the encoders from the motors, and instead takes explicitly specified encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        XDriveModel(const std::shared_ptr<AbstractMotor> &itopLeftMotor,
                    const std::shared_ptr<AbstractMotor> &itopRightMotor,
                    const std::shared_ptr<AbstractMotor> &ibottomRightMotor,
                    const std::shared_ptr<AbstractMotor> &ibottomLeftMotor,
                    const std::shared_ptr<ContinuousRotarySensor> &ileftEnc,
                    const std::shared_ptr<ContinuousRotarySensor> &irightEnc,
                    double imaxVelocity,
                    double imaxVoltage = 12000)

==================   ===================================================================
 Parameters
==================   ===================================================================
 itopLeftMotor        The top left motor.
 itopRightMotor       The top right motor.
 ibottomRightMotor    The bottom right motor.
 ibottomLeftMotor     The bottom left motor.
 ileftEnc             The left side encoder.
 irightEnc            The right side encoder.
 imaxVelocity         The maximum velocity output value to the motors.
 imaxVoltage          The maximum voltage output value to the motors.
==================   ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        XDriveModel(const XDriveModel &other)

==================   ===================================================================
 Parameters
==================   ===================================================================
 other                Copy constructor.
==================   ===================================================================

Methods
-------

forward
~~~~~~~

Drives the robot forwards (using open-loop control). Uses velocity mode.

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

Drives the robot in an arc (using open-loop control). Uses velocity mode.

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

Turns the robot clockwise (using open-loop control). Uses velocity mode.

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

Stops the robot (set all the motors to ``0``). Uses velocity mode.

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

xArcade
~~~~~~~

Drives the robot with an arcade drive layout. Uses voltage mode.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void xArcade(double ixSpeed, double iforwardSpeed, double iyaw, double ithreshold = 0) const

=============== ===================================================================
Parameters
=============== ===================================================================
 ixSpeed         The speed to the right in the range ``[-1, 1]``.
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

        void left(double ispeed) const override

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

getTopLeftMotor
~~~~~~~~~~~~~~~

Returns the top left motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::shared_ptr<AbstractMotor> getTopLeftMotor() const

**Returns:** The top left motor.

----

getTopRightMotor
~~~~~~~~~~~~~~~~

Returns the top right motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::shared_ptr<AbstractMotor> getTopRightMotor() const

**Returns:** The top right motor.

----

getBottomRightMotor
~~~~~~~~~~~~~~~~~~~

Returns the bottom right motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::shared_ptr<AbstractMotor> getBottomRightMotor() const

**Returns:** The bottom right motor.

----

getBottomLeftMotor
~~~~~~~~~~~~~~~~~~

Returns the bottom left motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::shared_ptr<AbstractMotor> getBottomLeftMotor() const

**Returns:** The bottom left motor.
