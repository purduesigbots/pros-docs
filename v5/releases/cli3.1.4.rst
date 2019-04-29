======================
PROS CLI 3.1.4 Release
======================

.. post:: 18 February, 2019
   :tags: blog, cli-release

- New UI experience for creating, upgrading, and uploading projects
- Add binary compression to save space on the V5
- Add support for hot/cold linking
- Add V5 screen capture with ``prosv5 v5 capture``
- Add wireless downloading support
- Added support for supplying upload arguments to ``mu``/``mut``/``ut``
- Bug fixes to V5 upload protocol

Updating to the new version
===========================

Python PIP
----------

Run ``pip install https://github.com/purduesigbots/pros-cli/releases/download/3.1.4/pros_cli_v5-3.1.4-py3-none-any.whl`` (or pip3, depending on your system)

Windows
-------

Download and run the appropriate (.exe) installer from `our release page <https://github.com/purduesigbots/pros-cli/releases/3.1.4>`_.

macOS
-----

To upgrade a previous installation, run ``brew upgrade pros-cli``.
If you have the editor installed, you can also run ``brew cask upgrade pros-editor``.

To install from scratch:

Install Homebrew if it's not already installed. This may take a while.
Run ``brew tap osx-cross/arm && brew tap purduesigbots/pros``
Run ``brew install gcc-arm-bin && brew cask install pros-editor`` (if you want to install only the CLI, you can run ``brew install gcc-arm-bin pros-cli`` instead)

Notes:
~~~~~~

- if Homebrew complains ("It seems there is already an App at '/usr/local/Caskroom/pros-editor/1.32.2/PROS Editor.app'") when trying to upgrade the editor, run ``brew cask upgrade --force pros-editor`` instead.
- if you already have the PROS CLI installed, or if Homebrew complains about some files existing when trying to install the CLI, you'll want to uninstall it first
- if you installed using pip, you can run pip3 uninstall pros-cli-v5
- if you installed using the .app bundle, you can move that bundle to the trash folder, and then run ``rm -f /usr/local/bin/prosv5`` to clear out the old file
