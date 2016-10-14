---
title: Gyroscope
---

One of the most powerful sensors available for the Vex Cortex is the Vex Yaw Rate Gyro. Through proper utilization of this sensors you can consistently make your robot perform precise turns.

### Warning
The Vex Yaw Rate Gyro is an analog sensor which means that it is very susceptible to analog noise during its operation. When utilizing this sensor, pay special attention to the connection wires between cortex and the gyro and keep them far away from motors.

PROS provides a gyro library to simplify using it. A sample usage would be as follows:

main.h:
```c
// Analog port number gyro is plugged into
#define GYRO_PORT 1

// Multiple gyros can be declared
Gyro gyro;
```

init.c:
```c
void initialize(){
    // ... Other sensor initialization and port configuration
    // If gyro reads inaccurately, change "0" to desired sensitivity
    // See documentation on gyroInit() for up-to-date sensitivity details

    gyro = gyroInit(GYRO_PORT, 0);
}
```

opcontrol.c or auto.c:
```c
void myFunction(){
    // ... Do work
    // Get gyro reading in degrees
    int heading = gyroGet(gyro);

    // ... Do other work
    // Reset the gyro to zero
    gyroReset(gyro);

    // ...
}
```
