===============
VelMath Factory
===============

.. contents:: :local:

okapi::VelMathFactory
===============================

A `factory <https://sourcemaking.com/design_patterns/factory_method>`_ which creates instances of
`VelMath <vel-math.html>`_. This is the preferred way of creating a `VelMath <vel-math.html>`_
instance.

You can read more about the factory pattern
`here <https://sourcemaking.com/design_patterns/factory_method>`_.

create
~~~~~~

Velocity math helper. Calculates filtered velocity. Filters using a 2-tap
`averaging filter <average-filter.html>`_ by default, unless a different filter is given. Throws a
``std::invalid_argument`` exception if ``iticksPerRev`` is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static VelMath create(double iticksPerRev, QTime isampleTime = 0_ms)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // VelMath using the V5 motor's tickPerRev
        auto myVelMath = okapi::VelMathFactory::create(okapi::imev5TPR);

================= ===================================================================
Parameters
================= ===================================================================
 iticksPerRev      The number of ticks per revolution (or whatever units you are using).
 isampleTime       The minimum time between velocity measurements.
================= ===================================================================

create
~~~~~~

Velocity math helper. Calculates filtered velocity. Filters using a 2-tap
`averaging filter <average-filter.html>`_ by default, unless a different filter is given. Throws a
``std::invalid_argument`` exception if ``iticksPerRev`` is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static VelMath create(double iticksPerRev, std::shared_ptr<Filter> ifilter, QTime isampleTime = 0_ms)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // VelMath using the V5 motor's tickPerRev and a 3-tap averaging filter
        auto myVelMath = okapi::VelMathFactory::create(okapi::imev5TPR, std::make_shared<AverageFilter<3>>());

================= ===================================================================
Parameters
================= ===================================================================
 iticksPerRev      The number of ticks per revolution (or whatever units you are using).
 ifilter           The filter used for filtering the calculated velocity.
 isampleTime       The minimum time between velocity measurements.
================= ===================================================================

createPtr
~~~~~~~~~

Velocity math helper. Calculates filtered velocity. Filters using a 2-tap
`averaging filter <average-filter.html>`_ by default, unless a different filter is given. Throws a
``std::invalid_argument`` exception if ``iticksPerRev`` is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static std::unique_ptr<VelMath> createPtr(double iticksPerRev, QTime isampleTime = 0_ms)

================= ===================================================================
Parameters
================= ===================================================================
 iticksPerRev      The number of ticks per revolution (or whatever units you are using).
 isampleTime       The minimum time between velocity measurements.
================= ===================================================================

createPtr
~~~~~~~~~

Velocity math helper. Calculates filtered velocity. Filters using a 2-tap
`averaging filter <average-filter.html>`_ by default, unless a different filter is given. Throws a
``std::invalid_argument`` exception if ``iticksPerRev`` is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static std::unique_ptr<VelMath> createPtr(double iticksPerRev, std::shared_ptr<Filter> ifilter, QTime isampleTime = 0_ms)

================= ===================================================================
Parameters
================= ===================================================================
 iticksPerRev      The number of ticks per revolution (or whatever units you are using).
 ifilter           The filter used for filtering the calculated velocity.
 isampleTime       The minimum time between velocity measurements.
================= ===================================================================

createPtr
~~~~~~~~~

Velocity math helper. Calculates filtered velocity. Filters using a 2-tap
`averaging filter <average-filter.html>`_ by default, unless a different filter is given. Throws a
``std::invalid_argument`` exception if ``iticksPerRev`` is zero.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static std::unique_ptr<VelMath> createPtr(const VelMathArgs &ivelMathArgs)

================= ===================================================================
Parameters
================= ===================================================================
 ivelMathArgs      The ``VelMathArgs`` to use.
================= ===================================================================
