========================
Async Pos PID Controller
========================

.. contents:: :local:

okapi::AsyncPosPIDControllerArgs
================================

Data class for the arguments to ``AsyncPosPIDController``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosPIDControllerArgs(std::shared_ptr<ControllerInput> iinput,
                                  std::shared_ptr<ControllerOutput> ioutput,
                                  const IterativePosPIDControllerArgs iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 iparams         The `IterativePosPIDController <../iterative/iterative-pos-pid-controller.html>`_ arguments.
=============== ===================================================================

----

okapi::AsyncPosPIDController
============================

An `AsyncPositionController <abstract-async-position-controller.html>`_ that uses PID.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosPIDController(std::shared_ptr<ControllerInput> iinput,
                              std::shared_ptr<ControllerOutput> ioutput,
                              const double ikP, const double ikI, const double ikD, const double ikBias = 0)
   .. tab :: Example
      .. highlight:: cpp
      ::

        auto myInput = std::make_shared<okapi::ADIEncoder>('A', 'B');
        auto myOutput = std::make_shared<okapi::Motor>(1);

        okapi::AsyncPosPIDController controller(myInput, myOutput, 0.5, 0, 0); // P controller

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 ikp             The P term gain.
 ikI             The I term gain.
 ikD             The D term gain.
 ikBias          The controller bias.
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosPIDController(std::shared_ptr<ControllerInput> iinput,
                              std::shared_ptr<ControllerOutput> ioutput,
                              const IterativePosPIDControllerArgs &iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 iparams         The `IterativePosPIDController <../iterative/iterative-pos-pid-controller.html>`_ arguments.
=============== ===================================================================
