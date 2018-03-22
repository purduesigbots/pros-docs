======================
ADI (TriPort) C++ API
======================

.. contents:: :local:

pros::ADIAnalogIn
=================

.. note::
   **ADIPotentiometer**, **ADILineSensor**, **ADILightSensor**, and **ADIAccelerometer**
   are all `pros::ADIAnalogIn`_ objects as well.

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

Analogous to `adi_analog_calibrate <../c/adi.html#adi-analog-calibrate>`_.

get_value
~~~~~~~~~

::

  int32_t pros::ADIAnalogIn::get_value ( ) const

Inherited from `ADIPort::get_value <get_value_>`_.

get_value_calibrated
~~~~~~~~~~~~~~~~~~~~

::

  int32_t pros::ADIAnalogIn::get_value_calibrated ( ) const

Analogous to `adi_analog_read_calibrated <../c/adi.html#adi_analog_read_calibrated>`_.

get_value_calibrated_HR
~~~~~~~~~~~~~~~~~~~~~~~

::

  int32_t pros::ADIAnalogIn::get_value_calibrated_HR ( ) const

Analogous to `adi_analog_read_calibrated_HR <../c/adi.html#adi_analog_read_calibrated_HR>`_.

pros::ADIAnalogOut
==================

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

set_value
~~~~~~~~~

::

  pros::ADIAnalogOut::set_value ( int32_t value ) const

Inherited from `ADIPort::set_value <set_value_>`_.

pros::ADIDigitalIn
==================

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

  int32_t pros::ADIDigitalIn::get_new_press ( ) const

Analogous to `adi_digital_get_new_press <../c/adi.html#adi-digital-get-new-press>`_.

get_value
~~~~~~~~~

::

  int32_t pros::ADIDigitalIn::get_value ( ) const

Inherited from `ADIPort::get_value <get_value_>`_.

pros::ADIDigitalOut
===================

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

set_value
~~~~~~~~~

::

  pros::ADIDigitalOut::set_value ( int32_t value ) const

Inherited from `ADIPort::set_value <set_value_>`_.

pros::ADIEncoder
================

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

get_value
~~~~~~~~~

::

  int32_t pros::ADIEncoder::get_value ( ) const

Inherited from `ADIPort::get_value <get_value_>`_.

Analogous to `adi_encoder_get <../c/adi.html#adi-encoder-get>`_.

reset
~~~~~

::

  int32_t pros::ADIEncoder::reset ( ) const

Analogous to `adi_encoder_reset <../c/adi.html#adi-encoder-reset>`_.

pros::ADIMotor
==============

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

get_value
~~~~~~~~~

::

  int32_t pros::ADIMotor::get_value ( ) const

Inherited from `ADIPort::get_value <get_value_>`_.

Analogous to `adi_motor_get <../c/adi.html#adi-motor-get>`_.

set_value
~~~~~~~~~

::

  int32_t pros::ADIMotor::set_value ( ) const

Inherited from `ADIPort::set_value <set_value_>`_.

Analogous to `adi_motor_set <../c/adi.html#adi-motor-set>`_.

stop
~~~~

::

  int32_t pros::ADIMotor::stop ( ) const

Analogous to `adi_motor_stop <../c/adi.html#adi-motor-stop>`_.

pros::ADIPort
=============

Constructor(s)
--------------

::

  pros::ADIPort::ADIPort ( uint8_t port,
                           adi_port_config_e_t type = E_ADI_TYPE_UNDEFINED )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
 type         The `configuration <adi_port_config_e_t>`_ type for the port
============ =================================================================================================================


Methods
-------

get_config
~~~~~~~~~~

::

  int32_t pros::ADIPort::get_config ( ) const;

Analogous to `adi_port_get_config <../c/adi.html#adi-port-config-get>`_.

.. _get_value:

get_value
~~~~~~~~~

::

  int32_t pros::ADIPort::get_value ( ) const;

Analogous to `adi_port_get_value <../c/adi.html#adi-port-value-get>`_.

set_config
~~~~~~~~~~

::

  int32_t pros::ADIPort::set_config ( adi_port_config_e_t type ) const;

Analogous to `adi_port_set_config <../c/adi.html#adi-port-config-set>`_.

.. _set_value:

set_value
~~~~~~~~~

::

  int32_t pros::ADIPort::set_value ( ) const;

Analogous to `adi_port_set_value <../c/adi.html#adi-port-value-set>`_.

pros::ADIUltrasonic
===================

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

get_value
~~~~~~~~~

::

  int32_t pros::ADIUltrasonic::get_value ( ) const

Inherited from `ADIPort::get_value <get_value_>`_.

Analogous to `adi_ultrasonic_get <../c/adi.html#adi-ultrasonic-get>`_.
