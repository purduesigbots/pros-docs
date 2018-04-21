================
Skid-Steer Model
================

.. contents:: :local:


okapi::SkidSteerModelArgs
=========================

Data class for the arguments to ``SkidSteerModel``.

Constructor(s)
--------------

This constructor infers the encoders from the left side and right side motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        SkidSteerModelArgs(std::shared_ptr<AbstractMotor> ileftSideMotor,
                           std::shared_ptr<AbstractMotor> irightSideMotor,
                           const double imaxOutput = 127)

=================   ===================================================================
 Parameters
=================   ===================================================================
 ileftSideMotor      The left side motor.
 irightSideMotor     The right side motor.
 imaxOutput          The maximum output value to the motors.
=================   ===================================================================

This constructor does not infer the encoders from the motors, and instead takes explicitly specified encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        SkidSteerModelArgs(std::shared_ptr<AbstractMotor> ileftSideMotor,
                           std::shared_ptr<AbstractMotor> irightSideMotor,
                           std::shared_ptr<RotarySensor> ileftEnc,
                           std::shared_ptr<RotarySensor> irightEnc,
                           const double imaxOutput = 127)

=================   ===================================================================
 Parameters
=================   ===================================================================
 ileftSideMotor      The left side motor.
 irightSideMotor     The right side motor.
 ileftEnc            The left side encoder.
 irightEnc           The right side encoder.
 imaxOutput          The maximum output value to the motors.
=================   ===================================================================

----

okapi::SkidSteerModel
=====================

The model for a skid-steer chassis.

Constructor(s)
--------------

This constructor infers the encoders from the left side and right side motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        SkidSteerModelArgs(Motor ileftSideMotor,
                           Motor irightSideMotor,
                           const double imaxOutput = 127)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          using namespace okapi::literals;
          okapi::SkidSteerModel model(1_m, 2_m);
        }

=================   ===================================================================
 Parameters
=================   ===================================================================
 ileftSideMotor      The left side motor.
 irightSideMotor     The right side motor.
 imaxOutput          The maximum output value to the motors.
=================   ===================================================================

This constructor infers the encoders from the left side and right side motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        SkidSteerModelArgs(MotorGroup ileftSideMotor,
                           MotorGroup irightSideMotor,
                           const double imaxOutput = 127)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          using namespace okapi::literals;
          okapi::SkidSteerModel model(okapi::MotorGroup({1_m, 2_m}),
                                      okapi::MotorGroup({3_m, 4_m}));
        }

=================   ===================================================================
 Parameters
=================   ===================================================================
 ileftSideMotor      The left side motor.
 irightSideMotor     The right side motor.
 imaxOutput          The maximum output value to the motors.
=================   ===================================================================

This constructor does not infer the encoders from the motors, and instead takes explicitly specified encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        SkidSteerModelArgs(MotorGroup ileftSideMotor,
                           MotorGroup irightSideMotor,
                           ADIEncoder ileftEnc,
                           ADIEncoder irightEnc,
                           const double imaxOutput = 127)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          using namespace okapi::literals;
          okapi::SkidSteerModel model(okapi::MotorGroup({1_m, 2_m}),
                                      okapi::MotorGroup({3_m, 4_m}),
                                      okapi::ADIEncoder(1, 2),
                                      okapi::ADIEncoder(3, 4, true));
        }

=================   ===================================================================
 Parameters
=================   ===================================================================
 ileftSideMotor      The left side motor.
 irightSideMotor     The right side motor.
 ileftEnc            The left side encoder.
 irightEnc           The right side encoder.
 imaxOutput          The maximum output value to the motors.
=================   ===================================================================

This constructor infers the encoders from the motors.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        SkidSteerModel(std::shared_ptr<AbstractMotor> ileftSideMotor,
                       std::shared_ptr<AbstractMotor> irightSideMotor,
                       const double imaxOutput = 127)

=================   ===================================================================
 Parameters
=================   ===================================================================
 ileftSideMotor      The left side motor.
 irightSideMotor     The right side motor.
 imaxOutput          The maximum output value to the motors.
=================   ===================================================================

This constructor does not infer the encoders from the motors, and instead takes explicitly specified encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        SkidSteerModel(std::shared_ptr<AbstractMotor> ileftSideMotor,
                       std::shared_ptr<AbstractMotor> irightSideMotor,
                       std::shared_ptr<RotarySensor> ileftEnc,
                       std::shared_ptr<RotarySensor> irightEnc,
                       const double imaxOutput = 127)

=================   ===================================================================
 Parameters
=================   ===================================================================
 ileftSideMotor      The left side motor.
 irightSideMotor     The right side motor.
 ileftEnc            The left side encoder.
 irightEnc           The right side encoder.
 imaxOutput          The maximum output value to the motors.
=================   ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        SkidSteerModel(const SkidSteerModelArgs &iparams)

=================   ===================================================================
 Parameters
=================   ===================================================================
 iparams             The ``SkidSteerModel`` arguments.
=================   ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        SkidSteerModel(const SkidSteerModel &other)

=================   ===================================================================
 Parameters
=================   ===================================================================
 other               Copy constructor.
=================   ===================================================================

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

        virtual void setBrakeMode(const motor_brake_mode_e_t mode) const override

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

        virtual void setEncoderUnits(const motor_encoder_units_e_t units) const override

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

        virtual void setGearing(const motor_gearset_e_t gearset) const override

=============== ===================================================================
Parameters
=============== ===================================================================
 gearset         The new gearset.
=============== ===================================================================

----

getLeftSideMotor
~~~~~~~~~~~~~~~~

Returns the left side motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::shared_ptr<AbstractMotor> getLeftSideMotor() const

----

getRightSideMotor
~~~~~~~~~~~~~~~~~

Returns the right side motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::shared_ptr<AbstractMotor> getRightSideMotor() const
