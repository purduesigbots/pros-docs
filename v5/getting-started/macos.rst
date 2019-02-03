===================
Installing on macOS
===================

There are currently two ways to install PROS 3 on macOS. The recommended method uses `Homebrew <https://brew.sh/>`_, and the other method involves installing components manually.

Recommended Method (Homebrew)
-----------------------------

The recommended method of installing PROS 3 for macOS involves using `Homebrew <https://brew.sh/>`_.

1. If you do not already have Homebrew installed, install it by following the instructions on `their site <https://brew.sh>`_. This will take a while, and may prompt you to follow some additional instructions.
2. Once you have Homebrew installed, run :code:`brew tap osx-cross/arm && brew install arm-gcc-bin` to register a repository with Homebrew that contains the toolchain used to build PROS projects, and then install the toolchain.
3. Run :code:`brew tap purduesigbots/pros` to register the PROS Homebrew repository with Homebrew.
4. Run :code:`brew cask install pros-editor` to install the PROS Editor (the CLI will also be installed). This may also take a while.
5. That's it! You can now start using PROS 3.

.. note:: If you do not want to use the PROS Editor, and instead intend to use only the PROS CLI, substitute the command in step 3 with the following: :code:`brew install pros-cli`.

Other Methods
-------------

If you don't want to use Homebrew to install PROS 3, you can install all the components manually.

Install the toolchain
^^^^^^^^^^^^^^^^^^^^^
1. Download the latest version of the GNU Arm Embedded Toolchain for macOS from `their site <https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads>`_.
2. Once you have downloaded the toolchain, double click the file to extract its contents.
3. Copy the contents of the :code:`gcc-arm-none-eabi-X-20XX-qX-update` folder (where the Xs are numbers specific to the version you downloaded) to another folder, for example :code:`/usr/local/lib/pros-toolchain`.
4. Now you will need to link the toolchain binaries to somewhere that the system will be able to find them. There are two ways to do this:

   i) (recommended, easy to update) run ``mkdir -p /usr/local/bin/pros-toolchain && ln -s /usr/local/lib/pros-toolchain/bin/* /usr/local/bin/pros-toolchain`` (replacing ``/usr/local/lib/pros-toolchain`` with the path to the folder you made in step 4 above). Finally, add ``/usr/local/bin/pros-toolchain`` to the end of your ``/etc/paths`` file.
   ii) (easier, less easy to update) simply run ``ln -s /usr/local/lib/pros-toolchain/bin/* /usr/local/bin``.

Install the CLI
^^^^^^^^^^^^^^^
1. Install Python 3.6 or higher from `the Python website <http://python.org>`_.
2. Install the CLI by downloading the latest version of the Python Wheel file (.whl) from `here <https://github.com/purduesigbots/pros-cli3/releases/latest>`_. Once downloaded, run :code:`python3 -m pip install ~/Downloads/pros-cli-v5_3.X.X-py3-none-any.whl` (replacing that path with the path to which you downloaded the file).

Install the Editor
^^^^^^^^^^^^^^^^^^

.. note:: this section is optional if you intend to use an editor other than the PROS Editor

1. Build and install cquery by following the instructions on `their wiki page <https://github.com/cquery-project/cquery/wiki/Building-cquery>`_.
2. Download the :code:`pros-editor-mac.zip` file from `our releases page <https://github.com/purduesigbots/atom/releases/latest>`_. Once downloaded, double click to extract the application, then drag the :code:`PROS Editor.app` file to your :code:`/Applications` folder.

Requirements
------------

Minimum macOS version: 10.8
Minimum Python version: 3.6

Known Issues
------------

:code:`RuntimeError: Click will abort further execution because Python 3 was configured
to use ASCII as encoding for the environment.`

If you are using the PROS Editor, open up your init script (File > Init Script) and add the following two lines:

.. code-block:: coffee

   process.env.LANG = 'en_US.utf-8'
   process.env.LC_ALL = 'en_US.utf-8'

If you are just using the CLI at the Terminal:

1. Open up your Terminal.
2. Run :code:`cd` to make sure you're in your home directory.
3. Run :code:`touch .bash_profile` to make sure you have a shell login configuration file.
4. Edit the :code:`~/.bash_profile` file in your preferred editor (you can also run :code:`open -e .bash_profile` to edit it in TextEdit), adding the following two lines at the end:

.. code-block:: bash

   export LANG="en_US.utf-8"
   export LC_ALL="en_US.utf-8"

5. Run :code:`. .bash_profile` to reload the file for the current session.

:code:`/bin/sh: intercept-c++: command not found`

.. note:: This issue should be fixed for PROS CLI versions > 3.1.2

1. Check your PROS CLI version by running :code:`prosv5 --version`. If your version is <= 3.1.2, try updating first to check if that solves your problem. If not, continue with step 2.
2. Follow steps 1-4 listed above for those using the CLI only. In step 4, however, add the following line instead (replacing the Xs with the numbers found in step 1):

.. code-block:: bash

   export PATH="/usr/local/Cellar/pros-cli/3.X.X/libexec/bin:$PATH"
