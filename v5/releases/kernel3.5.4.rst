=========================
PROS Kernel 3.5.4 Release
=========================

.. post:: 8 December, 2021
   :tags: blog, kernel-release

Changelog
---------

This minor update features an important bug release and a parameterless take function for mutexes.

Bugfix:

- Fix Reset IMU Function Timeout Logic 
- Linked List TODO Comment Updates/Warnings 
- Fix deleted VM Image for Azure Pipeline
- Fix -nostartfiles issue with newer versions of GCC on mac/linux

New Feature: 

- Add C style task create for any void() callable 
- Newlib Stub Improvements (Added Usleep and Sleep) 
