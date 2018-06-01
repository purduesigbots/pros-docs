===========================
(Abstract) Async Controller
===========================

.. contents:: :local:

okapi::AsyncControllerArgs
==========================

Data class for the arguments to ``AsyncController``.

----

okapi::AsyncController
======================

A type of `ClosedLoopController <../abstract-closed-loop-controller.html>`_ that runs on its own and
automatically writes its output.

Methods
-------

getOutput
~~~~~~~~~

Returns the last calculated output of the controller. Default is 0.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getOutput() const

**Returns:** The previous output from the filter.

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
