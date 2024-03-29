============
Multitasking
============

.. note:: For a full list of functions for interacting with Tasks, see its
          `C API <../../api/c/rtos.html>`_ and `C++ API <../../api/cpp/rtos.html>`_.

Tasks are a great tool to do multiple things at once, but they can be difficult
to use properly. The most important thing to remember when using tasks is that tasks aren't
truly running in the background - they are run one at a time and swapped out by the PROS
scheduler. If your task performs some repeated action (e.g. a ``while`` loop), you should
include a ``delay()`` or ``task_delay_until()``. Without a ``delay()`` statement, your task
could starve the processor of resources and prevent the kernel from running properly.

The PROS task scheduler is a preemptive, priority-based, round-robin scheduler.
This means that tasks are preempted (interrupted) every millisecond to determine if another task
ought to run. PROS decides which task to run next based on all of the ready tasks' priorities.

    - Tasks which are eligible for execution are called "ready." Tasks are typically not ready
      because they may be sleeping (in a ``task_delay``) or blocked waiting for a synchronization
      mechanism (e.g. a mutex or semaphore).
    - The higher the priority, the more crucial the task is considered, and more CPU time
      will be awarded to the task. Ready tasks of higher priority will always run in preference
      to lower priority tasks.
    - Tasks of equal priority take preference when a task is preempted. In other words, if tasks A and
      B have equal priority, then when A is interrupted, B will run next, even if A is still eligible for
      execution. This is called round-robin scheduling.

On the Abuse of Tasks
---------------------

Tasks are very often misused and abused in ways that make the PROS kernel behave in unintended ways.
The following list are some commonly made mistakes and guidelines for using Tasks in PROS.

    - Tasks in real-time operating systems should be long-living. That is, tasks should not typically
      perform a short operation and then die. Consider re-working the logic of your program to enable
      such behavior.
    - "Task functions" are not special, except that their signature needs to be correct. In other
      programming environments for VEX, tasks must be marked with a special keyword. With most modern
      programming environments, tasks are just functions that get executed asynchronously.
    - It was mentioned above, but it's important enough for a second mention: every tasks'
      loop should have a ``delay()`` statement.

Task Management
===============

Tasks in PROS are simple to create:

.. tabs::
   .. group-tab:: C++
       .. highlight:: cpp
       .. code-block:: cpp
          :caption: initialize.cpp
          :linenos:

           void my_task_fn(void* param) {
               std::cout << "My task runs" << std::endl;
               // ...
           }
           void initialize() {
               Task my_task(my_task_fn);
           }

   .. group-tab:: C
       .. highlight:: c
       .. code-block:: c
          :caption: initialize.c
          :linenos:

           void my_task_fn(void* param) {
               printf("Task Called\n");
               // ...
           }
           void initialize() {
               task_t my_task = task_create(my_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                                           TASK_STACK_DEPTH_DEFAULT, "My Task");
           }



Passing parameters to tasks
---------------------------
Tasks can have parameters passed into them.

.. tabs::
   .. group-tab:: C++
       .. highlight:: cpp
       .. code-block:: cpp
          :caption: initialize.cpp
          :linenos:

          void my_task_fn(void* param) {
              std::cout << "Function Parameters: " << (char*)param << std::endl;
              // ...
          }
          void initialize() {
              Task my_task(my_task_fn, (void*)"parameter(s) here", "My Task Name");
          }
            
   .. group-tab:: C
       .. highlight:: c
       .. code-block:: c
          :caption: initialize.c
          :linenos:

          void my_task_fn(void* param) {
              printf("Function Parameters: %s\n", (char*)param);
              // ...
          }
          void initialize() {
              task_t my_task = task_create(my_task_fn, (void*)"parameter(s) here", TASK_PRIORITY_DEFAULT,
                                          TASK_STACK_DEPTH_DEFAULT, "My Task");
          }


The `task_create <../../api/c/rtos.html#task_create>`_ function takes in a function where the task starts, an argument to the function,
a priority for the task, and two new fields not yet discussed: stack size and name.

Stack size describes the amount of stack space that is allocated for the task. The stack is an area for your
program to store variables, return addresses for functions, and more. Real-time operating systems like PROS work
in limited-memory situations and do not allow for a dynamically resizable stack. Modern desktop operating systems
do not need to worry about stack space as much as you would in a RTOS. The good news is that most tasks should
opt to use ``TASK_STACK_DEPTH_DEFAULT``, which should provide ample stack space for nearly any task. Very
rudimentary and simple tasks (e.g. not many nested functions, no floating point context, few variables, only C)
may be able to use ``TASK_STACK_DEPTH_MIN``.

