=================
ADI (TriPort) API
=================

Functions
=========

adi_analog_calibrate
--------------------

Calibrates the analog sensor on the specified channel.

This method assumes that the true sensor value is not actively changing at this time and
computes an average from approximately 500 samples, 1 ms apart, for a 0.5 s period of
calibration. The average value thus calculated is returned and stored for later calls to the
`adi_analog_read_calibrated`_ and `adi_analog_read_calibrated_HR`_ functions. These functions will return
the difference between this value and the current sensor value when called.

Do not use this function when the sensor value might be unstable
(gyro rotation, accelerometer movement).

::

	int32_t adi_analog_calibrate ( int port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
============ =================================================================================================================

**Returns:** The average sensor value computed by this function.

adi_analog_read
---------------

::

	int32_t adi_analog_read ( int port )

Reads an analog input channel and returns the 12-bit value.

The value returned is undefined if the analog pin has been switched to a different mode.
This function is `Wiring-compatible <https://www.arduino.cc/en/Reference/Wire>`_
with the exception of the larger output range. The
meaning of the returned value varies depending on the sensor attached.

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
============ =================================================================================================================

**Returns:** The analog sensor value, where a value of 0 reflects an input voltage of nearly 0 V
and a value of 4095 reflects an input voltage of nearly 5 V

adi_analog_read_calibrated
--------------------------

Reads the calibrated value of an analog input channel.

The `adi_analog_calibrate`_ function must be run first on that channel. This function is
inappropriate for sensor values intended for integration, as round-off error can accumulate
causing drift over time. Use `adi_analog_read_calibrated_HR`_ instead.

::

	int32_t adi_analog_read_calibrated ( int port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
============ =================================================================================================================

**Returns:** The difference of the sensor value from its calibrated default from -4095 to 4095.

adi_analog_read_calibrated_HR
-----------------------------

Reads the calibrated value of an analog input channel 1-8 with enhanced precision.

The `adi_analog_calibrate`_ function must be run first. This is intended for integrated sensor
values such as gyros and accelerometers to reduce drift due to round-off, and should not be
used on a sensor such as a line tracker or potentiometer.

The value returned actually has 16 bits of "precision", even though the ADC only reads
12 bits, so that errors induced by the average value being between two values come out
in the wash when integrated over time. Think of the value as the true value times 16.

::

	int32_t adi_analog_read_calibrated_HR ( int port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
============ =================================================================================================================

**Returns:** The difference of the sensor value from its calibrated default from -16384 to 16384.

adi_digital_read
----------------

Gets the digital value (1 or 0) of a pin configured as a digital input.

If the pin is configured as some other mode, the digital value which reflects the current
state of the pin is returned, which may or may not differ from the currently set value. The
return value is undefined for pins configured as Analog inputs, or for ports in use by a
Communications interface. This function is `Wiring-compatible <https://www.arduino.cc/en/Reference/Wire>`_.

::

	int32_t adi_digital_read ( int port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
============ =================================================================================================================

**Returns:** True if the pin is `HIGH`_, or false if it is `LOW`_.

adi_digital_write
-----------------

Sets the digital value (1 or 0) of a pin configured as a digital output.

If the pin is configured as some other mode, behavior is undefined. This function is
`Wiring-compatible <https://www.arduino.cc/en/Reference/Wire>`_.

::

	int32_t adi_digital_write ( int port,
	                            bool value )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
 value        an expression evaluating to "true" or "false" to set the output to HIGH or LOW
              respectively, or the constants HIGH or LOW themselves
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

adi_encoder_get
---------------

Gets the number of ticks recorded by the encoder.

There are 360 ticks in one revolution.

::

	int32_t adi_encoder_get ( adi_encoder_t enc )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 enc          the `adi_encoder_t`_ object from `adi_encoder_init`_ to read, or simply the ADI port number
============ =================================================================================================================

**Returns:** The signed and cumulative number of counts since the last start or reset.

adi_encoder_init
----------------

Initializes and enables a quadrature encoder on two ADI ports.

::

	adi_encoder_t adi_encoder_init ( int port_top,
	                                 int port_bottom,
																	 bool reverse )

// ^ Fix this!!

============ ====================================================================================================================================
 Parameters
============ ====================================================================================================================================
 port_top     the "top" wire from the encoder sensor with the removable cover side UP. This should be in port 1, 3, 5, or 7 ('A', 'C', 'E', 'G').
 port_bottom  the "bottom" wire from the encoder sensor
 reverse      if "true", the sensor will count in the opposite direction
============ ====================================================================================================================================

**Returns:** An `adi_encoder_t`_ object to be stored and used for later calls to encoder functions.

adi_encoder_reset
-----------------

Resets the encoder to zero.

It is safe to use this method while an encoder is enabled. It is not necessary to call this
method before stopping or starting an encoder.

::

	int32_t adi_encoder_reset ( adi_encoder_t enc )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 enc          the `adi_encoder_t`_ object from `adi_encoder_init`_ to read, or simply the ADI port number
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

adi_encoder_shutdown
--------------------

Stops and disables the encoder.

::

	int32_t adi_encoder_shutdown ( adi_encoder_t enc )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 enc          the `adi_encoder_t`_ object from `adi_encoder_init`_ to read, or simply the ADI port number
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

adi_motor_set
-------------

Sets the speed of the motor on the given port.

::

	int32_t adi_motor_set ( int port,
	                        int speed )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
 speed        the new signed speed; -127 is full reverse and 127 is full forward, with 0 being off
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise

adi_motor_get
-------------

Returns the last set speed of the motor on the given port.

::

	int32_t adi_motor_get ( int port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
============ =================================================================================================================

**Returns:** The last set speed of the motor on the given port.

adi_motor_stop
--------------

Stops the motor on the given port.

::

	int32_t adi_motor_stop ( int port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

adi_pin_mode
------------

Configures the pin as an input or output with a variety of settings.

::

	int32_t adi_pin_mode ( int port,
	                       unsigned char mode )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
 mode         one of `INPUT`_, `INPUT_ANALOG`_, `OUTPUT`_, or `OUTPUT_ANALOG`_
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

adi_port_config_get
-------------------

Returns the configuration for the given ADI port.

::

	adi_port_config_e_t adi_port_config_get ( int port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
============ =================================================================================================================

**Returns:** The `adi_port_config_e_t` set for the port.

adi_port_config_set
-------------------

Configures an ADI port to act as a given sensor type.

::

	int32_t adi_port_config_set ( int port,
	                              adi_port_config_e_t type )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
 type         The `configuration <adi_port_config_e_t>`_ type for the port
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

adi_ultrasonic_get
------------------

Gets the current ultrasonic sensor value in centimeters.

If no object was found, zero is returned. If the ultrasonic sensor was never started, the
return value is PROS_ERR. Round and fluffy objects can cause inaccurate values to be
returned.

::

	int32_t adi_ultrasonic_get ( adi_ultrasonic_t ult )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 ult          the `adi_ultrasonic_t`_ object from `adi_ultrasonic_init`_ to read, or simply the ADI port number
============ =================================================================================================================

**Returns:** The distance to the nearest object in centimeters.

adi_ultrasonic_init
-------------------

Initializes an ultrasonic sensor on the specified ADI ports.

::

	adi_ultrasonic_t adi_ultrasonic_init ( int port_echo,
	                                       int port_ping )

============ =============================================================================================================
 Parameters
============ =============================================================================================================
 port_echo    the port connected to the yellow INPUT cable. This should be in port 1, 3, 5, or 7 ('A', 'C', 'E', 'G').
 port_ping    the port connected to the orange OUTPUT cable. This should be in the next highest port following port_echo.
============ =============================================================================================================

**Returns:** An `adi_ultrasonic_t`_ object to be stored and used for later calls to ultrasonic functions.

adi_ultrasonic_shutdown
-----------------------

Stops and disables the ultrasonic sensor.

::

	int32_t adi_ultrasonic_shutdown ( adi_ultrasonic_t ult )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 ult          the `adi_ultrasonic_t`_ object from `adi_ultrasonic_init`_ to read, or simply the ADI port number
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

adi_value_get
-------------

Returns the value for the given ADI port.

::

	int32_t adi_value_get ( int port )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
============ =================================================================================================================

**Returns:** The value for the given ADI port.

adi_value_set
-------------

Sets the value for the given ADI port

This only works on ports configured as outputs, and the behavior will change
depending on the configuration of the port

::

	int32_t adi_value_set ( int port,
	                        int32_t value )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
 value        The value to set the ADI port to
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

Macros
======

HIGH
----

Used for `adi_digital_write`_ to specify a logic HIGH state to output.

In reality, using any non-zero expression or "true" will work to set a pin to HIGH.

**Value:** 1

INPUT
-----

`adi_pin_mode`_ state for a digital input.

**Value:** 0x00

INPUT_ANALOG
------------

`adi_pin_mode`_ state for an analog input.

**Value:** 0x02

LOW
---

Used for `adi_digital_write`_ to specify a logic LOW state to output.

In reality, using a zero expression or "false" will work to set a pin to LOW.

**Value:** 0

OUTPUT
------

`adi_pin_mode`_ state for a digital output.

**Value:** 0x01

OUTPUT_ANALOG
-------------

`adi_pin_mode`_ state for an analog output.

**Value:** 0x03

NUM_ADI_PORTS
-------------

The number of ADI ports available on the V5 Brain (from 1-8, 'a'-'h', 'A'-'H').

**Value:** 8

Enumerated Values
=================

::

	typedef enum adi_port_config_e {
		E_ADI_ANALOG_IN = 0,
		E_ADI_ANALOG_OUT,
		E_ADI_DIGITAL_IN,
		E_ADI_DIGITAL_OUT,

		E_ADI_SMART_BUTTON,
		E_ADI_SMART_POT,

		E_ADI_LEGACY_BUTTON,
		E_ADI_LEGACY_POT,
		E_ADI_LEGACY_LINE_SENSOR,
		E_ADI_LEGACY_LIGHT_SENSOR,
		E_ADI_LEGACY_GYRO,
		E_ADI_LEGACY_ACCELEROMETER,

		E_ADI_LEGACY_SERVO,
		E_ADI_LEGACY_PWM,

		E_ADI_LEGACY_ENCODER,
		E_ADI_LEGACY_ULTRASONIC,

		E_ADI_TYPE_UNDEFINED = 255,
		E_ADI_ERR = PROS_ERR
	} adi_port_config_e_t;

============================= ================================================================
 Value
============================= ================================================================
 E_ADI_ANALOG_IN               Configures the ADI port as an analog input
 E_ADI_ANALOG_OUT              Configures the ADI port as an analog output
 E_ADI_DIGITAL_IN              Configures the ADI port as a digital input
 E_ADI_DIGITAL_OUT             Configures the ADI port as a digital output
 E_ADI_SMART_BUTTON            Configures the ADI port for use with a Smart Button Sensor
 E_ADI_SMART_POT               Configures the ADI port for use with a Smart Pot Sensor
 E_ADI_LEGACY_BUTTON           Configures the ADI port for use with a Cortex-Era Button
 E_ADI_LEGACY_POT              Configures the ADI port for use with a Cortex-Era Pot
 E_ADI_LEGACY_LINE_SENSOR      Configures the ADI port for use with a Cortex-Era Line Sensor
 E_ADI_LEGACY_LIGHT_SENSOR     Configures the ADI port for use with a Cortex-Era Light Sensor
 E_ADI_LEGACY_GYRO             Configures the ADI port for use with a Cortex-Era Gyro
 E_ADI_LEGACY_ACCELEROMETER    Configures the ADI port for use with a Cortex-Era accelerometer
 E_ADI_LEGACY_SERVO            Configures the ADI port for use with a Cortex-Era servo motor
 E_ADI_LEGACY_PWM              Configures the ADI port for use with a Cortex-Era motor
 E_ADI_LEGACY_ENCODER          Configures the ADI port (and the one immediately above it)
                               for use with a Cortex-Era Encoder
 E_ADI_LEGACY_ULTRASONIC       Configures the ADI port (and the one immediately above it)
                               for use with a Cortex-Era Ultrasonic
 E_ADI_TYPE_UNDEFINED          The default value for an uninitialized ADI port
 E_ADI_ERR                     Error return value for ADI port configuration
============================= ================================================================

Typedefs
========

adi_encoder_t
-------------

Reference type for an initialized encoder.

This merely contains the port number for the encoder, unlike its use as an
object to store encoder data in PROS 2.

::

	typedef int32_t adi_encoder_t;

adi_ultrasonic_t
----------------

Reference type for an initialized ultrasonic.

This merely contains the port number for the ultrasonic, unlike its use as an
object to store encoder data in PROS 2.

::

	typedef int32_t adi_ultrasonic_t;
