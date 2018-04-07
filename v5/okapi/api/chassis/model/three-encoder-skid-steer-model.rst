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

        ThreeEncoderSkidSteerModelArgs(const AbstractMotor &ileftSideMotor, const AbstractMotor &irightSideMotor,
                                       const RotarySensor &ileftEnc, const RotarySensor &imiddleEnc, const RotarySensor &irightEnc,
                                       const double imaxOutput = 100)

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

        ThreeEncoderSkidSteerModel(const AbstractMotor &ileftSideMotor, const AbstractMotor &irightSideMotor,
                                   const RotarySensor &ileftEnc, const RotarySensor &imiddleEnc, const RotarySensor &irightEnc,
                                   const double imaxOutput = 100)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          using namespace okapi::literals;

          // Two motors
          okapi::SkidSteerModel model(1_m, 2_m, okapi::ADIEncoder(1, 2, true), okapi::ADIEncoder(3, 4), okapi::ADIEncoder(5, 6));

          // You can also use MotorGroups for more motors
          okapi::SkidSteerModel model(okapi::MotorGroup<2>({1_m, 2_m}), okapi::MotorGroup<2>({3_m, 4_m}),
                                      okapi::ADIEncoder(1, 2, true), okapi::ADIEncoder(3, 4), okapi::ADIEncoder(5, 6));
        }

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

        virtual std::valarray<int> getSensorVals() const override

**Returns:** The current sensor values.
