.. highlight:: cpp
   :linenothreshold: 5

======================
ADI (TriPort) C++ API
======================

.. note:: Additional example code for this module can be found in
          `its Tutorial <../../tutorials/topical/adi.html>`_.

.. contents:: :local:

pros::ADIAnalogIn
=================

.. note::
   **ADIPotentiometer**, **ADILineSensor**, **ADILightSensor**, and **ADIAccelerometer**
   are all `pros::ADIAnalogIn`_ objects as well.

Constructor(s)
--------------

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given ports do not match the parameter criteria given below.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::ADIAnalogIn::ADIAnalogIn ( std::uint8_t port )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ANALOG_SENSOR_PORT 1

        void opcontrol() {
          pros::ADIAnalogIn sensor (ANALOG_SENSOR_PORT);
          while (true) {
            // Use the sensor
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
============ =================================================================================================================

----

Methods
-------

calibrate
~~~~~~~~~

Calibrates the analog sensor on the specified channel.

This method assumes that the true sensor value is not actively changing at this time and
computes an average from approximately 500 samples, 1 ms apart, for a 0.5 s period of
calibration. The average value thus calculated is returned and stored for later calls to the
`adi_analog_read_calibrated`_ and `adi_analog_read_calibrated_HR`_ functions. These functions will return
the difference between this value and the current sensor value when called.

Do not use this function when the sensor value might be unstable
(gyro rotation, accelerometer movement).

.. note::
   The ADI currently returns data at 5ms intervals, despite the calibrate function's
   1ms sample rate. This sample rate was kept for the sake of being similar to PROS
   2, and increasing the sample rate would not have a tangible difference in the
   function's performance.

Analogous to `adi_analog_calibrate <../c/adi.html#adi-analog-calibrate>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::ADIAnalogIn::calibrate ( ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          pros::ADIAnalogIn sensor (ANALOG_SENSOR_PORT);
          sensor.calibrate(ANALOG_SENSOR_PORT);
          std::cout << "Calibrated Reading:" << sensor.get_value_calibrated();
          // All readings from then on will be calibrated
        }

**Returns:** The average sensor value computed by this function.

----

get_value
~~~~~~~~~

Reads an analog input channel and returns the 12-bit value.

The value returned is undefined if the analog pin has been switched to a different mode.
The meaning of the returned value varies depending on the sensor attached.

Inherited from `ADIPort::get_value <get_value_>`_.

Analogous to `adi_analog_read <../c/adi.html#adi-analog-read>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::ADIAnalogIn::get_value ( ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          pros::ADIAnalogIn sensor (ANALOG_SENSOR_PORT);
          std::cout << "Sensor Reading:" << sensor.get_value();
        }

**Returns:** The analog sensor value, where a value of 0 reflects an input voltage of nearly 0 V
and a value of 4095 reflects an input voltage of nearly 5 V

----

get_value_calibrated
~~~~~~~~~~~~~~~~~~~~

Reads the calibrated value of an analog input channel.

The `adi_analog_calibrate`_ function must be run first on that channel. This function is
inappropriate for sensor values intended for integration, as round-off error can accumulate
causing drift over time. Use `adi_analog_read_calibrated_HR`_ instead.

Analogous to `adi_analog_read_calibrated <../c/adi.html#adi_analog_read_calibrated>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::ADIAnalogIn::get_value_calibrated ( ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          pros::ADIAnalogIn sensor (ANALOG_SENSOR_PORT);
          sensor.calibrate(ANALOG_SENSOR_PORT);
          std::cout << "Calibrated Reading:" << sensor.get_value_calibrated();
          // All readings from then on will be calibrated
        }

**Returns:** The difference of the sensor value from its calibrated default from -4095 to 4095.

----

get_value_calibrated_HR
~~~~~~~~~~~~~~~~~~~~~~~

Reads the calibrated value of an analog input channel 1-8 with enhanced precision.

The `adi_analog_calibrate`_ function must be run first. This is intended for integrated sensor
values such as gyros and accelerometers to reduce drift due to round-off, and should not be
used on a sensor such as a line tracker or potentiometer.

The value returned actually has 16 bits of "precision", even though the ADC only reads
12 bits, so that errors induced by the average value being between two values come out
in the wash when integrated over time. Think of the value as the true value times 16.

Analogous to `adi_analog_read_calibrated_HR <../c/adi.html#adi_analog_read_calibrated_HR>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::ADIAnalogIn::get_value_calibrated_HR ( ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          pros::ADIAnalogIn sensor (ANALOG_SENSOR_PORT);
          sensor.calibrate(ANALOG_SENSOR_PORT);
          std::cout << "High Res Calibrated Reading:" << sensor.get_value_calibrated_HR();
          // All readings from then on will be calibrated
        }

