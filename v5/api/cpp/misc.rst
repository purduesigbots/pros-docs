=====================
Miscellaneous C++ API
=====================

Battery
=======

get_capacity
--------------------

Gets the current capacity of the battery, as reported by VEXos.

::

  double pros::Battery::get_capacity ( )

**Returns:** The current capacity of the battery.

get_current
-------------------

Gets the current current of the battery, as reported by VEXos.

::

  double pros::Battery::get_current ( )

**Returns:** The current current of the battery.

get_temperature
-----------------------

Gets the current temperature of the battery, as reported by VEXos.

::

  double pros::Battery::get_temperature ( )

**Returns:** The current temperature of the battery.

get_voltage
-------------------

Gets the current voltage of the battery, as reported by VEXos

::

  double pros::Battery::get_voltage ( )

**Returns:** The current voltage of the battery.

Controller
==========

Constructor(s)
--------------

::

  pros::Controller::Controller ( controller_id_e_t id )

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 id           The ID of the controller (e.g. the master or partner controller).
              Must be one of `CONTROLLER_MASTER <controller_id_e_t_>`_ or `CONTROLLER_PARTNER <controller_id_e_t_>`_
============ ======================================================================================================

Methods
-------

is_connected
~~~~~~~~~~~~

Return 0 or 1 if the controller is connected.

Analogous to `controller_is_connected <../c/misc.html#controller-is-connected>`_.

::

  int32_t pros::Controller::is_connected ( )

**Returns:** True if the V5 Brain is connected to competition control, false otherwise.

get_analog
~~~~~~~~~~

Gets the value of an analog channel (joystick) on a controller.

Analogous to `controller_get_analog <../c/misc.html#controller-get-analog>`_.

::

  int32_t pros::Controller::get_analog ( controller_analog_e_t channel )

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 channel      The analog channel to get.
              Must be one of `ANALOG_LEFT_X <controller_analog_e_t_>`_, `ANALOG_LEFT_Y <controller_analog_e_t_>`_,
              `ANALOG_RIGHT_X <controller_analog_e_t_>`_, `ANALOG_RIGHT_Y <controller_analog_e_t_>`_
============ ======================================================================================================

**Returns:** The current reading of the analog channel: [-127, 127].
If the controller was not connected, then 0 is returned

get_digital
~~~~~~~~~~~

Gets the value of an digital channel (button) on a controller.

Analogous to `controller_get_digital <../c/misc.html#controller-get-digital>`_.

::

  int32_t pros::Controller::get_digital ( controller_digital_e_t button )

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 button       The button to read. Must be one of `DIGITAL_{RIGHT,DOWN,LEFT,UP,A,B,Y,X,R1,R2,L1,L2}
              <../c/misc.html#controller-digital-e-t>`_
============ =================================================================================================================

**Returns:** 1 if the button on the controller is pressed.
If the controller was not connected, then 0 is returned

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

Analogous to `controller_get_digital_new_press <../c/misc.html#controller-get-digital-new-press>`_.

::

  int32_t pros::Controller::get_digital_new_press ( controller_digital_e_t button )

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
