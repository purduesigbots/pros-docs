=======================
Using the GPS with PROS
=======================

.. note:: For a non-pros specific usage guide on GPS setup, please visit 
          `the VEX Knowledgebase <https://kb.vex.com/hc/en-us/articles/360061932711-Using-the-V5-GPS-Sensor>`_.

.. note:: For a full list of functions for interacting with the V5 GPS sensor, see its
          `C API <../../api/c/gps.html>`_ and `C++ API <../../api/cpp/gps.html>`_.

Initialization
==============

The GPS (Game Positioning System) Sensor requires some starting parameters to be accurate initially 
and throughout its path of travel.

.. image:: /images/tuts/gps.jpg

The first issue is that initially, the GPS camera may be pointed in a deadzone where the camera won't be able
to see enough of the strip to determine its location. The generalized measured area of the deadzone is depicted below:

.. image:: /images/tuts/gps_deadzone.jpg

To mitigate this issue, a constructor is available for setting the initial position (in meters) and heading (in degrees) 
before the GPS achieves a proper lock on the strip. Below, is an example demonstrating proper usage of this with an 
arbitrary starting location.

.. image:: /images/tuts/gps_set_position.jpg

.. tabs::
   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: main.cpp
         :linenos:

         #define GPS_PORT 1

         void initialize() {
           pros::Gps gps1(GPS_PORT, -1.5, -1.14, 270);
           // Center of the field is (0,0), uses 4 quadrant cartesian system for coordinates
           // This is another example where the position is set after the constructor is called:
           gps1.set_position(-1.5, -1.14, 270);
         }

   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: main.cpp
         :linenos:

         #define GPS_PORT 1

         void initialize() {
           gps_set_position(GPS_PORT, -1.5, -1.14, 270);
         }

To make sure that the robot position retains a consistent and accurate value between turns, the offset relative to
the center of origin for the GPS has to be set properly. 

.. note:: These numbers were recorded are most likely larger than the actual deadzone, and were found with a change-up field.

.. image:: /images/tuts/gps_set_origin.jpg

.. tabs::
   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: main.cpp
         :linenos:

         #define GPS_PORT 1

         void initialize() {
           // Note: 9 inches == .223 Meters
           pros::Gps gps1(GPS_PORT, .223, -.223);
           // Center of the field is (0,0), uses 4 quadrant cartesian system for coordinates
           // Another example where the position and origin are both set in the constructor:
           pros::Gps gps2(GPS_PORT, -1.5, -1.14, 90, .223, -.223);
         }

   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: main.cpp
         :linenos:

         #define GPS_PORT 1

         void initialize() {
           gps_set_origin(GPS_PORT, .223, -.223);
         }

Retrieving Data
===============

The meaning of the data retrieved by ``gps_get_status`` (C API) or ``.get_status()`` (C++ API) is 
displayed below:

.. image:: /images/tuts/gps_get_position.jpg

Since the GPS data is returned in a struct, we must retrieve the data from the struct every iteration
and access each member individually from that struct.

.. tabs::
   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: main.cpp
         :linenos:

         #define GPS_PORT 1

         void opcontrol() {
           pros::Gps gps1(GPS_PORT);
           pros::gps_status_s_t gpsData;
           while (true) {
             gpsData = gps1.get_status();
             pros::screen::print(TEXT_MEDIUM, 1, "X Position: %3f", gpsData.x);
             pros::screen::print(TEXT_MEDIUM, 2, "Y Position: %3f", gpsData.y);
             pros::screen::print(TEXT_MEDIUM, 3, "Pitch: %3f", gpsData.pitch);
             pros::screen::print(TEXT_MEDIUM, 4, "Roll: %3f", gpsData.roll);
             pros::screen::print(TEXT_MEDIUM, 5, "Yaw: %3f", gpsData.yaw);
             pros::delay(20);
           }
         }

   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: main.cpp
         :linenos:

         #define GPS_PORT 1

         void opcontrol() {
           pros::gps_status_s_t gpsData;
           while (true) {
             gpsData = gps_get_status(GPS_PORT);
             screen_print(TEXT_MEDIUM, 1, "X Position: %3f", gpsData.x);
             screen_print(TEXT_MEDIUM, 2, "Y Position: %3f", gpsData.y);
             screen_print(TEXT_MEDIUM, 3, "Pitch: %3f", gpsData.pitch);
             screen_print(TEXT_MEDIUM, 4, "Roll: %3f", gpsData.roll);
             screen_print(TEXT_MEDIUM, 5, "Yaw: %3f", gpsData.yaw);
             delay(20);
           }
         }

