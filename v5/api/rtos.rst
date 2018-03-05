===================
RTOS Facilities API
===================

Functions
=========

delay
----------

::

  void delay ( const unsigned long milliseconds )

Delay a task for a given number of milliseconds.

This is not the best method to have a task execute code at predefined
intervals, as the delay time is measured from when the delay is requested.
To delay cyclically, use `task_delay_until() <task_delay_until>`_.

+--------------+-------------------------------------------------------------------+
| Parameters   |                                                                   |
+==============+===================================================================+
| milliseconds | The number of milliseconds to wait (1000 milliseconds per second) |
+--------------+-------------------------------------------------------------------+

millis
------

::

  uint32_t millis ( void )

**Returns:** Returns the number of milliseconds since PROS initialized.

mutex_create
------------

::

  mutex_t mutex_create ( void )

Creates a mutex.

See :doc:`../tutorials/multitasking` for details.

**Returns:**  A handle to a newly created mutex. If an error occurred, NULL will be
returned and ``errno`` can be checked for hints as to why mutex_create failed.

mutex_give
----------

::

  bool mutex_give ( mutex_t mutex )

Unlocks a mutex.

See :doc:`../tutorials/multitasking` for details.

+------------+---------------------+
| Parameters |                     |
+============+=====================+
| mutex      | The mutex to unlock |
+------------+---------------------+

**Returns:** True if the mutex was successfully returned, false otherwise. If false
is returned, then ``errno`` is set with a hint about why the mutex couldn't
be returned.

mutex_take
----------

Takes and locks a mutex, waiting for up to a certain number of milliseconds
before timing out.

See :doc:`../tutorials/multitasking` for details.

::

  bool mutex_take ( mutex_t mutex,
                      uint32_t timeout )

============ ==============================================================================================
 Parameters
============ ==============================================================================================
 mutex        The mutex to take.
 timeout      Time to wait before the mutex becomes available.

              A timeout of 0 can be used to poll the mutex. TIMEOUT_MAX can be used to block indefinitely.
============ ==============================================================================================

**Returns:** True if the mutex was successfully taken, false otherwise. If false
is returned, then ``errno`` is set with a hint about why the the mutex
couldn't be taken.

task_create
-----------

::

    task_t task_create ( task_fn_t function,
                         void* parameters,
                         uint8_t prio,
                         uint16_t stack_depth,
                         const char* name )

Create a new task and add it to the list of tasks that are ready to run.

