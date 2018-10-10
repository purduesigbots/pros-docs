=================
Composable Filter
=================

.. contents:: :local:

okapi::ComposableFilter
=======================

A composable filter is a `Filter <abstract-filter.html>`_ that consists of other filters. The input
signal is passed through each filter in sequence. The final output of this filter is the output of
the last filter.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ComposableFilter()

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ComposableFilter(const std::initializer_list<std::shared_ptr<Filter>> ilist)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::ComposableFilter filter({
            [] { return new MedianFilter<3>(); }, // First filter in the list
            [] { return new AverageFilter<5>(); } // Second filter in the list
          });
        }

=============== ===================================================================
 Parameters
=============== ===================================================================
 ilist            The lambdas used to allocate filters.
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

----

addFilter
~~~~~~~~~

Adds a filter to the end of the sequence.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void addFilter(const std::shared_ptr<Filter> &ifilter)

================= ===============================================================
 Parameters
================= ===============================================================
 ifilter           The filter to add.
================= ===============================================================

**Returns:** The filtered result.
