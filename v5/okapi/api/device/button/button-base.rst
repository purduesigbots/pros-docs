===========
Button Base
===========

.. contents:: :local:

okapi::ButtonBase
=================

A helper class to implement most of the functionality of `AbstractButton <abstract-button.html>`_.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        explicit ButtonBase(bool iinverted = false)

=============== ===================================================================
 Parameters
=============== ===================================================================
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

        bool isPressed() override

**Returns:** Whether the button is currently pressed.

----

changed
~~~~~~~

Returns whether the state of the button changed since the last time this method was called.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool changed() override

**Returns:** Whether the state of the button changed since the last time this method was called.

----

changedToPressed
~~~~~~~~~~~~~~~~

Returns whether the state of the button changed to pressed since the last time this method
was called.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool changedToPressed() override

**Returns:** Whether the state of the button changed to pressed since the last time this
method was called.

----

changedToReleased
~~~~~~~~~~~~~~~~~

Returns whether the state of the button changed to not pressed since the last time this
method was called.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool changedToReleased() override

**Returns:** Whether the state of the button changed to not pressed since the last time this
method was called.
