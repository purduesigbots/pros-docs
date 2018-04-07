===============================
Async Vel Integrated Controller
===============================

.. contents:: :local:

okapi::AsyncVelIntegratedControllerArgs
=======================================

Data class for the arguments to ``AsyncVelIntegratedController``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelIntegratedControllerArgs(const AbstractMotor &imotor)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
=============== ===================================================================

----

okapi::AsyncVelIntegratedController
===================================

An `AsyncVelocityController <async-velocity-controller.html>`_ that uses the V5 motor's onboard control.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelIntegratedController(const AbstractMotor &imotor)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelIntegratedController(const AsyncVelIntegratedControllerArgs &iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iparams         The ``AsyncVelIntegratedController`` arguments.
=============== ===================================================================

Methods
-------

setTarget
~~~~~~~~~

Sets the target for the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setTarget(const double itarget) override

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target.
============ ===============================================================

----

getError
~~~~~~~~

Returns the last error of the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getError() const override

**Returns:** The last error of the controller.

----

reset
~~~~~

Resets the controller so it can start from 0 again properly. Keeps configuration from before.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void reset() override
