==============
ADI Ultrasonic
==============

.. contents:: :local:

okapi::ADIUltrasonic
====================

An ultrasonic sensor on the ADI ports. Uses a 5-tap
`median filter <../filters/median-filter.html>`_ by default to filter out spikes and errors in the signal.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ADIUltrasonic(std::uint8_t iportTop, std::uint8_t iportBottom)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iportTop        The port the top wire is in.
 iportBottom     The port the bottom wire is in.
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ADIUltrasonic(std::uint8_t iportTop, std::uint8_t iportBottom, std::unique_ptr<Filter> ifilter)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iportTop        The port the top wire is in.
 iportBottom     The port the bottom wire is in.
 ifilter         The filter to use for filtering the ultrasonic measurements.
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

        virtual double get()

**Returns:** The current filtered sensor value.

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
