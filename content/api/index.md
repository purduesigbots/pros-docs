This document serves as a quick reference for API.h functions.

# Functions

## analogCalibrate {#analogCalibrate}
```
int analogCalibrate ( unsigned char  channel )
```
Calibrates the analog sensor on the specified channel.

This method assumes that the true sensor value is not actively changing at this time and computes an average from approximately 500 samples, 1 ms apart, for a 0.5 s period of calibration. The average value thus calculated is returned and stored for later calls to the analogReadCalibrated() and analogReadCalibratedHR() functions. These functions will return the difference between this value and the current sensor value when called.

Do not use this function in initializeIO(), or when the sensor value might be unstable (gyro rotation, accelerometer movement).

This function may not work properly if the VEX Cortex is tethered to a PC using the orange USB A to A cable and has no VEX 7.2V Battery connected and powered on, as the VEX Battery provides power to sensors.

| Parameters | |
| ---:|:--- |
| `channel` | the channel to calibrate from 1-8 |

**Returns** the average sensor value computed by this function


## analogRead {#analogRead}
```
int analogRead ( unsigned char  channel )
```
Reads an analog input channel and returns the 12-bit value.

The value returned is undefined if the analog pin has been switched to a different mode. This function is Wiring-compatible with the exception of the larger output range. The meaning of the returned value varies depending on the sensor attached.

This function may not work properly if the VEX Cortex is tethered to a PC using the orange USB A to A cable and has no VEX 7.2V Battery connected and powered on, as the VEX Battery provides power to sensors.

| Parameters | |
| ---:|:--- |
| `channel` | the channel to read from 1-8 |

**Returns** the analog sensor value, where a value of 0 reflects an input voltage of nearly 0 V and a value of 4095 reflects an input voltage of nearly 5 V


## analogReadCalibrated {#analogReadCalibrated}
```
int analogReadCalibrated ( unsigned char  channel )
```
Reads the calibrated value of an analog input channel.

The [analogCalibrate()]({{< relref "#analogCalibrate" >}}) function must be run first on that channel. This function is inappropriate for sensor values intended for integration, as round-off error can accumulate causing drift over time. Use [analogReadCalibratedHR()]({{< relref "#analogReadCalibratedHR" >}}) instead.

This function may not work properly if the VEX Cortex is tethered to a PC using the orange USB A to A cable and has no VEX 7.2V Battery connected and powered on, as the VEX Battery provides power to sensors.

| Parameters | |
| ---:|:--- |
| `channel` | the channel to read from 1-8 |

**Returns** the difference of the sensor value from its calibrated default value from -4095 to 4095


## analogReadCalibratedHR {#analogReadCalibratedHR}
```
int analogReadCalibratedHR ( unsigned char  channel )
```
Reads the calibrated value of an analog input channel 1-8 with enhanced precision.

The [analogCalibrate()]({{< relref "#analogCalibrate" >}}) function must be run first. This is intended for integrated sensor values such as gyros and accelerometers to reduce drift due to round-off, and should not be used on a sensor such as a line tracker or potentiometer.

The value returned actually has 16 bits of "precision", even though the ADC only reads 12 bits, so that errors induced by the average value being between two values come out in the wash when integrated over time. Think of the value as the true value times 16.

This function may not work properly if the VEX Cortex is tethered to a PC using the orange USB A to A cable and has no VEX 7.2V Battery connected and powered on, as the VEX Battery provides power to sensors.

| Parameters | |
| ---:|:--- |
| `channel` | the channel to read from 1-8 |

**Returns** the difference of the sensor value from its calibrated default from -16384 to 16384


## delay {#delay}
```
void delay ( const unsigned long  time)
```
Wiring-compatible alias of [taskDelay()]({{< relref "#taskDelay" >}})

| Parameters | |
| ---:|:--- |
| `time` | the duration of the delay in milliseconds (1000 milliseconds per second) |


