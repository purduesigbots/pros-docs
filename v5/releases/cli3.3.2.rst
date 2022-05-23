======================
PROS CLI 3.3.2 Release
======================

.. post:: 23 May, 2022
   :tags: blog, cli-release



New Features:

- Added ``pros m`` as an alias for PROS make.
- Added the ability to set team number and robot name on brain.
- Added custom program icons (Example: ``pros u --icon alien``).
- Added ability to change program name and description (Example: ``pros u name="Alien Project", description="A project with an alien as its icon"``).
- Added analytic tracking features.

Bugfixes:

- Miscellaneous backend bugfixes.


Updating to the new version
===========================

Windows
-------

Download and run the appropriate (.exe) installer from `our release page <https://github.com/purduesigbots/pros-cli/releases/3.3.2>`_.

Notes:

- You may be stopped by Windows SmartScreen when running the installer. This is expected, and we are working to resolve this issue. In the meantime, click "more info" and "run anyway" (if your system is set to block unknown apps and programs, you'll have to change the SmartScreen settings to "warn" or disable checking entirely [which we don't recommend]).

macOS
-----

To upgrade a previous installation, run ``brew upgrade pros-cli``.
If you have the editor installed, you can also run ``brew upgrade pros-editor``.

If you are installing for the first time, see `the getting started guide for macOS <https://pros.cs.purdue.edu/v5/getting-started/macos.html>`_ for instructions.

Linux / Python PIP
----------

Run ``pip install --upgrade pros-cli`` (or pip3, depending on your system)
