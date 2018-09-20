.. highlight:: cpp
   :linenothreshold: 5

=======================
RTOS Facilities C++ API
=======================

.. note:: Additional example code for this module can be found in
          `its Tutorial <../../tutorials/topical/multitasking.html>`_.

.. contents:: :local:

pros
====

millis
------

Analogous to `millis <../c/rtos.html#millis>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t pros::millis ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          std::uint32_t now = pros::millis();
          while (true) {
            // Do opcontrol things
            pros::Task::delay_until(&now, 2);
          }
        }

**Returns:** Returns the number of milliseconds since PROS initialized.

----

pros::Task
==========

Constructor(s)
--------------

Analogous to `task_create <../c/rtos.html#task-create>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::Task::Task ( pros::task_fn_t function,
                           void* parameters = NULL,
                           std::uint32_t prio = TASK_PRIORITY_DEFAULT,
                           std::uint16_t stack_depth = TASK_STACK_DEPTH_DEFAULT,
                           const char* name = "")

   .. tab :: Example
      .. highlight:: cpp
      ::

        void my_task_fn(void* param) {
          std::cout << "Hello" << (char*)param;
          // ...
        }
        void initialize() {
          pros::Task my_task (my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                        TASK_STACK_DEPTH_DEFAULT, "My Task");
        }

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

----

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::Task::Task ( pros::task_t task )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void my_task_fn(void* param) {
          std::cout << "Hello" << (char*)param;
          // ...
        }
        void initialize() {
          pros::task_t my_task = task_create(my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                                       TASK_STACK_DEPTH_DEFAULT, "My Task");
          pros::Task my_cpp_task (my_task);
        }

Creates a Task object from a task already created with the C API.

=============== ===================================================================
 Parameters
=============== ===================================================================
 task            The task for which to create an object
=============== ===================================================================

----

Operator Overloads
------------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void operator = ( const pros::task_t in )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void my_task_fn(void* param) {
          std::cout << "Hello" << (char*)param;
          // ...
        }
        void initialize() {
          pros::task_t my_task = task_create(my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                                       TASK_STACK_DEPTH_DEFAULT, "My Task");
          Task my_cpp_task = my_task;
        }

Creates a Task object from a task already created with the C API.

=============== ===================================================================
 Parameters
=============== ===================================================================
 task            The task for which to create an object
=============== ===================================================================

----

Methods
-------

delay
~~~~~

Delay a task for a given number of milliseconds.

This is not the best method to have a task execute code at predefined
intervals, as the delay time is measured from when the delay is requested.
To delay cyclically, use `delay_until`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         static void pros::Task::delay ( const std::uint32_t milliseconds )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          while (true) {
            // Do opcontrol things
            pros::Task::delay(2);
          }
        }

=============== ===================================================================
 Parameters
=============== ===================================================================
 milliseconds    The number of milliseconds to wait (1000 milliseconds per second)
=============== ===================================================================

----

delay_until
~~~~~~~~~~~

Delay a task until a specified time.  This function can be used by periodic
tasks to ensure a constant execution frequency.

The task will be woken up at the time ``*prev_time + delta``, and ``*prev_time`` will
be updated to reflect the time at which the task will unblock.

Analogous to `task_delay_until <../c/rtos.html#delay-until>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void pros::Task::delay_until ( std::uint32_t* const prev_time,
                                       const std::uint32_t delta )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          std::uint32_t now = pros::millis();
          while (true) {
            // Do opcontrol things
            pros::Task::delay_until(&now, 2);
          }
        }

============ ===================================================================
 Parameters
============ ===================================================================
 prev_time    A pointer to the location storing the setpoint time
 delta        The number of milliseconds to wait (1000 milliseconds per second)
============ ===================================================================

----

get_count
~~~~~~~~~

Returns the number of tasks the kernel is currently managing, including all
ready, blocked, or suspended tasks. A task that has been deleted, but not yet
reaped by the idle task will also be included in the count. Tasks recently
created may take one context switch to be counted.

Analogous to `Task_get_count <../c/rtos.html#task-get-count>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

          std::uint32_t pros::Task::get_count ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void my_task_fn(void* param) {
          std::cout << "Hello" << (char*)param;
          // ...
        }
        void initialize() {
          Task my_task (my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                        TASK_STACK_DEPTH_DEFAULT, "My Task");
          std::cout << "Number of Running Tasks:" << pros::Task::get_count();
        }

