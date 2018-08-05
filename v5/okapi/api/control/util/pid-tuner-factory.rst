=================
PID Tuner Factory
=================


.. contents:: :local:

okapi::PIDTunerFactory
======================

A `factory <https://sourcemaking.com/design_patterns/factory_method>`_ which creates instances of
`PIDTuner <pid-tuner.html>`_. This is the preferred way of creating a `PIDTuner <pid-tuner.html>`_.

You can read more about the factory pattern
`here <https://sourcemaking.com/design_patterns/factory_method>`_.

Methods
-------

create
~~~~~~

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static PIDTuner create(std::shared_ptr<ControllerInput<double>> iinput, std::shared_ptr<ControllerOutput<double>> ioutput,
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

createPtr
~~~~~~~~~

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static std::unique_ptr<PIDTuner> createPtr(
                               std::shared_ptr<ControllerInput<double>> iinput, std::shared_ptr<ControllerOutput<double>> ioutput,
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
