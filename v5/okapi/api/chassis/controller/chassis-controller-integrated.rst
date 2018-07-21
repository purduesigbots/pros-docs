=============================
Chassis Controller Integrated
=============================

.. contents:: :local:

okapi::ChassisControllerIntegrated
==================================

A `ChassisController <abstract-chassis-controller.html>`_ using the V5 motor's integrated control.
The motors passed in will be put into degree units. If you are trying to make an instance of this
class, you should most likely be using the
`ChassisControllerFactory <chassis-controller-factory.html>`_ instead of a constructor from this
class. Throws a ``std::invalid_argument`` exception if the gear ratio is zero.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerIntegrated(const TimeUtil &itimeUtil,
                                    std::unique_ptr<ChassisModel> imodel,
                                    const AsyncPosIntegratedControllerArgs &ileftControllerArgs,
                                    const AsyncPosIntegratedControllerArgs &irightControllerArgs,
                                    AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
                                    const ChassisScales &iscales = ChassisScales({1, 1}))

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 itimeUtil                See ``TimeUtil`` docs.
 imodel                   The underlying `ChassisModel <../model/abstract-chassis-model.html>`_ to control.
 ileftControllerArgs      The `AsyncPosIntegratedControllerArgs <../../control/async/async-pos-integrated-controller.html>`_ for the left side PID controller.
 irightControllerArgs     The `AsyncPosIntegratedControllerArgs <../../control/async/async-pos-integrated-controller.html>`_ for the right side PID controller.
 igearset                 The motor's internal planetary gearset and external gear ratio.
 iscales                  See `ChassisScales <chassis-scales.html>`_ docs.
======================   =======================================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerIntegrated(const TimeUtil &itimeUtil,
                                    std::unique_ptr<ChassisModel> imodel,
                                    std::unique_ptr<AsyncPosIntegratedController> ileftController,
                                    std::unique_ptr<AsyncPosIntegratedController> irightController,
                                    AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
                                    const ChassisScales &iscales = ChassisScales({1, 1}))

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 itimeUtil                See ``TimeUtil`` docs.
 imodel                   The underlying `ChassisModel <../model/abstract-chassis-model.html>`_ to control.
 ileftController          The `AsyncPosIntegratedController <../../control/async/async-pos-integrated-controller.html>`_ for the left side.
 irightController         The `AsyncPosIntegratedController <../../control/async/async-pos-integrated-controller.html>`_ for the right side.
 igearset                 The motor's internal planetary gearset and external gear ratio.
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

        void moveDistance(QLength itarget) override

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

        void moveDistance(int itarget) override

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

        void turnAngle(QAngle idegTarget) override

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

        void turnAngle(float idegTarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn in motor degrees.
=============== ===================================================================
