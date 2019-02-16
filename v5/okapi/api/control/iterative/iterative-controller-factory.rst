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

        static IterativePosPIDController posPID(
          double ikP, double ikI, double ikD, double ikBias = 0,
          std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>(),
          const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>()
        )

   .. tab :: Example
     .. highlight:: cpp
     ::

        auto controller = IterativeControllerFactory::posPID(0.001, 0.0, 0.0001);

        // Controller using a custom derivative filter
        auto controller = IterativeControllerFactory::posPID(
          0.001, 0.0, 0.0001, 0,
          std::make_unique<AverageFilter<3>>()
        );

=================== ===================================================================
Parameters
=================== ===================================================================
 ikP                 The P term gain.
 ikI                 The I term gain.
 ikD                 The D term gain.
 ikBias              The controller bias.
 iderivativeFilter   The filter to use for filtering the derivative term.
 ilogger             The logger this instance will log to.
=================== ===================================================================

----

velPID
~~~~~~

A velocity controller that uses the PD algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static IterativeVelPIDController velPID(
          double ikP, double ikD, double ikF = 0, double ikSF = 0,
          std::unique_ptr<VelMath> ivelMath = VelMathFactory::createPtr(imev5GreenTPR),
          std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>(),
          const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>()
        )

   .. tab :: Example
     .. highlight:: cpp
     ::

       auto controller = IterativeControllerFactory::velPID(0.001, 0.0001);

       // Controller using a custom derivative filter
       auto controller = IterativeControllerFactory::velPID(
         0.001, 0.0001, 0, 0,
         VelMathFactory::createPtr(imev5RedTPR),
         std::make_unique<AverageFilter<3>>()
       );

=================== ===================================================================
Parameters
=================== ===================================================================
 ikP                 The P term gain.
 ikD                 The D term gain.
 ikF                 The Feed-Forward gain.
 ikSF                A Feed-Forward gain to counteract static friction.
 ivelMath            The ``VelMath`` for calculating velocity.
 iderivativeFilter   The filter to use for filtering the derivative term.
 ilogger             The logger this instance will log to.
=================== ===================================================================

----

motorVelocity
~~~~~~~~~~~~~

A velocity controller that uses an ``IterativeVelPIDController`` and automatically writes to its
output.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static IterativeMotorVelocityController motorVelocity(
          Motor imotor,
          double ikP, double ikD, double ikF = 0, double ikSF = 0,
          std::unique_ptr<VelMath> ivelMath = VelMathFactory::createPtr(imev5GreenTPR),
          std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>(),
          const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>()
        )

   .. tab :: Example
     .. highlight:: cpp
     ::

       // Controlling a motor on port 1
       auto controller = IterativeControllerFactory::motorVelocity(1, 0.001, 0.0001);

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The output motor.
 ikP             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
 ikSF            A Feed-Forward gain to counteract static friction.
 ivelMath        The ``VelMath`` for calculating velocity.
 iderivativeFilter   The filter to use for filtering the derivative term.
 ilogger             The logger this instance will log to.
=============== ===================================================================

----

motorVelocity
~~~~~~~~~~~~~

A velocity controller that uses an ``IterativeVelPIDController`` and automatically writes to its
output.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static IterativeMotorVelocityController motorVelocity(
          MotorGroup imotor,
          double ikP, double ikD, double ikF = 0, double ikSF = 0,
          std::unique_ptr<VelMath> ivelMath = VelMathFactory::createPtr(imev5GreenTPR),
          std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>(),
          const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>()
        )

   .. tab :: Example
     .. highlight:: cpp
     ::

       // Controlling a motor group on ports 1 and 2
       auto controller = IterativeControllerFactory::motorVelocity({-1, 2}, 0.001, 0.0001);

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The output motor.
 ikP             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
 ikSF            A Feed-Forward gain to counteract static friction.
 ivelMath        The ``VelMath`` for calculating velocity.
 iderivativeFilter   The filter to use for filtering the derivative term.
 ilogger             The logger this instance will log to.
=============== ===================================================================

----

motorVelocity
~~~~~~~~~~~~~

A velocity controller that uses the supplied controller and automatically writes to its output.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static IterativeMotorVelocityController motorVelocity(
          Motor imotor,
          std::shared_ptr<IterativeVelocityController<double, double>> icontroller
        )

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The output motor.
 icontroller     The controller to use.
=============== ===================================================================

----

motorVelocity
~~~~~~~~~~~~~

A velocity controller that uses the supplied controller and automatically writes to its output.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static IterativeMotorVelocityController motorVelocity(
          MotorGroup imotor,
          std::shared_ptr<IterativeVelocityController<double, double>> icontroller
        )

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The output motor.
 icontroller     The controller to use.
=============== ===================================================================
