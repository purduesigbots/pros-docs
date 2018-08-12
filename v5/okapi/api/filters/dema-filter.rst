===========
DEMA Filter
===========

.. contents:: :local:

okapi::DemaFilter
=================

A `Filter <abstract-filter.html>`_ that computes a double exponential moving average. This filter
will follow trends (like the rate of change of the signal) in addition to being an exponential
moving average.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        DemaFilter(double ialpha, double ibeta)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::DemaFilter demaFilter(0.2, 0.05);
          while (true) {
            demaFilter.filter(1);
            pros::delay(10);
          }
        }

=============== ===================================================================
 Parameters
=============== ===================================================================
 ialpha          The alpha gain (how much to consider the current measurement vs. the previous output).
 ibeta           The beta gain (how aggressively the filter should follow trends).
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

        virtual void setGains(double ialpha, double ibeta)

=============== ===================================================================
Parameters
=============== ===================================================================
 ialpha          The alpha gain (how much to consider the current measurement vs. the previous output).
 ibeta           The beta gain (how aggressively the filter should follow trends).
=============== ===================================================================
