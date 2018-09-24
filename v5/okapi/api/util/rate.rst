====
Rate
====

.. contents:: :local:

okapi::Rate
===========

An `AbstractRate <abstract-abstract-rate.html>`_ which uses the PROS kernel for its
implementation.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Rate()

----

Methods
-------

delay
~~~~~

Delay the current task such that it runs at the given frequency. The first delay will wait for
``1000/(ihz)``. Subsequent delays will adjust according to the previous runtime of the task.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void delay(QFrequency ihz) override

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::Rate rate;
          while (true) {
            // Do something 10 times per second
            rate.delay(10_Hz);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 ihz          The frequency to run the current task at.
============ ===============================================================

delay
~~~~~

Delay the current task such that it runs at the given frequency. The first delay will wait for
``1000/(ihz)``. Subsequent delays will adjust according to the previous runtime of the task.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void delay(int ihz) override

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::Rate rate;
          while (true) {
            // Do something 10 times per second
            rate.delay(10);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 ihz          The frequency in Hertz to run the current task at.
============ ===============================================================

delayUntil
----------

Delay the current task until ``itime`` has passed. This method can be used by periodic tasks to
ensure a consistent execution frequency.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void delayUntil(QTime itime) override

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::Rate rate;
          while (true) {
            // Do something every 100 ms
            rate.delayUntil(100_ms);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 itime        The time period.
============ ===============================================================

delayUntil
----------

Delay the current task until ``ims`` has passed. This method can be used by periodic tasks to
ensure a consistent execution frequency.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void delayUntil(uint32_t ims) override

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::Rate rate;
          while (true) {
            // Do something every 100 ms
            rate.delayUntil(100);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 ims          The time period in milliseconds.
============ ===============================================================
