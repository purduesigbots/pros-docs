=============
Async Wrapper
=============

.. contents:: :local:

okapi::AsyncWrapper
===================

An `AsyncController <abstract-async-controller.html>`_ that transforms an
`IterativeController <../iterative/abstract-iterative-controller.html>`_ into an
`AsyncController <abstract-async-controller.html>`_ by running it in another task. In other words,
the input controller will act like an `AsyncController <abstract-async-controller.html>`_.

This class is normally not used directly. If you are trying to create an instance of this class,
you should most likely be using the `AsyncControllerFactory <async-controller-factory.html>`_
instead of a constructor from this class.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncWrapper(const std::shared_ptr<ControllerInput<Input>> &iinput,
                     const std::shared_ptr<ControllerOutput<Output>> &ioutput,
                     std::unique_ptr<IterativeController<Input, Output>> icontroller,
                     const Supplier<std::unique_ptr<AbstractRate>> &irateSupplier, std::unique_ptr<SettledUtil> isettledUtil)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 icontroller     The controller to use.
 irateSupplier   The a ``Supplier`` of ``AbstractRate``.
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

        void setTarget(Input itarget) override

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target.
============ ===============================================================

----

controllerSet
~~~~~~~~~~~~~

Writes the value of the controller output. This method might be automatically called in another
thread by the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void controllerSet(double ivalue)

============ ===============================================================
 Parameters
============ ===============================================================
 ivalue       The controller's output.
============ ===============================================================

----

getTarget
~~~~~~~~~

Gets the last set target, or the default target if none was set.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Input getTarget() override

**Returns:** The last target.

----

getOutput
~~~~~~~~~

Returns the last calculated output of the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Output getOutput() const override

**Returns:** The previous output from the filter.

----

getError
~~~~~~~~

Returns the last error of the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Output getError() const override

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

setSampleTime
~~~~~~~~~~~~~

Sets time between loops.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setSampleTime(QTime isampleTime) override

=============== ===================================================================
Parameters
=============== ===================================================================
 isampleTime     The sample time.
=============== ===================================================================

----

setOutputLimits
~~~~~~~~~~~~~~~

Sets controller output bounds.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setOutputLimits(Output imax, Output imin) override

=============== ===================================================================
Parameters
=============== ===================================================================
 imax            The upper bound.
 imin            The lower bound.
=============== ===================================================================

----

getMaxOutput
~~~~~~~~~~~~

Get the upper output bound.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Output getMaxOutput()

**Returns:** The upper output bound.

----

getMinOutput
~~~~~~~~~~~~

Get the lower output bound.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Output getMinOutput()

**Returns:** The lower output bound.

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

        bool isDisabled() const override

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

startThread
~~~~~~~~~~~

Starts the internal thread. This should not be called by normal users. This method is called by the
``AsyncControllerFactory`` when making a new instance of this class.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void startThread()
