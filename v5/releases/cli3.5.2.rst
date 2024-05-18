======================
PROS CLI 3.5.2 Release
======================

.. post:: 18 May, 2024
   :tags: blog, cli-release


What's Changed:
---------------
* Apply liblvgl when upgrading to PROS 4
* Apply liblvgl as a default template for PROS 4
* Remove PROS 4 Prompts #346 
* Remove Okapilib as a default template for PROS 4
* Downgrade rich click

If there are any problems encountered with this release, please make a post in the help section of VTOW, or a new issue on the [CLI github](https://github.com/purduesigbots/pros-cli/issues).

Updating to the new version
===========================

VSCode
------
Your extension should automatically update. If it doesn't, you can manually update by opening the extensions tab and clicking the update button next to PROS.

Windows
-------

Download and run the appropriate (.exe) installer from `our release page <https://github.com/purduesigbots/pros-cli/releases/3.5.2>`_.

Notes:

- You may be stopped by Windows SmartScreen when running the installer. This is expected, and we are working to resolve this issue. In the meantime, click "more info" and "run anyway" (if your system is set to block unknown apps and programs, you'll have to change the SmartScreen settings to "warn" or disable checking entirely [which we don't recommend]).

Linux / macOS / Python PIP
--------------------------

Run ``pip install --upgrade pros-cli`` (or pip3, depending on your system)
