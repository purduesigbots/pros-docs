======================================
Async Linear Motion Profile Controller
======================================

.. contents:: :local:

okapi::AsyncLinearMotionProfileController
=========================================

An ``AsyncController`` which generates and follows 1D motion profiles.

This controller is internally backed by `Pathfinder <https://github.com/JacisNonsense/Pathfinder>`_. There are a few open issues users should be aware about:

- Pathfinder cannot generate negative velocities, so backward movements do not work
    - Moving backwards: `<https://github.com/JacisNonsense/Pathfinder/issues/39>`_
- Very long movements (typically movements much longer than a VEX field) can potentially never reach maximum speed
    - `<https://github.com/JacisNonsense/Pathfinder/issues/43>`_

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncLinearMotionProfileController(const TimeUtil &itimeUtil,
                                           const PathfinderLimits &ilimits,
                                           const std::shared_ptr<ControllerOutput<double>> &ioutput,
                                           const QLength &idiameter,
                                           const AbstractMotor::GearsetRatioPair &ipair,
                                           const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>())

=============== ===================================================================
 Parameters
=============== ===================================================================
 itimeUtil       See ``TimeUtil`` docs.
 ilimits         The default limits.
 ioutput         The output to write velocity targets to.
 idiameter       The effective diameter for whatever the motor spins.
 ipair           The gearset.
 ilogger         The logger this instance will log to.
=============== ===================================================================

----

Methods
-------

generatePath
~~~~~~~~~~~~

Generates a path which intersects the given waypoints and saves it internally with a key of pathId.
Call executePath() with the same pathId to run it.

If the waypoints form a path which is impossible to achieve, an instance of ``std::runtime_error``
is thrown (and an error is logged) which describes the waypoints. If there are no waypoints, no
path is generated.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void generatePath(std::initializer_list<QLength> iwaypoints, const std::string &ipathId)

============ ===============================================================
 Parameters
============ ===============================================================
 iwaypoints   The waypoints to hit on the path.
 ipathId      A unique identifier to save the path with.
============ ===============================================================

----

generatePath
~~~~~~~~~~~~

Generates a path which intersects the given waypoints and saves it internally with a key of pathId.
Call executePath() with the same pathId to run it.

If the waypoints form a path which is impossible to achieve, an instance of ``std::runtime_error``
is thrown (and an error is logged) which describes the waypoints. If there are no waypoints, no
path is generated.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void generatePath(
          std::initializer_list<QLength> iwaypoints,
          const std::string &ipathId,
          const PathfinderLimits &ilimits
        )

============ ===============================================================
 Parameters
============ ===============================================================
 iwaypoints   The waypoints to hit on the path.
 ipathId      A unique identifier to save the path with.
 ilimits      The limits to use for this path only.
============ ===============================================================

----

removePath
~~~~~~~~~~

Removes a path and frees the memory it used.
This function returns true if the path was either deleted or didn't exist in the first place.
It returns false if the path could not be removed because it is running.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool removePath(const std::string &ipathId)

**Returns:** True if the path no longer exists

============ ===============================================================
 Parameters
============ ===============================================================
 ipathId      A unique identifier for the path, previously passed to ``generatePath()``.
============ ===============================================================

----

forceRemovePath
~~~~~~~~~~~~~~~

Attempts to remove a path without stopping execution, then if that fails, disables the controller and removes the path.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void forceRemovePath(const std::string &ipathId)

============ ===============================================================
 Parameters
============ ===============================================================
 ipathId      The path ID that will be removed.
============ ===============================================================

----

getPaths
~~~~~~~~

Gets the identifiers of all paths saved in this ``AsyncMotionProfileController``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::vector<std::string> getPaths()

**Returns:** The identifiers of all paths.

----

setTarget
~~~~~~~~~

Executes a path with the given ID. If there is no path matching the ID, the method will return.
Any targets set while a path is being followed will be ignored.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setTarget(std::string ipathId) override

============ ===============================================================
 Parameters
============ ===============================================================
 ipathId      A unique identifier for the path, previously passed to ``generatePath()``.
============ ===============================================================

