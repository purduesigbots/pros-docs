==========
Legacy API
==========

.. note:: Using this functionality requires including ``"pros/api_legacy.h"`` in
          addition to ``"api.h"``.

ADI Functions
=============

analogCalibrate
---------------

Calibrates the analog sensor on the specified channel.

This method assumes that the true sensor value is not actively changing at this time and
computes an average from approximately 500 samples, 1 ms apart, for a 0.5 s period of
calibration. The average value thus calculated is returned and stored for later calls to the
`adi_analog_read_calibrated`_ and `adi_analog_read_calibrated_HR`_ functions. These functions will return
the difference between this value and the current sensor value when called.

Do not use this function when the sensor value might be unstable
(gyro rotation, accelerometer movement).

.. note::
   The ADI currently returns data at 50msintervals, despite the calibrate function's
   1ms sample rate. This sample rate was kept for the sake of being similar to PROS
   2, and increasing the sample rate would not have a tangible difference in the
   function's performance.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The port number is out of range or the port is not configured to be an analog input.

Analogous to `adi_analog_calibrate <./c/adi.html#adi-analog-calibrate>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t analogCalibrate (uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          analogCalibrate(ANALOG_SENSOR_PORT);
          printf("Calibrated Reading: %d\n", analogReadCalibrated(ANALOG_SENSOR_PORT));
          // All readings from then on will be calibrated
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to calibrate
============ =================================================================================================================

**Returns:** The average sensor value computed by this function.

----

analogRead
----------

Reads an analog input channel and returns the 12-bit value.

The value returned is undefined if the analog pin has been switched to a different mode.
The meaning of the returned value varies depending on the sensor attached.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The port number is out of range or the port is not configured to be an analog input.

Analogous to `adi_analog_read <./c/adi.html#adi-analog-read>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t analogRead (uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        #define ANALOG_SENSOR_PORT 1

        void opcontrol() {
          while (true) {
            printf("Sensor Reading: %d\n", analogRead(ANALOG_SENSOR_PORT));
            delay(50);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to read
============ =================================================================================================================

**Returns:** The analog sensor value, where a value of 0 reflects an input voltage of nearly 0 V
and a value of 4095 reflects an input voltage of nearly 5 V

----

analogReadCalibrated
--------------------

Reads the calibrated value of an analog input channel.

The `analogCalibrate`_ function must be run first on that channel. This function is
inappropriate for sensor values intended for integration, as round-off error can accumulate
causing drift over time. Use `analogReadCalibratedHR`_ instead.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The port number is out of range or the port is not configured to be an analog input.

Analogous to `adi_analog_read_calibrated <./c/adi.html#adi-analog-read-calibrated>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t analogReadCalibrated (uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        #define ANALOG_SENSOR_PORT 1

        void opcontrol() {
          while (true) {
            printf("Sensor Reading: %d\n", analogReadCalibrated(ANALOG_SENSOR_PORT));
            delay(50);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to read
============ =================================================================================================================

**Returns:** The difference of the sensor value from its calibrated default from -4095 to 4095.

----

analogReadCalibratedHR
----------------------

Reads the calibrated value of an analog input channel 1-8 with enhanced precision.

The `adi_analog_calibrate`_ function must be run first. This is intended for integrated sensor
values such as gyros and accelerometers to reduce drift due to round-off, and should not be
used on a sensor such as a line tracker or potentiometer.

The value returned actually has 16 bits of "precision", even though the ADC only reads
12 bits, so that errors induced by the average value being between two values come out
in the wash when integrated over time. Think of the value as the true value times 16.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The port number is out of range or the port is not configured to be an analog input.

Analogous to `adi_analog_read_calibrated_HR <./c/adi.html#adi-analog-read-calibrated-hr>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t analogReadCalibratedHR (uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        #define ANALOG_SENSOR_PORT 1

        void opcontrol() {
          while (true) {
            analogCalibrate(ANALOG_SENSOR_PORT);
            printf("Sensor Reading: %d\n", analogReadCalibratedHR(ANALOG_SENSOR_PORT));
            delay(50);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to read
============ =================================================================================================================

**Returns:** The difference of the sensor value from its calibrated default from -16384 to 16384.

----

digitalRead
-----------

Gets the digital value (1 or 0) of a pin configured as a digital input.

If the pin is configured as some other mode, the digital value which reflects the current
state of the pin is returned, which may or may not differ from the currently set value. The
return value is undefined for pins configured as Analog inputs.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The port number is out of range or the port is not configured to be a digital input.

Analogous to `adi_digital_read <./c/adi.html#adi-digital-read>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t digitalRead (uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        #define DIGITAL_SENSOR_PORT 1

        void opcontrol() {
          while (true) {
            printf("Sensor Value: %d\n", digitalRead(DIGITAL_SENSOR_PORT));
            delay(50);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to read
============ =================================================================================================================

**Returns:** True if the pin is `HIGH <./c/adi.html#high>`_, or false if it is `LOW <./c/adi.html#low>`_.

----

digitalWrite
------------

Sets the digital value (1 or 0) of a pin configured as a digital output.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The port number is out of range or the port is not configured to be a digital output.

Analogous to `adi_digital_write <./c/adi.html#digital-write>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t digitalWrite (uint8_t port,
                             const bool value )

   .. tab :: Example
      .. highlight:: c
      ::

        #define DIGITAL_SENSOR_PORT

        void opcontrol() {
          bool state = LOW;
          while (true) {
            state != state;
            digitalWrite(DIGITAL_SENSOR_PORT, state);
            delay(50); // toggle the sensor value every 50ms
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to write to
 value        an expression evaluating to "true" or "false" to set the output to HIGH or LOW
              respectively, or the constants HIGH or LOW themselves
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

encoderGet
----------

Gets the number of ticks recorded by the encoder.

There are 360 ticks in one revolution.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The encoder port number is out of range or the port is not configured to be an encoder.

Analogous to `adi-encoder-get <./c/adi.html#adi-encoder-get>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t encoderGet ( Encoder enc )

   .. tab :: Example
      .. highlight:: c
      ::

        #define PORT_TOP 1
        #define PORT_BOTTOM 2

        void opcontrol() {
          Encoder enc = encoderInit(PORT_TOP, PORT_BOTTOM, false);
          while (true) {
            printf("Encoder Value: %d\n", encoderGet(enc));
            delay(50);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 enc          the ``Encoder`` object from `encoderInit`_ to read, or simply the ADI port number
============ =================================================================================================================

**Returns:** The signed and cumulative number of counts since the last start or reset.

----

encoderInit
-----------

Initializes and enables a quadrature encoder on two ADI ports.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given ports do not match the criteria in the parameter list below.

Analogous to `adi_encoder_init <./c/adi.html#adi-encoder-init>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        Encoder encoderInit (uint8_t port_top,
                             uint8_t port_bottom,
                             const bool reverse )

   .. tab :: Example
      .. highlight:: c
      ::

        #define PORT_TOP 1
        #define PORT_BOTTOM 2

        void opcontrol() {
          Encoder enc = encoderInit(PORT_TOP, PORT_BOTTOM, false);
          while (true) {
            printf("Encoder Value: %d\n", encoderGet(enc));
            delay(50);
          }
        }

============ ====================================================================================================================================
 Parameters
============ ====================================================================================================================================
 port_top     the "top" wire from the encoder sensor with the removable cover side UP. This should be in port 1, 3, 5, or 7 ('A', 'C', 'E', 'G').
 port_bottom  the "bottom" wire from the encoder sensor
 reverse      if "true", the sensor will count in the opposite direction
============ ====================================================================================================================================

**Returns:** An `Encoder`_ object to be stored and used for later calls to encoder functions.

----

encoderReset
------------

Resets the encoder to zero.

It is safe to use this method while an encoder is enabled. It is not necessary to call this
method before stopping or starting an encoder.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The encoder port number is out of range or the port is not configured to be an encoder.

Analogous to `adi_encoder_reset <./c/adi.html#adi-encoder-reset>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t encoderReset ( Encoder enc )

   .. tab :: Example
      .. highlight:: c
      ::

        #define PORT_TOP 1
        #define PORT_BOTTOM 2

        void opcontrol() {
          Encoder enc = encoderInit(PORT_TOP, PORT_BOTTOM, false);
          delay(1000); // Move the encoder around in this time
          encoderReset(enc); // The encoder is now zero again
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 enc          the ``Encoder`` object from `encoderInit`_ to reset or simply the ADI port number
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

encoderShutdown
---------------

Stops and disables the encoder.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The encoder port number is out of range or the port is not configured to be an encoder.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t encoderShutdown ( Encoder enc )

   .. tab :: Example
      .. highlight:: c
      ::

        #define PORT_TOP 1
        #define PORT_BOTTOM 2

        void opcontrol() {
          Encoder enc = encoderInit(PORT_TOP, PORT_BOTTOM, false);
          // Use the encoder
          encoderShutdown(enc);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 enc          the `Encoder`_ object from `adi_encoder_init`_ to shut down, or simply the ADI port number
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

adiMotorGet
-----------

Returns the last set speed of the motor on the given port.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The port number is out of range or the port is not configured as a motor.

Analogous to `adi_motor_get <./c/adi.html#adi-motor-get>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t adiMotorGet ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        #define MOTOR_PORT 1

        void opcontrol() {
          adiMotorSet(MOTOR_PORT, 127); // Go full speed forward
          printf("Commanded Motor Power: %d\n", adiMotorGet(MOTOR_PORT)); // Will display 127
          delay(1000);
          adiMotorSet(MOTOR_PORT, 0); // Stop the motor
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to get
============ =================================================================================================================

**Returns:** The last set speed of the motor on the given port.

----

adiMotorSet
-----------

Sets the speed of the motor on the given port.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The port number is out of range or the port is not configured as a motor.

Analogous to `adi_motor_set <./c/adi.html#adi-motor-set>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t adiMotorSet ( uint8_t port,
                             const int8_t speed )

   .. tab :: Example
      .. highlight:: c
      ::

        #define MOTOR_PORT 1

        void opcontrol() {
          adiMotorSet(MOTOR_PORT, 127); // Go full speed forward
          delay(1000);
          adiMotorSet(MOTOR_PORT, 0); // Stop the motor
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to set
 speed        the new signed speed; -127 is full reverse and 127 is full forward, with 0 being off
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise

----

adiMotorStop
------------

Stops the motor on the given port.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The port number is out of range or the port is not configured as a motor.

Analogous to `adi_motor_stop <./c/adi.html#adi-motor-stop>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t adi_motor_stop (uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        #define MOTOR_PORT 1

        void opcontrol() {
          adi_motor_set(MOTOR_PORT, 127); // Go full speed forward
          delay(1000);
          // adi_motor_set(MOTOR_PORT, 0); // Stop the motor
          adi_motor_stop(MOTOR_PORT); // use this instead
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to stop
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

pinMode
-------

Configures the pin as an input or output with a variety of settings.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The port number is out of range.

Analogous to `adi_pin_mode <./c/adi.html#adi-pin-mode>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t pinMode ( uint8_t port,
                         const unsigned char mode )

   .. tab :: Example
      .. highlight:: c
      ::

        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          pinMode(ANALOG_SENSOR_PORT, INPUT_ANALOG);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') to configure
 mode         one of `INPUT <./c/adi.html#input>`_, `INPUT_ANALOG <./c/adi.html#input-analog>`_,
              `OUTPUT <./c/adi.html#output>`_, or `OUTPUT_ANALOG <./c/adi.html#output-analog>`_
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

ultrasonicGet
-------------

Gets the current ultrasonic sensor value in centimeters.

If no object was found, zero is returned. If the ultrasonic sensor was never started, the
return value is PROS_ERR. Round and fluffy objects can cause inaccurate values to be
returned.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The ultrasonic port number is out of range or the ultrasonic port is not properly configured.

Analogous to `adi_ultrasonic_get <./c/adi.html#adi-ultrasonic-get>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ultrasonicGet ( Ultrasonic ult )

   .. tab :: Example
      .. highlight:: c
      ::

        #define PORT_ECHO 1
        #define PORT_PING 2

        void opcontrol() {
          Ultrasonic ult = ultrasonicInit(PORT_ECHO, PORT_PING);
          while (true) {
            // Print the distance read by the ultrasonic
            printf("Distance: %d\n", ultrasonicGet(ult));
            delay(50);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 ult          the Ultrasonic object from `ultrasonicInit`_ to read, or simply the ADI port number
============ =================================================================================================================

**Returns:** The distance to the nearest object in centimeters.

----

ultrasonicInit
--------------

Initializes an ultrasonic sensor on the specified ADI ports.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given ports do not match the parameter criteria given below.

Analogous to `adi_ultrasonic_init <./c/adi.html#adi-ultrasonic-init>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        Ultrasonic ultrasonicInit ( uint8_t port_echo,
                                    uint8_t port_ping )

   .. tab :: Example
      .. highlight:: c
      ::

        #define PORT_ECHO 1
        #define PORT_PING 2

        void opcontrol() {
          Ultrasonic ult = ultrasonicInit(PORT_ECHO, PORT_PING);
          while (true) {
            // Print the distance read by the ultrasonic
            printf("Distance: %d\n", ultrasonicGet(ult));
            delay(50);
          }
        }

============ =============================================================================================================
 Parameters
============ =============================================================================================================
 port_echo    the port connected to the yellow INPUT cable. This should be in port 1, 3, 5, or 7 ('A', 'C', 'E', 'G').
 port_ping    the port connected to the orange OUTPUT cable. This should be in the next highest port following port_echo.
============ =============================================================================================================

**Returns:** An `Ultrasonic`_ object to be stored and used for later calls to ultrasonic functions.

----

ultrasonicShutdown
------------------

Stops and disables the ultrasonic sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The ultrasonic port number is out of range or the ultrasonic port is not properly configured.

Analogous to `adi_ultrasonic_shutdown <./c/adi.html#adi-ultrasonic-shutdown>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t ultrasonicShutdown ( Ultrasonic ult )

   .. tab :: Example
      .. highlight:: c
      ::

        #define PORT_ECHO 1
        #define PORT_PING 2

        void opcontrol() {
          Ultrasonic ult = ultrasonicInit(PORT_ECHO, PORT_PING);
          while (true) {
            // Print the distance read by the ultrasonic
            printf("Distance: %d\n", ultrasonicGet(ult));
            delay(50);
          }
          ultrasonicShutdown(ult);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 ult          the `Ultrasonic`_ object from `ultrasonicInit`_ to shut down, or simply the ADI port number
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

LCD Functions
=============

lcdClear
--------

Clear the text on the emulated three-button LCD screen.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO``  - The LCD has not been initialized. Call `lcd_initialize`_ first.

Analogous to `lcd_clear <./c/llemu.html#lcd-clear>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         bool lcd_clear ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          lcd_initialize();
          lcd_set_text(1, "Hello World!");
          lcd_clear(); // No more text will be displayed
        }

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.

----

lcdClearLine
------------

Clears a line on the emulated three-button LCD screen.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO``  - The LCD has not been initialized. Call `lcd_initialize`_ first.
- ``EINVAL`` - The line number specified is not in the range [0-7]

Analogous to `lcd_clear_line <./c/llemu.html#lcd-clear-line>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         bool lcdClearLine ( int16_t line )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          lcdInit();
          lcdSetText(1, "Hello World!");
          lcdClearLine(1); // No more text will be displayed
        }

============ ===================
 Parameters
============ ===================
 line         The line to clear
============ ===================

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.

----

lcdInit
-------------

Initialize the display to be an emulation of the three-button, UART-based VEX LCD.

Analogous to `lcd_initialize <./c/llemu.html#lcd-initialize>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         bool lcdInit ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          lcdInit();
          lcdSetText(1, "Hello World!");
        }

**Returns:** ``true`` if the LCD was successfully initialized, or ``false`` if it has already been initialized.

----

lcdIsInitialized
----------------

Determines whether the emulated three-button LCD has already been initialized.

Analogous to `lcd_is_initialized <./c/llemu.html#lcd-is-initialized>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         bool lcdIsInitialized ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          lcdInit();
          printf("Is the LCD initialized? %d\n", lcdIsInitialized());
          // Will Display True
        }

**Returns:** True if the LCD has been initialized or false if not.

----

lcdPrint
---------

Displays a formatted string on the emulated three-button LCD screen

This function uses the following values of ``errno`` when an error state is
reached:

- ``ENXIO``  - The LCD has not been initialized. Call `lcdInit`_ first.
- ``EINVAL`` - The line number specified is not in the range [0-7]

Analogous to `lcd_print <./c/llemu.html#lcd-print>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        bool lcdPrint ( int16_t line,
                        const char* fmt,
                        ... )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          lcdInit();
          while (true) {
            lcdPrint(0, "Buttons Bitmap: %d\n", lcd_read_buttons());
            delay(20);
          }
        }

============ ==================================================
 Parameters
============ ==================================================
 line         The line on which to display the text [0-7]
 fmt          Format string
 ...          Optional list of arguments for the format string
============ ==================================================

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.

----

lcdReadButtons
--------------

Reads the button status from the emulated three-button LCD.

The value returned is a 3-bitinteger where ``1 0 0`` indicates the left button
is pressed, ``0 1 0`` indicates the center button is pressed, and ``0 0 1``
indicates the right button is pressed. ``0`` is returned if no buttons are
currently being pressed.

Note that this function is provided for legacy API compatibility purposes,
with the caveat that the V5 touch screen does not actually support pressing
multiple points on the screen at the same time.

Analogous to `lcd_read_buttons <./c/llemu.html#lcd-read-buttons>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint8_t lcdReadButtons ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          lcdInit();
          while (true) {
            printf("Buttons Bitmap: %d\n", lcdReadButtons());
            delay(20);
          }
        }

**Returns:** The buttons pressed as a bit mask.

----

lcdSetText
----------

Displays a string on the emulated three-button LCD screen

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO``  - The LCD has not been initialized. Call `lcdInit`_ first.
- ``EINVAL`` - The line number specified is not in the range [0-7]

Analogous to `lcd_set_text <./c/llemu.html#lcd-set-text>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         bool lcdSetText ( int16_t line,
                           const char* text )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          lcd_initialize();
          lcd_set_text(1, "Hello World!");
        }

