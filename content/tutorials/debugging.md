---
title: Debugging in PROS
---

The [PROS API](/api/) provides various functions, like [`print()`](/api/#print) or [`printf()`](/api/#printf), that allow your robot to output information to a connected serial console during operation.


###To view a robot's output, there are two officially supported methods:

1. Through the PROS CLI: <br/>

    Running `pros terminal` on the command line will open an output stream from a robot connected over direct USB connection, VEXnet, or [JINX](/tutorials/jinx/).

2. From within Atom: <br/>

    Click the button labeled "Open cortex serial output"<br />
    {{< figure src="/images/atom/open-cortex.png" >}}<br/>

    A terminal panel will open at the bottom of the screen containing the output of a connected robot.<br/>
    {{< figure src="/images/atom/terminal-platformio.png" >}}

###Alternate method: <br />

Use the serial communication monitor of your choice (such as [this one](https://marketplace.visualstudio.com/items?itemName=EgorGrushko.SerialMonitor) if using Visual Studio) with the following settings: <br />

* **Serial Port:** May vary; unplugging and replugging the VEXnet device from the computer should allow you to determine the correct port.
* **Baud Rate:** *115200*
* **Encoding:** *28591 - ISO-8859-1 - Western European (ISO)* or equivalent
