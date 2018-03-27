=================
Project Structure
=================

Introduction
============

PROS projects are internally composed of three parts: the *user code*,
the PROS *library* and the *header* files.

The PROS library is a single file containing the core PROS routines.
This file does not need to be changed. If there appears to be an issue
with a core PROS function, please file an issue on
`GitHub <https://github.com/purduesigbots/pros3/issues>`_.

The *header* files are all found in the ``include`` directory. One
header file, `api.h <../api/index.html>`_, is required to declare
the PROS library functions, and also serves as a quick reference. The
other file, ``main.h``, is intended for declaring functions and
variables shared between the user code files. New header files can be
created in the include directory, as long as the name ends with .h.

Note on ``using namespace pros`` https://msdn.microsoft.com/en-us/library/5cb46ksf.aspx

``User code`` has the actual sequential instructions that govern the
robot's behavior. PROS by default splits the user code up into
autonomous (``auto.c``), driver control (``opcontrol.c``), and
initialization (``init.c``) files. Code in one file can talk to code in
another file using declarations in the header files. New user code files
can be created in the ``src`` directory, as long as the name ends with
.c it will be compiled with the others.

Declaring Functions and Variables
=================================
