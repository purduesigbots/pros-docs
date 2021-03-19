======================
PROS CLI 3.2.0 Release
======================

.. post:: 18 February, 2021
   :tags: blog, cli-release

At long last! the PROS CLI release 2+ years in the making

.. note:: Important: in order to use PROS with vexOS 1.0.13, you MUST upgrade to this version!

This release has a number of long-awaited features, not least of which is official support for the wireless terminal. Another notable change is that you can now (again) use the pros command to refer to the CLI! For those of you who have committed prosv5 to muscle memory over the last few years---don't worry, that command still exists.

We are also pleased to announce that pros-cli is back on PyPi! Anyone who installed through pip should be able to run pip install --upgrade pros-cli and get this release.

A number of other miscellaneous bugfixes and improvements were added, so feel free to browse the full changelog below.

New features:

- Added wireless terminal
- Rename distribution from pros-cli-v5 to pros-cli
- Both `pros` and `prosv5` work for the CLI now.
- Compatibility with vexOS 1.0.13

Bugfixes:

- Fixed terminal input
- Fixed bug with channel switching for wireless uploads
- Fixed UnicodeDecodeError in UI
- Fix uploading to a slot specified in the project file
- Fix issue with schema length for upcoming vexOS release
- Fix uploading without a project

Updating to the new version
===========================

Python PIP
----------

Run ``pip install --upgrade pros-cli`` (or pip3, depending on your system)

Windows
-------

Download and run the appropriate (.exe) installer from `our release page <https://github.com/purduesigbots/pros-cli/releases/3.2.0>`_.

macOS
-----

To upgrade a previous installation, run ``brew upgrade pros-cli``.
If you have the editor installed, you can also run ``brew upgrade pros-editor``.

If you are installing for the first time, see `the getting started guide for macOS <https://pros.cs.purdue.edu/v5/getting-started/macos.html>` for instructions.
