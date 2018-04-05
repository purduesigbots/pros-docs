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

        ThreeEncoderSkidSteerModelArgs(const AbstractMotor &ileftSideMotor, const AbstractMotor &irightSideMotor, const RotarySensor &ileftEnc, const RotarySensor &imiddleEnc, const RotarySensor &irightEnc, const double imaxOutput = 100)

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

        ThreeEncoderSkidSteerModel(const AbstractMotor &ileftSideMotor, const AbstractMotor &irightSideMotor, const RotarySensor &ileftEnc, const RotarySensor &imiddleEnc, const RotarySensor &irightEnc, const double imaxOutput = 100)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::EmaFilter emaFilter(0.2);
          while (true) {
            emaFilter.filter(1);
            pros::delay(10);
          }
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

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::EmaFilter emaFilter(0.2);
          while (true) {
            emaFilter.filter(1);
            pros::delay(10);
          }
        }

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
