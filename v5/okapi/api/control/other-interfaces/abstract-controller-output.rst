============================
(Abstract) Controller Output
============================

.. contents:: :local:

okapi::ControllerOutput
=======================

controllerSet
~~~~~~~~~~~~~

Writes the value of the controller output. This method might be automatically called in another
thread by the controller. The range of input values is expected to be ``[-1, 1]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        template <typename T>
        virtual void controllerSet(T ivalue) = 0

=============== ===================================================================
Parameters
=============== ===================================================================
 ivalue          The controller's output in the range ``[-1, 1]``.
=============== ===================================================================
