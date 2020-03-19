========================
(Abstract) Rotary Sensor
========================

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.x.x and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

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
