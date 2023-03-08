=========================
PROS Kernel 3.8.0 Release
=========================

.. post:: 7 March, 2023
   :tags: blog, kernel-release

This update fixes several bugs discoverd in 3.8.0 and missing features for motor groups and optical sensors.
The most major bug being not being able to use spaces and parenthesis in project paths. 

Changelog
---------

Features:
 - Add some missing functions to motor groups, such as `get_temperatures()`,
   `get_voltages()`, and `get_voltage_limits()`.
 - Add additional constructors to motor groups to handle different construction
   cases.
 - Add "at()" method for motor groups.
 - Add integration time setting/getting to `pros::Optical`.

Updates:
 - Update makefiles to use "pros" instead of "prosv5". This should hopefully fix
   some issues that occur on linux installs.
 - Update copyright to 2023.

Bugfixes:
 - Fixed ambiguity with the default constructor on ADI Encoders.
 - Paths with spaces and parenthesis no longer break the build system.
 - Fixed the return_port on Motor objects breaking a function.
