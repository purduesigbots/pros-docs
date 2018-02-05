===========
Ultrasonics
===========

The ultrasonic sensor enables robots to measure distance. Ultrasonic
sensors accomplish by taking advantage of echoes. Sound echoes off of
most materials and speed travels at a reasonably consistent speed, so
measuring the amount of time for the sound to be transmitted and
received measures the distance away from an object. Ultrasonic sensors,
not surprisingly, use ultrasonic pings to determine distance. Sensors
that measure the amount of time for a signal to echo back are called
Time of Flight sensors (ToF).

VEX Ultrasonic sensors use two digital signals: one to produce the
ultrasonic ping, and one to detect the response. The "echo" port is
labeled by the cable with an orange wire. The "ping" port is determined
by the cable with a yellow wire.

PROS provides an ultrasonic library to automatically send out pulses and
determine how long the response takes.

main.h:

.. code:: c

    Ultrasonic sonar;

init.c:

.. code:: c

    void initialize() {
      // ...
      sonar = ultrasonicInit(orange_port_number, yellow_port_number);
      // ...
    }

opcontrol.c, auto.c, etc.:

.. code:: c

    #include "main.h"

    void myFunction() {
      // ...
      // Get ultrasonic reading in centimeters
      int distance = ultrasonicGet(sonar);
    }
