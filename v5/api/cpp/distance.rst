.. highlight:: cpp
   :linenothreshold: 5
   
=====================
VEX Distance Sensor C++ API
=====================

.. contents:: :local:

pros::Distance
============

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::Distance(const std::uint8_t port)

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define DISTANCE_PORT 1

        void initialize() {
          pros::Distance distance_sensor(DISTANCE_PORT);
        }

============ =========================================================================
 Parameters
============ =========================================================================
 port         The V5 port number from 1-21
============ =========================================================================

----

Functions
---------

get
~~~~~~~~~

Get the currently measured distance from the sensor in mm

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Distance Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t get ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define DISTANCE_PORT 1

        void opcontrol() {
          pros::Distance distance_sensor(DISTANCE_PORT);
          while (true) {
		        printf("Distance: %d mm\n", distance_sensor.get());
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

get_confidence
~~~~~~~~~

Get the confidence in the distance reading

This is a value that has a range of 0 to 63. 63 means high confidence,
lower values imply less confidence. Confidence is only available
when distance is > 200mm (the value 10 is returned in this scenario).

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Distance Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t get_confidence ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define DISTANCE_PORT 1

        void opcontrol() {
          pros::Distance distance_sensor(DISTANCE_PORT);
          while (true) {
                printf("Distance Confidence Value: %d\n", distance_sensor.get_confidence(DISTANCE_PORT));
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

get_object_size
~~~~~~~~~

Get the current guess at relative object size

This is a value that has a range of 0 to 400.
A 18" x 30" grey card will return a value of approximately 75
in typical room lighting.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Distance Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t get_object_size ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define DISTANCE_PORT 1

        void opcontrol() {
          pros::Distance distance_sensor(DISTANCE_PORT);
          while (true) {
                printf("Distance Object Size: %d\n", distance_sensor.get_object_size(DISTANCE_PORT));
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

get_object_velocity
~~~~~~~~~

Get the object velocity in m/s

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Distance Sensor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t get_object_velocity ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define DISTANCE_PORT 1

        void opcontrol() {
          pros::Distance distance_sensor(DISTANCE_PORT);
          while (true) {
                printf("Distance Object Velocity: %d\n", distance_sensor.get_object_velocity(DISTANCE_PORT));
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