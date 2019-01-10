.. highlight:: cpp
   :linenothreshold: 5

=====================
Miscellaneous C++ API
=====================

.. note:: Additional example code for this module can be found in
          `its Tutorial <../../tutorials/topical/controller.html>`_.

.. contents:: :local:

pros::battery
=============

get_capacity
------------

Gets the current capacity of the battery, as reported by VEXos.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the battery port.

Analogous to `battery_get_capacity <../c/misc.html#battery-get-capacity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double pros::battery::get_capacity ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          std::cout << "Battery Level:" << pros::battery::get_capacity();
        }

**Returns:** The current capacity of the battery.

----

get_current
-----------

Gets the current current of the battery, as reported by VEXos.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the battery port.

Analogous to `battery_get_current <../c/misc.html#battery-get-current>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double pros::battery::get_current ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          std::cout << "Battery Current:" << pros::battery::get_current();
        }

**Returns:** The current current of the battery.

----

get_temperature
---------------

Gets the current temperature of the battery, as reported by VEXos.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the battery port.

Analogous to `battery_get_temperature <../c/misc.html#battery-get-temperature>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double pros::battery::get_temperature ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          std::cout << "Battery Temperature:" << pros::battery::get_temperature();
        }

**Returns:** The current temperature of the battery.

----

get_voltage
-----------

Gets the current voltage of the battery, as reported by VEXos.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the battery port.

Analogous to `battery_get_voltage <../c/misc.html#battery-get-voltage>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double pros::battery::get_voltage ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          std::cout << "Battery Voltage:" << pros::battery::get_voltage();
        }

**Returns:** The current voltage of the battery.

----

pros::competition
=================

get_status
----------

Analogous to `competition_get_status <../c/misc.html#competition-get-status>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

       uint8_t pros::competition::get_status ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          if (pros::competition::get_status() & COMPETITION_CONNECTED == true) {
            // Field Control is Connected
            // Run LCD Selector code or similar
          }
        }

**Returns:** The competition control status as a mask of bits with
COMPETITION_{ENABLED,AUTONOMOUS,CONNECTED}.

----

is_autonomous
-------------

Analogous to `competition_is_autonomous <../c/misc.html#competition-is-autonomous>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool pros::competition::is_autonomous ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void my_task_fn(void* ignore) {
          while (!pros::competition::is_autonomous()) {
            // Wait to do anything until autonomous starts
            pros::delay(2);
          }
          while (pros::competition::is_autonomous()) {
            // Run whatever code is desired to just execute in autonomous
          }
        }

        void initialize() {
          pros::Task my_task (my_task_fn, NULL, TASK_PRIO_DEFAULT, TASK_STACK_DEPTH_DEFAULT, "My Task");
        }

**Returns:** True if the V5 Brain is in autonomous mode, false otherwise.

----

is_connected
------------

Analogous to `competition_is_connected <../c/misc.html#competition-is-connected>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool pros::competition::is_connected ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          if (pros::competition::is_connected()) {
            // Field Control is Connected
            // Run LCD Selector code or similar
          }
        }

**Returns:** True if the V5 Brain is connected to competition control, false otherwise.

----

is_disabled
-----------

Analogous to `competition_is_disabled <../c/misc.html#competition-is-disabled>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool pros::competition::is_disabled ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void my_task_fn(void* ignore) {
          while (!pros::competition::is_disabled()) {
            // Run competition tasks (like Lift Control or similar)
          }
        }

        void initialize() {
          pros::Task my_task (my_task_fn, NULL, TASK_PRIO_DEFAULT, TASK_STACK_DEPTH_DEFAULT, "My Task");
        }

**Returns:** True if the V5 Brain is disabled, false otherwise.

----

pros::Controller
================

Constructor(s)
--------------

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``  - A value other than ``E_CONTROLLER_MASTER`` or ``E_CONTROLLER_PARTNER`` is given.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         pros::Controller::Controller ( pros::controller_id_e_t id )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Controller master (E_CONTROLLER_MASTER);
          pros::Motor motor (1);
          while (true) {
            motor.move(master.get_analog(E_CONTROLLER_ANALOG_LEFT_X));
            pros::delay(2);
          }
        }

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 id           The ID of the controller (e.g. the master or partner controller).
              Must be one of `CONTROLLER_MASTER <controller_id_e_t_>`_ or `CONTROLLER_PARTNER <controller_id_e_t_>`_
