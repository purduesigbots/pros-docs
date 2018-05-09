=================
Project Structure
=================

PROS projects are internally composed of three parts: the **PROS library** (found
in ``/firmware``), the **header** files (found in ``/include``), and **user code**
(found in ``/src``).

firmware
========

The **PROS library** is a single file containing the core PROS routines.
This file does not need to be changed. If there appears to be an issue
with a core PROS function, please file an issue on
`GitHub <https://github.com/purduesigbots/pros/issues>`_.

include
=======

The **header** files are all found in the ``include`` directory. One
header file, `api.h <../../api/index.html>`_, is required to declare
the PROS library functions. This file exists merely to include the individual
PROS API headers, all of which can be found in ``include/pros``. Each header file
in this directory covers a specific aspect of interacting with the V5 hardware,
and correlates to the files found in the `API documentation <../../api/index.html>`_.

The other file, ``main.h``, is intended for declaring functions and
variables shared between the user code files.  ``main.h`` also
offers a variety of configurable options for tailoring PROS to your needs.

* ``PROS_USE_SIMPLE_NAMES``: If defined, some commonly used enums will have preprocessor
  macros which give a shorter, more convenient naming pattern. For instance,
  E_CONTROLLER_MASTER has a shorter name: ``CONTROLLER_MASTER``. ``E_CONTROLLER_MASTER``
  is pedantically correct within the PROS styleguide, but not convenient for most
  student programmers.

* ``using namespace pros``: This can be uncommented to be added with the use of ``PROS_USE_SIMPLE_NAMES``.
  This reduces the length of declarations when using C++, allowing you to simply
  declare a ``Motor`` instead of a ``pros::Motor``. This will make the code appear cleaner
  and will be simpler for newer programmers, but is typically considered
  `bad practice <https://msdn.microsoft.com/en-us/library/5cb46ksf.aspx>`_. As a
  result, this line is commented out by default.

New header files can be created in the include directory, as long as the name
ends with ``.h`` (Traditionally for C files) or ``.hpp`` (for C++ files). See
this `C++ tutorial <http://www.learncpp.com/cpp-tutorial/19-header-files/>`_
for more information on how to create header files.

src
===

**User code** has the actual sequential instructions that govern the
robot's behavior. PROS by default splits the user code up into
autonomous (``autonomous.c`` or ``autonomous.cpp``), driver control
(``opcontrol.c`` or ``opcontrol.cpp``), and initialization
(``initialize.c`` or ``initialize.cpp``) files. Code in one file can talk to code in
another file using declarations in the header files.

New user code files can be created in the ``src`` directory, as long as the name
ends with ``.c`` or ``.cpp`` it will be compiled with the others.

All user code files should start with:

.. highlight:: none

::

    #include "main.h"

This will ensure that the PROS API and other critical definitions are
available in each file.

While more complicated than some environments, splitting up code grants
powerful modularity and code reusability, especially when combined with
source control.
