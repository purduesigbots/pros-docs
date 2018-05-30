.. highlight:: c
   :linenothreshold: 5

=====================
RTOS Facilities C API
=====================

.. note:: Additional example code for this module can be found in
          `its Tutorial <../../tutorials/topical/multitasking.html>`_.

.. contents:: :local:

Functions
=========

delay
-----

Delay a task for a given number of milliseconds.

This is not the best method to have a task execute code at predefined
intervals, as the delay time is measured from when the delay is requested.
To delay cyclically, use `task_delay_until`_.

Analogous to `pros::delay <../cpp/rtos.html#delay>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         void delay ( const uint32_t milliseconds )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            // Do opcontrol things
            delay(2);
          }
        }

=============== ===================================================================
 Parameters
=============== ===================================================================
 milliseconds    The number of milliseconds to wait (1000 milliseconds per second)
=============== ===================================================================

----

millis
------

Analogous to `pros::millis <../cpp/rtos.html#millis>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         uint32_t millis ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
          while (true) {
            // Do opcontrol things
            task_delay_until(&now, 2);
          }
        }

**Returns:** Returns the number of milliseconds since PROS initialized.

----

mutex_create
------------

Creates a `mutex_t`_.

See :doc:`../../tutorials/topical/multitasking` for details.

Analogous to `pros::Mutex::Mutex <../cpp/rtos.html#mutex>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         mutex_t mutex_create ( )

   .. tab :: Example
      .. highlight:: c
      ::

        mutex_t mutex = mutex_create();

        // Acquire the mutex; other tasks using this command will wait until the mutex is released
        // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
        // If the timeout expires, "false" will be returned, otherwise "true"
        mutex_take(mutex, MAX_DELAY);
        // do some work
        // Release the mutex for other tasks
        mutex_give(mutex);

**Returns:**  A handle to a newly created `mutex_t`_. If an error occurred, NULL will be
returned and ``errno`` can be checked for hints as to why `mutex_create`_ failed.

----

mutex_give
----------

Unlocks a `mutex_t`_.

See :doc:`../../tutorials/topical/multitasking` for details.

Analogous to `pros::Mutex::give <../cpp/rtos.html#give>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         bool mutex_give ( mutex_t mutex )

   .. tab :: Example
      .. highlight:: c
      ::

        mutex_t mutex = mutex_create();

        // Acquire the mutex; other tasks using this command will wait until the mutex is released
        // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
        // If the timeout expires, "false" will be returned, otherwise "true"
        mutex_take(mutex, timeout);
        // do some work
        // Release the mutex for other tasks
        mutex_give(mutex);

============ =====================
 Parameters
============ =====================
 mutex        The mutex to unlock
============ =====================

**Returns:** True if the mutex was successfully returned, false otherwise. If false
is returned, then ``errno`` is set with a hint about why the mutex couldn't
be returned.

----

mutex_take
----------

Takes and locks a `mutex_t`_, waiting for up to a certain number of milliseconds
before timing out.

See :doc:`../../tutorials/topical/multitasking` for details.

Analogous to `pros::Mutex::take <../cpp/rtos.html#take>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        bool mutex_take ( mutex_t mutex,
                          uint32_t timeout )

   .. tab :: Example
      .. highlight:: c
      ::

        mutex_t mutex = mutex_create();

        // Acquire the mutex; other tasks using this command will wait until the mutex is released
        // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
        // If the timeout expires, "false" will be returned, otherwise "true"
        mutex_take(mutex, timeout);
        // do some work
        // Release the mutex for other tasks
        mutex_give(mutex);

============ ==============================================================================================
 Parameters
============ ==============================================================================================
 mutex        The mutex to take.
 timeout      Time to wait before the mutex becomes available.

              A timeout of 0 can be used to poll the `mutex_t`_. TIMEOUT_MAX can be used to block indefinitely.
============ ==============================================================================================

**Returns:** True if the mutex was successfully taken, false otherwise. If false
is returned, then ``errno`` is set with a hint about why the the mutex
couldn't be taken.

----

task_create
-----------

Create a new task and add it to the list of tasks that are ready to run.

Analogous to `pros::Task::Task <../cpp/rtos.html#task>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        task_t task_create ( task_fn_t function,
                            void* parameters,
                             uint8_t prio,
                             uint16_t stack_depth,
                             const char* name )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* param) {
          printf("Hello %s\n", (char*)param);
          // ...
        }
        void initialize() {
          task_t my_task = task_create(my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                                      TASK_STACK_DEPTH_DEFAULT, "My Task");
        }

