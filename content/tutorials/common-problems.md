---
title: Common Issues
---

## Compile-Time Issues

+ __`undefined reference to ...` or `implicit declaration of function ...`__: <br/>

    A function name is spelled incorrectly, or the function was incorrectly declared in a header file.<br/>

    Custom headers must be included in `main.h` or in the file in which they are used.

+ __`format ... expects argument of type ..., but argument has type ...`__: <br/>

    The value provided to a function like [`printf`](/api/#printf) or [`lcdPrint`](/api/#lcdPrint) does not match the expected type inferred from the format string. Some instances of this warning can be safely ignored, but crashes can occur if types `double` or `long long` are mixed with other types.

+ __`assignment makes pointer from integer without a cast`__: <br/>

    Typically caused when a C pointer has the wrong number of asterisks to [dereference](http://stackoverflow.com/a/4955297/3681958) it, or when assigning a constant to `pointer` (instead of `*pointer`).

## Run-Time Issues

+ __Vex LCD updates very slowly or is "frozen"__: <br/>

    A task is not waiting using [`delay`](/api/#delay).<br/>

    From the kernel's perspective, updating the LCD is usually less important than how well the robot is running, so PROS prioritizes user tasks over the LCD.<br/>

    The LCD is only updated if all other tasks are waiting.

+ __Some tasks are running, others are not__: <br/>

    A task is not waiting using [`delay`](/api/#delay).<br/>

    Tasks of higher or equal priority to the blocking task will still run, lower priority tasks will not.

+ __Neither autonomous nor driver control code starts__: <br/>

    The [`initialize`](/api/#initialize) function may still be running.<br/>

    Some tasks such as [`gyroInit`](/api/#gyroInit) or [`analogCalibrate`](/api/#analogCalibrate) take time.<br/>

    If the [`initialize`](/api/#initialize) function implements some type of loop or autonomous selection routine, verify that it actually has a means of ending.

+ __Code restarts unexpectedly__: <br/>

    A run-time error has caused the program to crash.<br/>

    [Debugging](/tutorials/debugging/) may reveal the cause of the error. Examine any newly added code for possible logical errors.<br/>

    Some common error messages include:

  + `Segmentation Fault`: <br/>

    Indicates that an invalid C pointer has been used.<br/>

    Check for confusion between pointers and regular variables and that an invalid pointer has not been passed to a PROS API function.

  + `Stack Overflow`: <br/>

    Often indicates infinite recursion, or that the stack size for a custom task is too small.<br/>

    Calling many layers of functions and declaring large local variables can require large amounts of space on the stack.<br/>

    If this error occurs in a default task like [`autonomous`](/api/#autonomous), consider changing code to reduce the stack requirements, or creating a new task with a larger stack size using [`taskCreate`](/api/#taskCreate) to handle large jobs.<br/>

    Large arrays declared inside functions can usually be declared globally to alleviate pressure on stack space.

  + `System Task Failure`: <br/>

    Too many tasks were running for the system to start a new one.<br/>

    Disable or merge unnecessary tasks to eliminate this error.

+ __Cortex blinking red light after upload__: <br/>

    Turn the Cortex microcontroller off and on again.<br/>

    This usually resolves the problem, and it is generally good practice to re-initialize the robot to simulate conditions at most competitions.<br/>

    If the error persists, see the "__Code restarts unexpectedly__" section above.<br/>

+ __[`printf`](/api/#printf) doesn't work!!1!__: <br/>

    [`printf`](/api/#printf) prints information over a serial connection (see [Debugging](/tutorials/debugging/)), not to the Vex LCD.<br/>

    To print to the LCD, use [`lcdPrint`](/api/#lcdPrint) instead.
