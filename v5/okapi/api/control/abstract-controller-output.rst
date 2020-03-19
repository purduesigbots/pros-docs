============================
(Abstract) Controller Output
============================

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.x.x and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

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
