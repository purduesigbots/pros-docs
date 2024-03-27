=========================
PROS Kernel 3.8.3 Release
=========================

.. post:: 27 March, 2024
   :tags: blog, kernel-release

This update fixes a critical bug that prevented IMUS from reseting in kerenel 3.8.2.

Changelog
---------

Features:
 - Adds a function to get the physical orientation of the IMU

Bugfixes:
 - Fixes the IMU reset function from sometimes never returning
