=====
Motor
=====

.. contents:: :local:

okapi::Motor
============

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        using AbstractMotor::AbstractMotor

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
