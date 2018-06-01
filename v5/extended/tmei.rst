============================================
Touch Management Engine Interface (TMEI) API
============================================

.. warning:: TMEI is going to be deprecated pending further work on incorporating
            `LVGL <https://littlevgl.com/>`_. It is recommended to start using LVGL.

Functions
=========

display_clear_line
------------------

::

  void display_clear_line ( int16_t x0,
                            int16_t y0,
                            int16_t x1,
                            int16_t y1 )

Draw a line on the screen using the current background color.

============ =================================================================
 Parameters
============ =================================================================
 x0           The x coordinate of the first point of the line
 y0           The y coordinate of the first point of the line
 x1           The x coordinate of the second point of the line
 y1           The y coordinate of the second point of the line
============ =================================================================

display_clear_pixel
-------------------

::

  void display_clear_pixel ( int16_t x,
                             int16_t y )

Draw a pixel on the screen using the current background color.

============ =================================================================
 Parameters
============ =================================================================
 x            The x coordinate of the pixel
 y            The y coordinate of the pixel
============ =================================================================

display_clear_rect
------------------

::

  void display_clear_rect ( int16_t x0,
                            int16_t y0,
                            int16_t x1,
                            int16_t y1 )

Draw a rectangle on the screen using the current background color.

============ =================================================================
 Parameters
============ =================================================================
 x0           The x coordinate of the first corner of the rectangular region
 y0           The y coordinate of the first corner of the rectangular region
 x1           The x coordinate of the second corner of the rectangular region
 y1           The y coordinate of the second corner of the rectangular region
============ =================================================================

display_copy_rect
-----------------

::

  void display_copy_rect ( int16_t x0,
                           int16_t y0,
                           int16_t x1,
                           int16_t y1,
                           uint32_t* buf,
                           int32_t stride )

Copy a screen region from an off-screen buffer to the screen.

============ =================================================================
 Parameters
============ =================================================================
 x0           The x coordinate of the first corner of the rectangular region
 y0           The y coordinate of the first corner of the rectangular region
 x1           The x coordinate of the second corner of the rectangular region
 y1           The y coordinate of the second corner of the rectangular region
 buf          Off-screen buffer containing screen data
 stride       Off-screen buffer width in pixels, such that image size
  						is stride-padding
============ =================================================================

display_draw_line
-----------------

::

  void display_draw_line ( int16_t x0,
                           int16_t y0,
                           int16_t x1,
                           int16_t y1 )

Draw a line on the screen using the current foreground color.

============ =================================================================
 Parameters
============ =================================================================
 x0           The x coordinate of the first point of the line
 y0           The y coordinate of the first point of the line
 x1           The x coordinate of the second point of the line
 y1           The y coordinate of the second point of the line
============ =================================================================

display_draw_pixel
------------------

::

  void display_draw_pixel ( int16_t x,
                            int16_t y )

Draw a pixel on the screen using the current foreground color.

============ =================================================================
 Parameters
============ =================================================================
 x            The x coordinate of the pixel
 y            The y coordinate of the pixel
============ =================================================================

display_draw_rect
-----------------

::

  void display_draw_rect ( int16_t x0,
                           int16_t y0,
                           int16_t x1,
                           int16_t y1 )

Draw a rectangle on the screen using the current foreground color.

============ =================================================================
 Parameters
============ =================================================================
 x0           The x coordinate of the first corner of the rectangular region
 y0           The y coordinate of the first corner of the rectangular region
 x1           The x coordinate of the second corner of the rectangular region
 y1           The y coordinate of the second corner of the rectangular region
============ =================================================================

display_erase
-------------

::

  void display_erase ( void )

Reset the display to the default black screen.

display_fill_rect
-----------------

::

  void display_fill_rect ( int16_t x0,
                           int16_t y0,
                           int16_t x1,
                           int16_t y1 )

Fill a rectangular region of the screen using the current foreground color.

============ =================================================================
 Parameters
============ =================================================================
 x0           The x coordinate of the first corner of the rectangular region
 y0           The y coordinate of the first corner of the rectangular region
 x1           The x coordinate of the second corner of the rectangular region
 y1           The y coordinate of the second corner of the rectangular region
============ =================================================================

display_scroll
--------------

::

  void display_scroll ( int16_t start_line,
                        int16_t lines )

Scroll lines on the display.

============ ===========================================
 Parameters
============ ===========================================
 start_line   The line from which scrolling will start
 lines        The number of lines to scroll
============ ===========================================

display_scroll_rect
-------------------

::

  void display_scroll_rect ( int16_t x0,
                             int16_t y0,
                             int16_t x1,
                             int16_t y1,
                             int16_t lines )

Scroll lines within a region on the display.

This function behaves in the same way as `display_scroll`_, except that you
specify a rectangular region within which to scroll lines instead of a start
line.

============ =================================================================
 Parameters
============ =================================================================
 x0           The x coordinate of the first corner of the rectangular region
 y0           The y coordinate of the first corner of the rectangular region
 x1           The x coordinate of the second corner of the rectangular region
 y1           The y coordinate of the second corner of the rectangular region
 lines        The number of lines to scroll
============ =================================================================

display_set_color_bg
--------------------

::

  void display_set_color_bg ( uint32_t color )

Set the background color for subsequent graphics operations.

============ ==============================================================
 Parameters
============ ==============================================================
 color        The background color to set (it is recommended to use values
  					  from the enum defined in colors.h)
============ ==============================================================

display_set_color_fg
--------------------

::

  void display_set_color_fg ( uint32_t color )

Set the foreground color for subsequent graphics operations.

============ ==============================================================
 Parameters
============ ==============================================================
 color        The foreground color to set (it is recommended to use values
  					  from the enum defined in colors.h)
============ ==============================================================

Macros
======

Enumerated Values
=================

Typedefs
========
