=================
Project Structure
=================

Introduction
------------

PROS projects are internally composed of three parts: the *user code*,
the PROS *library* and the *header* files.

The PROS library is a single file containing the core PROS routines.
This file does not need to be changed. If there appears to be an issue
with a core PROS function, please file an issue on
`GitHub <https://github.com/purduesigbots/pros/issues>`__.

The *header* files are all found in the ``include`` directory. One
header file, `API.h <../api/index>`_, is required to declare
the PROS library functions, and also serves as a quick reference. The
other file, ``main.h``, is intended for declaring functions and
variables shared between the user code files. New header files can be
created in the include directory, as long as the name ends with .h.

``User code`` has the actual sequential instructions that govern the
robot's behavior. PROS by default splits the user code up into
autonomous (``auto.c``), driver control (``opcontrol.c``), and
initialization (``init.c``) files. Code in one file can talk to code in
another file using declarations in the header files. New user code files
can be created in the ``src`` directory, as long as the name ends with
.c it will be compiled with the others.

All user code files should start with:

.. code:: c

    #include "main.h"

This will ensure that the PROS API and other critical definitions are
available in each file.

While more complicated than some environments, splitting up code grants
powerful modularity and code reusability, especially when combined with
source control.

Declaring Functions and Variables
---------------------------------

Functions and variables must be declared before use. Functions and
variables can be declared in the typical C manner:

.. code:: c

    int sensorValue;

    void DoIt(int x) {
       motorSet(5, x);
    }

    int getSensorValue(void) {
         DoIt(127);
         return sensorValue;
    }

Doing so will make the variables and functions local to the file in
which they exist.

Some functions and variables are useful in more than one location (e.g.
a function to use `motorSet <../api/index.html#motorset>`_ on
all the robot's drive motors with the same value). Such functions can be
declared in any of the three files (or a custom file in the ``src``
directory). To make them accessible to any other user code file,
prototype the function in ``main.h`` or in another header file.

Functions can be prototyped by copying the function's declaration line
into ``main.h`` and replacing the function code with ``;``.

.. code:: c

    // Prototype the "getSensorValue()" function declared above (in main.h)
    int getSensorValue(void);

    // Prototype the "DoIt()" function declared above (in main.h)
    void DoIt(int x);

For pieces of code intended for frequent reuse, it may be better to
create a separate header file with the related declarations, and to
include that file in main.h. Therefore, large pieces of code involving
look-up tables, control algorithms, or other complex structures can be
quickly ported between projects by copying one .c user code file and one
.h header file.