----

setTarget
~~~~~~~~~

Executes a path with the given ID. If there is no path matching the ID, the method will return.
Any targets set while a path is being followed will be ignored.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setTarget(std::string ipathId, bool ibackwards)

============ ===============================================================
 Parameters
============ ===============================================================
 ipathId      A unique identifier for the path, previously passed to ``generatePath()``.
 ibackwards   Whether to follow the path backwards.
============ ===============================================================

----

controllerSet
~~~~~~~~~~~~~

Writes the value of the controller output. This method might be automatically called in another
thread by the controller. This just calls ``setTarget()``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void controllerSet(std::string ivalue) override

============ ===============================================================
 Parameters
============ ===============================================================
 ivalue       The controller's output.
============ ===============================================================

----

getTarget
~~~~~~~~~

Gets the last set target, or the default target if none was set.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::string getTarget() override

**Returns:** The last target.

----

getTarget
~~~~~~~~~

Gets the last set target, or the default target if none was set.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::string getTarget() const

**Returns:** The last target.

----

waitUntilSettled
~~~~~~~~~~~~~~~~

Blocks the current task until the controller has settled. This controller is settled when it has
finished following a path. If no path is being followed, it is settled.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void waitUntilSettled() override

----

moveTo
~~~~~~

Generates a new path from the position (typically the current position) to the target and blocks
until the controller has settled. Does not save the path which was generated.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void moveTo(const QLength &iposition, const QLength &itarget, bool ibackwards = false)

============ ===============================================================
 Parameters
============ ===============================================================
 iposition    The starting position.
 itarget      The target position.
 ibackwards   Whether to follow the path backwards.
============ ===============================================================

----

moveTo
~~~~~~

Generates a new path from the position (typically the current position) to the target and blocks
until the controller has settled. Does not save the path which was generated.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void moveTo(
          const QLength &iposition, const QLength &itarget,
          const PathfinderLimits &ilimits,
          bool ibackwards = false
        )

============ ===============================================================
 Parameters
============ ===============================================================
 iposition    The starting position.
 itarget      The target position.
 ilimits      The limits to use for this path only.
 ibackwards   Whether to follow the path backwards.
============ ===============================================================

----

getError
~~~~~~~~

Returns the last error of the controller. Does not update when disabled. Returns zero if there is
no path currently being followed.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double getError() const override

**Returns:** The last error of the controller.

----

isSettled
~~~~~~~~~

Returns whether the controller has settled at the target. Setting is when the error or derivative
of error has been small enough for a long enough period.

If the controller is disabled, this method must return true.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool isSettled() override

**Returns:** Whether the controller is settled.

----

reset
~~~~~

Resets the controller's internal state so it is similar to when it was first initialized, while
keeping any user-configured information. This implementation also stops movement. This
implementation also stops movement.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void reset() override

----

flipDisable
~~~~~~~~~~~

Changes whether the controller is off or on. Turning the controller on after it was off will NOT
cause the controller to move to its last set target, unless it was reset in that time.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void flipDisable() override

----

flipDisable
~~~~~~~~~~~

Sets whether the controller is off or on. Turning the controller on after it was off will NOT
cause the controller to move to its last set target, unless it was reset in that time.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void flipDisable(bool iisDisabled) override

============= ===============================================================
 Parameters
============= ===============================================================
 iisDisabled   Whether the controller should be disabled.
============= ===============================================================

----

isDisabled
~~~~~~~~~~

Returns whether the controller is currently disabled.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool isDisabled() override

**Returns:** Whether the controller is currently disabled.

----

tarePosition
~~~~~~~~~~~~

Sets the "absolute" zero position of the controller to its current position.

This implementation does nothing because the API always requires the starting position to be
specified.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void tarePosition() override

----

startThread
~~~~~~~~~~~

Starts the internal thread. This should not be called by normal users. This method is called by the
``AsyncControllerFactory`` when making a new instance of this class.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void startThread()

----

getThread
~~~~~~~~~

Returns the underlying thread handle.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

          CrossplatformThread *getThread() const

**Returns:** The underlying thread handle.
