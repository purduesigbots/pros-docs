============================
(Abstract) Controller Output
============================

.. contents:: :local:

okapi::ControllerOutput
=======================

controllerSet
~~~~~~~~~~~~~

Writes the value of the controller output. This method might be automatically called in another
thread by the controller.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void controllerSet(const double ivalue) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 ivalue          The controller's output.
=============== ===================================================================
