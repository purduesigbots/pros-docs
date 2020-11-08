.. highlight:: c
   :linenothreshold: 5

==================
VEX Rotation Sensor C API
==================

.. contents:: :local:

Functions
=========

rotation_reset
----------------

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
----------------

Set the Rotation sensor to a desired rotation value.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::set_position <../cpp/rotation.html#set_position>`_.

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
----------------

Reset the Rotation Sensor position to 0.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::set_position <../cpp/rotation.html#set_position>`_.

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
                rotation_reset_position(ROTATION_PORT);
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

rotation_get_position
----------------

Get the Rotation Sensor's current position in centidegrees

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a Rotation Sensor.

Analogous to `pros::Rotation::get_position <../cpp/rotation.html#get_position>`_.

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
----------------

Get the Rotation Sensor's current velocity in centidegrees per second

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a Rotation Sensor.

Analogous to `pros::Rotation::get_velocity <../cpp/rotation.html#get_velocity>`_.

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
----------------

Get the Rotation Sensor's current position in centidegrees

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a Rotation Sensor.

Analogous to `pros::Rotation::get_angle <../cpp/rotation.html#get_angle>`_.

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
~~~~~~~~~

Reverse the Rotation Sensor's direction

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::set_reversed <../cpp/rotation.html#set_reversed>`_.

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

rotation_reverse
~~~~~~~~~

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
~~~~~~~~~

Get the Rotation Sensor's reversed flag

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::get_reversed <../cpp/rotation.html#get_reversed>`_.

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