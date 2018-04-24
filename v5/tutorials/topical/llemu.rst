===========================
LLEMU (Legacy LCD Emulator)
===========================

.. note:: For a full list of functions for interacting with the LLEMU, see its
          `C API <../../api/c/llemu.html>`_ and `C++ API <../../api/cpp/llemu.html>`_.

Initialization
==============

Initialization of the LLEMU is very simple, it's just a call to its initialization
function at whatever point in the program you would like the LLEMU to start displaying
(this will most likely be in ``initialize()``).

Initialization is done as such:

.. tabs::
   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: initialize.c
         :linenos:

         void initialize() {
           lcd_initialize();
         }

   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: initialize.cpp
         :linenos:

         void initializa() {
           pros::lcd::initialize();
         }

Writing to the LLEMU
====================

Writing to the LLEMU is nearly identical to writing to the LCD with
`PROS 2 <../../cortex/tutorials/lcd.html>`_. Most writing should be done with the
print function, which is analogous to
`printf <http://www.cplusplus.com/reference/cstdio/printf/>`_.

.. tabs::
   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: initialize.c
         :linenos:

         void initialize() {
           lcd_initialize();
           while (true) {
             lcd_print(0, "Buttons Bitmap: %d\n", lcd_read_buttons());
             delay(20);
           }
         }

   .. group-tab:: C++
      ..highlight:: cpp
      .. code-block:: cpp
         :caption: initialize.cpp
         :linenos:

         void initialize() {
           pros::lcd::initialize();
           while (true) {
             pros::lcd::print(0, "Buttons Bitmap: %d\n", pros::lcd::read_buttons());
             delay(20);
           }
         }

Using the Buttons
=================

Using the buttons can be done in a similar method to
`PROS 2 <../../../cortex/tutorials/lcd.html>`_ with the
`pros::lcd::read_buttons <../../api/cpp/llemu.html#read-buttons>`_ function. See
the above example for printing the button readings.

While this is sufficient for most applications, some tasks are easier to perform
using the `pros::lcd::register_btn#_cb <../../api/cpp/llemu.html#register-btn0-cb>`_ functions
(where # is replaced with 0, 1, or 2 for the left, center, and right buttons respectively).
With these function you can assign a function to be called each time that the button
is pressed.

.. tabs::
   .. group-tab:: C
      .. highlight:: c
      .. code-block:: c
         :caption: initialize.c
         :linenos:

         void on_center_button() {
           static bool pressed = false;
           pressed = !pressed;
           if (pressed) {
             lcd_set_text(2, "I was pressed!");
           } else {
             lcd_clear_line(2);
           }
         }

         void initialize() {
           lcd_initialize();
           lcd_register_btn0_cb(on_center_button);
         }

   .. group-tab:: C++
      .. highlight:: cpp
      .. code-block:: cpp
         :caption: initialize.cpp
         :linenos:

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
