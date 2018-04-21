=================
Composable Filter
=================

.. contents:: :local:

okapi::ComposableFilterArgs
===========================

Data class for the arguments to ``ComposableFilter``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ComposableFilterArgs(const std::initializer_list<std::shared_ptr<Filter>> ilist)

=============== ===================================================================
 Parameters
=============== ===================================================================
 ilist           The filters to use in sequence.
=============== ===================================================================

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

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::ComposableFilter filter;
          filter.addFilter([] { return new okapi::MedianFilter<3>(); });  // First filter in the list
          filter.addFilter([] { return new okapi::AverageFilter<5>(); }); // Second filter in the list
        }

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

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ComposableFilter(const ComposableFilterArgs &iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iparams         The ``ComposableFilter`` arguments.
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

        virtual double filter(const double ireading) override

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

        virtual double getOutput() const override

**Returns:** The previous output from the filter.

----

addFilter
~~~~~~~~~

Adds a filter to the end of the sequence.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void addFilter(std::shared_ptr<Filter> ifilter)

================= ===============================================================
 Parameters
================= ===============================================================
 ifilter           The filter to add.
================= ===============================================================

**Returns:** The filtered result.
