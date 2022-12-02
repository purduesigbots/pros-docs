=========================
PROS Kernel 3.7.3 Release
=========================

.. post:: 2 December, 2022
   :tags: blog, kernel-release

Changelog
---------

This update fixes bug with LED non-extended constructor, indexing motors from motor groups, and fixes global pros::Rotation objects creating a data abort exception.

Features:

- Added retrieving individual motor references from a :code:`pros::Motor_Group` using [] operator. See `Motor_Group <../../v5/api/cpp/motor_groups.html>`_ docs.
- Added :code:`pros::Motor_Group::size()` to get the number of motors in a motor group
- Fixed a bug that caused the non-extended LED constructor to fail
- Fixed bug causing data abort exceptions in :code:`pros::Rotation`
