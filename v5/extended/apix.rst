============
Extended API
============

Functions
=========

mutex_get_owner
---------------

::

  task_t mutex_get_owner ( mutex_t mutex )

Returns a handle to the owner of the mutex.

See :doc:`./multitasking` for details.

+------------+---------------------+
| Parameters |                     |
+============+=====================+
| mutex      | The mutex to unlock |
+------------+---------------------+

**Returns:** A handle to the current task that owns the mutex, or NULL if the mutex isn't owned.

mutex_recursive_create
----------------------

::

  mutex_t mutex_recursive_create ( )

Creates a recursive mutex which can be locked recursively by the owner.

See :doc:`./multitasking` for details.

**Returns:** A newly created recursive mutex.

mutex_recursive_give
--------------------

::

  bool mutex_recursive_give( mutex_t mutex )

Gives a recursive mutex.

See :doc:`./multitasking` for details.

+------------+---------------------+
| Parameters |                     |
+============+=====================+
| mutex      | The mutex to unlock |
+------------+---------------------+

mutex_recursive_take
--------------------

::

  bool mutex_recursive_take ( mutex_t mutex,
                                uint32_t wait_time )

Takes a recursive mutex.

See :doc:`./multitasking` for details.

============ ==============================================================================================
 Parameters
============ ==============================================================================================
 mutex        The mutex to take.
 timeout      Time to wait before the mutex becomes available.

              A timeout of 0 can be used to poll the mutex. TIMEOUT_MAX can be used to block indefinitely.
============ ==============================================================================================

**Returns:** 1 if the mutex was obtained, 0 otherwise

queue_append
------------

::

  bool queue_append ( queue_t queue,
                        const void* item,
                        uint32_t timeout )

Posts an item to the end of a queue. The item is queued by copy, not by reference.

See :doc:`./multitasking` for details.

============ =======================================================================================
 Parameters
============ =======================================================================================
 queue        The queue handle
 item         A pointer to the item that will be placed on the queue.
 timeout      Time to wait for space to become available. A timeout of 0 can be used to attempt to
              post without blocking. TIMEOUT_MAX can be used to block indefinitely.
============ =======================================================================================

**Returns:** ``true`` if the item was preprended, ``false`` otherwise.

queue_create
------------

::

  queue_t queue_create ( uint32_t length,
                         uint32_t item_size )

Creates a queue.

See :doc:`./multitasking` for details.

============ ==========================================================
 Parameters
============ ==========================================================
 length       The maximum number of items that the queue can contain.
 item_size    The number of bytes each item in the queue will require.
============ ==========================================================

**Returns:** A handle to a newly created queue, or NULL if the queue cannot be created.

queue_delete
------------

::

  void queue_delete ( queue_t queue )

Deletes a queue.

See :doc:`./multitasking` for details.

============ ============================
 Parameters
============ ============================
 queue        The queue handle to delete
============ ============================

queue_get_available
-------------------

::

  uint32_t queue_get_available ( const queue_t queue )

Returns the number of spaces left in a queue.

See :doc:`./multitasking` for details.

============ ==================
 Parameters
============ ==================
 queue        The queue handle
============ ==================

**Returns:** the number of spaces left in a queue.

queue_get_waiting
-----------------

::

  uint32_t queue_get_waiting ( const queue_t queue )

Returns the number of messages stored in a queue.

See :doc:`./multitasking` for details.

============ ==================
 Parameters
============ ==================
 queue        The queue handle
============ ==================

**Returns:** The number of messages available in the queue.

queue_peek
----------

::

  bool queue_peek ( queue_t queue,
                      void* buffer,
                      uint32_t timeout )

Receive an item from a queue without removing the item from the queue.

See :doc:`./multitasking` for details.

============ =======================================================================================
 Parameters
============ =======================================================================================
 queue        The queue handle
 buffer       Pointer to a buffer to which the received item will be copied
 timeout      Time to wait for space to become available. A timeout of 0 can be used to attempt to
              post without blocking. TIMEOUT_MAX can be used to block indefinitely.
============ =======================================================================================

**Returns:** ``true`` if an item was copied into the buffer, ``false`` otherwise.

