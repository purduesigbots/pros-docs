======================
Chassis Controller PID
======================

.. contents:: :local:

okapi::ChassisControllerPID
===========================

A `ChassisController <abstract-chassis-controller.html>`_ using PID control. Does not use the V5
motor's integrated control. The motors passed in will be put into degree units. If you are trying
to make an instance of this class, you should most likely be using the
`ChassisControllerFactory <chassis-controller-factory.html>`_ instead of a constructor from this
class. Throws a ``std::invalid_argument`` exception if the gear ratio is zero.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisControllerPID(const TimeUtil &itimeUtil,
                             std::unique_ptr<AbstractRate> irate,
                             const std::shared_ptr<ChassisModel> &imodel,
                             std::unique_ptr<IterativePosPIDController> idistanceController,
                             std::unique_ptr<IterativePosPIDController> iturnController,
                             std::unique_ptr<IterativePosPIDController> iangleController,
                             AbstractMotor::GearsetRatioPair igearset = AbstractMotor::gearset::red,
                             const ChassisScales &iscales = ChassisScales({1, 1}),
                             const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>())

======================   =======================================================================================
 Parameters
======================   =======================================================================================
 itimeUtil                See ``TimeUtil`` docs.
 irate                    An ``AbstractRate``.
 imodel                   The underlying `ChassisModel <../model/abstract-chassis-model.html>`_ to control.
 idistanceController      The `IterativePosPIDController <../../control/iterative/iterative-pos-pid-controller.html>`_ for distance control.
 iturnController          The `IterativePosPIDController <../../control/iterative/iterative-pos-pid-controller.html>`_ for turning.
 iangleController         The `IterativePosPIDController <../../control/iterative/iterative-pos-pid-controller.html>`_ for angle control (while driving straight).
 igearset                 The motor's internal planetary gearset and external gear ratio.
 iscales                  See `ChassisScales <chassis-scales.html>`_ docs.
 ilogger                  The logger this instance will log to.
======================   =======================================================================================

Methods
-------

moveDistance
~~~~~~~~~~~~

Drives the robot straight for a distance (using closed-loop control). Blocks while the robot is
driving.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void moveDistance(QLength itarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 itarget         The distance to travel.
=============== ===================================================================

----

moveDistance
~~~~~~~~~~~~

Drives the robot straight for a distance with units of motor degrees (using closed-loop control).
Blocks while the robot is driving.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void moveDistance(int itarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 itarget         The distance to travel in motor degrees.
=============== ===================================================================

----

moveDistanceAsync
~~~~~~~~~~~~~~~~~

Drives the robot straight for a distance (using closed-loop control). Returns immediately (does not
block while the robot is driving).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void moveDistanceAsync(QLength itarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 itarget         The distance to travel.
=============== ===================================================================

----

moveDistanceAsync
~~~~~~~~~~~~~~~~~

Drives the robot straight for a distance with units of motor degrees (using closed-loop control).
Returns immediately (does not block while the robot is driving).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void moveDistanceAsync(double itarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 itarget         The distance to travel in motor degrees.
=============== ===================================================================

----

turnAngle
~~~~~~~~~

Turns the robot clockwise in place (using closed-loop control). Blocks while the robot is turning.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void turnAngle(QAngle idegTarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn.
=============== ===================================================================

----

turnAngle
~~~~~~~~~

Turns the robot clockwise in place with units of motor degrees (using closed-loop control). Blocks
while the robot is turning.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void turnAngle(float idegTarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn in motor degrees.
=============== ===================================================================

----

turnAngleAsync
~~~~~~~~~~~~~~

Turns the robot clockwise in place (using closed-loop control). Returns immediately (does not block
while the robot is driving).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void turnAngleAsync(QAngle idegTarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn.
=============== ===================================================================

----

turnAngleAsync
~~~~~~~~~~~~~~

Turns the robot clockwise in place with units of motor degrees (using closed-loop control). Returns
immediately (does not block while the robot is driving).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void turnAngleAsync(double idegTarget) override

=============== ===================================================================
Parameters
=============== ===================================================================
 idegTarget      The angle to turn in motor degrees.
=============== ===================================================================

----

waitUntilSettled
~~~~~~~~~~~~~~~~

Delays until the currently executing movement completes.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void waitUntilSettled() override

----

stop
~~~~

Stops the robot (set all the motors to ``0`` and stops the PID controllers).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void stop() override

----

startThread
~~~~~~~~~~~

Starts the internal thread. This should not be called by normal users. This method is called by the
``ChassisControllerFactory`` when making a new instance of this class.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void startThread()

----

getChassisScales
~~~~~~~~~~~~~~~~

Gets the ``ChassisScales``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisScales getChassisScales() const override

**Returns:** The ``ChassisScales``.

----

getGearsetRatioPair
~~~~~~~~~~~~~~~~~~~

Gets the ``GearsetRatioPair``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual AbstractMotor::GearsetRatioPair getGearsetRatioPair() const override

**Returns:** The ``GearsetRatioPair``.

----

setVelocityMode
~~~~~~~~~~~~~~~

Sets the velocity mode flag. When the controller is in velocity mode, the control loop will set
motor velocities. When the controller is in voltage mode (``ivelocityMode = false``), the control
loop will set motor voltages. Additionally, when the controller is in voltage mode, it will not obey
maximum velocity limits.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setVelocityMode(bool ivelocityMode)

=============== ===================================================================
Parameters
=============== ===================================================================
 ivelocityMode   Whether the controller should be in velocity or voltage mode.
=============== ===================================================================

----

setGains
~~~~~~~~

Sets the gains for all controllers.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

          void setGains(
            const IterativePosPIDController::Gains &idistanceGains,
            const IterativePosPIDController::Gains &iturnGains,
            const IterativePosPIDController::Gains &iangleGains
          )

================ ===================================================================
Parameters
================ ===================================================================
 idistanceGains   The gains for the distance controller.
 iturnGains       The gains for the turn controller.
 iangleGains      The gains for the angle controller.
================ ===================================================================

----

getGains
~~~~~~~~

Gets the current controller gains.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

          std::tuple<IterativePosPIDController::Gains,
                     IterativePosPIDController::Gains,
                     IterativePosPIDController::Gains>
          getGains() const

**Returns:** The current controller gains in the order: distance, turn, angle.
