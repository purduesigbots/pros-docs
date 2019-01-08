=========================
PROS Kernel 3.1.5 Release
=========================

.. post:: 7 January, 2019
   :tags: blog, kernel-release

New Features:

- Add ``vision_signature_from_utility`` function which is parameter-equivalent to the vision signature creation functions used by VCS and RMS. The values for this function can also be acquired from the vision utility.
- Add ``vision_set_wifi_mode`` for enabling and disabling the vision sensor's Wi-Fi mode.

Usability Impovements:

- Vision sensor exposure now properly matches the brightness values used in the utility.
- We are no longer ``using namespace pros`` in the extended API header.
- Add an implicit operator to convert from ``pros::Task`` to ``task_t``.

Bugfixes:

- Miscellaneous RTOS bugfixes
