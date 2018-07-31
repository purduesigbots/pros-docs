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
