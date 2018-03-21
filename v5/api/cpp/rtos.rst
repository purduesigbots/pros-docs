=======================
RTOS Facilities C++ API
=======================

pros
====

millis
------

::

  uint32_t pros::millis ( void )

**Returns:** Returns the number of milliseconds since PROS initialized.

pros::Task
==========

Constructor(s)
--------------

::

  pros::Task::Task ( task_fn_t function,
                     void* parameters = NULL,
                     uint32_t prio = TASK_PRIORITY_DEFAULT,
                     uint16_t stack_depth = TASK_STACK_DEPTH_DEFAULT,
                     const char* name = "")

Create a new task and add it to the list of tasks that are ready to run.

================= ===============================================================================================================================================================================================================
 Parameters
================= ===============================================================================================================================================================================================================
 function          Pointer to the task entry function
 parameters        Pointer to memory that will be used as a parameter for the task being created. This memory should not typically come from stack, but rather from dynamically (i.e., malloc'd) or statically allocated memory.
 prio              The priority at which the task should run. TASK_PRIO_DEFAULT plus/minus 1 or 2 is typically used.
 stack_depth       The number of words (i.e. 4 * stack_depth) available on the task's stack. TASK_STACK_DEPTH_DEFAULT is typically sufficient.
 name               A descriptive name for the task.  This is mainly used to facilitate debugging. The name may be up to 32 characters long.
================= ===============================================================================================================================================================================================================

::

  pros::Task::Task ( task_t task )

Creates a Task object from a task already created with the C API.

=============== ===================================================================
 Parameters
=============== ===================================================================
 task            The task for which to create an object
=============== ===================================================================

Methods
-------

Delay a task for a given number of milliseconds.

This is not the best method to have a task execute code at predefined
intervals, as the delay time is measured from when the delay is requested.
To delay cyclically, use `delay_until`_.

delay
~~~~~

::

  static void pros::Task::delay ( const uint32_t milliseconds )

=============== ===================================================================
 Parameters
=============== ===================================================================
 milliseconds    The number of milliseconds to wait (1000 milliseconds per second)
=============== ===================================================================

delay_until
~~~~~~~~~~~

Delay a task until a specified time.  This function can be used by periodic
tasks to ensure a constant execution frequency.

The task will be woken up at the time ``*prev_time + delta``, and ``*prev_time`` will
be updated to reflect the time at which the task will unblock.

::

  void pros::Task::delay_until ( uint32_t* const prev_time,
                                 const uint32_t delta )

============ ===================================================================
 Parameters
============ ===================================================================
 prev_time    A pointer to the location storing the setpoint time
 delta        The number of milliseconds to wait (1000 milliseconds per second)
============ ===================================================================

get_count
~~~~~~~~~

Returns the number of tasks the kernel is currently managing, including all
ready, blocked, or suspended tasks. A task that has been deleted, but not yet
reaped by the idle task will also be included in the count. Tasks recently
created may take one context switch to be counted.

::

  uint32_t pros::task::get_count ( )

**Returns:** The number of tasks that are currently being managed by the kernel

get_name
~~~~~~~~

Obtains the name of the specified task.

::

  char const* pros::Task::get_name ( )

**Returns:** A pointer to the name of the task

get_priority
~~~~~~~~~~~~

Obtains the priority of the specified task.

::

  uint32_t pros::Task::get_priority ( )

**Returns:** The priority of the task.

get_state
~~~~~~~~~

Returns the state of the specified task.

::

  task_state_e_t pros::Task::get_state ( )

**Returns:** The state of the task. (see `task_state_e_t <task_state_e_t_>`_).

notify
~~~~~~

Sends a simple notification to task and increments the notification counter.

See :doc:`../../tutorials/notifications` for details.

::

  uint32_t pros::Task::notify ( )

**Returns:** Always true.

notify_clear
~~~~~~~~~~~~

Clears the notification for a task.

See :doc:`../../tutorials/notifications` for details.

::

  bool pros::Task::notify_clear ( )

**Returns:** False if there was not a notification waiting, true if there was

notify_ext
~~~~~~~~~~

Sends a notification to a task, optionally performing some action. Will also
retrieve the value of the notification in the target task before modifying
the notification value.

See :doc:`../../tutorials/notifications` for details.

::

  uint32_t pros::Task::notify_ext ( uint32_t value,
                                    notify_action_e_t action,
                                    uint32_t* prev_value )

============ ======================================================================================
 Parameters
============ ======================================================================================
 value        The value used in performing the action
 action       An action to optionally perform on the task's notification
 prev_value   A pointer to store the previous value of the target task's notification, may be NULL
============ ======================================================================================

**Returns:** Dependent on the notification action. For `NOTIFY_ACTION_NO_OWRITE <notify_action_e_t_>`_:
return 0 if the value could be written without needing to overwrite, 1 otherwise.
For all other `NOTIFY_ACTION <notify_action_e_t_>`_ values: always return 0

notify_take
~~~~~~~~~~~

Wait for a notification to be nonzero.

See :doc:`../../tutorials/notifications` for details.

::

  uint32_t pros::Task::notify_take ( bool clear_on_exit,
                              uint32_t timeout )

=============== ================================================================================================================
 Parameters
=============== ================================================================================================================
 clear_on_exit   If true (1), then the notification value is cleared. If false (0), then the notification value is decremented.
 timeout         Specifies the amount of time to be spent waiting for a notification to occur.
=============== ================================================================================================================

**Returns:** The value of the task's notification value before it is decremented or cleared.

resume
~~~~~~

Resumes the specified task, making it eligible to be scheduled.

::

  void pros::Task::resume ( )

set_priority
~~~~~~~~~~~~

Sets the priority of the specified task.

If the specified task's state is available to be scheduled (e.g. not blocked)
and new priority is higher than the currently running task, a context switch
may occur.

::

  void pros::Task::set_priority ( uint32_t prio )

============ ===============================
 Parameters
============ ===============================
 prio         The new priority of the task
============ ===============================

suspend
~~~~~~~

Suspends the current task, making it ineligible to be scheduled.

::

  void pros::Task::suspend ( )

pros::Mutex
===========

Constructor(s)
--------------

::

  pros::Mutex::Mutex ( )

Creates a mutex.

See :doc:`../../tutorials/multitasking` for details.

Methods
-------

give
~~~~

Unlocks a mutex.

See :doc:`../../tutorials/multitasking` for details.

::

  bool pros::Mutex::give ( )

**Returns:** True if the mutex was successfully returned, false otherwise. If false
is returned, then ``errno`` is set with a hint about why the mutex couldn't
be returned.

take
~~~~

Takes and locks a mutex, waiting for up to a certain number of milliseconds
before timing out.

See :doc:`../../tutorials/multitasking` for details.

::

  bool pros::Mutex::take ( uint32_t timeout )

============ ==============================================================================================
 Parameters
============ ==============================================================================================
 timeout      Time to wait before the mutex becomes available.
              A timeout of 0 can be used to poll the mutex. TIMEOUT_MAX can be used to block indefinitely.
============ ==============================================================================================

**Returns:** True if the mutex was successfully taken, false otherwise. If false
is returned, then ``errno`` is set with a hint about why the the mutex
couldn't be taken.

.. _notify_action_e_t: ../c/rtos.html#notify-action-e-t
.. _task_state_e_t: ../c/rtos.html#task-state-e-t
