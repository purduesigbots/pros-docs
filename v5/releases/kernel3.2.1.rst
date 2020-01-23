=========================
PROS Kernel 3.2.1 Release
=========================

.. post:: 22 January, 2020
   :tags: blog, kernel-release

Upgrade notes
-------------

If you were affected by the issue `preventing builds from hot/cold linking under arm-none-eabi-gcc 9.x <https://github.com/purduesigbots/pros/issues/176>`_, and either added temporary stubs or disabled hot/cold linking as a workaround, you may now reverse those changes.


Changelog
---------

New Features:

- Add alternate :code:`pros::Task` constructors that accept any C++ Callable object (e.g. lambdas with captures)
- Add support for VEX Inertial Sensor
- Enable LVGL on-screen keyboard
- Add function to detect the presence of an SD card
- Add class function to get port number from :code:`pros::Motor`, :code:`pros::Vision`, and :code:`pros::Serial` instances

Usability Improvements:

- Add Makefile dependency tracking
- Log exceptions to the PROS terminal
- Add support for extra Make scripts (:code:`firmware/*.mk`)
- Provide error code when controller commands are being sent too quickly
- Suppress warnings for the GCC 7.1 ABI change
- Fix up ultrasonic documentation

Bugfixes:

- Handle errors properly in VDML functions that return floating point values
- Fix port indexing off-by-one bug in motor positional PID functions
- Fix abandoned mutex and race condition in LVGL
- Fix clearing the controller LCD screen
- Add temporary stubs so users of arm-none-eabi-gcc 9.x can use hot/cold linking
