=========================
PROS Kernel 3.5.0 Release
=========================

.. post:: 11 July, 2021
   :tags: blog, kernel-release

Changelog
---------

Our biggest feature this update is the lightweight screen API, which will act as a LVGL alternative.

New features:

- Added Simplified API for drawing objects on the `Screen <../../v5/api/cpp/screen.html>`_.
- Added rotation sensor data rate function.
- Added pros::IMU as an alias to pros::Imu.
- Added user call to query registry status.

Bugfixes:

- Deprecated dangerous PID setting functions for the motors.
- Added blocking delay to IMU reset function so the IMU status flag is set correctly.
