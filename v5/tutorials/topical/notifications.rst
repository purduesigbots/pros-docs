==================
Task Notifications
==================


Overview
--------

.. note:: For a full list of functions for interacting with Tasks, see documentation for the
          `C API <../../api/c/rtos.html>`_ and `C++ API <../../api/cpp/rtos.html>`_.

Task notifications are a powerful new feature in PROS 3 which allows direct-to-task
synchronization. Each task has a 32-bit notification value. Each task can block on its own
notification (wait for it to become non-zero) and any task can update the notification value.
Task notifications have a broad range of applications, are simple to use, and have significant
memory and speed advantages when compared to traditional semaphore-based synchronization
mechanisms.

The simplest application of task notifications does not care about the task notification value:

.. tabs::
    .. group-tab:: C++
        .. highlight:: cpp
        .. code-block:: cpp
            :linenos:

            void opcontrol() {
                pros::Task my_task{ [] {
                    while (pros::Task::notify_take(true, TIMEOUT_MAX)) {
                        std::cout << "I was unblocked!" << std::endl;
                    }
                } };

                pros::Controller master{ pros::E_CONTROLLER_MASTER };
                while (true) {
                    if (master.get_digital(pros::E_CONTROLLER_DIGITAL_L1)) {
                        my_task.notify();
                    }
                    pros::delay(20);
                }
            }

    .. tab:: C
        .. highlight:: c
        .. code-block:: c
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
                    task_delay(20);
                }
            }

Sending a notification increments the value of the notification bits, so you may use task
notifications as counters instead of just zero/nonzero boolean flags as in the example above.
To this end, ``pros::Task::notify_take`` and ``task_notify_take`` return the value of the 
notification bits, and their first argument can be used to reset the count back to zero if 
``true`` or continue counting if ``false``. For more info, see the `C API <../../api/c/rtos.html>`_
and `C++ API <../../api/cpp/rtos.html>`_ documentation for tasks.


Advanced task lifecycle control
-------------------------------

As mentioned above, task notifications are an extremely powerful tool once you get to know them
better. One group of use-cases in which task notifications are especially useful is controlling
the lifecycle of tasks: how they start, how they end, how they can be paused and resumed.

There are a set of functions already that can control tasks:

- ``pros::Task::remove``/``task_remove`` for deleting tasks
- ``pros::Task::suspend``/``task_suspend`` for pausing tasks
- ``pros::Task::resume``/``task_resume`` for resuming paused tasks
  
However, these functions have some major caveats. A chief example is that you do not get to
control *when* the task is removed, paused, etc. The most common side-effect of this lack
of control can be seen when you pause or remove a task immediately after the task has sent
a command to, for example, a motor. In these cases, the motor will continue operating per
the last instruction which can lead to unpredictable behavior. Of course, you could mitigate
this by ensuring all your motors are turned off after pausing or removing a task, but this
makes those operations clunky when all you wanted was to stop or pause a task---something that
should be straightforward.

Another tricky situation is when you have task synchronization, e.g. using mutexes. If you
remove a task while it holds a mutex, there is no way to then release that mutex, and the
rest of your program is deadlocked. Similar situations arise when you have dynamically
allocated memory: there is no straightforward way to make sure resources are freed when 
a task is removed mid-operation.

Solutions to all of these problems can be found in the use of task notifications. Instead of
one-sidedly controlling the operation of a task externally, task notifications allow you to
make tasks aware of such external signals and decide for themselves how to handle their own
lifecycles and operations.

Delaying the start of a task
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Sometimes it may be desirable to control when a task begins, instead of allowing it to start
immediately upon creation. Aside from using global flags, there aren't really any other ways
to do this except task notifications.

