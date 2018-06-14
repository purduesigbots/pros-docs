========================
(Abstract) Abstract Rate
========================

.. contents:: :local:

okapi::AbstractRate
===================

A timing-related utility class.

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

        virtual void delay(const QFrequency ihz) = 0

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

Delay the current task such that it runs every ``ims`` ms. The first delay will wait for
``ims``. Subsequent delays will adjust according to the previous runtime of the task.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void delay(const int ims) = 0

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
 ims          The time in ms to wait for.
============ ===============================================================
