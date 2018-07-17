====================
Conductor User Guide
====================

Introduction
============

Conductor is PROS's templating and project management facility. It is
responsible for resolving versions of the PROS kernel and user libraries. It also
provides information about a PROS project to other PROS facilities, like
providing the target platform (e.g. V5 or Cortex) to the upload utility.

There are a few concepts central to Conductor's functionality:

- Templates: Templates are a description of a set of files. They have a name,
  version, supported target, and possibly other metadata. Templates typically
  come in one of 3 forms: remote, local, and installed. Remote templates are
  templates that can be downloaded. Local templates are a downloaded template
  that can be installed to a project, even when you're offline. An installed
  template is a template which has been copied into a PROS project.
- Depots: A depot is a connector to a remote template storage. Conductor doesn't
  require any particular access method to these remote templates, but they are
  typically available from a download link via HTTP. It is possible to implement
  an SCP, FTP, or other sorts of file transfer depots. The default depot is called
  pros-mainline and is the official repository of templates.
- Projects: A project is a set of user files and template files. They don't
  contain much information on their own - just a target platform and a list of
  installed templates. PROS Conductor maintains two lists of files originating
  from templates: user files and system files. User files are never replaced when
  upgrading a project and system files are akways replaced when upgrading a project.

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
			PROS Project for v5 at: /home/elliot/Top-5-At-Worlds (Top-5-At-Worlds)
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


Reference
=========
.. click:: pros.cli.conductor:conductor
	:prog: pros conduct
	:show-nested:
