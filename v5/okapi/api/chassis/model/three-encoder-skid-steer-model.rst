==============================
Three Encoder Skid-Steer Model
==============================

.. contents:: :local:


okapi::ThreeEncoderSkidSteerModelArgs
=====================================

Data class for the arguments to ``ThreeEncoderSkidSteerModel``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ThreeEncoderSkidSteerModelArgs(MotorGroup ileftSideMotor,
                                       MotorGroup irightSideMotor,
                                       ADIEncoder ileftEnc,
                                       ADIEncoder imiddleEnc,
                                       ADIEncoder irightEnc,
                                       const double imaxOutput = 127)

=================   ===================================================================
 Parameters
=================   ===================================================================
 ileftSideMotor      The left side motor.
 irightSideMotor     The right side motor.
 ileftEnc            The left side encoder.
 imiddleEnc          The middle encoder.
 irightEnc           The right side encoder.
 imaxOutput          The maximum output value to the motors.
=================   ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ThreeEncoderSkidSteerModelArgs(std::shared_ptr<AbstractMotor> ileftSideMotor,
                                       std::shared_ptr<AbstractMotor> irightSideMotor,
                                       std::shared_ptr<ContinuousRotarySensor> ileftEnc,
                                       std::shared_ptr<ContinuousRotarySensor> imiddleEnc,
                                       std::shared_ptr<ContinuousRotarySensor> irightEnc,
                                       const double imaxOutput = 127)

=================   ===================================================================
 Parameters
=================   ===================================================================
 ileftSideMotor      The left side motor.
 irightSideMotor     The right side motor.
 ileftEnc            The left side encoder.
 imiddleEnc          The middle encoder.
 irightEnc           The right side encoder.
 imaxOutput          The maximum output value to the motors.
=================   ===================================================================

----

okapi::ThreeEncoderSkidSteerModel
=================================

The model for a skid-steer chassis. Uses a third encoder mounted perpendicular and between the two
normal encoders.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ThreeEncoderSkidSteerModelArgs(std::shared_ptr<AbstractMotor> ileftSideMotor,
                                       std::shared_ptr<AbstractMotor> irightSideMotor,
                                       std::shared_ptr<ContinuousRotarySensor> ileftEnc,
                                       std::shared_ptr<ContinuousRotarySensor> imiddleEnc,
                                       std::shared_ptr<ContinuousRotarySensor> irightEnc,
                                       const double imaxOutput = 127)

=================   ===================================================================
 Parameters
=================   ===================================================================
 ileftSideMotor      The left side motor.
 irightSideMotor     The right side motor.
 ileftEnc            The left side encoder.
 imiddleEnc          The middle encoder.
 irightEnc           The right side encoder.
 imaxOutput          The maximum output value to the motors.
=================   ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ThreeEncoderSkidSteerModel(const ThreeEncoderSkidSteerModelArgs &iparams)

=================   ===================================================================
 Parameters
=================   ===================================================================
 iparams             The ``ThreeEncoderSkidSteerModel`` arguments.
=================   ===================================================================

Methods
-------

getSensorVals
~~~~~~~~~~~~~

Returns the current sensor values in the format ``{left, right, middle}``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::valarray<std::int32_t> getSensorVals() const override

**Returns:** The current sensor values.
