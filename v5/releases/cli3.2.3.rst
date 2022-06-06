======================
PROS CLI 3.2.3 Release
======================

.. post:: 19 November, 2021
   :tags: blog, cli-release


This update should fix some bugs from some of our previous releases.

Updating to the new version
===========================

Windows
-------

Download and run the appropriate (.exe) installer from `our release page <https://github.com/purduesigbots/pros-cli/releases/3.2.3>`_.

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