============ =============================================
 Parameters
============ =============================================
 line         The line on which to display the text [0-7]
 text         The text to display
============ =============================================

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.

----

lcdShutdown
------------

Turn off the Legacy LCD Emulator.

Calling this function will clear the entire display, and you will not be able
to call any further LLEMU functions until another call to `lcdInit`_.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The LCD has not been initialized. Call `lcdInit`_ first.

Analogous to `lcd_print <./c/llemu.html#lcd-print>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         bool lcdShutdown ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          lcdInit();
          lcdSetText(1, "Hello World!");
          lcdShutdown(); // All done with the LCD
        }

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.

----

Miscellaneous Functions
=======================

isAutonomous
------------

Analogous to `isAutonomous <./c/misc.html#is-autonomous>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        bool isAutonomous ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* ignore) {
          while (!isAutonomous()) {
            // Wait to do anything until autonomous starts
            delay(2);
          }
          while (isAutonomous()) {
            // Run whatever code is desired to just execute in autonomous
          }
        }

        void initialize() {
          TaskHandle my_task = taskCreate(my_task_fn, NULL, TASK_PRIO_DEFAULT, TASK_STACK_DEPTH_DEFAULT, "My Task");
        }

**Returns:** True if the V5 Brain is in autonomous mode, false otherwise.

