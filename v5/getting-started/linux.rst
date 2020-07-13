===================
Installing on Linux
===================

Installing the toolchain
------------------------

The steps for installing the toolchain can differ greatly per distribution. The first step is to check whether your package manager offers the arm-none-eabi toolchain. If so, make sure that the version available is greater than or equal to 7.2 before installing.

If you're not sure whether your distribution's package manager has the toolchain available, or if you prefer to install things manually, follow the instructions below.

.. note:: For users of Debian-based distributions, be aware that the toolchain available through Apt is out of date and likely will not work for PROS projects. For Ubuntu users, you may see references online to a PPA by team-gcc-arm-embedded, but that PPA does not seem to be updated any more. Therefore, if you are using a Debian-based distribution or Ubuntu, please follow the instructions below.

1. Download the latest version of the toolchain from `the Arm developer site <https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads>`_. We recommend the "Linux x86_64" release. In the rare event that you are running on an aarch64 machine, use the Linux aarch64 release instead. If you can't use either of those for some reason (e.g. you have a 32-bit system), you may need to download the "Source Invariant" release and build manually, following the instructions in the archive.
2. Move the file to your home directory and untar it using the command :code:`tar -xjvf gcc-arm-none-eabi-X-20XX-qX-update-linux.tar.bz2`:. The Xs should be replaced with those present in the name of the file you downloaded.
3. Add this line to your :code:`.bashrc` file (if using bash), replacing :code:`<your user>` with your username: :code:`export PATH=$PATH:/home/<your user>/gcc-arm-none-eabi-8-2019-q3-update/bin/`. If you are using a shell other than bash, refer to that shell's documentation for how and where to add entries to your PATH when logging in.
4. Close and re-open your terminal, or run :code:`source ~/.bashrc` (if running bash).
5. Test by running :code:`arm-none-eabi-gcc --version`. The output should confirm that the version is greater than or equal to 7.2. If it is not, make sure you don't have conflicting versions installed through a package manager.

.. note:: After installing the toolchain using the instructions listed above, upgrading to a newer version is as simple as removing the previous install and following the instructions again with the newer version.

Installing the CLI
------------------

1. If you do not already have one installed, install a version of Python greater than or equal to 3.6
2. Check the latest version of the PROS CLI on `our releases page <https://github.com/purduesigbots/pros-cli3/releases/latest>`_, and run :code:`python3.6 -m pip install --user https://github.com/purduesigbots/pros-cli/releases/download/3.X.X/pros_cli_v5-3.X.X-py3-none-any.whl`, replacing the number after 'python' with the version you installed and the Xs with the numbers you found before. If you wish to install for all users, run the command with :code:`sudo` and remove the :code:`--user` flag.
3. Run :code:`prosv5 --version` to verify the CLI was installed correctly. If the command doesn't work, try restarting your machine.

Installing the Editor
---------------------

.. note:: The following instructions are for installing Atom and cquery. If you intend to use an editor other than Atom, this section is optional.

1. Follow the instructions `here <https://github.com/cquery-project/cquery/wiki/Building-cquery>`_ to build and install cquery.
2. `Install Atom <https://atom.io>`_.
3. Run :code:`apm install pros-bootstrapper@0.0.12`.
4. Open Atom and wait for any plugins to finish installing.
5. Happy coding!

.. note:: If Atom seems to get stuck during step 4, restart Atom every few minutes.
