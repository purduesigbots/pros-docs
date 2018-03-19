======================
ADI (TriPort) C++ API
======================


ADIAnalogIn
===========

.. note::
   **ADIPotentiometer**, **ADILineSensor**, **ADILightSensor**, and **ADIAccelerometer**
   are all `ADIAnalogIn`_ objects as well.

Constructor(s)
--------------

::

  pros::ADIAnalogIn::ADIAnalogIn ( uint8_t port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
============ =================================================================================================================

Methods
-------

calibrate
~~~~~~~~~

::

  int32_t pros::ADIAnalogIn::calibrate ( ) const

Analogous to `adi_analog_calibrate <./adi_c.html#adi-analog-calibrate>`_.

value_get
~~~~~~~~~

::

  int32_t pros::ADIAnalogIn::value_get ( ) const

Inherited from `ADIPort::value_get <value_get_>`_.

value_get_calibrated
~~~~~~~~~~~~~~~~~~~~

::

  int32_t pros::ADIAnalogIn::value_get_calibrated ( ) const

Analogous to `adi_analog_read_calibrated <./adi_c.html#adi_analog_read_calibrated>`_.

value_get_calibrated_HR
~~~~~~~~~~~~~~~~~~~~~~~

::

  int32_t pros::ADIAnalogIn::value_get_calibrated_HR ( ) const

Analogous to `adi_analog_read_calibrated_HR <./adi_c.html#adi_analog_read_calibrated_HR>`_.

ADIAnalogOut
============

Constructor(s)
--------------

::

  pros::ADIAnalogOut::ADIAnalogOut ( uint8_t port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
============ =================================================================================================================

Methods
-------

value_set
~~~~~~~~~

::

  pros::ADIAnalogOut::value_set ( int32_t value ) const

Inherited from `ADIPort::value_set <value_set_>`_.

ADIDigitalIn
============

Constructor(s)
--------------

::

  pros::ADIDigitalIn::ADIDigitalIn ( uint8_t port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
============ =================================================================================================================

Methods
-------

get_new_press
~~~~~~~~~~~~~

::

  int32_t pros::ADIDigitalIn::get_new_press() const

Analogous to `adi_digital_get_new_press <./adi_c.html#adi-digital-get-new-press>`_.

value_get
~~~~~~~~~

::

  int32_t pros::ADIDigitalIn::value_get() const

Inherited from `ADIPort::value_get <value_get_>`_.

ADIDigitalOut
=============

Constructor(s)
--------------

::

  pros::ADIDigitalOut::ADIDigitalOut ( uint8_t port
                                       bool init_state = false )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
 init_state   The initial state for the digital output. The default value is false.
============ =================================================================================================================

Methods
-------

value_set
~~~~~~~~~

::

  pros::ADIDigitalOut::value_set ( int32_t value ) const

Inherited from `ADIPort::value_set <value_set_>`_.

ADIEncoder
==========

Constructor(s)
--------------

::

  ADIEncoder::ADIEncoder ( uint8_t port_top,
                           uint8_t port_bottom,
                           const bool reverse = false )

============ ====================================================================================================================================
 Parameters
============ ====================================================================================================================================
 port_top     the "top" wire from the encoder sensor with the removable cover side UP. This should be in port 1, 3, 5, or 7 ('A', 'C', 'E', 'G').
 port_bottom  the "bottom" wire from the encoder sensor
 reverse      if "true", the sensor will count in the opposite direction. The default value is "false".
============ ====================================================================================================================================

Methods
-------

reset
~~~~~

::

  int32_t pros::ADIEncoder::reset() const

Analogous to `adi_encoder_reset <./adi_c.html#adi-encoder-reset>`_.

value_get
~~~~~~~~~

::

  int32_t pros::ADIEncoder::value_get ( ) const

Inherited from `ADIPort::value_get <value_get_>`_.

Analogous to `adi_encoder_get <./adi_c.html#adi-encoder-get>`_.

ADIMotor
========

Constructor(s)
--------------

::

  pros::ADIMotor::ADIMotor ( uint8_t port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
============ =================================================================================================================

Methods
-------

stop
~~~~

::

  int32_t pros::ADIMotor::stop ( ) const

Analogous to `adi_motor_stop <./adi_c.html#adi-motor-stop>`_.

value_get
~~~~~~~~~

::

  int32_t pros::ADIMotor::value_get ( ) const

Inherited from `ADIPort::value_get <value_get_>`_.

Analogous to `adi_motor_get <./adi_c.html#adi-motor-get>`_.

value_set
~~~~~~~~~

::

  int32_t pros::ADIMotor::value_set ( ) const

Inherited from `ADIPort::value_set <value_set_>`_.

Analogous to `adi_motor_set <./adi_c.html#adi-motor-set>`_.

ADIPort
=======

Constructor(s)
--------------

::

  pros::ADIPort::ADIPort ( uint8_t port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
============ =================================================================================================================

::

  pros::ADIPort::ADIPort ( uint8_t port,
                           adi_port_config_e_t type )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
 type         The `configuration <adi_port_config_e_t>`_ type for the port
============ =================================================================================================================


Methods
-------

config_set
~~~~~~~~~~

::

  int32_t config_set(adi_port_config_e_t type) const;

Analogous to `adi_port_config_set <./adi_c.html#adi-port-config-set>`_.

config_get
~~~~~~~~~~

::

  int32_t config_get() const;

Analogous to `adi_port_config_get <./adi_c.html#adi-port-config-get>`_.

.. _value_set:

value_set
~~~~~~~~~

::

  int32_t value_set() const;

Analogous to `adi_port_value_set <./adi_c.html#adi-port-value-set>`_.

.. _value_get:

value_get
~~~~~~~~~

::

  int32_t value_get() const;

Analogous to `adi_port_value_get <./adi_c.html#adi-port-value-get>`_.

ADIUltrasonic
=============

Constructor(s)
--------------

::

  pros::ADIUltrasonic::ADIUltrasonic ( uint8_t port_echo,
                                       uint8_t port_ping )

============ =============================================================================================================
 Parameters
============ =============================================================================================================
 port_echo    the port connected to the yellow INPUT cable. This should be in port 1, 3, 5, or 7 ('A', 'C', 'E', 'G').
 port_ping    the port connected to the orange OUTPUT cable. This should be in the next highest port following port_echo.
============ =============================================================================================================

Methods
-------

value_get
~~~~~~~~~

::

  int32_t pros::ADIUltrasonic::value_get ( ) const

Inherited from `ADIPort::value_get <value_get_>`_.

Analogous to `adi_ultrasonic_get <./adi_c.html#adi-ultrasonic-get>`_.
