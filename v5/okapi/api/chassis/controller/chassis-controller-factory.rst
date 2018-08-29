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
This constructor assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerIntegrated create(
          Motor ileftSideMotor, Motor irightSideMotor,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

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
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
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

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using the V5 motor's integrated control.
This constructor assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerIntegrated create(
          MotorGroup ileftSideMotor, MotorGroup irightSideMotor,
           AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

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
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
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

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using the V5 motor's integrated control.
This constructor assumes an x-drive layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerIntegrated create(
          Motor itopLeftMotor, Motor itopRightMotor, Motor ibottomRightMotor, Motor ibottomLeftMotor,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

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
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
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

ChassisControllerPID
--------------------

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          Motor ileftSideMotor, Motor irightSideMotor,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          -11, 1,
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          -11, 1,
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
        );

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor (also used for controller input).
 irightSideMotor   The right side motor (also used for controller input).
 idistanceArgs     The distance PID controller params.
 iangleArgs        The angle PID controller params (keeps the robot straight).
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================

----

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          Motor ileftSideMotor, Motor irightSideMotor,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          const IterativePosPIDController::Gains &iturnArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          -11, 1,
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          okapi::IterativePosPIDController::Gains{0.2, 0, 0}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          -11, 1,
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          okapi::IterativePosPIDController::Gains{0.2, 0, 0},
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
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

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          MotorGroup ileftSideMotor, MotorGroup irightSideMotor,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
        );

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor (also used for controller input).
 irightSideMotor   The right side motor (also used for controller input).
 idistanceArgs     The distance PID controller params.
 iangleArgs        The angle PID controller params (keeps the robot straight).
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================

----

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          MotorGroup ileftSideMotor, MotorGroup irightSideMotor,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          const IterativePosPIDController::Gains &iturnArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          okapi::IterativePosPIDController::Gains{0.2, 0, 0}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          okapi::IterativePosPIDController::Gains{0.2, 0, 0},
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
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

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          MotorGroup ileftSideMotor, MotorGroup irightSideMotor,
          ADIEncoder ileftEnc, ADIEncoder irightEnc,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
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
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================

----

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          MotorGroup ileftSideMotor, MotorGroup irightSideMotor,
          ADIEncoder ileftEnc, ADIEncoder irightEnc,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          const IterativePosPIDController::Gains &iturnArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          okapi::IterativePosPIDController::Gains{0.2, 0, 0}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          {1, 2}, {-3, -4},
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          okapi::IterativePosPIDController::Gains{0.2, 0, 0},
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
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

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          std::shared_ptr<AbstractMotor> ileftSideMotor,
          std::shared_ptr<AbstractMotor> irightSideMotor,
          std::shared_ptr<ContinuousRotarySensor> ileftEnc,
          std::shared_ptr<ContinuousRotarySensor> irightEnc,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 ileftEnc          The left side encoder.
 irightEnc         The right side encoder.
 idistanceArgs     The distance PID controller params.
 iangleArgs        The angle PID controller params (keeps the robot straight).
 igearset          The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales           See `ChassisScales <chassis-scales.html>`_ docs.
================= ===================================================================

----

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes a skid steer layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          std::shared_ptr<AbstractMotor> ileftSideMotor,
          std::shared_ptr<AbstractMotor> irightSideMotor,
          std::shared_ptr<ContinuousRotarySensor> ileftEnc,
          std::shared_ptr<ContinuousRotarySensor> irightEnc,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          const IterativePosPIDController::Gains &iturnArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

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

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes an x-drive layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          Motor itopLeftMotor, Motor itopRightMotor, Motor ibottomRightMotor, Motor ibottomLeftMotor,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          1, -2, -3, 4,
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          1, -2, -3, 4,
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
        );

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor (also used for controller input).
 itopRightMotor      The top right motor (also used for controller input).
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 idistanceArgs       The distance PID controller params.
 iangleArgs          The angle PID controller params (keeps the robot straight).
 igearset            The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales             See `ChassisScales <chassis-scales.html>`_ docs.
=================== ===================================================================

----

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes an x-drive layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          Motor itopLeftMotor, Motor itopRightMotor, Motor ibottomRightMotor, Motor ibottomLeftMotor,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          const IterativePosPIDController::Gains &iturnArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          1, -2, -3, 4,
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          okapi::IterativePosPIDController::Gains{0.2, 0, 0}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          1, -2, -3, 4,
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          okapi::IterativePosPIDController::Gains{0.2, 0, 0},
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
        );

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor (also used for controller input).
 itopRightMotor      The top right motor (also used for controller input).
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 idistanceArgs       The distance PID controller params.
 iangleArgs          The angle PID controller params (keeps the robot straight).
 iturnArgs           The turn PID controller params.
 igearset            The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales             See `ChassisScales <chassis-scales.html>`_ docs.
