=======================================
Async Motion Profile Controller Builder
=======================================

.. contents:: :local:

okapi::AsyncMotionProfileControllerBuilder
==========================================

A `builder <https://sourcemaking.com/design_patterns/builder>`_ which creates async motion profile
controllers. This is the preferred way of creating an async motion profile controller. You can
read more about the builder pattern `here <https://sourcemaking.com/design_patterns/builder>`_.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncMotionProfileControllerBuilder()

----

Methods
-------

withOutput
~~~~~~~~~~

Sets the output. This must be used with ``buildLinearMotionProfileController()``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncMotionProfileControllerBuilder &withOutput(
          const Motor &ioutput,
          const QLength &idiameter,
          const AbstractMotor::GearsetRatioPair &ipair
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Motor in port 1 with a 4 inch wheel and red gearset
        builder.withOutput(1, 4_in, AbstractMotor::gearset::red);

============ ===============================================================
 Parameters
============ ===============================================================
 ioutput      The output.
 idiameter    The diameter of the mechanical part the motor spins.
 ipair        The gearset.
============ ===============================================================

**Returns:** An ongoing builder.

----

withOutput
~~~~~~~~~~

Sets the output. This must be used with ``buildLinearMotionProfileController()``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncMotionProfileControllerBuilder &withOutput(
          const MotorGroup &ioutput,
          const QLength &idiameter,
          const AbstractMotor::GearsetRatioPair &ipair
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Motor group in ports 1 & 2 (port 2 reversed) with a 4 inch wheel and red gearset
        builder.withOutput({1, -2}, 4_in, AbstractMotor::gearset::red);

============ ===============================================================
 Parameters
============ ===============================================================
 ioutput      The output.
 idiameter    The diameter of the mechanical part the motor spins.
 ipair        The gearset.
============ ===============================================================

**Returns:** An ongoing builder.

----

withOutput
~~~~~~~~~~

Sets the output. This must be used with ``buildLinearMotionProfileController()``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncMotionProfileControllerBuilder &withOutput(
          const std::shared_ptr<ControllerOutput<double>> &ioutput,
          const QLength &idiameter,
          const AbstractMotor::GearsetRatioPair &ipair
        )

============ ===============================================================
 Parameters
============ ===============================================================
 ioutput      The output.
 idiameter    The diameter of the mechanical part the motor spins.
 ipair        The gearset.
============ ===============================================================

**Returns:** An ongoing builder.

----

withOutput
~~~~~~~~~~

Sets the output. This must be used with ``buildMotionProfileController()``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncMotionProfileControllerBuilder &withOutput(
          const ChassisController &icontroller
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        auto drive = ChassisControllerBuilder().withMotors(1, -2).build();
        builder.withOutput(*drive);

============ ===============================================================
 Parameters
============ ===============================================================
 icontroller  The chassis controller to use.
============ ===============================================================

**Returns:** An ongoing builder.

----

withOutput
~~~~~~~~~~

Sets the output. This must be used with ``buildMotionProfileController()``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncMotionProfileControllerBuilder &withOutput(
          const std::shared_ptr<ChassisController> &icontroller
        )

   .. tab :: Example
      .. highlight:: cpp
      ::

        auto drive = ChassisControllerBuilder().withMotors(1, -2).build();
        builder.withOutput(drive);

============ ===============================================================
 Parameters
============ ===============================================================
 icontroller  The chassis controller to use.
============ ===============================================================

**Returns:** An ongoing builder.

----

withOutput
~~~~~~~~~~

Sets the output. This must be used with ``buildMotionProfileController()``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncMotionProfileControllerBuilder &withOutput(
          const std::shared_ptr<ChassisModel> &imodel,
          const ChassisScales &iscales,
          const AbstractMotor::GearsetRatioPair &ipair
        )

============ ===============================================================
 Parameters
============ ===============================================================
 icontroller  The chassis controller to use.
 iscales      The chassis dimensions.
 ipair        The gearset.
============ ===============================================================

**Returns:** An ongoing builder.

----

withLimits
~~~~~~~~~~

Sets the limits.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncMotionProfileControllerBuilder &withLimits(const PathfinderLimits &ilimits)

   .. tab :: Example
      .. highlight:: cpp
      ::

        // 1 m/s max vel, 2 m/s/s max accel, 10 m/s/s/s max jerk
        builder.withLimits({1, 2, 10});

============ ===============================================================
 Parameters
============ ===============================================================
 ilimits      The limits.
============ ===============================================================

**Returns:** An ongoing builder.

----

withTimeUtilFactory
~~~~~~~~~~~~~~~~~~~

Sets the ``TimeUtilFactory`` used when building the controller. The default is the static
``TimeUtilFactory``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        AsyncMotionProfileControllerBuilder &withTimeUtilFactory(const TimeUtilFactory &itimeUtilFactory)

================== ===============================================================
 Parameters
================== ===============================================================
 itimeUtilFactory   The ``TimeUtilFactory``.
================== ===============================================================

**Returns:** An ongoing builder.

----

buildLinearMotionProfileController
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Builds the ``AsyncLinearMotionProfileController``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::shared_ptr<AsyncLinearMotionProfileController> buildLinearMotionProfileController()

   .. tab :: Example
      .. highlight:: cpp
      ::

        auto controller = builder.build();

**Returns:** A fully built ``AsyncLinearMotionProfileController``.

----

buildMotionProfileController
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Builds the ``AsyncMotionProfileController``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::shared_ptr<AsyncMotionProfileController> buildMotionProfileController()

   .. tab :: Example
      .. highlight:: cpp
      ::

        auto controller = builder.build();

**Returns:** A fully built ``AsyncMotionProfileController``.
