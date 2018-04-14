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

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target.
 icontroller  The controller to run.
============ ===============================================================

----

runUntilAtTarget
~~~~~~~~~~~~~~~

Runs the controller until it has reached its target, but not necessarily settled.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double runUntilSettled(const double itarget, AsyncController &icontroller, ControllerOutput &ioutput)

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target.
 icontroller  The controller to run.
 ioutput      The output to write to.
============ ===============================================================
