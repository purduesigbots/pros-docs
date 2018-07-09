==================
Passthrough Filter
==================

.. contents:: :local:

okapi::PassthroughFilterArgs
============================

Data class for the arguments to ``PassthroughFilter``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        PassthroughFilterArgs()

okapi::PassthroughFilter
========================

A simple `Filter <abstract-filter.html>`_ that does no filtering and just passes the input through.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        PassthroughFilter()

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
