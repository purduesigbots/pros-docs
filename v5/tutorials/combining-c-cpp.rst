===================
Combining C and C++
===================

The PROS C and C++ APIs cover the exact same feature set, which means that there
is no significant advantage to using functions from one API in another language.
However, if you do find yourself wanting to use C API functions in C++, these functions
are accessible through the namespace ``pros::c``.

This can also be done by using the ``pros::c`` namespace as such:

::

  using namespace pros::c;

As always, bear in mind the dangers of setting a global namespace and only use the
``using`` keyword in appropriate scopes.

For guidance on mixing C and C++ code with code you've written, see
`this tutorial <https://isocpp.org/wiki/faq/mixing-c-and-cpp>`_.
