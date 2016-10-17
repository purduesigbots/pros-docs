---
title: Known Issues
---

## Cannot find libstdc++.a
On Ubuntu 14.04 it is a [known bug](https://bugs.launchpad.net/ubuntu/+source/gcc-arm-none-eabi/+bug/1293024) that libstdc++-arm-none-eabi-newlib package is missing from the repositories and fails to install with arm-none-eabi-gcc. This can lead to the following error when trying to compile your PROS project:
{{< figure src="/img/ubuntu-error.png" >}}

The easiest solution to this issue is to upgrade to 16.04 LTS.

## Ghost COM ports {#ghostCOM}
During normal operation of the serial COM ports on windows errors may occur when hardware is disconnected causing them to not close. This results in high COM port numbers (e.g. COM17). We recommend following [these instructions](http://theitbros.com/how-to-delete-com-ports-in-use/) to clean up any COM ports that are left in limbo.

## Linux A-A Tethering {#linuxAA}
When utilizing PROS in your Linux environment you cannot interact with or flash your cortex via direct A-A Tethering to your computer. This is due to the fact that VEX does not provide Linux drivers for this feature that is readily available on Windows. However, this does not mean that you cannot interact with or flash your cortex. To do so you must utilize the [programming hardware kit](http://www.vexrobotics.com/276-2186.html) and a [joystick](http://www.vexrobotics.com/276-2186.html) connected as follows:

{{< figure src="/img/wiring-diagram.png" attr="Diagram courtesy of VEX Robotics" >}}

Both wired and wirless (VEXnet 1.0 & 2.0) are supported.
