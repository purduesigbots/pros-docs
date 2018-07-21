============================
Iterative Controller Factory
============================

.. contents:: :local:

okapi::IterativeControllerFactory
=================================

A `factory <https://sourcemaking.com/design_patterns/factory_method>`_ which creates instances of
iterative controllers. This is the preferred way of creating iterative controllers.

You can read more about the factory pattern
`here <https://sourcemaking.com/design_patterns/factory_method>`_.

Methods
-------

posPID
~~~~~~

A position controller that uses the PID algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncPosPIDController posPID(double ikP, double ikI, double ikD, double ikBias = 0)

=============== ===================================================================
Parameters
=============== ===================================================================
 ikp             The P term gain.
 ikI             The I term gain.
 ikD             The D term gain.
 ikBias          The controller bias.
=============== ===================================================================

velPID
~~~~~~

A velocity controller that uses the PD algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncVelPIDController velPID(double ikP, double ikD, double ikF = 0,
                                            const VelMathArgs &iparams = VelMathArgs(imev5TPR))

=============== ===================================================================
Parameters
=============== ===================================================================
 ikp             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
 iparams         The ``VelMathArgs`` for calculating velocity.
=============== ===================================================================

motorVelocity
~~~~~~~~~~~~~

A velocity controller that uses the PD algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncVelPIDController motorVelocity(Motor imotor,
                                                   double ikP, double ikD, double ikF = 0,
                                                   const VelMathArgs &iparams = VelMathArgs(imev5TPR))

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The output ``Motor``.
 ikp             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
 iparams         The ``VelMathArgs`` for calculating velocity.
=============== ===================================================================

motorVelocity
~~~~~~~~~~~~~

A velocity controller that uses the PD algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static IterativeMotorVelocityController motorVelocity(MotorGroup imotor,
                                                              double ikP, double ikD, double ikF = 0,
                                                              const VelMathArgs &iparams = VelMathArgs(imev5TPR))

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The output ``MotorGroup``.
 ikp             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
 iparams         The ``VelMathArgs`` for calculating velocity.
=============== ===================================================================

motorVelocity
~~~~~~~~~~~~~

A velocity controller that uses the PD algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static IterativeMotorVelocityController motorVelocity(Motor imotor, std::shared_ptr<IterativeVelocityController> icontroller)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The output ``Motor``.
 icontroller     The controller to use.
=============== ===================================================================

motorVelocity
~~~~~~~~~~~~~

A velocity controller that uses the PD algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static IterativeMotorVelocityController motorVelocity(MotorGroup imotor, std::shared_ptr<IterativeVelocityController> icontroller)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The output ``MotorGroup``.
 icontroller     The controller to use.
=============== ===================================================================
