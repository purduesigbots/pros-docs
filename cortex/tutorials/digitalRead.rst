===============
Digital Sensors
===============

Buttons such as the limit switch that VEX provides are digital sensors.
These sensors are generally used as triggers for various events such as
a robot hitting an object or the wall. One special difference from other
sensors is that you need to configure the pin they are connected to as
an input. PROS provides a simple interface to perform such tasks that is
as follows:

main.h:

.. code:: c

    // digital port number limit switch is plugged into
    #define LIMIT_SWITCH 1

init.c:

.. code:: c

    void initializeIO(){
        // configure the pin that the limit switch is plugged into as an input
        pinMode(LIMIT_SWITCH, INPUT);
    }

opcontrol.c or auto.c:

.. code:: c

    void myFunction(){
        // ... Do work
        // digitalRead() will return LOW if PRESSED and HIGH if RELEASED
        if (digitalRead(LIMIT_SWITCH) == LOW){
            // ...
        }

        // ...
    }
