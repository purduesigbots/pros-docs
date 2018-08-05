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

        virtual double get() const = 0

**Returns:** The current sensor value, or ``PROS_ERR`` on a failure.
