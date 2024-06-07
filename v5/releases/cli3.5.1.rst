======================
PROS CLI 3.5.1 Release
======================

.. post:: 21 March, 2024
   :tags: blog, cli-release


What's new:
-----------
✨ Make early access project scope #330
✨ Port selection #326
✨ Add command to reset conductor.pros #320

What's changed:
---------------
🚸 Filename validator for new projects #298
🚸 Disable sentry confirmation prompt #334
🚸 Add single letter query-templates alias #335

Bugfixes:
---------
🐛 Fix aliases in pros v5 #333
🐛 Fix rich click for make compile error #327
🐛 Better error message for File not found on fetch #328
🐛 Fix offline resolve templates #321

If there are any problems encountered with this release, please make a post in the help section of VTOW, or a new issue on the `CLI github <https://github.com/purduesigbots/pros-cli/issues>`_. 

- The PROS Development Team
Updating to the new version
===========================

VSCode
------
Your extension should automaticlly update. If it doesn't, you can manually update by opening the extensions tab and clicking the update button next to PROS.

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
