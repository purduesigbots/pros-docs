==========
GPS Sensor
==========

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
         :caption: opcontrol.cpp
         :linenos:

         #define GPS_PORT 1

         void opcontrol() {
           pros::Motor gps1(GPS_PORT, -1.5, -1.14, 270);
           // Center of the field is (0,0), uses 4 quadrant cartesian system for coordinates
           // This is another example where the position is set after the constructor is called:
           gps1.set_position(-1.5, -1.14, 270);
         }

   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: initialize.c
         :linenos:

         #define GPS_PORT 1

         void initialize() {
           gps_set_position(GPS_PORT, -1.5, -1.14, 270);
         }

Simple Usage (In progress)
============

The easiest way to interact with the motors is through the `motor_move <../../api/c/motors.html#motor-move>`_
function. This is analogous to the `motorSet <../../../cortex/api/index.html#motorSet>`_
function from PROS 2.

.. tabs::
   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: opcontrol.cpp
         :linenos:

         #define MOTOR_PORT 1

         void opcontrol() {
           pros::Motor drive_left (MOTOR_PORT);
           pros::Controller master (E_CONTROLLER_MASTER);
           while (true) {
             drive_left.move(master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y));
             pros::delay(2);
           }
         }

   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: opcontrol.c
         :linenos:

         #define MOTOR_PORT 1

         void opcontrol() {
           while (true) {
             motor_move(MOTOR_PORT, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
             delay(2);
           }
         }

Autonomous Movement
===================

The V5 Motors can move in a number of different ways that are better suited towards
autonomous movement than the simple ``motor_move()`` example shown above.

Profile Movements
-----------------

Profile movements are movements to a given position that are executed by the motor's
firmware. There are two functions that achieve this, ``motor_move_absolute()`` and
``motor_move_relative()``. These two functions are practically similar, but
``motor_move_relative()`` takes into account the zero position of the motor's encoder.

These functions are very well suited to movement in autonomous.

.. tabs::
   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: autonomous.cpp
         :linenos:

         #define MOTOR_PORT 1
         #define MOTOR_MAX_SPEED 100 // The motor has the 36 Gearset

         void autonomous() {
           pros::Motor drive_left (MOTOR_PORT);
           drive_left.move_relative(1000, MOTOR_MAX_SPEED);
           // This will move 1000 ticks forward
           drive_left.move_relative(1000, MOTOR_MAX_SPEED);
           // This moves an additional 1000 ticks forward
           drive_left.move_absolute(1000, MOTOR_MAX_SPEED);
           // This moves 1000 ticks backwards to the 1000 tick position
         }

   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: autonomous.c
         :linenos:

         #define MOTOR_PORT 1
         #define MOTOR_MAX_SPEED 100 // The motor has the 36 Gearset

         void autonomous() {
           motor_move_relative(MOTOR_PORT, 1000, MOTOR_MAX_SPEED);
           // This will move 1000 ticks forward
           motor_move_relative(MOTOR_PORT, 1000, MOTOR_MAX_SPEED);
           // This moves an additional 1000 ticks forward
           motor_move_absolute(MOTOR_PORT, 1000, MOTOR_MAX_SPEED);
           // This moves 1000 ticks backwards to the 1000 tick position
         }

For further reading material on the algorithms that create these profiled movement,
see `Mathematics of Motion Control Profiles <https://pdfs.semanticscholar.org/a229/fdba63d8d68abd09f70604d56cc07ee50f7d.pdf>`_
for the `Feedforward <https://en.wikipedia.org/wiki/Feed_forward_(control)>`_ control,
and `George Gillard's PID Explanation <http://georgegillard.com/documents/2-introduction-to-pid-controllers>`_
for the `feedback <https://en.wikipedia.org/wiki/Control_theory#PID_feedback_control>`_ control.

Velocity Controller Movement
----------------------------

The final ``move`` function available with the PROS Motor API is ``motor_move_velocity()``.
This ensures consistent velocity output from the motor through the use of
`PID <http://georgegillard.com/documents/2-introduction-to-pid-controllers>`_.

.. tabs::
   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: autonomous.cpp
         :linenos:

         #define MOTOR_PORT 1
         #define MOTOR_MAX_SPEED 100 // The motor has the 36 Gearset

         void autonomous() {
           pros::Motor drive_left (MOTOR_PORT);
           drive_left.move_velocity(MOTOR_MAX_SPEED);
           pros::delay(1000); // Move at full speed for 1 second
         }

   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: autonomous.c
         :linenos:

         #define MOTOR_PORT 1
         #define MOTOR_MAX_SPEED 100 // The motor has the 36 Gearset

         void autonomous() {
           motor_move_velocity(MOTOR_PORT, MOTOR_MAX_SPEED);
           delay(1000); // Move at full speed for 1 second
         }
