======================
PROS CLI 3.1.4 Release
======================

.. post:: 12 February, 2019
   :tags: blog, cli-release

- Added support for supplying upload arguments to ``mu``/``mut``/``ut``
- Add V5 screen capture with ``prosv5 v5 capture``
- New UI experience for creating, upgrading, and uploading projects
- Add binary compression to save space on the V5
- Add support for hot/cold linking
- Add wireless downloading support
- Bug fixes to V5 upload protocol

Updating to the new version
===========================

Python PIP
----------

Run pip install https://github.com/purduesigbots/pros-cli3/releases/download/3.1.2/pros_cli_v5-3.1.2-py3-none-any.whl (or pip3, depending on your system)

Windows
-------

Download and run the appropriate installer

macOS
-----

See below for the new recommended method of installing the CLI

macOS installs
~~~~~~~~~~~~~~

Install Homebrew if it's not already installed. This may take a while.
Run brew tap purduesigbots/pros
Run brew cask install gcc-arm-embedded pros-editor (if you want to install only the CLI, you can run brew cask install gcc-arm-embedded && brew install pros-cli instead)

Notes:
~~~~~~

- if Homebrew complains about some files existing when trying to install the toolchain (gcc-arm-embedded), run rm -f /usr/local/bin/arm-none-eabi-* to clear the old files out
- if you already have the PROS CLI installed, or if Homebrew complains about some files existing when trying to install the CLI, you'll want to uninstall it first
- if you installed using pip, you can run pip3 uninstall pros-cli-v5
- if you installed using the .app bundle, you can move that bundle to the trash folder, and then run rm -f /usr/local/bin/prosv5 to clear out the old file