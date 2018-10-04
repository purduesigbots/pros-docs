=================
Controller Runner
=================

.. contents:: :local:

okapi::ControllerRunner
=======================

A utility class to run a controller until it has settled or reached its target. If you are trying
to create an instance of this class, you should most likely be using the
`ControllerRunnerFactory <controller-runner-factory.html>`_ instead of a constructor from this
class.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        template <typename Input, typename Output>
        explicit ControllerRunner(std::unique_ptr<AbstractRate> irate)

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

        virtual Output runUntilSettled(const Input itarget, AsyncController<Input, Output> &icontroller)

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

        virtual Output runUntilSettled(const Input itarget, IterativeController<Input, Output> &icontroller, ControllerOutput<Output> &ioutput)

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

        virtual Output runUntilAtTarget(const Input itarget, AsyncController<Input, Output> &icontroller)

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

        virtual Output runUntilSettled(const Input itarget, AsyncController<Input, Output> &icontroller, ControllerOutput<Output> &ioutput)

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
