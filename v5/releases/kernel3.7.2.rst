=========================
PROS Kernel 3.7.2 Release
=========================

.. post:: 16 October, 2022
   :tags: blog, kernel-release

Changelog
---------

This update adds adressable LED support, motors reversible by negative port numbers, and date/time keeping features.

Features:

- Passing a negative port number to :code:`pros::Motor` or :code:`pros::Motor_Group` will automatically initialize
  the motor with the reversed flag set
- Added :code:`pros::MotorGroup`` as an alias for :code:`pros::Motor_Group`
- Adressable LED strips can now be used with :code:`pros::ADILed` objects. 
  See the `ADILed <../../v5/api/cpp/adi.html>`_ docs.
- Timekeeping functionality is now somewhat working. Programs are stamped with the time they are compiled and this is
  used for time/date related functionality since the V5 does not have a real time clock. This enables libraries such as
  `std::chrono <https://en.cppreference.com/w/cpp/chrono>`_ or `time.h <https://en.cppreference.com/w/c/chrono>`_
- `POSIX clock_gettime() and clock_settime() 
  <https://pubs.opengroup.org/onlinepubs/000095399/functions/clock_getres.html>`_ support.
  For now, only CLOCK_MONOTONIC and CLOCK_REALTIME are supported. This provides a low level way
  for users to get the time, or to set the time if some other time keeping device were added.
- *Removed Herobrine*
