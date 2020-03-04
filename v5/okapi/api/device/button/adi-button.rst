==========
ADI Button
==========

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.X.X and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

.. contents:: :local:

okapi::ADIButton
================

A `Button <abstract-button.html>`_ in an ADI port.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ADIButton(std::uint8_t iport, bool iinverted = false)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iport           The port the button is in.
 iinverted       Whether the button's state is inverted.
=============== ===================================================================
