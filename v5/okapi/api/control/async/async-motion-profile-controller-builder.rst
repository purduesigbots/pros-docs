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

**Returns:** A fully built ``AsyncMotionProfileController``.
