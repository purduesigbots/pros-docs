=====
Motor
=====

.. contents:: :local:

okapi::Motor
============

An `AbstractMotor <abstract-abstract-motor.html>`_ which is also a ``pros::Motor``. This is a V5
motor, not an ADI (or 3-wire) motor.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Motor(const uint8_t port, const bool reverse = false, const motor_encoder_units_e_t encoder_units = E_MOTOR_ENCODER_DEGREES, const motor_gearset_e_t gearset = E_MOTOR_GEARSET_36)

=============== ===================================================================
 Parameters
=============== ===================================================================
 port            The V5 port number the motor is in.
 reverse         Whether the motor's direction is reversed.
 encoder_units   The motor's encoder units.
 gearset         The motor's gearset.
=============== ===================================================================

Literal(s)
----------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        okapi::Motor operator"" _m(const unsigned long long iport)
        okapi::Motor operator"" _rm(const unsigned long long iport)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          using namespace okapi::literals;
          1_m; // Motor in port 1
          1_rm; // Reversed motor in port 1
        }

=============== ===================================================================
Parameters
=============== ===================================================================
 iport           The V5 port number the motor is in.
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

        virtual IntegratedEncoder getEncoder() const override

**Returns:** The encoder associated with this motor.

----

controllerSet
~~~~~~~~~~~~~

Writes the value of the controller output. This method might be automatically called in another
thread by the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void controllerSet(const double ivalue) override

=============== ===================================================================
Parameters
=============== ===================================================================
 ivalue          The controller's output.
=============== ===================================================================
