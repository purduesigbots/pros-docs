=======================
V5 Brain Display (LVGL)
=======================

Interacting with the touchscreen on the V5 Brain is made possible through `LVGL <https://littlevgl.com>`_.
LVGL is a full-featured C graphics library (it's accessible in C++ projects too under the same API).

The first step to getting started with LVGL is to include ``apix.h`` in your ``main.h`` file or other header files.
This includes the full LVGL feature set as described in their documentation: https://littlevgl.com/basics

From there, you can follow along with any of the LVGL tutorials (such as the one linked above). There is no need
to initialize LVGL, you can simply start creating objects.

.. warning:: LVGL code should be executed in one of the main PROS tasks (``initialize()``, ``autonomous()``,
             or ``opcontrol()``). Running LVGL code in a user-created task will fail to change the display.