============ ======================================================================================================

----

Methods
-------

clear
~~~~~

Clears all of the lines of the controller screen.

.. note:: Controller text setting is a slow process, so updates faster than 10ms when on
          a wired connection or 50ms over Vexnet will not be applied to the controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `controller_clear <../c/misc.html#controller-clear>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        std::int32_t pros::Controller::clear ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          pros::Controller master (E_CONTROLLER_MASTER);
          master.set_text(0, 0, "Example");
          pros::delay(100);
          master.clear();
        }

**Returns:** 1 if the operation was successful, ``PROS_ERR`` otherwise.

----

clear_line
~~~~~~~~~~

Clears an individual line of the controller screen.

.. note:: Controller text setting is a slow process, so updates faster than 10ms when on
          a wired connection or 50ms over Vexnet will not be applied to the controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `controller_clear_line <../c/misc.html#controller-clear-line>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        std::int32_t pros::Controller::clear_line ( std::uint8_t line )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          pros::Controller master (E_CONTROLLER_MASTER);
          master.set_text(0, 0, "Example");
          pros::delay(100);
          master.clear_line(0);
        }


============ ======================================================================================================
 Parameters
============ ======================================================================================================
 line         The line number to clear [0-2]
============ ======================================================================================================

**Returns:** 1 if the operation was successful, ``PROS_ERR`` otherwise.

----

is_connected
~~~~~~~~~~~~

Return 0 or 1 if the controller is connected.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `controller_is_connected <../c/misc.html#controller-is-connected>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Controller::is_connected ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Controller partner (E_CONTROLLER_PARTNER);
          while (true) {
            if (partner.is_connected()) {
              // Use a two controller control scheme
            }
            else {
              // Just use a single controller control scheme
            }

            pros::delay(2);
          }
        }

**Returns:** True if the Controller is connected to the Brain, false otherwise.

----

get_analog
~~~~~~~~~~

Gets the value of an analog channel (joystick) on a controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `controller_get_analog <../c/misc.html#controller-get-analog>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::Controller::get_analog ( pros::controller_analog_e_t channel )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Controller master (E_CONTROLLER_MASTER);
          pros::Motor motor (1);
          while (true) {
            motor.move(master.get_analog(E_CONTROLLER_ANALOG_LEFT_X));
            pros::delay(2);
          }
        }

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 channel      The analog channel to get.
              Must be one of `ANALOG_LEFT_X <controller_analog_e_t_>`_, `ANALOG_LEFT_Y <controller_analog_e_t_>`_,
              `ANALOG_RIGHT_X <controller_analog_e_t_>`_, `ANALOG_RIGHT_Y <controller_analog_e_t_>`_
============ ======================================================================================================

**Returns:** The current reading of the analog channel: [-127, 127].
If the controller was not connected, then 0 is returned

----

get_battery_capacity
~~~~~~~~~~~~~~~~~~~~

Gets the battery capacity of the given controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `controller_get_battery_capacity <../c/misc.html#controller-get-battery-capacity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       std::int32_t pros::Controller::get_battery_capacity ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          pros::Controller master (E_CONTROLLER_MASTER);
          printf("Battery Capacity: %d\n", master.get_battery_capacity());
        }

**Returns:** The controller's battery capacity.

----

get_battery_level
~~~~~~~~~~~~~~~~~

Gets the battery level of the given controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `controller_get_battery_level <../c/misc.html#controller-get-battery-level>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       std::int32_t pros::Controller::get_battery_level ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          pros::Controller master (E_CONTROLLER_MASTER);
          printf("Battery Level: %d\n", master.get_battery_level());
        }

**Returns:** The controller's battery level.

----

get_digital
~~~~~~~~~~~

