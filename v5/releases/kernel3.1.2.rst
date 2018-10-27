=========================
PROS Kernel 3.1.2 Release
=========================

.. post:: 16 October, 2018
   :tags: blog, kernel-release

New Features:

- Controller rumble motor functionality

Bugfixes:

- Global ``ADIGyro`` constructors now work

- Fix the port names for the ``ADIUltrasonic`` constructor

- Fix the bug where ``get_digital_new_press()`` would always return ``true``

- Implement ``pros::Task::remove()``, which is analogous to ``task_delete()``

- Change VDML initialization process to fix global initialization for user-defined objects that use VDML functionality in a task immediately upon startup

Deprecated:

- Deprecated any of the ADI port configuration enum values that were identical to generic I/O types (e.g. the ``E_ADI_SMART_POT`` is deprecated in favor of ``E_ADI_ANALOG_IN``). Projects will still compile and be functionally equivalent to the new preferred value, but will raise a warning to use the new value.

Header Docs:

- Clarify parameter initialization for ``task_delay_until()``

- Describe ``errno`` meanings for controller text setting

- Typo fix in ``Motor::get_current_limit()`` docs

- Fix return units for ``motor_get_actual_velocity()``
