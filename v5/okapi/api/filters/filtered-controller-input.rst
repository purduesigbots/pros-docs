=========================
Filtered Controller Input
=========================

.. contents:: :local:

okapi::FilteredControllerInput
==============================

A `ControllerInput <../control/abstract-controller-input.html>`_ that applies a filter to a
controller input. Useful when you want to place a filter between a control input and a closed-loop
controller, where the controller automatically reads from the control input.

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        template <typename InputType, typename FilterType>
        FilteredControllerInput(InputType iinput, FilterType ifilter)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::FilteredControllerInput<ADIEncoder, EmaFilter>> myInput(okapi::ADIEncoder(1, 2),
                                                                         okapi::EmaFilter(0.2));
        }

=============== ===================================================================
 Parameters
=============== ===================================================================
 iinput          The ``ControllerInput`` to read from.
 ifilter         The ``Filter`` to use.
=============== ===================================================================

----

Methods
-------

controllerGet
~~~~~~~~~~~~~

Get the sensor value for use in a control loop. This method might be automatically called in
another thread by the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual double controllerGet() override

**Returns:** The current filtered sensor value.
