=========
Debugging
=========

The `PROS API <../api/index.html>`__ provides various functions, like
`print() <../api/index.html#print>`__ or `printf() <../api/index.html#printf>`__, that
allow your robot to output information to a connected serial console
during operation.

To view a robot's output, there are two officially supported methods:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Through the PROS CLI:

   Running ``pros terminal`` on the command line will open an output
   stream from a robot connected over direct USB connection, VEXnet, or
   `JINX <./jinx.html>`__.

2. From within Atom:

   Click the button labeled "Open cortex serial output"

.. image:: /images/atom/open-cortex.png

A terminal panel will open at the bottom of the screen containing the
output of a connected robot.

.. image:: /images/atom/terminal-platformio.png

Alternate method:
~~~~~~~~~~~~~~~~~~

Use the serial communication monitor of your choice (such as
`PuTTY <http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html>`__,
`CoolTerm <http://freeware.the-meiers.org/>`__ or `this plugin for
Visual
Studio <https://marketplace.visualstudio.com/items?itemName=EgorGrushko.SerialMonitor>`__
if using Visual Studio) with the following settings:

-  **Serial Port:** May vary; unplugging and replugging the VEXnet
   device from the computer should allow you to determine the correct
   port.
-  **Baud Rate:** *115200*
-  **Encoding:** *28591 - ISO-8859-1 - Western European (ISO)* or
   equivalent
