====================================
Wireless Upload and Hot/Cold Linking
====================================

.. note:: Wireless Upload requires at least CLI 3.1.4, Kernel 3.1.6, VEXos 1.0.5, and OkapiLib 3.1.7 (if used).

PROS supports wireless upload to the V5 Brain via a V5 Controller. Although there are no special requirements to 
enable PROS to do this, file transfer speeds are typically unacceptably slow. To make them more reasonable, PROS
has a different method of compiling your project so that the PROS kernel and other infrequently modified code
are uploaded once and only the code you regularly modify (e.g. opcontrol.cpp, autonomous.cpp, and initialize.cpp)
gets transferred to the V5 wirelessly. We call the code you upload once and never change the "cold image" and the
code that changes frequently and gets uploaded every time the "hot image."

To enable this compilation mode, you should open your project's Makefile and edit the line:

.. highlight: Makefile
.. code-block:: Makefile

   # Set to 1 to enable hot/cold linking
   USE_PACKAGE:=0

so that ``USE_PACKAGE:=1``. Re-build and upload your project and PROS will automatically use the new files. PROS
will automatically detect when you're using the same combination of libraries and decide not to re-upload the
"cold" code. Verification that the library is present is done with filename and checksum of the file. As a result,
if you use the same combination of libraries (cold image), only one copy of the cold iamge is uploaded to the V5.

Large Projects
--------------
Projects with large codebases may still take some time to upload even with hot/cold linking. You may be able to 
reduce the size of your hot image by making part of your project a library so that some code is included in the
cold image. To do so, edit the following lines of your project's Makefile:

.. highlight: Makefile
.. code-block:: Makefile

    # Set this to 1 to add additional rules to compile your project as a PROS library template
    IS_LIBRARY:=0
    # TODO: CHANGE THIS!
    LIBNAME:=libbest
    VERSION:=1.0.0
    # EXCLUDE_SRC_FROM_LIB= $(SRCDIR)/unpublishedfile.c

Change `IS_LIBRARY` to ``1`` and rename the library to something of your choosing. We recommend ``lib<robot name>``
or ``lib<team number>`` (e.g. ``lib7701``) to be unique enough to avoid cause naming conflicts with other cold 
images. By default, the Makefile is set up to exclude your project's opcontrol.cpp, autonomous.cpp, and 
initialize.cpp files. If you change other files frequently, you can add lines like 
``EXCLUDE_SRC_FROM_LIB+=$(SRCDIR)/myfile.c`` as needed. **An important caveat** is that code that goes into the 
cold image is **not** able to link against anything (call functions or use variables) in the hot image. An
example of a modified Makefile's relevant lines is shown below:

.. highlight: Makefile
.. code-block:: Makefile

    # Set to 1 to enable hot/cold linking
    USE_PACKAGE=1

    # Set this to 1 to add additional rules to compile your project as a PROS library template
    IS_LIBRARY:=1
    LIBNAME:=libtheseus
    VERSION:=1.0.0
    # this line excludes opcontrol.c and similar files
    EXCLUDE_SRC_FROM_LIB+=$(foreach file, $(SRCDIR)/opcontrol $(SRCDIR)/initialize $(SRCDIR)/autonomous,$(foreach cext,$(CEXTS),$(file).$(cext)) $(foreach cxxext,$(CXXEXTS),$(file).$(cxxext)))
    EXCLUDE_SRC_FROM_LIB+=$(SRCDIR)/scripts             # exclude any files in the src/scripts directory
    EXCLUDE_SRC_FROM_LIB+=$(SRCDIR)/lcdselector.cpp     # exclude src/lcdselector.cpp