==========
Controller
==========

.. contents:: :local:

okapi::Controller
=================

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Controller(const controller_id_e_t iid = E_CONTROLLER_MASTER)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iid             The ID of the controller (e.g. the master or partner controller).
=============== ===================================================================

Methods
-------

isConnected
~~~~~~~~~~~

Returns whether the controller is connected.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool isConnected()

**Returns:** ``true`` if the controller is connected.

----

getConnectionState
~~~~~~~~~~~~~~~~~~

Returns the full connection state of the controller.

 - ``0`` = disconnected
 - ``1`` = tethered
 - ``2`` = VEXnet

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t getConnectionState()

**Returns:** The connection state of the controller.

----

getAnalog
~~~~~~~~~

Returns the current analog reading for the channel in the range ``[-1, 1]``. Returns ``0`` if the
controller is not connected.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual float getAnalog(const controller_analog_e_t ichannel)

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 ichannel     The analog channel to read.
============ ======================================================================================================

**Returns:** The value of that channel in the range ``[-1, 1]``.

----

getDigital
~~~~~~~~~~

Returns whether the digital button is currently pressed. Returns ``false`` if the controller is not
connected.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool getDigital(const controller_digital_e_t ibutton)

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 ibutton      The button to read.
============ ======================================================================================================

**Returns:** ``true`` if the button is pressed, ``false`` if the controller is not connected

----

operator[]
~~~~~~~~~~

Returns a `ControllerButton <button/controller-button.html>`_ for the given button on this
controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual ControllerButton operator[](const controller_digital_e_t ibtn)
  
   .. tab :: Example
      .. highlight:: cpp
      ::

        okapi::Controller myController;
        okapi::ControllerButton myButton = myController[E_CONTROLLER_DIGITAL_A]

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 ibutton      The button on this controller.
============ ======================================================================================================

**Returns:** A `ControllerButton <button/controller-button.html>`_ that matches the given button on
this controller.
