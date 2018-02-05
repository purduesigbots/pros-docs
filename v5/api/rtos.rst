===================
RTOS Facilities API
===================

Functions
=========

task_create
-----------

::

    task_t task_create( task_fn_t function,
                        void* parameters,
                        uint8_t prio,
                        uint16_t stack_depth,
                        const char* name
                        )

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
If an error occurred, NULL will be returned and errno can be checked for hints as to why task_create failed.

Macros
======

#define TASK_PRIORITY_MAX 16
----------------------------

The highest priority that can be assigned to a task.

Enumerated Values
=================

task_state_e_t
--------------

.. code:: c

   typedef enum {
     E_TASK_STATE_RUNNING = 0,
     E_TASK_STATE_READY,
     E_TASK_STATE_BLOCKED,
     E_TASK_STATE_SUSPENDED,
     E_TASK_STATE_DELETED,
     E_TASK_STATE_INVALID
   } task_state_e_t;
