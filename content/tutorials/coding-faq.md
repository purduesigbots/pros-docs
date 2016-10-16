---
title: Coding FAQ
---

## Compile-Time Issues {#compile-time}
 * `undefined reference to ...` or `implicit declaration of function ...`: <br/>
   A function name is spelled incorrectly, or the function was incorrectly declared in a header file. Custom headers must be included in `main.h` or in the file in which they are used.

 * `format ... expects argument of type ..., but argument has type ...`: <br/>
    The value provided to a function like [`printf()`](/api/#printf) or [`lcdPrint()`](/api/#lcdPrint) does not match the expected type inferred from the format string. Some instances of this warning can be safely ignored, but crashes can occur if types `double` or `long long` are mixed with other types.

 * `assignment makes pointer from integer without a cast`: <br/>
    Typically caused when a C pointer has the wrong number of asterisks to [dereference](http://stackoverflow.com/a/4955297/3681958) it, or when assigning a constant to `pointer` (instead of `*pointer`).

## Run-Time Issues
 * **Some tasks are running, others are not:** <br/>
   A task is not waiting using [`delay()`](/api/#delay) or [`taskDelayUntil()`](/api/#taskDelayUntil). Due to the fact that PROS utilizes a priority based non-preemptive scheduler, tasks of higher or equal priority to the blocking task will still run while lower priority tasks will not. This scenario is also known as [starvation](https://en.wikipedia.org/wiki/Starvation_\(computer_science\)).

 * **Vex LCD updates very slowly or is "frozen":** <br/>
    A task is not waiting using [`delay()`](/api/#delay) or [`taskDelayUntil()`](/api/#taskDelayUntil). From the kernel's perspective, updating the LCD is usually less important than how well the robot is running, so PROS prioritizes user tasks over the LCD. <br/><br/>

    The LCD is only updated if all other tasks are waiting.

 * **Neither autonomous nor driver control code starts:** <br/>
    The `initialize()` function may still be running. Some tasks such as [`gyroInit()`](/api/#gyroInit) or [`analogCalibrate()`](/api/#analogCalibrate) take time.<br/><br/>

    If the `initialize()` function implements some type of loop or autonomous selection routine, verify that it actually has a means of ending.

 * **Code restarts unexpectedly:** <br/>
    A run-time error has caused the program to crash. [Debugging](/tutorials/debugging/) may reveal the cause of the error. Examine any newly added code for possible logical errors. Some common error messages include:

   * **Segmentation Fault:** <br/>
    Indicates that an invalid C pointer has been used. Check for confusion between pointers and regular variables and that an invalid pointer has not been passed to a PROS API function.

   * **Stack Overflow:** <br/>
    Often indicates infinite recursion, or that the stack size for a custom task is too small. Calling many layers of functions and declaring large local variables can require large amounts of space on the stack. If this error occurs in a default task like `autonomous()`, consider changing code to reduce the stack requirements, or creating a new task with a larger stack size using [`taskCreate()`](/api/#taskCreate) to handle large jobs. Large arrays declared inside functions can usually be declared globally to alleviate pressure on stack space.

   * **System Task Failure:** <br/>
    Too many tasks were running for the system to start a new one. Disable or merge unnecessary tasks to eliminate this error.

 * **Cortex blinking red light after upload:** <br/>
    Turn the Cortex microcontroller off and on again. This usually resolves the problem, and it is generally good practice to re-initialize the robot to simulate conditions at most competitions. If the error persists, see the "**Code restarts unexpectedly**" section above.<br/>

 * **[`printf()`](/api/#printf) doesn't work**: <br/>
    [`printf()`](/api/#printf) prints information over a serial connection (see [Debugging](/tutorials/debugging/)), not to the Vex LCD. To print to the LCD, use [`lcdPrint()`](/api/#lcdPrint) instead.
