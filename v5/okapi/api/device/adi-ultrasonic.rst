==============
ADI Ultrasonic
==============

.. contents:: :local:

okapi::ADIUltrasonic
====================

An ultrasonic sensor on the ADI ports. Uses a 5-tap
`median filter <../filters/median-filter.html>`_ to filter out spikes and errors in the signal.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ADIUltrasonic(const std::uint8_t iportTop, const std::uint8_t iportBottom)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iportTop        The port the top wire is in.
 iportBottom     The port the bottom wire is in.
=============== ===================================================================

Methods
-------

get
~~~

Get the current sensor value. Uses a median filter to remove outliers.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t get()

**Returns:** The current filtered sensor value, or ``PROS_ERR`` on a failure.

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
