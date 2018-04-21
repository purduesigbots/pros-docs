======================
Three Encoder Odometry
======================

.. contents:: :local:

okapi::ThreeEncoderOdometryArgs
===============================

Data class for the arguments to ``ThreeEncoderOdometry``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ThreeEncoderOdometryArgs(const SkidSteerModel &imodel, const double iscale, const double iturnScale, const double imiddleScale)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imodel          A model to read sensors from.
 iscale          The straight scale (encoder ticks to mm).
 iturnScale      The turn scale (encoder ticks to radians).
=============== ===================================================================

----

okapi::ThreeEncoderOdometry
===========================

Tracks the movement of the robot and estimates its position in coordinates relative to the robot's
starting position (assumed to be ``(0, 0)``). If you want to use this class to help write an
autonomous program, take a look at `OdomChassisController <../chassis/controller/odom-chassis-controller.html>`_ instead.

This class uses a third encoder, mounted between the normal two encoders and perpendicular to them.
This third encoder lets the robot track sideways drifting that the two encoder model misses.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ThreeEncoderOdometry(const ThreeEncoderSkidSteerModel &imodel, const double iscale, const double iturnScale, const double imiddleScale)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imodel          A model to read sensors from.
 iscale          The straight scale (encoder ticks to mm).
 iturnScale      The turn scale (encoder ticks to radians).
 imiddleScale    The turn scale for the middle encoder (mounted perpendicular to the two side encoders).
=============== ===================================================================

----

Methods
-------

loop
~~~~

Do odometry math in an infinite loop.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void loop() override