.. tabs::
    .. group-tab:: C++
        .. highlight:: cpp
        .. code-block:: cpp
            :linenos:

            void opcontrol() {
                pros::Task delayed_start_task{ [] {
                    // block this task until signalled to begin
                    while (pros::Task::notify_take(true, TIMEOUT_MAX)) ;

                    while (true) {
                        do_task_thing();
                        do_another_task_thing();
                        pros::delay(20);
                    }
                } };

                pros::Controller master{ pros::E_CONTROLLER_MASTER };
                pros::Motor left_motor{ LEFT_MOTOR_PORT };
                pros::Motor right_motor{ RIGHT_MOTOR_PORT };
                while (true) {
                    // start the task when the A button is pressed
                    if (master.get_digital_new_press(pros::E_CONTROLLER_DIGITAL_A)) {
                        delayed_start_task.notify();
                    }

                    left_motor.move(master.get_analog(pros::E_CONTROLLER_ANALOG_LEFT_Y));
                    right_motor.move(master.get_analog(pros::E_CONTROLLER_ANALOG_RIGHT_Y));

                    pros::delay(20);
                }
            }

    .. group-tab:: C
        .. highlight:: c
        .. code-block:: c
            :linenos:

            void delayed_start_task_fn(void*) {
                while (task_notify_take(true, TIMEOUT_MAX)) ;

                while (true) {
                    do_task_thing();
                    do_another_task_thing();
                    task_delay(20);
                }
            }

            void opcontrol() {
                task_t delayed_start = task_create(delayed_start_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                                                   TASK_STACK_DEPTH_DEFAULT, "delayed start task");

                while (true) {
                    if (controller_get_digital_new_press(E_CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_A)) {
                        task_notify(delayed_start_task);
                    }

                    motor_move(LEFT_MOTOR_PORT,  controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
                    motor_move(RIGHT_MOTOR_PORT, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_RIGHT_Y));

                    task_delay(20);
                }
            }

Ending tasks cleanly
^^^^^^^^^^^^^^^^^^^^

Often you may find that tasks you start in autonomous continue operating during opcontrol, causing
issues when driving the robot. There are a few different ways to mitigate this issue, but one of the
cleanest and most direct ways involves task notifications.

.. tabs::
    .. group-tab:: C++
        .. highlight:: cpp
        .. code-block:: cpp
            :linenos:

            pros::Task drive_task;
            pros::Task lift_task;

            void autonomous() {
                drive_task = pros::Task{ [] {
                    pros::Motor left_motor{ LEFT_MOTOR_PORT };
                    pros::Motor right_motor{ RIGHT_MOTOR_PORT };

                    // while the notification value remains zero, continue
                    // the task code
                    while (!pros::Task::notify_take(true, 20)) {
                        // run the task routine
                        left_motor.move(127);
                        right_motor.move(127);

                        // note that there is no need for a delay here because
                        // notify_take blocks for up to 20ms every loop while
                        // waiting for a notification
                    }

                    // here you can do any cleanup necessary before exiting the
                    // task, e.g. releasing mutexes, freeing dynamically allocated
                    // memory, etc.
                } };

                // details omitted for brevity
                lift_task = pros::Task{ lift_function };

                while (true) {
                    pros::delay(20);
                }
            }

            void opcontrol() {
                // send a signal to the drive and lift tasks so we can operate
                // the robot manually now
                drive_task.notify();
                lift_task.notify();

                pros::Controller master{ pros::E_CONTROLLER_MASTER };
                pros::Motor left_motor{ LEFT_MOTOR_PORT };
                pros::Motor right_motor{ RIGHT_MOTOR_PORT };
                while (true) {
                    left_motor.move(master.get_analog(pros::E_CONTROLLER_ANALOG_LEFT_Y));
                    right_motor.move(master.get_analog(pros::E_CONTROLLER_ANALOG_RIGHT_Y));

                    pros::delay(20);
                }
            }
    
    .. group-tab:: C
        .. highlight:: c
        .. code-block:: c
            :linenos:

            task_t drive_task;
            task_t lift_task;

            void drive_function(void*) {
                // while the notification value remains zero, continue
                // the task code
                while (!task_notify_take(true, 20)) {
                    // run the task routine
                    motor_move(LEFT_MOTOR_PORT,  127);
                    motor_move(RIGHT_MOTOR_PORT, 127);

                    // note that there is no need for a delay here because
                    // notify_take blocks for up to 20ms every loop while
                    // waiting for a notification
                }

                // here you can do any cleanup necessary before exiting the
                // task, e.g. releasing mutexes, freeing dynamically allocated
                // memory, etc.
            }

            // details omitted for brevity
            void lift_function(void*);

            void autonomous() {
                drive_task = task_create(drive_function, NULL, TASK_PRIORITY_DEFAULT,
                                         TASK_STACK_DEPTH_DEFAULT, "drive task");
                lift_task  = task_create(lift_function, NULL, TASK_PRIORITY_DEFAULT,
                                         TASK_STACK_DEPTH_DEFAULT, "lift task");
                
                while (true) {
                    task_delay(20);
                }
            }

            void opcontrol() {
                // send a signal to the drive and lift tasks so we can operate
                // the robot manually now
                task_notify(drive_task);
                task_notify(lift_task);

                while (true) {
                    motor_move(LEFT_MOTOR_PORT,  controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
                    motor_move(RIGHT_MOTOR_PORT, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_RIGHT_Y));

                    task_delay(20);
                }
            }

