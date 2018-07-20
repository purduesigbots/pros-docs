==================================
(Abstract) Read-Only Chassis Model
==================================

.. contents:: :local:

okapi::ReadOnlyChassisModel
===========================

A version of the `ChassisModel <abstract-chassis-model.html>`_ that only supports read methods,
such as querying sensor values. This class does not let you write to motors, so it supports having
multiple owners and as a result copying is enabled.

Methods
-------

getSensorVals
~~~~~~~~~~~~~

Returns the current sensor values. The values must be specified in the format
``{left, right, ...}``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::valarray<std::int32_t> getSensorVals() const = 0

**Returns:** The current sensor values (the formatting is implementation dependent).
