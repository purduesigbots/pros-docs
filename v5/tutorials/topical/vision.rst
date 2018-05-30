=============
Vision Sensor
=============

.. note:: For a full list of functions for interacting with the V5 Vision Sensor, see its
          `C API <../../api/c/vision.html>`_ and `C++ API <../../api/cpp/vision.html>`_.

Setting Signatures
==================

The first step to using the vision sensor is setting color signatures for the sensor
to recognize as objects. This is done through the V5 Vision Utility program.

Retrieving Objects
==================

The primary function of the vision sensor is returning objects, or blobs of color
detected by the sensor. The characteristics of an object are defined in
`vision_object_s_t <../../api/c/vision.html#vision_object_s_t>`_.

By Size
-------

The simplest way to interact with the vision sensor is to get an object by its size.
0 is the largest object detected by the sensor.

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: opcontrol.c
         :linenos:

         #define VISION_PORT 1

         void opcontrol() {
           while (true) {
             vision_object_s_t rtn = vision_get_by_size(VISION_PORT, 0);
             // Gets the largest object
             printf("sig: %d", rtn.signature);
             delay(2);
           }
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: opcontrol.cpp
         :linenos:

         #define VISION_PORT 1
         #define EXAMPLE_SIG 1

         void opcontrol() {
           pros::Vision vision_sensor (VISION_PORT);
           while (true) {
             vision_object_s_t rtn = vision_sensor.get_by_sig(0);
             // Gets the largest object
             std::cout << "sig: " << rtn.signature;
             pros::delay(2);
           }
         }


By Signature
------------

If you have multiple signatures saved to the vision signature, you will most likely
want to only look for objects of a particular signature. The ``get_by_sig()`` function
implements this functionality.

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: opcontrol.c
         :linenos:

         #define VISION_PORT 1
         #define EXAMPLE_SIG 1

         void opcontrol() {
           while (true) {
             vision_object_s_t rtn = vision_get_by_sig(VISION_PORT, 0, EXAMPLE_SIG);
             // Gets the largest object of the EXAMPLE_SIG signature
             printf("sig: %d", rtn.signature);
             // Prints "sig: 1"
             delay(2);
           }
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: opcontrol.cpp
         :linenos:

         #define VISION_PORT 1
         #define EXAMPLE_SIG 1

         void opcontrol() {
           pros::Vision vision_sensor (VISION_PORT);
           while (true) {
             vision_object_s_t rtn = vision_sensor.get_by_sig(0, EXAMPLE_SIG);
             // Gets the largest object of the EXAMPLE_SIG signature
             std::cout << "sig: " << rtn.signature;
             // Prints "sig: 1"
             pros::delay(2);
           }
         }

Changing the Object Coordinates
===============================

Each returned object from the vision sensor comes with a set of coordinates telling
where the object was found in the vision sensor's field of view. The default behavior
is to return the coordinates as a function of distance from the top left corner
of the field of view - so positive y is downward and positive x is right. With the
PROS API, you can change this behavior so that the center of the Field Of View is
the (0,0) point for object coordinates. Positive y is still downward and positive
x is still right, but negative y is upward of center and negative x is left of center
in this configuration.

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: initialize.c
         :linenos:

         #define VISION_PORT 1

         void initialize() {
           vision_set_zero_point(VISION_PORT, E_VISION_ZERO_CENTER);
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: initialize.cpp
         :linenos:

         #define VISION_PORT 1

         void initialize() {
           pros::Vision vision_sensor (VISION_PORT, pros::c::E_VISION_ZERO_CENTER);
         }