Pausing and resuming tasks
^^^^^^^^^^^^^^^^^^^^^^^^^^

Another common use-case is pausing and resuming tasks at will.

.. tabs::
    .. group-tab:: C++
        .. highlight:: cpp
        .. code-block:: cpp
            :linenos:

            void opcontrol() {
                pros::Task automatic_grab_task{ [] {
                    pros::Distance sensor{ DISTANCE_SENSOR_PORT };
                    pros::ADIDigitalOut claw{ CLAW_ADI_PORT };

                    bool should_run = true;

                    while (true) {
                        // block for up to 20ms waiting for a notification and clear the value
                        // when a notification is received
                        if (pros::Task::notify_take(true, 20)) {
                            // if a notification was received, toggle the state of this task
                            should_run = !should_run;
                        }

                        // only run task code if state is true
                        if (should_run) {
                            if (sensor.get_distance() < CLAW_DETECTION_THRESHOLD) {
                                claw.set_value(true);
                            }
                        }

                        // no need to delay here because the call to notify_take blocks
                    }
                } };

                pros::Controller master{ pros::E_CONTROLLER_MASTER };
                pros::Motor left_motor{ LEFT_MOTOR_PORT };
                pros::Motor right_motor{ RIGHT_MOTOR_PORT };
                while (true) {
                    // pause or resume the automatic grabber when the A button is pressed
                    if (master.get_digital_new_press(pros::E_CONTROLLER_DIGITAL_A)) {
                        automatic_grab_task.notify();
                    }

                    left_motor.move(master.get_analog(pros::E_CONTROLLER_ANALOG_LEFT_Y));
                    right_motor.move(master.get_analog(pros::E_CONTROLLER_ANALOG_RIGHT_Y));

                    pros::delay(20);
                }
            }

    .. group-tab:: C
        .. highlight:: c
        .. code-block:: c
            :linenos:

            void automatic_grab_task_fn(void*) {
                bool should_run = true;

                while (true) {
                    if (task_notify_take(true, 20)) {
                        should_run = !should_run;
                    }

                    if (should_run) {
                        if (distance_get(DISTANCE_SENSOR_PORT) < CLAW_DETECTION_THRESHOLD) {
                            adi_digital_write(CLAW_ADI_PORT, true);
                        }
                    }
                }
            }

            void opcontrol() {
                task_t automatic_grab_task = task_create(automatic_grab_task_fn, NULL, TASK_PRIORITY_DEFAULT,
                                                         TASK_STACK_DEPTH_DEFAULT, "automatic grab task");

                while (true) {
                    if (controller_get_digital_new_press(E_CONTROLLER_MASTER, E_CONTROLLER_DIGITAL_A)) {
                        task_notify(automatic_grab_task);
                    }

                    motor_move(LEFT_MOTOR_PORT,  controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y));
                    motor_move(RIGHT_MOTOR_PORT, controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_RIGHT_Y));

                    task_delay(20);
                }
            }
