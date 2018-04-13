===============================
Async Pos Integrated Controller
===============================

.. contents:: :local:

okapi::AsyncPosIntegratedControllerArgs
=======================================

Data class for the arguments to ``AsyncPosIntegratedController``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosIntegratedControllerArgs(const AbstractMotor &imotor)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
=============== ===================================================================

----

okapi::AsyncPosIntegratedController
===================================

An `AsyncPositionController <abstract-async-position-controller.html>`_ that uses the V5 motor's onboard control.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosIntegratedController(const AbstractMotor &imotor)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosIntegratedController(const AsyncPosIntegratedControllerArgs &iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iparams         The ``AsyncPosIntegratedController`` arguments.
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

isSettled
~~~~~~~~~

Returns whether the controller has settled at the target. Setting is when the error or derivative
of error has been small enough for a long enough period.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool isSettled() override

**Returns:** Whether the controller is settled.

----

reset
~~~~~

Resets the controller so it can start from 0 again properly. Keeps configuration from before.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void reset() override
