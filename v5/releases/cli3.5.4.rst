======================
PROS CLI 3.5.4 Release
======================

.. post:: 06 June, 2024
   :tags: blog, cli-release


What's New:
-----------
* Added new command ``pros setup-autocomplete`` which installs a completion script for supported shells

Bugfixes:
---------
* Applies liblvgl without experimental features for PROS 4 projects
* Fix upload --name flag

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
