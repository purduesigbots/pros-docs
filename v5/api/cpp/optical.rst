.. highlight:: cpp
   :linenothreshold: 5
   
=====================
VEX Optical Sensor C++ API
=====================

.. contents:: :local:

pros::Optical
=============

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::Optical(const std::uint8_t port)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void initialize() {
          pros::Optical optical_sensor(OPTICAL_PORT);
        }

============ =========================================================================
 Parameters
============ =========================================================================
 port         The V5 port number from 1-21
============ =========================================================================

----

Functions
---------

get_hue ( )
~~~~~~~~~

Get the detected color hue. This is not avaliable if gestures are being detected. Hue has a range of ``0`` to ``359.999``.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double get_hue( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          while (true) {
            printf("Hue value: %lf \n", optical_sensor.get_hue());
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from 1-21
============ =================================================================================================================

**Returns:** The hue value the Optical sensor sees or PROS_ERR if the operation failed, setting ``errno``.

----

get_saturation ( )
~~~~~~~~~

Get the detected color saturation. This is not avaliable if gestures are being detected. Saturation has a range of ``0`` to ``1.0``.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double get_saturation( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          while (true) {
            printf("Saturation value: %lf \n", optical_sensor.get_saturation());
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from 1-21
============ =================================================================================================================

**Returns:** The saturation value of the Optical sensor or PROS_ERR if the operation failed, setting ``errno``.

----

get_brightness( )
~~~~~~~~~

Get the detected color brightness.  This is not avaliable if gestures are being detected. Brightness has a range of 0 to 1.0

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double get_brightness( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          while (true) {
            printf("Brightness value: %lf \n", optical_sensor.get_brightness());
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from 1-21
============ =================================================================================================================

**Returns:** Optical sensor's brightness value or PROS_ERR if the operation failed, setting ``errno``.

get_proximity( )
~~~~~~~~~

Get the detected proximity value.  This is not avaliable if gestures are being detected.  Proximity has a range of 0 to 255.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t get_proximity( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          while (true) {
		        printf("Proximity value: %ld \n", optical_sensor.get_proximity());
		        pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
  port         The V5 port number from 1-21
============ =================================================================================================================

**Returns:** Optical sensor's proximity value or PROS_ERR if the operation failed, setting ``errno``.

----

set_led_pwm
~~~~~~~~~

Set the pwm value of the White LED on the sensor.  Value ranges from ``0`` to ``100``

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t set_led_pwm(uint8_t value)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          while (true) {
		        optical_sensor.set_led_pwm(50);
		        pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 value        The value to set the LED from (0-100)
============ =================================================================================================================

**Returns:** ``1`` if operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

get_led_pwm
~~~~~~~~~

Get the pwm value of the White LED on the sensor.  Values range from ``0`` to ``100``.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t get_led_pwm( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          while (true) {
		        printf("LED PWM: %d \n", optical_sensor.get_led_pwm());
		        pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from 1-21
============ =================================================================================================================

**Returns:** Optical sensor's LED PWM value or PROS_ERR if the operation failed, setting ``errno``.

----

get_rgb
~~~~~~~~~

Get the processed RGBC data from the sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         pros::c::optical_rgb_s_t get_rgb( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          pros::c::optical_rgb_s_t rgb_value;
          while (true) {
            rgb_value = optical_sensor.rgb_value();
		        printf("Red value: %lf \n", rgb_value.red);
            printf("Green value: %lf \n", rgb_value.green);
            printf("Blue value: %lf \n", rgb_value.blue);
            printf("Clear value: %lf \n", rgb_value.clear);
		        pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from 1-21
============ =================================================================================================================

**Returns:** A struct of RGB values from the Optical Sensor or PROS_ERR if the operation failed, setting ``errno``.

----

get_raw ( )
~~~~~~~~~

Get the raw un-processed RGBC data from the sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::c::optical_raw_s_t get_raw( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          pros::c::optical_raw_s_t raw_values;
          while (true) {
            raw_values = optical_sensor.get_raw();
            printf("Red value: %ld \n", raw_values.red);
            printf("Green value: %ld \n", raw_values.green);
            printf("Blue value: %ld \n", raw_values.blue);
            printf("Clear value: %ld \n", raw_values.clear);
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from 1-21
============ =================================================================================================================

**Returns:** A struct of the raw rgb values from the Optical Sensor or PROS_ERR if the operation failed, setting ``errno``.

----

get_gesture ( )
~~~~~~~~~

Get the most recent gesture data from the sensor

Gestures will be cleared after 500mS

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::c::optical_direction_e_t get_gesture( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          while (true) {
            printf("Direction: %d \n", optical_sensor.get_gesture());
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from 1-21
============ =================================================================================================================

**Returns:** The direction of the most recent gesture from the Optical Sensor or PROS_ERR if the operation failed, 
setting ``errno``.

----

get_gesture_raw ( )
~~~~~~~~~

Get the most recent raw gesture data from the sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::c::optical_gesture_s_t get_gesture_raw( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          pros::c::optical_gesture_s_t raw_gesture;
          while (true) {
            raw_gesture = optical_sensor.get_gesture_raw();
            printf("Up data: %u \n", raw_gesture.udata);
            printf("Down data: %u \n", raw_gesture.ddata);
            printf("Left data: %u \n", raw_gesture.ldata);
            printf("Right data: %u \n", raw_gesture.rdata);
            printf("Type: %u \n", raw_gesture.type);
            printf("Count: %u \n", raw_gesture.count);
            printf("Time: %u \n", raw_gesture.time);
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from 1-21
============ =================================================================================================================

**Returns:** A struct of the raw gesture values from the Optical Sensor or PROS_ERR if the operation failed, setting ``errno``.

----

enable_gesture ( )
~~~~~~~~~

Enable gesture detection on the sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t enable_gesture( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          while (true) {
            optical_sensor.enable_gesture();
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from 1-21
============ =================================================================================================================

**Returns:** ``1`` if operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

disable_gesture ( )
~~~~~~~~~

Disable gesture detection on the sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t disable_gesture( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          while (true) {
            optical_sensor.disable_gesture();
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from 1-21
============ =================================================================================================================

**Returns:** ``1`` if operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

get_port ( )
~~~~~~~~~

Gets the port number of the Optical Sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint8_t get_port( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          pros::Optical optical_sensor(OPTICAL_PORT);
          while (true) {
            printf("Port number: %u \n", optical_sensor.get_port());
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from 1-21
============ =================================================================================================================

**Returns:** The port number of the Optical Sensor or PROS_ERR if the operation failed, setting ``errno``.

----