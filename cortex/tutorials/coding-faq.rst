==========
Coding FAQ
==========

Compile-Time Issues
===================

 * ``undefined reference to ...`` or ``implicit declaration of function ...``:
    A function name is spelled incorrectly, or the function was incorrectly
    declared in a header file. Custom headers must be included in ``main.h`` or
    in the file in which they are used.

 * ``format ... expects argument of type ..., but argument has type ...```:
    The value provided to a function like `printf <http://www.cplusplus.com/reference/cstdio/printf/>`_
    or `lcdPrint <../api/index.html#lcdPrint>`_ does not match the expected
    type inferred from the format string. Some instances of this warning can be
    safely ignored, but crashes can occur if types ``double`` or ``long long`` are
    mixed with other types.

 * ``assignment makes pointer from integer without a cast``:
    Typically caused when a C pointer has the wrong number of asterisks to
    `dereference <http://stackoverflow.com/a/4955297/3681958>`_ it, or when
    assigning a constant to ``pointer`` (instead of ``*pointer``).

Run-Time Issues
===============

 * **Some tasks are running, others are not:**
    A task is not waiting using `delay <../api/index.html#delay>`_ or
    `taskDelayUntil <../api/index.html#taskDelayUntil>`_. Due to the fact that
    PROS utilizes a priority based non-preemptive scheduler, tasks of higher or
    equal priority to the blocking task will still run while lower priority tasks
    will not. This scenario is also known as
    `starvation <https://en.wikipedia.org/wiki/Starvation_(computer_science)>`_.
    See `Tasks/Multithreading <../tutorials/multitasking>`_ for more information.

 * **VEX LCD updates very slowly or is "frozen":**
    A task is not waiting using `delay <../api/index.html#delay>`_ or
    `taskDelayUntil <../api/index.html#taskDelayUntil>`_. From the kernel's
    perspective, updating the LCD is usually less important than how well the
    robot is running, so PROS prioritizes user tasks over the LCD.

    The LCD is only updated if all other tasks are waiting.

 * **Neither autonomous nor driver control code starts:**
    The ``initialize()`` function may still be running. Some tasks such as
    `analogCalibrate <../api/index.html#analogCalibrate>`_ take time.

    If the ``initialize()`` function implements some type of loop or autonomous
    selection routine, verify that it actually has a means of ending.

 * **Code restarts unexpectedly:**
    A run-time error has caused the program to crash.
    `Debugging <../tutorials/debugging>`_ may reveal the cause of the error.
    Examine any newly added code for possible logical errors. Some common error
    messages include:

   * **Segmentation Fault:**
      Indicates that an invalid C pointer has been used. Check for confusion
      between pointers and regular variables and that an invalid pointer has not
      been passed to a PROS API function.

   * **Stack Overflow:**
      Often indicates infinite recursion, or that the stack size for a custom task
      is too small. Calling many layers of functions and declaring large local
      variables can require large amounts of space on the stack. If this error
      occurs in a default task like ``autonomous()``, consider changing code to
      reduce the stack requirements, or creating a new task with a larger stack
      size using `taskCreate <../api/index.html#taskCreate>`_ to handle large jobs.
      Large arrays declared inside functions can usually be declared globally to
      alleviate pressure on stack space.

   * **System Task Failure:**
      Too many tasks were running for the system to start a new one. Disable or
      merge unnecessary tasks to eliminate this error.

 * **Cortex blinking red light after upload:**
    Turn the Cortex microcontroller off and on again. This usually resolves the
    problem, and it is generally good practice to re-initialize the robot to
    simulate conditions at most competitions. If the error persists, see the
    "**Code restarts unexpectedly**" section above.

 * `printf <printf_>`_ **doesn't work**:
    `printf <http://www.cplusplus.com/reference/cstdio/printf/>`_ prints
    information over a serial connection (`Debugging <../tutorials/debugging>`_),
    not to the VEX LCD. To print to the LCD, use `lcdPrint <../api/index.html#lcdPrint>`_
    instead.

.. _printf: http://www.cplusplus.com/reference/cstdio/printf/