**Returns:** The number of tasks that are currently being managed by the kernel

----

get_name
~~~~~~~~

Obtains the name of the specified task.

Analogous to `task_get_name <../c/rtos.html#task-get-name>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

          char const* pros::Task::get_name ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void my_task_fn(void* param) {
          std::cout << "Hello" << (char*)param;
          // ...
        }
        void initialize() {
          Task my_task (my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                        TASK_STACK_DEPTH_DEFAULT, "My Task");
          std::cout << "Task Name:" << my_task.get_name();
        }

**Returns:** A pointer to the name of the task

----

get_priority
~~~~~~~~~~~~

Obtains the priority of the specified task.

Analogous to `task_get_priority <../c/rtos.html#task-get-priority>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t pros::Task::get_priority ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void my_task_fn(void* param) {
          std::cout << "Hello" << (char*)param;
          // ...
        }
        void initialize() {
          Task my_task (my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                        TASK_STACK_DEPTH_DEFAULT, "My Task");
          std::cout << "Task Priority:" << my_task.get_priority();

**Returns:** The priority of the task.

----

get_state
~~~~~~~~~

Returns the state of the specified task.

Analogous to `task_get_state <../c/rtos.html#task-get-state>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        task_state_e_t pros::Task::get_state ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void my_task_fn(void* param) {
          std::cout << "Hello" << (char*)param;
          // ...
        }
        void initialize() {
          Task my_task (my_task_fn, "PROS", TASK_PRIORITY_DEFAULT,
                        TASK_STACK_DEPTH_DEFAULT, "My Task");
          std::cout << "Task's State:" << my_task.get_state();
        }

**Returns:** The state of the task. (see `task_state_e_t <task_state_e_t_>`_).

----

notify
~~~~~~

Sends a simple notification to task and increments the notification counter.

See :doc:`../../tutorials/topical/notifications` for details.

Analogous to `task_notify <../c/rtos.html#task-notify>`_.

.. warning:: verify this example code

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t pros::Task::notify ( )

     .. tab :: Example
        .. highlight:: cpp
        ::

          void my_task_fn(void* ign) {
            while(my_task.notify_take(true, TIMEOUT_MAX)) {
              std::cout << "I was unblocked!";
            }
          }
          void opcontrol() {
            Task my_task (my_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                          TASK_STACK_DEPTH_DEFAULT, "Notify me! Task");
            pros::Controller master (E_CONTROLLER_MASTER);
            while(true) {
              if(master.get_digital(DIGITAL_L1)) {
                my_task.notify(my_task);
              }
            }
          }

**Returns:** Always true.

----

notify_clear
~~~~~~~~~~~~

Clears the notification for a task.

See :doc:`../../tutorials/topical/notifications` for details.

Analogous to `task_notify_clear <../c/rtos.html#task-notify-clear>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool pros::Task::notify_clear ( )

     .. tab :: Example
        .. highlight:: cpp
        ::

          TO BE ADDED

**Returns:** False if there was not a notification waiting, true if there was

----

notify_ext
~~~~~~~~~~

Sends a notification to a task, optionally performing some action. Will also
retrieve the value of the notification in the target task before modifying
the notification value.

See :doc:`../../tutorials/topical/notifications` for details.

Analogous to `task_notify_ext <../c/rtos.html#task-notify-ext>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t pros::Task::notify_ext ( std::uint32_t value,
                                          notify_action_e_t action,
                                          std::uint32_t* prev_value )

     .. tab :: Example
        .. highlight:: cpp
        ::

          TO BE ADDED

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

