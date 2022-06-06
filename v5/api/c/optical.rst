.. highlight:: c
   :linenothreshold: 5

==================
VEX Optical Sensor C API
==================

.. contents:: :local:

Functions
=========

optical_get_hue
---------------

Get the detected color hue. This is not available if gestures
are being detected.  Hue has a range of ``0`` ``359.999``.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

Analogous to `pros::Optical::get_hue <../cpp/optical.html#get-hue>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double optical_get_hue(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          while (true) {
            
            printf("Hue value: %lf \n", optical_get_hue(OPTICAL_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Optical sensor's hue value or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

optical_get_saturation
----------------------

Gets the detected color saturation. This is not available if gestures
are being detected.  Saturation has a range ``0`` ``1.0``.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

Analogous to `pros::Optical::get_saturation <../cpp/Optical.html#get-saturation>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double optical_get_saturation(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          while (true) {
            
            printf("Saturation value: %lf \n", optical_get_saturation(OPTICAL_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Optical sensor's saturation value or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

optical_get_brightness
----------------------

Get the detected color brightness. This is not available if gestures
are being detected.  Brightness values are in range ``0`` ``1.0``.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

Analogous to `pros::Optical::get_brightness <../cpp/Optical.html#get-brightness>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double optical_get_brightness(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          while (true) {
            printf("Brightness value: %lf \n", optical_get_brightness(OPTICAL_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Optical sensor's brightness value or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

optical_get_proximity(uint8_t port)
-----------------------------------

Get the detected proximity value. This function is not available if gestures 
are being detected. Proximity has a range of ``0`` ``255``.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

Analogous to `pros::Optical::get_proximity <../cpp/Optical.html#get-proximity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t optical_get_proximity(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          while (true) {
            
            printf("Proximity value: %d \n", optical_get_proximity(OPTICAL_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Optical sensor's proximity value or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

optical_set_led_pwm
-------------------

Sets the pwm value of the White LED.  Valid values are in the range ``0`` ``100``.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

Analogous to `pros::Optical::set_led_pwm <../cpp/optical.html#set-led-pwm>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t optical_set_led_pwm(uint8_t port, uint8_t value);

   .. tab :: Example
      .. highlight:: c
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          while (true) {
            optical_set_led_pwm(OPTICAL_PORT, 50);
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 value        The pwm value to set the optical sensor's LED brightness from (0-100)
============ =================================================================================================================

**Returns:** ``1``  if operation successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

optical_get_led_pwm
-------------------

Get the pwm value of the White LED.  PWM value ranges from ``0`` to ``100``.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

Analogous to `pros::Optical::get_led_pwm <../cpp/optical.html#get-led-pwm>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t optical_get_led_pwm(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          while (true) {
            printf("PWM Value: %d \n", optical_get_led_pwm(OPTICAL_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Optical sensor's current LED value (0 - 100) or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

optical_get_rgb
---------------

Get the processed RGBC data from the sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

Analogous to `pros::Optical::get_rgb <../cpp/optical.html#get-rgb>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        optical_rgb_s_t optical_get_rgb(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define OPTICAL_PORT 1

        optical_rgb_s_t RGB_values;
        void opcontrol() {
          while (true) {
            RGB_values = optical_get_rgb(OPTICAL_PORT);
            printf("Red value: %lf \n", RGB_values.red);
            printf("Green value: %lf \n", RGB_values.green);
            printf("Blue value: %lf \n", RGB_values.blue);
            printf("Brightness value: %lf \n", RGB_values.brightness);
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Struct of Optical sensor's RGBC values or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

optical_get_raw
----------------

Get the raw un-processed RGBC data from the sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

Analogous to `pros::Optical::get_raw <../cpp/optical.html#get-raw>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       optical_raw_s_t optical_get_raw(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define OPTICAL_PORT 1

        optical_raw_s_t raw_values;
        void opcontrol() {
          while (true) {
            raw_values = optical_get_raw(OPTICAL_PORT);
            printf("Red value: %ld \n", raw_values.red);
            printf("Green value: %ld \n", raw_values.green);
            printf("Blue value: %ld \n", raw_values.blue);
            printf("Clear value: %ld \n", raw_values.clear);
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Struct of Optical sensor's raw RGBC values or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

optical_get_gesture
-------------------

Get the most recent gesture data from the sensor.

Gestures will be cleared after 500mS

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

Analogous to `pros::Optical::get_gesture <../cpp/optical.html#get-gesture>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        optical_direction_e_t optical_get_gesture(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define OPTICAL_PORT 1

        optical_direction_e_t gesture;
        void opcontrol() {
          while (true) {
            gesture = optical_get_gesture(OPTICAL_PORT);
            printf("Gesture value: %d \n", gesture);
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Enum value of the gesture data or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

optical_get_gesture_raw
-----------------------

Get the most recent raw gesture data from the sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

Analogous to `pros::Optical::get_gesture_raw <../cpp/optical.html#get-gesture-raw>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        optical_gesture_s_t optical_get_gesture_raw(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define OPTICAL_PORT 1

        optical_gesture_s_t raw_gesture;
        void opcontrol() {
          while (true) {
            raw_gesture = optical_get_gesture_raw(OPTICAL_PORT);
            printf("Up data: %u \n", raw_gesture.udata);
            printf("Down data: %u \n", raw_gesture.ddata);
            printf("Left data: %u \n", raw_gesture.ldata);
            printf("Right data: %u \n", raw_gesture.rdata);
            printf("Type: %u \n", raw_gesture.type);
            printf("Count: %u \n", raw_gesture.count);
            printf("Time: %lu \n", raw_gesture.time);
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Struct of Optical sensor's raw gesture values or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

optical_enable_gesture
----------------------

Enable gesture detection on the sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

Analogous to `pros::Optical::enable_gesture <../cpp/optical.html#enable-gesture>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t optical_enable_gesture(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          while (true) {
            optical_enable_gesture(OPTICAL_PORT);
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1``  if operation successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

optical_disable_gesture
-----------------------

Disable gesture detection on the sensor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Optical Sensor.

Analogous to `pros::Optical::disable_gesture <../cpp/optical.html#disable-gesture>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t optical_disable_gesture(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define OPTICAL_PORT 1

        void opcontrol() {
          while (true) {
            optical_disable_gesture(OPTICAL_PORT);
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1``  if operation successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

Data Structures
===============

optical_rgb_s_t
---------------

The RGB and Brightness values for the optical sensor.

::

  typedef struct __attribute__((__packed__)) optical_rgb_s {
    double red;
    double green;
    double blue;
    double brightness;
  } optical_raw_s_t;

optical_raw_s_t
---------------

The RGB and clear values for the optical sensor.

::

  typedef struct optical_raw_s {
    uint32_t clear;
    uint32_t red;
    uint32_t green;
    uint32_t blue;
  } optical_raw_s_t;

optical_gesture_s_t
-------------------

This structure contains the raw gesture data.

::

  typedef struct __attribute__((__packed__)) optical_gesture_s {
    // up data
    uint8_t udata;
    // down data
    uint8_t ddata;
    // left data
    uint8_t ldata;
    // right data
    uint8_t rdata;

    // type of gesture
    uint8_t type;
    // padding
    uint8_t pad;
    // number of gestures
    uint16_t count;
    // time since gesture recoginized
    uint32_t time;
  } optical_gesture_s_t;


Enumerated Values
=================

::

  typedef enum optical_direction_e { NO_GESTURE = 0,
    UP = 1,
    DOWN = 2,
    RIGHT = 3,
    LEFT = 4
  } optical_direction_e_t;

============================= =============================================================
 Value
============================= =============================================================
 Up                            The direction indicating an upward gesture.
 Down                          The direction indicating a downward gesture.
 Right                         The direction indicating a rightward gesture.
 Left                          The direction indicating a leftward gesture.
============================= =============================================================


