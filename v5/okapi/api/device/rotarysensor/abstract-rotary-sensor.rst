========================
(Abstract) Rotary Sensor
========================

.. contents:: :local:

okapi::RotarySensor
===================

Methods
-------

get
~~~

Returns the current sensor value.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t get() const = 0

**Returns:** The current sensor value, or ``PROS_ERR`` on a failure.

----

reset
~~~~~

Resets the sensor to ``0``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t reset() const = 0

**Returns:** ``1`` on success, or ``PROS_ERR`` on a failure.
