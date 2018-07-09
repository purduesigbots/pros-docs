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

        AsyncPosPIDController(std::shared_ptr<ControllerInput> iinput, std::shared_ptr<ControllerOutput> ioutput,
                              std::unique_ptr<AbstractRate> irate, std::unique_ptr<AbstractTimer> itimer, std::unique_ptr<SettledUtil> isettledUtil,
                              const double ikP, const double ikI, const double ikD, const double ikBias = 0)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 irate           The ``AbstractRate`` to use.
 itimer          The ``AbstractTimer`` to use.
 isettledUtil    The ``SettledUtil`` to use.
 ikp             The P term gain.
 ikI             The I term gain.
 ikD             The D term gain.
 ikBias          The controller bias.
=============== ===================================================================
