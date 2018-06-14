=============================
Chassis Controller Integrated
=============================

.. contents:: :local:

okapi::ChassisControllerIntegrated
==================================

A `ChassisController <abstract-chassis-controller.html>`_ using the V5 motor's integrated control.
The motors passed in will be put into degree units.

Constructor(s)
--------------

This constructor infers a skid-steer layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerIntegrated(Motor ileftSideMotor, Motor irightSideMotor,
                                    const pros::c::motor_gearset_e_t igearset = pros::c::E_MOTOR_GEARSET_36,
                                    const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        okapi::ChassisControllerIntegrated controller(1, -2);

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 ileftSideMotor           The left side motor in a skid-steer model.
 irightSideMotor          The right side motor in a skid-steer model.
 igearset                 The motor's internal planetary gearset.
 iscales                  See `ChassisScales <chassis-scales.html>`_ docs.
======================   =======================================================================================

This constructor infers a skid-steer layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerIntegrated(MotorGroup ileftSideMotor, MotorGroup irightSideMotor,
                                    const pros::c::motor_gearset_e_t igearset = pros::c::E_MOTOR_GEARSET_36,
                                    const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        okapi::ChassisControllerIntegrated controller(okapi::MotorGroup({1, 2}),
                                                      okapi::MotorGroup({-3, -4}));

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 ileftSideMotor           The left side motor in a skid-steer model.
 irightSideMotor          The right side motor in a skid-steer model.
 igearset                 The motor's internal planetary gearset.
 iscales                  See `ChassisScales <chassis-scales.html>`_ docs.
======================   =======================================================================================

This constructor infers an x-drive layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerIntegrated(Motor itopLeftMotor,
                                    Motor itopRightMotor,
                                    Motor ibottomRightMotor,
                                    Motor ibottomLeftMotor,
                                    const pros::c::motor_gearset_e_t igearset = pros::c::E_MOTOR_GEARSET_36,
                                    const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        okapi::ChassisControllerIntegrated controller(1, -2, -3, 4);

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 itopLeftMotor            The top left motor in an x-drive model.
 itopRightMotor           The top right motor in an x-drive model.
 ibottomRightMotor        The bottom right motor in an x-drive model.
 ibottomLeftMotor         The bottom left motor in an x-drive model.
 igearset                 The motor's internal planetary gearset.
 iscales                  See `ChassisScales <chassis-scales.html>`_ docs.
======================   =======================================================================================

This constructor infers a skid-steer layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerIntegrated(std::shared_ptr<AbstractMotor> ileftSideMotor,
                                    std::shared_ptr<AbstractMotor> irightSideMotor,
                                    const pros::c::motor_gearset_e_t igearset = pros::c::E_MOTOR_GEARSET_36,
                                    const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        okapi::ChassisControllerIntegrated controller(std::make_shared<okapi::MotorGroup>({1, 2}),
                                                      std::make_shared<okapi::MotorGroup>({-3, -4}));

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 ileftSideMotor           The left side motor in a skid-steer model.
 irightSideMotor          The right side motor in a skid-steer model.
 igearset                 The motor's internal planetary gearset.
 iscales                  See `ChassisScales <chassis-scales.html>`_ docs.
======================   =======================================================================================

This constructor infers an x-drive layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerIntegrated(std::shared_ptr<AbstractMotor> itopLeftMotor,
                                    std::shared_ptr<AbstractMotor> itopRightMotor,
                                    std::shared_ptr<AbstractMotor> ibottomRightMotor,
                                    std::shared_ptr<AbstractMotor> ibottomLeftMotor,
                                    const pros::c::motor_gearset_e_t igearset = pros::c::E_MOTOR_GEARSET_36,
                                    const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        // X-Drive controller
        okapi::ChassisControllerIntegrated controller(1, -2, -3, 4);

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 itopLeftMotor            The top left motor in an x-drive model.
 itopRightMotor           The top right motor in an x-drive model.
 ibottomRightMotor        The bottom right motor in an x-drive model.
 ibottomLeftMotor         The bottom left motor in an x-drive model.
 igearset                 The motor's internal planetary gearset.
 iscales                  See `ChassisScales <chassis-scales.html>`_ docs.
======================   =======================================================================================

This constructor is not recommended, there are less verbose options above.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerIntegrated(std::shared_ptr<ChassisModel> imodel,
                                    const AsyncPosIntegratedControllerArgs &ileftControllerArgs,
                                    const AsyncPosIntegratedControllerArgs &irightControllerArgs,
                                    const pros::c::motor_gearset_e_t igearset = pros::c::E_MOTOR_GEARSET_36,
                                    const ChassisScales &iscales = ChassisScales({1, 1}))

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 imodel                   The underlying `ChassisModel <../model/abstract-chassis-model.html>`_ to control.
 ileftControllerArgs      The `AsyncPosIntegratedControllerArgs <../../control/async/async-pos-integrated-controller.html>`_ for the left side PID controller.
 irightControllerArgs     The `AsyncPosIntegratedControllerArgs <../../control/async/async-pos-integrated-controller.html>`_ for the right side PID controller.
 igearset                 The motor's internal planetary gearset.
 iscales                  See `ChassisScales <chassis-scales.html>`_ docs.
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

        virtual void moveDistance(const QLength itarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 itarget         The distance to travel.
=============== ===================================================================

----

moveDistance
~~~~~~~~~~~~

Drives the robot straight for a distance with units of motor degrees (using closed-loop control).
Blocks while the robot is driving.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void moveDistance(const int itarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 itarget         The distance to travel in motor degrees.
=============== ===================================================================

----

turnAngle
~~~~~~~~~

Turns the robot clockwise in place (using closed-loop control). Blocks while the robot is turning.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void turnAngle(const QAngle idegTarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn.
=============== ===================================================================

----

turnAngle
~~~~~~~~~

Turns the robot clockwise in place with units of motor degrees (using closed-loop control). Blocks
while the robot is turning.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void turnAngle(const float idegTarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn in motor degrees.
=============== ===================================================================