## delayMicroseconds {#delayMicroseconds}
```
void delayMicroseconds ( const unsigned long us )
```
Wait for approximately the given number of microseconds.

The method used for delaying this length of time may vary depending on the argument. The current task will always be delayed by at least the specified period, but possibly much more depending on CPU load. In general, this function is less reliable than [delay()]({{< relref "#delay" >}}). Using this function in a loop may hog processing time from other tasks.

| Parameters | |
| ---:|:--- |
| `us` | the duration of the delay in microseconds (1,000,000 microseconds per second) |


## digitalRead {#digitalRead}
```
bool digitalRead ( unsigned char pin )
```
Gets the digital value (1 or 0) of a pin configured as a digital input.

If the pin is configured as some other mode, the digital value which reflects the current state of the pin is returned, which may or may not differ from the currently set value. The return value is undefined for pins configured as Analog inputs, or for ports in use by a Communications interface. This function is Wiring-compatible.

This function may not work properly if the VEX Cortex is tethered to a PC using the orange USB A to A cable and has no VEX 7.2V Battery connected and powered on, as the VEX Battery provides power to sensors.

| Parameters | |
| ---:|:--- |
| `pin` | the pin to read from 1-26 |

**Returns** true if the pin is HIGH or false if it is LOW


## digitalWrite {#digitalWrite}
```
void digitalWrite ( unsigned char pin,
                    bool value
                  )
```
Sets the digital value (1 or 0) of a pin configured as a digital output.

If the pin is configured as some other mode, behavior is undefined. This function is Wiring-compatible.

| Parameters | |
| ---:|:--- |
| `pin` | the pin to read from 1-26 |
| `value` | an expression evaluating to "true" or "false" to set the output to HIGH or LOW respectively, or the constants HIGH or LOW themselves |


## encoderGet {#encoderGet}
```
int encoderGet ( Encoder enc )
```
Gets the number of ticks recorded by the encoder.

There are 360 ticks in one revolution.

| Parameters | |
| ---:|:--- |
| `enc` | the Encoder object from [encoderInit()]({{< relref "#encoderInit" >}}) to read |

**Returns** the signed and cumulative number of counts since the last start or reset

## encoderInit {#encoderInit}
```
int encoderInit ( unsigned char portTop,
                  unsigned char portBottom,
                  bool reverse
                )
```
Initializes and enables a quadrature encoder on two digital ports.

Neither the top port nor the bottom port can be digital port 10. NULL will be returned if either port is invalid or the encoder is already in use. Initializing an encoder implicitly resets its count.

| Parameters | |
| ---:|:--- |
| `portTop` | the "top" wire from the encoder sensor with the removable cover side UP |
| `portBottom` | the "bottom" wire from the encoder sensor |
| `reverse` | if "true", the sensor will count in the opposite direction |

**Returns** an Encoder object to be stored and used for later calls to encoder functions


## encoderReset {#encoderReset}
```
void encoderReset ( Encoder enc )
```
Resets the encoder to zero.

It is safe to use this method while an encoder is enabled. It is not necessary to call this method before stopping or starting an encoder.

| Parameters | |
| ---:|:--- |
| `enc` | the Encoder object from [encoderInit()]({{< relref "#encoderInit" >}}) to read |


## encoderShutdown {#encoderShutdown}
```
void encoderShutdown ( Encoder enc )
```
Stops and disables the encoder.

Encoders use processing power, so disabling unused encoders increases code performance. The encoder's count will be retained.

| Parameters | |
| ---:|:--- |
| `enc` | the Encoder object from [encoderInit()]({{< relref "#encoderInit" >}}) to read |


## fclose {#fclose}
```
void fclose( FILE * stream )
```
Closes the specified file descriptor.

This function does not work on communication ports; use [usartShutdown()]({{< relref "#usartShutdown" >}}) instead.

| Parameters | |
| ---:|:--- |
| `stream` | the file descriptor to close from [fopen()]({{< relref "#fopen" >}}) |


