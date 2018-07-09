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

        explicit AsyncVelIntegratedControllerArgs(std::shared_ptr<AbstractMotor> imotor)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
=============== ===================================================================

----

okapi::AsyncVelIntegratedController
===================================

An `AsyncVelocityController <abstract-async-velocity-controller.html>`_ that uses the V5 motor's onboard control.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelIntegratedController(std::shared_ptr<AbstractMotor> imotor, std::unique_ptr<SettledUtil> isettledUtil)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
 isettledUtil    The ``SettledUtil`` to use.
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelIntegratedController(const AsyncVelIntegratedControllerArgs &iparams, std::unique_ptr<SettledUtil> isettledUtil)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iparams         The ``AsyncVelIntegratedController`` arguments.
 isettledUtil    The ``SettledUtil`` to use.
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

        void setTarget(double itarget) override

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

        double getError() const override

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

        bool isSettled() override

**Returns:** Whether the controller is settled.

----

reset
~~~~~

Resets the controller so it can start from 0 again properly. Keeps configuration from before.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void reset() override

----

flipDisable
~~~~~~~~~~~

Changes whether the controller is off or on. Turning the controller on after it was off will cause
the controller to move to its last set target, unless it was reset in that time.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void flipDisable() override

----

flipDisable
~~~~~~~~~~~

Sets whether the controller is off or on. Turning the controller on after it was off will cause the
controller to move to its last set target, unless it was reset in that time.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void flipDisable(bool iisDisabled) override

============= ===============================================================
 Parameters
============= ===============================================================
 iisDisabled   Whether the controller should be disabled.
============= ===============================================================

----

isDisabled
~~~~~~~~~~

Returns whether the controller is currently disabled.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool isDisabled() const override

**Returns:** Whether the controller is currently disabled.
