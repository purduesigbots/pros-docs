========================
Async Vel PID Controller
========================

.. contents:: :local:

okapi::AsyncVelPIDControllerArgs
================================

Data class for the arguments to ``AsyncVelPIDController``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelPIDControllerArgs(std::shared_ptr<ControllerInput> iinput,
                                  std::shared_ptr<ControllerOutput> ioutput,
                                  const IterativeVelPIDControllerArgs iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 iparams         The `IterativeVelPIDController <../iterative/iterative-vel-pid-controller.html>`_ arguments.
=============== ===================================================================

----

okapi::AsyncVelPIDController
============================

An `AsyncVelPIDController <abstract-async-velocity-controller.html>`_ that uses PID.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosPIDController(std::shared_ptr<ControllerInput> iinput,
                              std::shared_ptr<ControllerOutput> ioutput,
                              const double ikP, const double ikD, const double ikF)
   .. tab :: Example
      .. highlight:: cpp
      ::

        auto myInput = std::make_shared<okapi::ADIEncoder>('A', 'B');
        auto myOutput = std::make_shared<okapi::Motor>(1);

        okapi::AsyncVelPIDController controller(myInput, myOutput, 0.5, 0, 0); // P controller

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 ikp             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosPIDController(std::shared_ptr<ControllerInput> iinput,
                              std::shared_ptr<ControllerOutput> ioutput,
                              const IterativeVelPIDControllerArgs &iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 iparams         The `IterativeVelPIDController <../iterative/iterative-vel-pid-controller.html>`_ arguments.
=============== ===================================================================
