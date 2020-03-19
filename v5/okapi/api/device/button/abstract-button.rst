=================
(Abstract) Button
=================

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.x.x and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

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

        virtual bool isPressed()

**Returns:** Whether the button is currently pressed.

----

changed
~~~~~~~

Returns whether the state of the button changed since the last time this method was called.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool changed()

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

        virtual bool changedToPressed()

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

        virtual bool changedToReleased()

**Returns:** Whether the state of the button changed to not pressed since the last time
this method was called.

----

controllerGet
~~~~~~~~~~~~~

Returns whether the button is currently pressed. This method might be automatically called in
another thread by a controller.

This is identical to ``isPressed()`` and only exists to implement the
`ControllerInput <../../control/abstract-controller-input.html>` interface.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool controllerGet() override

**Returns:** Whether the button is currently pressed.
