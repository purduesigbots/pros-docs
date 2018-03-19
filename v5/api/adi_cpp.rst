======================
ADI (TriPort) C++ API
======================

Classes
=======

ADIAnalogIn
-----------

Constructor(s)
~~~~~~~~~~~~~~

::

  pros::ADIAnalogIn::ADIAnalogIn ( uint8_t port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to calibrate
============ =================================================================================================================

Methods
~~~~~~~

::

  int32_t pros::ADIAnalogIn::calibrate ( )

Analogous to `adi_analog_calibrate`_.

::

  int32_t pros::ADIAnalogIn::value_get ( )

Analogous to `adi_analog_read`_.

ADIPort
-------

Constructor(s)
~~~~~~~~~~~~~~

::

  pros::ADIPort::ADIPort ( uint8_t port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to calibrate
============ =================================================================================================================

::

  pros::ADIPort::ADIPort ( uint8_t port,
                           adi_port_config_e_t type )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
 type         The `configuration <adi_port_config_e_t>`_ type for the port
============ =================================================================================================================


Methods
~~~~~~~

* `config_set <adi_port_config_set>`_
* `config_get <adi_port_config_get>`_
* `value_set <adi_value_set>`_
* `value_get <adi_value_get>`_

ADIEncoder
----------

Constructor(s)
~~~~~~~~~~~~~~

::

  ADIEncoder::ADIEncoder ( uint8_t port_top,
                           uint8_t port_bottom,
                           const bool reverse )

  ADIEncoder::ADIEncoder ( uint8_t port_top,
                           uint8_t port_bottom )
