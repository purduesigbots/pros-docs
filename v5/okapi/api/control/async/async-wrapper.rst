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

        AsyncWrapper(std::shared_ptr<ControllerInput> iinput, std::shared_ptr<ControllerOutput> ioutput,
                     std::unique_ptr<IterativeController> icontroller,
                     const Supplier<std::unique_ptr<AbstractRate>> &irateSupplier, std::unique_ptr<SettledUtil> isettledUtil)

   .. tab :: Example
      .. highlight:: cpp
      ::

        using namespace okapi::literals;
        Motor myMotor = 1_mtr;

        okapi::AsyncWrapper controller(std::make_shared<okapi::IntegratedEncoder>(myMotor), // Use the encoder in the motor as input
                                       std::make_shared<okapi::Motor>(myMotor),             // Write the controller output to the motor
                                       std::make_unique<okapi::IterativePosPIDController>(0.5, 0, 0)); // Use a simple P controller

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

        void setTarget(double itarget) override

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target.
============ ===============================================================

----

getOutput
~~~~~~~~~

Returns the last calculated output of the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double getOutput() const override

**Returns:** The previous output from the filter.

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

        void setOutputLimits(double imax, double imin) override

=============== ===================================================================
Parameters
=============== ===================================================================
 imax            The upper bound.
 imin            The lower bound.
=============== ===================================================================

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