## fcount {#fcount}
```
void fcount ( FILE * stream )
```
Returns the number of characters that can be read without blocking (the number of characters available) from the specified stream.

This only works for communication ports and files in Read mode; for files in Write mode, 0 is always returned.

This function may underestimate, but will not overestimate, the number of characters which meet this criterion.

| Parameters | |
| ---:|:--- |
| `stream` | the stream to read (stdin, uart1, uart2, or an open file in Read mode) |

**Returns** the number of characters which meet this criterion; if this number cannot be determined, returns 0


## fdelete {#fdelete}
```
int fdelete ( const char * file )
```
Delete the specified file if it exists and is not currently open.

The file will actually be erased from memory on the next re-boot. A physical power cycle is required to purge deleted files and free their allocated space for new files to be written. Deleted files are still considered inaccessible to [fopen()]({{< relref "#fopen" >}}) in Read mode.

| Parameters | |
| ---:|:--- |
| `file` | the file name to erase |

**Returns** the number of characters which meet this criterion; if this number cannot be determined, returns 0


## feof {#feof}
```
int feof ( FILE * stream )
```
Checks to see if the specified stream is at its end.

This only works for communication ports and files in Read mode; for files in Write mode, 1 is always returned.

| Parameters | |
| ---:|:--- |
| `stream` | the stream to read (stdin, uart1, uart2, or an open file in Read mode) |

**Returns** 0 if the stream is not at EOF, or 1 otherwise.

## fflush {#fflush}
```
int fflush ( FILE * stream )
```
Flushes the data on the specified file channel open in Write mode.

This function has no effect on a communication port or a file in Read mode, as these streams are always flushed as quickly as possible by the kernel.

Successful completion of an fflush function on a file in Write mode cannot guarantee that the file is vaild until [fclose()]({{< relref "#fclose" >}}) is used on that file descriptor.

| Parameters | |
| ---:|:--- |
| `stream` | the channel to flush (an open file in Write mode) |

**Returns** 0 if the data was successfully flushed, EOF otherwise

## fgetc {#fgetc}
```
int fgetc ( FILE * stream )
```
Reads and returns one character from the specified stream, blocking until complete.

Do not use [fgetc()]({{< relref "#fgetc" >}}) on a VEX LCD port; deadlock may occur.

| Parameters | |
| ---:|:--- |
| `stream` | the stream to read (stdin, uart1, uart2, or an open file in Read mode) |

**Returns** the next character from 0 to 255, or -1 if no character can be read

## fgets {#fgets}
```
char * fgets ( char * str,
               int num,
               FILE * stream
             )
```
Reads a string from the specified stream, storing the characters into the memory at str.

Characters will be read until the specified limit is reached, a new line is found, or the end of file is reached.

If the stream is already at end of file (for files in Read mode), NULL will be returned; otherwise, at least one character will be read and stored into str.

| Parameters | |
| ---:|:--- |
| `str` | the location where the characters read will be stored |
| `num` | the maximum number of characters to store; at most (num - 1) characters will be read, with a null terminator ('\0') automatically appended |
| `stream` | the stream to read (stdin, uart1, uart2, or an open file in Read mode)

**Returns** str, or NULL if zero characters could be read


## fopen {#fopen}
```
FILE * fopen ( const char * file,
               const char * mode
             )
```
Opens the given file in the specified mode.

The file name is truncated to eight characters. Only four files can be in use simultaneously in any given time, with at most one of those files in Write mode. This function does not work on communication ports; use [usartInit()]({{< relref "#usartInit" >}}) instead.

mode can be "r" or "w". Due to the nature of the VEX Cortex memory, the "r+", "w+", and "a" modes are not supported by the file system.

Opening a file that does not exist in Read mode will fail and return NULL, but opening a new file in Write mode will create it if there is space. Opening a file that already exists in Write mode will destroy the contents and create a new blank file if space is available.

