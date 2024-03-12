.. highlight:: cpp
   :linenothreshold: 5

======================
VEX GPS Sensor C++ API
======================

.. note:: For a pros-specific usage guide on the GPS, please check out our article
          `here <../../tutorials/topical/gps.html>`_.

.. note:: ``pros::GPS`` can also be used to refer to ``pros::Gps``

.. contents:: :local:

pros::Gps
============

Constructors
------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::Gps(const std::uint8_t port)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define GPS_PORT 1

        void initialize() {
          pros::Gps gps1(GPS_PORT);
        }

============ =========================================================================
 Parameters
============ =========================================================================
 port         The V5 port number from 1-21
============ =========================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::Gps(const std::uint8_t port, double xOffset, double yOffset)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define GPS_PORT 1
        #define X_OFFSET -.225
        #define Y_OFFSET .225
        void initialize() {
          pros::Gps gps1(GPS_PORT, X_OFFSET, Y_OFFSET);
        }

============ =========================================================================
 Parameters
============ =========================================================================
 port             The V5 port number from 1-21
 xOffset          Cartesian 4-Quadrant X offset from center of turning (meters)
 yOffset          Cartesian 4-Quadrant Y offset from center of turning (meters)
============ =========================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::Gps(const std::uint8_t port, double xOffset, double yOffset)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define GPS_PORT 1
        #define X_INITIAL -1.15
        #define Y_INITIAL 1.45
        #define HEADING_INITIAL 90
        void initialize() {
          pros::Gps gps1(GPS_PORT, X_INITIAL, Y_INITIAL, HEADING_INITIAL);
        }

============ =========================================================================
 Parameters
============ =========================================================================
 port             The V5 port number from 1-21
 xInitial         Initial 4-Quadrant X Position, with (0,0) being at the center of the field (meters)
 yInitial         Initial 4-Quadrant Y Position, with (0,0) being at the center of the field (meters)
 headingInitial   Heading with 0 being north on the field, in degrees [0,360) going clockwise
