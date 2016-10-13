---
title: Common Issues
---

## Compile-Time Issues

+ `undefined reference to ...` or `implicit declaration of function ...`:

  A function name is spelled incorrectly, or the function was incorrectly declared in a header file.

  Custom headers must be included in `main.h` or in the file in which they are used.

+ `format ... expects argument of type ..., but argument has type ...`:

  The value provided to a function like [`printf`](../api/#printf) or [`lcdPrint`](../api/#lcdPrint) does not match the expected type inferred from the format string. Some instances of this warning can be safely ignored, but crashes can occur if types `double` or `long long` are mixed with other types.

+ `assignment makes pointer from integer without a cast`:

  Typically caused when a C pointer has the wrong number of asterisks to [dereference](http://stackoverflow.com/a/4955297/3681958) it, or when assigning a constant to `pointer` (instead of `*pointer`).

## Run-Time Issues

+ __Vex LCD updates very slowly or is "frozen"__:

  A task is not waiting using [`delay`](../api/#delay).

  From the kernel's perspective, updating the LCD is usually less important than how well the robot is running, so PROS prioritizes user tasks over the LCD.

  The LCD is only updated if all other tasks are waiting.

+ __Some tasks are running, others are not__:

  A task is not waiting using [`delay`](../api/#delay).

  Tasks of higher or equal priority to the blocking task will still run, lower priority tasks will not.

+ __Neither autonomous nor driver control code starts__:

  The [`initialize`](../api/#initialize) function may still be running.

  Some tasks such as [`gyroInit`](../api/#gyroInit) or [`analogCalibrate`](../api/#analogCalibrate) take time.

  If the [`initialize`](../api/#initialize) function implements some type of loop or autonomous selection routine, verify that it actually has a means of ending.

+ __Code restarts unexpectedly__:

  A run-time error has caused the program to crash.

  [Debugging](./debugging/) may reveal the cause of the error. Examine any newly added code for possible logical errors.

  Some common error messages include:

    + `Segmentation Fault`:

      Indicates that an invalid C pointer has been used.

      Check for confusion between pointers and regular variables and that an invalid pointer has not been passed to a PROS API function.

    + `Stack Overflow`:

      Often indicates infinite recursion, or that the stack size for a custom task is too small.

      Calling many layers of functions and declaring large local variables can require large amounts of space on the stack.

      If this error occurs in a default task like [`autonomous`](../api/#autonomous), consider changing code to reduce the stack requirements, or creating a new task with a larger stack size using [`taskCreate`](../api/#taskCreate) to handle large jobs.

      Large arrays declared inside functions can usually be declared globally to alleviate pressure on stack space.

    + `System Task Failure`:

      Too many tasks were running for the system to start a new one.

      Disable or merge unnecessary tasks to eliminate this error.

+ __Cortex blinking red light after upload__:

  Turn the Cortex microcontroller off and on again.

  This usually resolves the problem, and it is generally good practice to re-initialize the robot to simulate conditions at most competitions.

  If the error persists, see the "__Code restarts unexpectedly__" section above.

+ __[`printf`](../api/#printf) doesn't work!!1!__:

  [`printf`](..api/#printf) prints information over a serial connection (see [Debugging](./debugging/)), not to the Vex LCD.

  To print to the LCD, use [`lcdPrint`](../api/#lcdPrint) instead.
