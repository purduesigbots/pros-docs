=============
Median Filter
=============

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.X.X and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

.. contents:: :local:

okapi::MedianFilter
===================

A `Filter <abstract-filter.html>`_ that computes the median value.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        template <std::size_t n> MedianFilter()

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::MedianFilter<5> medianFilter;
          while (true) {
            medianFilter.filter(1);
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
