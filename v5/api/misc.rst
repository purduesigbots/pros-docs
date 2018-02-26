=================
Miscellaneous API
=================

Functions
=========

competition_get_status
----------------------

::

  uint8_t competition_get_status ( void )

**Returns:** The competition control status as a mask of bits with
COMPETITION_{ENABLED,AUTONOMOUS,CONNECTED}.

competition_is_disabled
-----------------------

::

  bool competition_is_disabled ( void )

**Returns:** True if the V5 Brain is disabled, false otherwise.

competition_is_connected
------------------------

::

  bool competition_is_connected ( void )

**Returns:** True if the V5 Brain is connected to competition control, false otherwise.

competition_is_autonomous
-------------------------

::

  bool competition_is_autonomous ( void )

**Returns:** True if the V5 Brain is in autonomous mode, false otherwise.

controller_get_analog
---------------------

::

  int32_t controller_get_analog ( controller_id_e_t id,
                                  controller_analog_e_t channel )

Gets the value of an analog channel (joystick) on a controller.

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 id           The ID of the controller (e.g. the master or partner controller).
              Must be one of `CONTROLLER_MASTER <controller_id_e_t>`_ or `CONTROLLER_PARTNER <controller_id_e_t>`_
 channel      The analog channel to get.
              Must be one of `ANALOG_LEFT_X <controller_analog_e_t>`_, `ANALOG_LEFT_Y <controller_analog_e_t>`_,
              `ANALOG_RIGHT_X <controller_analog_e_t>`_, `ANALOG_RIGHT_Y <controller_analog_e_t>`_
============ ======================================================================================================

**Returns:** The current reading of the analog channel: [-127, 127].
If the controller was not connected, then 0 is returned

controller_get_digital
----------------------

::

  int32_t controller_get_digital ( controller_id_e_t id,
                                   controller_digital_e_t button )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 id           The ID of the controller (e.g. the master or partner controller).
              Must be one of `CONTROLLER_MASTER <controller_id_e_t>`_ or `CONTROLLER_PARTNER <controller_id_e_t>`_
 button       The button to read. Must be one of `DIGITAL_{RIGHT,DOWN,LEFT,UP,A,B,Y,X,R1,R2,L1,L2} <controller_digital_e_t>`_
============ =================================================================================================================

**Returns:** 1 if the button on the controller is pressed.
If the controller was not connected, then 0 is returned

controller_is_connected
-----------------------

::

  int32_t controller_is_connected ( controller_id_e_t id )

Returns 0 or 1 if the controller is connected.

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 id           The ID of the controller (e.g. the master or partner controller).
              Must be one of `CONTROLLER_MASTER <controller_id_e_t>`_ or `CONTROLLER_PARTNER <controller_id_e_t>`_
============ ======================================================================================================

**Returns:** 1 if the controller is connected, 0 otherwise

Macros
======

ANALOG_LEFT_X
-------------

The horizontal axis of the controller's left analog stick.

**Value:** ``E_CONTROLLER_ANALOG_LEFT_X``

ANALOG_LEFT_Y
-------------

The vertical axis of the controller's left analog stick.

**Value:** ``E_CONTROLLER_ANALOG_LEFT_Y``

ANALOG_RIGHT_X
--------------

The horizontal axis of the controller's right analog stick.

**Value:** ``E_CONTROLLER_ANALOG_RIGHT_X``

ANALOG_RIGHT_Y
--------------

The vertical axis of the controller's right analog stick.

**Value:** ``E_CONTROLLER_ANALOG_RIGHT_Y``

COMPETITION_AUTONOMOUS
----------------------

Use COMPETITION_AUTONOMOUS as a bitmask for checking whether the brain is in autonomous mode
with `competition_get_status`_.

**Value:** ``(1 << 0)``

COMPETITION_DISABLED
--------------------

Use COMPETITION_DISABLED as a bitmask for checking whether the brain is disabled with `competition_get_status`_.

**Value:** ``(1 << 1)``

COMPETITION_CONNECTED
---------------------

Use COMPETITION_CONNECTED as a bitmask for checking whether the brain is connected to competition control with `competition_get_status`_.

**Value:** ``(1 << 2)``

CONTROLLER_MASTER
-----------------

The master controller.

**Value:** ``E_CONTROLLER_MASTER``

CONTROLLER_PARTNER
------------------

The partner controller.

**Value:** ``E_CONTROLLER_PARTNER``

DIGITAL_L1
----------

The first trigger on the left side of the controller.

**Value:** ``E_CONTROLLER_DIGITAL_L1``

DIGITAL_L2
----------

The second trigger on the left side of the controller.

**Value:** ``E_CONTROLLER_DIGITAL_L2``

DIGITAL_R1
----------

The first trigger on the right side of the controller.

**Value:** ``E_CONTROLLER_DIGITAL_R1``

