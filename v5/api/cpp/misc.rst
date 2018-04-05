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

         pros::Controller::Controller ( controller_id_e_t id )

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

**Returns:** True if the V5 Brain is connected to competition control, false otherwise.

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

         std::int32_t pros::Controller::get_analog ( controller_analog_e_t channel )

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

        std::int32_t pros::Controller::get_digital ( controller_digital_e_t button )

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

        std::int32_t pros::Controller::get_digital_new_press ( controller_digital_e_t button )

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

.. _controller_analog_e_t: ../c/misc.html#controller-analog-e-t
.. _controller_id_e_t: ../c/misc.html#controller-id-e-t