Gets the value of an digital channel (button) on a controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `controller_get_digital <../c/misc.html#controller-get-digital>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Controller::get_digital ( pros::controller_digital_e_t button )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Controller master (E_CONTROLLER_MASTER);
          pros::Motor motor (1);
          while (true) {
            if (master.get_digital(E_CONTROLLER_DIGITAL_A)) {
              motor.move(100);
            }
            else {
              motor.move(0);
            }

            pros::delay(2);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 button       The button to read. Must be one of `DIGITAL_{RIGHT,DOWN,LEFT,UP,A,B,Y,X,R1,R2,L1,L2}
              <../c/misc.html#controller-digital-e-t>`_
============ =================================================================================================================

**Returns:** 1 if the button on the controller is pressed.
If the controller was not connected, then 0 is returned

----

get_digital_new_press
~~~~~~~~~~~~~~~~~~~~~

Returns a rising-edge case for a controller button press.

This function is not thread-safe.
Multiple tasks polling a single button may return different results under the
same circumstances, so only one task should call this function for any given
button. E.g., Task A calls this function for buttons 1 and 2. Task B may call
this function for button 3, but should not for buttons 1 or 2. A typical
use-case for this function is to call inside opcontrol to detect new button
presses, and not in any other tasks.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `controller_get_digital_new_press <../c/misc.html#controller-get-digital-new-press>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Controller::get_digital_new_press ( pros::controller_digital_e_t button )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            if (master.get_digital_new_press(E_CONTROLLER_DIGITAL_A)) {
              // Toggle pneumatics or other similar actions
            }

            pros::delay(2);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 button       The button to read. Must be one of `DIGITAL_{RIGHT,DOWN,LEFT,UP,A,B,Y,X,R1,R2,L1,L2}
              <../c/misc.html#controller-digital-e-t>`_
============ =================================================================================================================

**Returns:** 1 if the button on the controller is pressed and had not been pressed
the last time this function was called, 0 otherwise.

----

print
~~~~~

Sets text to the controller LCD screen.

.. note:: Controller text setting is a slow process, so updates faster than 10ms when on
          a wired connection or 50ms over Vexnet will not be applied to the controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `controller_print <../c/misc.html#controller-print>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       std::int32_t pros::Controller::print ( std::uint8_t line,
                                              std::uint8_t col,
                                              const char* fmt,
                                              ... )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          int count = 0;
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            if (!(count % 25)) {
              // Only print every 50ms, the controller text update rate is slow
              master.print(0, 0, "Counter: %d", count);
            }
            count++;
            pros::delay(2);
          }
        }


============ ======================================================================================================
 Parameters
============ ======================================================================================================
 line         The line number at which the text will be displayed [0-2].
 col          The column number at which the text will be displayed [0-14].
 fmt          The format string to print to the controller
 ...          The argument list for the format string
============ ======================================================================================================

**Returns:** 1 if the operation was successful, ``PROS_ERR`` otherwise.

----

controller_rumble
-----------------

Rumble the controller.

.. note:: Controller text setting is a slow process, so updates faster than 10ms when on
          a wired connection or 50ms over Vexnet will not be applied to the controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `controller_rumble <../c/misc.html#controller-rumble>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       std::int32_t controller_rumble ( const char* rumble_pattern )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          int count = 0;
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            if (!(count % 25)) {
              // Only print every 50ms, the controller text update rate is slow
              master.rumble(". - . -");
            }
            count++;
            delay(2);
          }
        }


================ ======================================================================================================
 Parameters
================ ======================================================================================================
 rumble_pattern   A string consisting of the characters '.', '-', and ' ', where dots
                  are short rumbles, dashes are long rumbles, and spaces are pauses.
                  Maximum supported length is 8 characters.
================ ======================================================================================================

**Returns:** 1 if the operation was successful, ``PROS_ERR`` otherwise.

----

set_text
~~~~~~~~

Sets text to the controller LCD screen.

.. note:: Controller text setting is a slow process, so updates faster than 10ms when on
          a wired connection or 50ms over Vexnet will not be applied to the controller.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCES``  - Another resource is currently trying to access the controller port.

