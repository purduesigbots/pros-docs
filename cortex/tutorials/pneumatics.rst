==========
Pneumatics
==========

Pneumatics in VEX provide two-state linear actuation. They differ from
other digital sensors in that they are output signals. Therefore, the
default digital sensor configuration is insufficient.

init.c:

.. code:: c

    void initializeIO() {
      pinMode(1, OUTPUT); // configure digital port 1 as an output
      digitalWrite(1, LOW); // write LOW to port 1 (solenoid may be extended or not, depending on wiring)
    }

opcontrol.c, auto.c, etc.

.. code:: c

    void myFunction() {
      // ...
      digitalWrite(1, new_value); // write HIGH or LOW to port 1 in place of new_value
      // ...
    }
