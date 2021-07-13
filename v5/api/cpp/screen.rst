.. highlight:: cpp
   :linenothreshold: 5
   
=====================
Simplified Brain Screen C++ API
=====================

.. contents:: :local:

pros::screen
============

.. note:: The default color for the pen is white, while the default eraser color is black.

set_pen
~~~~~~~~~

Set the pen color for subsequent graphics operations

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void set_pen(const std::uint32_t color);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::screen::set_pen(COLOR_RED);
        }

        void opcontrol() {
           int iter = 0;
           while(1){
              // This should print in red.
              pros::screen::print(TEXT_MEDIUM, 1, "%d", iter++);
           }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 color        The pen color to set (it is recommended to use values from the enum defined in colors.h)
============ =================================================================================================================

----

set_eraser
~~~~~~~~~

Set the eraser color for subsequent graphics operations

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void set_pen(const std::uint32_t color);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::screen::set_eraser(COLOR_RED);
        }

        void opcontrol() {
           while(1){
              // This should turn the screen red.
              pros::screen::erase();
           }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 color        The background color to set (it is recommended to use values from the enum defined in colors.h)
============ =================================================================================================================

----

get_pen
~~~~~~~~~

Get the current pen color.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void get_pen(const std::uint32_t color);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::screen::set_pen(COLOR_RED);
        }

        void opcontrol() {
           while(1){
              // Should print number equivalent to COLOR_RED defined in colors.h.
              pros::screen::print(TEXT_MEDIUM, 1, "%d", pros::screen::get_pen());
           }
        }

**Returns:** The current pen color of the screen object in the form of a value from the enum defined in colors.h.

----

get_eraser
~~~~~~~~~

Get the current eraser color.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void get_eraser(const std::uint32_t color);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::screen::set_pen(COLOR_RED);
        }

        void opcontrol() {
           while(1){
              // Should print number equivalent to COLOR_RED defined in colors.h.
              pros::screen::print(TEXT_MEDIUM, 1, "%d", pros::screen::get_eraser());
           }
        }

**Returns:** The current eraser color of the screen object in the form of a value from the enum defined in colors.h.

----

erase
~~~~~~~~~

Clear entire display with eraser color

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void erase();

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::screen::set_eraser(COLOR_RED);
        }

        void opcontrol() {
           while(1){
              // This should turn the screen red.
              pros::screen::erase();
           }
        }

----

eraser
~~~~~~~~~

Scroll lines on the display upwards.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void scroll(const std::int16_t start_line, const std::int16_t lines);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
           pros::screen::print(TEXT_MEDIUM, 4, "Line Here");
           // Scroll 3 lines
           pros::screen::scroll(4, 3);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 start_line   The line from which scrolling will start
 lines        The number of lines to scroll up
============ =================================================================================================================

----
