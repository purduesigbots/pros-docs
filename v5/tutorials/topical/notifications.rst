==================
Task Notifications
==================

.. note:: For a full list of functions for interacting with Tasks, see its
          `C API <../../api/c/rtos.html>`_ and `C++ API <../../api/cpp/rtos.html>`_.

Task notifications are a powerful new feature in PROS 3 which allows direct-to-task
synchronization. Each task has a 32-bit notification value. Each task can block on its own
notification (wait for it to become non-zero) and any task can update the notification value.
Task notifications have a broad range of applications, are simple to use, and have significant
memory and speed advantages when compared to traditional semaphore-based synchronization
mechanisms.

The simplest application of task notifications does not care about the task notification value:

.. tabs ::
    .. tab :: C
        .. highlight:: c
        .. code-block:: c
           :caption: initialize.c
           :linenos:

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
