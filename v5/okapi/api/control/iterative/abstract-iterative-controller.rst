===============================
(Abstract) Iterative Controller
===============================

.. contents:: :local:

okapi::IterativeControllerArgs
==============================

Data class for the arguments to ``IterativeController``.

----

okapi::IterativeController
==========================

A type of `ClosedLoopController <../abstract-closed-loop-controller.html>`_ that must be stepped
by the user.

Methods
-------

step
~~~~

Do one iteration of the controller. Outputs in the range ``[-1, 1]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double step(const double ireading) = 0

============ ===============================================================
 Parameters
============ ===============================================================
 ireading     The new sensor reading.
============ ===============================================================

**Returns:** The controller output.

----

getOutput
~~~~~~~~~

Returns the last calculated output of the controller. Default is ``0``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getOutput() const

**Returns:** The previous output from the filter.

----

getDerivative
~~~~~~~~~~~~~

Returns the last derivative (change in error) of the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getDerivative() const = 0

**Returns:** The last derivative (change in error) of the controller.

----

setSampleTime
~~~~~~~~~~~~~

Sets time between loops. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setSampleTime(const QTime isampleTime)

=============== ===================================================================
Parameters
=============== ===================================================================
 isampleTime     The sample time.
=============== ===================================================================

----

setOutputLimits
~~~~~~~~~~~~~~~

Sets controller output bounds. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setOutputLimits(double imax, double imin)

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

        virtual void reset() = 0

----

flipDisable
~~~~~~~~~~~

Changes whether the controll is off or on. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void flipDisable()

----

getSampleTime
~~~~~~~~~~~~~

Get the last set sample time. Default is ``10_ms``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual QTime getSampleTime() const

**Returns:** The last set sample time.
