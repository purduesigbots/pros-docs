====================
Conductor User Guide
====================

Introduction
============

Conductor is PROS's templating and project management facility. It is
responsible for resolving versions of the PROS kernel and user libraries. It
also provides information about a PROS project to other PROS facilities, like
providing the target platform (e.g. V5 or Cortex) to the upload utility.

There are a few concepts central to Conductor's functionality:

- Templates: Templates are a description of a set of files. They have a name,
  version, supported target, and possibly other metadata. Templates typically
  come in one of 3 forms: remote, local, and installed. A remote template is
  a template that can be downloaded. A local template is a downloaded template
  that can be installed to a project, even when you're offline. An installed
  template is a template which has been copied into a PROS project.

- Depots: A depot is a connector to a remote template storage. Conductor doesn't
  require any particular access method to these remote templates, but they are
  typically available from a download link via HTTP. It is possible to implement
  an SCP, FTP, or other sorts of file transfer depots. The default depot is
  called pros-mainline and is the official repository of templates.

- Projects: A project is a set of user files and template files. They don't
  contain much information on their own - just a target platform and a list of
  installed templates. PROS Conductor maintains two lists of files originating
  from templates: user files and system files. User files are never replaced
  when upgrading a project and system files are always replaced when upgrading a
  project.

Common Tasks
============
Creating a new project

.. tabs::
	.. tab :: Terminal

		.. code-block:: console

			> pros conduct new-project ./Top-5-At-Worlds v5
			Updating pros-mainline... Done
			Downloading kernel@3.0.7 (https://www.cs.purdue.edu/~brookea/kernel@3.0.7.zip) [####################################] 100%
			Extracting kernel@3.0.7 [####################################] 100%
			Fetched kernel@3.0.7 from pros-mainline depot
			Adding kernel@3.0.7 to registry...Done
			Applying kernel@3.0.7 [####################################] 100%
			Finished applying kernel@3.0.7 to ./Top-5-At-Worlds
			Downloading okapilib@3.0.1 (https://www.cs.purdue.edu/~berman5/okapilib@3.0.1.zip) [####################################] 100%
			Extracting okapilib@3.0.1 [####################################] 100%
			Fetched okapilib@3.0.1 from pros-mainline depot
			Adding okapilib@3.0.1 to registry...Done
			Applying okapilib@3.0.1 [####################################] 100%
			Finished applying okapilib@3.0.1 to ./Top-5-At-Worlds
			New PROS Project was created:
			PROS Project for v5 at: /home/me/Top-5-At-Worlds (Top-5-At-Worlds)
			Name      Version    Origin
			--------  ---------  -------------
			kernel    3.0.7      pros-mainline
			okapilib  3.0.1      pros-mainline
	.. tab :: PROS Editor

		Coming soon!

Installing/upgrading a new template

.. tabs::
	.. tab :: Terminal

		.. code-block:: console

			> pros conduct apply okapilib


Fetching a remote template

.. tabs::
	.. tab :: Terminal

		.. code-block:: console

			> pros conduct fetch kernel 3.1.0

Fetching a local template archive

.. tabs::
	.. tab :: Terminal

		.. code-block:: console

			> pros conduct fetch mylibrary@1.0.0.zip

Creating Templates
==================

A template is a description of a set of files. All PROS
projects are readily capable of creating a template. Change the following
section in your project's Makefile. Then, to compile and create the template,
run ``pros make template``.

You should:

- Change ``IS_LIBRARY:=0`` to ``IS_LIBRARY:=1``
- Change ``LIBNAME`` to a name for your library.
- Change ``VERSION`` to a version for your library.

The default behavior of ``pros make template`` is to compile/package all source
files in your project, except for those listed in ``EXCLUDE_SRC_FROM_LIB``.
Additionally, any header files which you have created will be bundled. More
concisely, any header files which weren't added by a template are included.

.. highlight:: Makefile

::

	# Set this to 1 to add additional rules to compile your project as a PROS library template
	IS_LIBRARY:=0
	# TODO: CHANGE THIS!
	LIBNAME:=libbest
	VERSION:=1.0.0
	# EXCLUDE_SRC_FROM_LIB= $(SRCDIR)/unpublishedfile.c
	# this line excludes opcontrol.c and similar files
	EXCLUDE_SRC_FROM_LIB+=$(foreach file, $(SRCDIR)/opcontrol $(SRCDIR)/initialize $(SRCDIR)/autonomous,$(foreach cext,$(CEXTS),$(file).$(cext)) $(foreach cxxext,$(CXXEXTS),$(file).$(cxxext)))
	# files that get distributed to every user (beyond your source archive) - add
	# whatever files you want here. This line is configured to add all header files
	# that are in the the include directory get exported
	TEMPLATE_FILES=$(INCDIR)/**/*.h $(INCDIR)/**/*.hpp

For advanced usage of creating templates, you can modify the ``Makefile`` with
your own custom arguments to ``pros conduct create-template``

Reference
=========
.. click:: pros.cli.conductor:conductor
	:prog: pros conduct
	:show-nested:

.. click:: pros.cli.conductor_utils:create_template
	:prog: pros conduct create-template
