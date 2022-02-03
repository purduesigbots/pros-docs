.. highlight:: c
   :linenothreshold: 5

=========================
VEX Rotation Sensor C API
=========================

.. contents:: :local:

Functions
=========

rotation_reset
--------------

Reset the current absolute position to be the same as the Rotation Sensor angle.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::reset <../cpp/rotation.html#reset>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t rotation_reset(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_reset(ROTATION_PORT);
            }
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if operation successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

rotation_set_position
---------------------

Set the Rotation sensor to a desired rotation value.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::set_position <../cpp/rotation.html#set-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t rotation_set_position(uint8_t port, uint32_t position);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_set_position(ROTATION_PORT, 600);
            }
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 position     The desired position to be set in terms of hundreths of ticks
============ =================================================================================================================

**Returns:** ``1``  if operation successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

rotation_reset_position
-----------------------

Reset the Rotation Sensor position to 0.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::reset_position <../cpp/rotation.html#reset-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t rotation_reset_position(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_reset_position(ROTATION_PORT);
            }
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

rotation_get_position
---------------------

Get the Rotation Sensor's current position in centidegrees

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a Rotation Sensor.

Analogous to `pros::Rotation::get_position <../cpp/rotation.html#get-position>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t rotation_get_position(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            printf("Position: %d Ticks \n", rotation_get_position(ROTATION_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Rotation sensor's absolute position in ticks or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

rotation_get_velocity
---------------------

Get the Rotation Sensor's current velocity in centidegrees per second

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a Rotation Sensor.

Analogous to `pros::Rotation::get_velocity <../cpp/rotation.html#get-velocity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t rotation_get_velocity(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            printf("Velocity: %d Ticks \n", rotation_get_velocity(ROTATION_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Rotation sensor's rotational velocity or ``PROS_ERR`` if the operation failed, setting ``errno``.

----


rotation_get_angle
------------------

Get the Rotation Sensor's current angle in centidegrees (0-36000)

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a Rotation Sensor.

Analogous to `pros::Rotation::get_angle <../cpp/rotation.html#get-angle>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t rotation_get_angle(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            printf("Angle: %d Ticks \n", rotation_get_angle(ROTATION_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Rotation sensor's current angle from 0 to 36000 or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

rotation_set_reversed
---------------------

Reverse the Rotation Sensor's direction

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::set_reversed <../cpp/rotation.html#set-reversed>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t rotation_set_reversed(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          while (true) {
           if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_set_reversed(ROTATION_PORT);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

rotation_init_reverse
---------------------

Reverse the Rotation Sensor's direction during initialization

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::set_reversed <../cpp/rotation.html#set-reversed>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t rotation_init_reverse(uint8_t port, bool reverse_flag)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT, true);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 reverse_flag True or false on whether the positive direction is counter clockwise or not.
============ =================================================================================================================

**Returns:** ``1`` if operation was successful or PROS_ERR if the operation failed, setting ``errno``.


----

rotation_reverse
----------------

Reverses the rotational sensor's positive counterclockwise/clockwise direction.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::reverse <../cpp/rotation.html#reverse>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t rotation_reverse(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          while (true) {
           if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_reverse(ROTATION_PORT);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

rotation_get_reversed
---------------------

Get the Rotation Sensor's reversed flag

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::get_reversed <../cpp/rotation.html#get-reversed>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t rotation_get_reverse(uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          while (true) {
           if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_get_reversed(ROTATION_PORT);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Boolean value of Rotation Sensor's reversed flag or PROS_ERR if the operation failed, setting ``errno``.

----

rotation_set_data_rate
---------------------

Set the Rotation Sensor's refresh interval in milliseconds.

The rate may be specified in increments of 5ms, and will be rounded down to the nearest increment. The minimum allowable refresh rate is 5ms. The default rate is 10ms.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::get_reversed <../cpp/rotation.html#set-data-rate>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t rotation_set_data_rate(uint8_t port, uint32_t rate)

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void initialize() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          rotation_set_data_rate(ROTATION_PORT, 5);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 rate         The data refresh interval in milliseconds
============ =================================================================================================================

**Returns:** ``1`` if the operation was successful or PROS_ERR if the operation failed, setting ``errno``.
