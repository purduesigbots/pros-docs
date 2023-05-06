.. highlight:: cpp
   :linenothreshold: 5
   
=====================
VEX Link C++ API
=====================

.. note:: PROS currently officially supports the use of one VEX Radio per brain for VEXLink.

.. contents:: :local:

pros::Link
============

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::Link(const std::uint8_t port, const std::string link_id, link_type_e_t type, bool ov = false);

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define LINK_TRANSMITTER_PORT 1
        #define LINK_ID "ROBOT1"

         void initialize() {
            pros::Link transmitter(LINK_TRANSMITTER_PORT, LINK_ID, pros::E_LINK_TRANSMITTER);
         }

============ =========================================================================
 Parameters
============ =========================================================================
 port         The port of the radio for the intended link.
 link_id      Unique link ID in the form of a string.
 type         Indicates whether the radio link on the brain is a transmitter or reciever.
 ov           Indicates if the radio on the given port needs vexlink to override the controller radio.
============ =========================================================================

----

Functions
---------

connected
~~~~~~~~~

Checks if a radio link on a port is active or not.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool connected()

   .. tab :: Example
      .. highlight:: cpp
      ::

         #define LINK_TRANSMITTER_PORT 1

         void opcontrol() {
            pros::Link transmitter(LINK_TRANSMITTER_PORT);
            
            while (true) {
               if (transmitter.connected()) {
                  pros::lcd::set_text(1, "Link connected!");
               }
               pros::delay(20);
            }
         }


**Returns:** If a radio is connected to a port and it's connected to a link.

----

raw_receivable_size()
~~~~~~~~~~~~~~~~~~~~~

Returns the bytes of data number of without protocol available to be read

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t raw_receivable_size()

   .. tab :: Example
      .. highlight:: cpp
      ::

         #define LINK_RECEIVER_PORT 1

         void opcontrol() {
            pros::Link receiver(LINK_RECEIVER_PORT);

            std::uint32_t receivable_size = receiver.raw_receivable_size();
            pros::lcd::set_text(1, "Link receivable_size:"); 
            pros::lcd::set_text(2, std::to_string(receivable_size));
         }

**Returns:** PROS_ERR if port is not a link/radio, else the bytes available to be read by the user.

----

raw_transmittable_size
~~~~~~~~~~~~~~~~~~~~~~

Returns the bytes of data available in transmission buffer.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t raw_transmittable_size( )

   .. tab :: Example
      .. highlight:: cpp
      ::

         #define LINK_TRANSMITTER_PORT 1

         void opcontrol() {
            pros::Link transmitter(LINK_TRANSMITTER_PORT);

            std::uint32_t transmittable_size = transmitter.raw_transmittable_size();
            pros::lcd::set_text(1, "Link transmittable_size:"); 
            pros::lcd::set_text(2, std::to_string(transmittable_size));
         }
        

**Returns:** ``PROS_ERR`` if port is not a link/radio.

----

transmit_raw
~~~~~~~~~

Send raw serial data through vexlink.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.
- ``EBUSY`` - The transmitter buffer is still busy with a previous transmission.
- ``EINVAL`` - The destination given is NULL, or the size given is larger than the FIFO buffer or destination buffer.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t transmit_raw( void* data, std::uint16_t data_size )

   .. tab :: Example
      .. highlight:: cpp
      ::

         #define LINK_TRANSMITTER_PORT 1

         void opcontrol() {
            pros::Link transmitter(LINK_TRANSMITTER_PORT);
            char* data = "Hello!";

            transmitter.transmit_raw((void*)data, sizeof(*data) * sizeof(data));
         }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 data         Buffer with data to send
 data_size    Buffer with data to send
============ =================================================================================================================

**Returns:** PROS_ERR if port is not a link, ``0`` if the link is busy, and ``1`` if it succeeded.

----

receive_raw
~~~~~~~~~