There are important considerations when using of the file system on the VEX Cortex. Reading from files is safe, but writing to files should only be performed when robot actuators have been stopped. PROS will attempt to continue to handle events during file writes, but most user tasks cannot execute during file writing. Powering down the VEX Cortex mid-write may cause file system corruption.

| Parameters | |
| ---:|:--- |
| `file` | the file name |
| `mode` | the file mode |

**Returns** a file descriptor pointing to the new file, or NULL if the file could not be opened


## fprint {#fprint}
```
void fprint ( const char * string,
              FILE * stream
            )
```
Prints the simple string to the specified stream.

This method is much, much faster than [fprintf()]({{< relref "#fprintf" >}}) and does not add a new line like [fputs()]({{< relref "#fputs" >}}). Do not use [fprint()]({{< relref "#fprint" >}}) on a VEX LCD port. Use [lcdSetText()]({{< relref "#lcdSetText" >}}) instead.

| Parameters | |
| ---:|:--- |
| `string` | the string to write |
| `stream` | the stream to write (stdout, uart1, uart2, or an open file in Write mode) |


## fprintf {#fprintf}
```
int fprintf ( FILE * stream,
              const char * formatString,
              ...
            )
```
Prints the formatted string to the specified output stream.

The specifiers supported by this minimalistic printf() function are:

 * %d: Signed integer in base 10 (int)
 * %u: Unsigned integer in base 10 (unsigned int)
 * %x, %X: Integer in base 16 (unsigned int, int)
 * %p: Pointer (void \*, int \*, ...)
 * %c: Character (char)
 * %s: Null-terminated string (char \*)
 * %%: Single literal percent sign
 * %f: Floating-point number

Specifiers can be modified with:

 * 0: Zero-pad, instead of space-pad
 * a.b: Make the field at least "a" characters wide. If "b" is specified for "%f", changes the number of digits after the decimal point
 * -: Left-align, instead of right-align
 * +: Always display the sign character (displays a leading "+" for positive numbers)
 * l: Ignored for compatibility

Invalid format specifiers, or mismatched parameters to specifiers, cause undefined behavior. Other characters are written out verbatim. Do not use [fprintf()]({{< relref "#fprintf" >}}) on a VEX LCD port. Use [lcdPrint()]({{< relref "#lcdPrint" >}}) instead.

| Parameters | |
| ---:|:--- |
| `stream` | the stream to write (stdout, uart1, uart2, or an open file in Write mode) |
| `formatString` | the format string as specified above |

**Returns** the number of characters written

## fputc {#fputc}
```
int fputc ( int value,
            FILE * stream
          )
```
Writes one character to the specified stream.

Do not use [fputc()]({{< relref "#fputc" >}}) on a VEX LCD port. Use [lcdSetText()]({{< relref "#lcdSetText" >}}) instead.

| Parameters | |
| ---:|:--- |
| `value` | the character to write (a value of type "char" can be used) |
| `stream` | the stream to write (stdout, uart1, uart2, or an open file in Write mode) |

**Returns** the character written


## fputs {#fputs}
```
int fputs ( const char * string,
            FILE * stream
          )
```
Behaves the same as the "fprint" function, and appends a trailing newline ("\n").

Do not use [fputs()]({{< relref "#fputs" >}}) on a VEX LCD port. Use [lcdSetText()]({{< relref "#lcdSetText" >}}) instead.

| Parameters | |
| ---:|:--- |
| `string` | the string to write |
| `stream` | the stream to write (stdout, uart1, uart2, or an open file in Write mode) |

**Returns** the number of characters written, excluding the new line


## fread {#fread}
```
size_t fread ( void * ptr,
               size_t size,
               size_t count,
               FILE * stream
             )
```
Reads data from a stream into memory.

If the memory at ptr cannot store (size * count) bytes, undefined behavior occurs.