queue_prepend
-------------

::

  bool queue_prepend ( queue_t queue,
                         const void* item,
                         uint32_t timeout )

Posts an item to the front of a queue. The item is queued by copy, not by reference.

See :doc:`./multitasking` for details.

============ =======================================================================================
 Parameters
============ =======================================================================================
 queue        The queue handle
 item         A pointer to the item that will be placed on the queue.
 timeout      Time to wait for space to become available. A timeout of 0 can be used to attempt to
              post without blocking. TIMEOUT_MAX can be used to block indefinitely.
============ =======================================================================================

**Returns:** ``true`` if the item was preprended, ``false`` otherwise.

queue_recv
----------

::

  bool queue_recv ( queue_t queue,
                      void* buffer,
                      uint32_t timeout )

Receive an item from the queue.

See :doc:`./multitasking` for details.

============ =======================================================================================
 Parameters
============ =======================================================================================
 queue        The queue handle
 buffer       Pointer to a buffer to which the received item will be copied
 timeout      Time to wait for space to become available. A timeout of 0 can be used to attempt to
              post without blocking. TIMEOUT_MAX can be used to block indefinitely.
============ =======================================================================================

**Returns:** ``true`` if an item was copied into the buffer, ``false`` otherwise.

queue_reset
-----------

::

  void queue_reset ( queue_t queue )

Resets a queue to an empty state.

See :doc:`./multitasking` for details.

============ ============================
 Parameters
============ ============================
 queue        The queue handle to reset
============ ============================

sem_binary_create
-----------------

::

  sem_t sem_binary_create ( )

Creates a binary semaphore.

See :doc:`./multitasking` for details.

**Returns:** A newly created semaphore.

sem_create
----------

::

  sem_t sem_create ( uint32_t max_count,
                     uint32_t init_count )

Creates a counting semaphore.

See :doc:`../tutorials/topical/multitasking` for details.

+------------+-------------------------------------------------------+
| Parameters |                                                       |
+============+=======================================================+
| max_count  | The maximum count value that can be reached           |
+------------+-------------------------------------------------------+
| init_count | The initial count value assigned to the new semaphore |
+------------+-------------------------------------------------------+

**Returns:** A newly created semaphore. If an error occurred, NULL will be
returned and ``errno`` can be checked for hints as to why `sem_create`_ failed.

sem_get_count
-------------

::

  uint32_t sem_get_count(sem_t sem);

Returns the current value of the semaphore.

+------------+---------------------------------+
| Parameters |                                 |
+============+=================================+
| sem        | The semaphore to check          |
+------------+---------------------------------+

**Returns:** The current value of the semaphore (e.g. the number of resources available)

sem_post
--------

::

  bool sem_post ( sem_t sem )

Increments a semaphore's value.

See :doc:`../tutorials/topical/multitasking` for details.

+------------+---------------------------------+
| Parameters |                                 |
+============+=================================+
| sem        | The semaphore to post.          |
+------------+---------------------------------+

**Returns:** True if the value was incremented, false otherwise. If false is
returned, then ``errno`` is set with a hint about why the semaphore
couldn't be taken.

sem_wait
--------

::

  bool sem_wait ( sem_t sem,
                    uint32_t timeout )

Waits for the semaphore's value to be greater than 0. If the value is already
greater than 0, this function immediately returns.

See :doc:`../tutorials/topical/multitasking` for details.

============= =========================================================================================================================================================
 Parameters
============= =========================================================================================================================================================
 sem           The semaphore to wait on.
 timeout       Time to wait before the semaphore's becomes available. A timeout of 0 can be used to poll the sempahore. TIMEOUT_MAX can be used to block indefinitely.
============= =========================================================================================================================================================

**Returns:** True if the semaphore was successfully taken, false otherwise.
If false is returned, then errno is set with a hint about why the
sempahore couldn't be taken.

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

Enumerated Values
=================

Typedefs
========

queue_t
-------

::

  typedef void* queue_t;

sem_t
-----

::

  typedef void* sem_t;

A `semaphore <../tutorials/topical/multitasking>`_.
