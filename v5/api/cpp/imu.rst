.. highlight:: cpp
   :linenothreshold: 5
   
=====================
VEX Inertial Sensor C++ API
=====================

.. note:: ``pros::IMU`` can also be used to refer to ``pros::Imu``

.. contents:: :local:

pros::Imu
============

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::Imu(const std::uint8_t port)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

============ =========================================================================
 Parameters
============ =========================================================================
 port         The V5 port number from 1-21
============ =========================================================================

----

Functions
---------

reset
~~~~~~~~~

Calibrate IMU.

This takes approximately 2 seconds, and is blocking until the IMU status is set properly if "blocking" is false (by default).
By default, this function will only block until IMU status is set, and not blocking while the IMU is resetting if "blocking" is false.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t reset(bool blocking = false)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          int time = pros::millis();
          int iter = 0;
          while (imu_sensor.is_calibrating()) {
            printf("IMU calibrating... %d\n", iter);
            iter += 10;
            pros::delay(10);
          }
          /*
            to avoid the while loop use this:
            imu_sensor.reset(true);
            (the print statement below won't print right value if this was used)
          */

          // should print about 2000 ms
          printf("IMU is done calibrating (took %d ms)\n", iter - time);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 blocking     If true, the function is blocking during the reset phase. (optional, will be false by default)
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

get_rotation
~~~~~~~~~~~~

Get the total number of degrees the Inertial Sensor has spun about the z-axis.

This value is theoretically unbounded. Clockwise rotations are represented with
positive degree values, while counterclockwise rotations are represented with negative ones.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double get_rotation( ) 
        
   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void opcontrol() {
          pros::Imu imu_sensor(IMU_PORT);
          while (true) {
		        printf("IMU get rotation: %f degrees\n", imu_sensor.get_rotation());
		        pros::delay(20);
          }
        }

**Returns:** The degree value or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----

get_heading
~~~~~~~~~~~

Get the Inertial Sensor's heading relative to the initial direction of its x-axis.

This value is bounded by [0,360). Clockwise rotations are represented with positive
degree values, while counterclockwise rotations are represented with negative ones.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double get_heading ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void opcontrol() {
          while (true) {
          	pros::Imu imu_sensor(IMU_PORT);
		        printf("IMU get heading: %f degrees\n", imu_sensor.get_heading());
		        pros::delay(20);
          }
        }

**Returns:** The degree value or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----

get_quaternion
~~~~~~~~~~~~~~

Get a quaternion representing the Inertial Sensor's orientation.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         pros::c::quaternion_s_t get_quaternion( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void opcontrol() {
          pros::Imu imu_sensor(IMU_PORT);
          while (true) {
		        pros::c::quaternion_s_t qt = imu_sensor.get_quaternion();
		        printf("IMU quaternion: {x: %f, y: %f, z: %f, w: %f}\n", qt.x, qt.y, qt.z, qt.w);
		        pros::delay(20);
          }
        }

**Returns:** The quaternion representing the sensor's orientation. If the operation failed, all the quaternion's members are
filled with ``PROS_ERR_F`` and ``errno`` is set.

----

get_euler
~~~~~~~~~

Get the Euler angles representing the Inertial Sensor's orientation.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::c::euler_s_t get_euler( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void opcontrol() {
          pros::Imu imu_sensor(IMU_PORT);
          while (true) {
		        pros::c::euler_s_t eu = imu_sensor.get_euler();
	          printf("IMU euler angles: {pitch: %f, roll: %f, yaw: %f}\n", eu.pitch, eu.roll, eu.yaw);
		        pros::delay(20);
          }
        }

**Returns:** The Euler angles representing the sensor's orientation. If the operation failed, all the structure's members are
filled with ``PROS_ERR_F`` and ``errno`` is set.

----

get_pitch
~~~~~~~~~

