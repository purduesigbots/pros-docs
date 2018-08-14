==================
Installing on macOS
==================

Install the CLI
---------------

.. note:: Installing the CLI through means other than PyPI or source are currently unsupported. Work is ongoing to make this process smoother.

1. Install `Python 3 <https://www.python.org/downloads/>`__ (Version
   3.4 or higher) for macOS.
2. In a terminal, run ``pip3 install pros-cli``

Install the toolchain
---------------------

If you have `homebrew <https://brew.sh>`__ installed (recommended method):
1. In a terminal, run ``brew tap osx-cross/arm``, then
2. run ``brew install arm-gcc-bin``.

.. note:: If you have previously used an installer to install PROS, you may be faced with an error that lists a set of conflicting files. In this case, run ``rm -rf /usr/local/lib/pros-toolchain && rm -f /usr/local/bin/arm-none-eabi-* && brew link`` to remove existing symbolic links and replace them with the correct ones.

If you do not have homebrew installed (advanced):

1. Download the latest version of the `GNU Arm Embedded toolchain for macOS <https://developer.arm.com/open-source/gnu-toolchain/gnu-rm/downloads>`__
2. Double click on the downloaded file to extract it.
3. Copy the contents of the ``gcc-arm-none-eabi-X-20XX-qX-update`` (where the Xs are numbers specific to the version you downloaded) to a folder, such as ``/usr/local/lib/pros-toolchain``.
4. There are two ways to link the binaries:

   i) Simply run ``ln -s /usr/local/lib/pros-toolchain/bin/* /usr/local/bin``
   ii) Alternatively run ``mkdir -p /usr/local/bin/pros-toolchain && ln -s /usr/local/lib/pros-toolchain/bin/* /usr/local/bin/pros-toolchain``, and then add ``/usr/local/bin/pros-toolchain`` to the end of your ``/etc/paths`` file. This option has the advantage of making upgrades and uninstalls easier.

Install the editor
------------------

.. note:: The current version of the PROS Editor is out of date, so we recommend installing the PROS Atom package manually for now.

1. Install the latest version of `Atom <https://atom.io>`__ for macOS.
2. Open Atom, then open the settings page (``⌘+,``).
3. Navigate to the ``Install`` tab, then search for "pros", and install the first package in the list.
4. If you would like autocomplete functionality, you will also need to install the Xcode command line tools if they are not already installed. In a terminal, run ``xcode-select --install`` and follow the prompts. You may need to restart Atom after this process is finished.

Requirements
------------

1. Minimum OS version: 10.8
2. Minimum Python Version: 3.4

Known issues
------------

1. Downloading code to the cortex must be done through the programming
   kit. You cannot download code through a direct tether.
2. Using the installer on our GitHub releases page is currently unsupported, due to issues with the CLI and the PROS Editor.
