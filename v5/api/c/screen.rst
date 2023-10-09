.. highlight:: c
   :linenothreshold: 5

=========================
Simplified Brain Screen C API
=========================

.. contents :: :local:

screen
============

.. note:: The default color for the pen is white, while the default eraser color is black.

Drawing Functions
--------------

screen_set_pen
~~~~~~~~~

Set the pen color for subsequent graphics operations

Analogous to `pros::screen::set_pen <../cpp/screen.html#set_pen>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_set_pen(const uint32_t color);

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          screen_set_pen(COLOR_RED);
        }

        void opcontrol() {
           int iter = 0;
           while(1){
              // This should print in red.
              screen_print_line(TEXT_MEDIUM, 1, "%d", iter++);
           }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 color        The pen color to set (it is recommended to use values from the enum defined in colors.h)
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

screen_set_eraser
~~~~~~~~~

Set the eraser color for subsequent graphics operations

Analogous to `pros::screen::set_eraser <../cpp/screen.html#set_eraser>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_set_pen(const uint32_t color);

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          screen_set_eraser(COLOR_RED);
        }

        void opcontrol() {
           while(1){
              // This should turn the screen red.
              screen_erase();
           }
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 color        The background color to set (it is recommended to use values from the enum defined in colors.h)
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

screen_get_pen
~~~~~~~~~

Get the current pen color.

Analogous to `pros::screen::get_pen <../cpp/screen.html#get_pen>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_get_pen(const uint32_t color);

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          screen_set_pen(COLOR_RED);
        }

        void opcontrol() {
           while(1){
              // Should print number equivalent to COLOR_RED defined in colors.h.
              screen_print(TEXT_MEDIUM, 1, "%d", screen_get_pen());
           }
        }

**Returns:** The current pen color of the screen object in the form of a value from the enum defined in colors.h.

----

screen_get_eraser
~~~~~~~~~

Get the current eraser color.

Analogous to `pros::screen::get_eraser <../cpp/screen.html#set_eraser>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_get_eraser(const uint32_t color);

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          screen_set_pen(COLOR_RED);
        }

        void opcontrol() {
           while(1){
              // Should print number equivalent to COLOR_RED defined in colors.h.
              screen_print(TEXT_MEDIUM, 1, "%d", screen_get_eraser());
           }
        }

**Returns:** The current eraser color of the screen object in the form of a value from the enum defined in colors.h.

----

screen_erase
~~~~~~~~~

Clear entire display with eraser color

Analogous to `pros::screen::erase <../cpp/screen.html#erase>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_erase();

   .. tab :: Example
      .. highlight:: c
      ::

        void initialize() {
          screen_set_eraser(COLOR_RED);
        }

        void opcontrol() {
           while(1){
              // This should turn the screen red.
              screen_erase();
           }
        }

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

screen_scroll
~~~~~~~~~

Scroll lines on the display upwards.

Analogous to `pros::screen::scroll <../cpp/screen.html#scroll>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_scroll(const int16_t start_line, const int16_t lines);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
           screen_print(TEXT_MEDIUM, 4, "Line Here");
           // Scroll 3 lines
           screen_scroll(4, 3);
        }

============ =================================================================================================================
 Parameters
============ =================================================================================================================
 start_line   The line from which scrolling will start
 lines        The number of lines to scroll up
============ =================================================================================================================

**Returns:** 1 if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

screen_scroll_area
~~~~~~~~~

Scroll lines within a region on the display

Analogous to `pros::screen::scroll_area <../cpp/screen.html#scroll_area>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_scroll_area(const int16_t x0, const int16_t y0, const int16_t x1, const int16_t y1, int16_t lines);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
           screen_print(TEXT_MEDIUM, 1, "Line Here");
           // Scrolls area of screen upwards slightly. including line of text
           screen_scroll(0,0, 400, 200, 3);
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

screen_copy_area
~~~~~~~~~

Copy a screen region (designated by a rectangle) to an off-screen buffer from the screen

Analogous to `pros::screen::copy_area <../cpp/screen.html#copy_area>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_copy_area(const int16_t x0, const int16_t y0, const int16_t x1, const int16_t y1, uint32_t* buf, const int32_t stride);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
           uint32_t* buf = malloc(sizeof(uint32_t) * 400 * 200);
           screen_print(TEXT_MEDIUM, 1, "Line Here");

           // Copies area of the screen including text
           screen_copy_area(0, 0, 400, 200, (uint32_t*)buf, 400 + 1);
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

