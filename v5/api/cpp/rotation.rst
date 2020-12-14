.. highlight:: cpp
   :linenothreshold: 5
   
=====================
VEX Rotation Sensor C++ API
=====================

.. contents:: :local:

pros::Rotation
============

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::Rotation(const std::uint8_t port)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ROTATION_PORT 1

        void initialize() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
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

Reset the current absolute position to be the same as the Rotation Sensor angle.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t reverse( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          while (true) {
           if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_sensor.reverse(); //Rotation sensor recently reversed
                rotation_sensor.reset(); //Reversal causes position to be multiplied by -1.
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

reset_position
~~~~~~~~~~~~~~~~~~

Reset the Rotation Sensor position to 0.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t reset_position()

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          while (true) {
           if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_sensor.reset_position();
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if operation successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

set_reversed
~~~~~~~~~~~~

Reverse the Rotation Sensor's direction

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t set_reverse(bool value)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          while (true) {
           if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_sensor.set_reversed(true);
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 value        True or false on whether the positive direction is counter clockwise or not.
============ =================================================================================================================

**Returns:** ``1`` if operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----

set_position
~~~~~~~~~~~~

Set the Rotation sensor to a desired rotation value.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t set_position(std::uint32_t position)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          while (true) {
           if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_sensor.set_position(0); //sets current position to 0
            }
            pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 position     The desired position to be set in terms of hundreths of ticks
============ =================================================================================================================

**Returns:** Rotation sensor position or PROS_ERR if the operation failed, setting ``errno``.

get_position
~~~~~~~~~~~~

Get the Rotation Sensor's current position in centidegrees

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t get_position( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          while (true) {
		        printf("Tick Position: %ld \n", rotation_sensor.get_position());
		        pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Rotation sensor position or PROS_ERR if the operation failed, setting ``errno``.

----

get_velocity
~~~~~~~~~~~~

Get the Rotation Sensor's current velocity in centidegrees per second

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t get_velocity( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          while (true) {
		        printf("Rotational Velocity: %ld \n", rotation_sensor.get_velocity());
		        pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Rotation sensor velocity or PROS_ERR if the operation failed, setting ``errno``.

----

get_angle
~~~~~~~~~

Get the Rotation Sensor's current angle in centidegrees (0-36000)

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t get_angle( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          while (true) {
		        printf("Angle: %ld \n", rotation_sensor.get_angle());
		        pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** Rotation sensor's current angle from 0 to 36000 or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

get_reversed
~~~~~~~~~

Get the Rotation Sensor's reversed flag

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t get_reversed( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          while (true) {
		        printf("Rotation Sensor Reversed: %ld \n", rotation_sensor.get_reversed());
		        pros::delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** If the rotation sensor is reversed, or PROS_ERR if the operation failed, setting ``errno``.

----

reverse
~~~~~~~~~

Reverses the rotational sensor's positive counterclockwise/clockwise direction.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Rotation Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t reverse( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          pros::Rotation rotation_sensor(ROTATION_PORT);
          while (true) {
           if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
              rotation_sensor.reverse();
            }
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** ``1`` if operation was successful or PROS_ERR if the operation failed, setting ``errno``.

----