+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Parameters      |                                                                                                                                                                                                               |
+=================+===============================================================================================================================================================================================================+
| ``function``    | Pointer to the task entry function                                                                                                                                                                            |
+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``parameters``  | Pointer to memory that will be used as a parameter for the task being created. This memory should not typically come from stack, but rather from dynamically (i.e., malloc'd) or statically allocated memory. |
+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``prio``        | The priority at which the task should run. TASK_PRIO_DEFAULT plus/minus 1 or 2 is typically used.                                                                                                             |
+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``stack_depth`` | The number of words (i.e. 4 * stack_depth) available on the task's stack. TASK_STACK_DEPTH_DEFAULT is typically sufficient.                                                                                   |
+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ``name``        | A descriptive name for the task.  This is mainly used to facilitate debugging. The name may be up to 32 characters long.                                                                                      |
+-----------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

**Returns:** Will return a handle by which the newly created task can be referenced.
If an error occurred, NULL will be returned and ``errno`` can be checked for hints
as to why `task_create`_ failed.

task_delay
----------

::

  void task_delay ( const unsigned long milliseconds )

Delay a task for a given number of milliseconds.

This is not the best method to have a task execute code at predefined
intervals, as the delay time is measured from when the delay is requested.
To delay cyclically, use `task_delay_until() <task_delay_until>`_.

+--------------+-------------------------------------------------------------------+
| Parameters   |                                                                   |
+==============+===================================================================+
| milliseconds | The number of milliseconds to wait (1000 milliseconds per second) |
+--------------+-------------------------------------------------------------------+

task_delay_until
----------------

::

  void task_delay_until ( unsigned long* const prev_time,
                          const unsigned long delta )

Delay a task until a specified time.  This function can be used by periodic
tasks to ensure a constant execution frequency.

The task will be woken up at the time ``*prev_time + delta``, and ``*prev_time`` will
be updated to reflect the time at which the task will unblock.

+------------+-------------------------------------------------------------------+
| Parameters |                                                                   |
+============+===================================================================+
| prev_time  | A pointer to the location storing the setpoint time               |
+------------+-------------------------------------------------------------------+
| delta      | The number of milliseconds to wait (1000 milliseconds per second) |
+------------+-------------------------------------------------------------------+

task_delete
-----------

::

  void task_delete ( task_t task )

Remove a task from the RTOS real time kernel's management.  The task being
deleted will be removed from all ready, blocked, suspended and event lists.

Memory dynamically allocated by the task is not automatically freed, and
should be freed before the task is deleted.

+------------+------------------------------------------------------------------------------------------------+
| Parameters |                                                                                                |
+============+================================================================================================+
| task       | The handle of the task to be deleted.  Passing NULL will cause the calling task to be deleted. |
+------------+------------------------------------------------------------------------------------------------+

task_get_by_name
----------------

::

  task_t task_get_by_name ( char* name )

Obtains a task handle from the specified name.

The operation takes a relatively long time and should be used sparingly.

+------------+----------------------------------+
| Parameters |                                  |
+============+==================================+
| name       | The name to query                |
+------------+----------------------------------+

**Returns:** A task handle with a matching name, or NULL if none were found.

task_get_count
--------------

::

  uint32_t task_get_count ( void )

Returns the number of tasks the kernel is currently managing, including all
ready, blocked, or suspended tasks. A task that has been deleted, but not yet
reaped by the idle task will also be included in the count. Tasks recently
created may take one context switch to be counted.

**Returns:** The number of tasks that are currently being managed by the kernel

task_get_name
-------------

::

  char const* task_get_name ( task_t task )

Obtains the name of the specified task.

+------------+----------------------------------+
| Parameters |                                  |
+============+==================================+
| task       | The handle of the task to check  |
+------------+----------------------------------+

**Returns:** A pointer to the name of the task

task_get_priority
-----------------

::

  uint32_t task_get_priority ( task_t task )

Obtains the priority of the specified task.

+------------+----------------------------------+
| Parameters |                                  |
+============+==================================+
| task       | The handle of the task to check  |
+------------+----------------------------------+

**Returns:** The priority of the task.

task_get_state
--------------

::

  task_state_e_t task_get_state ( task_t task )

Returns the state of the specified task.

+------------+----------------------------------+
| Parameters |                                  |
+============+==================================+
| task       | The handle of the task to check  |
+------------+----------------------------------+

**Returns:** The state of the task. (see `task_state_e_t`_).

task_notify
-----------

::

  uint32_t task_notify ( task_t task )

Sends a simple notification to task and increments the notification counter.

See :doc:`../tutorials/notifications` for details.

+------------+----------------------------------+
| Parameters |                                  |
+============+==================================+
| task       | The handle of the task to notify |
+------------+----------------------------------+

**Returns:** Always true.

task_notify_clear
-----------------

::

  bool task_notify_clear ( task_t task )

Clears the notification for a task.

See :doc:`../tutorials/notifications` for details.

+------------+----------------------------------+
| Parameters |                                  |
+============+==================================+
| task       | The handle of the task to clear  |
+------------+----------------------------------+

**Returns:** False if there was not a notification waiting, true if there was

task_notify_ext
---------------

::

  uint32_t task_notify_ext ( task_t task,
                             uint32_t value,
                             notify_action_e_t action,
                             uint32_t* prev_value )

Sends a notification to a task, optionally performing some action. Will also
retrieve the value of the notification in the target task before modifying
the notification value.

See :doc:`../tutorials/notifications` for details.

+------------+--------------------------------------------------------------------------------------+
| Parameters |                                                                                      |
+============+======================================================================================+
| task       | The handle of the task to notify                                                     |
+------------+--------------------------------------------------------------------------------------+
| value      | The value used in performing the action                                              |
+------------+--------------------------------------------------------------------------------------+
| action     | An action to optionally perform on the task's notification                           |
+------------+--------------------------------------------------------------------------------------+
| prev_value | A pointer to store the previous value of the target task's notification, may be NULL |
+------------+--------------------------------------------------------------------------------------+

**Returns:** Dependent on the notification action. For `NOTIFY_ACTION_NO_OWRITE <notify_action_e_t>`_:
return 0 if the value could be written without needing to overwrite, 1 otherwise.
For all other `NOTIFY_ACTION <notify_action_e_t>`_ values: always return 0

task_notify_take
----------------

::

  uint32_t task_notify_take ( bool clear_on_exit,
                              uint32_t timeout )

Wait for a notification to be nonzero.

See :doc:`../tutorials/notifications` for details.

+---------------+----------------------------------------------------------------------------------------------------------------+
| Parameters    |                                                                                                                |
+===============+================================================================================================================+
| clear_on_exit | If true (1), then the notification value is cleared. If false (0), then the notification value is decremented. |
+---------------+----------------------------------------------------------------------------------------------------------------+
| timeout       | Specifies the amount of time to be spent waiting for a notification to occur.                                  |
+---------------+----------------------------------------------------------------------------------------------------------------+

**Returns:** TO BE ADDED

task_resume
-----------

::

  void task_resume ( task_t task )

Resumes the specified task, making it eligible to be scheduled.

+------------+----------------------------------+
| Parameters |                                  |
+============+==================================+
| task       | The handle of the task to resume |
+------------+----------------------------------+

task_set_priority
-----------------

::

  void task_set_priority ( task_t task,
                           uint32_t prio )

Sets the priority of the specified task.

If the specified task's state is available to be scheduled (e.g. not blocked)
and new priority is higher than the currently running task, a context switch
may occur.

+------------+-------------------------------+
| Parameters |                               |
+============+===============================+
| task       | The handle of the task to set |
+------------+-------------------------------+
| prio       | The new priority of the task  |
+------------+-------------------------------+

task_suspend
------------

::

  void task_suspend ( task_t task )

Suspends the current task, making it ineligible to be scheduled.

+------------+------------------------------------+
| Parameters |                                    |
+============+====================================+
| task       | The handle of the task to suspend  |
+------------+------------------------------------+

Macros
======

CURRENT_TASK
------------

Refers to the current task. To be used for checking attributes of the task in which
this macro is called.

**Value:** ``((task_t)NULL)``

TASK_NAME_MAX_LEN
-----------------

The maximum number of characters allowed in a task's name.

**Value:** ``32``

TASK_PRIORITY_DEFAULT
---------------------

The default task priority, which should be used for most tasks.

Default tasks such as autonomous() inherit this priority.

**Value:** ``8``

TASK_PRIORITY_MAX
-----------------

The highest priority that can be assigned to a task. Beware of deadlock.

**Value:** ``16``

TASK_PRIORITY_MIN
-----------------

The lowest priority that can be assigned to a task.

This may cause severe performance problems and is generally not
recommended.

**Value:** ``1``

TASK_STACK_DEPTH_DEFAULT
------------------------

The recommended stack size for a new task. This stack size is used for
default tasks such as autonomous(). This equates to 32,768 bytes, or 128 times
the default stack size for a task in PROS 2.

**Value:** ``0x2000``

TASK_STACK_DEPTH_MIN
--------------------

The minimal stack size for a task. This equates to 2048 bytes, or 8 times the
default stack size for a task in PROS 2.

**Value:** ``0x200``

TIMEOUT_MAX
-----------

The maximum timeout value that can be given to, for instance, a `mutex grab <mutex_take>`_.

**Value:** ``((uint32_t)0xffffffffUL)``

Enumerated Values
=================

task_state_e_t
--------------

::

   typedef enum {
     E_TASK_STATE_RUNNING = 0,
     E_TASK_STATE_READY,
     E_TASK_STATE_BLOCKED,
     E_TASK_STATE_SUSPENDED,
     E_TASK_STATE_DELETED,
     E_TASK_STATE_INVALID
   } task_state_e_t;

======================== ==========================================================================
 Value
======================== ==========================================================================
 E_TASK_STATE_RUNNING     The task is actively executing.
 E_TASK_STATE_READY       The task exists and is available to run, but is not currently running.
 E_TASK_STATE_BLOCKED     The task is delayed or blocked by a mutex, semaphore, or I/O operation.
 E_TASK_STATE_SUSPENDED   The task is supended using `task_suspend`_.
 E_TASK_STATE_DELETED     The task has been deleted using `task_delete`_.
 E_TASK_STATE_INVALID     The task handle does not point to a current or past task.
======================== ==========================================================================

task_notify_t
-------------

::

  typedef enum {
    E_NOTIFY_ACTION_NONE,
    E_NOTIFY_ACTION_BITS,
    E_NOTIFY_ACTION_INCR,
    E_NOTIFY_ACTION_OWRITE,
    E_NOTIFY_ACTION_NO_OWRITE
  } notify_action_e_t;

=========================== =============
 Value
=========================== =============
 E_NOTIFY_ACTION_NONE        TO BE ADDED
 E_NOTIFY_ACTION_BITS
 E_NOTIFY_ACTION_INCR
 E_NOTIFY_ACTION_OWRITE
 E_NOTIFY_ACTION_NO_OWRITE
=========================== =============


Typedefs
========

task_t
------

::

  typedef void* task_t;

Points to a task handle. Used for referencing a task.

task_fn_t
---------

::

  typedef void (*task_fn_t)(void*);

Points to the function associated with a task.

mutex_t
-------

::

  typedef void* mutex_t;

A `mutex <../tutorials/multitasking>`_.
