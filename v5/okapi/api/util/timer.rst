=====
Timer
=====

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.X.X and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

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
