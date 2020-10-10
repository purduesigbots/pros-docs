.. highlight:: c
   :linenothreshold: 5

==================
VEX Distance Sensor C API
==================

.. contents:: :local:

Functions
=========

distance_get
----------------

Get the currently measured distance from the sensor in mm

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Distance Sensor.

Analogous to `pros::Distance::get <../cpp/distance.html#get>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t distance_get (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define DISTANCE_PORT 1

        void opcontrol() {
          while (true) {
            printf("Distance Value: %d mm\n", distance_get(DISTANCE_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The mm value or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

distance_get_confidence
----------------

Get the confidence in the distance reading

This is a value that has a range of 0 to 63. 63 means high confidence,
lower values imply less confidence. Confidence is only available
when distance is > 200mm (the value 10 is returned in this scenario).

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Distance Sensor.

Analogous to `pros::Distance::get_confidence <../cpp/distance.html#get_confidence>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t distance_get_confidence (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define DISTANCE_PORT 1

        void opcontrol() {
          while (true) {
            printf("Distance Confidence Value: %d\n", distance_get_confidence(DISTANCE_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The confidence value or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

distance_get_object_size
----------------

Get the current guess at relative object size

This is a value that has a range of 0 to 400.
A 18" x 30" grey card will return a value of approximately 75
in typical room lighting.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Distance Sensor.

Analogous to `pros::Distance::get_object_size <../cpp/distance.html#get_object_size>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t distance_get_object_size (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define DISTANCE_PORT 1

        void opcontrol() {
          while (true) {
            printf("Distance Object Size: %d\n", distance_get_object_size(DISTANCE_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The size value or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

distance_get_object_velocity
----------------

Get the object velocity in m/s

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as an Distance Sensor.

Analogous to `pros::Distance::get_object_size <../cpp/distance.html#get_object_size>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t distance_get_object_velocity (uint8_t port)

   .. tab :: Example
      .. highlight:: c
      ::

        #define DISTANCE_PORT 1

        void opcontrol() {
          while (true) {
            printf("Distance Object Velocity: %d m/s\n", distance_get_object_velocity(DISTANCE_PORT));
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The V5 port number from (1-21)
============ =================================================================================================================

**Returns:** The velocity value or ``PROS_ERR`` if the operation failed, setting ``errno``.

----