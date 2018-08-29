=========
ADI Motor
=========

.. contents:: :local:

okapi::ADIMotor
===============

An `AbstractMotor <abstract-abstract-motor.html>`_. This is NOT a V5
motor, it is an ADI (or 3-wire) motor.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Motor(uint8_t iport, bool ireverse = false)

=============== ===================================================================
 Parameters
=============== ===================================================================
 iport            The ADI port number (from ``1-8``, ``‘a’-‘h’``, ``‘A’-‘H’``) the motor is in.
 ireverse         Whether the motor's direction is reversed.
=============== ===================================================================

Methods
-------

moveVoltage
~~~~~~~~~~~

Sets the voltage for the motor from ``-127`` to ``127``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t moveVoltage(std::int32_t ivoltage) const override

=============== ===================================================================
 Parameters
=============== ===================================================================
 ivoltage        The new voltage value from ``-127`` to ``127``.
=============== ===================================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed.

----

controllerSet
~~~~~~~~~~~~~

Writes the value of the controller output. This method might be automatically called in another
thread by the controller. The range of input values is expected to be ``[-1, 1]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void controllerSet(double ivalue) override

=============== ===================================================================
Parameters
=============== ===================================================================
 ivalue          The controller's output in the range ``[-1, 1]``.
=============== ===================================================================