----

isOnline
--------

Analogous to `isOnline <./c/misc.html#is-online>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        bool isOnline ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          if (isOnline()) {
            // Field Control is Connected
            // Run LCD Selector code or similar
          }
        }

**Returns:** True if the V5 Brain is connected to competition control, false otherwise.

----

isEnabled
---------

Returns the opposite of `isDisabled <./c/misc.html#is-disabled>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        bool isEnabled ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* ignore) {
          while (isEnabled()) {
            // Run competition tasks (like Lift Control or similar)
          }
        }

        void initialize() {
          TaskHandle my_task = taskCreate(my_task_fn, NULL, TASK_PRIO_DEFAULT, TASK_STACK_DEPTH_DEFAULT, "My Task");
        }

**Returns:** True if the V5 Brain is disabled, false otherwise.

----

joystickGetAnalog
-----------------

Gets the value of an analog channel (joystick) on a controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - A value other than ``E_CONTROLLER_MASTER`` or ``E_CONTROLLER_PARTNER`` is given.
- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to controller_get_analog <./c/misc.html#controller-get-analog>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t joystickGetAnalog ( controller_id_e_t id,
                                   controller_analog_e_t channel )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, joystickGetAnalog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            delay(2);
          }
        }

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 id           The ID of the controller (e.g. the master or partner controller).
              Must be one of `CONTROLLER_MASTER <controller_id_e_t>`_ or `CONTROLLER_PARTNER <controller_id_e_t>`_
 channel      The analog channel to get.
              Must be one of `ANALOG_LEFT_X <controller_analog_e_t>`_, `ANALOG_LEFT_Y <controller_analog_e_t>`_,
              `ANALOG_RIGHT_X <controller_analog_e_t>`_, `ANALOG_RIGHT_Y <controller_analog_e_t>`_
