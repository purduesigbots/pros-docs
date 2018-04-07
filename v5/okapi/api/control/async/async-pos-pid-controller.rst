========================
Async Pos PID Controller
========================

.. contents:: :local:

okapi::AsyncPosPIDControllerArgs
================================

Data class for the arguments to ``AsyncPosPIDController``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosPIDControllerArgs(ControllerInput &iinput, ControllerOutput &ioutput, const IterativePosPIDControllerArgs &iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 iparams         The `IterativePosPIDController <../iterative/iterative-pos-pid-controller.html>`_ arguments.
=============== ===================================================================

----

okapi::AsyncPosPIDController
============================

An `AsyncPositionController <async-position-controller.html>`_ that uses PID.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosPIDController(ControllerInput &iinput, ControllerOutput &ioutput, const double ikP, const double ikI, const double ikD, const double ikBias = 0)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 ikp             The P term gain.
 ikI             The I term gain.
 ikD             The D term gain.
 ikBias          The controller bias.
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosPIDController(ControllerInput &iinput, ControllerOutput &ioutput, const IterativePosPIDControllerArgs &iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 iparams         The `IterativePosPIDController <../iterative/iterative-pos-pid-controller.html>`_ arguments.
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

getOutput
~~~~~~~~~

Returns the last calculated output of the controller. Default is 0.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getOutput() const override

**Returns:** The previous output from the filter.

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

setSampleTime
~~~~~~~~~~~~~

Sets time between loops in ms. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setSampleTime(const uint32_t isampleTime) override

=============== ===================================================================
Parameters
=============== ===================================================================
 isampleTime     The sample time in ms.
=============== ===================================================================

----

setOutputLimits
~~~~~~~~~~~~~~~

Sets controller output bounds. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setOutputLimits(double imax, double imin) override

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

        virtual void reset() override

----

flipDisable
~~~~~~~~~~~

Changes whether the controll is off or on. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void flipDisable() override
