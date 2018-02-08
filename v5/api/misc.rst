=================
Miscellaneous API
=================

Functions
=========

competition_get_status
----------------------

::

  uint8_t competition_get_status ( )

**Returns:** The competition control status as a mask of bits with
COMPETITION_{ENABLED,AUTONOMOUS,CONNECTED}.

competition_is_disabled
-----------------------

::

  bool_t competition_is_disabled ( )

**Returns:** True if the V5 Brain is disabled, false otherwise.

competition_is_connected
------------------------

::

  bool_t competition_is_connected ( )

**Returns:** True if the V5 Brain is connected to competition control, false otherwise.

competition_is_autonomous
-------------------------

::

  bool_t competition_is_autonomous ( )

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

**Returns:** Returns the current reading of the analog channel: [-127, 127].
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

*Returns:** 1 if the button on the controller is pressed.
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

#define ANALOG_LEFT_X E_CONTROLLER_ANALOG_LEFT_X
------------------------------------------------

The horizontal axis of the controller's left analog stick.

#define ANALOG_LEFT_Y E_CONTROLLER_ANALOG_LEFT_Y
------------------------------------------------

The vertical axis of the controller's left analog stick.

#define ANALOG_RIGHT_X E_CONTROLLER_ANALOG_RIGHT_X
--------------------------------------------------

The horizontal axis of the controller's right analog stick.

#define ANALOG_RIGHT_Y E_CONTROLLER_ANALOG_RIGHT_Y
--------------------------------------------------

The vertical axis of the controller's right analog stick.

#define COMPETITION_AUTONOMOUS (1 << 0)
---------------------------------------

A bitmask for checking whether the brain is in autonomous mode with `competition_get_status`_.

#define COMPETITION_DISABLED (1 << 1)
-------------------------------------

A bitmask for checking whether the brain is disabled with `competition_get_status`_.

#define COMPETITION_CONNECTED (1 << 2)
--------------------------------------

A bitmask for checking whether the brain is connected to competition control with `competition_get_status`_.

#define CONTROLLER_MASTER E_CONTROLLER_MASTER
---------------------------------------------

The master controller.

#define CONTORLLER_PARTNER E_CONTROLLER_PARTNER
-----------------------------------------------

The partner controller.

#define DIGITAL_L1 E_CONTROLLER_DIGITAL_L1
------------------------------------------

The first trigger on the left side of the controller.

#define DIGITAL_L2 E_CONTROLLER_DIGITAL_L2
------------------------------------------

The second trigger on the left side of the controller.

#define DIGITAL_R1 E_CONTROLLER_DIGITAL_R1
------------------------------------------

The first trigger on the right side of the controller.

#define DIGITAL_R2 E_CONTROLLER_DIGITAL_R2
------------------------------------------

The second trigger on the right side of the controller.

#define DIGITAL_UP E_CONTROLLER_DIGITAL_UP
------------------------------------------

The up arrow on the left arrow pad of the controller.

#define DIGITAL_DOWN E_CONTROLLER_DIGITAL_DOWN
----------------------------------------------

The down arrow on the left arrow pad of the controller.

#define DIGITAL_LEFT E_CONTROLLER_DIGITAL_LEFT
----------------------------------------------

The left arrow on the left arrow pad of the controller.

#define DIGITAL_RIGHT E_CONTROLLER_DIGITAL_RIGHT
------------------------------------------------

The right arrow on the left arrow pad of the controller.

#define DIGITAL_X E_CONTROLLER_DIGITAL_X
----------------------------------------

The 'X' button on the right button pad of the controller.

#define DIGITAL_B E_CONTROLLER_DIGITAL_B
----------------------------------------

The 'B' button on the right button pad of the controller.

#define DIGITAL_Y E_CONTROLLER_DIGITAL_Y
----------------------------------------

The 'Y' button on the right button pad of the controller.

#define DIGITAL_A E_CONTROLLER_DIGITAL_A
----------------------------------------

The 'A' button on the right button pad of the controller.

#define NUM_V5_PORTS (22)
-------------------------

The number of RJ11 ports available on the V5 brain.

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
