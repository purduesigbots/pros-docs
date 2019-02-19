==========================
Chassis Controller Builder
==========================

.. contents:: :local:

okapi::ChassisControllerBuilder
===============================

A `builder <https://sourcemaking.com/design_patterns/builder>`_ which creates instances
of `ChassisController <abstract-chassis-controller.html>`_.
This is the preferred way of creating a `ChassisController <abstract-chassis-controller.html>`_.
You can read more about the builder pattern
`here <https://sourcemaking.com/design_patterns/builder>`_.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        explicit ChassisControllerBuilder(
          const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>()
        )

================= ===================================================================
Parameters
================= ===================================================================
 ilogger           The logger this instance will log to.
================= ===================================================================

----

Methods
-------

withMotors
~~~~~~~~~~

Sets the motors using a skid-steer layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withMotors(const Motor &ileft, const Motor &iright)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Motors on ports 1 and 2 (port 2 reversed)
        builder.withMotors(1, -2);

================= ===================================================================
Parameters
================= ===================================================================
 ileft             The left side motor.
 iright            The right side motor.
================= ===================================================================

**Returns:** An ongoing builder.

----

withMotors
~~~~~~~~~~

Sets the motors using a skid-steer layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withMotors(const MotorGroup &ileft, const MotorGroup &iright)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Motor groups on ports 1 & 2 and 3 & 4 (group on 3 & 4 reversed)
        builder.withMotors({1, 2}, {-3, -4});

================= ===================================================================
Parameters
================= ===================================================================
 ileft             The left side motor.
 iright            The right side motor.
================= ===================================================================

**Returns:** An ongoing builder.

----

withMotors
~~~~~~~~~~

Sets the motors using a skid-steer layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withMotors(
          const std::shared_ptr<AbstractMotor> &ileft,
          const std::shared_ptr<AbstractMotor> &iright
        )

================= ===================================================================
Parameters
================= ===================================================================
 ileft             The left side motor.
 iright            The right side motor.
================= ===================================================================

**Returns:** An ongoing builder.

----

withMotors
~~~~~~~~~~

