=========
Debugging
=========

.. warning:: This content is subject to change as the PROS CLI for V5 is created.

The `PROS API <../../api/index.html>`_ provides functions like
`printf <http://www.cplusplus.com/reference/cstdio/printf/>`_ that
allow your robot to output information to a connected serial console
during operation.

Viewing printf output
=====================

To view a robot's output, there are two officially supported methods:

1. Through the PROS CLI:

   Running ``pros terminal`` on the command line will open an output
   stream from a robot connected over direct USB connection, VEXnet, or
   `JINX <./tutorials/topical/jinx.html>`_.

2. From within Atom:

   Click the button labeled "Open cortex serial output"

.. image:: /images/atom/open-cortex.png

A terminal panel will open at the bottom of the screen containing the
output of a connected robot.

.. image:: /images/atom/terminal-platformio.png

JINX Graphical Debugger
=======================

JINX offers further debugging functionality over traditional debugging through print statements.
For a full explanation of JINX's abilities and its use, see :doc:`../topical/jinx`.
