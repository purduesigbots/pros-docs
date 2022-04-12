=========================
PROS Kernel 3.6.0 Release
=========================

.. post:: 11 April, 2022
   :tags: blog, kernel-release

Changelog
---------

This update brings support for VEXLink

New Features:

- Add Dedicated ADI Potentiometer Class `ADI Potentiometer <../../v5/api/c/adi.html>`_.
- Add ability to change LLEMU text/background color `LLEMU <../../v5/api/cpp/llemu.html>`_.
- Add VEXLink Support `VEXLink <../../v5/api/cpp/link.html>`_.
- Add Motor Stop Function `Motors <../../v5/api/cpp/motors.html>`_.
- Add Task Join Method `RTOS <../../v5/api/cpp/rtos.html>`_.

Quality of Life and Bugfixes:

- Make mutexes STL-compliant
- Removed internal ext_adi_gyro wrapper
- Implement Error Return Values For Screen API
- Updated 2021 to 2022
- Fix various header typos
- Fix rotation sensor race condition
- Prevent LLEMU Clearing Segfault
