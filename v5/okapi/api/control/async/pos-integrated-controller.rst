=======================
PosIntegratedController
=======================

.. contents:: :local:

okapi::PosIntegratedControllerArgs
==================================

Data class for the arguments to ``PosIntegratedController``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        PosIntegratedControllerArgs(const AbstractMotor &imotor)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
=============== ===================================================================

----

okapi::PosIntegratedController
==============================

An async position controller that uses the V5 motor's onboard control.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        PosIntegratedController(const AbstractMotor &imotor)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        PosIntegratedController(const PosIntegratedControllerArgs &iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iparams         The ``PosIntegratedController`` arguments.
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
