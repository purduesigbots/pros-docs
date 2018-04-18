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

delayHz
~~~~~~~

Delay the current task such that it runs at the given rate in Hertz. The first delay will run for ``1000/(ihz)``. Subsequent delays will adjust according to the previous runtime of the task.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void delayHz(const std::uint32_t ihz)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::Rate rate;
          while (true) {
            // Do something 10 times per second
            rate.delayHz(10);
          }
        }
