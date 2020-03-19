=================
Controller Button
=================

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.x.x and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

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

        ControllerButton(ControllerDigital ibtn, bool iinverted = false)

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

        ControllerButton(ControllerId icontroller, ControllerDigital ibtn, bool iinverted = false)

=============== ===================================================================
 Parameters
=============== ===================================================================
 icontroller     Which controller this button is on.
 ibtn            Which button on the controller.
 iinverted       Whether the button's state is inverted.
=============== ===================================================================