----

notify_take
~~~~~~~~~~~

Wait for a notification to be nonzero.

See :doc:`../../tutorials/topical/notifications` for details.

Analogous to `task_notify_take <../c/rtos.html#task-notify-take>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t pros::Task::notify_take ( bool clear_on_exit,
                                           std::uint32_t timeout )

     .. tab :: Example
        .. highlight:: cpp
        ::

          void my_task_fn(void* ign) {
            while(my_task.notify_take(true, TIMEOUT_MAX)) {
              std::cout << "I was unblocked!";
            }
          }
          void opcontrol() {
            Task my_task (my_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                          TASK_STACK_DEPTH_DEFAULT, "Notify me! Task");
            pros::Controller master (E_CONTROLLER_MASTER);
            while(true) {
              if(master.get_digital(DIGITAL_L1)) {
                my_task.notify(my_task);
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

resume
~~~~~~

Resumes the specified task, making it eligible to be scheduled.

Analogous to `task_resume <../c/rtos.html#task-resume>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void pros::Task::resume ( )

     .. tab :: Example
        .. highlight:: cpp
        ::

          void my_task_fn(void* ign) {
            // Do things
          }
          void opcontrol() {
            Task my_task (my_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                          TASK_STACK_DEPTH_DEFAULT, "Example Task");
            // Do things
            my_task.suspend(); // The task will no longer execute
            // Do other things
            my_task.resume(); // The task will resume execution
          }

----

set_priority
~~~~~~~~~~~~

Sets the priority of the specified task.

If the specified task's state is available to be scheduled (e.g. not blocked)
and new priority is higher than the currently running task, a context switch
may occur.

Analogous to `task_set_priority <../c/rtos.html#task-set-priority>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void pros::Task::set_priority ( std::uint32_t prio )

     .. tab :: Example
        .. highlight:: cpp
        ::

          void my_task_fn(void* ign) {
            // Do things
          }
          void opcontrol() {
            Task my_task (my_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                          TASK_STACK_DEPTH_DEFAULT, "Example Task");
            my_task.set_priority(TASK_PRIORITY_DEFAULT + 1);
          }

============ ===============================
 Parameters
============ ===============================
 prio         The new priority of the task
============ ===============================

----

suspend
~~~~~~~

Suspends the current task, making it ineligible to be scheduled.

Analogous to `task_get_state <../c/rtos.html#task-get-state>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void pros::Task::suspend ( )

     .. tab :: Example
        .. highlight:: cpp
        ::

          void my_task_fn(void* ign) {
            // Do things
          }
          void opcontrol() {
            Task my_task (my_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                          TASK_STACK_DEPTH_DEFAULT, "Example Task");
            // Do things
            my_task.suspend(); // The task will no longer execute
            // Do other things
            my_task.resume(); // The task will resume execution
          }

----

pros::Mutex
===========

Constructor(s)
--------------

Creates a mutex.

See :doc:`../../tutorials/topical/multitasking` for details.

Analogous to `mutex_create <../c/rtos.html#mutex-create>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         pros::Mutex::Mutex ( )

   .. tab :: Example
      .. highlight:: c
      ::

        Mutex mutex;

        // Acquire the mutex; other tasks using this command will wait until the mutex is released
        // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
        // If the timeout expires, "false" will be returned, otherwise "true"
        mutex.take(MAX_DELAY);
        // do some work
        // Release the mutex for other tasks
        mutex.give();

----

Methods
-------

give
~~~~

Unlocks a mutex.

See :doc:`../../tutorials/topical/multitasking` for details.

Analogous to `mutex_give <../c/rtos.html#mutex-give>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         bool pros::Mutex::give ( )

   .. tab :: Example
      .. highlight:: c
      ::

        Mutex mutex;

        // Acquire the mutex; other tasks using this command will wait until the mutex is released
        // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
        // If the timeout expires, "false" will be returned, otherwise "true"
        mutex.take(MAX_DELAY);
        // do some work
        // Release the mutex for other tasks
        mutex.give();

