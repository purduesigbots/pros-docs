=========
PID Tuner
=========

.. contents:: :local:

okapi::PIDTuner
===============

A class for automatically tuning a PID controller. If you are trying to create an instance of this
class, you should most likely be using the `PIDTunerFactory <pid-tuner-factory.html>`_ instead of
a constructor from this class.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        PIDTuner(std::shared_ptr<ControllerInput> iinput, std::shared_ptr<ControllerOutput> ioutput,
                 const TimeUtil &itimeUtil,
                 QTime itimeout, std::int32_t igoal,
                 double ikPMin, double ikPMax,
                 double ikIMin, double ikIMax,
                 double ikDMin, double ikDMax,
                 std::int32_t inumIterations = 5, std::int32_t inumParticles = 16,
                 double ikSettle = 1, double ikITAE = 2)

===================== ===============================================================
 Parameters
===================== ===============================================================
 iinput                The ``ControllerInput`` to read from.
 ioutput               The ``ControllerOutput`` to write motor commands to.
 itimeUtil             A ``TimeUtil``.
 itimeout              The maximum time for one iteration.
 igoal                 The PID target.
 ikPMin                The minimum ``kP`` value.
 ikPMax                The maximum ``kP`` value.
 ikIMin                The minimum ``kI`` value.
 ikIMax                The maximum ``kI`` value.
 ikDMin                The minimum ``kD`` value.
 ikDMax                The maximum ``kD`` value.
 inumIterations        The number of iterations to run the tuning algorithm for.
 inumParticles         The number of particles to use for estimating gains.
 ikSettle              A settling time gain which penalizes long settling times.
 ikITAE                An error sum gain which penalizes recent error more than old error.
===================== ===============================================================

----

Methods
-------

autotune
~~~~~~~~

Runs the PID controller tuning algorithm for the specified number of iterations and returns the
calculated gains.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual IterativePosPIDControllerArgs autotune()

**Returns:** The PID controller gains.
