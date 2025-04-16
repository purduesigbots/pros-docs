===================
Installing on Linux
===================

.. note::
    The recommended method for installing PROS on all platforms is using our VS
    Code extension. Instructions for this can be found on the :doc:`./index` page.
    If you wish to use a different editor or install the PROS CLI manually,
    continue reading this page.

Installing the toolchain
------------------------

The steps for installing the toolchain can differ greatly per distribution. The
first step is to check whether your package manager offers the arm-none-eabi
toolchain. If so, make sure that the version available is greater than or equal
to 7.2 before installing.

.. note::
    For some distributions such as Arch and Fedora, :code:`arm-none-eabi-newlib`
    is not automatically installed by the package manager and will need to be
    installed manually, in addition to the compiler package.

If you're not sure whether your distribution's package manager has the toolchain
available, or if you prefer to install things manually, follow the instructions
below.

.. note::
    If you are using a Debian-based distribution or Ubuntu, the toolchain can be
    installed through apt in package :code:`gcc-arm-none-eabi`. To install manually,
    follow the instructions below.

1. Download the latest version of the toolchain from `the Arm developer site <https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads>`_.
   We recommend the "Linux x86_64" release. In the rare event that you are
   running on an aarch64 machine, use the Linux aarch64 release instead. If you
   can't use either of those for some reason (e.g. you have a 32-bit system),
   you may need to download the "Source Invariant" release and build manually,
   following the instructions in the archive.
2. Move the file to your home directory and untar it using the command
   :code:`tar -xjvf gcc-arm-none-eabi-X-20XX-qX-update-linux.tar.bz2`:.
   The Xs should be replaced with those present in the name of the file
   you downloaded.
3. Add this line to your :code:`.bashrc` file (if using bash), replacing
   :code:`<your user>` with your username: :code:`export PATH=$PATH:/home/<your user>/gcc-arm-none-eabi-8-2019-q3-update/bin/`.
   If you are using a shell other than bash, refer to that shell's documentation
   for how and where to add entries to your PATH when logging in.
4. Close and re-open your terminal, or run :code:`source ~/.bashrc` (if running
   bash).
5. Test by running :code:`arm-none-eabi-gcc --version`. The output should confirm
   that the version is greater than or equal to 7.2. If it is not, make sure you
   don't have conflicting versions installed through a package manager.

.. note::
    After installing the toolchain using the instructions listed above, upgrading
    to a newer version is as simple as removing the previous install and following
    the instructions again with the newer version.

Installing the CLI
------------------

1. If you do not already have one installed, install a version of Python greater
   than or equal to 3.6
2. Install the latest version of the PROS CLI from the Python Package Index,
   using :code:`python3 -m pip install --user pros-cli`. If you wish to install
   for all users, run the command with :code:`sudo` and remove the :code:`--user`
   flag.
3. Run :code:`pros --version` to verify the CLI was installed correctly. If the
   command doesn't work, try restarting your machine.

Installing the Editor
---------------------

.. note::
    The following instructions are for installing Atom and cquery. If you intend
    to use an editor other than Atom, this section is optional.

1. Follow the instructions `here <https://github.com/cquery-project/cquery/wiki/Building-cquery>`_
   to build and install cquery.
2. `Install Atom <https://atom.io>`_.
3. Run :code:`apm install pros-bootstrapper@0.0.12`.
4. Open Atom and wait for any plugins to finish installing.
5. Happy coding!

.. note::
    If Atom seems to get stuck during step 4, restart Atom every few minutes.

Installing the Vision Utility
-----------------------------

1. Download the `Vision Utility for Windows <https://github.com/purduesigbots/pros-cli/releases/download/3.1.3/vex_vision_utility-0.2.4-win.zip>`_.
2. Move the .zip file to your home directory or your directory of preference.
   Then, create a directory for the Vision Utility with :code:`mkdir vision`
   and :code:`cd vision`.
3. Unzip the file with :code:`unzip ../vex_vision_utility-0.2.4-win.zip`
4. Download the `32-bit nw.js SDK v0.31.4 <https://dl.nwjs.io/v0.31.4/nwjs-sdk-v0.31.4-linux-ia32.tar.gz>`_
   for Linux in order to be able to run the nw.js app that is the Vision Utility.

.. note::
    Do not download the 64-bit nw.js SDK, or a later version of the SDK. It will
    not be compatible and will crash on attempt to load the Vision Utility.

1. Untar the file with :code:`tar xvf nwjs-sdk-v0.31.4-linux-ia32.tar.gz`
2. Install these packages to be able to successfully run the 32-bit nw.js runtime
   on a 64-bit machine: :code:`lib32z1 libnss3:i386 libxtst6:i386 libatk1.0-0:i386 libatk-bridge2.0-0 libgtk-3-0:i386`.
   On a 32-bit machine, you can safely skip this step.
3. Now run :code:`sudo nwjs-sdk-v0.31.4-linux-ia32/nw vcs_vision.exe` to execute
   VCS. :code:`sudo` is needed to interface with the camera, even if you are a
   part of the :code:`dialout` group.
