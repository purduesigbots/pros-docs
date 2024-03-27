.. highlight:: c
   :linenothreshold: 5

=========================
VEX Inertial Sensor C API
=========================

.. contents :: :local:

Functions
=========

imu_reset
---------

Calibrate IMU.

This takes approximately 2 seconds, and is blocking until the IMU status flag is set properly.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

Analogous to `pros::Imu::reset <../cpp/imu.html#reset>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_reset (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void initialize() {
          imu_reset(IMU_PORT);
          int time = millis();
          int iter = 0;
          while (imu_get_status(IMU_PORT) & E_IMU_STATUS_CALIBRATING) {
            printf("IMU calibrating... %d\n", iter);
            iter += 10;
            delay(10);
          }
          // should print about 2000 ms
          printf("IMU is done calibrating (took %d ms)\n", iter - time);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_reset_blocking
---------

Calibrate IMU.

This takes approximately 2 seconds, and is blocking until the IMU status flag is set properly.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

Analogous to `pros::Imu::reset <../cpp/imu.html#reset>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_reset_blocking (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void initialize() {
          imu_reset_blocking(IMU_PORT);
          int time = millis();
          
          // should print about 2000 ms
          printf("IMU is done calibrating (took %d ms)\n", time);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_get_rotation
----------------

Get the total number of degrees the Inertial Sensor has spun about the z-axis.

This value is theoretically unbounded. Clockwise rotations are represented with
positive degree values, while counterclockwise rotations are represented with negative ones.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

Analogous to `pros::Imu::get_rotation <../cpp/imu.html#get_rotation>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double imu_get_rotation (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            printf("IMU get rotation: %f degrees\n", imu_get_rotation(IMU_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The degree value or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----


imu_get_heading
---------------

Get the Inertial Sensor's heading relative to the initial direction of its x-axis.

This value is bounded by [0,360). Clockwise rotations are represented with positive
degree values, while counterclockwise rotations are represented with negative ones.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

Analogous to `pros::Imu::get_heading <../cpp/imu.html#get_heading>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double imu_get_heading (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            printf("IMU get heading: %f degrees\n", imu_get_heading(IMU_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The degree value or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----

imu_get_quaternion
------------------

Get a quaternion representing the Inertial Sensor's orientation.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

Analogous to `pros::Imu::get_quaternion <../cpp/imu.html#get_quaternion>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        quaternion_s_t imu_get_quaternion (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            quaternion_s_t qt = imu_get_quaternion(IMU_PORT);
            printf("IMU quaternion: {x: %f, y: %f, z: %f, w: %f}\n", qt.x, qt.y, qt.z, qt.w);
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The quaternion representing the sensor's orientation. If the operation failed, all the quaternion's members are
filled with ``PROS_ERR_F`` and ``errno`` is set.

----

imu_get_euler
-------------

Get the Euler angles representing the Inertial Sensor's orientation.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

Analogous to `pros::Imu::get_euler <../cpp/imu.html#get_euler>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        euler_s_t imu_get_euler (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            euler_s_t eu = imu_get_euler(IMU_PORT);
            printf("IMU euler angles: {pitch: %f, roll: %f, yaw: %f}\n", eu.pitch, eu.roll, eu.yaw);
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The Euler angles representing the sensor's orientation. If the operation failed, all the structure's members are
filled with ``PROS_ERR_F`` and ``errno`` is set.

----

imu_get_pitch
-------------

Get the Inertial Sensor's pitch angle bounded by (-180,180).

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

Analogous to `pros::Imu::get_pitch <../cpp/imu.html#get_pitch>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double imu_get_pitch (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            printf("IMU pitch: %f\n", imu_get_pitch(IMU_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The pitch angle, or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----


imu_get_roll
------------

Get the Inertial Sensor's roll angle bounded by (-180,180).

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

Analogous to `pros::Imu::get_roll <../cpp/imu.html#get_roll>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double imu_get_roll (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            printf("IMU roll: %f\n", imu_get_roll(IMU_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The roll angle, or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----


imu_get_yaw
-----------

Get the Inertial Sensor's yaw angle bounded by (-180,180).

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

