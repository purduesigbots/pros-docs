=========================
PROS Kernel 3.3.0 Release
=========================

.. post:: 13 September, 2020
   :tags: blog, kernel-release

Changelog
---------

New features:

- Add :code:`std::string` overload for :code:`pros::Controller::set_text`
- Add functions to delete mutexes
- Add support for the ADI Expander

Usability improvements:

- Upgrade to vexOS 1.0.12
- Add support for extra linker scripts (:code:`firmware/*.ld`)
- Increase maximum string with on the controller screen from 15 to 19 characters
- Make :code:`pros::Task::notify_take` static
- Make :code:`pros::Task::operator=` STL-compliant
- Remove redundant library links to forestall linking issues with arm-none-eabi-gcc 10.x
- Miscellaneous documentation fixes

Bugfixes:

- Fix integer overflow in :code:`millis()`
- Fix how the Makefile generates spaces to resolve build issues with GNU Make 4.3 and higher
- Fix flushing the command character (:code:`p`) in the serial daemon
- Remove redundant IMU calibration check
- Fix :code:`pros::c::controller_clear_line` behavior
