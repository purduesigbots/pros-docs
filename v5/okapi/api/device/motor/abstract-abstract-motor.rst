=========================
(Abstract) Abstract Motor
=========================

.. contents:: :local:

okapi::AbstractMotor
====================

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AbstractMotor(const uint8_t port, const bool reverse = false, const motor_encoder_units_e_t encoder_units = E_MOTOR_ENCODER_DEGREES, const motor_gearset_e_t gearset = E_MOTOR_GEARSET_36)

=============== ===================================================================
 Parameters
=============== ===================================================================
 port            The V5 port number the motor is in.
 reverse         Whether the motor's direction is reversed.
 encoder_units   The motor's encoder units.
 gearset         The motor's gearset.
=============== ===================================================================

Methods
-------

getEncoder
~~~~~~~~~~

Returns the encoder associated with this motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual IntegratedEncoder getEncoder() const = 0

**Returns:** The encoder associated with this motor.
