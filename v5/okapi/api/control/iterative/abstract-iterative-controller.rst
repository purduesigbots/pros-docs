===============================
(Abstract) Iterative Controller
===============================

.. contents:: :local:

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

        virtual Output step(Input ireading) = 0

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

        virtual Output getOutput() const

**Returns:** The previous output from the filter.

----

setOutputLimits
~~~~~~~~~~~~~~~

Sets controller output bounds. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setOutputLimits(Output imax, Output imin)

=============== ===================================================================
Parameters
=============== ===================================================================
 imax            The upper bound.
 imin            The lower bound.
=============== ===================================================================

----

setSampleTime
~~~~~~~~~~~~~

Sets time between loops. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setSampleTime(QTime isampleTime)

=============== ===================================================================
Parameters
=============== ===================================================================
 isampleTime     The sample time.
=============== ===================================================================

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