screen_draw_pixel
~~~~~~~~~

Draw a single pixel on the screen using the current pen color

Analogous to `pros::screen::draw_pixel <../cpp/screen.html#draw_pixel>`_.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_draw_pixel(const int16_t x, const int16_t y);

   .. tab :: Example
      .. highlight:: c
      ::

        int i = 0;
        void opcontrol() {
            while(i < 200){
               screen_draw_pixel(100,i++);
               // Draws a line at x = 100 gradually down the screen, pixel by pixel
               delay(200);
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

screen_erase_pixel
~~~~~~~~~

Erase a pixel from the screen using the current eraser color

Analogous to `pros::screen::erase_pixel <../cpp/screen.html#erase_pixel>`_.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_erase_pixel(const int16_t x, const int16_t y);

   .. tab :: Example
      .. highlight:: c
      ::

         void opcontrol() {
            // Color the Screen in Red
            screen_set_pen(COLOR_RED);
            screen_fill_rect(0,0,400,200);
            int i = 0;
            while(i < 200){
               screen_erase_pixel(100,i++);
               // Erases a line at x = 100 gradually down the screen, pixel by pixel
               delay(200);
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

screen_draw_line
~~~~~~~~~

Draw a line on the screen using the current pen color

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

Analogous to `pros::screen::draw_line <../cpp/screen.html#draw_line>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_draw_line(const int16_t x0, const int16_t y0, const int16_t x1, const int16_t y1);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            // Draw line down the screen at x = 100
            screen_draw_line(100,0,100,200);

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

screen_erase_line
~~~~~~~~~

Erase a line on the screen using the current eraser color

Analogous to `pros::screen::erase_line <../cpp/screen.html#erase_line>`_.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_erase_line(const int16_t x0, const int16_t y0, const int16_t x1, const int16_t y1);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            // Color the Screen in Red
            screen_set_pen(COLOR_RED);
            screen_fill_rect(0,0,400,200);
            // Erase line down the screen at x = 100
            screen_erase_line(100,0,100,200);
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

screen_draw_rect
~~~~~~~~~

Draw a rectangle on the screen using the current pen color

Analogous to `pros::screen::draw_rect <../cpp/screen.html#draw_rect>`_.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_draw_rect(const int16_t x0, const int16_t y0, const int16_t x1, const int16_t y1);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            // Color the Screen in Red
            screen_set_pen(COLOR_RED);
            screen_draw_rect(1,1,480,200);
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

screen_erase_rect
~~~~~~~~~

Erase a rectangle on the screen using the current eraser color

Analogous to `pros::screen::erase_rect <../cpp/screen.html#erase_rect>`_.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_erase_rect(const int16_t x0, const int16_t y0, const int16_t x1, const int16_t y1);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            // Draw Box Around Half the Screen in Red
            screen_set_eraser(COLOR_RED);
            screen_erase_rect(5,5,240,200);
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

screen_fill_rect
~~~~~~~~~

Fill a rectanglular region on the screen using the current pen color

Analogous to `pros::screen::fill_rect <../cpp/screen.html#fill_rect>`_.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_fill_rect(const int16_t x0, const int16_t y0, const int16_t x1, const int16_t y1);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            // Fill Around Half the Screen in Red
            screen_set_pen(COLOR_RED);
            screen_fill_rect(5,5,240,200);
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

screen_draw_circle
~~~~~~~~~

Draw a circle on the screen using the current pen color

Analogous to `pros::screen::draw_circle <../cpp/screen.html#draw_circle>`_.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_draw_circle(const int16_t x, const int16_t y, const int16_t radius);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            // Draw a circle with radius of 100 in red
            screen_set_pen(COLOR_RED);
            screen_draw_circle(240, 200, 100);
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

screen_erase_circle
~~~~~~~~~

Erase a circle on the screen using the current eraser color

Analogous to `pros::screen::erase_circle <../cpp/screen.html#erase_circle>`_.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_erase_circle(const int16_t x, const int16_t y, const int16_t radius);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            screen_set_pen(COLOR_RED);
            screen_fill_rect(5,5,240,200);
            // Erase a circle with radius of 100 in COLOR_BLUE
            screen_set_pen(COLOR_BLUE);
            screen_erase_circle(240, 200, 100);
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

screen_fill_circle
~~~~~~~~~

Fill a circular region of the screen using the current pen color

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

Analogous to `pros::screen::fill_circle <../cpp/screen.html#fill_circle>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_fill_circle(const int16_t x, const int16_t y, const int16_t radius);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            screen_set_pen(COLOR_RED);
            screen_fill_rect(5,5,240,200);
            // Fill a circlular area with radius of 100 in COLOR_BLUE
            screen_set_pen(COLOR_BLUE);
            screen_fill_circle(240, 200, 100);
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

screen_print
~~~~~~~~~

Analogous to `pros::screen::print <../cpp/screen.html#print>`_.

Print a formatted string to the screen, with a line and text style specifier.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_print(text_format_e_t txt_fmt, const int16_t line, const char* text, ...);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            int i = 0;

            screen_set_pen(COLOR_BLUE);
            while(1){
               // Will print seconds started since program started on line 3
               screen_print(TEXT_MEDIUM, 3, "Seconds Passed: %3d", i++);
               delay(1000);
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

screen_print_at
~~~~~~~~~

Print a formatted string to the screen at a coordinate location

Analogous to `pros::screen::print <../cpp/screen.html#print>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        void screen_print_at(text_format_e_t txt_fmt, const int16_t x, const int16_t y, const char* text, ...);

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            int i = 0;

            screen_set_pen(COLOR_BLUE);
            while(1){
               // Will print seconds started since program started.
               screen_print_at(TEXT_SMALL, 3, "Seconds Passed: %3d", i++);
               delay(1000);
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

----

Touch Related Functions
--------------

screen_touch_status
~~~~~~~~~

Analogous to `pros::screen::touch_status <../cpp/screen.html#touch_status>`_.

Gets the touch status of the last touch of the screen.

.. tabs ::
   .. tab :: Prototypes
      .. highlight:: c
      ::

        screen_touch_status_s_t screen_touch_status();

   .. tab :: Example
      .. highlight:: c
      ::

        void opcontrol() {
            int i = 0;
            screen_touch_status_s_t status;
            while(1){
               status = screen_touch_status();

               // Will print various information about the last touch
               screen_print(TEXT_MEDIUM, 1, "Touch Status (Type): %d", status.touch_status);
               screen_print(TEXT_MEDIUM, 2, "Last X: %d", status.x);
               screen_print(TEXT_MEDIUM, 3, "Last Y: %d", status.y);
               screen_print(TEXT_MEDIUM, 4, "Press Count: %d", status.press_count);
               screen_print(TEXT_MEDIUM, 5, "Release Count: %d", status.release_count);
               delay(20);
            }
        }

**Returns:** The screen_touch_status_s_t struct that indicates the last touch status of the screen.

----

screen_touch_callback
~~~~~~~~~

Assigns a callback function to be called when a certain touch event happens.

This function uses the following values of ``errno`` when an error state is reached:

- ``EACCESS`` - Another resource is currently trying to access the screen mutex.

Analogous to `pros::screen::touch_callback <../cpp/screen.html#touch_callback>`_.

.. tabs ::
   .. tab :: Prototypes
      .. highlight:: c
      ::

        void screen_touch_callback(touch_event_cb_fn_t cb, last_touch_e_t event_type);

   .. tab :: Example
      .. highlight:: c
      ::

            touch_event_cb_fn_t changePixel(){
               screen_touch_status_s_t status = screen_touch_status();
               screen_draw_pixel(status.x,status.y);
               return NULL;
            }

            void opcontrol() {
               screen_touch_callback(changePixel, TOUCH_PRESSED);
               while(1) delay(20);
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

text_format_e_t
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

last_touch_e_t
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

screen_touch_status_s_t
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

touch_event_cb_fn_t
-------------------------

::

  typedef void (*touch_event_cb_fn_t)();

A callback function for a screen callback

This will be called each time its corresponding touch type is happens.