=================== ===================================================================

----

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes an x-drive layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          Motor itopLeftMotor, Motor itopRightMotor, Motor ibottomRightMotor, Motor ibottomLeftMotor,
          ADIEncoder itopLeftEnc, ADIEncoder itopRightEnc,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          1, -2, -3, 4,
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          1, -2, -3, 4,
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
        );

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor.
 itopRightMotor      The top right motor.
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 itopLeftEnc         The top left encoder.
 itopRightEnc        The top right encoder.
 idistanceArgs       The distance PID controller params.
 iangleArgs          The angle PID controller params (keeps the robot straight).
 igearset            The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales             See `ChassisScales <chassis-scales.html>`_ docs.
=================== ===================================================================

----

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes an x-drive layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          Motor itopLeftMotor, Motor itopRightMotor, Motor ibottomRightMotor, Motor ibottomLeftMotor,
          ADIEncoder itopLeftEnc, ADIEncoder itopRightEnc,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          const IterativePosPIDController::Gains &iturnArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

   .. tab :: Example
      .. highlight:: cpp
      ::

        // You can use the default gearset and scales if you have a very simple robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          1, -2, -3, 4,
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          okapi::IterativePosPIDController::Gains{0.2, 0, 0}
        );

        // Otherwise, you should specify the gearset and scales for your robot
        auto myChassis = okapi::ChassisControllerFactory::create(
          1, -2, -3, 4,
          ADIEncoder('A', 'B', true), ADIEncoder('C', 'D'),
          okapi::IterativePosPIDController::Gains{0.5, 0, 0},
          okapi::IterativePosPIDController::Gains{0.1, 0.05, 0},
          okapi::IterativePosPIDController::Gains{0.2, 0, 0},
          AbstractMotor::gearset::green,
          okapi::ChassisScales({2.75_in, 10.5_in})
        );

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor.
 itopRightMotor      The top right motor.
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 itopLeftEnc         The top left encoder.
 itopRightEnc        The top right encoder.
 idistanceArgs       The distance PID controller params.
 iangleArgs          The angle PID controller params (keeps the robot straight).
 iturnArgs           The turn PID controller params.
 igearset            The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales             See `ChassisScales <chassis-scales.html>`_ docs.
=================== ===================================================================

----

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes a x-drive layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          std::shared_ptr<AbstractMotor> itopLeftMotor,
          std::shared_ptr<AbstractMotor> itopRightMotor,
          std::shared_ptr<AbstractMotor> ibottomRightMotor,
          std::shared_ptr<AbstractMotor> ibottomLeftMotor,
          std::shared_ptr<ContinuousRotarySensor> itopLeftEnc,
          std::shared_ptr<ContinuousRotarySensor> itopRightEnc,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor.
 itopRightMotor      The top right motor.
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 itopLeftEnc         The top left encoder.
 itopRightEnc        The top right encoder.
 idistanceArgs       The distance PID controller params.
 iangleArgs          The angle PID controller params (keeps the robot straight).
 igearset            The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales             See `ChassisScales <chassis-scales.html>`_ docs.
=================== ===================================================================

----

create
~~~~~~

`ChassisController <abstract-chassis-controller.html>`_ using PID control.
This constructor assumes a x-drive layout. Puts the motors into degree units. Throws a
``std::invalid_argument`` exception if the gear ratio is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ChassisControllerPID create(
          std::shared_ptr<AbstractMotor> itopLeftMotor,
          std::shared_ptr<AbstractMotor> itopRightMotor,
          std::shared_ptr<AbstractMotor> ibottomRightMotor,
          std::shared_ptr<AbstractMotor> ibottomLeftMotor,
          std::shared_ptr<ContinuousRotarySensor> itopLeftEnc,
          std::shared_ptr<ContinuousRotarySensor> itopRightEnc,
          const IterativePosPIDController::Gains &idistanceArgs,
          const IterativePosPIDController::Gains &iangleArgs,
          const IterativePosPIDController::Gains &iturnArgs,
          AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
          const ChassisScales &iscales = ChassisScales({1, 1}))

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor.
 itopRightMotor      The top right motor.
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 itopLeftEnc         The top left encoder.
 itopRightEnc        The top right encoder.
 idistanceArgs       The distance PID controller params.
 iangleArgs          The angle PID controller params (keeps the robot straight).
 iturnArgs           The turn PID controller params.
 igearset            The internal `gearset <../../device/motor/abstract-abstract-motor.html>`_ and external gear ratio used in all the drive motors.
 iscales             See `ChassisScales <chassis-scales.html>`_ docs.
=================== ===================================================================
