======================
PROS CLI 3.2.1 Release
======================

.. post:: 24 June, 2021
   :tags: blog, cli-release


This update should fix some bugs for the upcoming VSC Extension.

Updating to the new version
===========================

Windows
-------

Download and run the appropriate (.exe) installer from `our release page <https://github.com/purduesigbots/pros-cli/releases/3.2.2>`_.

Notes:

- You may be stopped by Windows SmartScreen when running the installer. This is expected, and we are working to resolve this issue. In the meantime, click "more info" and "run anyway" (if your system is set to block unknown apps and programs, you'll have to change the SmartScreen settings to "warn" or disable checking entirely [which we don't recommend]).
- If you applied the workaround detailed in the release notes for 3.2.0 (adding an entry to the PATH environment variable), you can go ahead and remove it if you wish.

macOS
-----

To upgrade a previous installation, run ``brew upgrade pros-cli``.
If you have the editor installed, you can also run ``brew upgrade pros-editor``.

If you are installing for the first time, see `the getting started guide for macOS <https://pros.cs.purdue.edu/v5/getting-started/macos.html>`_ for instructions.

Linux / Python PIP
----------

Run ``pip install --upgrade pros-cli`` (or pip3, depending on your system)
