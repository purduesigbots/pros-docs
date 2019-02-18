==============
ADI Ultrasonic
==============

.. contents:: :local:

okapi::ADIUltrasonic
====================

An ultrasonic sensor on the ADI ports.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ADIUltrasonic(
          std::uint8_t iportPing, std::uint8_t iportEcho,
          std::unique_ptr<Filter> ifilter = std::make_unique<PassthroughFilter>()
        )

=============== ===================================================================
 Parameters
=============== ===================================================================
 iportPing       The port connected to the orange OUTPUT cable. This should be in the next highest port following ``iportEcho``.
 iportEcho       The port connected to the yellow INPUT cable. This should be in port ``1``, ``3``, ``5``, or ``7`` (``'A'``, ``'C'``, ``'E'``, ``'G'``).
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
