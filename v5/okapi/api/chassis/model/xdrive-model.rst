=============
X-Drive Model
=============

.. contents:: :local:


okapi::XDriveModelArgs
======================

Data class for the arguments to ``XDriveModel``.

Constructor(s)
--------------

This constructor infers the encoders from the top left and top right motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        XDriveModelArgs(std::shared_ptr<AbstractMotor> itopLeftMotor,
                        std::shared_ptr<AbstractMotor> itopRightMotor,
                        std::shared_ptr<AbstractMotor> ibottomRightMotor,
                        std::shared_ptr<AbstractMotor> ibottomLeftMotor,
                        const double imaxOutput = 127)

==================   ===================================================================
 Parameters
==================   ===================================================================
 itopLeftMotor        The top left motor.
 itopRightMotor       The top right motor.
 ibottomRightMotor    The bottom right motor.
 ibottomLeftMotor     The bottom left motor.
 imaxOutput           The maximum output value to the motors.
==================   ===================================================================

This constructor does not infer the encoders from the motors, and instead takes explicitly specified encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        XDriveModelArgs(std::shared_ptr<AbstractMotor> itopLeftMotor,
                        std::shared_ptr<AbstractMotor> itopRightMotor,
                        std::shared_ptr<AbstractMotor> ibottomRightMotor,
                        std::shared_ptr<AbstractMotor> ibottomLeftMotor,
                        std::shared_ptr<ContinuousRotarySensor> ileftEnc,
                        std::shared_ptr<ContinuousRotarySensor> irightEnc,
                        const double imaxOutput = 127)

==================   ===================================================================
 Parameters
==================   ===================================================================
 itopLeftMotor        The top left motor.
 itopRightMotor       The top right motor.
 ibottomRightMotor    The bottom right motor.
 ibottomLeftMotor     The bottom left motor.
 ileftEnc             The left side encoder.
 irightEnc            The right side encoder.
 imaxOutput           The maximum output value to the motors.
==================   ===================================================================

----

okapi::XDriveModel
==================

The model for an x-drive chassis.

Constructor(s)
--------------

This constructor infers the encoders from the motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        XDriveModel(Motor itopLeftMotor,
                    Motor itopRightMotor,
                    Motor ibottomRightMotor,
                    Motor ibottomLeftMotor,
                    const double imaxOutput = 127)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          using namespace okapi::literals;
          okapi::XDriveModel model(1_mtr, 2_mtr, 3_mtr, 4_mtr);
        }

==================   ===================================================================
 Parameters
==================   ===================================================================
 itopLeftMotor        The top left motor.
 itopRightMotor       The top right motor.
 ibottomRightMotor    The bottom right motor.
 ibottomLeftMotor     The bottom left motor.
 imaxOutput           The maximum output value to the motors.
==================   ===================================================================

This constructor does not infer the encoders from the motors, and instead takes explicitly specified encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        XDriveModel(Motor itopLeftMotor,
                    Motor itopRightMotor,
                    Motor ibottomRightMotor,
                    Motor ibottomLeftMotor,
                    ADIEncoder ileftEnc,
                    ADIEncoder irightEnc,
                    const double imaxOutput = 127)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          using namespace okapi::literals;
          okapi::XDriveModel model(1_mtr, 2_mtr, 3_mtr, 4_mtr,
                                   okapi::ADIEncoder(1, 2), okapi::ADIEncoder(3, 4, true));
        }

==================   ===================================================================
 Parameters
==================   ===================================================================
 itopLeftMotor        The top left motor.
 itopRightMotor       The top right motor.
 ibottomRightMotor    The bottom right motor.
 ibottomLeftMotor     The bottom left motor.
 ileftEnc             The left side encoder.
 irightEnc            The right side encoder.
 imaxOutput           The maximum output value to the motors.
==================   ===================================================================

This constructor infers the encoders from the motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        XDriveModel(std::shared_ptr<AbstractMotor> itopLeftMotor,
                    std::shared_ptr<AbstractMotor> itopRightMotor,
                    std::shared_ptr<AbstractMotor> ibottomRightMotor,
                    std::shared_ptr<AbstractMotor> ibottomLeftMotor,
                    const double imaxOutput = 127)

==================   ===================================================================
 Parameters
==================   ===================================================================
 itopLeftMotor        The top left motor.
 itopRightMotor       The top right motor.
 ibottomRightMotor    The bottom right motor.
 ibottomLeftMotor     The bottom left motor.
 imaxOutput           The maximum output value to the motors.
==================   ===================================================================

This constructor does not infer the encoders from the motors, and instead takes explicitly specified encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        XDriveModel(std::shared_ptr<AbstractMotor> itopLeftMotor,
                    std::shared_ptr<AbstractMotor> itopRightMotor,
                    std::shared_ptr<AbstractMotor> ibottomRightMotor,
                    std::shared_ptr<AbstractMotor> ibottomLeftMotor,
                    std::shared_ptr<ContinuousRotarySensor> ileftEnc,
                    std::shared_ptr<ContinuousRotarySensor> irightEnc,
                    const double imaxOutput = 127)

==================   ===================================================================
 Parameters
==================   ===================================================================
 itopLeftMotor        The top left motor.
 itopRightMotor       The top right motor.
 ibottomRightMotor    The bottom right motor.
 ibottomLeftMotor     The bottom left motor.
 ileftEnc             The left side encoder.
 irightEnc            The right side encoder.
 imaxOutput           The maximum output value to the motors.
==================   ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        XDriveModel(const XDriveModelArgs &iparams)

==================   ===================================================================
 Parameters
==================   ===================================================================
 iparams              The ``XDriveModel`` arguments.
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

Drives the robot forwards (using open-loop control).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void forward(const double ispeed) const override

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

        virtual void driveVector(const double iySpeed, const double izRotation) const override

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

        virtual void rotate(const double ispeed) const override

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

        virtual void stop() const override

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

        virtual void arcade(const double iySpeed, const double izRotation, const double ithreshold = 0) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 iySpeed         The speed on the y axis (forward).
 izRotation      The speed around the z axis (up).
 ithreshold      The joystick deadband.
=============== ===================================================================

----

xArcade
~~~~~~~

Drives the robot with an arcade drive layout. Uses voltage mode.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void xArcade(const double ixSpeed, const double iySpeed, const double izRotation, const double ithreshold = 0) const

=============== ===================================================================
Parameters
=============== ===================================================================
 ixSpeed         The speed on the x axis (right).
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

        virtual void left(const double ispeed) const override

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

        virtual void right(const double ispeed) const override

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

        virtual std::valarray<std::int32_t> getSensorVals() const override

**Returns:** The current sensor values (the formatting is implementation dependent).

----

resetSensors
~~~~~~~~~~~~

Resets the sensors to their zero point.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void resetSensors() const override

----

setBrakeMode
~~~~~~~~~~~~

Sets the brake mode for each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setBrakeMode(const pros::c::motor_brake_mode_e_t mode) const override

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

        virtual void setEncoderUnits(const pros::c::motor_encoder_units_e_t units) const override

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

        virtual void setGearing(const pros::c::motor_gearset_e_t gearset) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 gearset         The new gearset.
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
