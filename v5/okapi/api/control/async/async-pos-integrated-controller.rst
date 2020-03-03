===============================
Async Pos Integrated Controller
===============================

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.X.X and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

.. contents:: :local:

okapi::AsyncPosIntegratedController
===================================

An `AsyncPositionController <abstract-async-position-controller.html>`_ that uses the V5 motor's
onboard control. If you are trying to create an instance of this class, you should most likely be
using the `AsyncControllerFactory <async-controller-factory.html>`_ instead of a constructor from
this class.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosIntegratedController(const std::shared_ptr<AbstractMotor> &imotor,
                                     const TimeUtil &itimeUtil)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
 itimeUtil       See ``TimeUtil`` docs.
=============== ===================================================================

----

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosIntegratedController(const std::shared_ptr<AbstractMotor> &imotor,
                                     std::int32_t imaxVelocity,
                                     const TimeUtil &itimeUtil)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
 imaxVelocity    The maximum velocity during a profiled movement in RPM ``[0-600]``.
 itimeUtil       See ``TimeUtil`` docs.
=============== ===================================================================

Methods
-------

setTarget
~~~~~~~~~

Sets the target for the controller in the motor's encoder units.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setTarget(double itarget) override

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target in the motor's encoder units.
============ ===============================================================

----

getTarget
~~~~~~~~~

Gets the last set target, or the default target if none was set.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double getTarget() override

**Returns:** The last target.

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

If the controller is disabled, this method must return true.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool isSettled() override

**Returns:** Whether the controller is settled.

----

reset
~~~~~

Resets the controller's internal state so it is similar to when it was first initialized, while
keeping any user-configured information. This implementation also stops movement.

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

        bool isDisabled() override

**Returns:** Whether the controller is currently disabled.

----

waitUntilSettled
~~~~~~~~~~~~~~~~

Blocks the current task until the controller has settled. Determining what settling means is
implementation-dependent.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void waitUntilSettled() override

----

controllerSet
~~~~~~~~~~~~~

Writes the value of the controller output. This method might be automatically called in another
thread by the controller. The range of input values is expected to be ``[-1, 1]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void controllerSet(double ivalue) override

============ ===============================================================
 Parameters
============ ===============================================================
 ivalue       The controller's output in the range ``[-1, 1]``.
============ ===============================================================

----

setMaxVelocity
~~~~~~~~~~~~~~

Sets a new maximum velocity in RPM ``[0-600]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setMaxVelocity(std::int32_t imaxVelocity)

=============== ===================================================================
Parameters
=============== ===================================================================
 imaxVelocity    The new maximum velocity in RPM.
=============== ===================================================================

----

tarePosition
~~~~~~~~~~~~

Sets the "absolute" zero position of the motor to its current position.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t tarePosition()

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

stop
~~~~

Stops the motor mid-movement. Does not change the last set target.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void stop()
