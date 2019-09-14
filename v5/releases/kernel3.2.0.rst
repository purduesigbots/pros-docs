=========================
PROS Kernel 3.2.0 Release
=========================

.. post:: 7 September, 2019
   :tags: blog, kernel-release

New Features:

- Upgrade LVGL to version 5.3
- Add an alternate :code:`pros::Task` constructor that takes only a task function, parameters, and a name.
- Add an alternate API for generic serial communications over the smart ports
- Add a better data abort handler that prints a stack trace

Usability Improvements:

- Add Makefile variable for excluding libraries from the cold image
- Improve Makefile compile speed
- Support GCC 8.3 out of the box
- Add a default .gitignore to new projects
- Changes in header files will now be recompiled without having to clean

Bugfixes:

- Make :code:`vision_read_by_sig` properly transform coordinates and respect array boundaries
- Make VDML/ADI :code:`errno` values more consistent
- Other assorted VDML/ADI bugfixes
- Fix generic serial communications driver
- Fix C++ file I/O

Important upgrade notes
-----------------------

If your code checked :code:`errno` values set by PROS functions, you may need to change the values you compare with. Check each function's documentation for more information.

We have upgraded LVGL to 5.3, but since starting the upgrade process LVGL 6.0 was released, which has changed things a lot, and the online documentation for LVGL now reflects information for version 6.0. Please see `this link <https://docs.littlevgl.com/en/html/index.html#where-can-i-find-the-documentation-of-the-previous-version-v5-3>`_ for information on where to find the documenation for LVGL 5.3.
