===========================
(Abstract) Controller Input
===========================

.. contents:: :local:

okapi::ControllerInput
======================

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

        virtual double controllerGet() = 0

**Returns:** The current sensor value, or ``PROS_ERR`` on a failure.
