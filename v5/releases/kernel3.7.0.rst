=========================
PROS Kernel 3.7.0 Release
=========================

.. post:: 1 September, 2022
   :tags: blog, kernel-release

Changelog
---------

This update brings a large amount of features and bugfixes across the kernel. Native motor group support being a major addition to help with library development.

Features:

- Add Native :code:`pros::Motor_Group` Support, see `Motor_Group <../../v5/api/cpp/motor_groups.html>`_ docs.
- Add MutexVar for mutex protected variables.
- Add simple name enum support for `VEXLink <../../v5/api/cpp/link.html>`_ and `IMU <../../v5/api/cpp/imu.html>`_.
- Add :code:`imu_reset_blocking` and :code:`imu.reset(true);` support, which blocks while the `IMU <../../v5/api/cpp/imu.html>`_ is being reset.
- Add alias for `Motor <../../v5/api/cpp/motors.html>`_ gearset enums such as :code:`MOTOR_GEAR_RED;` and :code:`MOTOR_GEAR_100;`.

Quality of Life and Bugfixes:

- Fix issue with Color2G macro disabling the vision sensor's LED green value.
- Add PROS error header to prevent recursive include.
- Fix issue with `screen <../../v5/api/cpp/screen.html>`_ touch callback functions not working.
- Fix :code:`pros::Link` not working with only one radio, see `VEXLink <../../v5/api/cpp/link.html>`_ docs.
- Remove redundant port bound checking to improve performance.


