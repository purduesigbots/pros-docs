=========================
PROS Kernel 3.1.1 Release
=========================

.. post:: 20 September, 2018
   :tags: blog, kernel-release

A variety of bugfixes and usability improvements over 3.1.0.

Bugfixes:

- Competition control now works properly with running matches from the brain/controller (as opposed to just a competition switch/field controller before)

- Global constructors now work for Smart Devices (Motors, Vision Sensors, etc.)

- ``pros::Controller::print()`` will now compile and work properly

- Okapilib now works with the template operator control file by default, no more need to remove the ``using pros::literals`` line first

New Features:

- A proper Gyro Driver in C and C++. No more need to manually configure the ADI port to be a gyroscope.

Usability Improvements:

- All of the competition control functions (``autonomous()``, ``opcontrol()``, etc.) are now prototyped in ``main.h`` and can be called from user code

- ``PROS_USE_SIMPLE_NAMES`` is implemented for all of the API headers in both C and C++

- ``motor_move()`` and its C++ equivalent properly clamp inputs to ``[-127,127]``, so arcade control code will work properly with no clamping of the controller values in user code
