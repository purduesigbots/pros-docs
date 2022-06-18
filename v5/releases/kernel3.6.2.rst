=========================
PROS Kernel 3.6.2 Release
=========================

.. post:: 16 June, 2022
   :tags: blog, kernel-release

Changelog
---------

This update brings bugfixes across the kernel for different issues.

Quality of Life and Bugfixes:

- Fix instances of prosERR to PROS_ERR on Screen Docs
- Remove explicit from Task Conversion Constructor
- Add getentropy to newlib stubs
- Fix Abandoned Mutexes in ADI
- Fix issue with newer ARM toolchain versions using MEMORY as a keyword
- Simplify IMU calculations on backend by using modulo properly (calculations not changed)

