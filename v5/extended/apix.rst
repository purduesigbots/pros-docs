============
Extended API
============

.. note:: Also included in the Extended API is `LVGL <https://littlevgl.com/>`_.

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

Registers a device of the given type in the given port into the registry, if
that type of device is detected to be plugged in to that port.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``     - The given value is not within the range of V5 ports (1-21).
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

Removes the device registed in the given port, if there is one.

This function uses the following values of ``errno`` when an error state is reached:

- ``EINVAL``     - The given value is not within the range of V5 ports (1-21).

::

  int registry_unbind_port ( uint8_t port )

============ ========================================
 Parameters
============ ========================================
 port         the port number to deregister
============ ========================================

**Returns:** 1 upon success, PROS_ERR upon failure

----

sem_binary_create
-----------------

::

  sem_t sem_binary_create ( )

Creates a binary semaphore.

See :doc:`./multitasking` for details.

**Returns:** A newly created semaphore.

----

sem_create
----------

::

  sem_t sem_create ( uint32_t max_count,
                     uint32_t init_count )

Creates a counting semaphore.

See :doc:`../tutorials/topical/multitasking` for details.

============ =======================================================
 Parameters
============ =======================================================
 max_count    The maximum count value that can be reached
 init_count   The initial count value assigned to the new semaphore
============ =======================================================

**Returns:** A newly created semaphore. If an error occurred, NULL will be
returned and ``errno`` can be checked for hints as to why `sem_create`_ failed.

----

sem_get_count
-------------

::

  uint32_t sem_get_count ( sem_t sem )

Returns the current value of the semaphore.

============ =================================
 Parameters
============ =================================
 sem          The semaphore to check
============ =================================

**Returns:** The current value of the semaphore (e.g. the number of resources available)

----

sem_post
--------

::

  bool sem_post ( sem_t sem )

Increments a semaphore's value.

See :doc:`../tutorials/topical/multitasking` for details.

============ =================================
 Parameters
============ =================================
 sem          The semaphore to post.
============ =================================

**Returns:** True if the value was incremented, false otherwise. If false is
returned, then ``errno`` is set with a hint about why the semaphore
couldn't be taken.

----

sem_wait
--------

::

  bool sem_wait ( sem_t sem,
                  uint32_t timeout )

Waits for the semaphore's value to be greater than 0. If the value is already
greater than 0, this function immediately returns.

See :doc:`../tutorials/topical/multitasking` for details.

============= ==========================================================================================================
 Parameters
============= ==========================================================================================================
 sem           The semaphore to wait on.
 timeout       Time to wait before the semaphore's becomes available. A timeout of 0 can be used to poll the semaphore.
               TIMEOUT_MAX can be used to block indefinitely.
============= ==========================================================================================================

**Returns:** True if the semaphore was successfully taken, false otherwise.
If false is returned, then errno is set with a hint about why the
sempahore couldn't be taken.

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

task_abort_delay
----------------

::

  bool task_abort_delay ( task_t task )

Unblocks a task in the Blocked state (e.g. waiting for a delay, on a semaphore, etc.)

See :doc:`./multitasking` for details.

============ ========================================
 Paramaters
============ ========================================
 task         The handle of the task being unblocked
============ ========================================

**Returns:** TO BE DECIDED

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

Typedefs
========

sem_t
-----

A `semaphore <../tutorials/topical/multitasking>`_.

::

  typedef void* sem_t;
