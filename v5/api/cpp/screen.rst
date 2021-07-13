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

scroll
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

scroll_area
~~~~~~~~~

Scroll lines within a region on the display

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void scroll_area(const std::int16_t x0, const std::int16_t y0, const std::int16_t x1, const std::int16_t y1, std::int16_t lines);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
           pros::screen::print(TEXT_MEDIUM, 1, "Line Here");
           // Scrolls area of screen upwards slightly. including line of text
           pros::screen::scroll(0,0, 400, 200, 3);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 x0           The x coordinate of the top left corner of the rectangular region
 y0           The y coordinate of the top left corner of the rectangular region
 x1           The x coordinate of the bottom right corner of the rectangular region
 y1           The y coordinate of the bottom right corner of the rectangular region
 lines        The number of lines to scroll up
============ =================================================================================================================

----

copy_area
~~~~~~~~~

Copy a screen region (designated by a rectangle) to an off-screen buffer from the screen

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void copy_area(const std::int16_t x0, const std::int16_t y0, const std::int16_t x1, const std::int16_t y1, uint32_t* buf, const std::int32_t stride);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
           uint32_t* buf = malloc(sizeof(uint32_t) * 400 * 200);
           pros::screen::print(TEXT_MEDIUM, 1, "Line Here");

           // Copies area of the screen including text
           pros::screen::copy(0, 0, 400, 200, (uint32_t*)buf, 400 + 1);
           // Equation for stride is x2 - x1 + 1
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 x0           The x coordinate of the top left corner of the rectangular region
 y0           The y coordinate of the top left corner of the rectangular region
 x1           The x coordinate of the bottom right corner of the rectangular region
 y1           The y coordinate of the bottom right corner of the rectangular region
 buf		     Off-screen buffer containing screen data
 stride	     Off-screen buffer width in pixels, such that image size is stride-padding
============ =================================================================================================================

----