================= ===============================================================================================================================================================================================================
 Parameters
================= ===============================================================================================================================================================================================================
 function          Pointer to the task entry function
 parameters        Pointer to memory that will be used as a parameter for the task being created. This memory should not typically come from stack, but rather from dynamically (i.e., malloc'd) or statically allocated memory.
 prio              The priority at which the task should run. TASK_PRIO_DEFAULT plus/minus 1 or 2 is typically used.
 stack_depth       The number of words (i.e. 4 * stack_depth) available on the task's stack. TASK_STACK_DEPTH_DEFAULT is typically sufficient.
 name               A descriptive name for the task.  This is mainly used to facilitate debugging. The name may be up to 32 characters long.
================= ===============================================================================================================================================================================================================

**Returns:** Will return a handle by which the newly created task can be referenced.
If an error occurred, NULL will be returned and ``errno`` can be checked for hints
as to why `task_create`_ failed.

----

task_delay
----------

Delay a task for a given number of milliseconds.

This is not the best method to have a task execute code at predefined
intervals, as the delay time is measured from when the delay is requested.
To delay cyclically, use `task_delay_until`_.

Analogous to `pros::Task::delay <../cpp/rtos.html#delay>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         void task_delay ( const uint32_t milliseconds )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          while (true) {
            // Do opcontrol things
            task_delay(2);
          }
        }

============== ===================================================================
 Parameters
============== ===================================================================
 milliseconds  The number of milliseconds to wait (1000 milliseconds per second)
============== ===================================================================

----

task_delay_until
----------------

Delay a task until a specified time.  This function can be used by periodic
tasks to ensure a constant execution frequency.

The task will be woken up at the time ``*prev_time + delta``, and ``*prev_time`` will
be updated to reflect the time at which the task will unblock.

Analogous to `pros::Task::delay_until <../cpp/rtos.html#delay_until>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void task_delay_until ( uint32_t* const prev_time,
                                const uint32_t delta )

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
          uint32_t now = millis();
          while (true) {
            // Do opcontrol things
            task_delay_until(&now, 2);
          }
        }

============ ===================================================================
 Parameters
============ ===================================================================
 prev_time    A pointer to the location storing the setpoint time
 delta        The number of milliseconds to wait (1000 milliseconds per second)
============ ===================================================================

----

task_delete
-----------

Remove a task from the RTOS real time kernel's management.  The task being
deleted will be removed from all ready, blocked, suspended and event lists.

Memory dynamically allocated by the task is not automatically freed, and
should be freed before the task is deleted.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void task_delete ( task_t task )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* param) {
          printf("Hello %s\n", (char*)param);
          // ...
        }
        void initialize() {
          task_t my_task = task_create(my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                                      TASK_STACK_DEPTH_DEFAULT, "My Task");
          // Do other things
          task_delete(my_task);
        }

============ ================================================================================================
 Parameters
============ ================================================================================================
 task         The handle of the task to be deleted.  Passing NULL will cause the calling task to be deleted.
============ ================================================================================================

----

task_get_by_name
----------------

Obtains a task handle from the specified name.

The operation takes a relatively long time and should be used sparingly.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        task_t task_get_by_name ( char* name )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* param) {
          printf("Hello %s\n", (char*)param);
          // ...
        }
        void initialize() {
          task_t my_task = task_create(my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                                      TASK_STACK_DEPTH_DEFAULT, "My Task");
          // Do other things
          task_delete(task_get_by_name("My Task"));
        }

============ ==================================
 Parameters
============ ==================================
 name        The name to query
============ ==================================

**Returns:** A task handle with a matching name, or NULL if none were found.

----

task_get_count
--------------

Returns the number of tasks the kernel is currently managing, including all
ready, blocked, or suspended tasks. A task that has been deleted, but not yet
reaped by the idle task will also be included in the count. Tasks recently
created may take one context switch to be counted.

