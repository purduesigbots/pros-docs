======
Button
======

.. contents:: :local:

okapi::Button
=============

Methods
-------

isPressed
~~~~~~~~~

Returns whether the button is currently pressed.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool isPressed() = 0

**Returns:** Whether the button is currently pressed.

----

changed
~~~~~~~

Returns whether the state of the button changed since the last time this method was called.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool changed() = 0

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

        virtual bool changedToPressed() = 0

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

        virtual bool changedToReleased() = 0

**Returns:** Whether the state of the button to being not pressed changed since the last time this
method was called.
