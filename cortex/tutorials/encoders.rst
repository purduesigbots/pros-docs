========
Encoders
========

Quad Encoder
------------

Quadrature encoders can measure the rotation of the attached axle on
your robot. Most common uses of this sensor type are to track distance
traveled by attaching them to your robots drivetrain and monitoring how
much the axle spins.

With these sensors 1 measured tick is 1 degree of revolution.

PROS provides a simple quadrature library to utilize these sensors. A
sample usage would be as follows:

main.h:

.. code:: c

    // Digital port number for top and bottom port of quad encoder
    #define QUAD_TOP_PORT 1
    #define QUAD_BOTTOM_PORT 2

    // Multiple encoders can be declared
    Encoder encoder;

init.c:

.. code:: c

    void initialize() {
        // ...
        encoder = encoderInit(QUAD_TOP_PORT, QUAD_BOTTOM_PORT, is_reversed);
        // ...
    }

opcontrol.c or auto.c:

.. code:: c

    void myFunction(){
        // ... Do work
        // Get encoder reading in degrees
        int counts = encoderGet(encoder);

        // ... Do other work
        // Reset encoder to zero
        encoderReset(encoder);
    }

Wiring Notes
~~~~~~~~~~~~

One important thing to note with the use of encoders is that they should
**not** be plugged into digital **port 10** on the Cortex. This is not
unique to PROS, it is simply a result of the way that `digital
interrupts <http://users.ece.utexas.edu/~valvano/Volume1/E-Book/C12_Interrupts.htm>`__
are configured for the Cortex. Other types of sensors may be used on
port 10 with no effect on their performance, but encoders cannot.

Integrated Motor Encoders (IMEs)
--------------------------------

See the `I2C
Communication </tutorials/i2c.md/#vex-integrated-motor-encoder-ime>`__
page.