The last parameter is the task name. The task name allows you to give a human-friendly name to the task. It

is primarily for debugging purposes and allows you (the human) to easily identify tasks if performing advanced task
management. Task names may be up to 32 characters long, and you may pass NULL or an empty string into the function.
In API2, `taskCreate <../../../cortex/api/index.html#taskCreate>`_ will automatically make the task name an empty string.

Lambda Tasks (C++ Only)
===============
Tasks may sometimes be small sections of code that are not used anywhere else in the codebase. To help remedy this, a `lambda function 
<https://en.cppreference.com/w/cpp/language/lambda>`_ (an inline function that does not require a name) allows for a task's function 
to be created in the same place that the task is created so that the code is easier to maintain. In the example below, a lambda function

is used to limit the need for creating a new function. This constructor can also use any void `Callable <https://en.cppreference.com/w/cpp/named_req/Callable>`_.


.. tabs::
   .. group-tab:: C++
       .. highlight:: cpp
       .. code-block:: cpp
          :caption: initialize.cpp
          :linenos:

          void initialize() {
              pros::Task task{[=] {
                      pros::delay(1000);
                      std::cout << "Task Called" << std::endl;
              }};
          }

   .. group-tab:: C
       .. highlight:: c
       .. code-block:: c
          :linenos:
          
          Lambda tasks are not supported in C.

Synchronization
===============

One problem which one often runs into when dealing with tasks is the
problem of synchronization. If two tasks try to read the same sensor or
control the same motor at the same time, unexpected behavior may occur
since two tasks are trying to write to the same piece of data or variable
(i.e. `race conditions <https://en.wikipedia.org/wiki/Race_condition#Software>`_).
The concept of writing code which has protections against race conditions
is called thread safety. There are many different ways to implement thread safety,
and PROS has several facilities to help maintain thread safety.

The simplest way to ensure thread safety is to design tasks which will never access
the same variables or data. You may design your code to have each subsystem of your
robot has its own task. Ensuring that tasks never write to the same variables is called

division of responsibility or separation of domain.

If the tasks can be designed so that different tasks will perform different operations on a variable, then an
`atomic variable <https://www.cplusplus.com/reference/atomic/atomic/>`_ can be used to help solve the problem of synchronization. Atomic variables prevent the wrapped variable from being observed in a partially set or invalid state when multiple tasks try to operate on a variable at the same time.

.. code-block:: C++
   :linenos:

   std::atomic<int> task1_variable(0);
   void Task1(void * ignore) {
       // do things
       task1_variable = 4;
   }

   void Task2(void * ignore) {
     // do things
     // I can read task1_variable, but NOT write to it
     printf("%d\n", task1_variable.load());
   }

Sometimes dividing responsibility is impossible: suppose you wanted to write a PID
controller on its own task and you wanted to change the target of the
PID controller. PROS features two types of synchronization structures,
*mutexes* and *notifications* that can be used to coordinate tasks.

Mutexes
-------

Mutexes stand for mutual exclusion; only one task can hold a mutex at any given
time. Other tasks must wait for the first task to finish (and release
the mutex) before they may continue.

.. tabs::
   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :linenos:

         Mutex mutex;
         // Acquire the mutex; other tasks using this command will wait until the mutex is released
         // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
         // If the timeout expires, "false" will be returned, otherwise "true"
         mutex.take(timeout);
         // do some work
         // Release the mutex for other tasks
         mutex.give();

   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :linenos:

         mutex_t mutex = mutex_create();

         // Acquire the mutex; other tasks using this command will wait until the mutex is released
         // timeout can specify the maximum time to wait, or MAX_DELAY to wait forever
         // If the timeout expires, "false" will be returned, otherwise "true"
         mutex_take(mutex, timeout);
         // do some work
         // Release the mutex for other tasks
         mutex_give(mutex);

Mutexes do not magically prevent concurrent writing, but provide the ability for tasks to
create "contracts" with each other. You can write your code such that a variable is never
written to unless the task owns a mutex designated for that variable.

Notifications
-------------

Task notifications are a powerful new feature in PROS 3 which allows direct-to-task
synchronization. A full tutorial on task notifications can be found `here <./notifications.html>`_.
