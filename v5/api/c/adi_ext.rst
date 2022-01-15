.. highlight:: c
   :linenothreshold: 5

==================
ADI Expander C API
==================

.. note:: The internal ADI API can be found
          `here <../../api/c/adi.html>`_.

.. contents:: :local:

Functions
=========

ext_adi_analog_calibrate
------------------------

Calibrates the analog sensor on the specified channel.

This method assumes that the true sensor value is not actively changing at this time and
computes an average from approximately 500 samples, 1 ms apart, for a 0.5 s period of
calibration. The average value thus calculated is returned and stored for later calls to the
`ext_adi_analog_read_calibrated`_ and `ext_adi_analog_read_calibrated_HR`_ functions. These
functions will return the difference between this value and the current sensor value when called.

Do not use this function when the sensor value might be unstable
(gyro rotation, accelerometer movement).

.. note::
   The ADI currently returns data at 10ms intervals, in constrast to the calibrate function's
   1ms sample rate. This sample rate was kept for the sake of being similar to PROS
   2, and increasing the sample rate would not have a tangible difference in the
   function's performance.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as an analog input

Analogous to `pros::ADIAnalogIn::calibrate <../cpp/adi.html#calibrate>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t ext_adi_analog_calibrate (uint8_t smart_port, uint8_t adi_port)

   .. tab :: Example
      .. highlight:: c
      ::
        
        #define ADI_EXPANDER_PORT 20
        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          ext_adi_analog_calibrate(ADI_EXPANDER_PORT, ANALOG_SENSOR_PORT);
          printf("Calibrated Reading: %d\n",
                ext_adi_analog_read_calibrated(ADI_EXPANDER_PORT, ANALOG_SENSOR_PORT));
          // All readings from then on will be calibrated
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port to calibrate (from 1-8, 'a'-'h', 'A'-'H')
============ =================================================================================================================

**Returns:** The average sensor value computed by this function.

----

ext_adi_analog_read
---------------

Reads an analog input channel and returns the 12-bit value.

The value returned is undefined if the analog pin has been switched to a different mode.
The meaning of the returned value varies depending on the sensor attached.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as an analog input

Analogous to `pros::ADIAnalogIn::get_value <../cpp/adi.html#get-value>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t ext_adi_analog_read (uint8_t smart_port, 
                                      uint8_t adi_port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define ANALOG_SENSOR_PORT 1

        void opcontrol() {
          while (true) {
            printf("Sensor Reading: %d\n", ext_adi_analog_read(ADI_EXPANDER_PORT, ANALOG_SENSOR_PORT));
            delay(5);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port to read from (from 1-8, 'a'-'h', 'A'-'H')
============ =================================================================================================================

**Returns:** The analog sensor value, where a value of 0 reflects an input voltage of nearly 0 V
and a value of 4095 reflects an input voltage of nearly 5 V

----

ext_adi_analog_read_calibrated
--------------------------

Reads the calibrated value of an analog input channel.

The `ext_adi_analog_calibrate`_ function must be run first on that channel. This function is
inappropriate for sensor values intended for integration, as round-off error can accumulate
causing drift over time. Use `ext_adi_analog_read_calibrated_HR`_ instead.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as an analog input

Analogous to `pros::ADIAnalogIn::get_value_calibrated <../cpp/adi.html#get-value-calibrated>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t ext_adi_analog_read_calibrated (uint8_t smart_port, 
                                                uint8_t adi_port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define ANALOG_SENSOR_PORT 1

        void opcontrol() {
          while (true) {
            printf("Sensor Reading: %d\n", ext_adi_analog_read_calibrated(ADI_EXPANDER_PORT, ANALOG_SENSOR_PORT));
            delay(5);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port to calibrate (from 1-8, 'a'-'h', 'A'-'H')
============ =================================================================================================================

**Returns:** The difference of the sensor value from its calibrated default from -4095 to 4095.

----

ext_adi_analog_read_calibrated_HR
-----------------------------

Reads the calibrated value of an analog input channel 1-8 with enhanced precision.

The `ext_adi_analog_calibrate`_ function must be run first. This is intended for integrated sensor
values such as gyros and accelerometers to reduce drift due to round-off, and should not be
used on a sensor such as a line tracker or potentiometer.

The value returned actually has 16 bits of "precision", even though the ADC only reads
12 bits, so that errors induced by the average value being between two values come out
in the wash when integrated over time. Think of the value as the true value times 16.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as an analog input

Analogous to `pros::ADIAnalogIn::get_value_calibrated_HR <../cpp/adi.html#get-value-calibrated-HR>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t ext_adi_analog_read_calibrated_HR (uint8_t smart_port, 
                                                    uint8_t adi_port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define ANALOG_SENSOR_PORT 1

        void opcontrol() {
          while (true) {
            ext_adi_analog_calibrate(ADI_EXPANDER_PORT, ANALOG_SENSOR_PORT);

            printf("Sensor Reading: %d\n", ext_adi_analog_read_calibrated_HR(ADI_EXPANDER_PORT, ANALOG_SENSOR_PORT));
            delay(5);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port to read from (from 1-8, 'a'-'h', 'A'-'H')
============ =================================================================================================================

**Returns:** The difference of the sensor value from its calibrated default from -16384 to 16384.

----

ext_adi_digital_get_new_press
-------------------------

Returns a rising-edge case for a digital button press.

This function is not thread-safe.
Multiple tasks polling a single button may return different results under the
same circumstances, so only one task should call this function for any given
button. E.g., Task A calls this function for buttons 1 and 2. Task B may call
this function for button 3, but should not for buttons 1 or 2. A typical
use-case for this function is to call inside opcontrol to detect new button
presses, and not in any other tasks.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as a digital input

Analogous to `pros::ADIDigitalIn::get_new_press <../cpp/adi.html#get-new-press>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t ext_adi_digital_get_new_press (uint8_t smart_port, 
                                              uint8_t adi_port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define DIGITAL_SENSOR_PORT 1

        void opcontrol() {
          while (true) {
            if (ext_adi_digital_get_new_press(ADI_EXPANDER_PORT, DIGITAL_SENSOR_PORT)) {
              // Toggle pneumatics or other state operations
            }
            delay(5);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port to read from (from 1-8, 'a'-'h', 'A'-'H')
============ =================================================================================================================

**Returns:** 1 if the button on the controller is pressed and had not been pressed
the last time this function was called, 0 otherwise.

----

ext_adi_digital_read
----------------

Gets the digital value (1 or 0) of a pin configured as a digital input.

If the pin is configured as some other mode, the digital value which reflects the current
state of the pin is returned, which may or may not differ from the currently set value. The
return value is undefined for pins configured as Analog inputs.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as a digital input

Analogous to `pros::ADIDigitalIn::get_value <../cpp/adi.html#id5>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t ext_adi_digital_read (uint8_t smart_port, 
                                      uint8_t adi_port)

   .. tab :: Example
      .. highlight:: c
      ::
        #define ADI_EXPANDER_PORT 20
        #define DIGITAL_SENSOR_PORT 1

        void opcontrol() {
          while (true) {
            printf("Sensor Value: %d\n", ext_adi_digital_read(ADI_EXPANDER_PORT, DIGITAL_SENSOR_PORT));
            delay(5);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port to read from (from 1-8, 'a'-'h', 'A'-'H')
============ =================================================================================================================

**Returns:** True if the pin is `HIGH`_, or false if it is `LOW`_.

----

ext_adi_digital_write
-----------------

Sets the digital value (1 or 0) of a pin configured as a digital output.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as a digital output

Analogous to `pros::ADIDigitalOut::set_value <../cpp/adi.html#id8>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_digital_write (uint8_t smart_port, 
                                      uint8_t adi_port, 
                                      bool value)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define DIGITAL_SENSOR_PORT 1

        void opcontrol() {
          bool state = LOW;
          while (true) {
            state != state;
            ext_adi_digital_write(ADI_EXPANDER_PORT, DIGITAL_SENSOR_PORT, state);

            delay(5); // toggle the sensor value every 50ms
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port to write to (from 1-8, 'a'-'h', 'A'-'H')
 value        an expression evaluating to "true" or "false" to set the output to HIGH or LOW
              respectively, or the constants HIGH or LOW themselves
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

ext_adi_encoder_get
---------------

Gets the number of ticks recorded by the encoder.

There are 360 ticks in one revolution.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as an encoder

Analogous to `pros::ADIEncoder::get_value <../cpp/adi.html#id11>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_encoder_get ( ext_adi_encoder_t enc )

   .. tab :: Example
      .. highlight:: c
      ::
        #define ADI_EXPANDER_PORT 20
        #define PORT_TOP 1
        #define PORT_BOTTOM 2

        void opcontrol() {
          ext_adi_encoder_t enc = ext_adi_encoder_init(ADI_EXPANDER_PORT, PORT_TOP, PORT_BOTTOM, false);
          while (true) {
            printf("Encoder Value: %d\n", ext_adi_encoder_get(enc));
            delay(5);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 enc          the `ext_adi_encoder_t`_ object from `ext_adi_encoder_init`_ to read, or simply the ADI port number
============ =================================================================================================================

**Returns:** The signed and cumulative number of counts since the last start or reset.

----

ext_adi_encoder_init
----------------

Initializes and enables a quadrature encoder on two ADI ports.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as an encoder

Analogous to `pros::ADIEncoder::ADIEncoder <../cpp/adi.html#id9>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        ext_adi_encoder_t ext_adi_encoder_init (uint8_t port_top,
                                        uint8_t port_bottom,
                                        const bool reverse )

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define PORT_TOP 1
        #define PORT_BOTTOM 2

        void opcontrol() {
          ext_adi_encoder_t enc = ext_adi_encoder_init(ADI_EXPANDER_PORT, PORT_TOP, PORT_BOTTOM, false);
          while (true) {
            printf("Encoder Value: %d\n", ext_adi_encoder_get(enc));
            delay(5);
          }
        }

============ ====================================================================================================================================
 Parameters
============ ====================================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 port_top     the "top" wire from the encoder sensor with the removable cover side UP. This should be in port 1, 3, 5, or 7 ('A', 'C', 'E', 'G').
 port_bottom  the "bottom" wire from the encoder sensor
 reverse      if "true", the sensor will count in the opposite direction
============ ====================================================================================================================================

**Returns:** An `ext_adi_encoder_t`_ object to be stored and used for later calls to encoder functions, or PROS_ERR if there was an error.

----

ext_adi_encoder_reset
-----------------

Resets the encoder to zero.

It is safe to use this method while an encoder is enabled. It is not necessary to call this
method before stopping or starting an encoder.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as an encoder

Analogous to `pros::ADIEncoder::reset <../cpp/adi.html#reset>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_encoder_reset ( ext_adi_encoder_t enc )

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define PORT_TOP 1
        #define PORT_BOTTOM 2

        void opcontrol() {
          ext_adi_encoder_t enc = ext_adi_encoder_init(ADI_EXPANDER_PORT, PORT_TOP, PORT_BOTTOM, false);
          delay(1000); // Move the encoder around in this time
          ext_adi_encoder_reset(enc); // The encoder is now zero again
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 enc          the `ext_adi_encoder_t`_ object from `ext_adi_encoder_init`_ to reset or simply the ADI port number
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

ext_adi_encoder_shutdown
--------------------

Stops and disables the encoder.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as an encoder

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_encoder_shutdown ( ext_adi_encoder_t enc )

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define PORT_TOP 1
        #define PORT_BOTTOM 2

        void opcontrol() {
          ext_adi_encoder_t enc = ext_adi_encoder_init(ADI_EXPANDER_PORT, PORT_TOP, PORT_BOTTOM, false);
          // Use the encoder
          ext_adi_encoder_shutdown(enc);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 enc          the `ext_adi_encoder_t`_ object from `ext_adi_encoder_init`_ to shut down, or simply the ADI port number
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

ext_adi_motor_get
-------------

Returns the last set speed of the motor on the given port.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as a motor

Analogous to `pros::ADIMotor::get_value <../cpp/adi.html#id14>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_motor_get (uint8_t smart_port,
                                  uint8_t adi_port)

   .. tab :: Example
      .. highlight:: c
      ::
        #define ADI_EXPANDER_PORT 20
        #define MOTOR_PORT 1

        void opcontrol() {
          ext_adi_motor_set(ADI_EXPANDER_PORT, MOTOR_PORT, 127); // Go full speed forward
          printf("Commanded Motor Power: %d\n", ext_adi_motor_get(ADI_EXPANDER_PORT, MOTOR_PORT)); // Will display 127
          delay(1000);
          ext_adi_motor_set(ADI_EXPANDER_PORT, MOTOR_PORT, 0); // Stop the motor
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port to get (from 1-8, 'a'-'h', 'A'-'H')
============ =================================================================================================================

**Returns:** The last set speed of the motor on the given port.

----

ext_adi_motor_set
-------------

Sets the speed of the motor on the given port.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as a motor

Analogous to `pros::ADIMotor::set_value <../cpp/adi.html#id15>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_motor_set (uint8_t smart_port, 
                                  uint8_t adi_port, 
                                  int8_t speed)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define MOTOR_PORT 1

        void opcontrol() {
          ext_adi_motor_set(ADI_EXPANDER_PORT, MOTOR_PORT, 127); // Go full speed forward
          delay(1000);
          ext_adi_motor_set(ADI_EXPANDER_PORT, MOTOR_PORT, 0); // Stop the motor
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port to set (from 1-8, 'a'-'h', 'A'-'H')
 speed        the new signed speed; -127 is full reverse and 127 is full forward, with 0 being off
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise

----

ext_adi_motor_stop
--------------

Stops the motor on the given port.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as a motor

Analogous to `pros::ADIMotor::stop <../cpp/adi.html#id16>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_motor_stop (uint8_t smart_port, uint8_t adi_port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define MOTOR_PORT 1

        void opcontrol() {
          ext_adi_motor_set(ADI_EXPANDER_PORT, MOTOR_PORT, 127); // Go full speed forward
          delay(1000);
          ext_adi_motor_set(ADI_EXPANDER_PORT, MOTOR_PORT, 0); // Stop the motor
          ext_adi_motor_stop(ADI_EXPANDER_PORT, MOTOR_PORT); // use this instead
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port to stop (from 1-8, 'a'-'h', 'A'-'H')
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

ext_adi_pin_mode
------------

Configures the pin as an input or output with a variety of settings.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_pin_mode (uint8_t smart_port, 
                                uint8_t adi_port, 
                                uint8_t mode)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          ext_adi_pin_mode(ADI_EXPANDER_PORT, ANALOG_SENSOR_PORT, INPUT_ANALOG);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port to configure (from 1-8, 'a'-'h', 'A'-'H')
 mode         one of `INPUT`_, `INPUT_ANALOG`_, `OUTPUT`_, or `OUTPUT_ANALOG`_
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

ext_adi_port_get_config
-------------------

Returns the configuration for the given ADI port.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports

Analogous to `pros::ADIPort::get_config <../cpp/adi.html#get-config>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        ext_adi_port_config_e_t ext_adi_port_get_config (uint8_t smart_port, 
                                                        uint8_t adi_port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          ext_adi_port_set_config(ADI_EXPANDER_PORT, ANALOG_SENSOR_PORT, E_ADI_ANALOG_IN);
          // Displays the value of E_ADI_ANALOG_IN
          printf("Port Type: %d\n", ext_adi_port_get_config(ADI_EXPANDER_PORT, ANALOG_SENSOR_PORT));
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port to get (from 1-8, 'a'-'h', 'A'-'H')
============ =================================================================================================================

**Returns:** The `ext_adi_port_config_e_t`_ set for the port.

----

ext_adi_port_get_value
------------------

Returns the value for the given ADI port.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports

Analogous to `pros::ADIPort::get_value <../cpp/adi.html#id18>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_get_value (uint8_t smart_port, 
                                  uint8_t adi_port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define ANALOG_SENSOR_PORT 1

        void opcontrol() {
          ext_adi_port_set_config(ADI_EXPANDER_PORT, ANALOG_SENSOR_PORT, E_ADI_ANALOG_IN);
          printf("Port Value: %d\n", ext_adi_get_value(ADI_EXPANDER_PORT, ANALOG_SENSOR_PORT));
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port       The smart port number the ADI Expander is in
 adi_port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to read
============ =================================================================================================================

**Returns:** The value for the given ADI port.

----

ext_adi_port_set_config
-------------------

Configures an ADI port to act as a given sensor type.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports

Analogous to `pros::ADIPort::set_config <../cpp/adi.html#set-config>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_port_set_config (uint8_t smart_port, 
                                      uint8_t adi_port
                                      ext_adi_port_config_e_t type )

   .. tab :: Example
      .. highlight:: c
      ::
        
        #define ADI_EXPANDER_PORT 20
        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          ext_adi_port_set_config(ADI_EXPANDER_PORT, ANALOG_SENSOR_PORT, E_ADI_ANALOG_IN);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to set
 type         The `configuration <./adi.html#adi-port-config-e-t>`_ type for the port
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

ext_adi_port_set_value
------------------

Sets the value for the given ADI port

This only works on ports configured as outputs, and the behavior will change
depending on the configuration of the port.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports

Analogous to `pros::ADIPort::set_value <../cpp/adi.html#id20>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_set_value (uint8_t smart_port, 
                               uint8_t adi_port,
                               int32_t value )

   .. tab :: Example
      .. highlight:: c
      ::

        #define ADI_EXPANDER_PORT 20
        #define DIGITAL_SENSOR_PORT 1

        void initialize() {
          ext_adi_port_set_config(ADI_EXPANDER_PORT, DIGITAL_SENSOR_PORT, E_ADI_DIGITAL_OUT);
          ext_adi_set_value(ADI_EXPANDER_PORT, DIGITAL_SENSOR_PORT, HIGH);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to set
 value        The value to set the ADI port to
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

ext_adi_ultrasonic_get
------------------

Gets the current ultrasonic sensor value in centimeters.

If no object was found, zero is returned. If the ultrasonic sensor was never started, the
return value is PROS_ERR. Round and fluffy objects can cause inaccurate values to be
returned.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as an ultrasonic

Analogous to `pros::ADIUltrasonic::get_value <../cpp/adi.html#id24>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_ultrasonic_get ( ext_adi_ultrasonic_t ult )

   .. tab :: Example
      .. highlight:: c
      ::

        #define PORT_PING 1
        #define PORT_ECHO 2
        #define ADI_EXPANDER_PORT 20

        void opcontrol() {
          ext_adi_ultrasonic_t ult = ext_adi_ultrasonic_init(ADI_EXPANDER_PORT, PORT_PING, PORT_ECHO);
          while (true) {
            // Print the distance read by the ultrasonic
            printf("Distance: %d\n", ext_adi_ultrasonic_get(ult));
            delay(5);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 ult          the `ext_adi_ultrasonic_t`_ object from `ext_adi_ultrasonic_init`_ to read, or simply the ADI port number
============ =================================================================================================================

**Returns:** The distance to the nearest object in centimeters.

----

ext_adi_ultrasonic_init
-------------------

Initializes an ultrasonic sensor on the specified ADI ports.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as an ultrasonic

Analogous to `pros::ADIUltrasonic::ADIUltrasonic <../cpp/adi.html#id22>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        ext_adi_ultrasonic_t ext_adi_ultrasonic_init (uint8_t smart_port,
                                              uint8_t port_ping,
                                              uint8_t port_echo )

   .. tab :: Example
      .. highlight:: c
      ::

        #define PORT_PING 1
        #define PORT_ECHO 2
        #define ADI_EXPANDER_PORT 20

        void opcontrol() {
          ext_adi_ultrasonic_t ult = ext_adi_ultrasonic_init(ADI_EXPANDER_PORT, PORT_PING, PORT_ECHO);
          while (true) {
            // Print the distance read by the ultrasonic
            printf("Distance: %d\n", ext_adi_ultrasonic_get(ult));
            delay(5);
          }
        }

============ =============================================================================================================
 Parameters
============ =============================================================================================================
 smart_port   The smart port number the ADI Expander is in
 port_ping    the port connected to the orange OUTPUT cable. This should be in port 1, 3, 5, or 7 ('A', 'C', 'E', 'G').
 port_echo    the port connected to the yellow INPUT cable. This should be in the next highest port following port_ping.
============ =============================================================================================================

**Returns:** An `ext_adi_ultrasonic_t`_ object to be stored and used for later calls to ultrasonic functions, or PROS_ERR if there was an error.

----

ext_adi_ultrasonic_shutdown
-----------------------

Stops and disables the ultrasonic sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as an ultrasonic

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ext_adi_ultrasonic_shutdown ( ext_adi_ultrasonic_t ult )

   .. tab :: Example
      .. highlight:: c
      ::

        #define PORT_PING 1
        #define PORT_ECHO 2
        #define ADI_EXPANDER_PORT 20

        void opcontrol() {
          ext_adi_ultrasonic_t ult = ext_adi_ultrasonic_init(ADI_EXPANDER_PORT, PORT_PING, PORT_ECHO);
          while (true) {
            // Print the distance read by the ultrasonic
            printf("Distance: %d\n", ext_adi_ultrasonic_get(ult));
            delay(5);
          }
          ext_adi_ultrasonic_shutdown(ult);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 ult          the `ext_adi_ultrasonic_t`_ object from `ext_adi_ultrasonic_init`_ to shut down, or simply the ADI port number
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

ext_adi_gyro_init
-------------

Initializes a gyroscope on the given port. If the given port has not
previously been configured as a gyro, then this function starts a 1 second
calibration period.

If calibration is required, it is highly recommended that this function be
called from initialize when the robot is stationary.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as a gyro

Analogous to `pros::ADIGyro::ADIGyro <../cpp/adi.html#>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        ext_adi_gyro_t ext_adi_gyro_init ( uint8_t smart_port,
                                   uint8_t adi_port,
                                   double multiplier )

   .. tab :: Example
      .. highlight:: c
      ::

        #define GYRO_PORT 1
        #define GYRO_MULTIPLIER 1 // Standard behavior
        #define ADI_EXPANDER_PORT 20

        void opcontrol() {
          ext_adi_gyro_t gyro = ext_adi_gyro_init(ADI_EXPANDER_PORT, GYRO_PORT, GYRO_MULTIPLIER);
          while (true) {
            // Print the gyro's heading
            printf("Heading: %lf\n", ext_adi_gyro_get(gyro));
            delay(5);
          }
        }

============ =============================================================================================================
 Parameters
============ =============================================================================================================
 smart_port   The smart port number the ADI Expander is in
 adi_port     The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to initialize as a gyro
 multiplier   A scalar value that will be mutliplied by the gyro heading value
============ =============================================================================================================

**Returns:** An `ext_adi_gyro_t`_ object to be stored and used for later calls to gyro functions, or PROS_ERR if there was an error.

----

ext_adi_gyro_get 
------------

Gets the current gyro angle in tenths of a degree. Unless a multiplier is
applied to the gyro, the return value will be a whole number representing
the number of degrees of rotation times 10.

There are 360 degrees in a circle, thus the gyro will return 3600 for one
whole rotation.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as a gyro

Analogous to `pros::ADIGyro::get_value <../cpp/adi.html#>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double ext_adi_gyro_get ( ext_adi_gyro_t gyro )

   .. tab :: Example
      .. highlight:: c
      ::

        #define GYRO_PORT 1
        #define GYRO_MULTIPLIER 1 // Standard behavior
        #define ADI_EXPANDER_PORT 20

        void opcontrol() {
          ext_adi_gyro_t gyro = ext_adi_gyro_init(ADI_EXPANDER_PORT, GYRO_PORT, GYRO_MULTIPLIER);
          while (true) {
            // Print the gyro's heading
            printf("Heading: %lf\n", ext_adi_gyro_get(gyro));
            delay(5);
          }
        }

============ =============================================================================================================
 Parameters
============ =============================================================================================================
  gyro        The `ext_adi_gyro_t` object for which the heading will be returned
============ =============================================================================================================

**Returns:** The gyro angle in tenths of a degree.

----

ext_adi_gyro_reset 
--------------

Resets the gyro value to zero.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as a gyro

Analogous to `pros::ADIGyro::reset <../cpp/adi.html#>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t ext_adi_gyro_reset ( ext_adi_gyro_t gyro )

   .. tab :: Example
      .. highlight:: c
      ::

        #define GYRO_PORT 1
        #define GYRO_MULTIPLIER 1 // Standard behavior
        #define ADI_EXPANDER_PORT 20

        void opcontrol() {
          ext_adi_gyro_t gyro = ext_adi_gyro_init(ADI_EXPANDER_PORT, GYRO_PORT, GYRO_MULTIPLIER);
          uint32_t now = millis();
          while (true) {
            // Print the gyro's heading
            printf("Heading: %lf\n", ext_adi_gyro_get(gyro));

            if (millis() - now > 2000) {
              // Reset the gyro every 2 seconds
              ext_adi_gyro_reset(gyro);
              now = millis();
            }

            delay(5);
          }
        }

============ =============================================================================================================
 Parameters
============ =============================================================================================================
 gyro         The `ext_adi_gyro_t` object to reset
============ =============================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

ext_adi_gyro_shutdown
-----------------

Disables the gyro and voids the configuration on its port.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given port is not within the range of ADI Ports
- ``EADDRINUSE``  - The port is not configured as a gyro

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t ext_adi_gyro_shutdown ( ext_adi_gyro_t gyro )

   .. tab :: Example
      .. highlight:: c
      ::

        #define GYRO_PORT 1
        #define GYRO_MULTIPLIER 1 // Standard behavior
        #define ADI_EXPANDER_PORT 20

        void opcontrol() {
          ext_adi_gyro_t gyro = ext_adi_gyro_init(ADI_EXPANDER_PORT, GYRO_PORT, GYRO_MULTIPLIER);
          uint32_t now = millis();
          while (true) {
            // Print the gyro's heading
            printf("Heading: %lf\n", ext_adi_gyro_get(gyro));

            if (millis() - now > 2000) {
              ext_adi_gyro_shutdown(gyro);
              // Shut down the gyro after two seconds
              break;
            }

            delay(5);
          }
        }

============ =============================================================================================================
 Parameters
============ =============================================================================================================
 gyro         The `ext_adi_gyro_t` object to shut down
============ =============================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

Macros
======

HIGH
----

Used for `ext_adi_digital_write`_ to specify a logic HIGH state to output.

In reality, using any non-zero expression or "true" will work to set a pin to HIGH.

**Value:** 1

INPUT
-----

`ext_adi_pin_mode`_ state for a digital input.

**Value:** 0x00

INPUT_ANALOG
------------

`ext_adi_pin_mode`_ state for an analog input.

**Value:** 0x02

LOW
---

Used for `ext_adi_digital_write`_ to specify a logic LOW state to output.

In reality, using a zero expression or "false" will work to set a pin to LOW.

**Value:** 0

NUM_ADI_PORTS
-------------

The number of ADI ports available on the V5 Brain (from 1-8, 'a'-'h', 'A'-'H').

**Value:** 8

OUTPUT
------

`ext_adi_pin_mode`_ state for a digital output.

**Value:** 0x01

OUTPUT_ANALOG
-------------

`ext_adi_pin_mode`_ state for an analog output.

**Value:** 0x03

Enumerated Values
=================

ext_adi_port_config_e_t
-------------------

::

	typedef enum ext_adi_port_config_e {
		E_ADI_ANALOG_IN = 0,
		E_ADI_ANALOG_OUT,
		E_ADI_DIGITAL_IN,
		E_ADI_DIGITAL_OUT,

		E_ADI_LEGACY_GYRO,
		E_ADI_LEGACY_ACCELEROMETER,

		E_ADI_LEGACY_SERVO,
		E_ADI_LEGACY_PWM,

		E_ADI_LEGACY_ENCODER,
		E_ADI_LEGACY_ULTRASONIC,

		E_ADI_TYPE_UNDEFINED = 255,
		E_ADI_ERR = PROS_ERR
	} ext_adi_port_config_e_t;

============================= ================================================================
 Value
============================= ================================================================
 E_ADI_ANALOG_IN               Configures the ADI port as an analog input
 E_ADI_ANALOG_OUT              Configures the ADI port as an analog output
 E_ADI_DIGITAL_IN              Configures the ADI port as a digital input
 E_ADI_DIGITAL_OUT             Configures the ADI port as a digital output
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
