===============
Settled Utility
===============

.. contents:: :local:

okapi::SettledUtil
==================

A utility class to determine if a control loop has settled based on error. A control loop is
settled if the error is within ``atTargetError`` for ``atTargetTime``.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        SettledUtil(const double iatTargetError = 50, const double iatTargetDerivative = 5, const QTime iatTargetTime = 250_ms)

===================== ===============================================================
 Parameters
===================== ===============================================================
 iatTargetError        Minimum error to be considered settled.
 iatTargetDerivative   Minimum error derivative to be considered settled.
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

        virtual bool isSettled(const double ierror)

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
