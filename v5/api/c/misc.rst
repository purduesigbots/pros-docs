.. highlight:: c
   :linenothreshold: 5

===================
Miscellaneous C API
===================

.. note:: Additional example code for this module can be found in
          `its Tutorial <../../tutorials/topical/controller.html>`_.

.. contents:: :local:

Functions
=========

battery_get_capacity
--------------------

Gets the current capacity of the battery, as reported by VEXos.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the battery port.

Analogous to `pros::battery::get_capacity <../cpp/misc.html#get-capacity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double battery_get_capacity ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          printf("Battery Level: %d\n", battery_get_capacity());
        }

**Returns:** The current capacity of the battery.

----

battery_get_current
-------------------

Gets the current current of the battery, as reported by VEXos.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the battery port.

Analogous to `pros::battery::get_current <../cpp/misc.html#get-current>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double battery_get_current ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          printf("Battery Current: %d\n", battery_get_current());
        }

**Returns:** The current current of the battery.

----

battery_get_temperature
-----------------------

Gets the current temperature of the battery, as reported by VEXos.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the battery port.

Analogous to `pros::battery::get_temperature <../cpp/misc.html#get-temperature>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         double battery_get_temperature ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          printf("Battery's Temperature: %d\n", battery_get_temperature());
        }

**Returns:** The current temperature of the battery.

----

battery_get_voltage
-------------------

Gets the current voltage of the battery, as reported by VEXos.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the battery port.

Analogous to `pros::battery::get_voltage <../cpp/misc.html#get-voltage>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        double battery_get_voltage ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          printf("Battery's Voltage: %d\n", battery_get_voltage());
        }

**Returns:** The current voltage of the battery.

----

competition_get_status
----------------------

Analogous to `pros::competition::get_status <../cpp/misc.html#get-status>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       uint8_t competition_get_status ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          if (competition_get_status() & COMPETITION_CONNECTED == true) {
            // Field Control is Connected
            // Run LCD Selector code or similar
          }
        }

**Returns:** The competition control status as a mask of bits with
COMPETITION_{ENABLED,AUTONOMOUS,CONNECTED}.

----

competition_is_autonomous
-------------------------

Analogous to `pros::competition::is_autonomous <../cpp/misc.html#is-autonomous>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        bool competition_is_autonomous ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* ignore) {
          while (!competition_is_autonomous()) {
            // Wait to do anything until autonomous starts
            delay(2);
          }
          while (competition_is_autonomous()) {
            // Run whatever code is desired to just execute in autonomous
          }
        }

        void initialize() {
          task_t my_task = task_create(my_task_fn, NULL, TASK_PRIO_DEFAULT, TASK_STACK_DEPTH_DEFAULT, "My Task");
        }

**Returns:** True if the V5 Brain is in autonomous mode, false otherwise.

----

competition_is_connected
------------------------

Analogous to `pros::competition::is_connected <../cpp/misc.html#is-connected>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        bool competition_is_connected ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          if (competition_is_connected()) {
            // Field Control is Connected
            // Run LCD Selector code or similar
          }
        }

**Returns:** True if the V5 Brain is connected to competition control, false otherwise.

----

competition_is_disabled
-----------------------

Analogous to `pros::competition::is_disabled <../cpp/misc.html#is-disabled>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        bool competition_is_disabled ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* ignore) {
          while (!competition_is_disabled()) {
            // Run competition tasks (like Lift Control or similar)
          }
        }

        void initialize() {
          task_t my_task = task_create(my_task_fn, NULL, TASK_PRIO_DEFAULT, TASK_STACK_DEPTH_DEFAULT, "My Task");
        }

**Returns:** True if the V5 Brain is disabled, false otherwise.

----

controller_get_analog
---------------------

