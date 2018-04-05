.. highlight:: cpp
   :linenothreshold: 5

===================================
LLEMU (Legacy LCD Emulator) C++ API
===================================

.. note:: Additional example code for this module can be found in
          `its Tutorial <../../tutorials/topical/llemu.html>`_.

.. contents:: :local:

pros::lcd
=========

clear
-----

Clear the text on the emulated three-button LCD screen.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO``  - The LCD has not been initialized. Call `initialize`_ first.

Analogous to `lcd_clear <../c/llemu.html#lcd-clear>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         bool pros::lcd::clear ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::lcd::initialize();
          pros::lcd::set_text(1, "Hello World!");
          pros::lcd::clear(); // No more text will be displayed
        }

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.

----

clear_line
----------

Clears a line on the emulated three-button LCD screen.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO``  - The LCD has not been initialized. Call `initialize`_ first.
- ``EINVAL`` - The line number specified is not in the range [0-7]

Analogous to `lcd_clear_line <../c/llemu.html#lcd-clear-line>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         bool pros::lcd::clear_line ( std::int16_t line )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::lcd::initialize();
          pros::lcd::set_text(1, "Hello World!");
          pros::lcd::clear_line(1); // No more text will be displayed
        }

============ ===================
 Parameters
============ ===================
 line         The line to clear
============ ===================

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.

----

initialize
----------

Initialize the display to be an emulation of the three-button, UART-based VEX LCD.

Analogous to `lcd_initialize <../c/llemu.html#lcd-initialize>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         bool pros::lcd::initialize ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::lcd::initialize();
          pros::lcd::set_text(1, "Hello World!");
        }

**Returns:** ``true`` if the LCD was successfully initialized, or ``false`` if it has already been initialized.

----

is_initialized
--------------

Determines whether the emulated three-button LCD has already been initialized.

Analogous to `lcd_is_initialized <../c/llemu.html#lcd-is-initialized>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         bool pros::lcd::is_initialized ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::lcd::initialize();
          std::cout << "Is the LCD initialized?" << lcd_is_initialized();
          // Will Display True
        }

**Returns:** True if the LCD has been initialized or false if not.

----

print
-----

Displays a formatted string on the emulated three-button LCD screen

This function uses the following values of ``errno`` when an error state is
reached:

- ``ENXIO``  - The LCD has not been initialized. Call `initialize`_ first.
- ``EINVAL`` - The line number specified is not in the range [0-7]

Analogous to `lcd_print <../c/llemu.html#lcd-print>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         template <typename... Params> bool pros::lcd::print( std::int16_t line,
                                                              const char* fmt,
                                                              Params... args )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::lcd::initialize();
          while (true) {
            pros::lcd::print(0, "Buttons Bitmap: %d\n", pros::lcd::read_buttons());
            delay(20);
          }
        }

============ ==================================================
 Parameters
============ ==================================================
 line         The line on which to display the text [0-7]
 fmt          Format string
 args         Optional list of arguments for the format string
============ ==================================================

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.

----

read_buttons
------------

Reads the button status from the emulated three-button LCD.

The value returned is a 3-bit std::integer where ``1 0 0`` indicates the left button
is pressed, ``0 1 0`` indicates the center button is pressed, and ``0 0 1``
indicates the right button is pressed. ``0`` is returned if no buttons are
currently being pressed.

Note that this function is provided for legacy API compatibility purposes,
with the caveat that the V5 touch screen does not actually support pressing
multiple points on the screen at the same time.

Analogous to `lcd_read_buttons <../c/llemu.html#lcd-read-buttons>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::uint8_t pros::lcd::read_buttons ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::lcd::initialize();
          while (true) {
            printf("Buttons Bitmap: %d\n", pros::lcd::read_buttons());
            delay(20);
          }
        }

**Returns:** The buttons pressed as a bit mask.

----

register_btn0_cb
----------------

Register a callback function for the leftmost button.

