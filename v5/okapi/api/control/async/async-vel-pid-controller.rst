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

        AsyncPosPIDController(std::shared_ptr<ControllerInput> iinput, std::shared_ptr<ControllerOutput> ioutput,
                              const TimeUtil &itimeUtil,
                              const double ikP, const double ikD, const double ikF,
                              std::unique_ptr<VelMath> ivelMath)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 itimeUtil       See ``TimeUtil`` docs.
 ikp             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
 ivelMath        The ``VelMath`` to use.
=============== ===================================================================
