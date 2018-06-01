===================
Installing on Linux
===================

Installer binaries
------------------

If you are installing on a Debian-based Linux distribution, such as
Ubuntu, or have a distribution which can install Debian packages, you
should download the provided packages from the `latest
release <https://github.com/purduesigbots/pros/releases/latest>`__. The
PROS Core package provides the PROS CLI and Arm Embedded GCC Toolchain.
The PROS Editor package provides our rebranded version of Atom. Most
users will install both, although the PROS Core package is always
required.

**Note** When using PROS for linux you cannot program or interact with a
cortex directly tethered via A-A. This is a `known issue <../tutorials/known-issues#linuxAA>`_ with a simple solution.

Other Distro Installation Requirements
--------------------------------------

To follows these instructions you need an operating system on your
machine which is not Windows. We recommend the latest version of Ubuntu
LTS. If you choose to not use Ubuntu LTS be sure that the flavor of
linux you are using has support for the following packages:

-  `Atom 1.10.x+ <https://atom.io/>`__
-  `git 2.x <https://git-scm.com/downloads>`__
-  `clang 3.9.0+ <http://llvm.org/releases/download.html>`__
-  `gcc-arm-none-eabi
   4.7.1+ <https://launchpad.net/gcc-arm-embedded/+download>`__
-  `python3 3.5+ <https://www.python.org/downloads/>`__
-  python3-pip

Once you have downloaded and install all those packages type the
following command to install the PROS atom plugins:

::

    apm install file-icons linter tool-bar tool-bar-main busy build pros

Upon completion open Atom and it will finish the setup process. Now you
are all set to use PROS!!!

If you have any issues with these instructions be sure to report the
issues on our `github
project <https://github.com/purduesigbots/pros-atom>`__.
