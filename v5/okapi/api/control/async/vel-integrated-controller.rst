=======================
VelIntegratedController
=======================

.. contents:: :local:

okapi::VelIntegratedControllerArgs
==================================

Data class for the arguments to ``VelIntegratedController``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        VelIntegratedControllerArgs(const AbstractMotor &imotor)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
=============== ===================================================================

----

okapi::VelIntegratedController
==============================

An async velocity controller that uses the V5 motor's onboard control.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        VelIntegratedController(const AbstractMotor &imotor)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        VelIntegratedController(const VelIntegratedControllerArgs &iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iparams         The ``VelIntegratedController`` arguments.
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
