===========================
Offsetable Controller Input
===========================

.. contents:: :local:

okapi::OffsetableControllerInput
================================

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        explicit OffsetableControllerInput(
          const std::shared_ptr<ControllerInput<double>> &iinput
        )

=============== ===================================================================
Parameters
=============== ===================================================================
 iinput          The controller input to reference.
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

**Returns:** The current sensor value, or ``PROS_ERR`` on a failure.

----

tarePosition
~~~~~~~~~~~~

Sets the "absolute" zero position of this controller input to its current position. This does
nothing if the underlying controller input returns ``PROS_ERR``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void tarePosition()
