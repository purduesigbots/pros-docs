.. highlight:: c
   :linenothreshold: 5

================
VEX Link C API
================

.. contents:: :local:

Functions
=========

link_init
---------

Initializes a link on a radio port, with an indicated type.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint32_t link_init(uint8_t port, const char* link_id, link_type_e_t type);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The port of the radio for the intended link.
 link_id      Unique link ID in the form of a string, needs to be different from other links in the area.
 type         Indicates whether the radio link on the brain is a transmitter or reciever.
============ =================================================================================================================

**Returns:** ``1`` if operation successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

link_init_override
------------------

Initializes a link on a radio port, with an indicated type and the ability for vexlink to override the controller radio.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint32_t link_init_override(uint8_t port, const char* link_id, link_type_e_t type);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_reset(ROTATION_PORT);
            }
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The port of the radio for the intended link.
 link_id      Unique link ID in the form of a string, needs to be different from other links in the area.
 type         Indicates whether the radio link on the brain is a transmitter or reciever.
============ =================================================================================================================

**Returns:** ``1`` if operation successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

link_connected
--------------

Checks if a radio link on a port is active or not.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        bool link_connected(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_reset(ROTATION_PORT);
            }
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The port of the radio for the intended link.
============ =================================================================================================================

**Returns:** If a radio is connected to a port and it's connected to a link.

----

link_raw_receivable_size
------------------------

Returns the bytes of data available to be read

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint32_t link_raw_receivable_size(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_reset(ROTATION_PORT);
            }
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The port of the radio for the intended link.
============ =================================================================================================================

**Returns:** ``PROS_ERR`` if port is not a link/radio, else the bytes available to be read by the user.

----

link_raw_transmittable_size
---------------------------

Returns the bytes of data available in transmission buffer.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint32_t link_raw_transmittable_size(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_reset(ROTATION_PORT);
            }
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The port of the radio for the intended link.
============ =================================================================================================================

**Returns:** ``PROS_ERR`` if port is not a link/radio.

----

link_transmit_raw
-----------------

Send raw serial data through vexlink.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.
- ``EBUSY`` - The transmitter buffer is still busy with a previous transmission, and there is no room in the FIFO buffer (queue) to transmit the data.
- ``EINVAL`` - The data given is NULL

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint32_t link_transmit_raw(uint8_t port, void* data, uint16_t data_size);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_reset(ROTATION_PORT);
            }
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The port of the radio for the intended link.
 data         Buffer with data to send
 data_size    Bytes of data to be read to the destination buffer
============ =================================================================================================================

**Returns:** ``PROS_ERR`` if port is not a link, ``0`` if the link is busy, and ``1`` if it succeeded.

----

link_receive_raw
----------------

Receive raw serial data through vexlink.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.
- ``EINVAL`` - The data given is NULL

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint32_t link_receive_raw(uint8_t port, void* dest, uint16_t data_size);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_reset(ROTATION_PORT);
            }
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The port of the radio for the intended link.
 data         Buffer with data to send
 data_size    Bytes of data to be read to the destination buffer
============ =================================================================================================================

**Returns:** ``PROS_ERR`` if port is not a link, ``0`` if the link is busy, and ``1`` if it succeeded.

----

link_transmit
-------------

Send packeted message through vexlink, with a checksum and start byte.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.
- ``EBUSY`` - The transmitter buffer is still busy with a previous transmission, and there is no room in the FIFO buffer (queue) to transmit the data.
- ``EINVAL`` - The data given is NULL

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint32_t link_transmit(uint8_t port, void* data, uint16_t data_size);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_reset(ROTATION_PORT);
            }
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The port of the radio for the intended link.
 data         Buffer with data to send
 data_size    Bytes of data to be read to the destination buffer
============ =================================================================================================================

**Returns:** ``PROS_ERR`` if port is not a link, ``0`` if the link is busy, and the successfully transmitted size if it succeeded.

----

link_receive
-------------

Receive packeted message through vexlink, with a checksum and start byte.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.
- ``EINVAL`` - The destination given is NULL, or the size given is larger than the FIFO buffer or destination buffer.
- ``EBADMSG`` - Protocol error related to start byte, data size, or checksum.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint32_t link_receive(uint8_t port, void* dest, uint16_t data_size);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_reset(ROTATION_PORT);
            }
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The port of the radio for the intended link.
 data         Buffer with data to send
 data_size    Bytes of data to be read to the destination buffer
============ =================================================================================================================

**Returns:** ``PROS_ERR`` if port is not a link or protocol error, ``0`` if the link is busy, and the successfully transmitted size if it succeeded.

----

link_clear_receive_buf
----------------------

Clear the receive buffer of the link, and discarding the data.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint32_t link_clear_receive_buf(uint8_t port);

   .. tab :: Example
      .. highlight:: c
      ::

        #define ROTATION_PORT 1

        void opcontrol() {
          while (true) {
            
            if(controller_get_digital(CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_X)){
                rotation_reset(ROTATION_PORT);
            }
            delay(20);
          }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 port         The port of the radio for the intended link.
============ =================================================================================================================

**Returns:** ``PROS_ERR`` if port is not a link, ``0`` if the operation succeeded.

----

Enumerated Values
=================

::

  typedef enum link_type_e {
    E_LINK_RECIEVER = 0,
    E_LINK_TRANSMITTER
  } link_type_e_t;

============================= =============================================================
 Value
============================= =============================================================
 E_LINK_RECIEVER               Indicating that the radio is a reciever.
 E_LINK_TRANSMITTER            Indicating that the radio is a transmitter.
============================= =============================================================