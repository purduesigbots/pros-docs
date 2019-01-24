============================
Iterative Vel PID Controller
============================

.. contents:: :local:

okapi::IterativeVelPIDController
================================

An `IterativeVelocityController <abstract-iterative-velocity-controller.html>`_ that uses the
velocity PD algorithm. If you are trying to create an instance of this class, you should most
likely be using the `IterativeControllerFactory <iterative-controller-factory.html>`_ instead of a
constructor from this class.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        IterativeVelPIDController(double ikP, double ikD, double ikF, double ikSF,
                                  std::unique_ptr<VelMath> ivelMath,
                                  const TimeUtil &itimeUtil,
                                  std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>())

=================== ===================================================================
 Parameters
=================== ===================================================================
 ikP                 The P term gain.
 ikD                 The D term gain.
 ikF                 The Feed-Forward gain.
 ikSF                A Feed-Forward gain to counteract static friction.
 ivelMath            The `VelMath <../../filters/vel-math.html>`_ used for calculating plant velocity.
 itimeUtil           See ``TimeUtil`` docs.
 iderivativeFilter   The filter to use for filtering the derivative term.
=================== ===================================================================

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

Returns the last calculated output of the controller. Default is ``0``.

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

        void setOutputLimits(double imax, double imin) override

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

stepVel
~~~~~~~

Do one iteration of velocity calculation.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual QAngularSpeed stepVel(double inewReading)

=============== ===================================================================
Parameters
=============== ===================================================================
 inewReading     The new sensor reading.
=============== ===================================================================

**Returns:** The filtered velocity.

----

setGains
~~~~~~~~

Sets controller gains.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setGains(double ikP, double ikD, double ikF, double ikSF)

=============== ===================================================================
Parameters
=============== ===================================================================
 ikP             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
 ikSF            A Feed-Forward gain to counteract static friction.
=============== ===================================================================

----

setTicksPerRev
~~~~~~~~~~~~~~

Sets controller gains.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setTicksPerRev(double tpr)

=============== ===================================================================
Parameters
=============== ===================================================================
 tpr             The encoder ticks per revolution.
=============== ===================================================================

----

getVel
~~~~~~

Returns the current velocity.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual QAngularSpeed getVel() const

**Returns:** The filtered velocity.
