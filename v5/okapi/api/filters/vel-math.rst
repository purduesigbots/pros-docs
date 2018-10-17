=============
Velocity Math
=============

.. contents:: :local:

okapi::VelMathArgs
==================

Data class for the arguments to ``VelMath``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        explicit VelMathArgs(double iticksPerRev, QTime isampleTime = 0_ms)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iticksPerRev    The number of ticks per revolution (or whatever units you are using).
 isampleTime     The minimum time between velocity measurements.
=============== ===================================================================


Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        VelMathArgs(double iticksPerRev, const std::shared_ptr<Filter> &ifilter, QTime isampleTime = 0_ms)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iticksPerRev    The number of ticks per revolution (or whatever units you are using).
 ifilter         The filter used for filtering the calculated velocity.
 isampleTime     The minimum time between velocity measurements.
=============== ===================================================================

okapi::VelMath
==============

Velocity math helper. Calculates filtered velocity. Filters using a 2-tap
`averaging filter <average-filter.html>`_ by default, unless a different filter is given. If you
are trying to make an instance of this class, you should most likely be using the
`VelMathFactory <vel-math-factory.html>`_ instead of a constructor from this class.

Constructor(s)
--------------

Throws a ``std::invalid_argument`` exception if `iticksPerRev` is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        VelMath(double iticksPerRev, const std::shared_ptr<Filter> &ifilter, QTime isampleTime, std::unique_ptr<Timer> iloopDtTimer)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iticksPerRev    The number of ticks per revolution (or whatever units you are using).
 ifilter         The filter used for filtering the calculated velocity.
 isampleTime     The minimum time between velocity measurements.
 iloopDtTimer    The timer used for calculating loop dt's.
=============== ===================================================================

----

Throws a ``std::invalid_argument`` exception if `iticksPerRev` is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        VelMath(const VelMathArgs &iparams, std::unique_ptr<Timer> iloopDtTimer)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iparams         The ``VelMathArgs``.
 iloopDtTimer    The timer used for calculating loop dt's.
=============== ===================================================================

----

Methods
-------

step
~~~~

Calculates the current velocity and acceleration. Returns the (filtered) velocity.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual QAngularSpeed step(double inewPos)

============ ===============================================================
 Parameters
============ ===============================================================
 inewPos      The new position.
============ ===============================================================

**Returns:** The current (filtered) velocity.

----

setTicksPerRev
~~~~~~~~~~~~~~

Sets ticks per revolution (or whatever units you are using).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setTicksPerRev(double iTPR)

============ ===============================================================
 Parameters
============ ===============================================================
 iTPR         The ticks per revolution.
============ ===============================================================

----

getVelocity
~~~~~~~~~~~

Returns the last calculated velocity.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual QAngularSpeed getVelocity() const

**Returns:** The last calculated velocity.

----

getAccel
~~~~~~~~

Returns the last calculated acceleration.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual QAngularAcceleration getAccel() const

**Returns:** The last calculated acceleration.