When the leftmost button on the emulated three-button LCD is pressed, the
user-provided callback function will be invoked.

Analogous to `lcd_register_btn0_cb <../c/llemu.html#lcd-register-btn0-cb>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         void pros::lcd::register_btn0_cb ( lcd_btn_cb_fn_t cb )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void on_center_button() {
          static bool pressed = false;
          pressed = !pressed;
          if (pressed) {
            pros::lcd::set_text(2, "I was pressed!");
          } else {
            pros::lcd::clear_line(2);
          }
        }

        void initialize() {
          pros::lcd::initialize();
          pros::lcd::register_btn0_cb(on_center_button);
        }

============ ==================================================================================================
 Parameters
============ ==================================================================================================
 cb           An `LCD callback function <../c/llemu.html#lcd-btn-cb-fn-t>`_ to be executed by this button press
============ ==================================================================================================

----

register_btn1_cb
----------------

Register a callback function for the center button.

When the center button on the emulated three-button LCD is pressed, the
user-provided callback function will be invoked.

Analogous to `lcd_register_btn1_cb <../c/llemu.html#lcd-register-btn1-cb>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         void pros::lcd::register_btn1_cb ( lcd_btn_cb_fn_t cb )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void on_center_button() {
          static bool pressed = false;
          pressed = !pressed;
          if (pressed) {
            pros::lcd::set_text(2, "I was pressed!");
          } else {
            pros::lcd::clear_line(2);
          }
        }

        void initialize() {
          pros::lcd::initialize();
          pros::lcd::register_btn1_cb(on_center_button);
        }

============ ==================================================================================================
 Parameters
============ ==================================================================================================
 cb           An `LCD callback function <../c/llemu.html#lcd-btn-cb-fn-t>`_ to be executed by this button press
============ ==================================================================================================

----

register_btn2_cb
----------------

Register a callback function for the rightmost button.

When the rightmost button on the emulated three-button LCD is pressed, the
user-provided callback function will be invoked.

Analogous to `lcd_register_btn2_cb <../c/llemu.html#lcd-register-btn2-cb>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         void pros::lcd::register_btn2_cb ( lcd_btn_cb_fn_t cb )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void on_center_button() {
          static bool pressed = false;
          pressed = !pressed;
          if (pressed) {
            pros::lcd::set_text(2, "I was pressed!");
          } else {
            pros::lcd::clear_line(2);
          }
        }

        void initialize() {
          pros::lcd::initialize();
          pros::lcd::register_btn2_cb(on_center_button);
        }

============ ==================================================================================================
 Parameters
============ ==================================================================================================
 cb           An `LCD callback function <../c/llemu.html#lcd-btn-cb-fn-t>`_ to be executed by this button press
============ ==================================================================================================

----

set_text
--------

Displays a string on the emulated three-button LCD screen

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO``  - The LCD has not been initialized. Call `initialize`_ first.
- ``EINVAL`` - The line number specified is not in the range [0-7]

Analogous to `lcd_set_text <../c/llemu.html#lcd-set-text>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         bool pros::lcd::set_text ( std::int16_t line,
                             std::string text )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::lcd::initialize();
          pros::lcd::set_text(1, "Hello World!");
        }

============ =============================================
 Parameters
============ =============================================
 line         The line on which to display the text [0-7]
 text         The text to display
============ =============================================

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.

----

shutdown
--------

Turn off the Legacy LCD Emulator

Calling this function will clear the entire display, and you will not be able
to call any further LLEMU functions until another call to `initialize`_.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO`` - The LCD has not been initialized. Call `initialize`_ first.

Analogous to `lcd_shutdown <../c/llemu.html#lcd-shutdown>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         bool pros::lcd::shutdown ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::lcd::initialize();
          pros::lcd::set_text(1, "Hello World!");
          pros::lcd::shutdown(); // All done with the LCD
        }

**Returns:** ``true`` if the operation was successful, or ``false`` otherwise, setting
``errno`` values as specified above.