| Parameters | |
| ---:|:--- |
| `ptr` | a pointer to where the data will be stored |
| `size` | 	the size of each data element to read in bytes |
| `count` | the number of data elements to read |
| `stream` | the stream to read (stdout, uart1, uart2, or an open file in Read mode) |

**Returns** the number of bytes successfully read


## fseek {#fseek}
```
int fseek ( FILE * stream,
            long int offset,
            int origin
          )
```
Seeks within a file open in Read mode.

This function will fail when used on a file in Write mode or on any communications port.

| Parameters | |
| ---:|:--- |
| `stream` | the stream to seek within |
| `offset` | the location within the stream to seek |
| `origin` | the reference location for offest: SEEK_CUR, SEEK_SET, or SEEK_END |

**Returns** 0 if the seek was successful, or 1 otherwise


## ftell {#ftell}
```
long int ftell ( FILE * stream )
```
Returns the current position of the stream.

This function works on files in either Read or Write mode, but will fail on communications ports.

| Parameters | |
| ---:|:--- |
| `stream` | the stream to check |

**Returns** the offset of the stream, or -1 if the offset could not be determined


## fwrite {#fwrite}
```
size_t fwrite ( const void * ptr,
                size_t size,
                size_t count,
                FILE * stream
              )
```
Writes data from memory to a stream.

Returns the number of bytes thus written.

If the memory at ptr is not as long as (size * count) bytes, undefined behavior occurs.

| Parameters | |
| ---:|:--- |
| `ptr` | a pointer to the data to write |
| `size` | the size of each data element to write in bytes |
| `count` | the number of data elements to write |
| `stream` | the stream to write (stdout, uart1, uart2 or an open file in Write mode) |

**Returns** the number of bytes successfully written

## getchar {#getchar}
```
int getchar ( )
```
Reads and returns one character from "stdin", which is the PC debug terminal.

**Returns** the next character from 0 to 255, or -1 if no character can be read


## gyroInit
```
Gyro gyroInit ( unsigned char port,
                unsigned short multiplier
              )
```
Initializes and enables a gyro on an analog port.

NULL will be returned if the port is invalid or the gyro is already in use. Initializing a gyro implicitly calibrates it and resets its count. Do not move the robot while the gyro is being calibrated. It is suggested to call this function in initialize() and to place the robot in its final position before powering it on.

The multiplier parameter can tune the gyro to adapt to specific sensors. The default value at this time is 196; higher values will increase the number of degrees reported for a fixed actual rotation, while lower values will decrease the number of degrees reported. If your robot is consistently turning too far, increase the multiplier, and if it is not turning far enough, decrease the multiplier.

| Parameters | |
| ---:|:--- |
| `port` | the analog port to use from 1-8 |
| `multiplier` | an optional constant to tune the gyro readings; use 0 for the default value |

**Returns** a Gyro object to be stored and used for later calls to gyro functions


## ioSetInterrupt {#ioSetInterrupt}
```
void ioSetInterrupt( unsigned char    pin,
                     unsigned char    edges,
                     InterruptHandler handler
                   )
```
Sets up an interrupt to occur on the specified pin, and resets any counters or timers associated with the pin.

Each time the specified change occurs, the function pointer passed in will be called with the pin that changed as an argument. Enabling pin-change interrupts consumes processing time, so it is best to only enable necessary interrupts and to keep the InterruptHandler function short. Pin change interrupts can only be enabled on pins 1-9 and 11-12.

Do not use API functions such as delay() inside the handler function, as the function will run in an ISR where the scheduler is paused and no other interrupts can execute. It is best to quickly update some state and allow a task to perform the work.

Do not use this function on pins that are also being used by the built-in ultrasonic or shaft encoder drivers, or on pins which have been switched to output mode.

| Parameters | |
| ---:|:--- |
| `pin`| the pin on which to enable interrupts from 1-9,11-12 |
| `edges`| one of INTERRUPT_EDGE_RISING, INTERRUPT_EDGE_FALLING, or INTERRUPT_EDGE_BOTH |
| `handler`| the function to call when the condition is satisfied|