Sets the motors using an x-drive layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withMotors(
          const Motor &itopLeft,
          const Motor &itopRight,
          const Motor &ibottomRight,
          const Motor &ibottomLeft
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Motors on ports 1, 2, 3, and 4 (ports 2 and 3 reversed)
        builder.withMotors(1, -2, -3, 4);

================= ===================================================================
Parameters
================= ===================================================================
 itopLeft          The top left motor.
 itopRight         The top right motor.
 ibottomRight      The bottom right motor.
 ibottomLeft       The bottom left motor.
================= ===================================================================

**Returns:** An ongoing builder.

----

withMotors
~~~~~~~~~~

Sets the motors using an x-drive layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withMotors(
          const MotorGroup &itopLeft,
          const MotorGroup &itopRight,
          const MotorGroup &ibottomRight,
          const MotorGroup &ibottomLeft
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Motor groups on ports 1 & 2, 3 & 4, 5 & 6, and 7 & 8
        // (groups on 3 & 4 and 5 & 6 reversed)
        builder.withMotors({1, 2}, {-3, -4}, {-5, -6}, {7, 8});

================= ===================================================================
Parameters
================= ===================================================================
 itopLeft          The top left motor.
 itopRight         The top right motor.
 ibottomRight      The bottom right motor.
 ibottomLeft       The bottom left motor.
================= ===================================================================

**Returns:** An ongoing builder.

----

withMotors
~~~~~~~~~~

Sets the motors using an x-drive layout.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withMotors(
          const std::shared_ptr<AbstractMotor> &itopLeft,
          const std::shared_ptr<AbstractMotor> &itopRight,
          const std::shared_ptr<AbstractMotor> &ibottomRight,
          const std::shared_ptr<AbstractMotor> &ibottomLeft
        )

================= ===================================================================
Parameters
================= ===================================================================
 itopLeft          The top left motor.
 itopRight         The top right motor.
 ibottomRight      The bottom right motor.
 ibottomLeft       The bottom left motor.
================= ===================================================================

**Returns:** An ongoing builder.

----

withSensors
~~~~~~~~~~~

Sets the sensors. The default sensors are the motor's integrated encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withSensors(const ADIEncoder &ileft, const ADIEncoder &iright)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // ADI Encoders on ADI ports A & B and C & D (encoder on C & D reversed)
        builder.withSensors(
          {'A', 'B'},
          {'C', 'D', true}
        )

================= ===================================================================
Parameters
================= ===================================================================
 ileft             The left side sensor.
 iright            The right side sensor.
================= ===================================================================

**Returns:** An ongoing builder.

----

withSensors
~~~~~~~~~~~

Sets the sensors. The default sensors are the motor's integrated encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withSensors(
          const ADIEncoder &ileft,
          const ADIEncoder &iright,
          const ADIEncoder &imiddle
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        // ADI Encoders on ADI ports A & B and C & D (encoder on C & D reversed)
        // and on E & F
        builder.withSensors(
          {'A', 'B'},
          {'C', 'D', true},
          {'E', 'F'}
        )

================= ===================================================================
Parameters
================= ===================================================================
 ileft             The left side sensor.
 iright            The right side sensor.
 imiddle           The middle sensor.
================= ===================================================================

**Returns:** An ongoing builder.

----

withSensors
~~~~~~~~~~~

Sets the sensors. The default sensors are the motor's integrated encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withSensors(
          const IntegratedEncoder &ileft,
          const IntegratedEncoder &iright
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Integrated encoders on ports 1 and 2 (port 2 reversed)
        builder.withSensors({1}, {-2})

================= ===================================================================
Parameters
================= ===================================================================
 ileft             The left side sensor.
 iright            The right side sensor.
================= ===================================================================

**Returns:** An ongoing builder.

----

withSensors
~~~~~~~~~~~

Sets the sensors. The default sensors are the motor's integrated encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withSensors(
          const IntegratedEncoder &ileft,
          const IntegratedEncoder &iright,
          const ADIEncoder &imiddle
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Integrated encoders on ports 1 and 2 (port 2 reversed)
        // and an ADI encoder on ADI ports A & B
        builder.withSensors({1}, {-2}, {'A', 'B'})

================= ===================================================================
Parameters
================= ===================================================================
 ileft             The left side sensor.
 iright            The right side sensor.
 imiddle           The middle sensor.
================= ===================================================================

**Returns:** An ongoing builder.

----

withSensors
~~~~~~~~~~~

Sets the sensors. The default sensors are the motor's integrated encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withSensors(
          const std::shared_ptr<ContinuousRotarySensor> &ileft,
          const std::shared_ptr<ContinuousRotarySensor> &iright
        )

================= ===================================================================
Parameters
================= ===================================================================
 ileft             The left side sensor.
 iright            The right side sensor.
================= ===================================================================

**Returns:** An ongoing builder.

----

withSensors
~~~~~~~~~~~

Sets the sensors. The default sensors are the motor's integrated encoders.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withSensors(
          const std::shared_ptr<ContinuousRotarySensor> &ileft,
          const std::shared_ptr<ContinuousRotarySensor> &iright,
          const std::shared_ptr<ContinuousRotarySensor> &imiddle
        )

================= ===================================================================
Parameters
================= ===================================================================
 ileft             The left side sensor.
 iright            The right side sensor.
 imiddle           The middle sensor.
================= ===================================================================

**Returns:** An ongoing builder.

----

withGains
~~~~~~~~~