Analogous to `pros::Imu::get_yaw <../cpp/imu.html#get_yaw>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double imu_get_yaw (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            printf("IMU yaw: %f\n", imu_get_yaw(IMU_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The yaw angle, or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----


imu_get_gyro_rate
-----------------

Get the Inertial Sensor's raw gyroscope values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

Analogous to `pros::Imu::get_gyro_rate <../cpp/imu.html#get_gyro_rate>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        imu_gyro_s_t imu_get_gyro_rate (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            imu_gyro_s_t gyro = imu_get_gyro_rate(IMU_PORT);
            printf("IMU gyro values: {x: %f, y: %f, z: %f}\n", gyro.x, gyro.y, gyro.z);
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The raw gyroscope values. If the operation failed, all the structure's members are filled with ``PROS_ERR_F`` and
``errno`` is set.

---

imu_get_accel
-------------

Get the Inertial Sensor's raw accelerometer values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

Analogous to `pros::Imu::get_accel <../cpp/imu.html#get_accel>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        imu_accel_s_t imu_get_accel (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            imu_accel_s_t accel = imu_get_accel(IMU_PORT);
            printf("IMU accel values: {x: %f, y: %f, z: %f}\n", accel.x, accel.y, accel.z);
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The raw accelerometer values. If the operation failed, all the structure's members are filled with ``PROS_ERR_F`` and
``errno`` is set.

---

imu_get_status
--------------

Get the Inertial Sensor's status.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.

Analogous to `pros::Imu::get_status <../cpp/imu.html#get_status>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        imu_status_e_t imu_get_status (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void initialize() {
          imu_reset(IMU_PORT);
          int time = millis();
          int iter = 0;
          while (imu_get_status(IMU_PORT) & E_IMU_STATUS_CALIBRATING) {
            printf("IMU calibrating... %d\n", iter);
            iter += 10;
            delay(10);
          }
          // should print about 2000 ms
          printf("IMU is done calibrating (took %d ms)\n", iter - time);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The Inertial Sensor's status code, or ``PROS_ERR`` if the operation failed, setting ``errno``. 

---

imu_get_physical_orientation
----------------------------

Get the Inertial Sensor's physical orientation.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.

Analogous to `pros::Imu::get_status <../cpp/imu.html#get_physical_orientation>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        imu_orientation_e_t imu_get_physical_orientation (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void initialize() {
          imu_reset(IMU_PORT);
            printf("IMU orientation %d\n", imu_get_physical_orientation(IMU_PORT));

        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The Inertial Sensor's physical orientation, or ``PROS_ERR`` if the operation failed, setting ``errno``. 

---

imu_tare_heading
---------

Resets the current reading of the Inertial Sensor's heading to zero.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

Analogous to `pros::Imu::tare_heading <../cpp/imu.html#tare_heading>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_tare_heading (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_tare_heading(IMU_PORT);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_tare_rotation
---------

Resets the current reading of the Inertial Sensor's rotation to zero.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

Analogous to `pros::Imu::tare_rotation <../cpp/imu.html#tare_rotation>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_tare_rotation (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_tare_rotation(IMU_PORT);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_tare_pitch
---------

Resets the current reading of the Inertial Sensor's pitch to zero.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is stil calibrating.

Analogous to `pros::Imu::tare_pitch <../cpp/imu.html#tare_pitch>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_tare_pitch (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_tare_pitch(IMU_PORT);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_tare_roll
---------

Resets the current reading of the Inertial Sensor's roll to zero.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

Analogous to `pros::Imu::tare_roll <../cpp/imu.html#tare_roll>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_tare_roll (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_tare_roll(IMU_PORT);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_tare_yaw
---------

Resets the current reading of the Inertial Sensor's yaw to zero.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

Analogous to `pros::Imu::tare_yaw <../cpp/imu.html#tare_yaw>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_tare_yaw (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_tare_yaw(IMU_PORT);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_tare_euler
---------

Reset all 3 euler values of the Inertial Sensor to 0.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

Analogous to `pros::Imu::tare_euler <../cpp/imu.html#tare_euler>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_tare_euler (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_tare_euler(IMU_PORT);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_tare
---------

Resets all 5 values of the Inertial Sensor to 0.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

Analogous to `pros::Imu::tare <../cpp/imu.html#tare>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_tare (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_tare(IMU_PORT);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_set_euler
---------

Sets the current reading of the Inertial Sensor's euler values to
target euler values. Will default to +/- 180 if target exceeds +/- 180.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

