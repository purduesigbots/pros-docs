---
weight: 4
title: Installing on Linux
slug: debian-linux
---

## Easy Install Scripts
If you are installing on Ubuntu or Arch linux there are install scripts available which should handle most of the process. The scripts can be downloaded from Github:   

  * **Ubuntu:** [pros-install_ubuntu.sh](https://github.com/purduesigbots/pros/releases/download/2.11.0/pros-install_arch.sh)
  * **Arch Linux:** [pros-install_arch.sh](https://github.com/purduesigbots/pros/releases/download/2.11.0/pros-install_arch.sh)

## Other Distro Installation Requirements
To follows these instructions you need an operating system on you machine which is not Windows. We recommend the latest version of Ubuntu LTS. If you choose to not use Ubuntu LTS be sure that the flavor of linux you are using has support for the following packages:

    * [Atom 1.10.x+](https://atom.io/)
    * [git 2.x](https://git-scm.com/downloads)
    * [clang 3.9.0+](http://llvm.org/releases/download.html)
    * [gcc-arm-none-eabi 4.7.1+](https://launchpad.net/gcc-arm-embedded/+download)
    * [python3 3.5+](https://www.python.org/downloads/)
    * python3-pip

Once you have downloaded and install all those packages type the following command to install the PROS atom plugins:
```
apm install file-icons linter tool-bar tool-bar-main busy build pros
```

Upon completion open Atom and it will finish the setup process. Now you are all set to use PROS!!!

If you have any issues with these instructions be sure to report the issues on our [github project](https://github.com/purduesigbots/pros-atom).
