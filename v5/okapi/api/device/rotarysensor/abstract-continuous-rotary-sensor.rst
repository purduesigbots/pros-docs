===================================
(Abstract) Continuous Rotary Sensor
===================================

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.x.x and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

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