**Returns:** True if the mutex was successfully returned, false otherwise. If false
is returned, then ``errno`` is set with a hint about why the mutex couldn't
be returned.

----

take
~~~~

Takes and locks a mutex, waiting for up to a certain number of milliseconds
before timing out.

See :doc:`../../tutorials/topical/multitasking` for details.

Analogous to `mutex_take <../c/rtos.html#mutex-take>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         bool pros::Mutex::take ( std::uint32_t timeout )

   .. tab :: Example
      .. highlight:: c
      ::

        Mutex mutex;

        // Acquire the mutex; other tasks using this command will wait until the mutex is released
        // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
        // If the timeout expires, "false" will be returned, otherwise "true"
        mutex.take(MAX_DELAY);
        // do some work
        // Release the mutex for other tasks
        mutex.give();

============ ==============================================================================================
 Parameters
============ ==============================================================================================
 timeout      Time to wait before the mutex becomes available.
              A timeout of 0 can be used to poll the mutex. TIMEOUT_MAX can be used to block indefinitely.
============ ==============================================================================================

**Returns:** True if the mutex was successfully taken, false otherwise. If false
is returned, then ``errno`` is set with a hint about why the the mutex
couldn't be taken.

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

pros::task_state_e_t
--------------------

::

   typedef enum {
     E_TASK_STATE_RUNNING = 0,
     E_TASK_STATE_READY,
     E_TASK_STATE_BLOCKED,
     E_TASK_STATE_SUSPENDED,
     E_TASK_STATE_DELETED,
     E_TASK_STATE_INVALID
   } task_state_e_t;

============================== ==========================================================================
 Value
============================== ==========================================================================
 pros::E_TASK_STATE_RUNNING     The task is actively executing.
 pros::E_TASK_STATE_READY       The task exists and is available to run, but is not currently running.
 pros::E_TASK_STATE_BLOCKED     The task is delayed or blocked by a mutex, semaphore, or I/O operation.
 pros::E_TASK_STATE_SUSPENDED   The task is supended using `task_suspend`_.
 pros::E_TASK_STATE_DELETED     The task has been deleted using `task_delete`_.
 pros::E_TASK_STATE_INVALID     The task handle does not point to a current or past task.
============================== ==========================================================================

pros::task_notify_t
-------------------

::

  typedef enum {
    E_NOTIFY_ACTION_NONE,
    E_NOTIFY_ACTION_BITS,
    E_NOTIFY_ACTION_INCR,
    E_NOTIFY_ACTION_OWRITE,
    E_NOTIFY_ACTION_NO_OWRITE
  } notify_action_e_t;

================================= =============
 Value
================================= =============
 pros::E_NOTIFY_ACTION_NONE        TO BE ADDED
 pros::E_NOTIFY_ACTION_BITS
 pros::E_NOTIFY_ACTION_INCR
 pros::E_NOTIFY_ACTION_OWRITE
 pros::E_NOTIFY_ACTION_NO_OWRITE
================================= =============


Typedefs
========

pros::task_t
------------

Points to a task handle. Used for referencing a task.

::

  typedef void* task_t;

pros::task_fn_t
---------------

Points to the function associated with a task.

::

  typedef void (*task_fn_t)(void*);

pros::mutex_t
-------------

A `mutex <../../tutorials/topical/multitasking.html#mutexes>`_.

::

  typedef void* mutex_t;

.. _notify_action_e_t: ../c/rtos.html#notify-action-e-t
.. _task_state_e_t: ../c/rtos.html#task-state-e-t
