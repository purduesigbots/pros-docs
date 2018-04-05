=======================
Programming the Clawbot
=======================

.. note ::

    This tutorial is very much incomplete. This tutorial will guide you through
    creating and uploading code in the PROS 3 CLI environment.

Objective:
==========

This tutorial will guide you through basic programming of the VEX
Clawbot.

Intended Audience:
==================

This tutorial is intended for developers with some programming
experience, but with little to no experience with the PROS library. If
you haven't programmed before, we recommend checking out all the
"Introduction and Basic C Features" sections of `this tutorial
series <http://www.studytonight.com/c/overview-of-c.php>`__; you may also
benefit from the "Pointers, Arrays and Strings" sections as well
(although they aren't as pertinent).

Goals:
======

At the end of this tutorial you will have:

-  Understood the basic project structure of PROS
-  Programmed a basic chassis with "tank" control or "arcade" control
-  Programmed buttons to control the clawbot's lift
-  Programmed a joystick axis to control the clawbot's claw
-  Understood the standard subsystem module methodology
-  Programmed a dead-reckoned autonomous routine

Here's the robot we'll be programming:

.. image:: /images/tuts/clawbot1.jpg

You can follow VEX's tutorial for building this robot `here <https://v5beta.vex.com/parent-wrapper.php?id=v5-with-clawbot>`_.

For the purposes of this tutorial, we've plugged in our motors into the
following ports:

+--------+----------------+--------+---------------+
| Port   | Description    | Port   | Description   |
+========+================+========+===============+
| 1      | Left Wheels    | 11     |               |
+--------+----------------+--------+---------------+
| 2      |                | 12     |               |
+--------+----------------+--------+---------------+
| 3      | Claw Motor     | 13     |               |
+--------+----------------+--------+---------------+
| 4      |                | 14     |               |
+--------+----------------+--------+---------------+
| 5      | Vision Sensor  | 15     |               |
+--------+----------------+--------+---------------+
| 6      |                | 16     |               |
+--------+----------------+--------+---------------+
| 7      |                | 17     |               |
+--------+----------------+--------+---------------+
| 8      | Arm Motor      | 18     |               |
+--------+----------------+--------+---------------+
| 9      |                | 19     |               |
+--------+----------------+--------+---------------+
| 10     | Right Wheels   | 20     |               |
+--------+----------------+--------+---------------+

Port 21: Radio

For the ADI:

+--------+----------------+--------+---------------+
| Port   | Description    | Port   | Description   |
+========+================+========+===============+
| A      | Left Bumper    | E      |               |
+--------+----------------+--------+---------------+
| B      | Right Bumper   | F      |               |
+--------+----------------+--------+---------------+
| C      |                | G      |               |
+--------+----------------+--------+---------------+
| D      |                | H      | Arm Limit     |
+--------+----------------+--------+---------------+


To create, build, and upload a new project in PROS 3, run

.. code :: bash

    prosv5 conduct new <path_to_project>
    prosv5 make
    prosv5 upload
    prosv5 terminal


The last 3 commands can be simplified to :code:`prosv5 mut`.
