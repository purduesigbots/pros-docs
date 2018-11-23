=================================
(Abstract) Closed-loop Controller
=================================

.. contents:: :local:

okapi::ClosedLoopController
===========================

Template Parameter(s)
---------------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        template <typename Input, typename Output>
        class ClosedLoopController

============ ===============================================================
 Parameters
============ ===============================================================
 Input        The target/input type.
 Output        The error type.
============ ===============================================================

Methods
-------

setTarget
~~~~~~~~~

Sets the target for the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setTarget(Input itarget) = 0

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target.
============ ===============================================================

----

getTarget
~~~~~~~~~

Gets the last set target, or the default target if none was set.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual Input getTarget() = 0

**Returns:** The last target.

----

getError
~~~~~~~~

Returns the last error of the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual Output getError() const = 0

**Returns:** The last error of the controller.

----

isSettled
~~~~~~~~~

Returns whether the controller has settled at the target. Determining what settling means is
implementation-dependent.

If the controller is disabled, this method must return true.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool isSettled() = 0

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

        virtual void reset() = 0

----

Returns whether the controller has settled at the target. Determining what settling means is
implementation-dependent.

If the controller is disabled, this method must return true.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool isSettled() = 0

**Returns:** Whether the controller is settled.

----

flipDisable
~~~~~~~~~~~

Changes whether the controller is off or on. Turning the controller on after it was off will cause
the controller to move to its last set target, unless it was reset in that time.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void flipDisable() = 0

----

flipDisable
~~~~~~~~~~~

Sets whether the controller is off or on. Turning the controller on after it was off will cause the
controller to move to its last set target, unless it was reset in that time.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void flipDisable(bool iisDisabled) = 0

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

        virtual bool isDisabled() const = 0

**Returns:** Whether the controller is currently disabled.