============ =========================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::Gps(const std::uint8_t port, double xInitial, double yInitial, double headingInitial, double xOffset,
                            double yOffset)

   .. tab :: Example
      .. highlight:: cpp
      ::
      
        #define GPS_PORT 1
        #define X_OFFSET .225
        #define Y_OFFSET .223
        #define X_INITIAL 1.54
        #define Y_INITIAL 1.14
        #define HEADING_INITIAL 90

        void opcontrol() {
            pros::Gps gps1(GPS_PORT, X_OFFSET, Y_OFFSET, X_INITIAL, Y_INITIAL, HEADING_INITIAL);
            while(1) {
                // Gps usage here
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
xOffset          Cartesian 4-Quadrant X offset from center of turning (meters)
yOffset          Cartesian 4-Quadrant Y offset from center of turning (meters)
xInitial         Initial 4-Quadrant X Position, with (0,0) being at the center of the field (meters)
yInitial         Initial 4-Quadrant Y Position, with (0,0) being at the center of the field (meters)
headingInitial   Heading with 0 being north on the field, in degrees [0,360) going clockwise
=============== =================================================================================================================

Functions
=========

initialize_full
---------------

Set the GPS's offset relative to the center of turning in meters, as well as its initial position.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t initialize_full(double xInitial, double yInitial, double headingInitial, double xOffset,
                            double yOffset)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define GPS_PORT 1
        #define X_OFFSET .225
        #define Y_OFFSET .223
        #define X_INITIAL 1.54
        #define Y_INITIAL 1.14
        #define HEADING_INITIAL 90

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            gps1.initialize_full(X_OFFSET, Y_OFFSET, X_INITIAL, Y_INITIAL, HEADING_INITIAL);
            while(1) {
                // Gps usage here
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
xOffset          Cartesian 4-Quadrant X offset from center of turning (meters)
yOffset          Cartesian 4-Quadrant Y offset from center of turning (meters)
xInitial         Initial 4-Quadrant X Position, with (0,0) being at the center of the field (meters)
yInitial         Initial 4-Quadrant Y Position, with (0,0) being at the center of the field (meters)
headingInitial   Heading with 0 being north on the field, in degrees [0,360) going clockwise
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

set_offset
----------

Set the GPS's offset relative to the center of turning in meters.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t set_offset(double xOffset, double yOffset)

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1
        #define X_OFFSET -.225
        #define Y_OFFSET .225

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            gps1.set_offset(X_OFFSET, Y_OFFSET);
            while(1){
                // GPS Usage Here
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
xOffset          Cartesian 4-Quadrant X offset from center of turning (meters)
yOffset          Cartesian 4-Quadrant Y offset from center of turning (meters)
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

get_offset
----------

Get the GPS's location relative to the center of turning/origin in meters.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t get_offset(double* xOffset, double* yOffset)

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            double *x;
            double *y;

            while (true) {
                gps1.get_offset(x, y);
                pros::screen::print("Offset- x: %3f, y: %3f", *x, *y);
                pros::delay(20);
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
xOffset          Pointer to cartesian 4-Quadrant X offset from center of turning (meters)
yOffset          Pointer to cartesian 4-Quadrant X offset from center of turning (meters)
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

set_position
------------

Sets the robot's location relative to the center of the field in meters.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t set_position(double xInitial, double yInitial, double headingInitial)

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1
        #define X_INITIAL 0
        #define Y_INITIAL 0
        #define HEADING_INITIAL 0

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            gps1.set_position(X_INITIAL, Y_INITIAL, HEADING_INITIAL);
            while(1) {
                // GPS usage here
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
xInitial         Initial 4-Quadrant X Position, with (0,0) being at the center of the field (meters)
yInitial         Initial 4-Quadrant Y Position, with (0,0) being at the center of the field (meters)
headingInitial   Heading with 0 being north on the field, in degrees [0,360) going clockwise
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

set_data_rate
-------------

Set the GPS sensor's data rate in milliseconds, only applies to IMU on GPS.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t set_data_rate(std::int32_t rate)

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1
        #define DATA_RATE 5

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            gps1.set_data_rate(DATA_RATE);
            while(1) {
                // GPS Usage Here
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
rate             Data rate in milliseconds (Minimum: 5 ms)
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

get_error
---------

Get the possible RMS (Root Mean Squared) error in meters for GPS position.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double get_error()

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            double error;
            while(1) {
                error = gps1.get_error();
                pros::screen::print(pros::TEXT_MEDIUM, 1, "Error (RMS): %f", error);
                pros::delay(20);
            }
        }


**Returns:** Possible RMS (Root Mean Squared) error in meters for GPS position. If the operation failed, returns ``PROS_ERR_F`` and 
``errno`` is set.

----

get_status
----------

Gets the position and roll, yaw, and pitch of the GPS.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         pros::c::gps_status_s_t get_status()

   .. tab :: Example
      .. highlight:: cpp
      ::
      
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            pros::gps_status_s_t status;

            while (true) {
                status = gps1.get_status();
                pros::screen::print(TEXT_MEDIUM, 1, "x: %3f, y: %3f, pitch: %3f", status.x, status.y);
                pros::screen::print(TEXT_MEDIUM, 2, "yaw: %3f, roll: %3f", status.pitch, status.yaw);
                pros::screen::print(TEXT_MEDIUM, 3, "roll: %3f", status.roll);
                pros::delay(20);
            }
        }


**Returns:** A struct (gps_status_s_t) containing values mentioned above. If the operation failed, all the structure's members are 
filled with ``PROS_ERR_F`` and ``errno`` is set.

----

get_x_position
----------

Gets the X position in meters of the GPS relative to the starting position.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double get_x_position()

   .. tab :: Example
      .. highlight:: cpp
      ::
      
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            double x_pos;

            while (true) {
                x_pos = gps1.get_x_position();
                pros::delay(20);
            }
        }


**Returns:**  The X position in meters. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

get_y_position
----------

Gets the Y position in meters of the GPS relative to the starting position.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double get_y_position()

   .. tab :: Example
      .. highlight:: cpp
      ::
      
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            double y_pos;

            while (true) {
                y_pos = gps1.get_y_position();
                pros::delay(20);
            }
        }


**Returns:**  The Y position in meters. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

get_pitch
-----------

Gets the pitch of the GPS in degrees relative to the starting orientation.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double get_pitch()

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            double pitch;

            while (true) {
                yaw = gps1.get_yaw();
                pros::screen::print(TEXT_MEDIUM, 1, "Pitch: %3f", pitch);
                pros::delay(20);
            }
        }


**Returns:** The pitch in [0,360) degree values. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

get_roll
-----------

Gets the roll of the GPS in degrees relative to the starting orientation.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double get_roll()

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            double roll;

            while (true) {
                roll = gps1.get_roll();
                pros::screen::print(TEXT_MEDIUM, 1, "Roll: %3f", roll);
                pros::delay(20);
            }
        }


