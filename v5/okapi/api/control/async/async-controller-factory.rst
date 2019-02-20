========================
Async Controller Factory
========================

.. contents:: :local:

okapi::AsyncControllerFactory
=============================

A `factory <https://sourcemaking.com/design_patterns/factory_method>`_ which creates instances of
async controllers. This is the preferred way of creating async controllers.

You can read more about the factory pattern
`here <https://sourcemaking.com/design_patterns/factory_method>`_.

Methods
-------

posIntegrated
~~~~~~~~~~~~~

A position controller that uses the V5 motor's onboard control.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncPosIntegratedController posIntegrated(
          Motor/MotorGroup imotor,
          std::int32_t imaxVelocity = 600)

   .. tab :: Example
     .. highlight:: cpp
     ::

       // Controlling a motor on port 1
       auto controller = AsyncControllerFactory::posIntegrated(1);

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller input (from the integrated encoder) and output.
 imaxVelocity    The maximum velocity during a profiled movement.
=============== ===================================================================

----

velIntegrated
~~~~~~~~~~~~~

A velocity controller that uses the V5 motor's onboard control.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncVelIntegratedController velIntegrated(
          Motor/MotorGroup imotor
        )

   .. tab :: Example
     .. highlight:: cpp
     ::

       // Controlling a motor on port 1
       auto controller = AsyncControllerFactory::velIntegrated(1);

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller input (from the integrated encoder) and output.
=============== ===================================================================

----

posPID
~~~~~~

A position controller that uses the PID algorithm. Uses the motor's integrated encoder.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncPosPIDController posPID(
          Motor/MotorGroup imotor,
          double ikP, double ikI, double ikD, double ikBias = 0,
          std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>()
        )

   .. tab :: Example
     .. highlight:: cpp
     ::

       // Controlling a motor on port 1 with its integrated encoder
       auto controller = AsyncControllerFactory::posPID(1, 0.001, 0.0, 0.0001);

       // Controlling a motor group on ports 1 and 2 with its integrated encoder
       auto controller = AsyncControllerFactory::posPID({-1, 2}, 0.001, 0.0, 0.0001);

=================== ===================================================================
Parameters
=================== ===================================================================
 imotor              The controller input (from the integrated encoder) and output.
 ikP                 The P term gain.
 ikI                 The I term gain.
 ikD                 The D term gain.
 ikBias              The controller bias.
 iderivativeFilter   The filter to use for filtering the derivative term.
=================== ===================================================================

----

posPID
~~~~~~

A position controller that uses the PID algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncPosPIDController posPID(
          Motor/MotorGroup imotor,
          ADIEncoder/ADIGyro/Potentiometer/IntegratedEncoder isensor,
          double ikP, double ikI, double ikD, double ikBias = 0,
          std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>()
        )

   .. tab :: Example
     .. highlight:: cpp
     ::

       // Controlling a motor on port 1 with an encoder in ADI ports A and B
       auto controller = AsyncControllerFactory::posPID(1, ADIEncoder('A', 'B'), 0.001, 0.0, 0.0001);

       // Controlling a motor group on ports 1 and 2 with an encoder in ADI ports A and B
       auto controller = AsyncControllerFactory::posPID({-1, 2}, ADIEncoder('A', 'B'), 0.001, 0.0, 0.0001);

       // Controlling a motor group on ports 1 and 2 with a gyro in ADI port A
       auto controller = AsyncControllerFactory::posPID({-1, 2}, ADIGyro('A'), 0.001, 0.0, 0.0001);

=================== ===================================================================
Parameters
=================== ===================================================================
 imotor              The controller output.
 isensor             The controller input.
 ikP                 The P term gain.
 ikI                 The I term gain.
 ikD                 The D term gain.
 ikBias              The controller bias.
 iderivativeFilter   The filter to use for filtering the derivative term.
=================== ===================================================================

----

posPID
~~~~~~

A position controller that uses the PID algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncPosPIDController posPID(
          std::shared_ptr<ControllerInput<double>> iinput,
          std::shared_ptr<ControllerOutput<double>> ioutput,
          double ikP, double ikI, double ikD, double ikBias = 0,
          std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>()
        )

=================== ===================================================================
Parameters
=================== ===================================================================
 iinput              The controller input.
 ioutput             The controller output.
 ikP                 The P term gain.
 ikI                 The I term gain.
 ikD                 The D term gain.
 ikBias              The controller bias.
 iderivativeFilter   The filter to use for filtering the derivative term.
=================== ===================================================================

----

velPID
~~~~~~

A velocity controller that uses the PD algorithm. Uses the motor's integrated encoder.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncVelPIDController velPID(
          Motor/MotorGroup imotor,
          double ikP, double ikD, double ikF = 0, double ikSF = 0, double iTPR = imev5TPR,
          std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>()
        )

   .. tab :: Example
     .. highlight:: cpp
     ::

       // Controlling a motor in port 1 with its integrated encoder
       auto controller = AsyncControllerFactory::velPID(1, 0.001, 0.0001);

       // Controlling a motor group on ports 1 and 2 with its integrated encoder
       auto controller = AsyncControllerFactory::velPID({-1, 2}, 0.001, 0.0001);

