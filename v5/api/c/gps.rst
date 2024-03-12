.. highlight:: c
   :linenothreshold: 5

====================
VEX GPS Sensor C API
====================

.. note:: For a pros-specific usage guide on the GPS, please check out our article
          `here <../../tutorials/topical/gps.html>`_.

.. contents:: :local:

Functions
=========

gps_initialize_full
-------------------

Set the GPS's offset relative to the center of turning in meters, as well as its initial position.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_initialize_full(uint8_t port, double xInitial, double yInitial, double headingInitial, double xOffset,
                            double yOffset)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1
        #define X_OFFSET .225
        #define Y_OFFSET .223
        #define X_INITIAL 1.54
        #define Y_INITIAL 1.14
        #define HEADING_INITIAL 90

        void initialize() {
            gps_initialize_full(GPS_PORT, X_OFFSET, Y_OFFSET, X_INITIAL, Y_INITIAL, HEADING_INITIAL);
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
xOffset          Cartesian 4-Quadrant X offset from center of turning (meters)
yOffset          Cartesian 4-Quadrant Y offset from center of turning (meters)
xInitial         Initial 4-Quadrant X Position, with (0,0) being at the center of the field (meters)
yInitial         Initial 4-Quadrant Y Position, with (0,0) being at the center of the field (meters)
headingInitial   Heading with 0 being north on the field, in degrees [0,360) going clockwise
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

gps_set_offset
----------------

Set the GPS's offset relative to the center of turning in meters.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_set_offset(uint8_t port, double xOffset, double yOffset)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1
        #define X_OFFSET -.225
        #define Y_OFFSET .225

        void initialize() {
            gps_set_offset(GPS_PORT, X_OFFSET, Y_OFFSET);
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
xOffset          Cartesian 4-Quadrant X offset from center of turning (meters)
yOffset          Cartesian 4-Quadrant Y offset from center of turning (meters)
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

gps_get_offset
----------------

Get the GPS's location relative to the center of turning/origin in meters.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_get_offset(uint8_t port, double* xOffset, double* yOffset)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
            int *x;
            int *y;

            while (true) {
                gps_get_offset(GPS_PORT, x, y);
                screen_print(TEXT_MEDIUM, 1, "X Offset: %4d, Y Offset: %4d", *x, *y);
                delay(20);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
xOffset          Pointer to cartesian 4-Quadrant X offset from center of turning (meters)
yOffset          Pointer to cartesian 4-Quadrant X offset from center of turning (meters)
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

gps_set_position
----------------

Sets the robot's location relative to the center of the field in meters.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_set_position(uint8_t port, double xInitial, double yInitial, double headingInitial)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1
        #define X_INITIAL -1.15
        #define Y_INITIAL 1.45
        #define HEADING_INITIAL 90

        void initialize() {
            gps_set_position(GPS_PORT, X_INITIAL, Y_INITIAL, HEADING_INITIAL);
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
xInitial         Initial 4-Quadrant X Position, with (0,0) being at the center of the field (meters)
yInitial         Initial 4-Quadrant Y Position, with (0,0) being at the center of the field (meters)
headingInitial   Heading with 0 being north on the field, in degrees [0,360) going clockwise
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

gps_set_data_rate
----------------

Set the GPS sensor's data rate in milliseconds, only applies to IMU on GPS.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_set_data_rate(uint8_t port, uint32_t rate)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1
        #define GPS_DATA_RATE 5

        void initialize() {
            gps_set_data_rate(GPS_PORT, GPS_DATA_RATE);
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
rate             Data rate in milliseconds (Minimum: 5 ms)
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

gps_get_error
----------------

Get the possible RMS (Root Mean Squared) error in meters for GPS position.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_error(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
            double error;
            error = gps_get_error(GPS_PORT);
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** Possible RMS (Root Mean Squared) error in meters for GPS position. If the operation failed, returns ``PROS_ERR_F`` 
and ``errno`` is set.

----

gps_get_status
----------------

Gets the position and roll, yaw, and pitch of the GPS.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         gps_status_s_t gps_get_status(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
            struct gps_status_s_t status;

            while (true) {
                status = gps_get_status(GPS_PORT);
                screen_print(TEXT_MEDIUM, 1, "x: %3f, y: %3f, pitch: %3f", status.x, status.y);
                screen_print(TEXT_MEDIUM, 2, "yaw: %3f, roll: %3f", status.pitch, status.yaw);
                screen_print(TEXT_MEDIUM, 3, "roll: %3f", status.roll);
                delay(20);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** A struct (gps_status_s_t) containing values mentioned above. If the operation failed, all the structure's members are filled with ``PROS_ERR_F`` and ``errno`` is set.

----

gps_get_x_position
----------------

Gets the X position in meters of the GPS relative to the starting position.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_x_position(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
	    double x_pos;

            while (true) {
                x_pos = gps_get_x_position(GPS_PORT);
                delay(20);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:**  The X position in meters. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

gps_get_y_position
----------------

Gets the Y position in meters of the GPS relative to the starting position.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_y_position(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
	    double y_pos;

            while (true) {
                y_pos = gps_get_y_position(GPS_PORT);
                delay(20);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:**  The Y position in meters. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

gps_get_pitch
----------------

Gets the GPS pitch in [0,360) degree values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_pitch(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
            double pitch;

            while (true) {
                pitch = gps_get_pitch(GPS_PORT);
                delay(20);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** The pitch in [0,360) degree values. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

gps_get_roll
----------------

Gets the GPS roll in [0,360) degree values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_roll(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
            double roll;

            while (true) {
                roll = gps_get_roll(GPS_PORT);
                delay(20);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** The roll in [0,360) degree values. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

gps_get_yaw
----------------

Gets the GPS yaw in [0,360) degree values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_yaw(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
            double yaw;

            while (true) {
                yaw = gps_get_yaw(GPS_PORT);
                delay(20);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** The yaw in [0,360) degree values. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

gps_get_heading
----------------

Get the heading in [0,360) degree values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_heading(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
            double heading;

            while (true) {
                heading = gps_get_heading(GPS_PORT);
                delay(20);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** The heading in [0,360) degree values. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

gps_get_heading_raw
----------------

Get the heading in the max double value and min double value scale.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_heading_raw(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
            double heading;

            while (true) {
                heading = gps_get_heading_raw(GPS_PORT);
                delay(20);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** The heading in [DOUBLE_MIN, DOUBLE_MAX] values. If the operation fails, returns ``PROS_ERR_F`` and ``errno`` is set.

----

gps_get_rotation
----------------

Gets the GPS sensor's elapsed rotation value.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_rotation(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
            double elapsed_rotation;

            elapsed_rotation = gps_get_rotation(GPS_PORT);
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** The elased heading in degrees. If the operation fails, returns ``PROS_ERR_F`` and ``errno`` is set.

----

gps_set_rotation
----------------

Set the GPS sensor's rotation value to target value

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_set_rotation(uint8_t port, double target)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
            gps_set_rotation(GPS_PORT, 60);
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
target           Target rotation value to set rotation value to
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

gps_tare_rotation
----------------

Tare the GPS sensor's rotation value.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_tare_rotation(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void initialize() {
            gps_tare_rotation(GPS_PORT);
        }


=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

gps_get_gyro_rate
----------------

Get the GPS's raw gyroscope values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         gps_gyro_s_t gps_get_gyro_rate(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define GPS_PORT 1

        void opcontrol() {
            struct gps_gyro_s_t gyro;

            while (true) {
                gyro = gps_get_gyro_rate(GPS_PORT);
                screen_print(TEXT_MEDIUM, 1, "gyroscope- x: %3f, y: %3f, z: %3f", gyro.x, gyro.y, gyro.z);
                delay(20);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** The raw gyroscope values. If the operation failed, all the structure's members are filled with ``PROS_ERR_F`` and 
``errno`` is set.

----

gps_get_accel
----------------

Get the GPS's raw accelerometer values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         gps_accel_s_t gps_get_accel(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::
      
        #define GPS_PORT 1

        void opcontrol() {
            struct gps_accel_s_t accel;

            while (true) {
                accel = gps_get_accel(GPS_PORT);
                screen_print(TEXT_MEDIUM, 1, "accleration- x: %3f, y: %3f, z: %3f", accel.x, accel.y, accel.z);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** The raw accelerometer values. If the operation failed, all the structure's members are filled with ``PROS_ERR_F`` and 
``errno`` is set.

----

Macros
======

None.

Enumerated Values
=================

None.

Structures
==========

gps_status_s_t
--------------

::

  typedef struct __attribute__((__packed__)) gps_status_s {
	double x;
	double y;
	double pitch;
	double roll;
	double yaw;
  } gps_status_s_t;

================================== =====================================================================================
 Value
================================== =====================================================================================
x                                   X Position (meters)
y                                   Y Position (meters)
pitch                               Percieved Pitch based on GPS and IMU
roll                                Percieved Roll based on GPS and IMU
yaw                                 Percieved Yaw based on GPS and IMU
================================== =====================================================================================

---

gps_raw_s
---------

::

  struct gps_raw_s {
	double x;
	double y;
	double z;
  };

================================== =====================================================================================
 Value
================================== =====================================================================================
x                                   Raw GPS Pitch
y                                   Raw GPS Roll
z                                   Raw GPS Yaw
================================== =====================================================================================

---

gps_accel_s_t
-------------

::

  typedef struct gps_raw_s gps_accel_s_t;

---

gps_gyro_s_t
------------

::

  typedef struct gps_raw_s gps_gyro_s_t;

---