Receive raw serial data through vexlink.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.
- ``EBUSY`` - The transmitter buffer is still busy with a previous transmission.
- ``EINVAL`` - The destination given is NULL, or the size given is larger than the FIFO buffer or destination buffer.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t receive_raw( void* data, std::uint16_t data_size )

   .. tab :: Example
      .. highlight:: cpp
      ::

         #define LINK_RECEIVER_PORT 1

         void opcontrol() {
            char* result;
            char* expected = "Hello!";
            pros::Link receiver(LINK_RECEIVER_PORT);

            receiver.receive_raw((void*)result, sizeof(*expected) * sizeof(expected));
         }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 dest         Destination buffer to read data to
 data_size    Bytes of data to be read to the destination buffer
============ =================================================================================================================

**Returns:** PROS_ERR if port is not a link, ``0`` if the link is busy, and ``1`` if it succeeded.

----

transmit
~~~~~~~~~

Send packeted message through vexlink, with a checksum and start byte.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.
- ``EBUSY`` - The transmitter buffer is still busy with a previous transmission.
- ``EINVAL`` - The data given is NULL

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t transmit( void* data, std::uint16_t data_size )

   .. tab :: Example
      .. highlight:: cpp
      ::

        
         #define LINK_TRANSMITTER_PORT 1

         void opcontrol() {
            pros::Link transmitter(LINK_TRANSMITTER_PORT);
            char* data = "Hello!";

            transmitter.transmit((void*)data, sizeof(*data) * sizeof(data));
         }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 data         Destination buffer to read data to
 data_size    Bytes of data to be read to the destination buffer
============ =================================================================================================================

**Returns:** PROS_ERR if port is not a link, ``0`` if the link is busy, and the successfully transmitted size if it succeeded.

----

receive
~~~~~~~~~

Receive packeted message through vexlink, with a checksum and start byte.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.
- ``EBUSY`` - The transmitter buffer is still busy with a previous transmission.
- ``EINVAL`` - The destination given is NULL, or the size given is larger than the FIFO buffer or destination buffer.
- ``EBADMSG`` - Protocol error related to start byte, data size, or checksum.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t receive( void* dest, std::uint16_t data_size )

   .. tab :: Example
      .. highlight:: cpp
      ::

         #define LINK_RECEIVER_PORT 1

         void opcontrol() {
            char* result;
            char* expected = "Hello!";
            pros::Link receiver(LINK_RECEIVER_PORT);

            receiver.receive((void*)result, sizeof(*expected) * sizeof(expected));
         }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 data         Destination buffer to read data to
 data_size    Bytes of data to be read to the destination buffer
============ =================================================================================================================

**Returns:** PROS_ERR if port is not a link or protocol error, ``0`` if the link is busy, and successfully received size if it succeeded.

----

clear_receive_buf
~~~~~~~~~

Clear the receive buffer of the link, and discarding the data.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The given value is not within the range of V5 ports (1-21).
- ``ENODEV`` - The port cannot be configured as a radio.
- ``ENXIO`` - The sensor is still calibrating, or no link is connected via the radio.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t clear_receive_buf()

   .. tab :: Example
      .. highlight:: cpp
      ::

         #define LINK_TRANSMITTER_PORT 1

         void opcontrol() {
            pros::Link transmitter(LINK_TRANSMITTER_PORT);
            char* data = "Hello!";

            transmitter.transmit((void*)data, sizeof(*data) * sizeof(data));

            transmitter.clear_receive_buf();
         }

**Returns:** PROS_ERR if port is not a link, ``1`` if the operation succeeded.

----

Enumerated Values
=================

::

  typedef enum link_type_e {
    E_LINK_RECIEVER = 0,
    E_LINK_TRANSMITTER,
    E_LINK_RX = E_LINK_RECIEVER,
    E_LINK_TX = E_LINK_TRANSMITTER
  } link_type_e_t;

============================= =============================================================
 Value
============================= =============================================================
 E_LINK_RECIEVER               Indicating that the radio is a reciever.
 E_LINK_RX                     Indicating that the radio is a reciever.
 E_LINK_TRANSMITTER            Indicating that the radio is a transmitter.
 E_LINK_TX                     Indicating that the radio is a transmitter.
============================= =============================================================
