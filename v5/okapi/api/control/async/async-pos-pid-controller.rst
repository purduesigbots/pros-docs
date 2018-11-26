========================
Async Pos PID Controller
========================

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

        AsyncPosPIDController(std::shared_ptr<ControllerInput<double>> &iinput,
                              std::shared_ptr<ControllerOutput<double>> &ioutput,
                              TimeUtil &itimeUtil,
                              double ikP, double ikI, double ikD, double ikBias = 0,
                              double iratio = 1,
                              std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>(),
                              const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>())

=================== ===================================================================
 Parameters
=================== ===================================================================
 iinput               The controller input. Will be turned into an ``OffsettableControllerInput``.
 ioutput              The controller output.
 itimeUtil            See ``TimeUtil`` docs.
 ikp                  The P term gain.
 ikI                  The I term gain.
 ikD                  The D term gain.
 ikBias               The controller bias.
 iratio               Any external gear ratio.
 iderivativeFilter    The filter to use for filtering the derivative term.
 ilogger              The logger this instance will log to.
=================== ===================================================================

----

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosPIDController(std::shared_ptr<OffsetableControllerInput> &iinput,
                              std::shared_ptr<ControllerOutput<double>> &ioutput,
                              TimeUtil &itimeUtil,
                              double ikP, double ikI, double ikD, double ikBias = 0,
                              double iratio = 1,
                              std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>(),
                              const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>())

=================== ===================================================================
 Parameters
=================== ===================================================================
 iinput               The controller input.
 ioutput              The controller output.
 itimeUtil            See ``TimeUtil`` docs.
 ikp                  The P term gain.
 ikI                  The I term gain.
 ikD                  The D term gain.
 ikBias               The controller bias.
 iratio               Any external gear ratio.
 iderivativeFilter    The filter to use for filtering the derivative term.
 ilogger              The logger this instance will log to.
=================== ===================================================================

----

Methods
-------

tarePosition
~~~~~~~~~~~~

Sets the "absolute" zero position of the controller to its current position.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void tarePosition() override
