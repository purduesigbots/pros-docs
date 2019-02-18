============================
Iterative Pos PID Controller
============================

.. contents:: :local:

okapi::IterativePosPIDController
================================

An `IterativePositionController <abstract-iterative-position-controller.html>`_ that uses the
PID algorithm. If you are trying to create an instance of this class, you should most likely be
using the `IterativeControllerFactory <iterative-controller-factory.html>`_ instead of a
constructor from this class.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        IterativePosPIDController(double ikP, double ikI, double ikD, double ikBias,
                                  const TimeUtil &itimeUtil,
                                  std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>(),
                                  const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>())

=================== ===================================================================
 Parameters
=================== ===================================================================
 ikP                 The P term gain.
 ikI                 The I term gain.
 ikD                 The D term gain.
 ikBias              The controller bias.
 itimeUtil           See ``TimeUtil`` docs.
 iderivativeFilter   The filter to use for filtering the derivative term.
 ilogger             The logger this instance will log to.
=================== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        IterativePosPIDController(const Gains &igains, const TimeUtil &itimeUtil,
                                  std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>(),
                                  const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>())

=================== ===================================================================
 Parameters
=================== ===================================================================
 igains              See ``Gains`` below.
 itimeUtil           See ``TimeUtil`` docs.
 iderivativeFilter   The filter to use for filtering the derivative term.
 ilogger             The logger this instance will log to.
=================== ===================================================================

----

Methods
-------

step
~~~~

Do one iteration of the controller. Outputs in the range ``[-1, 1]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double step(double ireading) override

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

        void setTarget(double itarget) override

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target.
============ ===============================================================

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

getOutput
~~~~~~~~~

Returns the last calculated output of the controller. Default is ``0``. Output is in the range
``[-1, 1]`` by default.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double getOutput() const override

**Returns:** The previous output from the filter.

----

getError
~~~~~~~~

Returns the last error of the controller. Does not update when disabled.

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

Sets controller output bounds. Default bounds are ``[-1, 1]``.

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

setControllerSetTargetLimits
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sets the (soft) limits for the target range that ``controllerSet()`` scales into. The target
computed by ``controllerSet()`` is scaled into the range ``[-itargetMin, itargetMax]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setControllerSetTargetLimits(double itargetMax, double itargetMin) override

=============== ===================================================================
Parameters
=============== ===================================================================
 itargetMax      The new max target for ``controllerSet()``.
 itargetMin      The new min target for ``controllerSet()``.
=============== ===================================================================

----

getMaxOutput
~~~~~~~~~~~~

Get the upper output bound.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Output getMaxOutput() override

**Returns:** The upper output bound.

----

getMinOutput
~~~~~~~~~~~~

Get the lower output bound.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Output getMinOutput() override

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

getSampleTime
~~~~~~~~~~~~~

Returns the last set sample time. Default is ``10_ms``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        QTime getSampleTime() const override

**Returns:** The last set sample time.

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

Sets the error sum bounds. Default bounds are ``[0, std::numeric_limits<double>::max()]``.
Error will only be added to the integral term when its absolute value between these bounds
of either side of the target.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setErrorSumLimits(double imax, double imin)

=============== ===================================================================
Parameters
=============== ===================================================================
 imax            The upper bound.
 imin            The lower bound.
=============== ===================================================================

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

setGains
~~~~~~~~

Sets controller gains.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setGains(const Gains &igains)

=============== ===================================================================
Parameters
=============== ===================================================================
 igains          The new gains.
=============== ===================================================================

----

getGains
~~~~~~~~

Gets the current gains.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Gains getGains() const

**Returns:** The current gains.

----

okapi::IterativePosPIDController::Gains
=======================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        struct Gains {
          double kP;
          double kI;
          double kD;
          double kBias;
        };

=============== ===================================================================
Parameters
=============== ===================================================================
 ikP             The proportional term gain.
 ikI             The integral term gain.
 ikD             The derivative term gain.
 ikBias          The controller bias (a constant offset added to the output).
=============== ===================================================================
