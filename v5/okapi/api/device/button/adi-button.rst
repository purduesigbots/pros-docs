==========
ADI Button
==========

.. contents:: :local:

okapi::ADIButton
================

A button in an ADI port.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ADIButton(const uint8_t iport, const bool iinverted = false)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iport           The port the button is in.
 iinverted       Whether the button's state is inverted.
=============== ===================================================================

Methods
-------

isPressed
~~~~~~~~~

Returns whether the button is currently pressed.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool isPressed() override

**Returns:** Whether the button is currently pressed.

----

changed
~~~~~~~

Returns whether the state of the button changed since the last time this method was called.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool changed() override

**Returns:** Whether the state of the button changed since the last time this method was called.

----

changedToPressed
~~~~~~~~~~~~~~~~

Returns whether the state of the button changed to being pressed since the last time this method
was called.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool changedToPressed() override

**Returns:** Whether the state of the button changed to being pressed since the last time this
method was called.

----

changedToReleased
~~~~~~~~~~~~~~~~~

Returns whether the state of the button to being not pressed changed since the last time this
method was called.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool changedToReleased() override

**Returns:** Whether the state of the button to being not pressed changed since the last time this
method was called.