Analogous to `pros::Imu::set_euler <../cpp/imu.html#set_euler>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_set_euler (uint8_t port, euler_s_t target)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_set_euler(IMU_PORT, {45,45,45});
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 target       The target euler values for the euler values from 1-21
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_set_rotation
---------

Sets the current reading of the Inertial Sensor's rotation to target value.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

Analogous to `pros::Imu::set_rotation <../cpp/imu.html#set_rotation>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_set_rotation (uint8_t port, double target)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_set_rotation(IMU_PORT, 45);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 target       The target value for the rotation value to be set to
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_set_heading
---------

Sets the current reading of the Inertial Sensor's heading to target value
Target will default to 360 if above 360 and default to 0 if below 0.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

Analogous to `pros::Imu::set_heading <../cpp/imu.html#set_heading>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_set_heading (uint8_t port, double target)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_set_heading(IMU_PORT, 45);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 target       The target value for the heading value to be set to
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_set_pitch
---------

Sets the current reading of the Inertial Sensor's pitch to target value
Will default to +/- 180 if target exceeds +/- 180.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

Analogous to `pros::Imu::set_pitch <../cpp/imu.html#set_pitch>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_set_pitch (uint8_t port, double target)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_set_pitch(IMU_PORT, 45);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 target       The target value for the pitch value to be set to
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_set_roll
---------

Sets the current reading of the Inertial Sensor's roll to target value
Will default to +/- 180 if target exceeds +/- 180.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

Analogous to `pros::Imu::set_roll <../cpp/imu.html#set_roll>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_set_roll (uint8_t port, double target)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_set_roll(IMU_PORT, 45);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 target       The target value for the roll value to be set to
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

imu_set_yaw
---------

Sets the current reading of the Inertial Sensor's yaw to target value
Will default to +/- 180 if target exceeds +/- 180.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

Analogous to `pros::Imu::set_yaw <../cpp/imu.html#set_yaw>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t imu_set_yaw (uint8_t port, double target)

   .. tab :: Example
      .. highlight:: c
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_set_yaw(IMU_PORT, 45);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 target       The target value for the yaw value to be set to
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

Enumerated Values
=================

imu_status_e_t
--------------

Indicates IMU status.

::

  typedef enum imu_status_e {
    E_IMU_STATUS_CALIBRATING = 0x01,
    E_IMU_STATUS_ERROR = 0xFF,
  } imu_status_e_t;

================================== =====================================================================================
 Value
================================== =====================================================================================
E_IMU_STATUS_CALIBRATING            The IMU is calibrating
E_IMU_STATUS_ERROR                  Used to indicate that an error state was reached in the ``imu_get_status`` function
================================== =====================================================================================

---

imu_orientation_e_t
-------------------

Indicates IMU physical orientation.

::

typedef enum imu_orientation_e {
	E_IMU_Z_UP = 0,    // IMU has the Z axis UP (VEX Logo facing DOWN)
	E_IMU_Z_DOWN = 1,  // IMU has the Z axis DOWN (VEX Logo facing UP)
	E_IMU_X_UP = 2,    // IMU has the X axis UP
	E_IMU_X_DOWN = 3,  // IMU has the X axis DOWN
	E_IMU_Y_UP = 4,    // IMU has the Y axis UP
	E_IMU_Y_DOWN = 5,  // IMU has the Y axis DOWN
} imu_orientation_e_t;

================================== =====================================================================================
 Value
================================== =====================================================================================
E_IMU_Z_UP                          IMU has the Z axis UP (VEX Logo facing DOWN)
E_IMU_Z_DOWN                        IMU has the Z axis DOWN (VEX Logo facing UP)
E_IMU_X_UP                          IMU has the X axis UP
E_IMU_X_DOWN                        IMU has the X axis DOWN 
E_IMU_Y_UP                          IMU has the Y axis UP
E_IMU_Y_DOWN                        IMU has the Y axis DOWN 
================================== =====================================================================================

Structures
==========

imu_raw_s
---------

::

  struct imu_raw_s {
    double x;
    double y;
    double z;
  };

---

Typedefs
========

quaternion_s_t
--------------

::

  typedef struct __attribute__((__packed__)) quaternion_s {
    double x;
    double y;
    double z;
    double w;
  } quaternion_s_t;

---

euler_s_t
---------

::

  typedef struct __attribute__((__packed__)) euler_s {
    double pitch;
    double roll;
    double yaw;
  } euler_s_t;

---

imu_gyro_s_t
------------

::

  typedef struct imu_raw_s imu_gyro_s_t;

---

imu_accel_s_t
-------------

::

  typedef struct imu_raw_s imu_accel_s_t;

---
