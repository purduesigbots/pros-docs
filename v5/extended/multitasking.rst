===========================
Multitasking (Extended API)
===========================

Queues
======

mutex_get_owner
---------------

::

  task_t mutex_get_owner ( mutex_t mutex )

Returns a handle to the owner of the mutex.

See :doc:`./multitasking` for details.

============= ======================
 Parameters
============= ======================
 mutex         The mutex to check
============= ======================

**Returns:** A handle to the current task that owns the mutex, or NULL if the mutex isn't owned.

----

mutex_recursive_create
----------------------

::

  mutex_t mutex_recursive_create ( )

Creates a recursive mutex which can be locked recursively by the owner.

See :doc:`./multitasking` for details.

**Returns:** A newly created recursive mutex.

----

mutex_recursive_give
--------------------

::

  bool mutex_recursive_give ( mutex_t mutex )

Gives a recursive mutex.

See :doc:`./multitasking` for details.

============= ======================
 Parameters
============= ======================
 mutex        The mutex to unlock
============= ======================

----

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

----

Recursive Mutexes
=================

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

----

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

----

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

----

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

----

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

----

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

----

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

----

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
 timeout      The maximum amount of time the task should block waiting for an
              item to receive should the queue be empty at the time of the call. 
              queue_recv() will return immediately if timeout is zero and 
              the queue is empty.
============ =======================================================================================

**Returns:** ``true`` if an item was copied into the buffer, ``false`` otherwise.

----

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

----

Typedefs
========

queue_t
-------

::

  typedef void* queue_t;