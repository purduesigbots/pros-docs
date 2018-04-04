===============
AsyncController
===============

.. contents:: :local:

okapi::AsyncControllerArgs
==========================

Data class for the arguments to ``AsyncController``.

----

okapi::AsyncController
======================

Methods
-------

setTarget
~~~~~~~~~

Sets the target for the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setTarget(const double itarget) = 0

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

        virtual double getOutput() const

**Returns:** The previous output from the filter.

----

getError
~~~~~~~~

Returns the last error of the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getError() const = 0

**Returns:** The last error of the controller.

----

setSampleTime
~~~~~~~~~~~~~

Sets time between loops in ms. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setSampleTime(const uint32_t isampleTime)

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
