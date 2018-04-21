==================
Integrated Encoder
==================

.. contents:: :local:

okapi::IntegratedEncoder
========================

A `RotarySensor <abstract-rotary-sensor.html>`_ representing the encoder inside the V5 motors (not
an IME).

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        IntegratedEncoder(pros::Motor imotor)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The V5 motor to use the encoder from.
=============== ===================================================================

Methods
-------

get
~~~

Returns the current sensor value.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t get() const override

**Returns:** The current sensor value, or ``PROS_ERR`` on a failure.

----

reset
~~~~~

Resets the sensor to ``0``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t reset() const override

**Returns:** ``1`` on success, or ``PROS_ERR`` on a failure.

----

controllerGet
~~~~~~~~~~~~~

Get the sensor value for use in a control loop. This method might be automatically called in
another thread by the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double controllerGet() override

**Returns:** The current sensor value, or ``PROS_ERR`` on a failure.
