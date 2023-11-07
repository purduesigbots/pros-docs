============
Extended API
============

.. note:: Also included in the Extended API is `LVGL <https://lvgl.io/>`_.

.. note:: PROS supports a simple implementation of the 
  `POSIX clock_gettime() and clock_settime() 
  <https://pubs.opengroup.org/onlinepubs/000095399/functions/clock_getres.html>`_
  functionality. Currently only CLOCK_REALTIME and CLOCK_MONOTONIC are supported
  for these functions.
  
Functions
=========

fdctl
-----

Control settings of the way the file's driver treats the file.

::

  int32_t fdctl ( int file,
                  const uint32_t action,
                  void* const extra_arg )

============ ==========================================================================================================
 Parameters
============ ==========================================================================================================
 file         A valid file descriptor number
 action       An action to perform on the file's driver. See the *CTL_* macros for details on the different actions.
              Note that the action passed in must match the correct driver (e.g. don't perform a SERCTL_* action on
              a microSD card file).
 extra_arg    An argument to pass in based on the action.
============ ==========================================================================================================

----

registry_bind_port
------------------

Registers a device of the given type in the given zero-indexed port into the registry, if
that type of device is detected to be plugged in to that port.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``     - The given value is not within the range of V5 ports (0-20).
- ``EINVAL``     - A different device than specified is plugged in
- ``EADDRINUSE`` - The port is already registered to another device

::

  int registry_bind_port ( uint8_t port,
                           v5_device_e_t device_type )

============ ========================================
 Parameters
============ ========================================
 port         the port number to register the device
 device	   		the type of device to register
============ ========================================

**Returns:** 1 upon success, PROS_ERR upon failure

----

registry_unbind_port
--------------------

Removes the device registed in the given zero-indexed port, if there is one.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``     - The given value is not within the range of V5 ports (0-20).

::

  int registry_unbind_port ( uint8_t port )

============ ========================================
 Parameters
============ ========================================
 port         the port number to deregister
============ ========================================

**Returns:** 1 upon success, PROS_ERR upon failure

----

registry_get_bound_type
--------------------

Returns the type of device registered to the zero-indexed port.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO``     - The given value is not within the range of V5 ports (0-20).

::

  v5_device_e_t registry_get_bound_type ( uint8_t port )

============ ========================================
 Parameters
============ ========================================
 port         The V5 port number from 0-20
============ ========================================

**Returns:** The type of device that is registered into the port (NOT what is plugged in)

----

registry_get_plugged_type
--------------------

Returns the type of the device plugged into the zero-indexed port.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO``     - The given value is not within the range of V5 ports (0-20).

::

  v5_device_e_t registry_get_plugged_type ( uint8_t port )

============ ========================================
 Parameters
============ ========================================
 port         The V5 port number from 0-20
============ ========================================

**Returns:** The type of device that is plugged into the port (NOT what is registered)

----

serctl
------

Control settings of the serial driver.

::

  int32_t serctl ( const uint32_t action,
                   void* const extra_arg )

============ ==========================================================================================================
 Parameters
============ ==========================================================================================================
 action       An action to perform on the serial driver. See the SERCTL_* macros for details on the different actions.
 extra_arg    An argument to pass in based on the action.
============ ==========================================================================================================

----

Macros
======

SERCTL_ACTIVATE
---------------

Action macro to pass into `serctl`_ or `fdctl`_ that activates the stream identifier.

When used with `serctl`_, the extra argument must be the little endian
representation of the stream identifier (e.g. "sout" -> 0x74756f73)

Visit `the serial tutorial <../tutorials/topical/filesystem.html#serial>`_
to learn more.

**Value:** 10

----

SERCTL_DEACTIVATE
-----------------

Action macro to pass into `serctl`_ or `fdctl`_ that deactivates the stream
identifier.

When used with `serctl`_, the extra argument must be the little endian
representation of the stream identifier (e.g. "sout" -> 0x74756f73)

Visit `the serial tutorial <../tutorials/topical/filesystem.html#serial>`_
to learn more.

**Value:** 11

----

SERCTL_BLKWRITE
---------------

Action macro to pass into `fdctl`_ that enables blocking writes for the file.

The extra argument is not used with this action, provide any value (e.g.
NULL) instead.

Visit `the serial tutorial <../tutorials/topical/filesystem.html#serial>`_
to learn more.

**Value:** 12

----

SERCTL_NOBLKWRITE
-----------------

Action macro to pass into `fdctl`_ that makes writes non-blocking for the file.

The extra argument is not used with this action, provide any value (e.g.
NULL) instead.

Visit `the serial tutorial <../tutorials/topical/filesystem.html#serial>`_
to learn more.

**Value:** 13

----

SERCTL_ENABLE_COBS
------------------

Action macro to pass into `serctl`_ that enables advanced stream multiplexing
capabilities.

The extra argument is not used with this action, provide any value (e.g.
NULL) instead.

Visit `the serial tutorial <../tutorials/topical/filesystem.html#serial>`_
to learn more.

**Value:** 14

----

SERCTL_DISABLE_COBS
-------------------

Action macro to pass into `serctl`_ that disables advanced stream multiplexing
capabilities.

The extra argument is not used with this action, provide any value (e.g.
NULL) instead.

Visit `the serial tutorial <../tutorials/topical/filesystem.html#serial>`_
to learn more.

**Value:** 15

----

DEVCTL_FIONREAD
---------------

Action macro to check if there is data available from the Generic Serial Device.

The extra argument is not used with this action, provide any value (e.g.
NULL) instead.

**Value:** 16

----

DEVCTL_SET_BAUDRATE
-------------------

Action macro to set the Generic Serial Device's baudrate.

The extra argument is the baudrate.

**Value:** 17

----

Enumerated Values
=================

v5_device_e_t
-------------

Denotes the kind of device that is being communicated with.

::

  typedef enum v5_device_e {
	  E_DEVICE_NONE = 0,
	  E_DEVICE_MOTOR = 2,
	  E_DEVICE_RADIO = 8,
	  E_DEVICE_VISION = 11,
  	E_DEVICE_ADI = 12,
  	E_DEVICE_GENERIC = 129,
  	E_DEVICE_UNDEFINED = 255
  } v5_device_e_t;
