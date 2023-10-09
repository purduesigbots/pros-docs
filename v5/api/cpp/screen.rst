.. highlight:: cpp
   :linenothreshold: 5
   
=====================
Simplified Brain Screen C++ API
=====================

.. contents:: :local:

pros::screen
============

.. note:: The default color for the pen is white, while the default eraser color is black.

Drawing Functions
--------------

set_pen
~~~~~~~~~

Set the pen color for subsequent graphics operations

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

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

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

set_eraser
~~~~~~~~~

Set the eraser color for subsequent graphics operations

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void set_eraser(const std::uint32_t color);

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

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

get_pen
~~~~~~~~~

Get the current pen color.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

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

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

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

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

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

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

scroll
~~~~~~~~~

Scroll lines on the display upwards.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

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

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

scroll_area
~~~~~~~~~

Scroll lines within a region on the display

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

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

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

copy_area
~~~~~~~~~

Copy a screen region (designated by a rectangle) to an off-screen buffer from the screen

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

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
           pros::screen::copy_area(0, 0, 400, 200, (uint32_t*)buf, 400 + 1);
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

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

draw_pixel
~~~~~~~~~

Draw a single pixel on the screen using the current pen color

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void draw_pixel(const std::int16_t x, const std::int16_t y);

   .. tab :: Example
      .. highlight:: cpp
      ::

        int i = 0;
        void opcontrol() {
            while(i < 200){
               pros::screen::draw_pixel(100,i++);
               // Draws a line at x = 100 gradually down the screen, pixel by pixel
               pros::delay(200);
            }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 x            The x coordinate of the pixel
 y            The y coordinate of the pixel
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

erase_pixel
~~~~~~~~~

Erase a pixel from the screen using the current eraser color

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void erase_pixel(const std::int16_t x, const std::int16_t y);

   .. tab :: Example
      .. highlight:: cpp
      ::

         void opcontrol() {
            // Color the Screen in Red
            pros::screen::set_pen(COLOR_RED);
            pros::screen::fill_rect(0,0,400,200);
            int i = 0;
            while(i < 200){
               pros::screen::erase_pixel(100,i++);
               // Erases a line at x = 100 gradually down the screen, pixel by pixel
               pros::delay(200);
            }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 x            The x coordinate of the pixel
 y            The y coordinate of the pixel
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

draw_line
~~~~~~~~~

Draw a line on the screen using the current pen color

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void draw_line(const std::int16_t x0, const std::int16_t y0, const std::int16_t x1, const std::int16_t y1);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
            // Draw line down the screen at x = 100
            pros::screen::draw_line(100,0,100,200);

        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 x0           The x coordinate of the first point of the line
 y0           The y coordinate of the first point of the line
 x1           The x coordinate of the second point of the line
 y1           The y coordinate of the second point of the line
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

erase_line
~~~~~~~~~

Erase a line on the screen using the current eraser color

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void erase_line(const std::int16_t x0, const std::int16_t y0, const std::int16_t x1, const std::int16_t y1);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
            // Color the Screen in Red
            pros::screen::set_pen(COLOR_RED);
            pros::screen::fill_rect(0,0,400,200);
            // Erase line down the screen at x = 100
            pros::screen::erase_line(100,0,100,200);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 x0           The x coordinate of the first point of the line
 y0           The y coordinate of the first point of the line
 x1           The x coordinate of the second point of the line
 y1           The y coordinate of the second point of the line
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

draw_rect
~~~~~~~~~

Draw a rectangle on the screen using the current pen color

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void draw_rect(const std::int16_t x0, const std::int16_t y0, const std::int16_t x1, const std::int16_t y1);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
            // Color the Screen in Red
            pros::screen::set_pen(COLOR_RED);
            pros::screen::draw_rect(1,1,480,200);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 x0           The x coordinate of the top left point of the line
 y0           The y coordinate of the top left point of the line
 x1           The x coordinate of the bottom right point of the line
 y1           The y coordinate of the bottom right point of the line
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

erase_rect
~~~~~~~~~

Erase a rectangle on the screen using the current eraser color

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void erase_rect(const std::int16_t x0, const std::int16_t y0, const std::int16_t x1, const std::int16_t y1);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
            // Draw Box Around Half the Screen in Red
            pros::screen::set_eraser(COLOR_RED);
            pros::screen::erase_rect(5,5,240,200);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 x0           The x coordinate of the top left point of the line
 y0           The y coordinate of the top left point of the line
 x1           The x coordinate of the bottom right point of the line
 y1           The y coordinate of the bottom right point of the line
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

fill_rect
~~~~~~~~~

Fill a rectanglular region on the screen using the current pen color

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void fill_rect(const std::int16_t x0, const std::int16_t y0, const std::int16_t x1, const std::int16_t y1);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
            // Fill Around Half the Screen in Red
            pros::screen::set_pen(COLOR_RED);
            pros::screen::fill_rect(5,5,240,200);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 x0           The x coordinate of the top left point of the line
 y0           The y coordinate of the top left point of the line
 x1           The x coordinate of the bottom right point of the line
 y1           The y coordinate of the bottom right point of the line
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

draw_circle
~~~~~~~~~

Draw a circle on the screen using the current pen color

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void draw_circle(const std::int16_t x, const std::int16_t y, const std::int16_t radius);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
            // Draw a circle with radius of 100 in red
            pros::screen::set_pen(COLOR_RED);
            pros::screen::draw_circle(240, 200, 100);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 x            The x coordinate of the center of the circle
 y            The y coordinate of the center of the circle
 radius       Radius of the circle
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

erase_circle
~~~~~~~~~

Erase a circle on the screen using the current eraser color

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void erase_circle(const std::int16_t x, const std::int16_t y, const std::int16_t radius);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
            pros::screen::set_pen(COLOR_RED);
            pros::screen::fill_rect(5,5,240,200);
            // Erase a circle with radius of 100 in COLOR_BLUE
            pros::screen::set_pen(COLOR_BLUE);
            pros::screen::erase_circle(240, 200, 100);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 x            The x coordinate of the center of the circle
 y            The y coordinate of the center of the circle
 radius       Radius of the circle
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

fill_circle
~~~~~~~~~

Fill a circular region of the screen using the current pen color

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void fill_circle(const std::int16_t x, const std::int16_t y, const std::int16_t radius);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
            pros::screen::set_pen(COLOR_RED);
            pros::screen::fill_rect(5,5,240,200);
            // Fill a circlular area with radius of 100 in COLOR_BLUE
            pros::screen::set_pen(COLOR_BLUE);
            pros::screen::fill_circle(240, 200, 100);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 x            The x coordinate of the center of the circle
 y            The y coordinate of the center of the circle
 radius       Radius of the circle
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

Text Printing Functions
--------------

print
~~~~~~~~~

Print a formatted string to the screen, with a line and text style specifier.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void print(pros::text_format_e_t txt_fmt, const std::int16_t line, const char* text, Params... args);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
            int i = 0;

            pros::screen::set_pen(COLOR_BLUE);
            while(1){
               // Will print seconds started since program started on line 3
               pros::screen::print(pros::TEXT_MEDIUM, 3, "Seconds Passed: %3d", i++);
               pros::delay(1000);
            }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 txt_fmt      Text format enum that determines if the text is medium, large, medium_center, or large_center.
 line         The one indexed line number on which to print
 text         Formatted string for printing variables and text
 ...          Optional list of arguments for the format string
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

print
~~~~~~~~~

Print a formatted string to the screen at a coordinate location

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void print(pros::text_format_e_t txt_fmt, const std::int16_t x, const std::int16_t y, const char* text, Params... args);

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
            int i = 0;

            pros::screen::set_pen(COLOR_BLUE);
            while(1){
               // Will print seconds started since program started.
               pros::screen::print(pros::TEXT_SMALL, 3, "Seconds Passed: %3d", i++);
               pros::delay(1000);
            }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 txt_fmt      Text format enum that determines if the text is small, medium, or large.
 x            The x-coordinate to display the string
 y            The y-coordinate to display the string
 text         Formatted string for printing variables and text
 ...          Optional list of arguments for the format string
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

Touch Related Functions
--------------

touch_status
~~~~~~~~~

Gets the touch status of the last touch of the screen.

.. tabs ::
   .. tab :: Prototypes
      .. highlight:: cpp
      ::

        screen_touch_status_s_t touch_status();

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
            int i = 0;
            pros::screen_touch_status_s_t status;
            while(1){
               status = pros::screen_touch_status();

               // Will print various information about the last touch
               pros::screen::print(pros::TEXT_MEDIUM, 1, "Touch Status (Type): %d", status.touch_status);
               pros::screen::print(pros::TEXT_MEDIUM, 2, "Last X: %d", status.x);
               pros::screen::print(pros::TEXT_MEDIUM, 3, "Last Y: %d", status.y);
               pros::screen::print(pros::TEXT_MEDIUM, 4, "Press Count: %d", status.press_count);
               pros::screen::print(pros::TEXT_MEDIUM, 5, "Release Count: %d", status.release_count);
               pros::delay(20);
            }
        }

**Returns:** The screen_touch_status_s_t struct that indicates the last touch status of the screen.

----

touch_callback
~~~~~~~~~

Assigns a callback function to be called when a certain touch event happens.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototypes
      .. highlight:: cpp
      ::

        void touch_callback(touch_event_cb_fn_t cb, last_touch_e_t event_type);

   .. tab :: Example
      .. highlight:: cpp
      ::

            void changePixel() {
               pros::screen_touch_status_s_t status = pros::screen::touch_status();
               pros::screen::draw_pixel(status.x, status.y);
               printf("Touch callback executed!   x = %i, y = %i \n", status.x, status.y);
            }

            void opcontrol() {
               pros::Controller master(pros::E_CONTROLLER_MASTER);
               pros::Motor left_mtr(1);
               pros::Motor right_mtr(2);

               pros::screen::touch_callback(changePixel, TOUCH_PRESSED);
               while(1) {
                  pros::delay(20);
               }
            }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 cb           Function pointer to callback
 event_type   The touch type for the callback to be triggered
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

Enumerated Values
=================

pros::text_format_e_t
---------------

Different font sizes that can be used in printing text.

::

   typedef enum {
      E_TEXT_SMALL = 0, 
      E_TEXT_MEDIUM, 
      E_TEXT_LARGE, 
      E_TEXT_MEDIUM_CENTER, 
      E_TEXT_LARGE_CENTER 
   } text_format_e_t;

================================== =====================================================================================
 Value
================================== =====================================================================================
E_TEXT_SMALL                        Small text font size (Only available in coordinate printing)
E_TEXT_MEDIUM                       Normal/Medium text font size 
E_TEXT_LARGE                        Large text font size
E_TEXT_MEDIUM_CENTER                Medium centered text (Only available in line printing)
E_TEXT_LARGE_CENTER                 Large centered text (Only available in line printing)
================================== =====================================================================================

---

pros::last_touch_e_t
--------------

Enum indicating what the current touch status is for the touchscreen.

::

   typedef enum {
      E_TOUCH_RELEASED = 0,
      E_TOUCH_PRESSED,
      E_TOUCH_HELD
   } last_touch_e_t;

================================== =====================================================================================
 Value
================================== =====================================================================================
E_TOUCH_RELEASED                    Last interaction with screen was a quick press
E_TOUCH_PRESSED                     Last interaction with screen was a release
E_TOUCH_HELD                        User is holding screen down
================================== =====================================================================================

---

Structures
==========

pros::screen_touch_status_s_t
-----------------------

::

   typedef struct screen_touch_status_s {
      last_touch_e_t touch_status; ///< Represents if the screen is being held, released, or pressed.
      int16_t x; ///< Represents the x value of the location of the touch.
      int16_t y; ///< Represents the y value of the location of the touch.
      int32_t press_count; ///< Represents how many times the screen has be pressed. 
      int32_t release_count; ///< Represents how many times the user released after a touch on the screen.
   } screen_touch_status_s_t;


Typedefs
========

pros::touch_event_cb_fn_t
-------------------------

::

  typedef void (*touch_event_cb_fn_t)();

A callback function for a screen callback

This will be called each time its corresponding touch type is happens.