============ ======================================================================================================

**Returns:** The current reading of the analog channel: [-127, 127].
If the controller was not connected, then 0 is returned

----

joystickGetDigital
------------------

Gets the value of an digital channel (button) on a controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - A value other than ``E_CONTROLLER_MASTER`` or ``E_CONTROLLER_PARTNER`` is given.
- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to joystickGetDigital <./c/misc.html#joystickGetDigital>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t joystickGetDigital ( controller_id_e_t id,
                                    controller_digital_e_t button )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            if (joystickGetDigital(E_CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_A)) {
              adiMotorSet(1, 100);
            }
            else {
              adiMotorSet(1, 0);
            }

            delay(2);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 id           The ID of the controller (e.g. the master or partner controller).
              Must be one of `CONTROLLER_MASTER <controller_id_e_t>`_ or `CONTROLLER_PARTNER <controller_id_e_t>`_
 button       The button to read. Must be one of `DIGITAL_{RIGHT,DOWN,LEFT,UP,A,B,Y,X,R1,R2,L1,L2} <controller_digital_e_t>`_
============ =================================================================================================================

**Returns:** 1 if the button on the controller is pressed.
If the controller was not connected, then 0 is returned

----

joystickIsConnected
-------------------

Returns 0 or 1 if the controller is connected.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - A value other than ``E_CONTROLLER_MASTER`` or ``E_CONTROLLER_PARTNER`` is given.
- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `controller_is_connected <./c/misc.html#controller-is-connected>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t joystickIsConnected ( controller_id_e_t id )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            if (joystickIsConnected(E_CONTROLLER_PARTNER)) {
              // Use a two controller control scheme
            }
            else {
              // Just use a single controller control scheme
            }

            delay(2);
          }
        }

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 id           The ID of the controller (e.g. the master or partner controller).
              Must be one of `CONTROLLER_MASTER <controller_id_e_t>`_ or `CONTROLLER_PARTNER <controller_id_e_t>`_
============ ======================================================================================================

**Returns:** 1 if the controller is connected, 0 otherwise

----

RTOS Functions
==============

mutexCreate
-----------

Creates a mutex.

See :doc:`../tutorials/topical/multitasking` for details.

Analogous to `mutex_create <./c/rtos.html#mutex-create>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         mutex_t mutexCreate ( )

   .. tab :: Example
      .. highlight:: c
      ::

        Mutex mutex = mutexCreate();

        // Acquire the mutex; other tasks using this command will wait until the mutex is released
        // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
        // If the timeout expires, "false" will be returned, otherwise "true"
        mutexTake(mutex, MAX_DELAY);
        // do some work
        // Release the mutex for other tasks
        mutexGive(mutex);

