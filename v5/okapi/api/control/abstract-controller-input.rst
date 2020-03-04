===========================
(Abstract) Controller Input
===========================

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.X.X and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

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

        template <typename T>
        virtual T controllerGet() = 0

**Returns:** The current sensor value, or ``PROS_ERR`` on a failure.
