========================================
Creating and Distributing User Libraries
========================================

It is possible to easily create and share common functionality within your projects.


Automatic Configuration of PROS Libraries
=========================================
Most PROS libraries want to distrubte some pre-compiled source files and header files. PROS makes
creating these kinds of libraries straightforward. Simply create a PROS project and start writing
code that you want included in your library. It is possible to exclude source files from the 
pre-compiled library, so feel free to add test source files and keep opcontrol.cpp and friends
around in your project.

1. Edit the following lines of your project's Makefile:
   
   .. highlight: Makefile
   .. code-block:: Makefile
   
       # Set this to 1 to add additional rules to compile your project as a PROS library template
       IS_LIBRARY:=0
       # TODO: CHANGE THIS!
       LIBNAME:=libbest
       VERSION:=1.0.0
       # EXCLUDE_SRC_FROM_LIB= $(SRCDIR)/unpublishedfile.c
   
   Change ``IS_LIBRARY`` to ``1`` and rename the library to something of your choosing. Be sure to
   keep the version updated.
2. If you'd like to exclude source files from your library, you can add lines like 
   ``EXCLUDE_SRC_FROM_LIB+=$(SRCDIR)/unpublishedfile.c`` to prevent that file from being included
   in the precompiled library.
3. Run ``prosv5 make template`` to create a template. ``libbest@1.0.0.zip`` (with your
   name/version) will be created - this is the template file that you install into PROS projects.

To install the library, you first need to tells PROS about it. On a console, run the command 
``prosv5 c f path/to/libbest@1.0.0.zip``. Now, users can install your library using the CLI
(``prosv5 c a libbest@1.0.0`` inside the project) or PROS Editor (with the Upgrade Project prompt).