**Returns:**  A handle to a newly created mutex. If an error occurred, NULL will be
returned and ``errno`` can be checked for hints as to why `mutexCreate`_ failed.

----

mutexGive
---------

Unlocks a mutex.

See :doc:`../tutorials/topical/multitasking` for details.

Analogous to `mutex_give <./c/rtos.html#mutex-give>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         bool mutexGive ( mutex_t mutex )

   .. tab :: Example
      .. highlight:: c
      ::

        Mutex mutex = mutexCreate();

        // Acquire the mutex; other tasks using this command will wait until the mutex is released
        // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
        // If the timeout expires, "false" will be returned, otherwise "true"
        mutexTake(mutex, timeout);
        // do some work
        // Release the mutex for other tasks
        mutexGive(mutex);

============ =====================
 Parameters
============ =====================
 mutex        The mutex to unlock
============ =====================

**Returns:** True if the mutex was successfully returned, false otherwise. If false
is returned, then ``errno`` is set with a hint about why the mutex couldn't
be returned.

----

mutexTake
---------

Takes and locks a mutex, waiting for up to a certain number of milliseconds
before timing out.

See :doc:`../tutorials/topical/multitasking` for details.

Analogous to `mutex_take <./c/rtos.html#mutex-take>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        bool mutexTake ( mutex_t mutex,
                         uint32_t timeout )

   .. tab :: Example
      .. highlight:: c
      ::

        Mutex mutex = mutexCreate();

        // Acquire the mutex; other tasks using this command will wait until the mutex is released
        // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
        // If the timeout expires, "false" will be returned, otherwise "true"
        mutexTake(mutex, timeout);
        // do some work
        // Release the mutex for other tasks
        mutexGive(mutex);

