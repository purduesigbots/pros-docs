=====================
Installing on Windows
=====================

Installation
------------

PROS for Atom is the new best way to program for VEX Robotics. Getting
started with PROS is easy on Windows.

To begin,
`download <https://github.com/purduesigbots/pros/releases/latest>`__ and
run the installer. Please note that an Internet connection is required
throughout the installation process.

Most users will wish to complete the typical installation process, which
will install the PROS Core components (the PROS CLI and GCC toolchain)
and PROS Editor. If you already have Atom installed, you may opt to not
install PROS Editor and install the PROS plugin on your installation of
Atom.

If VEX drivers haven't previously been installed, you will be prompted
to install the official drivers released by VEX.

Once the installation is completed, Atom can be started via the Start
Menu or Desktop shortcut.

Issues and Notes about Installation
-----------------------------------

Error reading from file when installing
---------------------------------------

**Since 2.6.0** When installing PROS on Windows, you may receive a warning
box along the lines of: > There was an error reading from file "...".
Verify that the file exists and you can access it. In most cases, this
is because the file length is too long due to a limitation of Windows.
Move the installer to a folder closer to the root directory of the
drive, such as ``C::\pros-temp``.

APM Failure
~~~~~~~~~~~

During some installations, Atom may not install correctly. This is best
diagnosed by there not being shortcuts to Atom after installation, or if
``apm`` isn't on PATH. If this is the case, you may need to manually
install Atom by visiting https://atom.io/download/windows. Once
installed and Atom appears, you will be able to install the PROS plugin
by pressing **Win** + **R** and entering
``apm install file-icons linter tool-bar tool-bar-main busy build platformio-ide-terminal pros``.
If you are still having trouble after installing Atom manually, it may
be necessary to add Atom to ``PATH`` manually as well. To do so, follow
these instructions: 1. Find the location of atom.exe. One good way of
doing this is by right clicking on the Atom shortcut on your dekstop,
clicking 'Open File Location,' and copying the path from the Explorer
address bar. 2. Windows 7/8/8.1: 1. Open the Start menu 2. Right click
on 'Computer' 3. Select 'Properties' 4. Click 'Advanced System Settings'
5. Click 'Environment Variables' 6. Select 'PATH' under 'User
Variables,' then click 'Edit' 7. Add a semicolon (``;``) to the end of
the value, then paste in the path to atom.exe 8. Click 'OK' 3. Windows
10: 1. Type 'Environment Variables' into the search bar 2. Select 'Edit
environment variables for your account 3. Select 'Path' in the upper box
4. Click 'Edit,' then click 'New' 5. Paste in the path to atom.exe 6.
Click 'OK'

Installing alongside PROS for Eclipse
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It is possible to install Atom alongside Eclipse, if you have previously
installed Eclipse. However, the uninstall utility for PROS for Eclipse
will remove all the contents in ``C:\Program Files\PROS``, so the new
version of PROS will also be affected. If you decide to remove Eclipse
but want to keep the PROS Core components, either run the PROS for
Eclipse uninstall utility and reinstall/repair the new version of PROS
or manually delete all files/folders in ``C:\Program Files\PROS``
except: ``C:\Program Files\PROS\cli-64`` (or just ``cli`` if x86),
``C:\Program Files\PROS\toolchain``,
``C:\Program Files\PROS\updater.exe``, and
``C:\Program Files\PROS\updater.ini``
