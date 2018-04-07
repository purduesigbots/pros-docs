===========================
Odom Chassis Controller PID
===========================

.. contents:: :local:

okapi::OdomChassisControllerPID
===============================

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

        OdomChassisControllerPID(const OdometryArgs &iparams, const IterativePosPIDControllerArgs &idistanceArgs, const IterativePosPIDControllerArgs &iangleArgs, const float imoveThreshold = 10)

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 iparams                  Arguments for the internal `Odometry <../../odometry/odometry.html>`_.
 idistanceArgs            The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the distance PID controller.
 iangleArgs               The `IterativePosPIDControllerArgs <../../control/iterative/iterative-pos-pid-controller.html>`_ for the angle PID controller.
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

        virtual void driveToPoint(const float ix, const float iy, const bool ibackwards = false, const float ioffset = 0) override

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

        virtual void turnToAngle(const float iangle) override

=============== ===================================================================
Parameters
=============== ===================================================================
 iangle          The angle to turn to.
=============== ===================================================================
