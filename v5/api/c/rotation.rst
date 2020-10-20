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

Resets rotation sensor by multiplying it by -1 only if the direction was recently reversed.
Also subtracts 180 degrees from the angle reading.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::get <../cpp/rotation.html#reset>`_.

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
                rotation_set_reversed(ROTATION_PORT, true);
                rotation_reset(ROTATION_PORT);  // sets previously positive value to negative one as an extra step
                                                // in the reversal if needed
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

rotation_set_reversed
----------------

Sets if the rotational sensor's positive/negative direction is reversed or not.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::get <../cpp/rotation.html#set_reversed>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

    int32_t rotation_set_reversed(uint8_t port, bool value);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_set_reversed(ROTATION_PORT, true);
            }
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
 value        True or false on whether the negative or positive directions are reversed for the rotation sensor.
============ =================================================================================================================

**Returns:** ``1`` if operation successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

rotation_get_reversed
----------------

Gets if the rotational sensor's positive/negative direction is reversed or not.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::get <../cpp/rotation.html#get_reversed>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

    int32_t rotation_get_reversed(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            printf("Rotation Reversed?: %d \n", rotation_get_reversed(ROTATION_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Whether the sensor is reversed or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

rotation_set_position
----------------

Set the Rotation sensor to a desired rotation value in terms of hundreths of degrees.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

Analogous to `pros::Rotation::get <../cpp/rotation.html#set_position>`_.

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

rotation_get_position
----------------

Get the Rotation sensor's current rotational position in terms of hundreths of degrees.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a Rotation Sensor.

Analogous to `pros::Rotation::get <../cpp/rotation.html#get_position>`_.

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

rotation_get_angle
----------------

Get the Rotation sensor's current anglular position. In terms of hundreths of degrees.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a Rotation Sensor.

Analogous to `pros::Rotation::get <../cpp/rotation.html#get_angle>`_.

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

rotation_get_velocity
----------------

Get the Rotation sensor's current rotational velocity.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a Rotation Sensor.

Analogous to `pros::Rotation::get <../cpp/rotation.html#get_velocity>`_.

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
