=================================
LLEMU (Legacy LCD Emulator) C API
=================================

Functions
=========

lcd_clear
---------

::

  bool lcd_clear ( )

Clear the text on the emulated three-button LCD screen.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO``  - The LCD has not been initialized. Call `lcd_initialize`_ first.

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.

lcd_clear_line
--------------

::

  bool lcd_clear_line ( int16_t line )

Clears a line on the emulated three-button LCD screen.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO``  - The LCD has not been initialized. Call `lcd_initialize`_ first.
- ``EINVAL`` - The line number specified is not in the range [0-7]

============ ===================
 Parameters
============ ===================
 line         The line to clear
============ ===================

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.

lcd_initialize
--------------

::

  bool lcd_initialize ( )

Initialize the display to be an emulation of the three-button, UART-based VEX LCD.

**Returns:** ``true`` if the LCD was successfully initialized, or ``false`` if it has already been initialized.

lcd_register_btn0_cb
--------------------

::

  void lcd_register_btn0_cb ( lcd_btn_cb_fn_t cb )

Register a callback function for the leftmost button.

When the leftmost button on the emulated three-button LCD is pressed, the
user-provided callback function will be invoked.

============ ===================================================================================
 Parameters
============ ===================================================================================
 cb           An `LCD callback function <lcd_btn_cb_fn_t>`_ to be executed by this button press
============ ===================================================================================

lcd_register_btn1_cb
--------------------

::

  void lcd_register_btn1_cb ( lcd_btn_cb_fn_t cb )

Register a callback function for the center button.

When the center button on the emulated three-button LCD is pressed, the
user-provided callback function will be invoked.

============ ===================================================================================
 Parameters
============ ===================================================================================
 cb           An `LCD callback function <lcd_btn_cb_fn_t>`_ to be executed by this button press
============ ===================================================================================

lcd_register_btn2_cb
--------------------

::

  void lcd_register_btn2_cb ( lcd_btn_cb_fn_t cb )

Register a callback function for the rightmost button.

When the rightmost button on the emulated three-button LCD is pressed, the
user-provided callback function will be invoked.

============ ===================================================================================
 Parameters
============ ===================================================================================
 cb           An `LCD callback function <lcd_btn_cb_fn_t>`_ to be executed by this button press
============ ===================================================================================

lcd_read_buttons
----------------

::

  uint8_t lcd_read_buttons ( )

Reads the button status from the emulated three-button LCD.

The value returned is a 3-bit integer where `1 0 0` indicates the left button
is pressed, `0 1 0` indicates the center button is pressed, and `0 0 1`
indicates the right button is pressed. `0` is returned if no buttons are
currently being pressed.

Note that this function is provided for legacy API compatibility purposes,
with the caveat that the V5 touch screen does not actually support pressing
multiple points on the screen at the same time.

**Returns:** The buttons pressed as a bit mask.

lcd_shutdown
------------

::

  bool lcd_shutdown ( )

Turn off the Legacy LCD Emulator

Calling this function will clear the entire display, and you will not be able
to call any further LLEMU functions until another call to `lcd_initialize`_.

This function uses the following values of `errno` when an error state is reached:

- ``ENXIO`` - The LCD has not been initialized. Call `lcd_initialize`_ first.

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.

Macros
======

LCD_BTN_CENTER
--------------

Use LCD_BTN_CENTER as a bitmask for determining if the center LCD button was pressed from `lcd_read_buttons`_.

**Value:** ``2``

LCD_BTN_LEFT
------------

Use LCD_BTN_LEFT as a bitmask for determining if the left LCD button was pressed from `lcd_read_buttons`_.

**Value:** ``4``

LCD_BTN_RIGHT
-------------

Use LCD_BTN_RIGHT as a bitmask for determining if the right LCD button was pressed from `lcd_read_buttons`_.

**Value:** ``1``

Enumerated Values
=================

Typedefs
========

lcd_btn_cb_fn_t
---------------

::

  typedef void (*lcd_btn_cb_fn_t)(void);

A callback function for a button on the LCD.

This will be called each time its corresponding button is pressed.
