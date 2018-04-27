==================
ADI (3 Wire Ports)
==================

.. note:: For a full list of functions for interacting with the ADI, see its
          `C API <../../api/c/adi.html>`_ and `C++ API <../../api/cpp/adi.html>`_.

Analog Sensors
==============

While computers, microcontrollers, and other devices that interface with
VEX robots are digital systems, most of the real world operates as
analog components, where a range of possible values exist instead of
simply an arrangement of 1s and 0s. Analog sensors like potentiometers and line
trackers are used to communicate with these analog real-world systems.
These sensors return a number within a preset range of values
in accordance with their input, as opposed to a digit sensor which
simply returns an on or off state.

To take these analog inputs and convert them to information that the
Cortex can actually use, ADCs (Analog to Digital Converters) are used on
each of the Analog In ports to convert the analog input signals (varying
voltage signals) to 12 bit integers. As a result, the range of all
analog sensors when used with the Cortex is 0 to 4095 (the range of a 12
bit unsigned integer).

Initialization
--------------

As with all ADI sensors, the first step to using the sensor is to set the configuration
for its ADI port.

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: initialize.c
         :linenos:

         #define ANALOG_SENSOR_PORT 1

         void initialize() {
           adi_port_set_config(ANALOG_SENSOR_PORT, E_ADI_ANALOG_IN);
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: initialize.cpp
         :linenos:

         #define ANALOG_SENSOR_PORT 1

         void initialize() {
           pros::ADIAnalogIn sensor (ANALOG_SENSOR_PORT);
           // Use the sensor
         }

Additionally, it is often worthwhile to calibrate analog sensors before using them
in the ``initialize()`` function. The
`analog_calibrate <../../api/c/adi.html#adi-analog-calibrate>`_ function collects
approximately 500 data samples over a period of half a
second and returns the average value received over the sampling period.
This average value can be used to account for variations like ambient light for
line trackers.

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: initialize.c
         :linenos:

         #define ANALOG_SENSOR_PORT 1

         void initialize() {
           adi_port_set_config(ANALOG_SENSOR_PORT, E_ADI_ANALOG_IN);
           adi_analog_calibrate(ANALOG_SENSOR_PORT);
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: initialize.cpp
         :linenos:

         #define ANALOG_SENSOR_PORT 1

         void initialize() {
           pros::ADIAnalogIn sensor (ANALOG_SENSOR_PORT);
           sensor.calibrate();
         }

Potentiometer
-------------

Potentiometers measure angular position and can be used to determine the
direction of rotation of its input. Potentiometers are best used in
applications such as lifts where the sensor is not at risk of being
rotated beyond its 250-degree physical constraint. Potentiometers
typically do not need to be calibrated, although it may be desired as it
helps account for possible shifting in the potentiometer mounting and to
find the actual range of the potentiometer due to its mechanical stops
as that range may be closer to 5-4090 instead of 0-4095. If the
potentiometer is not calibrated, the `analog_read <../../api/c/adi.html#adi-analog-read>`_
function may be used to obtain the raw
input value of the potentiometer. If the sensor was calibrated, the
`analog_read_calibrated <../../api/c/adi.html#adi-analog-read-calibrated>`_ function should be used,
as it will account for the sensor's
calibration and return more accurate results. The input to both of these
functions is the channel number of the sensor, and an integer is
returned.

Thus an example of use on a lift would look like:

.. tabs::
   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: autonomous.c
         :linenos:

         #define POTENTIOMETER_PORT 1
         #define MOTOR_PORT 1

         void autonomous() {
           //while the potentiometer is not at its maximum position
           while (adi_analog_read(POTENTIOMETER_PORT) < 4095) {
             motor_move(MOTOR_PORT, 127); //activate the lift
             delay(50);
           }
         }

   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: autonomous.cpp
         :linenos:

         #define POTENTIOMETER_PORT 1
         #define MOTOR_PORT 1

         void autonomous() {
           pros::ADIPotentiometer sensor (POTENTIOMETER_PORT);
           pros::Motor motor (MOTOR_PORT);
           //while the potentiometer is not at its maximum position
           while (sensor.get_value() < 4095) {
             motor = 127;
             pros::delay(50);
           }
         }

Line Tracker
------------

VEX Line Trackers operate by measuring the amount of light reflected to
the sensor and determining the existence of lines from the difference in
light reflected by the white tape and the dark tiles. The Line Trackers
return a value between 0 and 4095, with 0 being the lightest reading and
4095 the darkest. It is recommended that Line Trackers be calibrated to
account for changes in ambient light.

An example of Line Tracker use:

.. tabs::
   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: autonomous.c
         :linenos:

         #define LINE_TRACKER_PORT 1
         #define MOTOR_PORT 1

         void autonomous() {
           // Arbitrarily set the threshold for a line at 2000 quid
           while(analogRead(LINE_TRACKER_PORT) < 2000) {
             // drive forward until a line is hit
             motorSet(MOTOR_PORT,127);
             delay(50);
           }
         }


   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: autonomous.cpp
         :linenos:

         #define LINE_TRACKER_PORT 1
         #define MOTOR_PORT 1

         void autonomous() {
           pros::ADILineSensor sensor (LINE_TRACKER_PORT);
           pros::Motor motor (MOTOR_PORT);
           // Arbitrarily set the threshold for a line at 2000 quid
           while(sensor.get_value < 2000) {
             // drive forward until a line is hit
             motor = 127;
             delay(50);
           }
         }

Accelerometer
-------------

The VEX Accelerometer measures acceleration on the x, y, and z axes
simultaneously. Accelerometers can be used to infer velocity and
displacement, but due to the error induced by such integration it is
recommended that simply the acceleration data be used. By design of the
VEX Accelerometer each axis is treated as its own analog sensors. Due to
this the VEX Accelerometer requires three analog input ports on the
Cortex.

Example accelerometer use:

.. tabs::
   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: initialize.c
         :linenos:

         #define ACCELEROMETER_X 1
         #define ACCELEROMETER_Y 2
         #define ACCELEROMETER_Z 3

         void initialize() {
           analog_calibrate(ACCELEROMETER_X); //calibrates the x axis input
           analog_calibrate(ACCELEROMETER_Y); //calibrates the y axis input
           analog_calibrate(ACCELEROMETER_Z); //calibrates the z axis input

           int x_acc = analog_read_calibrated_HR(ACCELEROMETER_X);
           int y_acc = analog_read_calibrated_HR(ACCELEROMETER_Y);
           int z_acc = analog_read_calibrated_HR(ACCELEROMETER_Z);
           printf("X: %d, Y: %d, Z: %d\n", x_acc, y_acc, z_acc);
         }


   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: initialize.cpp
         :linenos:

         #define ACCELEROMETER_X 1
         #define ACCELEROMETER_Y 2
         #define ACCELEROMETER_Z 3

         void initialize() {
           pros::ADIAnalogIn acc_x (ACCELEROMETER_X);
           pros::ADIAnalogIn acc_y (ACCELEROMETER_Y);
           pros::ADIAnalogIn acc_z (ACCELEROMETER_Z);
           acc_x.calibrate(); //calibrates the x axis input
           acc_y.calibrate(); //calibrates the y axis input
           acc_z.calibrate(); //calibrates the z axis input

           int x_acc = acc_x.value_get_calibrated_HR();
           int y_acc = acc_y.value_get_calibrated_HR();
           int z_acc = acc_z.value_get_calibrated_HR();
           std::cout << "X: " << x_acc << "Y: " << y_acc << "Z: " z_acc;
         }

Digital Sensors
===============

Initialization
--------------

As with all ADI sensors, the first step to using the sensor is to set the configuration
for its ADI port.

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: initialize.c
         :linenos:

         #define DIGITAL_SENSOR_PORT 1

         void initialize() {
           adi_port_set_config(DIGITAL_SENSOR_PORT, E_ADI_DIGITAL_IN);
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: initialize.cpp
         :linenos:

         #define DIGITAL_SENSOR_PORT 1

         void initialize() {
           pros::ADIDigitalIn sensor (DIGITAL_SENSOR_PORT);
           // Use the sensor
         }

From there, using a digital sensor is fairly straightforward. Digital Sensors
always return a true or false (boolean) value.

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: autonomous.c
         :linenos:

         #define DIGITAL_SENSOR_PORT 1
         #define MOTOR_PORT 1

         void autonomous() {
           while (!adi_digital_read(DIGITAL_SENSOR_PORT)) {
             // Drive forward until the button digital sensor button is pressed
             motor_move(1, 127);
             delay(50);
           }
           // The button was pressed, stop moving.
           motor_move(1, 0);
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: autonomous.cpp
         :linenos:

         #define DIGITAL_SENSOR_PORT 1
         #define MOTOR_PORT 1

         void autonomous() {
           pros::ADIDigitalIn button (DIGITAL_SENSOR_PORT);
           pros::Motor drive (MOTOR_PORT);

           while (!button.get_value) {
             // Drive forward until the button digital sensor button is pressed
             drive = 127;
             pros::delay(50);
           }
           // The button was pressed, stop moving.
           drive =  0;
         }

Quad Encoder
------------

Quadrature encoders can measure the rotation of the attached axle on
your robot. Most common uses of this sensor type are to track distance
traveled by attaching them to your robots drivetrain and monitoring how
much the axle spins.

With these sensors 1 measured tick is 1 degree of revolution.

.. note:: Encoders must be plugged into the ADI such that the top wire
          is in an odd numbered port (1, 3, 5, 7 or 'A', 'C', 'E', or 'G'),
          and then the bottom wire must be in the next highest port number.

Encoders are initialized as such:

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: main.h
         :linenos:

         // Digital port number for top and bottom port of quad encoder
         #define QUAD_TOP_PORT 1
         #define QUAD_BOTTOM_PORT 2

         // Multiple encoders can be declared
         extern adi_encoder_t encoder;

      .. code-block:: c
         :caption: initialize.c
         :linenos:

         void initialize() {
           encoder = adi_encoder_init(QUAD_TOP_PORT, QUAD_BOTTOM_PORT, false);
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: initialize.cpp
         :linenos:

         // Digital port number for top and bottom port of quad encoder
         #define QUAD_TOP_PORT 1
         #define QUAD_BOTTOM_PORT 2

         void initialize() {
           pros::ADIEncoder encoder (QUAD_TOP_PORT, QUAD_BOTTOM_PORT, false);
         }

And then used in the following manner:

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: autonomous.c
         :linenos:

         #define MOTOR_PORT 1

         void autonomous() {
           while (adi_encoder_get(encoder) < 1000) {
             // Move forward for 1000 ticks
             motor_move(MOTOR_PORT, 127);
             delay(50);
           }
           motor_move(MOTOR_PORT, 0);
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: autonomous.cpp
         :linenos:

         #define MOTOR_PORT 1
         #define QUAD_TOP_PORT 1
         #define QUAD_BOTTOM_PORT 2

         void autonomous() {
           pros::ADIEncoder encoder (QUAD_TOP_PORT, QUAD_BOTTOM_PORT);
           pros::Motor drive (MOTOR_PORT);

           while (encoder.get_value() < 1000) {
             // Move forward for 1000 ticks
             drive = 127;
             pros::delay(50);
           }
           drive = 0;
         }

Ultrasonic
----------

Ultrasonic sensors are used in a manner that is very similar to encoders, given
that they are both two-wire sensors.

.. note:: Ultrasonic sensors must be plugged into the ADI such that the ECHO wire
          (the yellow INPUT cable) is in an odd numbered port (1, 3, 5, 7 or 'A', 'C', 'E', or 'G'),
          and then the PING wire (the orange OUTPUT cable) must be in the next highest port number.

Ultrasonic sensors are initialized as such:

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: main.h
         :linenos:

         // Digital port number for top and bottom port of quad encoder
         #define ULTRA_ECHO_PORT 1
         #define ULTRA_PING_PORT 2

         // Multiple encoders can be declared
         extern adi_ultrasonic_t ultrasonic;

      .. code-block:: c
         :caption: initialize.c
         :linenos:

         void initialize() {
           ultrasonic = adi_ultrasonic_init(ULTRA_ECHO_PORT, ULTRA_PING_PORT);
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: initialize.cpp
         :linenos:

         // Digital port number for top and bottom port of quad encoder
         #define ULTRA_ECHO_PORT 1
         #define ULTRA_PING_PORT 2

         void initialize() {
           pros::ADIUltrasonic ultrasonic (ULTRA_ECHO_PORT, ULTRA_PING_PORT);
         }

And then used in the following manner:

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: autonomous.c
         :linenos:

         #define MOTOR_PORT 1

         void autonomous() {
           while (adi_ultrasonic_get(ultrasonic) > 100) {
             // Move forward until the robot is 100 cm from a solid object
             motor_move(MOTOR_PORT, 127);
             delay(50);
           }
           motor_move(MOTOR_PORT, 0);
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: autonomous.cpp
         :linenos:

         #define MOTOR_PORT 1
         #define ULTRA_ECHO_PORT 1
         #define ULTRA_PING_PORT 2

         void autonomous() {
           pros::ADIUltrasonic ultrasonic (ULTRA_ECHO_PORT, ULTRA_PING_PORT);
           pros::Motor drive (MOTOR_PORT);

           while (ultrasonic.get_value() > 100) {
             // Move forward until the robot is 100 cm from a solid object
             drive = 127;
             pros::delay(50);
           }
           drive = 0;
         }

Pneumatics
----------

Pneumatics in VEX provide two-state linear actuation. They differ from
other digital sensors in that they are output signals. Therefore, the
default digital sensor configuration is insufficient.

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: initialize.c
         :linenos:

         #define DIGITAL_SENSOR_PORT 1

         void initialize() {
           adi_port_set_config(DIGITAL_SENSOR_PORT, E_ADI_DIGITAL_OUT);
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: initialize.cpp
         :linenos:

         #define DIGITAL_SENSOR_PORT 1

         void initialize() {
           pros::ADIDigitalOut piston (DIGITAL_SENSOR_PORT);
         }

And then the pneumatics are used as such:

.. tabs::
   .. group-tab :: C
      .. highlight:: c
      .. code-block:: c
         :caption: autonomous.c
         :linenos:

         #define DIGITAL_SENSOR_PORT 1

         void autonomous() {
           adi_digital_write(DIGITAL_SENSOR_PORT, true);
           delay(1000);
           adi_digital_write(DIGITAL_SENSOR_PORT, false);s
         }

   .. group-tab :: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: autonomous.cpp
         :linenos:

         #define DIGITAL_SENSOR_PORT 1

         void autonomous() {
           pros::ADIDigitalOut piston (DIGITAL_SENSOR_PORT);

           piston.set_value(true);
           pros::delay(1000);
           piston.set_value(false);
         }
