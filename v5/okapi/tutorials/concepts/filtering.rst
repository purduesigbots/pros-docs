=========
Filtering
=========

OkapiLib makes it easy to use any one of a number of various types of filters on sensors and controllers.
The specifics of how each filter works and should be initialized will be left to its API reference,
but this guide will help provide the general knowledge necessary to make the most out of OkapiLib's
filtering functionality.

Filtering Generic Sensor Input
==============================

It's possible with OkapiLib to filter any value that you want, which makes it easy to filter sensors.
The example below gives an example of filtering a sensor value.

.. highlight: cpp
.. code-block:: cpp
   :linenos:

   using namespace okapi;

   const int POTENTIOMETER_PORT = 1;
   const int NUM_AVE_POINTS = 5;

   Potentiometer exampleSensor(POTENTIOMETER_PORT);
   AverageFilter<NUM_AVE_POINTS> exampleFilter;

   void opcontrol() {
     while (true) {
       std::cout << "Current Sensor Reading: " << exampleFilter.filter(exampleSensor.get());
       pros::Task::delay(10);
     }
   }

The above example will print out the average of the last five readings of the potentiometer.

Adding a Filter to a Controller
===============================

Velocity PID Controllers often benefit from filtering the velocity reading. As a result, it is possible
to pass in a filter as an argument to the constructor for a Velocity PID Controller. Note -- filtering
will not have a positive impact on Position PID movements, and is not supported as a result.

Using a filter with a Velocity PID Controller can be done in the following manner:

.. highlight: cpp
.. code-block:: cpp
   :linenos:

   using namespace okapi;

   const double kP = 0.001;
   const double kD = 0.0001;
   const double kF = 0.0;
   const double kSF = 0.0;
   const int NUM_AVE_POINTS = 5;

   auto velMathArgs = VelMathArgs(imev5TPR, std::make_shared<AverageFilter<NUM_AVE_POINTS>>());
   auto exampleController = IterativeControllerFactory::velPID(kP, kD, kF, kSF, velMathArgs);

   void opcontrol() {
   }

To clarify step by step:

First a ``VelMath`` object needs to be created. This is used to calculate the motor's velocity for
use by the controller. The ``imeV5TPR`` value is the number of Ticks Per Revolution of the motor's
internal encoder, and is defined by OkapiLib. The ``std::make_shared<AverageFilter<5>>()`` portion
creates a Smart Pointer to an ``AverageFilter`` object that averages the last 5 values. Note that
the ``AverageFilter<NUM_AVE_POINTS>`` portion is identical to the first code example.

The ``VelMath`` pointer, along with the PID constants, are then passed to the ``IterativeControllerFactory``
to create a ``IterativeVelPIDController`` object.
