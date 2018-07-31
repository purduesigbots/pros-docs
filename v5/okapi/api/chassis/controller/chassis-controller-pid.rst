======================
Chassis Controller PID
======================

.. contents:: :local:

okapi::ChassisControllerPID
===========================

A `ChassisController <abstract-chassis-controller.html>`_ using PID control. Does not use the V5
motor's integrated control. The motors passed in will be put into degree units. If you are trying
to make an instance of this class, you should most likely be using the
`ChassisControllerFactory <chassis-controller-factory.html>`_ instead of a constructor from this
class. Throws a ``std::invalid_argument`` exception if the gear ratio is zero.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerPID(const TimeUtil &itimeUtil,
                             std::unique_ptr<AbstractRate> irate,
                             std::unique_ptr<ChassisModel> imodel,
                             const IterativePosPIDControllerArgs &idistanceArgs, const IterativePosPIDControllerArgs &iangleArgs,
                             AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
                             const ChassisScales &iscales = ChassisScales({1, 1}))

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 itimeUtil                See ``TimeUtil`` docs.
 irate                    An ``AbstractRate``.
 imodel                   The underlying `ChassisModel <../model/abstract-chassis-model.html>`_ to control.
 idistanceArgs            The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the distance PID controller.
 iangleArgs               The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the angle PID controller.
 igearset                 The motor's internal planetary gearset and external gear ratio.
 iscales                  See `ChassisScales <chassis-scales.html>`_ docs.
======================   =======================================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerPID(const TimeUtil &itimeUtil,
                             std::unique_ptr<AbstractRate> irate,
                             std::unique_ptr<ChassisModel> imodel,
                             std::unique_ptr<IterativePosPIDController> idistanceController,
                             std::unique_ptr<IterativePosPIDController> iangleController,
                             AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
                             const ChassisScales &iscales = ChassisScales({1, 1}))

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 itimeUtil                See ``TimeUtil`` docs.
 irate                    An ``AbstractRate``.
 imodel                   The underlying `ChassisModel <../model/abstract-chassis-model.html>`_ to control.
 idistanceController      The `IterativePosPIDController <../../control/iterative/iterative-pos-pid-controller.html>`_ for distance control.
 iangleController         The `IterativePosPIDController <../../control/iterative/iterative-pos-pid-controller.html>`_ for angle control.
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