Analogous to `controller_set_text <../c/misc.html#controller-set-text>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

       std::int32_t pros::Controller::set_text ( std::uint8_t line,
                                                 std::uint8_t col,
                                                 const char* str )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          int count = 0;
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            if (!(count % 25)) {
              // Only print every 50ms, the controller text update rate is slow
              master.set_text(E_CONTROLLER_MASTER, 0, 0, "Example text");
            }
            count++;
            pros::delay(2);
          }
        }


============ ======================================================================================================
 Parameters
============ ======================================================================================================
 line         The line number at which the text will be displayed [0-2]
 col          The column number at which the text will be displayed [0-14].
 str          The pre-formatted string to print to the controller.
============ ======================================================================================================

**Returns:** 1 if the operation was successful, ``PROS_ERR`` otherwise.

---

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
with `get_status`_.

**Value:** ``(1 << 0)``

COMPETITION_DISABLED
--------------------

Use COMPETITION_DISABLED as a bitmask for checking whether the brain is disabled with `get_status`_.

**Value:** ``(1 << 1)``

COMPETITION_CONNECTED
---------------------

Use COMPETITION_CONNECTED as a bitmask for checking whether the brain is connected to competition control with `get_status`_.

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

pros::controller_analog_e_t
---------------------------

::

  typedef enum {
    E_CONTROLLER_ANALOG_LEFT_X = 0,
    E_CONTROLLER_ANALOG_LEFT_Y,
    E_CONTROLLER_ANALOG_RIGHT_X,
    E_CONTROLLER_ANALOG_RIGHT_Y
  } controller_analog_e_t;

=================================== =============================================================
 Value
=================================== =============================================================
 pros::E_CONTROLLER_ANALOG_LEFT_X    The horizontal axis of the controller's left analog stick.
 pros::E_CONTROLLER_ANALOG_LEFT_Y    The vertical axis of the controller's left analog stick.
 pros::E_CONTROLLER_ANALOG_RIGHT_X   The horizontal axis of the controller's right analog stick.
 pros::E_CONTROLLER_ANALOG_RIGHT_Y   The vertical axis of the controller's right analog stick.
=================================== =============================================================

pros::controller_digital_e_t
----------------------------

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

================================== ===========================================================
 Value
================================== ===========================================================
 pros::E_CONTROLLER_DIGITAL_L1      The first trigger on the left side of the controller.
 pros::E_CONTROLLER_DIGITAL_L2      The second trigger on the left side of the controller.
 pros::E_CONTROLLER_DIGITAL_R1      The first trigger on the right side of the controller.
 pros::E_CONTROLLER_DIGITAL_R2      The second trigger on the right side of the controller.
 pros::E_CONTROLLER_DIGITAL_UP      The up arrow on the left arrow pad of the controller.
 pros::E_CONTROLLER_DIGITAL_DOWN    The down arrow on the left arrow pad of the controller.
 pros::E_CONTROLLER_DIGITAL_LEFT    The left arrow on the left arrow pad of the controller.
 pros::E_CONTROLLER_DIGITAL_RIGHT   The right arrow on the left arrow pad of the controller.
 pros::E_CONTROLLER_DIGITAL_X       The 'X' button on the right button pad of the controller.
 pros::E_CONTROLLER_DIGITAL_B       The 'B' button on the right button pad of the controller.
 pros::E_CONTROLLER_DIGITAL_Y       The 'Y' button on the right button pad of the controller.
 pros::E_CONTROLLER_DIGITAL_A       The 'A' button on the right button pad of the controller.
================================== ===========================================================

pros::controller_id_e_t
-----------------------

::

  typedef enum {
    E_CONTROLLER_MASTER = 0,
    E_CONTROLLER_PARTNER
  } controller_id_e_t;

============================ =========================
 Value
============================ =========================
 pros::E_CONTROLLER_MASTER    The master controller.
 pros::E_CONTROLLER_PARTNER   The partner controller.
============================ =========================

Typedefs
========

.. _controller_analog_e_t: ../c/misc.html#controller-analog-e-t
.. _controller_id_e_t: ../c/misc.html#controller-id-e-t