## Macros

### #define ACCEL_X  5
Analog axis for the X acceleration from the VEX joystick.


### #define ACCEL_Y  6
Analog axis for the Y acceleration from the VEX Joystick.

### #define 	BOARD_NR_ADC_PINS   8
There are 8 available analog I/O on the Cortex.

### #define 	BOARD_NR_GPIO_PINS   27
There are 27 available I/O on the Cortex that can be used for digital communication.

This excludes the crystal ports but includes the Communications, Speaker, and Analog ports.

The motor ports are not on the Cortex and are thus excluded from this count. Pin 0 is the Speaker port, pins 1-12 are the standard Digital I/O, 13-20 are the Analog I/O, 21+22 are UART1, 23+24 are UART2, and 25+26 are the I2C port.

### #define 	EOF   ((int)-1)
EOF is a value evaluating to -1.

### #define HIGH   1
Used for digitalWrite() to specify a logic HIGH state to output.

In reality, using any non-zero expression or "true" will work to set a pin to HIGH.

### #define 	IME_ADDR_MAX   0x1F
IME addresses end at 0x1F.

Actually using more than 10 (address 0x1A) encoders will cause unreliable communications.

### #define 	INPUT   0x0A
pinMode() state for digital input, with pullup.

This is the default state for the 12 Digital pins. The pullup causes the input to read as "HIGH" when unplugged, but is fairly weak and can safely be driven by most sources. Many VEX digital sensors rely on this behavior and cannot be used with INPUT_FLOATING.

### #define INPUT_ANALOG   0x00
pinMode() state for analog inputs.

This is the default state for the 8 Analog pins and the Speaker port. This only works on pins with analog input capabilities; use anywhere else results in undefined behavior.

### #define INPUT_FLOATING   0x04
pinMode() state for digital input, without pullup.

Beware of power consumption, as digital inputs left "floating" may switch back and forth and cause spurious interrupts.

### #define 	INTERRUPT_EDGE_BOTH   3
When used in ioSetInterrupt(), triggers an interrupt on both rising and falling edges (LOW to HIGH or HIGH to LOW).

### #define 	INTERRUPT_EDGE_FALLING   2
When used in ioSetInterrupt(), triggers an interrupt on falling edges (HIGH to LOW).

### #define 	INTERRUPT_EDGE_RISING   1
When used in ioSetInterrupt(), triggers an interrupt on rising edges (LOW to HIGH).

### #define 	JOY_DOWN   1
DOWN button (valid on channels 5, 6, 7, 8)

### #define 	JOY_LEFT   2
LEFT button (valid on channels 7, 8)

### #define 	JOY_RIGHT   8
RIGHT button (valid on channels 7, 8)

### #define 	JOY_UP   4
UP button (valid on channels 5, 6, 7, 8)

### #define 	LCD_BTN_CENTER   2
CENTER button on LCD for use with lcdReadButtons()

### #define 	LCD_BTN_LEFT   1
LEFT button on LCD for use with lcdReadButtons()

### #define 	LCD_BTN_RIGHT   4
RIGHT button on LCD for use with lcdReadButtons()

### #define LOW   0
Used for digitalWrite() to specify a logic LOW state to output.

In reality, using a zero expression or "false" will work to set a pin to LOW.

### #define OUTPUT   0x01
pinMode() state for digital output, push-pull.

This is the mode which should be used to output a digital HIGH or LOW value from the Cortex. This mode is useful for pneumatic solenoid valves and VEX LEDs.

### #define OUTPUT_OD   0x05
pinMode() state for open-drain outputs.

This is useful in a few cases for external electronics and should not be used for the VEX solenoid or LEDs.

### #define 	SEEK_CUR   1
SEEK_CUR is used in fseek() to denote an relative position in bytes from the current file location.

