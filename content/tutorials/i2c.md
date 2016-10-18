---
Title: I2C Communication
---

Inter-Integrated Circuit or I2C communications is but one of the common embedded communications protocols found commonly in robotics at large.  It sports a master-slave configuration as well as a unified bus allowing devices to be daisy-chained together in series if so desired.  A standard I2C bus consists of two signals seen by all devices - Serial Data (SDA) and Serial Clock (SCL).  These two signals are found alongisde +5V and GND power rails in the VEX Cortex I2C port to supply power to any attached I2C slave devices.

The primary I2C device encountered in VEX is the [Integrated Motor Encoder (IME)](http://www.vexrobotics.com/encoder-modules.html); VEX U teams or hobbyists may feel so inclined to connect third-party I2C sensors to their robots such as gyroscopes or lidars.  This tutorial aims to cover writing to and reading from I2C slave devices, a rundown of the IME-specific functions provided, and transisition into topics such as device initialization and polling tasks for managing multiple I2C slaves at once.

In a future update this tutorial will strive to provide a brief summary of the I2C protocol itself, but in lieu of our own take on the subject please review the excellent rundown provided by SparkFun located [here](https://learn.sparkfun.com/tutorials/i2c).


## Writing to an I2C Slave
PROS low-level and initialization functions establish the VEX Cortex as an I2C master device, thus the primary I2C action it will perform is writing to I2C slave devices attached to it.  During I2C slave initialization and operation it is common to modify single byte registers in non-sequential locations of the slave's memory.  In these cases PROS provides the [i2cWriteRegister()](/api/#i2cWriteRegister).  A sister function [i2cWrite()](/api/#i2cWrite) is better used when writing to sequential bytes of an I2C slave such as providing full 32-bit integer parameters.  When using [i2cWrite()](/api/#i2cWrite) the first byte of the data argument should be the first register of the slave being written to.  Shown below is a short example of initializing and configuring a fictional I2C slave sensor.

main.h
```c
// 7-bit address of the slave I2C device, right aligned
#define I2C_SLAVE_ADDR         0x4A
// Ficitonal "enable" register for the device
#define I2C_SLAVE_REG_ENABLE   0x38
// Fictional 32-bit "parameters" buffer for the device, 0x6D-0x6F
#define I2C_SLAVE_BUF_PARAMS   0x6D
```

init.c
```c
#include "main.h"

void initialize() {
    // Note the address of the first register of the buffer is first in the message
    uint8_t params[5] = {I2C_SLAVE_BUF_PARAMS, 0x50, 0x52, 0x79, 0x53};

    // Send the slave some parameters
    if (i2cWrite(I2C_SLAVE_ADDR, params, 5)) {
        printf("Parameters sent successfully!\n");
    }
    else {
        printf("ERROR: Failed to send parameters to I2C slave!\n");
    }

    // And then enable the device
    if (i2cWriteRegister(I2C_SLAVE_ADDR, I2C_I2C_SLAVE_REG_ENABLE, 0x01)) {
        printf("I2C slave enabled!\n");
    }
    else {
        printf("ERROR: Failed to enable the I2C slave!\n");
    }
}
```

## Reading from an I2C Slave
As the vast majority of I2C slave devices serve as sensors, PROS provides both [i2cRead()](/api/#i2cRead) and [i2cReadRegister()](/api/#i2cReadRegister) to receive data from them.  Since I2C slave devices do not emit data onto the bus without the request of the master device, [i2cRead()](/api/#i2cRead) is limited in its usefulness.  To that extent, below is an example showing how to read from data from a fictional sensor using the more typical [i2cReadRegister()](/api/#i2cReadRegister).

main.h
```c
// 7-bit address of the slave I2C device, right aligned
#define I2C_SLAVE_ADDR       0x4A
// Fictional 32-bit data buffer for the device, 0x30-0x34
#define I2C_SLAVE_BUF_DATA   0x30
```

auto.c
```c
#include "main.h"

void autonomous() {
    uint8_t dataIn[4];
    int32_t reading = -1;

    while (1) {
        if (i2cReadRegister(I2C_SLAVE_ADDR, I2C_SLAVE_BUF_DATA, data_in, 4)) {
            // Combine the 8-bit incoming values by extending them and bitwise-oring them together
            //
            // NOTE: Extension to 32-bits is done using uint32_t even though reading is int32_t
            //       This is done to prevent "sign extension," a common problem in these scenarios
            //
            // NOTE: This implementation assumes incoming data is big-endian with the order (0, 1, 2, 3)
            //       If your I2C slave emits data as little-endian, the order needs to be reversed
            reading = (((uint32_t)dataIn[0]) << 24) |
                      (((uint32_t)dataIn[1]) << 16) |
                      (((uint32_t)dataIn[2]) <<  8) |
                      (((uint32_t)dataIn[3]));
                           
            printf("Read in a value of %d from slave.\n", reading);
        }
        else {
            reading = -1;
            printf("ERROR: Failed to read sensor data from slave!\n");
        }

        // Use the sensor value in some way here

        delay(20);
    }
}
```

## VEX Integrated Motor Encoders (IMEs)
[imeInitializeAll()](/api/#imeInitializeAll)
[imeReset()](/api/#imeReset)
[imeShutdown()](/api/#imeShutdown)
[imeGet()](/api/#imeGet)
[imeGetVelocity()](/api/#imeGetVelocity)


## Third-Party I2C Devices
<!--- TODO mention consulting datasheets -->
Writing to and reading from third-party I2C devices with the Cortex using PROS is a relatively painless process with the techniques described earlier in this tutorial.  PROS essentially only requires the 7-bit I2C address of the target slave and a register you wish to interact with if any.  These can all be found in the third-party device's datasheet.

The great deal of effort in connecting a third-party I2C slave comes in scouring its datasheet and synthesizing its instructions into a device driver.  A critical aspect of this driver is its initialization routine.  Since I2C slave sensors often have their own microprocessors present, they may require several registers to be configured and an enable register to be set before they will even begin collecting data.  It is recommended that a ```Xinit()``` function be created for sensor X (e.g. lidarInit, gyroInit, etc) so that it may be called from different locations in the robot code rather than hard-coding the setup protocol into ```init.c```.  This way if the device were to ever lose power or disconnect a reconnection attempt is feasible.  This ```Xinit()``` function will contain several calls to [i2cWriteRegister()](/api/#i2cWriteRegister) and [i2cReadRegister()](/api/#i2cReadRegister) that follow the datasheet's instructions to bring the sensor up and running.

In addition to an initialization routine for the third-party sensor, it is good practice to group multiple sequential write/read operations into routines as well.  This can drastically improve code readability and portability to future robots.  A simple device driver for a fictional lidar is given below.

lidar.h
```c
// The 7-bit I2C address of the lidar sensor
// Found in its manufacturer datasheet
#define LIDAR_ADDR              0x67
#define LIDAR_REG_CFG_ADDR      0x10
#define LIDAR_BUF_VALUE_ADDR    0x4C

// Allowed values for the PVAL bits of the CFG register on the lidar
enum {
    SQ = 0x00,
    LQ = 0x01,
    MQ = 0x02,
    HQ = 0x03
} LIDAR_REG_CFG_PVAL;

// Allowed values for the EN bit of the CFG register on the lidar
enum {
    DISABLE = 0x00,
    ENABLE = 0x01
} LIDAR_REG_CFG_EN;

// Allowed values for the ITR bit of the CFG register on the lidar
enum {
    DISABLE = 0x00,
    ENABLE = 0x01
} LIDAR_REG_CFG_ITR;

// Global union with convenient structure for accessing bitfields
// rather than defining a gazillion bitmasks
union {
    struct {
        uint8_t PVAL0  : 2;
        uint8_t unused : 1;
        uint8_t PVAL1  : 2;
        uint8_t unused : 1;
        uint8_t EN     : 1;
        uint8_t ITR    : 1;
    } field;
    uint8_t all;
} LIDAR_REG_CFG = {.all = 0};

// Global union for accessing the individual bytes of a 32-bit int sensor reading
union {
    uint8_t byte[4];
    int32_t value;
} LIDAR_BUF_VALUE {.value = 0};

// Function declarations
bool lidarInit();
bool lidarSetLowRes();
bool lidarSetHighRes();
bool lidarReadValue();
```

lidar.c
```c

bool lidarInit() {
    // Initialize with PVAL0 high quality, PVAL1 standard quality, enable, no interrupt
    LIDAR_REG_CFG.field.PVAL0 = LIDAR_REG_CFG_PVAL.HQ;
    LIDAR_REG_CFG.field.PVAL1 = LIDAR_REG_CFG_PVAL.SQ;
    LIDAR_REG_CFG.field.EN    = LIDAR_REG_CFG_EN.ENABLE;
    LIDAR_REG_CFG.field.ITR   = LIDAR_REG_CFG_ITR.DISABLE;

    // Write the desired configuration to the appropraite register on the lidar
    if (!i2cWriteRegister(LIDAR_ADDR, LIDAR_REG_CFG_ADDR, LIDAR_REG_CFG)) {
        // Return if we failed
        return FALSE;
    }

    // Enable was a success, let's adjust the PVALs to finish
    LIDAR_REG_CFG.field.PVAL0 = LIDAR_REG_CFG_PVAL.MQ;
    LIDAR_REG_CFG.field.PVAL1 = LIDAR_REG_CFG_PVAL.HQ;

    return i2cWriteRegister(LIDAR_ADDR, LIDAR_REG_CFG_ADDR, LIDAR_REG_CFG);
}

bool lidarSetLowRes() {
    LIDAR_REG_CFG.field.PVAL0 = LIDAR_REG_CFG_PVAL.LQ;
    LIDAR_REG_CFG.field.PVAL1 = LIDAR_REG_CFG_PVAL.LQ;

    return i2cWriteRegister(LIDAR_ADDR, LIDAR_REG_CFG_ADDR, LIDAR_REG_CFG);
}

bool lidarSetHighRes() {
    LIDAR_REG_CFG.field.PVAL0 = LIDAR_REG_CFG_PVAL.HQ;
    LIDAR_REG_CFG.field.PVAL1 = LIDAR_REG_CFG_PVAL.HQ;

    return i2cWriteRegister(LIDAR_ADDR, LIDAR_REG_CFG_ADDR, LIDAR_REG_CFG);
}

bool lidarReadValue() {
    return i2cReadRegister(LIDAR_ADDR, LIDAR_BUF_VALUE_ADDR, LIDAR_BUF_VALUE.byte, 4);
}
```

auto.c
```c
#include "lidar.h"

void autonomous() {
}
```

## I2C Polling Tasks


## Debugging Tips and Tricks
<!---
Sign extension
union/struct method
endianness
-->

