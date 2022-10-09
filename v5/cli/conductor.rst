====================
Conductor User Guide
====================

Introduction
------------

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
------------

Creating a new project
^^^^^^^^^^^^^^^^^^^^^^

.. tabs::
	.. tab:: Terminal

		.. code-block:: console

			> pros conduct new-project ./Top-5-At-Worlds
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


Installing/upgrading a new template
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. tabs::
	.. tab :: Terminal

		.. code-block:: console

			> pros conduct apply okapilib


Fetching a remote template
^^^^^^^^^^^^^^^^^^^^^^^^^^

.. tabs::
	.. tab :: Terminal

		.. code-block:: console

			> pros conduct fetch kernel 3.1.0

Fetching a local template archive
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. tabs::
	.. tab :: Terminal

		.. code-block:: console

			> pros conduct fetch mylibrary@1.0.0.zip

Creating Templates
^^^^^^^^^^^^^^^^^^

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

.. tabs::
	.. tab:: Makefile
		.. highlight:: Makefile
		.. code-block:: Makefile

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

Advanced Tasks
--------------

The following tasks may require you to edit the conductor.pros file. conductor.pros is a configuration file that can be used to influence how PROS Conductor behaves. On Windows, this file is located in ``%APPDATA%\PROS``. On other systems, consult `the Click documentation <https://click.palletsprojects.com/en/5.x/api/#click.get_app_dir>` for possible locations.

Editing Default Templates For New Projects
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

By default, new PROS projects ship with OkapiLib. If you want to change this, or add other templates of your own automatically when creating new projects, you can do so as follows.

Open conductor.pros (see above). Find the ``default_libraries`` key. Within this key, you can specify the names of templates included by default for each target (``v5`` or ``cortex``). For example, if you wanted to make sure that `ARMS <https://github.com/purduesigbots/arms>`_ was added to new projects and not OkapiLib, you might end up with the following

.. tabs::
	.. tab:: conductor.pros
		.. highlight:: json
		.. code-block:: json

			"default_libraries": {
				"cortex": [],
				"v5": [
					"ARMS"
				]
			}

Creating Remote Depots
^^^^^^^^^^^^^^^^^^^^^^

A depot is a collection of templates. Typically, you will have one local depot (managed by the PROS CLI) and one or more remote depots. By default, PROS recognizes one remote depot, maintained by the PROS development team. This points the CLI to download locations for versions of the PROS kernel template as well as OkapiLib, which is included in new projects by default.

It can be somewhat cumbersome for users to apply custom templates to their projects. They must download the zip archive, ``pros conduct fetch`` it into their local depot, then ``pros conduct apply`` it to a project. To make this workflow less annoying, it is possible for template maintainers to create their own remote depots. This process is described below.

The first step is to create a JSON file that is accessible over the internet. PROS does this using the `purduesigbots/pros-mainline <https://github.com/purduesigbots/pros-mainline>`_ repository. It is set up with `GitHub Pages <https://pages.github.com/>`_ and configured not to use Jekyll. As a result, the JSON file describing the pros-mainline depot is accessible at `https://purduesigbots.github.io/pros-mainline/pros-mainline.json <https://purduesigbots.github.io/pros-mainline/pros-mainline.json>`_. The JSON file you create should be in the same format as pros-mainline.json: it should be an array of objects with information about each available template.

Once you have a remote depot, you must tell your copy of the PROS CLI about it before the CLI will look for templates in it.

Open conductor.pros (see above). To add a remote depot, look at the `depots` key. This is a python `dict` mapping a depot name to a remote depot object. Add a new entry that looks like the following:

.. tabs::
	.. tab:: conductor.pros
		.. highlight:: json
		.. code-block:: json

			"my-remote-depot": {
				"config": {},
				"config-schema": {},
				"location": "https://my-username.github.io/my-remote-depot/my-remote-depot.json",
				"name": "my-remote-depot",
				"py/object": "pros.conductor.depots.http_depot.HttpDepot",
				"remote_templates": [],
				"update_frequency": {
					"py/reduce": [
						{
							"py/type": "datetime.timedelta"
						},
						{
							"py/tuple": [
								0,
								60,
								0
							]
						}
					]
				}
			}

making sure to change the name and location to match the ones you set up in the above step. Save the file, and run ``pros conduct query --force-refresh`` to verify that it worked as expected.

.. note:: If you are a template maintainer providing a remote depot for your users, it may be a good idea to provide your users with a pre-written copy of the depot object needed in conductor.pros, as well as a condensed version of these instructions for how to add it there.

With a custom remote depot, users will be able to install templates specified within by running ``pros conduct apply my-template`` in their projects, and upgrade them by running ``pros conduct upgrade my-template`` without needing to manually download archives.

Changing the Default Target
^^^^^^^^^^^^^^^^^^^^^^^^^^^

If you use PROS to work primarily with VEX Cortex projects, you can change the default target for new projects to avoid specifying it at project creation time.

Open conductor.pros (see above). Find the ``default_target`` key. The value of this key can be either ``v5`` or ``cortex``.
