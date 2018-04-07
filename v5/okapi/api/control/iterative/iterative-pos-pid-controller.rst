============================
Iterative Pos PID Controller
============================

.. contents:: :local:

okapi::IterativePosPIDControllerArgs
====================================

Data class for the arguments to ``IterativePosPIDController``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        IterativePosPIDControllerArgs(const double ikP, const double ikI, const double ikD, const double ikBias = 0)

=============== ===================================================================
 Parameters
=============== ===================================================================
 ikp             The P term gain.
 ikI             The I term gain.
 ikD             The D term gain.
 ikBias          The controller bias.
=============== ===================================================================

----

okapi::IterativePosPIDController
================================

An `IterativePositionController <abstract-iterative-position-controller.html>`_ that uses the position PID algorithm.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        IterativePosPIDController(const double ikP, const double ikI, const double ikD, const double ikBias = 0)

=============== ===================================================================
 Parameters
=============== ===================================================================
 ikp             The P term gain.
 ikI             The I term gain.
 ikD             The D term gain.
 ikBias          The controller bias.
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        IterativePosPIDController(const IterativePosPIDControllerArgs &params)

=============== ===================================================================
 Parameters
=============== ===================================================================
 params          The ``IterativePosPIDController`` arguments.
=============== ===================================================================

Methods
-------

step
~~~~

Do one iteration of the controller. Outputs in the range ``[-1, 1]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double step(const double ireading) override

============ ===============================================================
 Parameters
============ ===============================================================
 ireading     The new sensor reading.
============ ===============================================================

**Returns:** The controller output.

----

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

Returns the last calculated output of the controller. Default is ``0``.

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

getDerivative
~~~~~~~~~~~~~

Returns the last derivative (change in error) of the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getDerivative() const override

**Returns:** The last derivative (change in error) of the controller.

----

setGains
~~~~~~~~

Sets controller gains.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setGains(const double ikP, const double ikI, const double ikD, const double ikBias = 0)

=============== ===================================================================
Parameters
=============== ===================================================================
 ikp             The P term gain.
 ikI             The I term gain.
 ikD             The D term gain.
 ikBias          The controller bias.
=============== ===================================================================

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

setIntegralLimits
~~~~~~~~~~~~~~~~~

Sets integrator bounds. Default bounds are ``[-1, 1]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setIntegralLimits(double imax, double imin)

=============== ===================================================================
Parameters
=============== ===================================================================
 imax            The upper bound.
 imin            The lower bound.
=============== ===================================================================

----

setErrorSumLimits
~~~~~~~~~~~~~~~~~

Sets the error sum bounds. Default bounds are ``[500, 1250]``. Error will only be added to the
integral term when its absolute value between these bounds of either side of the target.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setErrorSumLimits(const double imax, const double imin)

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

setIntegratorReset
~~~~~~~~~~~~~~~~~~

Sets whether the integrator should be reset when error is ``0`` or changes sign.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setIntegratorReset(bool iresetOnZero)

=============== ===================================================================
Parameters
=============== ===================================================================
 iresetOnZero    Whether the integrator should be reset when error is ``0`` or changes sign.
=============== ===================================================================

----

flipDisable
~~~~~~~~~~~

Changes whether the controll is off or on. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void flipDisable() override

----

getSampleTime
~~~~~~~~~~~~~

Returns the last set sample time. Default is ``10``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual uint32_t getSampleTime() const override

**Returns:** The last set sample time.