Analogous to `pros::Task::get_count <../cpp/rtos.html#get-count>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

          uint32_t task_get_count ( )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* param) {
          printf("Hello %s\n", (char*)param);
          // ...
        }
        void initialize() {
          task_t my_task = task_create(my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                                      TASK_STACK_DEPTH_DEFAULT, "My Task");
          printf("Number of Running Tasks: %d\n", task_get_count());
        }

**Returns:** The number of tasks that are currently being managed by the kernel

----

task_get_name
-------------

Obtains the name of the specified task.

Analogous to `pros::Task::get_name <../cpp/rtos.html#get-name>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

          char const* task_get_name ( task_t task )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* param) {
          printf("Hello %s\n", (char*)param);
          // ...
        }
        void initialize() {
          task_t my_task = task_create(my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                                      TASK_STACK_DEPTH_DEFAULT, "My Task");
          printf("Task Name: %d\n", task_get_name(my_task));
        }

============ ==================================
 Parameters
============ ==================================
 task        The handle of the task to check
============ ==================================

**Returns:** A pointer to the name of the task

----

task_get_priority
-----------------

Obtains the priority of the specified task.

Analogous to `pros::Task::get_priority <../cpp/rtos.html#get-priority>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

          uint32_t task_get_priority ( task_t task )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* param) {
          printf("Hello %s\n", (char*)param);
          // ...
        }
        void initialize() {
          task_t my_task = task_create(my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                                      TASK_STACK_DEPTH_DEFAULT, "My Task");
          printf("Task Priority: %d\n", task_get_priority(my_task));
        }

============ ==================================
 Parameters
============ ==================================
 task        The handle of the task to check
============ ==================================

**Returns:** The priority of the task.

----

task_get_state
--------------

Returns the state of the specified task.

Analogous to `pros::Task::get_state <../cpp/rtos.html#get-state>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

          task_state_e_t task_get_state ( task_t task )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* param) {
          printf("Hello %s\n", (char*)param);
          // ...
        }
        void initialize() {
          task_t my_task = task_create(my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                                      TASK_STACK_DEPTH_DEFAULT, "My Task");
          printf("Task's State: %d\n", task_get_state(my_task));
        }

============ ==================================
 Parameters
============ ==================================
 task        The handle of the task to check
============ ==================================

**Returns:** The state of the task. (see `task_state_e_t`_).

----

task_notify
-----------

Sends a simple notification to task and increments the notification counter.

See :doc:`../../tutorials/topical/notifications` for details.

Analogous to `pros::Task::notify <../cpp/rtos.html#notify>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint32_t task_notify ( task_t task )

   .. tab :: Example
      .. highlight:: c
      ::

        void my_task_fn(void* ign) {
          while(task_notify_take(true, TIMEOUT_MAX)) {
            puts("I was unblocked!");
          }
        }
        void opcontrol() {
          task_t my_task = task_create(my_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                                       TASK_STACK_DEPTH_DEFAULT, "Notify me! Task");
          while(true) {
            if(controller_get_digital(CONTROLLER_MASTER, DIGITAL_L1)) {
              task_notify(my_task);
            }
          }
        }

============ ==================================
 Parameters
============ ==================================
 task        The handle of the task to notify
============ ==================================

**Returns:** Always true.

----

task_notify_clear
-----------------

Clears the notification for a task.

See :doc:`../../tutorials/topical/notifications` for details.

Analogous to `pros::Task::notify_clear <../cpp/rtos.html#notify-clear>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        bool task_notify_clear ( task_t task )

   .. tab :: Example
      .. highlight:: c
      ::

        TO BE ADDED

============ ==================================
 Parameters
============ ==================================
 task        The handle of the task to clear
============ ==================================

**Returns:** False if there was not a notification waiting, true if there was

----

task_notify_ext
---------------

Sends a notification to a task, optionally performing some action. Will also
retrieve the value of the notification in the target task before modifying
the notification value.

See :doc:`../../tutorials/topical/notifications` for details.

Analogous to `pros::Task::notify_ext <../cpp/rtos.html#notify-ext>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint32_t task_notify_ext ( task_t task,
                                   uint32_t value,
                                   notify_action_e_t action,
                                   uint32_t* prev_value )

   .. tab :: Example
      .. highlight:: c
      ::

        TO BE ADDED

============ ======================================================================================
 Parameters
============ ======================================================================================
 task         The handle of the task to notify
 value        The value used in performing the action
 action       An action to optionally perform on the task's notification
 prev_value   A pointer to store the previous value of the target task's notification, may be NULL
============ ======================================================================================

**Returns:** Dependent on the notification action. For `NOTIFY_ACTION_NO_OWRITE <rtos.html#notify-action-e-t>`_:
return 0 if the value could be written without needing to overwrite, 1 otherwise.
For all other `NOTIFY_ACTION <rtos.html#notify-action-e-t>`_ values: always return 0

