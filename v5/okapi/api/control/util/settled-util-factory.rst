=======================
Settled Utility Factory
=======================
.. contents:: :local:

okapi::SettledUtilFactory
=========================

A `factory <https://sourcemaking.com/design_patterns/factory_method>`_ which creates instances of
`SettledUtil <settled-util.html>`_. This is the preferred way of creating a
`SettledUtil <settled-util.html>`_.

You can read more about the factory pattern
`here <https://sourcemaking.com/design_patterns/factory_method>`_.

Methods
-------

create
~~~~~~

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static SettledUtil create(double iatTargetError = 50, double iatTargetDerivative = 5, QTime iatTargetTime = 250_ms)

===================== ===============================================================
 Parameters
===================== ===============================================================
 iatTargetError        Minimum error to be considered settled.
 iatTargetDerivative   Minimum error derivative to be considered settled.
 iatTargetTime         Minimum time within ``atTargetError`` to be considered settled.
===================== ===============================================================

createPtr
~~~~~~~~~

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static std::unique_ptr<SettledUtil> createPtr(double iatTargetError = 50, double iatTargetDerivative = 5, QTime iatTargetTime = 250_ms)

===================== ===============================================================
 Parameters
===================== ===============================================================
 iatTargetError        Minimum error to be considered settled.
 iatTargetDerivative   Minimum error derivative to be considered settled.
 iatTargetTime         Minimum time within ``atTargetError`` to be considered settled.
===================== ===============================================================
