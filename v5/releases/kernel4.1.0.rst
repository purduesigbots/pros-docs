=========================
PROS Kernel 4.1.0 Release
=========================

.. post:: 19 May, 2024
   :tags: blog, kernel-release, PROS-4

This update serves as the full release for PROS 4.

Changelog
---------

What's Changed from Kernel 4.0.7:
* Update Motor groups to take in AbstractMotor& Instead of MotorGroup&
* Bunch of documentation updates
* Few small bugs involving literals and static getters

What's the difference between PROS 4 and 3?
PROS 4 is a Kernel upgrade from PROS 4 to both decrease the size of the base Kernel, and provide utilities such as the base device class and liblvgl that makes it easier for both users and library writers to customize their PROS projects. This version also moves all documentation to a doxygen site rather than a Sphinx documentation page. 

What's new Since PROS 3:
* Update to C++20 instead of 14
* New and improved Main.cpp with better examples
* = operator overload removed for motors and motor groups
* LVGL is now a default template and updated to lvgl 8.3.4 (you can switch to lvgl 5.3.2 by running pros c apply liblvgl@5.3.3)
* New static functions to create IMUs, GPS, and vision sensors based on sensing the port they are plugged into automatically 
* Adds << overloads for devices to improve debugging
* New namespace for ADI devices
* removes the need for "/usd/" at the beginning of most files
* Adds a device superclass
* Now with 33% more PROS
* Different GPS sensor API
* Adds abstract motor base class
* Removed explicit from devices
* New LLEMU screen
* Better Motor group implementation
* adds cpp literals support for devices
* Remove Legacy API
* Added new functions to determine competition state
* Moved to enum classes instead of enums
* Native File system support when using LVGL
* And Much Much More.

The docs are being updated throughout the summer based on user feedback. Please let us know in our Beta server or in a #help thread in VTOW if there are updates you want to see on the docs, or if something looks off or doesn't make sense. 
