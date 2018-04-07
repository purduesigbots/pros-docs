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

        VelMathArgs(const double iticksPerRev)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iticksPerRev    The number of ticks per revolution (or whatever units you are using).
=============== ===================================================================


Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        VelMathArgs(const double iticksPerRev, const ComposableFilterArgs &ifilterParams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iticksPerRev    The number of ticks per revolution (or whatever units you are using).
 ifilterParams   The filter to use for filtering the velocity.
=============== ===================================================================

okapi::VelMath
==============

Velocity math helper. Calculates filtered velocity. Filters using a 3-tap `median filter <median-filter.html>`_ and a 5-tap
`averaging filter <average-filter.html>`_ by default, unless a different filter is given in the constructor.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        VelMath(const double iticksPerRev)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::VelMath velMath(1800); // V5 motors are 1800 ticks per revolution with the 100 rpm gearset
        }

=============== ===================================================================
 Parameters
=============== ===================================================================
 iticksPerRev    The number of ticks per revolution (or whatever units you are using).
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        VelMath(const double iticksPerRev, const ComposableFilterArgs &ifilterParams)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::VelMath velMath(1800, // V5 motors are 1800 ticks per revolution with the 100 rpm gearset
            ComposableFilterArgs({[] { return new MedianFilter<3>(); },
                                  [] { return new AverageFilter<5>(); }}));
        }

=============== ===================================================================
 Parameters
=============== ===================================================================
 iticksPerRev    The number of ticks per revolution (or whatever units you are using).
 ifilterParams   The filter to use for filtering the velocity.
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        VelMath(const VelMathArgs &iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iparams         The ``VelMath`` arguments.
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

        virtual double step(const double inewPos)

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

        virtual void setTicksPerRev(const double iTPR)

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

        virtual double getVelocity() const

**Returns:** The last calculated velocity.

----

getAccel
~~~~~~~~

Returns the last calculated acceleration.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getAccel() const

**Returns:** The last calculated acceleration.
