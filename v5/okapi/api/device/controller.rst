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

        Controller(ControllerId iid = ControllerId::master)

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

        virtual float getAnalog(ControllerAnalog ichannel)

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

        virtual bool getDigital(ControllerDigital ibutton)

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

        virtual ControllerButton operator[](ControllerDigital ibtn)

   .. tab :: Example
      .. highlight:: cpp
      ::

        okapi::Controller myController;
        okapi::ControllerButton myButton = myController[ControllerDigital::A]

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 ibutton      The button on this controller.
============ ======================================================================================================

**Returns:** A `ControllerButton <button/controller-button.html>`_ that matches the given button on
this controller.

----

setText
~~~~~~~

Sets text to the controller LCD screen.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t setText(std::uint8_t iline, std::uint8_t icol, std::string itext)

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 iline        The line number at which the text will be displayed ``[0-2]``.
 icol         The column number at which the text will be displayed ``[0-14]``.
 itext        The string to display.
============ ======================================================================================================

**Returns:** ``1`` is the operation was successful, ``PROS_ERR`` otherwise.

----

clear
~~~~~

Clears all of the lines of the controller screen.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t clear()

**Returns:** ``1`` is the operation was successful, ``PROS_ERR`` otherwise.

----

clearLine
~~~~~~~~~

Clears an individual line of the controller screen.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t clearLine(std::uint8_t iline)

============ ======================================================================================================
 Parameters
============ ======================================================================================================
 iline        The line number to clear.
============ ======================================================================================================

**Returns:** ``1`` is the operation was successful, ``PROS_ERR`` otherwise.

----

rumble
~~~~~~

Rumble the controller.

Controller rumble activation is currently in beta, so continuous, fast updates will not work well.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t rumble(std::string irumblePattern)

================ ======================================================================================================
 Parameters
================ ======================================================================================================
 irumblePattern   A string consisting of the characters period, hyphen, and space, where periods are short rumbles, hyphens are long rumbles, and spaces are pauses. Maximum supported length is 8 characters.
================ ======================================================================================================

**Returns:** ``1`` is the operation was successful or ``PROS_ERR`` if the operation failed,
setting errno.

----

getBatteryCapacity
~~~~~~~~~~~~~~~~~~

Gets the battery capacity of the given controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t getBatteryCapacity()

**Returns:** The controller's battery capacity.

----

getBatteryLevel
~~~~~~~~~~~~~~~

Gets the battery level of the given controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t getBatteryLevel()

**Returns:** The controller's battery level.

----

Enumerated Values
-----------------

ControllerId
~~~~~~~~~~~~

The ID of the controller (e.g. master or partner).

::

  enum class ControllerId {
    master = 0,
    partner = 1
  };

ControllerAnalog
~~~~~~~~~~~~~~~~

An analog stick.

::

  enum class ControllerAnalog {
    leftX = 0,
    leftY = 1,
    rightX = 2,
    rightY = 3
  };

ControllerDigital
~~~~~~~~~~~~~~~~~

Various buttons.

::

  enum class ControllerDigital {
    L1 = 6,
    L2 = 7,
    R1 = 8,
    R2 = 9,
    up = 10,
    down = 11,
    left = 12,
    right = 13,
    X = 14,
    B = 15,
    Y = 16,
    A = 17
  };
