====================================
(Abstract) Async Position Controller
====================================

.. contents:: :local:

okapi::AsyncPositionControllerArgs
==================================

Data class for the arguments to ``AsyncPositionController``.

okapi::AsyncPositionController
==============================

An ``AsyncPositionController`` is a type of `AsyncController <abstract-async-controller.html>`_ that
operates in the position domain.

Methods
-------

tarePosition
~~~~~~~~~~~~

Sets the "absolute" zero position of the controller to its current position.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void tarePosition() = 0
