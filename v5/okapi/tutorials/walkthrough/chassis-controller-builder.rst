==================================
Using the ChassisControllerBuilder
==================================

The ``ChassisControllerBuilder`` is a versatile and simple way to make a ``ChassisController``. This
tutorial will give an overview of how to use it and customize it for your robot.

Configuring motors
~~~~~~~~~~~~~~~~~~

The only required parameter is the motor configuration. Both skid-steer and x-drive layouts are
supported.

.. tabs ::
   .. tab :: Two motors by ports
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .build();
         }

   .. tab :: Two motors
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           Motor leftMotor(1);
           Motor rightMotor(-2);

           auto drive = ChassisControllerBuilder()
                          .withMotors(leftMotor, rightMotor)
                          .build();
         }

   .. tab :: More than two motors by ports
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(
                            {1, 2},  // Left motors are 1 & 2
                            {-3, -4} // Right motors are 3 & 4 (reversed)
                          )
                          .build();
         }

   .. tab :: More than two motors
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           MotorGroup leftMotors({1, 2});
           MotorGroup rightMotors({-3, -4});

           auto drive = ChassisControllerBuilder()
                          .withMotors(leftMotors, rightMotors)
                          .build();
         }

Configuring a gearset
~~~~~~~~~~~~~~~~~~~~~

You can pass in a gearset and external gear ratio directly.

.. tabs ::
   .. tab :: No external ratio
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withGearset(AbstractMotor::gearset::green) // Green gearset
                          .build();
         }

   .. tab :: With external ratio
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withGearset(AbstractMotor::gearset::green * 1.5) // Green gearset, external ratio of 1.5
                          .build();
         }

Configuring your robot dimensions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you want to command your robot in real-life units (inches, degrees, etc.) then you need to pass
in your robot's dimensions. Alternatively, if you want to fine-tune the scales, you could calculate
them by hand and pass them in directly. See the `ChassisScales
<../../api/chassis/controller/chassis-scales.html>`_ docs for the math to do this.

.. tabs ::
   .. tab :: Dimensions
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withGearset(AbstractMotor::gearset::green) // Green gearset
                          .withDimensions({{4_in, 11.5_in}, imev5GreenTPR}) // 4 inch wheel diameter, 11.5 inch wheelbase
                          .build();
         }

   .. tab :: Scales
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withGearset(AbstractMotor::gearset::green * 1.5) // Green gearset, external ratio of 1.5
                          .withDimensions({{1127.8696, 2.875}, imev5GreenTPR}) // Straight scale, turn scale
                          .build();
         }

Configuring your sensors
~~~~~~~~~~~~~~~~~~~~~~~~

If you do not use the motors' built-in encoders (e.g., you might use ADI encoders), then you will
need to pass those in as well.

.. tabs ::
   .. tab :: Encoders
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withSensors(
                            {'A', 'B'}, // Left encoder in ADI ports A & B
                            {'C', 'D', true}  // Right encoder in ADI ports C & D (reversed)
                          )
                          .build();
         }

Configuring PID gains
~~~~~~~~~~~~~~~~~~~~~

If you want to use OkapiLib's PID control instead of the built-in control, you need to pass in two or three sets of PID gains.

.. tabs ::
   .. tab :: Two sets
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withGains(
                            {0.001, 0, 0.0001}, // Distance controller gains
                            {0.001, 0, 0.0001}  // Turn controller gains
                          )
                          .build();
         }

   .. tab :: Three sets
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withGains(
                            {0.001, 0, 0.0001}, // Distance controller gains
                            {0.001, 0, 0.0001}, // Turn controller gains
                            {0.001, 0, 0.0001}  // Angle controller gains (helps drive straight)
                          )
                          .build();
         }

Configuring derivative filters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you are using OkapiLib's PID control instead of the built-in control, you can pass in derivative
term filters. These are applied to the PID controllers' derivative terms to smooth them. If you use
OkapiLib's PID control but do not specify any derivative filters, the default filter is a
``PassthroughFilter``. Take a look at the filtering API `here <../../api/filters/index.html>`_.

.. tabs ::
   .. tab :: One filter
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withGains(
                            {0.001, 0, 0.0001}, // Distance controller gains
                            {0.001, 0, 0.0001}  // Turn controller gains
                          )
                          .withDerivativeFilters(
                            std::make_unique<AverageFilter<3>>() // Distance controller filter
                          )
                          .build();
         }

   .. tab :: Two filters
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withGains(
                            {0.001, 0, 0.0001}, // Distance controller gains
                            {0.001, 0, 0.0001}  // Turn controller gains
                          )
                          .withDerivativeFilters(
                            std::make_unique<AverageFilter<3>>(), // Distance controller filter
                            std::make_unique<AverageFilter<3>>()  // Turn controller filter
                          )
                          .build();
         }

   .. tab :: Three filters
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withGains(
                            {0.001, 0, 0.0001}, // Distance controller gains
                            {0.001, 0, 0.0001}, // Turn controller gains
                            {0.001, 0, 0.0001}  // Angle controller gains (helps drive straight)
                          )
                          .withDerivativeFilters(
                            std::make_unique<AverageFilter<3>>(), // Distance controller filter
                            std::make_unique<AverageFilter<3>>(), // Turn controller filter
                            std::make_unique<AverageFilter<3>>()  // Angle controller filter
                          )
                          .build();
         }

Configuring maximum velocity and voltage
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can change the default maximum velocity or voltage.

.. tabs ::
   .. tab :: Max velocity
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withMaxVelocity(100)
                          .build();
         }

   .. tab :: Max voltage
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withMaxVoltage(10000)
                          .build();
         }

Configuring the TimeUtil
~~~~~~~~~~~~~~~~~~~~~~~~

You can also change the ``TimeUtil`` used for the controllers. This is how you can change the
settling behavior of the ``ChassisController``.

.. tabs ::
   .. tab :: Change SettledUtil
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withTimeUtil(TimeUtilFactory::withSettledUtilParams(50, 5, 250_ms))
                          .build();
         }

Configuring the Logger
~~~~~~~~~~~~~~~~~~~~~~

If you want the ``ChassisController`` and the classes it creates to log what they are doing, either
for debugging or other purposes, you can supply a ``Logger``.

.. tabs ::
   .. tab :: Log to the PROS terminal
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withLogger(
                            TimeUtilFactory::create().getTimer(), // It needs a Timer
                            "/ser/sout", // Output to the PROS terminal
                            Logger::LogLevel::debug // Most verbose log level
                          )
                          .build();
         }

   .. tab :: Log to the SD card
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         #include "okapi/api.hpp"
         using namespace okapi;

         void opcontrol() {
           auto drive = ChassisControllerBuilder()
                          .withMotors(1, -2) // Left motor is 1, right motor is 2 (reversed)
                          .withLogger(
                            TimeUtilFactory::create().getTimer(), // It needs a Timer
                            "/usd/test_logging.txt", // Output to a file on the SD card
                            Logger::LogLevel::debug  // Most verbose log level
                          )
                          .build();
         }