Sets the PID controller gains, causing the builder to generate a ChassisControllerPID. Uses the
turn controller's gains for the angle controller's gains.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withGains(
          const IterativePosPIDController::Gains &idistanceGains,
          const IterativePosPIDController::Gains &iturnGains
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        builder.withGains(
          {0, 0, 0},
          {0, 0, 0}
        )

================= ===================================================================
Parameters
================= ===================================================================
 idistanceGains    The distance controller's gains.
 iturnGains        The turn controller's gains.
================= ===================================================================

**Returns:** An ongoing builder.

----

withGains
~~~~~~~~~

Sets the PID controller gains, causing the builder to generate a ChassisControllerPID.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withGains(
          const IterativePosPIDController::Gains &idistanceGains,
          const IterativePosPIDController::Gains &iturnGains,
          const IterativePosPIDController::Gains &iangleGains
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        builder.withGains(
          {0, 0, 0},
          {0, 0, 0},
          {0, 0, 0}
        )

================= ===================================================================
Parameters
================= ===================================================================
 idistanceGains    The distance controller's gains.
 iturnGains        The turn controller's gains.
 iangleGains       The angle controller's gains.
================= ===================================================================

**Returns:** An ongoing builder.

----

withDerivativeFilters
~~~~~~~~~~~~~~~~~~~~~

Sets the derivative filters. Uses a ``PassthroughFilter`` by default.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withDerivativeFilters(
          std::unique_ptr<Filter> idistanceFilter,
          std::unique_ptr<Filter> iturnFilter = std::make_unique<PassthroughFilter>(),
          std::unique_ptr<Filter> iangleFilter = std::make_unique<PassthroughFilter>()
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        builder.withDerivativeFilters(
          std::make_unique<PassthroughFilter>()
        )

        builder.withDerivativeFilters(
          std::make_unique<PassthroughFilter>(),
          std::make_unique<PassthroughFilter>(),
          std::make_unique<PassthroughFilter>()
        )

================= ===================================================================
Parameters
================= ===================================================================
 idistanceFilter   The distance controller's filter.
 iturnFilter       The turn controller's filter.
 iangleFilter      The angle controller's filter.
================= ===================================================================

**Returns:** An ongoing builder.

----

withTimeUtil
~~~~~~~~~~~~

Sets the ``TimeUtil`` for each controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withTimeUtil(const TimeUtil &itimeUtil)

   .. tab :: Example
      .. highlight:: cpp
      ::

        builder.withTimeUtil(TimeUtilFactory::withSettledUtilParams(50, 5, 250_ms))

================== ===================================================================
Parameters
================== ===================================================================
 itimeUtil          The TimeUtil.
================== ===================================================================

**Returns:** An ongoing builder.

----

withGearset
~~~~~~~~~~~

Sets the gearset. The default gearset is derived from the motor's.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withGearset(const AbstractMotor::GearsetRatioPair &igearset)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // External gear ratio of 2
        builder.withGearset(AbstractMotor::gearset::red * 2)

================= ===================================================================
Parameters
================= ===================================================================
 igearset          The gearset.
================= ===================================================================

**Returns:** An ongoing builder.

----

withDimensions
~~~~~~~~~~~~~~

Sets the chassis dimensions.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withDimensions(const ChassisScales &iscales)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // 4 inch wheel diameter, 11 inch wheelbase width
        builder.withDimensions({4_in, 11_in})

================= ===================================================================
Parameters
================= ===================================================================
 iscales           The dimensions.
================= ===================================================================

**Returns:** An ongoing builder.

----

withMaxVelocity
~~~~~~~~~~~~~~~

Sets the max velocity. Overrides the max velocity of the gearset.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withMaxVelocity(double imaxVelocity)

   .. tab :: Example
      .. highlight:: cpp
      ::

        builder.withMaxVelocity(400)

================= ===================================================================
Parameters
================= ===================================================================
 imaxVelocity      The max velocity.
================= ===================================================================

**Returns:** An ongoing builder.

----

withMaxVoltage
~~~~~~~~~~~~~~

Sets the max voltage.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withMaxVoltage(double imaxVoltage)

   .. tab :: Example
      .. highlight:: cpp
      ::

        builder.withMaxVoltage(12000)

================= ===================================================================
Parameters
================= ===================================================================
 imaxVoltage       The max voltage.
================= ===================================================================

**Returns:** An ongoing builder.

----

withLogger
~~~~~~~~~~

Sets the logger.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerBuilder &withLogger(const std::shared_ptr<Logger> &ilogger)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Output to standard out (shows in the PROS terminal)
        builder.withLogger(std::make_shared<Logger>(
          TimeUtilFactory::create().getTimer(),
          "/ser/sout",
          Logger::LogLevel::debug
        ))

        // Output to a file on an SD card
        builder.withLogger(std::make_shared<Logger>(
          TimeUtilFactory::create().getTimer(),
          "/usd/test_logger",
          Logger::LogLevel::debug
        ))

================= ===================================================================
Parameters
================= ===================================================================
 ilogger           The logger.
================= ===================================================================

**Returns:** An ongoing builder.

----

build
~~~~~

Builds the `ChassisController <abstract-chassis-controller.html>`_. Throws a
``std::runtime_exception`` if no motors were set.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::shared_ptr<ChassisController> build()

   .. tab :: Example
      .. highlight:: cpp
      ::

        builder.build();

**Returns:** A fully built `ChassisController <abstract-chassis-controller.html>`_.