Get the Inertial Sensor's pitch angle bounded by (-180,180).

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::
      
        double get_pitch( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void opcontrol() {
          pros::Imu imu_sensor(IMU_PORT);
          while (true) {
		        printf("IMU pitch: %f\n", imu_sensor.get_pitch());
		        pros::delay(20);
          }
        }

**Returns:** The pitch angle, or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----

get_roll
~~~~~~~~

Get the Inertial Sensor's roll angle bounded by (-180,180).

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double get_roll ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void opcontrol() {
          pros::Imu imu_sensor(IMU_PORT);
          while (true) {
            printf("IMU roll: %f\n", imu_sensor.get_roll());
		        pros::delay(20);
          }
        }

**Returns:** The roll angle, or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----

get_yaw
~~~~~~~

Get the Inertial Sensor's yaw angle bounded by (-180,180).

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double get_yaw ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void opcontrol() {
          pros::Imu imu_sensor(IMU_PORT);
          while (true) {
		        printf("IMU yaw: %f\n", imu_sensor.get_yaw());
		        pros::delay(20);
          }
        }

**Returns:** The yaw angle, or ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----

get_gyro_rate
~~~~~~~~~~~~~

Get the Inertial Sensor's raw gyroscope values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::
      
        pros::c::imu_gyro_s_t get_gyro_rate( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void opcontrol() {
          pros::Imu imu_sensor(IMU_PORT);
          while (true) {
		        pros::c::imu_gyro_s_t gyro = imu_sensor.get_gyro_rate();
		        printf("IMU gyro values: {x: %f, y: %f, z: %f}\n", gyro.x, gyro.y, gyro.z);
		        pros::delay(20);
          }
        }

**Returns:** The raw gyroscope values. If the operation failed, all the structure's members are filled with ``PROS_ERR_F`` and
``errno`` is set.

----

tare_rotation
~~~~~~~~~~~~~

Resets the current reading of the Inertial Sensor's rotation to zero.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t tare_rotation( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
        }

        void opcontrol() {
          int time = pros::millis();
          int iter = 0;
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_sensor::tare_rotation(IMU_PORT);
            }
            pros::delay(20);
          }
        }


**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

tare_heading
~~~~~~~~~

Resets the current reading of the Inertial Sensor's heading to zero.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t tare_heading( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          int time = pros::millis();
          int iter = 0;
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_sensor::tare_heading(IMU_PORT);
            }
            pros::delay(20);
          }
        }


**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

tare_pitch
~~~~~~~~~

Resets the current reading of the Inertial Sensor's pitch to zero.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t tare_pitch( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          int time = pros::millis();
          int iter = 0;
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_sensor::tare_pitch(IMU_PORT);
            }
            pros::delay(20);
          }
        }


**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

tare_yaw
~~~~~~~~~

Resets the current reading of the Inertial Sensor's yaw to zero.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t tare_yaw( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          int time = pros::millis();
          int iter = 0;
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_sensor::tare_yaw(IMU_PORT);
            }
            pros::delay(20);
          }
        }


**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

tare_roll
~~~~~~~~~

Resets the current reading of the Inertial Sensor's roll to zero.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t tare_roll( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          int time = pros::millis();
          int iter = 0;
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_sensor::tare_roll(IMU_PORT);
            }
            pros::delay(20);
          }
        }


**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

tare
~~~~~~~~~

Resets all 5 values of the Inertial Sensor to 0.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t tare( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_sensor::tare(IMU_PORT);
            }
            pros::delay(20);
          }
        }


**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

tare_euler
~~~~~~~~~

Reset all 3 euler values of the Inertial Sensor to 0.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t tare_euler( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu::tare(IMU_PORT);
            }
          }
          pros::delay(20);
        }


**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

set_heading
~~~~~~~~~

Sets the current reading of the Inertial Sensor's heading to target value.  Target will default to 360 if above 360 and default
to 0 if below 0.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t set_heading(const double target)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_sensor::set_heading(IMU_PORT,45);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 target       The target value for the heading value to be set to.
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

set_rotation
~~~~~~~~~

