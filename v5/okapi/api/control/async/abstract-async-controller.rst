===========================
(Abstract) Async Controller
===========================

.. contents:: :local:

okapi::AsyncControllerArgs
==========================

Data class for the arguments to ``AsyncController``.

----

okapi::AsyncController
======================

A type of `ClosedLoopController <../abstract-closed-loop-controller.html>`_ that runs on its own and
automatically writes its output.

Methods
-------

waitUntilSettled
~~~~~~~~~~~~~~~~

Blocks the current task until the controller has settled. Determining what settling means is
implementation-dependent.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual void waitUntilSettled() = 0