=================== ===================================================================
Parameters
=================== ===================================================================
 imotor              The controller input (from the integrated encoder) and output.
 ikP                 The P term gain.
 ikD                 The D term gain.
 ikF                 The Feed-Forward gain.
 ikSF                A Feed-Forward gain to counteract static friction.
 iTPR                The sensor ticks per revolution (see ``VelMath`` docs).
 iderivativeFilter   The filter to use for filtering the derivative term.
=================== ===================================================================

----

velPID
~~~~~~

A velocity controller that uses the PD algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncVelPIDController velPID(
          Motor/MotorGroup imotor,
          ADIEncoder/ADIGyro/Potentiometer/IntegratedEncoder isensor,
          double ikP, double ikD, double ikF = 0, double ikSF = 0, double iTPR = imev5TPR,
          std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>()
        )

   .. tab :: Example
     .. highlight:: cpp
     ::

       // Controlling a motor on port 1 with an encoder in ADI ports A and B
       auto controller = AsyncControllerFactory::velPID(1, ADIEncoder('A', 'B'), 0.001, 0.0001);

       // Controlling a motor group on ports 1 and 2 with an encoder in ADI ports A and B
       auto controller = AsyncControllerFactory::velPID({-1, 2}, ADIEncoder('A', 'B'), 0.001, 0.0001);

       // Controlling a motor group on ports 1 and 2 with a gyro in ADI port A
       auto controller = AsyncControllerFactory::velPID({-1, 2}, ADIGyro('A'), 0.001, 0.0001);

=================== ===================================================================
Parameters
=================== ===================================================================
 imotor              The controller output.
 isensor             The controller input.
 ikP                 The P term gain.
 ikD                 The D term gain.
 ikF                 The Feed-Forward gain.
 ikSF                A Feed-Forward gain to counteract static friction.
 iTPR                The sensor ticks per revolution (see ``VelMath`` docs).
 iderivativeFilter   The filter to use for filtering the derivative term.
=================== ===================================================================

----

velPID
~~~~~~

A velocity controller that uses the PD algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncVelPIDController velPID(
          std::shared_ptr<ControllerInput<double>> iinput,
          std::shared_ptr<ControllerOutput<double>> ioutput,
          double ikP, double ikD, double ikF = 0, double ikSF = 0, double iTPR = imev5TPR,
          std::unique_ptr<Filter> iderivativeFilter = std::make_unique<PassthroughFilter>()
        )

=================== ===================================================================
Parameters
=================== ===================================================================
 iinput              The controller input.
 ioutput             The controller output.
 ikP                 The P term gain.
 ikD                 The D term gain.
 ikF                 The Feed-Forward gain.
 ikSF                A Feed-Forward gain to counteract static friction.
 iTPR                The sensor ticks per revolution (see ``VelMath`` docs).
 iderivativeFilter   The filter to use for filtering the derivative term.
=================== ===================================================================

----

motionProfile
~~~~~~~~~~~~~

A controller which generates and follows 2D motion profiles. Pulls the chassis configuration
information from the provided ``ChassisController``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncMotionProfileController motionProfile(
          double imaxVel, double imaxAccel, double imaxJerk,
          const ChassisController &ichassis
        )

   .. tab :: Example
     .. highlight:: cpp
     ::

       auto drive = ChassisControllerFactory::create(
         {-1, -2},
         {3, 4},
         AbstractMotor::gearset::green,
         {4_in, 11.5_in}
       );

       auto controller = AsyncControllerFactory::motionProfile(1.0, 2.0, 10.0, drive);

=============== ===================================================================
 Parameters
=============== ===================================================================
 imaxVel         The maximum possible velocity in m/s.
 imaxAccel       The maximum possible acceleration in m/s/s.
 imaxJerk        The maxiumm possible jerk in m/s/s/s.
 ichassis        The chassis to control.
=============== ===================================================================

----

motionProfile
~~~~~~~~~~~~~

A controller which generates and follows 2D motion profiles.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncMotionProfileController motionProfile(
          double imaxVel, double imaxAccel, double imaxJerk,
          std::shared_ptr<ChassisModel> imodel,
          const ChassisScales &iscales, AbstractMotor::GearsetRatioPair ipair
        )

=============== ===================================================================
 Parameters
=============== ===================================================================
 imaxVel         The maximum possible velocity in m/s.
 imaxAccel       The maximum possible acceleration in m/s/s.
 imaxJerk        The maxiumm possible jerk in m/s/s/s.
 imodel          The ``ChassisModel`` to control.
 iscales         The ``ChassisScales``.
 ipair           The ``AbstractMotor::GearsetRatioPair``.
=============== ===================================================================

----

linearMotionProfile
~~~~~~~~~~~~~~~~~~~

A controller which generates and follows 2D motion profiles.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncLinearMotionProfileController linearMotionProfile(
          double imaxVel, double imaxAccel, double imaxJerk,
          std::shared_ptr<ControllerOutput<double>> ioutput
        )

=============== ===================================================================
 Parameters
=============== ===================================================================
 imaxVel         The maximum possible velocity in m/s.
 imaxAccel       The maximum possible acceleration in m/s/s.
 imaxJerk        The maxiumm possible jerk in m/s/s/s.
 ioutput         The output to write velocity targets to.
=============== ===================================================================
