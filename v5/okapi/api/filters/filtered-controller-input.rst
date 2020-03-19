=========================
Filtered Controller Input
=========================

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.x.x and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

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
        FilteredControllerInput(std::unique_ptr<ControllerInput<InputType>> iinput,
                                std::unique_ptr<FilterType> ifilter)

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

        double controllerGet() override

**Returns:** The current filtered sensor value.
