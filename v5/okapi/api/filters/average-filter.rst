==============
Average Filter
==============

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.X.X and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

.. contents:: :local:

okapi::AverageFilter
====================

A `Filter <abstract-filter.html>`_ that computes a moving average.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        template <std::size_t n> AverageFilter()

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::AverageFilter<5> avgFilter;
          while (true) {
            avgFilter.filter(1);
            pros::delay(10);
          }
        }

=============== ===================================================================
 Parameters
=============== ===================================================================
 n               The number of taps in the filter.
=============== ===================================================================

----

Methods
-------

filter
~~~~~~

Filters a value, like a sensor reading.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double filter(const double ireading) override

============ ===============================================================
 Parameters
============ ===============================================================
 ireading     The new measurement
============ ===============================================================

**Returns:** The filtered result.

----

getOutput
~~~~~~~~~

Returns the previous output from the filter.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double getOutput() const override

**Returns:** The previous output from the filter.
