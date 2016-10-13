---
title: Debugging in PROS
---

The [PROS API](../api/) provides various functions, like ['print'](../api/#print) or [`printf`](../api/#printf), that allow your robot to output information to a connected serial console during operation.


To view a robot's output, there are two officially supported methods:

1. Through the PROS CLI:

   Running `pros terminal` on the command line will open an output stream from a robot connected over direct USB connection, VexNet, or [JiNX](./jinx/).

2. From within Atom:

   Click the button labeled "Open cortex serial output"

   ![](/static/images/atom/open-cortex.png)

   A terminal panel will open at the bottom of the screen containing the output of a connected robot.

   > TODO: image

###### Bonus: Atom Terminal
The terminal in Atom can also run most commands that your system's regular command line can.

![](/static/images/atom/terminal-native.png)
