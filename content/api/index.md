---
date: 2016-09-27T19:16:55-04:00
title: API
---

This document serves as a quick reference for API.h functions.

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

## Functions

### ioSetInterrupt
```
void ioSetInterrupt( unsigned char    pin,
                     unsigned char    edges,
                     InterruptHandler handler
                   );
```
Sets up an interrupt to occur on the specified pin, and resets any counters or timers associated with the pin.

Each time the specified change occurs, the function pointer passed in will be called with the pin that changed as an argument. Enabling pin-change interrupts consumes processing time, so it is best to only enable necessary interrupts and to keep the InterruptHandler function short. Pin change interrupts can only be enabled on pins 1-9 and 11-12.

Do not use API functions such as delay() inside the handler function, as the function will run in an ISR where the scheduler is paused and no other interrupts can execute. It is best to quickly update some state and allow a task to perform the work.

Do not use this function on pins that are also being used by the built-in ultrasonic or shaft encoder drivers, or on pins which have been switched to output mode.

| Parameters |     |
|        ---:|:---|
|       `pin`| the pin on which to enable interrupts from 1-9,11-12 |
|     `edges`| one of INTERRUPT_EDGE_RISING, INTERRUPT_EDGE_FALLING, or INTERRUPT_EDGE_BOTH |
|   `handler`| the function to call when the condition is satisfied|
