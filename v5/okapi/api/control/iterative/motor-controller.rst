================
Motor Controller
================

.. contents:: :local:

okapi::MotorController
======================

A simple ``IterativeVelocityController`` that associates an
`AbstractMotor <../../device/motor/abstract-motor.html>`_ with an ``IterativeVelocityController``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        MotorController(const AbstractMotor &imotor, IterativeVelocityController &icontroller)

=============== ===================================================================
 Parameters
=============== ===================================================================
 imotor          The motor to control.
 icontroller     The ``IterativeVelocityController`` to use.
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

        virtual double step(const double ireading) override

============ ===============================================================
 Parameters
============ ===============================================================
 ireading     The new sensor reading.
============ ===============================================================

**Returns:** The controller output.

----

setTarget
~~~~~~~~~

Sets the target for the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setTarget(const double itarget) override

============ ===============================================================
 Parameters
============ ===============================================================
 itarget      The new target.
============ ===============================================================

----

getOutput
~~~~~~~~~

Returns the last calculated output of the controller. Default is ``0``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getOutput() const override

**Returns:** The previous output from the filter.

----

getError
~~~~~~~~

Returns the last error of the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getError() const override

**Returns:** The last error of the controller.

----

getDerivative
~~~~~~~~~~~~~

Returns the last derivative (change in error) of the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double getDerivative() const override

**Returns:** The last derivative (change in error) of the controller.

----

setSampleTime
~~~~~~~~~~~~~

Sets time between loops in ms. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setSampleTime(const uint32_t isampleTime) override

=============== ===================================================================
Parameters
=============== ===================================================================
 isampleTime     The sample time in ms.
=============== ===================================================================

----

setOutputLimits
~~~~~~~~~~~~~~~

Sets controller output bounds. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void setOutputLimits(double imax, double imin) override

=============== ===================================================================
Parameters
=============== ===================================================================
 imax            The upper bound.
 imin            The lower bound.
=============== ===================================================================

----

reset
~~~~~

Resets the controller so it can start from 0 again properly. Keeps configuration from before.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void reset() override

----

flipDisable
~~~~~~~~~~~

Changes whether the controll is off or on. Default does nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void flipDisable() override

----

getSampleTime
~~~~~~~~~~~~~

Returns the last set sample time. Default is ``10``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual uint32_t getSampleTime() const override

**Returns:** The last set sample time.
