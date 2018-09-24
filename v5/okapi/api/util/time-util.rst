========
TimeUtil
========

.. contents:: :local:

okapi::TimeUtil
===============

A utility class for holding ``AbstractTimer``, ``AbstractRate``, and ``SettledUtil`` together in
one class since they are commonly used together.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        TimeUtil(const Supplier<std::unique_ptr<AbstractTimer>> &itimerSupplier,
                 const Supplier<std::unique_ptr<AbstractRate>> &irateSupplier,
                 const Supplier<std::unique_ptr<SettledUtil>> &isettledUtilSupplier);

Methods
-------

getTimer
~~~~~~~~

Get a new ``std::unique_ptr`` to an ``AbstractTimer``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::unique_ptr<AbstractTimer> getTimer() const

**Returns:** A new ``std::unique_ptr`` to an ``AbstractTimer``.

getRate
~~~~~~~

Get a new ``std::unique_ptr`` to an ``AbstractRate``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::unique_ptr<AbstractRate> getRate() const

**Returns:** A new ``std::unique_ptr`` to an ``AbstractRate``.

getSettledUtil
~~~~~~~~~~~~~~

Get a new ``std::unique_ptr`` to an ``SettledUtil``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::unique_ptr<SettledUtil> getSettledUtil() const

**Returns:** A new ``std::unique_ptr`` to an ``SettledUtil``.

getTimerSupplier
~~~~~~~~~~~~~~~~

Gets the ``Supplier<std::unique_ptr<AbstractTimer>>`` passed in through the constructor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Supplier<std::unique_ptr<AbstractTimer>> getTimerSupplier() const

**Returns:** The ``Supplier<std::unique_ptr<AbstractTimer>>`` passed in through the constructor.

getRateSupplier
~~~~~~~~~~~~~~~

Gets the ``Supplier<std::unique_ptr<AbstractRate>>`` passed in through the constructor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Supplier<std::unique_ptr<AbstractRate>> getRateSupplier() const

**Returns:** The ``Supplier<std::unique_ptr<AbstractRate>>`` passed in through the constructor.

getSettledUtilSupplier
~~~~~~~~~~~~~~~~~~~~~~

Gets the ``Supplier<std::unique_ptr<SettledUtil>>`` passed in through the constructor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Supplier<std::unique_ptr<SettledUtil>> getSettledUtilSupplier() const

**Returns:** The ``Supplier<std::unique_ptr<SettledUtil>>`` passed in through the constructor.
