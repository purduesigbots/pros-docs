==================
Installing on OS-X
==================

Installation Instructions
-------------------------

Installing PROS on macOS could not be easier with our custom built
installer! Just follow these instructions:

1. Install `Python 3 <https://www.python.org/downloads/>`__ (Version
   3.4 or higher) for macOS.
2. Download the `PROS
   installer <https://github.com/purduesigbots/pros/releases/tag/2.11.0>`__
   and run it. You will need to input an administrator's password, and
   must remain connected to the internet for the duration of
   installation. The installer will download Atom.app and the Arm
   toolchain to ``/Applications/PROS_2.0``, and will use pip3 to install
   the command line interface. You will be able to see the progress of
   the installer in a Terminal window automatically openned by the
   installer.
3. Open Atom (``/Applications/PROS_2.0/Atom.app``) and verify that PROS
   appears in the menu (Likely next to Help).
4. Congratulations! You have successfully installed PROS for macOS. If
   you want autocomlete functionality within Atom for your PROS code,
   download either
   `Xcode <https://itunes.apple.com/us/app/xcode/id497799835?mt=12#>`__
   or `LLVM <http://llvm.org>`__. Xcode is easier to install than LLVM,
   but you must open the application at least once and its command line
   tools must be installed.

Requirements
------------

1. Minimum OS version: 10.8
2. Minimum Python Version: 3.4

Known issues
------------

1. Downloading code to the cortex must be done through the programming
   kit. You cannot download code through a direct tether.
2. Atom may be unable to update itself when saved in ``/Applications``.
   If this is the case, move it to ``~/Desktop``, ``~/Applications``, or
   any other folder owned by your current user.
