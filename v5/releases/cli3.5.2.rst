======================
PROS CLI 3.5.2 Release
======================

.. post:: 18 May, 2024
   :tags: blog, cli-release


What's Changed:
---------------
* Apply liblvgl when upgrading to PROS 4
* Apply liblvgl as a default template for PROS 4
* Remove PROS 4 Prompts
* Remove Okapilib as a default template for PROS 4
* Downgrade rich click

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