**Returns:** The difference of the sensor value from its calibrated default from -16384 to 16384.

----

pros::ADIAnalogOut
==================

Constructor(s)
--------------

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given ports do not match the parameter criteria given below.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         pros::ADIAnalogOut::ADIAnalogOut ( std::uint8_t port )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ANALOG_SENSOR_PORT 1

        void opcontrol() {
          pros::ADIAnalogOut sensor (ANALOG_SENSOR_PORT);
          // Use the sensor
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
============ =================================================================================================================

----

Methods
-------

set_value
~~~~~~~~~

Sets the output for the Analog Output from 0 (0V) to 4095 (5V).

Inherited from `ADIPort::set_value <set_value_>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         pros::ADIAnalogOut::set_value ( std::int32_t value ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ANALOG_SENSOR_PORT 1

        void opcontrol() {
          pros::ADIAnalogOut sensor (ANALOG_SENSOR_PORT);
          sensor.set_value(4095); // Set the port to 5V
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 value        The value to set the ADI port to from 0 (0V) to 4095 (5V)
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

pros::ADIDigitalIn
==================

Constructor(s)
--------------

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given ports do not match the parameter criteria given below.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         pros::ADIDigitalIn::ADIDigitalIn ( std::uint8_t port )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define DIGITAL_SENSOR_PORT 1

        void opcontrol() {
          pros::ADIDigitalIn sensor (ANALOG_SENSOR_PORT);
          // Use the sensor
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
============ =================================================================================================================

----

Methods
-------

get_new_press
~~~~~~~~~~~~~

Returns a rising-edge case for a digital button press.

This function is not thread-safe.
Multiple tasks polling a single button may return different results under the
same circumstances, so only one task should call this function for any given
button. E.g., Task A calls this function for buttons 1 and 2. Task B may call
this function for button 3, but should not for buttons 1 or 2. A typical
use-case for this function is to call inside opcontrol to detect new button
presses, and not in any other tasks.

Analogous to `adi_digital_get_new_press <../c/adi.html#adi-digital-get-new-press>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         std::int32_t pros::ADIDigitalIn::get_new_press ( ) const

   .. tab :: Example
      .. highlight:: c
      ::

        #define DIGITAL_SENSOR_PORT 1

        void opcontrol() {
          pros::ADIDigitalIn sensor (DIGITAL_SENSOR_PORT);
          while (true) {
            if (sensor.get_new_press()) {
              // Toggle pneumatics or other state operations
            }
            delay(50);
          }
        }

**Returns:** 1 if the button on the controller is pressed and had not been pressed
the last time this function was called, 0 otherwise.

----

get_value
~~~~~~~~~

Gets the digital value (1 or 0) of a pin.

Inherited from `ADIPort::get_value <get_value_>`_.

Analogous to `adi_digital_read <../c/adi.html#adi-digital-read>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         std::int32_t pros::ADIDigitalIn::get_value ( ) const

   .. tab :: Example
      .. highlight:: c
      ::

        #define DIGITAL_SENSOR_PORT 1

        void opcontrol() {
          pros::ADIDigitalIn sensor (DIGITAL_SENSOR_PORT);
          while (true) {
            std::cout << "Sensor Value:" << sensor.get_value();
            delay(50);
          }
        }

**Returns:** True if the pin is `HIGH <HIGH_>`_, or false if it is `LOW <LOW_>`_.

----

pros::ADIDigitalOut
===================

Constructor(s)
--------------

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given ports do not match the parameter criteria given below.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        pros::ADIDigitalOut::ADIDigitalOut ( std::uint8_t port
                                             bool init_state = false )

   .. tab :: Example
      .. highlight:: c
      ::

        #define DIGITAL_SENSOR_PORT 1

        void opcontrol() {
          bool state = LOW;
          pros::ADIDigitalOut sensor (DIGITAL_SENSOR_PORT, state);
          while (true) {
            state != state;
            sensor.set_value(state);
            delay(50); // toggle the sensor value every 50ms
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
 init_state   The initial state for the digital output. The default value is false.
============ =================================================================================================================

----

Methods
-------

set_value
~~~~~~~~~

Sets the digital value (1 or 0) of a pin.

Inherited from `ADIPort::set_value <set_value_>`_.

Analogous to `adi_digital_write <../c/adi.html#adi-digital-write>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        pros::ADIDigitalOut::set_value ( std::int32_t value ) const

   .. tab :: Example
      .. highlight:: c
      ::

        #define DIGITAL_SENSOR_PORT 1

        void opcontrol() {
          bool state = LOW;
          pros::ADIDigitalOut sensor (DIGITAL_SENSOR_PORT);
          while (true) {
            state != state;
            sensor.set_value(state);
            delay(50); // toggle the sensor value every 50ms
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 value        an expression evaluating to "true" or "false" to set the output to HIGH or LOW
              respectively, or the constants HIGH or LOW themselves
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

pros::ADIEncoder
================

Constructor(s)
--------------

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given ports do not match the parameter criteria given below.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ADIEncoder::ADIEncoder ( std::uint8_t port_top,
                                 std::uint8_t port_bottom,
                                 const bool reverse = false )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define PORT_TOP 1
        #define PORT_BOTTOM 2

        void opcontrol() {
          pros::ADIEncoder sensor (PORT_TOP, PORT_BOTTOM, false);
          // Use the sensor
        }

============ ====================================================================================================================================
 Parameters
============ ====================================================================================================================================
 port_top     the "top" wire from the encoder sensor with the removable cover side UP. This should be in port 1, 3, 5, or 7 ('A', 'C', 'E', 'G').
 port_bottom  the "bottom" wire from the encoder sensor
 reverse      if "true", the sensor will count in the opposite direction. The default value is "false".
============ ====================================================================================================================================

----

Methods
-------

get_value
~~~~~~~~~

Gets the number of ticks recorded by the encoder.

There are 360 ticks in one revolution.

Analogous to `adi_encoder_get <../c/adi.html#adi-encoder-get>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::ADIEncoder::get_value ( ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define PORT_TOP 1
        #define PORT_BOTTOM 2

        void opcontrol() {
          pros::ADIEncoder sensor (PORT_TOP, PORT_BOTTOM, false);
          while (true) {
            std::cout << "Encoder Value: " << sensor.get_value();
            delay(50);
          }
        }

----

reset
~~~~~

Resets the encoder to zero.

It is safe to use this method while an encoder is enabled. It is not necessary to call this
method before stopping or starting an encoder.

Analogous to `adi_encoder_reset <../c/adi.html#adi-encoder-reset>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::ADIEncoder::reset ( ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define PORT_TOP 1
        #define PORT_BOTTOM 2

        void opcontrol() {
          pros::ADIEncoder sensor (PORT_TOP, PORT_BOTTOM, false);
          delay(1000); // Move the encoder around in this time
          sensor.reset(); // The encoder is now zero again
        }

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

pros::ADIMotor
==============

Constructor(s)
--------------

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given ports do not match the parameter criteria given below.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::ADIMotor::ADIMotor ( std::uint8_t port )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define MOTOR_PORT 1

        void opcontrol() {
          pros::ADIMotor motor (MOTOR_PORT);
          motor.set_value(127); // Go full speed forward
          std::cout << "Commanded Motor Power: " << motor.get_value(); // Will display 127
          delay(1000);
          motor.set_value(0); // Stop the motor
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
============ =================================================================================================================

----

Methods
-------

get_value
~~~~~~~~~

Returns the last set speed of the motor on the given port.

Inherited from `ADIPort::get_value <get_value_>`_.

Analogous to `adi_motor_get <../c/adi.html#adi-motor-get>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::ADIMotor::get_value ( ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define MOTOR_PORT 1

        void opcontrol() {
          pros::ADIMotor motor (MOTOR_PORT);
          motor.set_value(127); // Go full speed forward
          std::cout << "Commanded Motor Power: " << motor.get_value(); // Will display 127
          delay(1000);
          motor.set_value(0); // Stop the motor
        }

**Returns:** The last set speed of the motor on the given port.

----

set_value
~~~~~~~~~

Sets the speed of the given motor.

Inherited from `ADIPort::set_value <set_value_>`_.

Analogous to `adi_motor_set <../c/adi.html#adi-motor-set>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::ADIMotor::set_value ( std::int32_t value ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define MOTOR_PORT 1

        void opcontrol() {
          pros::ADIMotor motor (MOTOR_PORT);
          motor.set_value(127); // Go full speed forward
          std::cout << "Commanded Motor Power: " << motor.get_value(); // Will display 127
          delay(1000);
          motor.set_value(0); // Stop the motor
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 speed        the new signed speed; -127 is full reverse and 127 is full forward, with 0 being off
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise

----

stop
~~~~

Stops the given motor.

Analogous to `adi_motor_stop <../c/adi.html#adi-motor-stop>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::ADIMotor::stop ( ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define MOTOR_PORT 1

        void opcontrol() {
          pros::ADIMotor motor (MOTOR_PORT);
          motor.set_value(127); // Go full speed forward
          std::cout << "Commanded Motor Power: " << motor.get_value(); // Will display 127
          delay(1000);
          motor.stop(); // Stop the motor
        }

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

pros::ADIPort
=============

Constructor(s)
--------------

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given ports do not match the parameter criteria given below.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::ADIPort::ADIPort ( std::uint8_t port,
                                 adi_port_config_e_t type = E_ADI_TYPE_UNDEFINED )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          pros::ADIPort sensor (ANALOG_SENSOR_PORT, E_ADI_ANALOG_IN);
          // Displays the value of E_ADI_ANALOG_IN
          std::cout << "Port Type: " << sensor.get_config();
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The ADI port number (from 1-8, 'a'-'h', 'A'-'H') for which to create an object
 type         The `configuration <../c/adi.html#adi-port-config-e-t>`_ type for the port
============ =================================================================================================================

----

Methods
-------

get_config
~~~~~~~~~~

Returns the configuration for the given ADI port.

Analogous to `adi_port_get_config <../c/adi.html#adi-port-config-get>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::ADIPort::get_config ( ) const;

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          adi_port_set_config(ANALOG_SENSOR_PORT, E_ADI_ANALOG_IN);
          // Displays the value of E_ADI_ANALOG_IN
          printf("Port Type: %d\n", adi_port_get_config(ANALOG_SENSOR_PORT));
        }


----

.. _get_value:

get_value
~~~~~~~~~

Returns the value for the given ADI port.

Analogous to `adi_port_get_value <../c/adi.html#adi-port-value-get>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::ADIPort::get_value ( ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ANALOG_SENSOR_PORT 1

        void opcontrol() {
          pros::ADIPort sensor (ANALOG_SENSOR_PORT, E_ADI_ANALOG_IN);
          std::cout << "Port Value: " << sensor.get_value();
        }

**Returns:** The value for the given ADI port.

----

set_config
~~~~~~~~~~

Configures an ADI port to act as a given sensor type.

Analogous to `adi_port_set_config <../c/adi.html#adi-port-config-set>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::ADIPort::set_config ( adi_port_config_e_t type ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ANALOG_SENSOR_PORT 1

        void initialize() {
          pros::ADIPort sensor (ANALOG_SENSOR_PORT, E_ADI_DIGITAL_IN);
          // Do things as a digital sensor
          // Digital is unplugged and an analog is plugged in
          sensor.set_config(E_ADI_ANALOG_IN);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 type         The `configuration <../c/adi.html#adi-port-config-e-t>`_ type for the port
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

.. _set_value:

set_value
~~~~~~~~~

Sets the value for the given ADI port

This only works on ports configured as outputs, and the behavior will change
depending on the configuration of the port.

Analogous to `adi_port_set_value <../c/adi.html#adi-port-value-set>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::ADIPort::set_value ( ) const;

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define DIGITAL_SENSOR_PORT 1

        void initialize() {
          pros::ADIPort sensor (DIGITAL_SENSOR_PORT, E_ADI_DIGITAL_OUT);
          sensor.set_value(DIGITAL_SENSOR_PORT, HIGH);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 value        The value to set the ADI port to
============ =================================================================================================================

**Returns:** 1 if the operation was successful, PROS_ERR otherwise.

----

pros::ADIUltrasonic
===================

Constructor(s)
--------------

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - The given ports do not match the parameter criteria given below.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::ADIUltrasonic::ADIUltrasonic ( std::uint8_t port_echo,
                                             std::uint8_t port_ping )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define PORT_ECHO 1
        #define PORT_PING 2

        void opcontrol() {
          pros::ADIUltrasonic sensor (PORT_ECHO, PORT_PING);
          while (true) {
            // Print the distance read by the ultrasonic
            std::cout << "Distance: " << sensor.get_value();
            delay(50);
          }
        }

============ =============================================================================================================
 Parameters
============ =============================================================================================================
 port_echo    the port connected to the yellow INPUT cable. This should be in port 1, 3, 5, or 7 ('A', 'C', 'E', 'G').
 port_ping    the port connected to the orange OUTPUT cable. This should be in the next highest port following port_echo.
============ =============================================================================================================

----

Methods
-------

get_value
~~~~~~~~~

Gets the current ultrasonic sensor value in centimeters.

If no object was found, zero is returned. If the ultrasonic sensor was never started, the
return value is PROS_ERR. Round and fluffy objects can cause inaccurate values to be
returned.

Inherited from `ADIPort::get_value <get_value_>`_.

Analogous to `adi_ultrasonic_get <../c/adi.html#adi-ultrasonic-get>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::ADIUltrasonic::get_value ( ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define PORT_ECHO 1
        #define PORT_PING 2

        void opcontrol() {
          pros::ADIUltrasonic sensor (PORT_ECHO, PORT_PING);
          while (true) {
            // Print the distance read by the ultrasonic
            std::cout << "Distance: " << sensor.get_value();
            delay(50);
          }
        }

**Returns:** The distance to the nearest object in centimeters.

.. _HIGH: ../c/adi.html#HIGH
.. _LOW: ../c/adi.html#LOW
.. _adi_port_config_e_t: ../c/adi.html#adi-port-config-e-t
