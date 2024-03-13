=========================
PROS Kernel 3.8.2 Release
=========================

.. post:: 12 March, 2024
   :tags: blog, kernel-release

This update fixes several bugs discovered since 3.8.0 and missing features for LEDs, GPS sensor and IMUs.
The most major feature is the new GPS functions. 

Changelog
---------

Features:
 - Added more methods to get GPS data.

Bugfixes:
 - Fixed deadlocks from various LED functions.
 - Fixed IMU::is_calibrating.
 - gps::get_rotation now returns current heading instead of initial heading.
