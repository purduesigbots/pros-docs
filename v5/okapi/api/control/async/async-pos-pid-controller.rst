========================
Async Pos PID Controller
========================

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.X.X and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

.. contents:: :local:

okapi::AsyncPosPIDController
============================

An `AsyncPositionController <abstract-async-position-controller.html>`_ that uses PID. If you are
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
                              const double ikP, const double ikI, const double ikD, const double ikBias = 0,
                              std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>())

=================== ===================================================================
 Parameters
=================== ===================================================================
 iinput               The controller input.
 ioutput              The controller output.
 itimeUtil            See ``TimeUtil`` docs.
 ikP                  The P term gain.
 ikI                  The I term gain.
 ikD                  The D term gain.
 ikBias               The controller bias.
 iderivativeFilter    The filter to use for filtering the derivative term.
=================== ===================================================================
