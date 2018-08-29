===========
ADI Encoder
===========

.. contents:: :local:

okapi::ADIEncoder
=================

A `ContinuousRotarySensor <abstract-continuous-rotary-sensor.html>`_ on the ADI ports.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ADIEncoder(std::uint8_t iportTop, std::uint8_t iportBottom,
                   bool ireversed = false)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iportTop        The port the top wire is in.
 iportBottom     The port the bottom wire is in.
 ireversed       Whether the encoder's direction is reversed.
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

reset
~~~~~

Resets the sensor to ``0``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t reset() override

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
