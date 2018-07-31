===================================
(Abstract) Continuous Rotary Sensor
===================================

.. contents:: :local:

okapi::ContinuousRotarySensor
=============================

A `RotarySensor <abstract-rotary-sensor.html>`_  that can rotate continuously.

Methods
-------

reset
~~~~~

Resets the sensor to ``0``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t reset() = 0

**Returns:** ``1`` on success, or ``PROS_ERR`` on a failure.