============ ==============================================================================================
 Parameters
============ ==============================================================================================
 mutex        The mutex to take.
 timeout      Time to wait before the mutex becomes available.

              A timeout of 0 can be used to poll the mutex. TIMEOUT_MAX can be used to block indefinitely.
============ ==============================================================================================

**Returns:** True if the mutex was successfully taken, false otherwise. If false
is returned, then ``errno`` is set with a hint about why the the mutex
couldn't be taken.

----

taskCreate
----------

Create a new task and add it to the list of tasks that are ready to run.

Analogous to `task_create <./c/rtos.html#task-create>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        task_t taskCreate ( task_fn_t function,
                            void* parameters,
                            uint8_t prio,
                            uint16_t stack_depth,
                            const char* name )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* param) {
          printf("Hello %s\n", (char*)param);
          // ...
        }
        void initialize() {
          TaskHandle my_task = taskCreate(my_task_fn, TASK_STACK_DEPTH_DEFAULT, NULL, TASK_PRIORITY_DEFAULT);
        }

================= ===============================================================================================================================================================================================================
 Parameters
================= ===============================================================================================================================================================================================================
 function          Pointer to the task entry function
 parameters        Pointer to memory that will be used as a parameter for the task being created. This memory should not typically come from stack, but rather from dynamically (i.e., malloc'd) or statically allocated memory.
 prio              The priority at which the task should run. TASK_PRIO_DEFAULT plus/minus 1 or 2 is typically used.
 stack_depth       The number of words (i.e. 4 * stack_depth) available on the task's stack. TASK_STACK_DEPTH_DEFAULT is typically sufficient.
================= ===============================================================================================================================================================================================================

**Returns:** Will return a handle by which the newly created task can be referenced.
If an error occurred, NULL will be returned and ``errno`` can be checked for hints
as to why `task_create`_ failed.

----

taskDelay
---------

Delay a task for a given number of milliseconds.

This is not the best method to have a task execute code at predefined
intervals, as the delay time is measured from when the delay is requested.
To delay cyclically, use `taskDelayUntil`_.

Analogous to `task_delay <./c/rtos.html#task-delay>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         void taskDelay ( const uint32_t milliseconds )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            // Do opcontrol things
            taskDelay(2);
          }
        }

