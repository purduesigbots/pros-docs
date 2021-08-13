.. highlight:: c
   :linenothreshold: 5

=========
GPS C API
=========

.. contents:: :local:

Functions
=========

gps_initialize_full
-------------------

Set the GPS's offset relative to the center of turning in meters, as well as its initial position.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_initialize_full(uint8_t port, double xInitial, double yInitial, double headingInitial, double xOffset,
                            double yOffset)

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
            gps_initialize_full(1, 0, 0, 0, 0, 0);
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
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_set_offset(uint8_t port, double xOffset, double yOffset)

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
            gps_set_offset(1, 0, 0);
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
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_get_offset(uint8_t port, double* xOffset, double* yOffset)

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            int *x;
            int *y;

            while (true) {
                gps_get_offset(1, x, y);
                printf("Offset- x: %d, y: %d", *x, *y);
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
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_set_position(uint8_t port, double xInitial, double yInitial, double headingInitial)

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
            gps_set_position(1, 0, 0, 0);
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
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_set_data_rate(uint8_t port, uint32_t rate)

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
            gps_set_data_rate(1, 5);
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
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_error(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            double error;
            error = gps_get_error(1);
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** Possible RMS (Root Mean Squared) error in meters for GPS position. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

gps_get_status
----------------

Gets the position and roll, yaw, and pitch of the GPS.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         gps_status_s_t gps_get_status(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            struct gps_status_s_t status;

            while (true) {
                status = gps_get_status(1);
                printf("x: %d, y: %d, pitch: %d, yaw: %d, roll: %d", status.x, status.y, status.pitch, status.yaw, status.roll);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** A struct (gps_status_s_t) containing values mentioned above. If the operation failed, all the structure's members are filled with ``PROS_ERR_F`` and ``errno`` is set.

----

gps_get_heading
----------------

Get the heading in [0,360) degree values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_heading(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            double heading;

            while (true) {
                heading = gps_get_heading(1);
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
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_heading_raw(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            double heading;

            while (true) {
                heading = gps_get_heading_raw(1);
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
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double gps_get_rotation(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            double elapsed_rotation;

            elapsed_rotation = gps_get_rotation(1);
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
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_set_rotation(uint8_t port, double target)

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            gps_set_rotation(1, 60);
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
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t gps_tare_rotation(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
            gps_tare_rotation(1);
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
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         gps_gyro_s_t gps_get_gyro_rate(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            struct gps_gyro_s_t gyro;

            while (true) {
                gyro = gps_get_gyro_rate(1);
                printf("gyroscope- x: %d, y: %d, z: %d", gyro.x, gyro.y, gyro.z);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** The raw gyroscope values. If the operation failed, all the structure's members are filled with ``PROS_ERR_F`` and ``errno`` is set.

----

gps_get_accel
----------------

Get the GPS's raw accelerometer values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN``` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         gps_accel_s_t gps_get_accel(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            struct gps_accel_s_t accel;

            while (true) {
                accel = gps_get_accel(1);
                printf("accleration- x: %d, y: %d, z: %d", accel.x, accel.y, accel.z);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
port             The V5 GPS port number from (1-21)
=============== =================================================================================================================

**Returns:** The raw accelerometer values. If the operation failed, all the structure's members are filled with ``PROS_ERR_F`` and ``errno`` is set.

----

Macros
======

None.

Enumerated Values
=================

None.

Structures
==========

gps_raw_s
---------

::
  struct gps_raw_s {
	double x;
	double y;
	double z;
};

Typedefs
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