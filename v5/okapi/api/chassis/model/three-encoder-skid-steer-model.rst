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
normal encoders. If you are trying to make an instance of this class, you should
most likely be creating a type of
`ChassisController <../controller/abstract-chassis-controller.html>`_ instead. If you really do
mean to make an instance of a
`ChassisModel <abstract-chassis-model.html>`_, then you should probably be using the
`ChassisModelFactory <chassis-model-factory.html>`_ instead of a constructor from this class.

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
                                       double imaxOutput = 127)

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

        explicit ThreeEncoderSkidSteerModel(const ThreeEncoderSkidSteerModelArgs &iparams)

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

        std::valarray<std::int32_t> getSensorVals() const override

**Returns:** The current sensor values.
