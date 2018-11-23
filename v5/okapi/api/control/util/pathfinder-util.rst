====================
Pathfinder Utilities
====================

.. contents:: :local:

Structures
----------

Point
~~~~~

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        struct Point {
          QLength x;    // X coordinate relative to the start of the movement
          QLength y;    // Y coordinate relative to the start of the movement
          QAngle theta; // Exit angle relative to the start of the movement
        };

----

PathfinderLimits
~~~~~~~~~~~~~~~~

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        struct PathfinderLimits {
          double maxVel;   // Maximum robot velocity in m/s
          double maxAccel; // Maximum robot acceleration in m/s/s
          double maxJerk;  // Maximum robot jerk in m/s/s/s
        };
