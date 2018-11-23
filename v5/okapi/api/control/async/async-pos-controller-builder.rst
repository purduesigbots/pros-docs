============================
Async Pos Controller Builder
============================

.. contents:: :local:

okapi::AsyncPosControllerBuilder
================================

A `builder <https://sourcemaking.com/design_patterns/builder>`_ which creates async position
controllers. This is the preferred way of creating an async position controller. You can
read more about the builder pattern `here <https://sourcemaking.com/design_patterns/builder>`_.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosControllerBuilder()

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

        AsyncPosControllerBuilder &withMotor(const Motor &imotor)

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

        AsyncPosControllerBuilder &withMotor(const MotorGroup &imotor)

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

        AsyncPosControllerBuilder &withMotor(const std::shared_ptr<AbstractMotor> &imotor)

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

        AsyncPosControllerBuilder &withSensor(const ADIEncoder &isensor)

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

        AsyncPosControllerBuilder &withSensor(const IntegratedEncoder &isensor)

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

        AsyncPosControllerBuilder &withSensor(const std::shared_ptr<RotarySensor> &isensor)

============ ===============================================================
 Parameters
============ ===============================================================
 isensor      The sensor.
============ ===============================================================

**Returns:** An ongoing builder.

----

withGains
~~~~~~~~~

Sets the controller gains, causing the builder to generate an ``AsyncPosPIDController``.
This does not set the integrated control's gains.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosControllerBuilder &withGains(const IterativePosPIDController::Gains &igains)

============ ===============================================================
 Parameters
============ ===============================================================
 igains       The gains.
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

        AsyncPosControllerBuilder &withDerivativeFilter(std::unique_ptr<Filter> iderivativeFilter)

=================== ===============================================================
 Parameters
=================== ===============================================================
 iderivativeFilter   The derivative filter.
=================== ===============================================================

**Returns:** An ongoing builder.

----

withMaxVelocity
~~~~~~~~~~~~~~~

Sets the maximum velocity. The default maximum velocity is derived from the motor's gearset.
This parameter is ignored when using an ``AsyncPosPIDController``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncPosControllerBuilder &withMaxVelocity(double imaxVelocity)

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

        AsyncPosControllerBuilder &withTimeUtilFactory(const TimeUtilFactory &itimeUtilFactory)

=================== ===============================================================
 Parameters
=================== ===============================================================
 itimeUtilFactory    The ``TimeUtilFactory``.
=================== ===============================================================

**Returns:** An ongoing builder.

----

build
~~~~~

Builds the ``AsyncPositionController``. Throws a ``std::runtime_exception`` is no motors were set.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::shared_ptr<AsyncPositionController<double, double>> build()

**Returns:** A fully built ``AsyncPositionController``
