===================
Installing on Linux
===================

Installing the toolchain
------------------------

1. Follow the instructions found `here <https://launchpad.net/~team-gcc-arm-embedded/+archive/ubuntu/ppa>`_ to add and install the latest version of the GNU Arm Embedded toolchain.

.. note:: If you are using a non-Debian-based distribution of Linux, check your favorite package repository for an updated version of the toolchain. The main requirement is that you get one that uses GCC version 7.2 or greater.

Installing the CLI
------------------

1. If you do not already have one installed, install a version of Python greater than or equal to 3.6
2. Check the latest version of the PROS CLI on `our releases page <https://github.com/purduesigbots/pros-cli3/releases/latest>`_, and run :code:`pip3 install https://github.com/purduesigbots/pros-cli3/releases/download/3.X.X/pros_cli_v5-3.X.X-py3-none-any.whl`, replacing the Xs with the numbers you found before.

Installing the Editor
---------------------

.. note:: The following instructions are for installing Atom and cquery. If you intend to use an editor other than Atom, this section is optional.

1. Follow the instructions `here <https://github.com/cquery-project/cquery/wiki/Building-cquery>`_ to build and install cquery.
2. `Install Atom <https://atom.io>`_.
3. Open Atom, and install the :code:`pros-bootstrapper` package (Settings > Packages).