----

task_notify_take
----------------

Wait for a notification to be nonzero.

See :doc:`../../tutorials/topical/notifications` for details.

Analogous to `pros::Task::notify_take <../cpp/rtos.html#notify-take>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        uint32_t task_notify_take ( bool clear_on_exit,
                                    uint32_t timeout )

     .. tab :: Example
        .. highlight:: c
        ::

          void my_task_fn(void* ign) {
            while(task_notify_take(true, TIMEOUT_MAX)) {
              puts("I was unblocked!");
            }
          }
          void opcontrol() {
            task_t my_task = task_create(my_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                                         TASK_STACK_DEPTH_DEFAULT, "Notify me! Task");
            while(true) {
              if(controller_get_digital(CONTROLLER_MASTER, DIGITAL_L1)) {
                task_notify(my_task);
              }
            }
          }

=============== ================================================================================================================
 Parameters
=============== ================================================================================================================
 clear_on_exit   If true (1), then the notification value is cleared. If false (0), then the notification value is decremented.
 timeout         Specifies the amount of time to be spent waiting for a notification to occur.
=============== ================================================================================================================

**Returns:** The value of the task's notification value before it is decremented or cleared.

----

task_resume
-----------

Resumes the specified task, making it eligible to be scheduled.

Analogous to `pros::Task::resume <../cpp/rtos.html#resume>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void task_resume ( task_t task )

     .. tab :: Example
        .. highlight:: c
        ::

          void my_task_fn(void* ign) {
            // Do things
          }
          void opcontrol() {
            task_t my_task = task_create(my_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                                         TASK_STACK_DEPTH_DEFAULT, "Example Task");
            // Do things
            task_suspend(my_task); // The task will no longer execute
            // Do other things
            task_resume(my_task); // The task will resume execution
          }

============ ==================================
 Parameters
============ ==================================
 task        The handle of the task to resume
============ ==================================

----

task_set_priority
-----------------

Sets the priority of the specified task.

If the specified task's state is available to be scheduled (e.g. not blocked)
and new priority is higher than the currently running task, a context switch
may occur.

Analogous to `pros::Task::set_priority <../cpp/rtos.html#set-priority>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void task_set_priority ( task_t task,
                                 uint32_t prio )

     .. tab :: Example
        .. highlight:: c
        ::

          void my_task_fn(void* ign) {
            // Do things
          }
          void opcontrol() {
            task_t my_task = task_create(my_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                                         TASK_STACK_DEPTH_DEFAULT, "Example Task");
            task_set_priority(my_task, TASK_PRIORITY_DEFAULT + 1);
          }

============ ===============================
 Parameters
============ ===============================
 task         The handle of the task to set
 prio         The new priority of the task
============ ===============================

----

task_suspend
------------

Suspends the current task, making it ineligible to be scheduled.

Analogous to `pros::Task::suspend <../cpp/rtos.html#suspend>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void task_suspend ( task_t task )

     .. tab :: Example
        .. highlight:: c
        ::

          void my_task_fn(void* ign) {
            // Do things
          }
          void opcontrol() {
            task_t my_task = task_create(my_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                                         TASK_STACK_DEPTH_DEFAULT, "Notify me! Task");
            // Do things
            task_suspend(my_task); // The task will no longer execute
            // Do other things
            task_resume(my_task); // The task will resume execution
          }

============ ==================================
 Parameters
============ ==================================
 task        The handle of the task to suspend
============ ==================================

----

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

The maximum timeout value that can be given to, for instance, a `mutex grab <rtos.html#mutex-take>`_.

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

Points to a task handle. Used for referencing a task.

::

  typedef void* task_t;

task_fn_t
---------

Points to the function associated with a task.

::

  typedef void (*task_fn_t)(void*);

mutex_t
-------

A `mutex <../../tutorials/topical/multitasking.html#mutexes>`_.

::

  typedef void* mutex_t;
