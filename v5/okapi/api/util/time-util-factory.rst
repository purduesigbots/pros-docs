================
TimeUtil Factory
================

.. contents:: :local:

okapi::TimeUtilFactory
======================

A `factory <https://sourcemaking.com/design_patterns/factory_method>`_ which creates instances of
`TimeUtil <time-util.html>`_. This is the preferred way of creating a `TimeUtil <time-util.html>`_.

You can read more about the factory pattern
`here <https://sourcemaking.com/design_patterns/factory_method>`_.

TimeUtilFactory
---------------

Methods
-------

create
~~~~~~

Get a new instance of ``TimeUtil``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static TimeUtil create()

**Returns:** A new instance of ``TimeUtil``.

withSettledUtilParams
~~~~~~~~~~~~~~~~~~~~~

Get a new instance of ``TimeUtil`` which returns a custom ``SettledUtil``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static TimeUtil withSettledUtilParams(double iatTargetError = 50,
                                              double iatTargetDerivative = 5,
                                              QTime iatTargetTime = 250_ms)

**Returns:** A new instance of ``TimeUtil``.
