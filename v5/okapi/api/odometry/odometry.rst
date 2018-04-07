========
Odometry
========

.. contents:: :local:

okapi::OdomState
================

Data class for the state of the robot (position and orientation).

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        OdomState()

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        OdomState(const double ix, const double iy, const double itheta)

=============== ===================================================================
 Parameters
=============== ===================================================================
 ix              The x coordinate.
 iy              The y coordinate.
 itheta          The rotation around the z axis.
=============== ===================================================================

----

okapi::OdometryArgs
===================

Data class for the arguments to ``Odometry``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        OdometryArgs(const SkidSteerModel &imodel, const double iscale, const double iturnScale)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imodel          A model to read sensors from.
 iscale          The straight scale (encoder ticks to mm).
 iturnScale      The turn scale (encoder ticks to radians).
=============== ===================================================================

----

okapi::Odometry
================

Tracks the movement of the robot and estimates its position in coordinates relative to the robot's
starting position (assumed to be ``(0, 0)``). If you want to use this class to help write an
autonomous program, take a look at
`OdomChassisController <../chassis/controller/odom-chassis-controller.html>`_ instead.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Odometry(const SkidSteerModel &imodel, const double iscale, const double iturnScale)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imodel          A model to read sensors from.
 iscale          The straight scale (encoder ticks to mm).
 iturnScale      The turn scale (encoder ticks to radians).
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Odometry(const OdometryArgs &iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iparams         The ``Odometry`` arguments.
=============== ===================================================================

----

Methods
-------

setScales
~~~~~~~~~

Sets the drive and turn scales.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setScales(const double iscale, const double iturnScale)

============ ===============================================================
 Parameters
============ ===============================================================
 iscale          The straight scale (encoder ticks to mm).
 iturnScale      The turn scale (encoder ticks to radians).
============ ===============================================================

----

loop
~~~~

Do odometry math in an infinite loop.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void loop()

----

getState
~~~~~~~~

Returns the current state.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual OdomState getState() const

**Returns:** The current state.

----

setState
~~~~~~~~

Sets a new state to be the current state.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setState(const OdomState &istate)

=============== ===================================================================
Parameters
=============== ===================================================================
 istate          The new odometry state.
=============== ===================================================================
