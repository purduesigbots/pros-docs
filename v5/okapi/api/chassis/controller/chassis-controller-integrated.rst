=============================
Chassis Controller Integrated
=============================

.. contents:: :local:

okapi::ChassisControllerIntegrated
==================================

A ``ChassisController`` using the V5 motor's integrated control.

Constructor(s)
--------------

This constructor infers a skid-steer layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerIntegrated(const AbstractMotor &ileftSideMotor, const AbstractMotor &irightSideMotor, const double istraightScale = 1, const double iturnScale = 1)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          using namespace okapi::literals;

          // Skid-Steer controller
          okapi::ChassisControllerIntegrated controller(1_m, 2_m);

          // Could also use MotorGroups to use more motors
          okapi::ChassisControllerIntegrated controller(okapi::MotorGroup<2>({1_m, 2_m}), okapi::MotorGroup<2>({3_m, 4_m}));
        }

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 ileftSideMotor           The left side motor in a skid-steer model.
 irightSideMotor          The right side motor in a skid-steer model.
 istraightScale           A scale converting your units of choice to encoder ticks, used for measuring distance.
 iturnScale               A scale converting your units of choice to encoder ticks, used for measure angle.
======================   =======================================================================================

This constructor infers an x-drive layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerIntegrated(const AbstractMotor &itopLeftMotor, const AbstractMotor &itopRightMotor, const AbstractMotor &ibottomRightMotor, const AbstractMotor &ibottomLeftMotor, const double istraightScale = 1, const double iturnScale = 1)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          using namespace okapi::literals;

          // X-Drive controller
          okapi::ChassisControllerIntegrated controller(1_m, 2_m, 3_m, 4_m);
        }

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 itopLeftMotor            The top left motor in an x-drive model.
 itopRightMotor           The top right motor in an x-drive model.
 ibottomRightMotor        The bottom right motor in an x-drive model.
 ibottomLeftMotor         The bottom left motor in an x-drive model.
 istraightScale           A scale converting your units of choice to encoder ticks, used for measuring distance.
 iturnScale               A scale converting your units of choice to encoder ticks, used for measure angle.
======================   =======================================================================================

This constructor is not recommended, there are less verbose options above.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerIntegrated(const ChassisModel &imodel, const PosIntegratedControllerArgs &ileftControllerArgs, const PosIntegratedControllerArgs &irightControllerArgs, const double istraightScale = 1, const double iturnScale = 1)

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 imodel                   The underlying ``ChassisModel`` to control.
 ileftControllerArgs      The ``PosIntegratedControllerArgs`` for the left side PID controller.
 irightControllerArgs     The ``PosIntegratedControllerArgs`` for the right side PID controller.
 istraightScale           A scale converting your units of choice to encoder ticks, used for measuring distance.
 iturnScale               A scale converting your units of choice to encoder ticks, used for measure angle.
======================   =======================================================================================

Methods
-------

moveDistance
~~~~~~~~~~~~

Drives the robot straight for a distance (using closed-loop control). Blocks while the robot is
driving.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void moveDistance(const int itarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 itarget         The distance to travel.
=============== ===================================================================

----

turnAngle
~~~~~~~~~

Turns the robot clockwise in place (using closed-loop control). Blocks while the robot is turning.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void turnAngle(const float idegTarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn.
=============== ===================================================================