Gets the value of an analog channel (joystick) on a controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - A value other than ``E_CONTROLLER_MASTER`` or ``E_CONTROLLER_PARTNER`` is given.
- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `pros::Controller::get_analog <../cpp/misc.html#get-analog>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t controller_get_analog ( controller_id_e_t id,
                                        controller_analog_e_t channel )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            motor_move(1, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
            delay(2);
          }
        }

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 id           The ID of the controller (e.g. the master or partner controller).
              Must be one of `CONTROLLER_MASTER <misc.html#controller-id-e-t>`_ or `CONTROLLER_PARTNER <misc.html#controller-id-e-t>`_
 channel      The analog channel to get.
              Must be one of `ANALOG_LEFT_X <misc.html#controller-analog-e-t>`_, `ANALOG_LEFT_Y <misc.html#controller-analog-e-t>`_,
              `ANALOG_RIGHT_X <misc.html#controller-analog-e-t>`_, `ANALOG_RIGHT_Y <misc.html#controller-analog-e-t>`_
============ ======================================================================================================

**Returns:** The current reading of the analog channel: [-127, 127].
If the controller was not connected, then 0 is returned

----

controller_get_digital
----------------------

Gets the value of an digital channel (button) on a controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - A value other than ``E_CONTROLLER_MASTER`` or ``E_CONTROLLER_PARTNER`` is given.
- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `pros::Controller::get_digital <../cpp/misc.html#get-digital>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t controller_get_digital ( controller_id_e_t id,
                                         controller_digital_e_t button )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            if (controller_get_digital(E_CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_A)) {
              motor_set(1, 100);
            }
            else {
              motor_set(1, 0);
            }

            delay(2);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 id           The ID of the controller (e.g. the master or partner controller).
              Must be one of `CONTROLLER_MASTER <misc.html#controller-id-e-t>`_ or `CONTROLLER_PARTNER <misc.html#controller-id-e-t>`_
 button       The button to read. Must be one of `DIGITAL_{RIGHT,DOWN,LEFT,UP,A,B,Y,X,R1,R2,L1,L2} <misc.html#controller-digital-e-t>`_
============ =================================================================================================================

**Returns:** 1 if the button on the controller is pressed.
If the controller was not connected, then 0 is returned

----

controller_get_digital_new_press
--------------------------------

Returns a rising-edge case for a controller button press.

This function is not thread-safe.
Multiple tasks polling a single button may return different results under the
same circumstances, so only one task should call this function for any given
button. E.g., Task A calls this function for buttons 1 and 2. Task B may call
this function for button 3, but should not for buttons 1 or 2. A typical
use-case for this function is to call inside opcontrol to detect new button
presses, and not in any other tasks.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - A value other than ``E_CONTROLLER_MASTER`` or ``E_CONTROLLER_PARTNER`` is given.
- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `pros::Controller::get_digital_new_press <../cpp/misc.html#get-digital-new-press>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t controller_get_digital_new_press ( controller_id_e_t id,
                                                   controller_digital_e_t button )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            if (controller_get_digital_new_press(E_CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_A)) {
              // Toggle pneumatics or other similar actions
            }

            delay(2);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 id           The ID of the controller (e.g. the master or partner controller).
              Must be one of `CONTROLLER_MASTER <misc.html#controller-id-e-t>`_ or `CONTROLLER_PARTNER <misc.html#controller-id-e-t>`_
 button       The button to read. Must be one of `DIGITAL_{RIGHT,DOWN,LEFT,UP,A,B,Y,X,R1,R2,L1,L2} <misc.html#controller-digital-e-t>`_
============ =================================================================================================================

**Returns:** 1 if the button on the controller is pressed and had not been pressed
the last time this function was called, 0 otherwise.

----

controller_is_connected
-----------------------

Returns 0 or 1 if the controller is connected.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - A value other than ``E_CONTROLLER_MASTER`` or ``E_CONTROLLER_PARTNER`` is given.
- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `pros::Controller::is_connected <../cpp/misc.html#id1>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       int32_t controller_is_connected ( controller_id_e_t id )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            if (controller_is_connected(E_CONTROLLER_PARTNER)) {
              // Use a two controller control scheme
            }
            else {
              // Just use a single controller control scheme
            }

            delay(2);
          }
        }

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 id           The ID of the controller (e.g. the master or partner controller).
              Must be one of `CONTROLLER_MASTER <misc.html#controller-id-e-t>`_ or `CONTROLLER_PARTNER <misc.html#controller-id-e-t>`_
============ ======================================================================================================

**Returns:** 1 if the controller is connected, 0 otherwise

----

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
