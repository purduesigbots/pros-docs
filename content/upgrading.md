---
title: Upgrading the PROS Environment
slug: Upgrading PROS
---

## PROS Editor (or Atom) says my CLI is out of date! What do I do??

The upgrading process is a little different depending on what operating system you run. Please follow the instructions corresponding to your OS below.

### Windows
Click the shiny "Upgrade" button that appears on the PROS Welcome Page where it tells you that you have an out-of-date version.
#### That didn't work! What now?
If the upgrade failed for any reason, please re-download and run the latest Windows installer from our GitHub page, located [here](https://github.com/purduesigbots/pros/releases/latest).

{{< note title="Note" >}}
Currently, if you are on a platform other than Windows, PROS Editor (or Atom) will probably tell you that it cannot determine how the CLI was installed, and that you will have to upgrade the CLI manually. This is normal-- simply follow the instructions below.
{{< /note >}}
### MacOS
Download and run the latest MacOS installer from our GitHub page, located [here](https://github.com/purduesigbots/pros/releases/latest).

### Linux (Debian)
Download and run the latest .deb package from our GitHub page, located [here](https://github.com/purduesigbots/pros/releases/latest).

### Linux (other)
This will generally correspond to how you installed the PROS CLI in the first place. For example, if you installed it using `pip` or `pip3`, run `pip3 install -U pros-cli`. If you installed the CLI from source, pull the latest version of the master branch, and run `pip3 install -e path/to/src`.