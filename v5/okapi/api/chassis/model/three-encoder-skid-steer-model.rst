==============================
Three Encoder Skid-Steer Model
==============================

.. contents:: :local:

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
                                       double imaxVelocity = 600,
                                       double imaxVoltage = 12000)

=================   ===================================================================
 Parameters
=================   ===================================================================
 ileftSideMotor      The left side motor.
 irightSideMotor     The right side motor.
 ileftEnc            The left side encoder.
 imiddleEnc          The middle encoder.
 irightEnc           The right side encoder.
 imaxVelocity        The maximum velocity output value to the motors.
 imaxVoltage         The maximum voltage output value to the motors.
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
