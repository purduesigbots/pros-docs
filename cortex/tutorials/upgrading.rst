==============
Upgrading PROS
==============

Hey! I heard there was a new release of the PROS kernel-- How do I upgrade my project?
--------------------------------------------------------------------------------------

Never fear, you've come to the right place.

Downloading the new version
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The first step in this process is to acquire a physical copy of the
kernel. Don't worry, it's easier than it sounds.

.. note::
   Terminology:

   From now on, this tutorial will specify keypress commands in the form
   ``CTRL``-``SHIFT``-``P``. On macOS, the
   equivalent command is ``⌘`` + ``SHIFT`` + ``P``, so for the rest of
   this tutorial, assume that ``CTRL`` refers to ``⌘`` unless otherwise
   specified.

1. In Atom, type ``CTRL`` + ``SHIFT`` + ``P``, and then start typing
   'conductor'.

.. image:: /images/atom/open-conductor.png

2. A nice tab like this will appear:

.. image:: /images/atom/conductor-gui.png

3. In the 'Global Configuration' section, under 'Kernels,' there is a list:

.. image:: /images/atom/conductor-gui-zoom.png

The latest version of the kernel appears at the top of the list, and the
versions you have available to use have the small computer icon to the
right of the version number.

4. To download the latest version, click the small cloud icon on the far
   right of the version number.

5. Once the download has completed, a green balloon will pop up
   informing you as such.

.. image:: /images/atom/download-complete.png

If you don't have any old projects to upgrade, you're done! New projects
will be created, by default, with the latest version of the kernel you
have locally.

But I have old projects that need to get upgraded!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Alright, here's how:

1. Up on the menu bar in Atom, select
   ``PROS``> ``Upgrade a PROS Project``

.. image:: /images/atom/upgrade-menu.png

2. A new dialog will appear, asking you to select the project folder and the kernel version:

.. image:: /images/atom/upgrade-project.png

Note that choosing 'Auto-select latest' in the dropdown will do the same
thing as manually selecting the latest version (as it is shown in the
screenshot above).

3. If it works, another green balloon will appear to let you know:

.. image:: /images/atom/upgrade-success.png

If the balloon is red, that means the conductor failed to upgrade the
project successfully. In this case, follow any instructions in the
balloon and try again.

What now?
~~~~~~~~~

You're done-- now go make something cool!
