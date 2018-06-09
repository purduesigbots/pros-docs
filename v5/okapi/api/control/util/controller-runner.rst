=================
Controller Runner
=================

.. contents:: :local:

okapi::ControllerRunner
=======================

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ControllerRunner()

----

Methods
-------

runUntilSettled
~~~~~~~~~~~~~~~

Runs the controller until it has settled.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double runUntilSettled(const double itarget, AsyncController &icontroller)

   .. tab :: Example
      .. highlight:: cpp
      ::

        using namespace okapi::literals;
        okapi::AsyncPosIntegratedController controller(1_mtr); // Using motor 1
        okapi::ControllerRunner runner;

        runner.runUntilSettled(1800, controller);

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target.
 icontroller  The controller to run.
============ ===============================================================

----

runUntilSettled
~~~~~~~~~~~~~~~

Runs the controller until it has settled.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double runUntilSettled(const double itarget, IterativeController &icontroller, ControllerOutput &ioutput)

   .. tab :: Example
      .. highlight:: cpp
      ::

        using namespace okapi::literals;
        okapi::IterativePosPIDController controller(0.5, 0, 0); // P controller
        okapi::ControllerRunner runner;
        okapi::Motor myMotor = 1_mtr;

        runner.runUntilSettled(1800, controller, myMotor);

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target.
 icontroller  The controller to run.
 ioutput      The output to write to.
============ ===============================================================

----

runUntilAtTarget
~~~~~~~~~~~~~~~~

Runs the controller until it has reached its target, but not necessarily settled.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double runUntilAtTarget(const double itarget, AsyncController &icontroller)

   .. tab :: Example
      .. highlight:: cpp
      ::

        using namespace okapi::literals;
        okapi::AsyncPosIntegratedController controller(1_mtr); // Using motor 1
        okapi::ControllerRunner runner;

        runner.runUntilAtTarget(1800, controller);

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target.
 icontroller  The controller to run.
============ ===============================================================

----

runUntilAtTarget
~~~~~~~~~~~~~~~~

Runs the controller until it has reached its target, but not necessarily settled.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double runUntilSettled(const double itarget, AsyncController &icontroller, ControllerOutput &ioutput)

   .. tab :: Example
      .. highlight:: cpp
      ::

        using namespace okapi::literals;
        okapi::IterativePosPIDController controller(0.5, 0, 0); // P controller
        okapi::ControllerRunner runner;
        okapi::Motor myMotor = 1_mtr;

        runner.runUntilSettled(1800, controller, myMotor);

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target.
 icontroller  The controller to run.
 ioutput      The output to write to.
============ ===============================================================