### #define SEEK_END   2
SEEK_END is used in fseek() to denote an absolute position in bytes from the end of the file.

The offset will most likely be negative in this case.

### #define 	SEEK_SET   0
SEEK_SET is used in fseek() to denote an absolute position in bytes from the start of the file.

### #define 	SERIAL_8N1   0x0000
Specifies the default serial settings when used in usartInit()

### #define 	SERIAL_DATABITS_8   0x0000
Bit mask for usartInit() for 8 data bits (typical)

### #define 	SERIAL_DATABITS_9   0x1000
Bit mask for usartInit() for 9 data bits.

### #define 	SERIAL_PARITY_EVEN   0x0400
Bit mask for usartInit() for Even parity.

### #define 	SERIAL_PARITY_NONE   0x0000
Bit mask for usartInit() for No parity (typical)

### #define 	SERIAL_PARITY_ODD   0x0600
Bit mask for usartInit() for Odd parity.

### #define 	SERIAL_STOPBITS_1   0x0000
Bit mask for usartInit() for 1 stop bit (typical)

### #define 	SERIAL_STOPBITS_2   0x2000
Bit mask for usartInit() for 2 stop bits.

### #define 	stdin   ((FILE \*)3)
The standard input stream uses the PC debug terminal.

### #define 	stdout   ((FILE \*)3)
The standard output stream uses the PC debug terminal.

### #define 	TASK_DEAD   0
Constant returned from taskGetState() when the task is dead or nonexistant.

### #define 	TASK_DEFAULT_STACK_SIZE   512
The recommended stack size for a new task that does an average amount of work.

This stack size is used for default tasks such as autonomous().

This is probably OK for 4-5 levels of function calls and the use of printf() with several arguments. Tasks requiring deep recursion or large local buffers will need a bigger stack.


### #define 	TASK_MAX   16
Only this many tasks can exist at once.

Attempts to create further tasks will not succeed until tasks end or are destroyed, AND the idle task cleans them up.

Changing this value will not change the limit without a kernel recompile. The idle task and VEX daemon task count against the limit. The user autonomous() or teleop() also counts against the limit, so 12 tasks usually remain for other uses.

### #define 	TASK_MAX_PRIORITIES   6
The maximum number of available task priorities, which run from 0 to 5.

Changing this value will not change the priority count without a kernel recompile.

### #define TASK_MINIMAL_STACK_SIZE   64
The minimum stack depth for a task.

Scheduler state is stored on the stack, so even if the task never uses the stack, at least this much space must be allocated.

Function calls and other seemingly innocent constructs may place information on the stack. Err on the side of a larger stack when possible.

### #define TASK_PRIORITY_DEFAULT   2
The default task priority, which should be used for most tasks.

Default tasks such as autonomous() inherit this priority.

### #define TASK_PRIORITY_HIGHEST   (TASK_MAX_PRIORITIES - 1)
The highest priority that can be assigned to a task.

Unlike the lowest priority, this priority can be safely used without hampering interrupts. Beware of deadlock.

### #define TASK_PRIORITY_LOWEST   0
The lowest priority that can be assigned to a task, which puts it on a level with the idle task.

This may cause severe performance problems and is generally not recommended.

### #define 	TASK_RUNNABLE   2
Constant returned from taskGetState() when the task is exists and is available to run, but not currently running.

### #define 	TASK_RUNNING   1
Constant returned from taskGetState() when the task is actively executing.

### #define 	TASK_SLEEPING   3
Constant returned from taskGetState() when the task is delayed or blocked waiting for a semaphore, mutex, or I/O operation.

### #define 	TASK_SUSPENDED   4
Constant returned from taskGetState() when the task is suspended using taskSuspend().

### #define 	uart1   ((FILE \*)1)
UART 1 on the Cortex; must be opened first using usartInit().

### #define 	uart2   ((FILE \*)2)
UART 2 on the Cortex; must be opened first using usartInit().
