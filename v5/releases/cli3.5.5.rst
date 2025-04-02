
======================
PROS CLI 3.5.5 Release
======================

.. post:: 12 March, 2025
   :tags: blog, cli-release


What's New:
-----------
* Added ability to remove the kernel template

Bugfixes:
---------
* Fix Error Reading project.pros File with Certain Chinese Characters on Windows 
* Fix project upload description
* Increase timeout window for completing file transfer
* Determine joystick status by pid in resolve_v5_port

If there are any problems encountered with this release, please make a post in the help section of VTOW, or a new issue on the `CLI github <https://github.com/purduesigbots/pros-cli/issues>`_.

Updating to the new version
===========================

VSCode
------
Your extension should automatically update. If it doesn't, you can manually update by opening the extensions tab and clicking the update button next to PROS.

macOS
-----

To update Homebrew, run ``homebrew update``.
To upgrade a previous installation, run ``brew upgrade pros-cli``.

If you are installing for the first time, see `the getting started guide for macOS <https://pros.cs.purdue.edu/v5/getting-started/macos.html>`_ for instructions.

Windows / Linux / macOS / Python PIP
------------------------------------

Run ``pip install --upgrade pros-cli`` (or pip3, depending on your system)
