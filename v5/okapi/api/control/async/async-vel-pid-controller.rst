========================
Async Vel PID Controller
========================

.. contents:: :local:

okapi::AsyncVelPIDController
============================

An `AsyncVelPIDController <abstract-async-velocity-controller.html>`_ that uses PID. If you are
trying to create an instance of this class, you should most likely be using the
`AsyncControllerFactory <async-controller-factory.html>`_ instead of a constructor from this class.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosPIDController(const std::shared_ptr<ControllerInput<double>> &iinput,
                              const std::shared_ptr<ControllerOutput<double>> &ioutput,
                              const TimeUtil &itimeUtil,
                              double ikP, double ikD, double ikF, double ikSF,
                              std::unique_ptr<VelMath> ivelMath,
                              std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>())

=================== ===================================================================
 Parameters
=================== ===================================================================
 iinput              The controller input.
 ioutput             The controller output.
 itimeUtil           See ``TimeUtil`` docs.
 ikP                 The P term gain.
 ikD                 The D term gain.
 ikF                 The Feed-Forward gain.
 ikSF                A Feed-Forward gain to counteract static friction.
 ivelMath            The ``VelMath`` to use.
 iderivativeFilter   The filter to use for filtering the derivative term.
=================== ===================================================================
