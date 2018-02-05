============
Multitasking
============

Introduction
==============
Tasks are a great tool to do multiple things at once, but they can be difficult
to use properly. The PROS task scheduler is a preemptive, priority-based, round-robin scheduler.
This means that tasks are preempted (interrupted) every millisecond to determine if another task
ought to run. PROS decides which task to run next based on all of the ready tasks' priorities.
    - Tasks which are eligible for execution are called "ready." Tasks are typically not ready
      because they may be sleeping (in a :code:`task_delay`) or blocked waiting for a synchronization
      mechanism (e.g. a mutex or semaphore).
    - The higher the priority, the more crucial the task is considered, and more CPU time
      will be awarded to the task. Ready tasks of higher priority will always run in preference
      to lower priority tasks.
    - Tasks of equal priority take preference when a task is preempted. In other words, if tasks A and
      B have equal priority, then when A is interrupted, B will run next, even if A is still eligible for
      execution. This is called round-robin scheduling.

On the Abuse of Tasks
--------------
Tasks are very often misused and abused in ways that make the PROS kernel behave in unintended ways.
The following list are some commonly made mistakes and guidelines for using Tasks in PROS.
    - Tasks in real-time operating systems should be long-living. That is, tasks should not typically
      perform a short operation and then die. Consider re-working the logic of your program to enable
      such behavior.
    - "Task functions" are not special, except that their signature needs to be correct. In other
      programming environments for VEX, tasks must be marked with a special keyword. With most modern
      programming environments, tasks are just functions that get executed asychronuosly.

Task Management
===============
Tasks in PROS are simple to create:


.. tabs ::
    .. tab :: C
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

    .. tab :: C++
        .. highlight:: cpp
        ::

            void my_task_fn(void* param) {
                std::cout << Hello << (char*)param << std::endl;
                // ...
            }
            void initialize() {
                std::string text("PROS");
                Task my_task(my_task_fn, &text);
            }
    .. tab :: API2
        .. highlight:: c
        ::
        
            void my_task_fn(void* param) {
                printf("Hello %s\n", (char*)param);
            }
            void initialize() {
                task_t my_task = task_create(my_task_fn, TASK_DEFAULT_STACK_SIZE, "PROS", TASK_PRIORITY_DEFAULT);
            }

The :code:`task_create` function takes in a function where the task starts, an argument to the function,
a priority for the task, and two new fields not yet discussed: stack size and name. Stack size describes
the amount of stack space that is allocated for the task. The stack is an area for your program to store
variables, return addresses for functions, and more. Real-time operating systems like PROS work in
limited-memory situations and do not allow for a dynamically resizable stack. Most tasks should opt to
use :code:`TASK_STACK_DEPTH_DEFAULT`, which should provide ample stack space for the task. Very rudimentary
and simple tasks (e.g. not many nested functions, no floating point context, few variables, only C) may be
able to use :code:`TASK_STACK_DEPTH_MIN`.

Synchronization
===============

One problem which one often runs into when dealing with tasks is the
problem of synchronization. If two tasks try to read the same sensor or
control the same motor at the same time, unexpected behavior may occur
since two tasks are trying to read/write to the same piece of data.

Tasks can be designed to never conflict over motors or sensors:
(division of responsibility)

.. code:: c

    void Task1(void * ignore) {
      // update motors 2 and 4
    }

    void Task2(void * ignore) {
      // update motors 5 and 6
    }

Sometimes this is impossible: suppose you wanted to write a PID
controller on its own task and you wanted to change the target of the
controller. PROS features two types of synchronization structures,
*mutexes* and *semaphores* that can be used to coordinate tasks.

Mutexes
-------

Mutexes stand for mutual exclusion; only one task can hold a mutex at any given
time. Other tasks must wait for the first task to finish (and release
the mutex) before they may continue.

.. code:: c

    mutex_t mutex = mutex_create();

    // Acquire the mutex; other tasks using this command will wait until the mutex is released
    // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
    // If the timeout expires, "false" will be returned, otherwise "true"
    mutex_take(mutex, timeout);
    // do some work
    // Release the mutex for other tasks
    mutex_give(mutex);

Semaphores
----------

Semaphores are like signals - one task can take a semaphore to wait for
a coordination signal from another task which gives the semaphore.
Multiple tasks may wait for a semaphore; if this is the case, the
highest priority task will continue per signal given.

.. code:: c

    // Create a semaphore
    sem_t semaphore = sem_create();

    // Waits for the semaphore to be signaled
    // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
    // If the timeout expires, "false" will be returned, otherwise "true"
    sem_take(semaphore);
    // do something
    // Signal the semaphore
    sem_give(semaphore);
