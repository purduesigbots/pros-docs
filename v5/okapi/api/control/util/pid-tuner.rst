=========
PID Tuner
=========

.. contents:: :local:

okapi::PIDTuner
===============

A class for automatically tuning a PID controller. If you are trying to create an instance of this
class, you should most likely be using the `PIDTunerFactory <pid-tuner-factory.html>`_ instead of
a constructor from this class.

This utility is an implementation of the algorithm described in the paper by
M. H. T. Omar, W. M. Ali, and M. Z. Mostafa at the following location:
`<https://www.researchgate.net/publication/257016802_Auto_Tuning_of_PID_Controller_Using_Swarm_Intelligence>`_.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        PIDTuner(const std::shared_ptr<ControllerInput<double>> &iinput,
                 const std::shared_ptr<ControllerOutput<double>> &ioutput,
                 const TimeUtil &itimeUtil,
                 QTime itimeout, std::int32_t igoal,
                 double ikPMin, double ikPMax,
                 double ikIMin, double ikIMax,
                 double ikDMin, double ikDMax,
                 std::size_t inumIterations = 5, std::size_t inumParticles = 16,
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

        virtual Output autotune()

**Returns:** The PID controller gains.

okapi::PIDTuner::Output
=======================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        struct Output {
          double kP, kI, kD;
        };
