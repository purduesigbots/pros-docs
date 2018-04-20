======================
Chassis Controller PID
======================

.. contents:: :local:

okapi::ChassisControllerPID
===========================

A `ChassisController <abstract-chassis-controller.html>`_ using PID control. Does not use the V5
motor's integrated control.

Constructor(s)
--------------

This constructor infers a skid-steer layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerPID(Motor ileftSideMotor,
                             Motor irightSideMotor,
                             const IterativePosPIDControllerArgs &idistanceArgs,
                             const IterativePosPIDControllerArgs &iangleArgs,
                             const double istraightScale = 1, const double iturnScale = 1)

   .. tab :: Example
      .. highlight:: cpp
      ::

        using namespace okapi::literals;
        okapi::ChassisControllerPID controller(1_m, 2_m,
                                               okapi::IterativePosPIDControllerArgs(0, 0, 0),
                                               okapi::IterativePosPIDControllerArgs(0, 0, 0));

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 ileftSideMotor           The left side motor in a skid-steer model.
 irightSideMotor          The right side motor in a skid-steer model.
 idistanceArgs            The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the distance PID controller.
 iangleArgs               The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the angle PID controller.
 istraightScale           A scale converting your units of choice to encoder ticks, used for measuring distance.
 iturnScale               A scale converting your units of choice to encoder ticks, used for measure angle.
======================   =======================================================================================

This constructor infers a skid-steer layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerPID(MotorGroup ileftSideMotor,
                             MotorGroup irightSideMotor,
                             const IterativePosPIDControllerArgs &idistanceArgs,
                             const IterativePosPIDControllerArgs &iangleArgs,
                             const double istraightScale = 1, const double iturnScale = 1)

   .. tab :: Example
      .. highlight:: cpp
      ::

        using namespace okapi::literals;
        okapi::ChassisControllerPID controller(okapi::MotorGroup({1_m, 2_m}),
                                               okapi::MotorGroup({3_m, 4_m}),
                                               okapi::IterativePosPIDControllerArgs(0, 0, 0),
                                               okapi::IterativePosPIDControllerArgs(0, 0, 0));

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 ileftSideMotor           The left side motor in a skid-steer model.
 irightSideMotor          The right side motor in a skid-steer model.
 idistanceArgs            The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the distance PID controller.
 iangleArgs               The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the angle PID controller.
 istraightScale           A scale converting your units of choice to encoder ticks, used for measuring distance.
 iturnScale               A scale converting your units of choice to encoder ticks, used for measure angle.
======================   =======================================================================================

This constructor infers an x-drive layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerPID(Motor itopLeftMotor,
                             Motor itopRightMotor,
                             Motor ibottomRightMotor,
                             Motor ibottomLeftMotor,
                             const IterativePosPIDControllerArgs &idistanceArgs,
                             const IterativePosPIDControllerArgs &iangleArgs,
                             const double istraightScale = 1, const double iturnScale = 1)

   .. tab :: Example
      .. highlight:: cpp
      ::

        using namespace okapi::literals;

        // X-Drive controller
        okapi::ChassisControllerPID controller(1_m, 2_m, 3_m, 4_m,
                                               IterativePosPIDControllerArgs(0, 0, 0),
                                               IterativePosPIDControllerArgs(0, 0, 0));

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 itopLeftMotor            The top left motor in an x-drive model.
 itopRightMotor           The top right motor in an x-drive model.
 ibottomRightMotor        The bottom right motor in an x-drive model.
 ibottomLeftMotor         The bottom left motor in an x-drive model.
 idistanceArgs            The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the distance PID controller.
 iangleArgs               The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the angle PID controller.
 istraightScale           A scale converting your units of choice to encoder ticks, used for measuring distance.
 iturnScale               A scale converting your units of choice to encoder ticks, used for measure angle.
======================   =======================================================================================

This constructor infers a skid-steer layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerPID(std::shared_ptr<AbstractMotor> ileftSideMotor,
                             std::shared_ptr<AbstractMotor> irightSideMotor,
                             const IterativePosPIDControllerArgs &idistanceArgs,
                             const IterativePosPIDControllerArgs &iangleArgs,
                             const double istraightScale = 1, const double iturnScale = 1)

   .. tab :: Example
      .. highlight:: cpp
      ::

        using namespace okapi::literals;

        // Skid-Steer controller
        okapi::ChassisControllerPID controller(1_m, 2_m, IterativePosPIDControllerArgs(0, 0, 0), IterativePosPIDControllerArgs(0, 0, 0));

        // Could also use MotorGroups to use more motors
        okapi::ChassisControllerPID controller(okapi::MotorGroup<2>({1_m, 2_m}), okapi::MotorGroup<2>({3_m, 4_m}),
                                               IterativePosPIDControllerArgs(0, 0, 0), IterativePosPIDControllerArgs(0, 0, 0));

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 ileftSideMotor           The left side motor in a skid-steer model.
 irightSideMotor          The right side motor in a skid-steer model.
 idistanceArgs            The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the distance PID controller.
 iangleArgs               The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the angle PID controller.
 istraightScale           A scale converting your units of choice to encoder ticks, used for measuring distance.
 iturnScale               A scale converting your units of choice to encoder ticks, used for measure angle.
======================   =======================================================================================

This constructor infers an x-drive layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerPID(std::shared_ptr<AbstractMotor> itopLeftMotor,
                             std::shared_ptr<AbstractMotor> itopRightMotor,
                             std::shared_ptr<AbstractMotor> ibottomRightMotor,
                             std::shared_ptr<AbstractMotor> ibottomLeftMotor,
                             const IterativePosPIDControllerArgs &idistanceArgs,
                             const IterativePosPIDControllerArgs &iangleArgs,
                             const double istraightScale = 1, const double iturnScale = 1)

   .. tab :: Example
      .. highlight:: cpp
      ::

        using namespace okapi::literals;

        // X-Drive controller
        okapi::ChassisControllerPID controller(1_m, 2_m, 3_m, 4_m, IterativePosPIDControllerArgs(0, 0, 0), IterativePosPIDControllerArgs(0, 0, 0));

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 itopLeftMotor            The top left motor in an x-drive model.
 itopRightMotor           The top right motor in an x-drive model.
 ibottomRightMotor        The bottom right motor in an x-drive model.
 ibottomLeftMotor         The bottom left motor in an x-drive model.
 idistanceArgs            The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the distance PID controller.
 iangleArgs               The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the angle PID controller.
 istraightScale           A scale converting your units of choice to encoder ticks, used for measuring distance.
 iturnScale               A scale converting your units of choice to encoder ticks, used for measure angle.
======================   =======================================================================================

This constructor is not recommended, there are less verbose options above.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerPID(std::shared_ptr<ChassisModel> imodel,
                             const IterativePosPIDControllerArgs &idistanceArgs, const IterativePosPIDControllerArgs &iangleArgs,
                             const double istraightScale = 1, const double iturnScale = 1)

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 imodel                   The underlying `ChassisModel <../model/abstract-chassis-model.html>`_ to control.
 idistanceArgs            The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the distance PID controller.
 iangleArgs               The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the angle PID controller.
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