DIGITAL_R2
----------

The second trigger on the right side of the controller.

**Value:** ``E_CONTROLLER_DIGITAL_R2``

DIGITAL_UP
----------

The up arrow on the left arrow pad of the controller.

**Value:** ``E_CONTROLLER_DIGITAL_UP``

DIGITAL_DOWN
------------

The down arrow on the left arrow pad of the controller.

**Value:** ``E_CONTROLLER_DIGITAL_DOWN``

DIGITAL_LEFT
------------

The left arrow on the left arrow pad of the controller.

**Value:** ``E_CONTROLLER_DIGITAL_LEFT``

DIGITAL_RIGHT
-------------

The right arrow on the left arrow pad of the controller.

**Value:** ``E_CONTROLLER_DIGITAL_RIGHT``

DIGITAL_X
---------

The 'X' button on the right button pad of the controller.

**Value:** ``E_CONTROLLER_DIGITAL_X``

DIGITAL_B
---------

The 'B' button on the right button pad of the controller.

**Value:** ``E_CONTROLLER_DIGITAL_B``

DIGITAL_Y
---------

The 'Y' button on the right button pad of the controller.

**Value:** ``E_CONTROLLER_DIGITAL_Y``

DIGITAL_A
---------

The 'A' button on the right button pad of the controller.

**Value:** ``E_CONTROLLER_DIGITAL_A``

NUM_V5_PORTS
------------

The number of RJ11 ports available on the V5 brain.

**Value:** ``(22)``

Enumerated Values
=================

controller_analog_e_t
---------------------

::

  typedef enum {
    E_CONTROLLER_ANALOG_LEFT_X = 0,
    E_CONTROLLER_ANALOG_LEFT_Y,
    E_CONTROLLER_ANALOG_RIGHT_X,
    E_CONTROLLER_ANALOG_RIGHT_Y
  } controller_analog_e_t;

============================= =============================================================
 Value
============================= =============================================================
 E_CONTROLLER_ANALOG_LEFT_X    The horizontal axis of the controller's left analog stick.
 E_CONTROLLER_ANALOG_LEFT_Y    The vertical axis of the controller's left analog stick.
 E_CONTROLLER_ANALOG_RIGHT_X   The horizontal axis of the controller's right analog stick.
 E_CONTROLLER_ANALOG_RIGHT_Y   The vertical axis of the controller's right analog stick.
============================= =============================================================

controller_digital_e_t
----------------------

::

  typedef enum {
    E_CONTROLLER_DIGITAL_L1 = 6,
    E_CONTROLLER_DIGITAL_L2,
    E_CONTROLLER_DIGITAL_R1,
    E_CONTROLLER_DIGITAL_R2,
    E_CONTROLLER_DIGITAL_UP,
    E_CONTROLLER_DIGITAL_DOWN,
    E_CONTROLLER_DIGITAL_LEFT,
    E_CONTROLLER_DIGITAL_RIGHT,
    E_CONTROLLER_DIGITAL_X,
    E_CONTROLLER_DIGITAL_B,
    E_CONTROLLER_DIGITAL_Y,
    E_CONTROLLER_DIGITAL_A
  } controller_digital_e_t;

============================ ===========================================================
 Value
============================ ===========================================================
 E_CONTROLLER_DIGITAL_L1      The first trigger on the left side of the controller.
 E_CONTROLLER_DIGITAL_L2      The second trigger on the left side of the controller.
 E_CONTROLLER_DIGITAL_R1      The first trigger on the right side of the controller.
 E_CONTROLLER_DIGITAL_R2      The second trigger on the right side of the controller.
 E_CONTROLLER_DIGITAL_UP      The up arrow on the left arrow pad of the controller.
 E_CONTROLLER_DIGITAL_DOWN    The down arrow on the left arrow pad of the controller.
 E_CONTROLLER_DIGITAL_LEFT    The left arrow on the left arrow pad of the controller.
 E_CONTROLLER_DIGITAL_RIGHT   The right arrow on the left arrow pad of the controller.
 E_CONTROLLER_DIGITAL_X       The 'X' button on the right button pad of the controller.
 E_CONTROLLER_DIGITAL_B       The 'B' button on the right button pad of the controller.
 E_CONTROLLER_DIGITAL_Y       The 'Y' button on the right button pad of the controller.
 E_CONTROLLER_DIGITAL_A       The 'A' button on the right button pad of the controller.
============================ ===========================================================

controller_id_e_t
-----------------

::

  typedef enum {
    E_CONTROLLER_MASTER = 0,
    E_CONTROLLER_PARTNER
  } controller_id_e_t;

====================== =========================
 Value
====================== =========================
 E_CONTROLLER_MASTER    The master controller.
 E_CONTROLLER_PARTNER   The partner controller.
====================== =========================

Typedefs
========
