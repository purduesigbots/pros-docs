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

create/createPtr
~~~~~~~~~~~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using the V5 motor's integrated control.
This method assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static
        ChassisControllerIntegrated/std::shared_ptr<ChassisControllerIntegrated>
        create/createPtr(
          Motor/MotorGroup ileftSideMotor, Motor/MotorGroup irightSideMotor,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1})
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        auto myChassis = ChassisControllerFactory::create(
          -11, 1
        );

        auto myChassis = ChassisControllerFactory::create(
          {1, 2}, {-3, -4}
        );

        auto myChassis = ChassisControllerFactory::create(
          -11, 1,
          AbstractMotor::gearset::green,
          {2.75_in, 10.5_in}
        );

        auto myChassis = ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          AbstractMotor::gearset::green,
          {2.75_in, 10.5_in}
        );

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor (also used for controller input).
 irightSideMotor   The right side motor (also used for controller input).
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================

----

create/createPtr
~~~~~~~~~~~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using the V5 motor's integrated control.
This method assumes an x-drive layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static
        ChassisControllerIntegrated/std::shared_ptr<ChassisControllerIntegrated>
        create/createPtr(
          Motor/MotorGroup itopLeftMotor, Motor/MotorGroup itopRightMotor, Motor/MotorGroup ibottomRightMotor, Motor/MotorGroup ibottomLeftMotor,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1})
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = ChassisControllerFactory::create(
          1, -2, -3, 4
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = ChassisControllerFactory::create(
          1, -2, -3, 4,
          AbstractMotor::gearset::green,
          {2.75_in, 10.5_in}
        );

        // If you have an x-drive with motor groups then
        // the last group needs to be specified explicitly
        auto myChassis = ChassisControllerFactory::create(
          {1, -2}, {-3, 4}, {-5, 6}, MotorGroup{7, -8}
        );

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor (also used for controller input).
 itopRightMotor      The top right motor (also used for controller input).
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 igearset            The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales             See `ChassisScales <chassis-scales.html>`_ docs.
=================== ===================================================================

----

ChassisControllerPID
--------------------

create/createPtr
~~~~~~~~~~~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This method assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static
        ChassisControllerPID/std::shared_ptr<ChassisControllerPID>
        create/createPtr(
          Motor/MotorGroup ileftSideMotor, Motor/MotorGroup irightSideMotor,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          (optional) const IterativePosPIDController::Gains &iturnArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1})
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = ChassisControllerFactory::create(
          -11, 1,
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = ChassisControllerFactory::create(
          -11, 1,
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          AbstractMotor::gearset::green,
          {2.75_in, 10.5_in}
        );

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = ChassisControllerFactory::create(
          -11, 1,
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = ChassisControllerFactory::create(
          -11, 1,
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          AbstractMotor::gearset::green,
          {2.75_in, 10.5_in}
        );

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor (also used for controller input).
 irightSideMotor   The right side motor (also used for controller input).
 idistanceArgs     The distance PID controller params.
 iangleArgs        The angle PID controller params (keeps the robot straight).
 iturnArgs         The turn PID controller params.
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================

----

create/createPtr
~~~~~~~~~~~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This method assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static
        ChassisControllerPID/std::shared_ptr<ChassisControllerPID>
        create/createPtr(
          Motor/MotorGroup ileftSideMotor, Motor/MotorGroup irightSideMotor,
          ADIEncoder/IntegratedEncoder ileftEnc, ADIEncoder/IntegratedEncoder irightEnc,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          (optional) const IterativePosPIDController::Gains &iturnArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1})
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          AbstractMotor::gearset::green,
          {2.75_in, 10.5_in}
        );

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          AbstractMotor::gearset::green,
          {2.75_in, 10.5_in}
        );

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 ileftEnc          The left side encoder.
 irightEnc         The right side encoder.
 idistanceArgs     The distance PID controller params.
 iangleArgs        The angle PID controller params (keeps the robot straight).
 iturnArgs         The turn PID controller params.
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================

----

create/createPtr
~~~~~~~~~~~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This method assumes an x-drive layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static
        ChassisControllerPID/std::shared_ptr<ChassisControllerPID>
        create/createPtr(
          Motor/MotorGroup itopLeftMotor, Motor/MotorGroup itopRightMotor, Motor/MotorGroup ibottomRightMotor, Motor/MotorGroup ibottomLeftMotor,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          (optional) const IterativePosPIDController::Gains &iturnArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1})
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = ChassisControllerFactory::create(
          1, -2, -3, 4,
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        // The last x-drive MotorGroup must be specified explicitly
        auto myChassis = ChassisControllerFactory::create(
          {1, -2}, {-3, 4}, {-5, 6}, MotorGroup{7, -8},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          AbstractMotor::gearset::green,
          {2.75_in, 10.5_in}
        );

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = ChassisControllerFactory::create(
          1, -2, -3, 4,
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        // The last x-drive MotorGroup must be specified explicitly
        auto myChassis = ChassisControllerFactory::create(
          {1, -2}, {-3, 4}, {-5, 6}, MotorGroup{7, -8},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          AbstractMotor::gearset::green,
          {2.75_in, 10.5_in}
        );

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor (also used for controller input).
 irightSideMotor   The right side motor (also used for controller input).
 idistanceArgs     The distance PID controller params.
 iangleArgs        The angle PID controller params (keeps the robot straight).
 iturnArgs         The turn PID controller params.
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================

----

create/createPtr
~~~~~~~~~~~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This method assumes an x-drive layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static
        ChassisControllerPID/std::shared_ptr<ChassisControllerPID>
        create/createPtr(
          Motor/MotorGroup itopLeftMotor, Motor/MotorGroup itopRightMotor, Motor/MotorGroup ibottomRightMotor, Motor/MotorGroup ibottomLeftMotor,
          ADIEncoder/IntegratedEncoder ileftEnc, ADIEncoder/IntegratedEncoder irightEnc,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          (optional) const IterativePosPIDController::Gains &iturnArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1})
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = ChassisControllerFactory::create(
          1, -2, -3, 4,
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        // The last x-drive MotorGroup must be specified explicitly
        auto myChassis = ChassisControllerFactory::create(
          {1, -2}, {-3, 4}, {-5, 6}, MotorGroup{7, -8},
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          AbstractMotor::gearset::green,
          {2.75_in, 10.5_in}
        );

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = ChassisControllerFactory::create(
          1, -2, -3, 4,
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        // The last x-drive MotorGroup must be specified explicitly
        auto myChassis = ChassisControllerFactory::create(
          {1, -2}, {-3, 4}, {-5, 6}, MotorGroup{7, -8},
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          IterativePosPIDController::Gains{0.001, 0, 0.0001},
          AbstractMotor::gearset::green,
          {2.75_in, 10.5_in}
        );

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 ileftEnc          The left side encoder.
 irightEnc         The right side encoder.
 idistanceArgs     The distance PID controller params.
 iangleArgs        The angle PID controller params (keeps the robot straight).
 iturnArgs         The turn PID controller params.
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================
