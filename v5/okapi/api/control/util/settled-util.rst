===============
Settled Utility
===============

.. contents:: :local:

okapi::SettledUtil
==================

A utility class to determine if a control loop has settled based on error. A control loop is
settled if the error is within ``atTargetError`` and ``atTargetDerivative`` for ``atTargetTime``.
If you are trying to create an instance of this class, you should most likely be using the
`SettledUtilFactory <settled-util-factory.html>`_ instead of a constructor from this class.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        explicit SettledUtil(std::unique_ptr<AbstractTimer> iatTargetTimer,
                             const double iatTargetError = 50, const double iatTargetDerivative = 5, const QTime iatTargetTime = 250_ms)

===================== ===============================================================
 Parameters
===================== ===============================================================
 iatTargetTimer        The ``AbstractTimer`` to use.
 iatTargetError        Maximum error to be considered settled.
 iatTargetDerivative   Maximum error derivative to be considered settled.
 iatTargetTime         Minimum time within ``atTargetError`` to be considered settled.
===================== ===============================================================

----

Methods
-------

isSettled
~~~~~~~~~

Returns whether the controller is settled.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual bool isSettled(double ierror)

============ ===============================================================
 Parameters
============ ===============================================================
 ierror       The current error.
============ ===============================================================

**Returns:** Whether the controller is settled.

----

reset
~~~~~

Resets the "at target" timer.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void reset()
