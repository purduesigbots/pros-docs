======================
PROS CLI 3.5.0 Release
======================

.. post:: 22 January, 2024
   :tags: blog, cli-release

What's new:
-----------
* Add rich click
* Move PROS 4 to early access
* Added port to project.pros
* Adding and removing depots

What's changed:
---------------
* Unique error for kernel mismatch when applying a template

Bugfixes:
---------
* Fix fat binary error in CI
* Deprecate pros upgrade
* Resolve Python 3.11.6_1 Enum changes
* Fix dirty version name
* Fix exit code click bug
* Phantom Multiple Port selection
* Disable windows_expand_args
* Fix default template selection

If there are any problems encountered with this release, please make a post in the help section of VTOW, or a new issue on the `CLI github <https://github.com/purduesigbots/pros-cli/issues>`_.

Updating to the new version
===========================

VSCode
------
Your extension should automatically update. If it doesn't, you can manually update by opening the extensions tab and clicking the update button next to PROS.

Windows
-------

Download and run the appropriate (.exe) installer from `our release page <https://github.com/purduesigbots/pros-cli/releases/3.4.3>`_.

Notes:

- You may be stopped by Windows SmartScreen when running the installer. This is expected, and we are working to resolve this issue. In the meantime, click "more info" and "run anyway" (if your system is set to block unknown apps and programs, you'll have to change the SmartScreen settings to "warn" or disable checking entirely [which we don't recommend]).

macOS
-----

To upgrade a previous installation, run ``brew upgrade pros-cli``.
UPDATE (as of March 23, 2024): Homebrew is currently not working due to a dependency build issue. Please use pip while we investigate the issue.


If you are installing for the first time, see `the getting started guide for macOS <https://pros.cs.purdue.edu/v5/getting-started/macos.html>`_ for instructions.

Linux / Python PIP
----------

Run ``pip install --upgrade pros-cli`` (or pip3, depending on your system)