Sets the current reading of the Inertial Sensor's rotation to target value.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t set_rotation(const double target)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_sensor::set_rotation(IMU_PORT,45);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 target       The target value for the rotation value to be set to.
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

set_yaw
~~~~~~~~~

Sets the current reading of the Inertial Sensor's yaw to target value.  Will default to +/- 180 if target exceeds +/- 180.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t set_yaw(const double target)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_sensor::set_yaw(IMU_PORT,45);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 target       The target value for yaw value to be set to.
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

set_pitch
~~~~~~~~~

Sets the current reading of the Inertial Sensor's pitch to target value.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t set_pitch(const double target )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_sensor::set_pitch(IMU_PORT,45);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 target       The target value for the pitch value to be set to.
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

set_roll
~~~~~~~~~

Sets the current reading of the Inertial Sensor's roll to target value.  Will default to +/- 180 if target exceeds +/- 180.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t set_roll(const double target )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_sensor::set_roll(IMU_PORT,45);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 target       The target value for the roll to be set to.
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

set_euler
~~~~~~~~~

Sets the current reading of the Inertial Sensor's euler values to target euler values. Will default to +/- 180 if
target exceeds +/- 180.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is still calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t set_euler(const pros::c::euler_s_t target )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor(IMU_PORT);
          imu_sensor.reset();
        }

        void opcontrol() {
          while (true) {
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              imu_sensor::set_euler(IMU_PORT,{45,45,45});
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 target       The target euler values for the euler values to be set to.
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

get_accel
~~~~~~~~~

Get the Inertial Sensor's raw accelerometer values.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.
- ``EAGAIN`` - The sensor is already calibrating.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

	      pros::c::imu_gyro_s_t get_accel( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void opcontrol() {
          pros::Imu imu_sensor(IMU_PORT);
          while (true) {
		        pros::c::imu_accel_s_t accel = imu_sensor.get_accel();
		        printf("IMU accel values: {x: %f, y: %f, z: %f}\n", accel.x, accel.y, accel.z);
		        pros::delay(20);
          }
        }


**Returns:** The raw accelerometer values. If the operation failed, all the structure's members are filled with ``PROS_ERR_F`` and
``errno`` is set.

----

get_status
~~~~~~~~~~

Get the Inertial Sensor's status.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

	      pros::c::imu_status_e_t get_status( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
        	pros::Imu imu_sensor (IMU_PORT);
	        imu_sensor.reset();
        }

        void opcontrol() {
	        int time = pros::millis();
	        int iter = 0;
	        while (imu_sensor.get_status() & pros::c::E_IMU_STATUS_CALIBRATING) {
		        printf("IMU calibrating... %d\n", iter);
		        iter += 10;
		        pros::delay(10);
	        }
          // should print about 2000 ms
          printf("IMU is done calibrating (took %d ms)\n", iter - time);
        }


**Returns:** The Inertial Sensor's status code, or ``PROS_ERR`` if the operation failed, setting ``errno``. 

----

get_physical_orientation
~~~~~~~~~~~~~~~~~~~~~~~~

Get the Inertial Sensor's physical orientation.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Inertial Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

	      pros::c::imu_orientation_e_t get_physical_orientation( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
        	pros::Imu imu_sensor (IMU_PORT);
	        imu_sensor.reset();
		printf("IMU Orinetation %d", imu_sensor.get_physical_orientation());
        }



**Returns:** The Inertial Sensor's physical orientation, or ``PROS_ERR`` if the operation failed, setting ``errno``.
----

is_calibrating
~~~~~~~~~~~~~~

Check whether the IMU is calibrating

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool is_calibrating( ) 

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define IMU_PORT 1

        void initialize() {
          pros::Imu imu_sensor (IMU_PORT);
          if(imu_sensor.is_calibrating()){
            printf("imu_sensor is calibrating");
          }
        }


**Returns:** ``true`` if the if the V5 Inertial Sensor is calibrating or ``false`` if it is not.

----
