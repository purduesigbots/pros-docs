=============
Odometry Math
=============

.. contents:: :local:

okapi::DistanceAndAngle
=======================

Data class for a robot movement in the odom frame.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        DistanceAndAngle()


.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        DistanceAndAngle(const double ilength, const double itheta)

=============== ===================================================================
 Parameters
=============== ===================================================================
 ilength         The vector length.
 itheta          The vector angle.
=============== ===================================================================

----

okapi::OdomMath
===============

Methods
-------

computeDistanceToPoint
~~~~~~~~~~~~~~~~~~~~~~

Computes the distance from the given Odometry state to the given point.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static double computeDistanceToPoint(const double ix, const double iy, const OdomState &istate)

============ ===============================================================
 Parameters
============ ===============================================================
 ix           The x coordinate.
 iy           The y coordinate.
 istate       The current Odometry state.
============ ===============================================================

**Returns:** The distance between the given point and current state.

----

computeAngleToPoint
~~~~~~~~~~~~~~~~~~~

Computes the angle from the given Odometry state to the given point.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static double computeAngleToPoint(const double ix, const double iy, const OdomState &istate)

============ ===============================================================
 Parameters
============ ===============================================================
 ix           The x coordinate.
 iy           The y coordinate.
 istate       The current Odometry state.
============ ===============================================================

**Returns:** The angle between the given point and current state.

----

computeDistanceAndAngleToPoint
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Computes the distance and angle from the given Odometry state to the given point.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static DistanceAndAngle computeDistanceAndAngleToPoint(const double ix, const double iy, const OdomState &istate)

============ ===============================================================
 Parameters
============ ===============================================================
 ix           The x coordinate.
 iy           The y coordinate.
 istate       The current Odometry state.
============ ===============================================================

**Returns:** The distance and angle between the given point and current state.

----

guessScales
~~~~~~~~~~~

Attempt to guess Odometry scales based on robot dimensions.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static std::tuple<double, double> guessScales(const double chassisDiam, const double wheelDiam, const double ticksPerRev = 1800.0)

============ ===============================================================
 Parameters
============ ===============================================================
 chassisDiam  The center-to-center wheelbase diameter in inches.
 wheelDiam    The edge-to-edge wheel diameter in inches.
 ticksPerRev  The ticks per wheel revolution.
============ ===============================================================

**Returns:** The scales in the format ``{straight scale, turn scale}``.
