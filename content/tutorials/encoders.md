---
title: Encoders
---
## Quad Encoder
Quadrature encoders can measure the rotation of the attached axle on your robot. Most common uses of this sensor type are to track distance traveled by attaching them to your robots drivetrain and monitoring how much the axle spins.

With these sensors 1 measured tick is 1 degree of revolution.

PROS provides a simple quadrature library to utilize these sensors. A sample usage would be as follows:

main.h:
```c
// Digital port number for top and bottom port of quad encoder
#define QUAD_TOP_PORT 1
#define QUAD_BOTTOM_PORT 2

// Multiple encoders can be declared
Encoder encoder;
```

init.c:
```c
void initialize() {
    // ...
    encoder = encoderInit(QUAD_TOP_PORT, QUAD_BOTTOM_PORT, is_reversed);
    // ...
}
```

opcontrol.c or auto.c:
```c
void myFunction(){
    // ... Do work
    // Get encoder reading in degrees
    int counts = encoderGet(encoder);

    // ... Do other work
    // Reset encoder to zero
    encoderReset(encoder);
}
```

## Integrated Motor Encoder (IME)
IME function a lot like the quadrature encoder except they are directly attached to the motor rather than mounted to a mechanism on your robot. In addition these sensors utilize the I2C bus on the cortex and can be daisy chained together on your robot.

### Advance User Warning
When utilizing IMEs and 3rd party sensors on your I2C bus it is recommended that you write your own task to handle all the I2C communication to prevent resource thrashing. See the [I2C tutorial](./i2c/) for more details.

PROS provides a simple library for interacting with your IMEs. A sample usage would be as follows:

main.h:
```c
#define IME_LEFT_MOTOR 0
#define IME_RIGHT_MOTOR 1
#define NUMBER_OF_IME 2
```

init.c:
```c
void initialize(){
    // ...
    // Check count to ensure all IMEs are plugged in!
    int IMECount = imeInitializeAll();
    if(IMECount != NUMBER_OF_IME){
        // something has gone wrong
    }
}
```

opcontrolc or auto.c:
```c
void myFunction(){
    // ... do work
    // Get IME tick count in the "counts" variable
    // (conversion to rotations varies depending on the motor type in use)
    int counts;
    imeGet(0, &counts);

    // Or if #define was used:
    imeGet(IME_LEFT_MOTOR, &counts);

    // ... Do other work
    // Reset IME to zero
    imeReset(IME_RIGHT_MOTOR);
}
```