============== ===================================================================
 Parameters
============== ===================================================================
 milliseconds  The number of milliseconds to wait (1000 milliseconds per second)
============== ===================================================================

----

taskDelayUntil
--------------

Delay a task until a specified time.  This function can be used by periodic
tasks to ensure a constant execution frequency.

The task will be woken up at the time ``*prev_time + delta``, and ``*prev_time`` will
be updated to reflect the time at which the task will unblock.

Analogous to task_delay_until <./c/rtos.html#task-delay-until>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void taskDelayUntil ( uint32_t* const prev_time,
                              const uint32_t delta )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
          while (true) {
            // Do opcontrol things
            taskDelayUntil(&now, 2);
          }
        }

============ ===================================================================
 Parameters
============ ===================================================================
 prev_time    A pointer to the location storing the setpoint time
 delta        The number of milliseconds to wait (1000 milliseconds per second)
============ ===================================================================

----

taskDelete
----------

Remove a task from the RTOS real time kernel's management.  The task being
deleted will be removed from all ready, blocked, suspended and event lists.

Memory dynamically allocated by the task is not automatically freed, and
should be freed before the task is deleted.

Analogous to task_delete <./c/rtos.html#task-delete>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void taskDelete ( TaskHandle task )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* param) {
          printf("Hello %s\n", (char*)param);
          // ...
        }
        void initialize() {
          TaskHandle my_task = taskCreate(my_task_fn, TASK_STACK_DEPTH_DEFAULT, "PROS", TASK_PRIORITY_DEFAULT);
          // Do other things
          taskDelete(my_task);
        }

============ ================================================================================================
 Parameters
============ ================================================================================================
 task         The handle of the task to be deleted.  Passing NULL will cause the calling task to be deleted.
============ ================================================================================================

----

taskGetCount
------------

Returns the number of tasks the kernel is currently managing, including all
ready, blocked, or suspended tasks. A task that has been deleted, but not yet
reaped by the idle task will also be included in the count. Tasks recently
created may take one context switch to be counted.

Analogous to task_get_count <./c/rtos.html#task-get-count>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

          uint32_t taskGetCount ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* param) {
          printf("Hello %s\n", (char*)param);
          // ...
        }
        void initialize() {
          TaskHandle my_task = taskCreate(my_task_fn, TASK_STACK_DEPTH_DEFAULT, "PROS", TASK_PRIORITY_DEFAULT);
          printf("Number of Running Tasks: %d\n", taskGetCount());
        }

**Returns:** The number of tasks that are currently being managed by the kernel

----

taskGetPriority
---------------

Obtains the priority of the specified task.

Analogous to task_get_priority <./c/rtos.html#task-get-priority>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

          uint32_t taskGetPriority ( TaskHandle task )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* param) {
          printf("Hello %s\n", (char*)param);
          // ...
        }
        void initialize() {
          TaskHandle my_task = taskCreate(my_task_fn, TASK_STACK_DEPTH_DEFAULT, "PROS", TASK_PRIORITY_DEFAULT);
          printf("Task Priority: %d\n", taskGetPriority(my_task));
        }

============ ==================================
 Parameters
============ ==================================
 task        The handle of the task to check
============ ==================================

**Returns:** The priority of the task.

----

taskGetState
------------

Returns the state of the specified task.

