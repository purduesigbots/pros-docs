==================================
(Abstract) Odom Chassis Controller
==================================

.. contents:: :local:

okapi::OdomChassisController
============================

`Odometry <../../odometry/odometry.html>`_ based chassis controller. Starts task at the default
priority plus 1 for odometry when constructed. Moves the robot around in the odom frame. Instead of
telling the robot to drive forward or turn some amount, you instead tell it to drive to a specific
point on the field or turn to a specific angle relative to its starting position.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        OdomChassisController(const OdometryArgs &iparams, const float imoveThreshold = 10)

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 iparams                  Arguments for the internal `Odometry <../../odometry/odometry.html>`_.
 imoveThreshold           The minimum length movement. Any movements below this threshold will not be performed.
======================   =======================================================================================

Methods
-------

driveToPoint
~~~~~~~~~~~~

Drives the robot straight to a point in the odom frame.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void driveToPoint(const float ix, const float iy, const bool ibackwards = false, const float ioffset = 0) = 0

=============== =======================================================================================
Parameters
=============== =======================================================================================
 ix              The x coordinate.
 iy              The y coordinate.
 ibackwards      Whether to drive to the target point backwards.
 ioffset         An offset distance from the target point, in the direction pointing towards the robot.
=============== =======================================================================================

----

turnToAngle
~~~~~~~~~~~

Turns the robot to face an angle in the odom frame.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void turnToAngle(const float iangle) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 iangle          The angle to turn to.
=============== ===================================================================

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
 istate          The new Odometry state.
=============== ===================================================================

----

setMoveThreshold
~~~~~~~~~~~~~~~~

Sets a new move threshold. Any movements below this threshold will not be performed.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setMoveThreshold(const float imoveThreshold)

=============== ===================================================================
Parameters
=============== ===================================================================
 imoveThreshold  The new move threshold.
=============== ===================================================================
