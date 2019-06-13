===================================
Iterative Motor Velocity Controller
===================================

.. contents:: :local:

okapi::IterativeMotorVelocityControllerArgs
===========================================

Data class for the to arguments to ``IterativeMotorVelocityController``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        IterativeMotorVelocityControllerArgs(const std::shared_ptr<AbstractMotor> &imotor,
                                             const std::shared_ptr<IterativeVelocityController<double, double>> &icontroller)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
 icontroller     The `IterativeVelocityController <abstract-iterative-velocity-controller.html>`_ to use.
=============== ===================================================================

okapi::IterativeMotorVelocityController
=======================================

A simple `IterativeVelocityController <abstract-iterative-velocity-controller.html>`_ that
associates an `AbstractMotor <../../device/motor/abstract-abstract-motor.html>`_ with an
`IterativeVelocityController <abstract-iterative-velocity-controller.html>`_. If you are trying to
create an instance of this class, you should most likely be using the
`IterativeControllerFactory <iterative-controller-factory.html>`_ instead of a constructor from
this class.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        IterativeMotorVelocityController(std::shared_ptr<AbstractMotor> imotor, std::shared_ptr<IterativeVelocityController> icontroller)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
 icontroller     The `IterativeVelocityController <abstract-iterative-velocity-controller.html>`_ to use.
=============== ===================================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        explicit IterativeMotorVelocityController(const IterativeMotorControllerArgs &iparams)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iparams         The ``IterativeMotorController`` arguments.
=============== ===================================================================

Methods
-------

step
~~~~

Do one iteration of the controller. Outputs in the range ``[-1, 1]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double step(double ireading) override

============ ===============================================================
 Parameters
============ ===============================================================
 ireading     The new sensor reading.
============ ===============================================================

**Returns:** The controller output.

----

getTarget
~~~~~~~~~

Gets the last set target, or the default target if none was set.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double getTarget() override

**Returns:** The last target.

----

setTarget
~~~~~~~~~

Sets the target for the controller in the motor's encoder units.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setTarget(double itarget) override

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target in the motor's encoder units.
============ ===============================================================

----

controllerSet
~~~~~~~~~~~~~

Writes the value of the controller output. This method might be automatically called in another
thread by the controller. The range of input values is expected to be ``[-1, 1]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void controllerSet(double ivalue) override

============ ===============================================================
 Parameters
============ ===============================================================
 ivalue       The controller's output in the range ``[-1, 1]``.
============ ===============================================================

----

getOutput
~~~~~~~~~

Returns the last calculated output of the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double getOutput() const override

**Returns:** The previous output from the filter.

----

getError
~~~~~~~~

Returns the last error of the controller.

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

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        bool isSettled() override

**Returns:** Whether the controller is settled.

----

setSampleTime
~~~~~~~~~~~~~

Sets time between loops in ms.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setSampleTime(std::uint32_t isampleTime) override

=============== ===================================================================
Parameters
=============== ===================================================================
 isampleTime     The sample time in ms.
=============== ===================================================================

----

setOutputLimits
~~~~~~~~~~~~~~~

Sets controller output bounds.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void setOutputLimits(double imax, double imin) override

=============== ===================================================================
Parameters
=============== ===================================================================
 imax            The upper bound.
 imin            The lower bound.
=============== ===================================================================

----

getMaxOutput
~~~~~~~~~~~~

Get the upper output bound.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Output getMaxOutput() override

**Returns:** The upper output bound.

----

getMinOutput
~~~~~~~~~~~~

Get the lower output bound.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Output getMinOutput() override

**Returns:** The lower output bound.

----

reset
~~~~~

Resets the controller's internal state so it is similar to when it was first initialized, while
keeping any user-configured information. This implementation also stops movement.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void reset() override

----

flipDisable
~~~~~~~~~~~

Changes whether the controller is off or on. Turning the controller on after it was off will cause
the controller to move to its last set target, unless it was reset in that time.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void flipDisable() override

----

flipDisable
~~~~~~~~~~~

Sets whether the controller is off or on. Turning the controller on after it was off will cause the
controller to move to its last set target, unless it was reset in that time.

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

        bool isDisabled() const override

**Returns:** Whether the controller is currently disabled.

----

getSampleTime
~~~~~~~~~~~~~

Returns the last set sample time. Default is ``10``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::uint32_t getSampleTime() const override

**Returns:** The last set sample time.
