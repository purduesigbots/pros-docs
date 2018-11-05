===================
Installing on macOS
===================

There are currently two ways to install PROS 3 on macOS. The recommended method uses `Homebrew <https://brew.sh/>`_, and the other method involves installing components manually.

Recommended Method (Homebrew)
-----------------------------

The recommended method of installing PROS 3 for macOS involves using `Homebrew <https://brew.sh/>`_.

1. If you do not already have Homebrew installed, install it by following the instructions on `their site <https://brew.sh>`_. This will take a while, and may prompt you to follow some additional instructions.
2. Once you have Homebrew installed, run :code:`brew tap purduesigbots/pros` to register the PROS Homebrew repository with Homebrew.
3. Run :code:`brew cask install gcc-arm-embedded pros-editor` to install the toolchain and the PROS Editor. This may also take a while.
4. That's it! You can now start using PROS 3.

.. note:: If you do not want to use the PROS Editor, and instead intend to use only the PROS CLI, substitute the command in step 3 with the following: :code:`brew cask install gcc-arm-embedded && brew install pros-cli`.

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
