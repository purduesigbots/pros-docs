========
ADI Gyro
========

.. contents:: :local:

okapi::ADIGyro
==============

A gyroscope (`ContinuousRotarySensor <abstract-continuous-rotary-sensor.html>`_) on the ADI ports.
The gyro measures in tenths of a degree, so there are ``3600`` measurement points (by default)
per revolution.

Constructor(s)
--------------

If the port has not previously been configured as a gyro, then the constructor will block for
``1`` second for calibration.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ADIGyro(std::uint8_t iport, double imultiplier = 1)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iport           The ADI port number.
 imultiplier     A value multiplied by the gyro heading value.
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

getRemapped
~~~~~~~~~~~

Get the current sensor value remapped into the target range (``[1800, -1800]`` by default).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double getRemapped(double iupperBound = 1800, double ilowerBound = -1800) const

=============== ===================================================================
 Parameters
=============== ===================================================================
 iupperBound     The upper bound of the range.
 ilowerBound     The lower bound of the range.
=============== ===================================================================

**Returns:** The remapped sensor value, or ``PROS_ERR`` on a failure.

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
