==========
EMA Filter
==========

.. contents:: :local:

okapi::EmaFilterArgs
====================

Data class for the arguments to ``EmaFilter``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        explicit EmaFilterArgs(double ialpha)

=============== ===================================================================
 Parameters
=============== ===================================================================
 ialpha          The alpha gain (how much to consider the current measurement vs. the previous output).
=============== ===================================================================

okapi::EmaFilter
================

A `Filter <abstract-filter.html>`_ that computes an exponential moving average.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        explicit EmaFilter(double ialpha)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::EmaFilter emaFilter(0.2);
          while (true) {
            emaFilter.filter(1);
            pros::delay(10);
          }
        }

=============== ===================================================================
 Parameters
=============== ===================================================================
 ialpha          The alpha gain (how much to consider the current measurement vs. the previous output).
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        explicit EmaFilter(const EmaFilterArgs &iargs)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iargs           The ``EmaFilterArgs`` to use.
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

        double filter(double ireading) override

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

setGains
~~~~~~~~~

Sets new filter gains.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setGains(double ialpha)

=============== ===================================================================
Parameters
=============== ===================================================================
 ialpha          The alpha gain (how much to consider the current measurement vs. the previous filtered result).
=============== ===================================================================
