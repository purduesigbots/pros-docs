=================
Controller Button
=================

.. contents:: :local:

okapi::ControllerButton
=======================

A `Button <abstract-button.html>`_ on a controller.

Constructor(s)
--------------

This constructor uses the master controller (``ControllerId::master``).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ControllerButton(const ControllerDigital ibtn, const bool iinverted = false)

=============== ===================================================================
 Parameters
=============== ===================================================================
 ibtn            Which button on the controller.
 iinverted       Whether the button's state is inverted.
=============== ===================================================================

----

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ControllerButton(const ControllerId icontroller, const ControllerDigital ibtn, const bool iinverted = false)

=============== ===================================================================
 Parameters
=============== ===================================================================
 icontroller     Which controller this button is on.
 ibtn            Which button on the controller.
 iinverted       Whether the button's state is inverted.
=============== ===================================================================