**Returns:** The roll in [0,360) degree values. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

get_yaw
-----------

Gets the yaw of the GPS in degrees relative to the starting orientation.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double get_yaw()

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            double yaw;

            while (true) {
                yaw = gps1.get_yaw();
                pros::screen::print(TEXT_MEDIUM, 1, "Yaw: %3f", yaw);
                pros::delay(20);
            }
        }


**Returns:** The yaw in [0,360) degree values. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

get_heading
-----------

Get the heading in [0,360) degree values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double get_heading()

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            double heading;

            while (true) {
                heading = gps1.get_heading();
                pros::screen::print(TEXT_MEDIUM, 1, "Rotation: %3f", heading);
                pros::delay(20);
            }
        }


**Returns:** The heading in [0,360) degree values. If the operation failed, returns ``PROS_ERR_F`` and ``errno`` is set.

----

get_heading_raw
---------------

Get the heading in the max double value and min double value scale.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double get_heading_raw()

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            double heading;

            while (true) {
                heading = gps1.get_heading_raw();
                pros::screen::print(TEXT_MEDIUM, 1, "Heading: %3f", heading);
                pros::delay(20);
            }
        }


**Returns:** The heading in [DOUBLE_MIN, DOUBLE_MAX] values. If the operation fails, returns ``PROS_ERR_F`` and ``errno`` is set.

----

get_rotation
------------

Gets the GPS sensor's elapsed rotation value.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double get_rotation()

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            double elapsed_rotation;
            while(1) {
                elapsed_rotation = gps1.get_rotation();
                pros::screen::print(TEXT_MEDIUM, 1, "Rotation: %3f", elapsed_rotation);
                pros::delay(20);
            }
            
        }


**Returns:** The elased heading in degrees. If the operation fails, returns ``PROS_ERR_F`` and ``errno`` is set.

----

set_rotation
------------

Set the GPS sensor's rotation value to target value

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t set_rotation(double target)

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            gps1.set_rotation(60);
            while(1) {
                // GPS Usage Here
            }
        }

=============== =================================================================================================================
 Parameters
=============== =================================================================================================================
target           Target rotation value to set rotation value to
=============== =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

tare_rotation
-------------

Tare the GPS sensor's rotation value.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t tare_rotation()

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            gps1.tare_rotation(); // Initial Tare (unecessary)
            while(1) {
                // GPS Usage Here
            }
        }



**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

get_gyro_rate
-------------

Get the GPS's raw gyroscope values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         pros::c::gps_gyro_s_t get_gyro_rate()

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            gps_gyro_s_t gyroRaw;

            while (true) {
                gyroRaw = gps1.get_gyro_rate();
                pros::screen::print("gyroscope- x: %3f, y: %3f, z: %3f", gyroRaw.x, gyroRaw.y, gyroRaw.z");
                pros::delay(20);
            }
        }


**Returns:** The raw gyroscope values. If the operation failed, all the structure's members are filled with ``PROS_ERR_F`` and 
``errno`` is set.

----

get_accel
---------

Get the GPS's raw accelerometer values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a GPS.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         pros::c::gps_accel_s_t get_accel()

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        #define GPS_PORT 1

        void opcontrol() {
            pros::Gps gps1(GPS_PORT);
            pros::gps_accel_s_t accel;

            while (true) {
                accel = gps1.get_accel();
                pros::screen::print("accleration- x: %3f, y: %3f, z: %3f", accel.x, accel.y, accel.z);
                pros::delay(20);
            }
        }


**Returns:** The raw accelerometer values. If the operation failed, all the structure's members are filled with ``PROS_ERR_F`` 
and ``errno`` is set.

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

----

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

----

gps_accel_s_t
-------------

::

  typedef struct gps_raw_s gps_accel_s_t;

----

gps_gyro_s_t
------------

::

  typedef struct gps_raw_s gyro_s_t;

----
