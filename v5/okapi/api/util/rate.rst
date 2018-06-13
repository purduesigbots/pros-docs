====
Rate
====

.. contents:: :local:

okapi::Rate
===========

A timing related utility class.

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

        virtual void delay(const QFrequency ihz)

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
 ihz          The frequency to run the current task at.
============ ===============================================================

delay
~~~~~

Delay the current task such that it runs every ``ihz`` ms. The first delay will wait for
``ihz``. Subsequent delays will adjust according to the previous runtime of the task.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void delay(const int ihz)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::Rate rate;
          while (true) {
            // Do something every 100 ms
            rate.delay(100);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 ihz          The time in ms to wait for.
============ ===============================================================
