===========================
PROS First Time Users Guide
===========================

The most important characteristic of PROS to note when getting started
is that PROS is just standard C or C++ programming. Anything that works in
standard C/C++ will work as a
part of a PROS project, and similarly the errors given for code that
doesn't work will match errors given for any similar C/C++ code. Learning C/C++
is essential for using PROS.

I've never used PROS or written C/C++ code before, how do I start?
------------------------------------------------------------------

If you have not used PROS or done non-VEX C/C++ code development before,
we recommend that you check out C tutorials on the following topics:

-  `Functions <http://www.studytonight.com/c/user-defined-functions-in-c.php>`__.
   C is a language that heavily emphasizes functions, and knowing how
   they work is essential to using PROS. The `PROS API <../api/index.html>`_ is a set of functions,
   so any time that you want to interact with a sensor or motor, you're using functions.

-  `Header
   Files <https://www.tutorialspoint.com/cprogramming/c_header_files.htm>`__.
   The PROS template (the set of files automatically created when you
   start a PROS project) contains a couple of header files, and it's
   recommended that you make additional header files as you develop your
   code. Header files contain the declarations for functions and global
   variables (among other things), which is why the `PROS API <../api/index.html>`_
   can be found in ``include/pros/api.h``. Knowing what
   code should go in a header file (``.h``, ``.hpp``) or a source file (``.c``, ``.cpp``)
   can be difficult to determine at first, but it is a very useful skill
   to learn.

-  `printf() <https://www.codingunit.com/printf-format-specifiers-format-conversions-and-formatted-output>`__.
   At some point when developing PROS code, you will likely want to get
   some feedback on what the value of a variable is. This is not an
   exact replacement for a full debugging utility by any means, but is
   the standard method for troubleshooting issues in most languages and
   can be used for viewing sensor values or your own variables' values.
   The output from these ``printf()`` statements can be viewed in the
   terminal by running ``pros terminal``.

- `Tasks <../tutorials/topical/multitasking.html>`_. One common mistake that new
  PROS users make is forgetting to include a ``delay()`` statement in their tasks
  (this includes ``opcontrol()`` too), starving the processor of resources and
  preventing the PROS kernel from running properly. Every infinite loop, like
  the one in ``opcontrol()``, needs to have a delay statement. We recommend at least
  2ms.

And then for additional C tutorial topics, visit
`CProgramming.com <https://www.cprogramming.com/tutorial/c-tutorial.html>`__
or `StudyTonight <http://www.studytonight.com/c/overview-of-c.php>`__. A
good video tutorial series (as opposed to the previous text-based
tutorials) can be found on `YouTube <https://youtu.be/nXvy5900m3M>`__.

I know C/C++, now how do I use PROS?
------------------------------------

The PROS tutorials are designed to show the application of C/C++ programming
to a PROS project. The `Programming the Clawbot <../tutorials/walkthrough/clawbot.html>`_
tutorial is a great place to start, as it
goes through every step of putting together a sample PROS project. Once
you are ready to branch out and create your own custom project, looking
through the following tutorials is recommended:

-  `PROS Project Structure <../tutorials/general/project-structure.html>`_

-  `Uploading Code <../tutorials/walkthrough/uploading.html>`_

-  `Debugging <../tutorials/general/debugging.html>`_

-  `Coding FAQs <./faq.html>`_

And then you can find tutorials for specific subjects from `the ADI <../tutorials/topical/adi.html>`_
to `tasks and multithreading <../tutorials/topical/multitasking.html>`_ as well.