Analogous to task_get_state <./c/rtos.html#task-get-state>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

          task_state_e_t taskGetState ( TaskHandle task )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* param) {
          printf("Hello %s\n", (char*)param);
          // ...
        }
        void initialize() {
          TaskHandle my_task = taskCreate(my_task_fn, TASK_STACK_DEPTH_DEFAULT, "PROS", TASK_PRIORITY_DEFAULT);
          printf("Task's State: %d\n", taskGetState(my_task));
        }

============ ==================================
 Parameters
============ ==================================
 task        The handle of the task to check
============ ==================================

**Returns:** The state of the task. (see `task_state_e_t <./c/rtos.html#task-state-e-t>`_).

----

taskResume
-----------

Resumes the specified task, making it eligible to be scheduled.

Analogous to task_resume <./c/rtos.html#task-resume>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void taskResume ( TaskHandle task )

     .. tab :: Example
        .. highlight:: c
        ::

          void my_task_fn(void* ign) {
            // Do things
          }
          void opcontrol() {
            TaskHandle my_task = taskCreate(my_task_fn, TASK_STACK_DEPTH_DEFAULT, "PROS", TASK_PRIORITY_DEFAULT);
            // Do things
            taskSuspend(my_task); // The task will no longer execute
            // Do other things
            taskResume(my_task); // The task will resume execution
          }

============ ==================================
 Parameters
============ ==================================
 task        The handle of the task to resume
============ ==================================

----

taskSetPriority
---------------

Sets the priority of the specified task.

If the specified task's state is available to be scheduled (e.g. not blocked)
and new priority is higher than the currently running task, a context switch
may occur.

Analogous to task_set_priority <./c/rtos.html#task-set-priority>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void taskSetPriority ( TaskHandle task,
                               uint32_t prio )

     .. tab :: Example
        .. highlight:: c
        ::

          void my_task_fn(void* ign) {
            // Do things
          }
          void opcontrol() {
            TaskHandle my_task = taskCreate(my_task_fn, TASK_STACK_DEPTH_DEFAULT, "PROS", TASK_PRIORITY_DEFAULT);
            taskSetPriority(my_task, TASK_PRIORITY_DEFAULT + 1);
          }

============ ===============================
 Parameters
============ ===============================
 task         The handle of the task to set
 prio         The new priority of the task
============ ===============================

----

taskSuspend
------------

Suspends the current task, making it ineligible to be scheduled.

Analogous to task_suspend <./c/rtos.html#task-suspend>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void taskSuspend ( TaskHandle task )

     .. tab :: Example
        .. highlight:: c
        ::

          void my_task_fn(void* ign) {
            // Do things
          }
          void opcontrol() {
            TaskHandle my_task = taskCreate(my_task_fn, TASK_STACK_DEPTH_DEFAULT, "PROS", TASK_PRIORITY_DEFAULT);
            // Do things
            taskSuspend(my_task); // The task will no longer execute
            // Do other things
            taskResume(my_task); // The task will resume execution
          }

============ ==================================
 Parameters
============ ==================================
 task        The handle of the task to suspend
============ ==================================

----

motorSet
--------

Sets the voltage for the motor from -127 to 127.

This is designed to map easily to the input from the controller's analog
stick for simple opcontrol use.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_move <./c/motors.html#motor-move>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t motorSet ( uint8_t port,
                            const int8_t voltage )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motorSet(1, joystickGetAnalog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 voltage      The new motor voltage from -127 to 127
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

motorGet
--------

Gets the voltage delivered to the motor in mV.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

Analogous to `motor_get_voltage <./c/motors.html#motor-get-voltage>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double motorGet ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motorSet(1, joystickGetAnalog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            printf("Motor Voltage: %lf\n", motorGet(1));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The motor's voltage in mV or ``PROS_ERR_F`` if the operation failed,
setting ``errno``.

----

motorStop
---------

Sets the motor's output to zero.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given value is not within the range of V5 ports (1-21).
- ``EACCES``  - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t motorStop ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        void autonomous() {
          motorSet(1, 127);
          delay(1000); // Move for 1 second
          motorStop(1);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 voltage      The new motor voltage from -127 to 127
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

Typedefs
========

Encoder
-------

Reference type for an initialized encoder.

This merely contains the port number for the encoder, unlike its use as an
object to store encoder data in PROS 2.

::

	typedef int32_t Encoder;

TaskHandle
----------

Points to a task handle. Used for referencing a task.

::

  typedef void* TaskHandle;


Ultrasonic
----------

Reference type for an initialized ultrasonic.

This merely contains the port number for the ultrasonic, unlike its use as an
object to store encoder data in PROS 2.

::

	typedef int32_t Ultrasonic;
