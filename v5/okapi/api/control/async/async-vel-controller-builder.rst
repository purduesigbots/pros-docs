============================
Async Vel Controller Builder
============================

.. contents:: :local:

okapi::AsyncVelControllerBuilder
================================

A `builder <https://sourcemaking.com/design_patterns/builder>`_ which creates async velocity
controllers. This is the preferred way of creating an async velocity controller. You can
read more about the builder pattern `here <https://sourcemaking.com/design_patterns/builder>`_.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelControllerBuilder()

----

Methods
-------

withMotor
~~~~~~~~~

Sets the motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelControllerBuilder &withMotor(const Motor &imotor)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Motor in port 1
        builder.withMotor(1);

============ ===============================================================
 Parameters
============ ===============================================================
 imotor       The motor.
============ ===============================================================

**Returns:** An ongoing builder.

----

withMotor
~~~~~~~~~

Sets the motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelControllerBuilder &withMotor(const MotorGroup &imotor)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Motor group in ports 1 & 2 (port 2 reversed)
        builder.withMotor({1, -2});

============ ===============================================================
 Parameters
============ ===============================================================
 imotor       The motor.
============ ===============================================================

**Returns:** An ongoing builder.

----

withMotor
~~~~~~~~~

Sets the motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelControllerBuilder &withMotor(const std::shared_ptr<AbstractMotor> &imotor)

============ ===============================================================
 Parameters
============ ===============================================================
 imotor       The motor.
============ ===============================================================

**Returns:** An ongoing builder.

----

withSensor
~~~~~~~~~~

Sets the sensor. The default sensor is the motor's integrated encoder.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelControllerBuilder &withSensor(const ADIEncoder &isensor)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // ADI encoder in ADI ports A & B
        builder.withSensor({'A', 'B'});

        // Reversed ADI encoder in ADI ports A & B
        builder.withSensor({'A', 'B', true});

============ ===============================================================
 Parameters
============ ===============================================================
 isensor      The sensor.
============ ===============================================================

**Returns:** An ongoing builder.

----

withSensor
~~~~~~~~~~

Sets the sensor. The default sensor is the motor's integrated encoder.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelControllerBuilder &withSensor(const IntegratedEncoder &isensor)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Integrated encoder in port 1
        builder.withSensor({1});

        // Reversed integrated encoder in port 1
        builder.withSensor({-1});

============ ===============================================================
 Parameters
============ ===============================================================
 isensor      The sensor.
============ ===============================================================

**Returns:** An ongoing builder.

----

withSensor
~~~~~~~~~~

Sets the sensor. The default sensor is the motor's integrated encoder.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelControllerBuilder &withSensor(const std::shared_ptr<RotarySensor> &isensor)

============ ===============================================================
 Parameters
============ ===============================================================
 isensor      The sensor.
============ ===============================================================

**Returns:** An ongoing builder.

----

withGains
~~~~~~~~~

Sets the controller gains, causing the builder to generate an ``AsyncVelPIDController``.
This does not set the integrated control's gains.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelControllerBuilder &withGains(const IterativeVelPIDController::Gains &igains)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // kP of 0.01, kD of 0, kF of 0.01, kSF of 0
        builder.withGains({0.01, 0, 0.01, 0});

============ ===============================================================
 Parameters
============ ===============================================================
 igains       The gains.
============ ===============================================================

**Returns:** An ongoing builder.

----

withVelMath
~~~~~~~~~~~

Sets the ``VelMath`` which calculates and filters velocity. This is ignored when using integrated
controller. If using a PID controller (by setting the gains), this is required.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelControllerBuilder &withVelMath(std::unique_ptr<VelMath> ivelMath)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // VelMath with the default ticks per rev for an integrated encoder
        builder.withVelMath(VelMathFactory::createPtr(imev5TPR));

============ ===============================================================
 Parameters
============ ===============================================================
 ivelMath     The ``VelMath``.
============ ===============================================================

**Returns:** An ongoing builder.

----

withDerivativeFilter
~~~~~~~~~~~~~~~~~~~~

Sets the derivative filter which filters the derivative term before it is scaled by ``kD``. The
filter is ignored when using integrated control. The default derivative filter is a
``PassthroughFilter``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelPIDController &withDerivativeFilter(std::unique_ptr<Filter> iderivativeFilter)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // 3-tap average filter
        builder.withDerivativeFilter(std::make_unique<AverageFilter<3>>());

=================== ===============================================================
 Parameters
=================== ===============================================================
 iderivativeFilter   The derivative filter.
=================== ===============================================================

**Returns:** An ongoing builder.

----

withGearset
~~~~~~~~~~~

Sets the gearset. The default gearset is derived from the motor's.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelPIDController &withGearset(const AbstractMotor::GearsetRatioPair &igearset)

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

withMaxVelocity
~~~~~~~~~~~~~~~

Sets the maximum velocity. The default maximum velocity is derived from the motor's gearset.
This parameter is ignored when using an ``AsyncVelPIDController``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelPIDController &withMaxVelocity(double imaxVelocity)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // 200 RPM max velocity
        builder.withMaxVelocity(200);

=================== ===============================================================
 Parameters
=================== ===============================================================
 imaxVelocity        The maximum velocity.
=================== ===============================================================

**Returns:** An ongoing builder.

----

withTimeUtilFactory
~~~~~~~~~~~~~~~~~~~

Sets the ``TimeUtilFactory`` used when building the controller. The default is the static
``TimeUtilFactory``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncVelPIDController &withTimeUtilFactory(const TimeUtilFactory &itimeUtilFactory)

=================== ===============================================================
 Parameters
=================== ===============================================================
 itimeUtilFactory    The ``TimeUtilFactory``.
=================== ===============================================================

**Returns:** An ongoing builder.

----

build
~~~~~

Builds the ``AsyncVelPIDController``. Throws a ``std::runtime_exception`` is no motors were set.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::shared_ptr<AsyncVelocityController<double, double>> build()

   .. tab :: Example
      .. highlight:: cpp
      ::

        auto controller = builder.build();

**Returns:** A fully built ``AsyncVelPIDController``
