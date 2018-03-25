=========
Libraries
=========

**Since PROS CLI 2.6.0, PROS for Atom 0.7.2, PROS Kernel 2.12.0**

PROS supports the concept of adding libraries, allowing you to
modularize and share code with others. PROS libraries can be any set of
files, but are typically a collection of precompiled code with some
header files.

.. warning::
   Under Construction
   This section of our documentation is still under construction.
   Atom documentation is coming soon.

Using Libraries for PROS
------------------------

For example, to set up `Boiler Robotics'
libblrs <https://github.com/purduesigbots/libblrs>`__, you can do the
following from command line:

.. code:: bash

    pros conduct add-depot --name libblrs --registrar github-releases --location purduesigbots/libblrs --no-configure
    pros conduct download libmtrmgr
    pros conduct add-lib <project-path> libmtrmgr

Using Atom, you can open the PROS Conductor by pressing
``Ctrl`` + ``Shift`` + ``P``, then typing ``Conductor``. Scroll down
to the Global Configuration section and add a depot.

{{< figure src="/images/tuts/add-depot-conductor.png" >}}

Select github-releases if not already done so, then fill out the
following fields:

.. highlight:: none

::

  Name the depot: libblrs
  Depot location: purduesigbots/libblrs

You may leave the rest of the options blank.

.. image:: /images/tuts/add-depot-libblrs.png

Now, you should see the various libraries offered by the libblrs
repository.

.. image:: /images/tuts/add-depot-withlibblrs.png

You can download whichever libraries you would like to use now by
clicking on the download button. Next, you should open the project you
want to add a library to, if you have not already done so. Select the
project in the Conductor window and click "Add Library". Select the
library you want to add and click OK. You will now have access to the
capabilities provided by the library!

Making Libraries for PROS using GitHub Releases
-----------------------------------------------

Make a template.mk file in the root directory of your project and paste
the following template:

.. highlight:: none

::

  LIBNAME=libfbc
  VERSION=1.0.0

  # extra files (like header files)
  TEMPLATEFILES = include/fbc_pid.h include/fbc.h
  # basename of the source files that should be archived
  TEMPLATEOBJS = fbc_pid fbc

  TEMPLATE=$(ROOT)/$(LIBNAME)-template

  .DEFAULT_GOAL: all

  library: clean $(BINDIR) $(SUBDIRS) $(ASMOBJ) $(COBJ) $(CPPOBJ)
      $(MCUPREFIX)ar rvs $(BINDIR)/$(LIBNAME).a $(foreach f,$(TEMPLATEOBJS),$(BINDIR)/$(f).o)
      mkdir -p $(TEMPLATE) $(TEMPLATE)/firmware $(addprefix $(TEMPLATE)/, $(dir $(TEMPLATEFILES)))
      cp $(BINDIR)/$(LIBNAME).a $(TEMPLATE)/firmware/$(LIBNAME).a
      $(foreach f,$(TEMPLATEFILES),cp $(f) $(TEMPLATE)/$(f);)
      pros conduct create-template $(LIBNAME) $(VERSION) $(TEMPLATE) --ignore template.pros --upgrade-files firmware/$(LIBNAME).a $(foreach f,$(TEMPLATEFILES),--upgrade-files $(f))
      @echo Need to zip $(TEMPLATE) without the base directory
      # cd $(TEMPLATE) && zip -r ../$(basename $(TEMPLATE)) *

You should change ``LIBNAME``, ``VERSION``, ``TEMPLATEFILES``, and
``TEMPLATEOBJS`` to fit your project.

In the project's Makefile, add the following line to line 14:

.. highlight:: none

::

  -include $(ROOT)/template.mk

Then to build the library, run ``pros make library``. Next, you will
need to zip the template directory. The zip file should not contain the
``libfbc-template`` directory (that is, the root of the zip file should
contain template.pros and all your other files). Next, you should
`create a release on
GitHub <https://help.github.com/articles/creating-releases/>`__ and
upload your template(s) to the release. You can see Purdue SIGBots'
repository at
`purduesigbots/libblrs <https://github.com/purduesigbots/libblrs/releases>`__.
