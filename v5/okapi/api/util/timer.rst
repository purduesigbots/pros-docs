=====
Timer
=====

.. contents:: :local:

okapi::Timer
============

An `AbstractTimer <abstract-abstract-timer.html>`_ which uses the PROS kernel for its
implementation.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Timer()

----

Methods
-------

millis
~~~~~~

Returns the current time in units of ``QTime``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual QTime millis() const override

**Returns:** The current time in units of ``QTime``.
