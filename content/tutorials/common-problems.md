---
title: FAQ & Common Issues
---

## PROS Coding FAQ

### Build-time Problems
  * `undefined reference to ....` or `implicit declaration of function ....:` A function name is not spelled correctly, or the function was not correctly declared in a header file. Custom headers must be included in main.h or in the file in which they are used; declarations do not appear like magic.
  * `format .... expects argument of type .... but argument has type ....:` The value provided to a function like [printf()](../../api#printf) or [lcdPrint()](../../api#lcdPrint) does not match the expected type inferred from the format string. Some instances of this warning can be ignored, but crashes can occur if double or long long is mixed with another type.
  *  `assignment makes pointer from integer without a cast:` Typically caused by a C pointer having the wrong number of asterisks to dereference it, or when accidentally assigning a constant to pointer (instead of to \*pointer).

### Run-time Problems
  * **VEX LCD updates very slowly or is "frozen"**: A task is not waiting using [delay()](../../api#delay). The LCD usually is less important than how well the robot is running, so PROS prioritizes user tasks over the LCD. Only if all other tasks are waiting is the LCD updated.
  * **Some tasks are running, others are not**: A task is not waiting using [delay()](../../api#delay). Higher or equal priority tasks will still run, but lower priority tasks will not.
  * **Neither autonomous nor driver control code starts**: The initialize() function may be still running. Some tasks such as [gyroInit()](../../api#gyroInit) or [analogCalibrate()](../../api#analogCalibrate) take time. If the initialize() function implements some type of loop or autonomous selection routine, verify that it actually has a means of ending.
  * **Code restarts unexpectedly**: A run-time error has crashed the program. Using a terminal application (see debugging) may reveal the cause of the error. Examine any newly added code for possible problems that may occur at run time.
     * `Segmantation Fault` indicates that an invalid C pointer has been used. Check for confusion between pointers and regular variables, or that an invalid pointer has not been passed to a PROS API function.
     * `Stack Overflow` often indicates infinite recursion, or that the stack size for a custom task is too small. Calling layers of functions and declaring large local variables can require large amounts of space on the stack. If this error occurs in a default task like autonomous(), consider changing code to reduce the stack requirements, or creating a new task with a larger stack using [taskCreate()](../../api#taskCreate) to handle large jobs. Large arrays declared inside functions can be declared globally to alleviate pressure on stack space.
     * `System Task Failure` means that too many tasks were running for the system to start a new one. Disable or merge unnecessary tasks to eliminate this error.
  * **Red blinking ROBOT light after download**: Turn the Cortex Microcontroller off and on again. This usually resolves the problem, and is good practice to re-initialize the robot in a manner similar to what happens at most competitions. If the error persists, see "Code restarts unexpectedly".
  * **printf() is not working!**: [printf()](../../api#printf) prints to the PC over the debug terminal. See the section on [debugging](../debugging). [printf()](../../api#printf) will not print to the VEX LCD; use [lcdPrint()](../../api#lcdPrint) instead. If VEXnet wireless is in use, press the space bar in the debug terminal to reveal the output.
