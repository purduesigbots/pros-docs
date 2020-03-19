=============
Potentiometer
=============

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.x.x and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

.. contents:: :local:

okapi::Potentiometer
====================

A `RotarySensor <abstract-rotary-sensor.html>`_ on the ADI ports.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Potentiometer(std::uint8_t iport)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iport            The port the potentiometer's wire is in.
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

        virtual double get() const override

**Returns:** The current sensor value, or ``PROS_ERR`` on a failure.

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
