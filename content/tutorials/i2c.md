---
Title: I2C Communication
---

Inter-Integrated Circuit or I2C communications is but one of the common embedded communications protocols found commonly in robotics at large.  It sports a master-slave configuration as well as a unified bus allowing devices to be daisy-chained together in series if so desired.  A standard I2C bus consists of two signals seen by all devices - Serial Data (SDA) and Serial Clock (SCL).  These two signals are found alongisde +5V and GND power rails in the VEX Cortex I2C port to supply power to any attached I2C slave devices.

The primary I2C device encountered in VEX is the [Integrated Motor Encoder (IME)](); VEX U teams or hobbyists may feel so inclined to connect third-party I2C sensors to their robots such as gyroscopes or lidars.  This tutorial aims to cover reading to and writing from I2C slave devices, a rundown of the IME-specific functions provided, and transisition into topics such as device initialization and polling tasks for managing multiple I2C slaves at once.

In a future update this tutorial will strive to provide a brief summary of the I2C protocol itself, but in lieu of our own take on the subject please review the excellent rundown provided by SparkFun located [here](https://learn.sparkfun.com/tutorials/i2c).

## Reading from a I2C Slave
[i2cRead()](/api/#i2cRead)
[i2cReadRegister()](/api/#i2cReadRegister)

## Writing to a I2C Slave
[i2cWrite()](/api/#i2cWrite)
[i2cWriteRegister()](/api/#i2cWriteRegister)


## VEX Integrated Motor Encoders (IMEs)
[imeInitializeAll()](/api/#imeInitializeAll)
[imeReset()](/api/#imeReset)
[imeShutdown()](/api/#imeShutdown)
[imeGet()](/api/#imeGet)
[imeGetVelocity()](/api/#imeGetVelocity)


## Third-Party I2C Slaves
// TODO mention consulting datasheets

## I2C Polling Tasks




<!---
{{< figure src="http://s2.quickmeme.com/img/b9/b9d565f4836052bedaebfa12d7595fa49cbbba24eb4dc78308ea446c85b12d5e.jpg" >}}
-->
