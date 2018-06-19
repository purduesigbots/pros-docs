==========================
Chassis Controller Factory
==========================

.. contents:: :local:

okapi::ChassisControllerFactory
===============================

A `factory <https://sourcemaking.com/design_patterns/factory_method>`_ which creates instances of
`ChassisController <abstract-chassis-controller.html>`_. This is the preferred way of creating a
`ChassisController <abstract-chassis-controller.html>`_.

You can read more about the factory pattern
`here <https://sourcemaking.com/design_patterns/factory_method>`_.

ChassisControllerIntegrated
---------------------------

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using the V5 motor's integrated control.
This constructor assumes a skid steer layout. Puts the motors into degree units.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerIntegrated create(
          Motor ileftSideMotor, Motor irightSideMotor,
          const AbstractMotor::motorGearset igearset = AbstractMotor::motorGearset::E_MOTOR_GEARSET_36,
          const ChassisScales &iscales = ChassisScales({1, 1}));

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          -11, 1
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          -11, 1,
          AbstractMotor::motorGearset::E_MOTOR_GEARSET_18,
          okapi::ChassisScales({2.75_in, 10.5_in})
        );

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using the V5 motor's integrated control.
This constructor assumes a skid steer layout. Puts the motors into degree units.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerIntegrated create(
          MotorGroup ileftSideMotor, MotorGroup irightSideMotor,
          const AbstractMotor::motorGearset igearset = AbstractMotor::motorGearset::E_MOTOR_GEARSET_36,
          const ChassisScales &iscales = ChassisScales({1, 1}));

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          {1, 2}, {-3, -4}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          AbstractMotor::motorGearset::E_MOTOR_GEARSET_18,
          okapi::ChassisScales({2.75_in, 10.5_in})
        );

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using the V5 motor's integrated control.
This constructor assumes a skid steer layout. Puts the motors into degree units.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerIntegrated create(
          Motor itopLeftMotor, Motor itopRightMotor, Motor ibottomRightMotor, Motor ibottomLeftMotor,
          const AbstractMotor::motorGearset igearset = AbstractMotor::motorGearset::E_MOTOR_GEARSET_36,
          const ChassisScales &iscales = ChassisScales({1, 1}));

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          1, -2, -3, 4
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          1, -2, -3, 4,
          AbstractMotor::motorGearset::E_MOTOR_GEARSET_18,
          okapi::ChassisScales({2.75_in, 10.5_in})
        );

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor.
 itopRightMotor      The top right motor.
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 igearset            The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ used in all the drive motors.
 iscales             See `ChassisScales <chassis-scales.html>`_ docs.
=================== ===================================================================

ChassisControllerPID
--------------------

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using the V5 motor's integrated control.
This constructor assumes a skid steer layout. Puts the motors into degree units.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          Motor ileftSideMotor, Motor irightSideMotor,
          const IterativePosPIDControllerArgs &idistanceArgs,
          const IterativePosPIDControllerArgs &iangleArgs,
          const AbstractMotor::motorGearset igearset = AbstractMotor::motorGearset::E_MOTOR_GEARSET_36,
          const ChassisScales &iscales = ChassisScales({1, 1}));

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          -11, 1,
          okapi::IterativePosPIDControllerArgs(0.5, 0, 0),
          okapi::IterativePosPIDControllerArgs(0.1, 0.05, 0)
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          -11, 1,
          okapi::IterativePosPIDControllerArgs(0.5, 0, 0),
          okapi::IterativePosPIDControllerArgs(0.1, 0.05, 0),
          AbstractMotor::motorGearset::E_MOTOR_GEARSET_18,
          okapi::ChassisScales({2.75_in, 10.5_in})
        );

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 idistanceArgs     The distance PID controller params.
 iangleArgs        The angle PID controller params (keeps the robot straight).
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using the V5 motor's integrated control.
This constructor assumes a skid steer layout. Puts the motors into degree units.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          MotorGroup ileftSideMotor, MotorGroup irightSideMotor,
          const IterativePosPIDControllerArgs &idistanceArgs,
          const IterativePosPIDControllerArgs &iangleArgs,
          const AbstractMotor::motorGearset igearset = AbstractMotor::motorGearset::E_MOTOR_GEARSET_36,
          const ChassisScales &iscales = ChassisScales({1, 1}));

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          okapi::IterativePosPIDControllerArgs(0.5, 0, 0),
          okapi::IterativePosPIDControllerArgs(0.1, 0.05, 0)
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          okapi::IterativePosPIDControllerArgs(0.5, 0, 0),
          okapi::IterativePosPIDControllerArgs(0.1, 0.05, 0),
          AbstractMotor::motorGearset::E_MOTOR_GEARSET_18,
          okapi::ChassisScales({2.75_in, 10.5_in})
        );

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 idistanceArgs     The distance PID controller params.
 iangleArgs        The angle PID controller params (keeps the robot straight).
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using the V5 motor's integrated control.
This constructor assumes a skid steer layout. Puts the motors into degree units.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          Motor itopLeftMotor, Motor itopRightMotor, Motor ibottomRightMotor, Motor ibottomLeftMotor,
          const IterativePosPIDControllerArgs &idistanceArgs,
          const IterativePosPIDControllerArgs &iangleArgs,
          const AbstractMotor::motorGearset igearset = AbstractMotor::motorGearset::E_MOTOR_GEARSET_36,
          const ChassisScales &iscales = ChassisScales({1, 1}));

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          1, -2, -3, 4,
          okapi::IterativePosPIDControllerArgs(0.5, 0, 0),
          okapi::IterativePosPIDControllerArgs(0.1, 0.05, 0)
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          1, -2, -3, 4,
          okapi::IterativePosPIDControllerArgs(0.5, 0, 0),
          okapi::IterativePosPIDControllerArgs(0.1, 0.05, 0),
          AbstractMotor::motorGearset::E_MOTOR_GEARSET_18,
          okapi::ChassisScales({2.75_in, 10.5_in})
        );

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor.
 itopRightMotor      The top right motor.
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 idistanceArgs       The distance PID controller params.
 iangleArgs          The angle PID controller params (keeps the robot straight).
 igearset            The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ used in all the drive motors.
 iscales             See `ChassisScales <chassis-scales.html>`_ docs.
=================== ===================================================================
