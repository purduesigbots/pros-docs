====================
Creating a C Project
====================

By default, a new PROS project contains C++ source files and the C++ API. If you would prefer to program in C
instead, change the extension of the source files (``initialize.cpp``, ``autonomous.cpp``, and ``opcontrol.cpp``)
to ``.c``. 

.. warning:: Do not change any of the PROS header files in this process. That will cause the wrong files to be
             included in your project, and will likely prevent compilation. Only modify the extensions of the ``.cpp`` files.

This will compile your PROS project as C code, and will give you access to the `C API <../../api/c/index.html>`_.

If you're interested in combining C and C++, you should read through the `Combining C and C++ tutorial <../general/combining-c-cpp.html>`_.
Please note that it is typically a complicated matter to combine the two, and rarely a good idea.