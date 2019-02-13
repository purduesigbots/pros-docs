=========================
PROS Kernel 3.1.6 Release
=========================

.. post:: 12 February, 2019
   :tags: blog, kernel-release

.. warning:: Be sure to look at important upgrade instructions below.

New Features:

- Add support for hot/cold linking
- Bugfixes to LLEMU and task notifications

Usability Impovements:

- Refactored Makefiles

Bugfixes:

- Miscellaneous RTOS bugfixes
- Fixed a possible buffer overrun when using controller printing

Important Upgrade Instructions
------------------------------

In order to support modified hot/cold linking we needed to modify the Makefile, which
is intended to be modified by you. When upgrading your project (regardless of whether
you enable hot/cold linking), you must modify your Makefile as follows:

1. Remove all lines after ``-include ./common.mk``
2. Add the following two lines:

    .. highlight: Makefile
    .. code-block:: Makefile
    
        # Set this to 1 to add additional rules to compile your project as a PROS library template
        IS_LIBRARY:=0

Your Makefile should now be similar to the template `Makefile <https://github.com/purduesigbots/pros/blob/master/template-Makefile>`_.