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

        static AsyncPosIntegratedController posIntegrated(Motor imotor)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller input (from the integrated encoder) and output.
=============== ===================================================================

posIntegrated
~~~~~~~~~~~~~

A position controller that uses the V5 motor's onboard control.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncPosIntegratedController posIntegrated(MotorGroup imotor)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller input (from the integrated encoder) and output.
=============== ===================================================================

velIntegrated
~~~~~~~~~~~~~

A velocity controller that uses the V5 motor's onboard control.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncVelIntegratedController velIntegrated(Motor imotor)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller input (from the integrated encoder) and output.
=============== ===================================================================

velIntegrated
~~~~~~~~~~~~~

A velocity controller that uses the V5 motor's onboard control.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncVelIntegratedController velIntegrated(MotorGroup imotor)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller input (from the integrated encoder) and output.
=============== ===================================================================

posPID
~~~~~~

A position controller that uses the PID algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncPosPIDController posPID(Motor imotor, double ikP, double ikI, double ikD, double ikBias = 0)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller input (from the integrated encoder) and output.
 ikp             The P term gain.
 ikI             The I term gain.
 ikD             The D term gain.
 ikBias          The controller bias.
=============== ===================================================================

posPID
~~~~~~

A position controller that uses the PID algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncPosPIDController posPID(Motor imotor, ADIEncoder ienc,
                                            double ikP, double ikI, double ikD, double ikBias = 0)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller output.
 ienc            The controller intput.
 ikp             The P term gain.
 ikI             The I term gain.
 ikD             The D term gain.
 ikBias          The controller bias.
=============== ===================================================================

posPID
~~~~~~

A position controller that uses the PID algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncPosPIDController posPID(MotorGroup imotor, double ikP, double ikI, double ikD, double ikBias = 0)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller input (from the integrated encoder) and output.
 ikp             The P term gain.
 ikI             The I term gain.
 ikD             The D term gain.
 ikBias          The controller bias.
=============== ===================================================================

posPID
~~~~~~

A position controller that uses the PID algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncPosPIDController posPID(MotorGroup imotor, ADIEncoder ienc,
                                            double ikP, double ikI, double ikD, double ikBias = 0)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller output.
 ienc            The controller input.
 ikp             The P term gain.
 ikI             The I term gain.
 ikD             The D term gain.
 ikBias          The controller bias.
=============== ===================================================================

posPID
~~~~~~

A position controller that uses the PID algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncPosPIDController posPID(std::shared_ptr<ControllerInput> iinput, std::shared_ptr<ControllerOutput> ioutput,
                                            double ikP, double ikI, double ikD, double ikBias = 0)

=============== ===================================================================
Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
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

        static AsyncVelPIDController velPID(Motor imotor, double ikP, double ikD, double ikF = 0, double iTPR = imev5TPR)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller input (from the integrated encoder) and output.
 ikp             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
 iTPR            The sensor ticks per revolution (see ``VelMath`` docs).
=============== ===================================================================

velPID
~~~~~~

A velocity controller that uses the PD algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncVelPIDController velPID(Motor imotor, ADIEncoder,
                                            double ikP, double ikD, double ikF = 0, double iTPR = imev5TPR)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller output.
 ienc            The controller input.
 ikp             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
 iTPR            The sensor ticks per revolution (see ``VelMath`` docs).
=============== ===================================================================

velPID
~~~~~~

A velocity controller that uses the PD algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncVelPIDController velPID(MotorGroup imotor, double ikP, double ikD, double ikF = 0, double iTPR = imev5TPR)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller input (from the integrated encoder) and output.
 ikp             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
 iTPR            The sensor ticks per revolution (see ``VelMath`` docs).
=============== ===================================================================

velPID
~~~~~~

A velocity controller that uses the PD algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncVelPIDController velPID(MotorGroup imotor, ADIEncoder ienc,
                                            double ikP, double ikD, double ikF = 0, double iTPR = imev5TPR)

=============== ===================================================================
Parameters
=============== ===================================================================
 imotor          The controller output.
 ienc            The controller input.
 ikp             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
 iTPR            The sensor ticks per revolution (see ``VelMath`` docs).
=============== ===================================================================

velPID
~~~~~~

A velocity controller that uses the PD algorithm.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static AsyncVelPIDController velPID(std::shared_ptr<ControllerInput> iinput, std::shared_ptr<ControllerOutput> ioutput,
                                            double ikP, double ikD, double ikF = 0, double iTPR = imev5TPR)

=============== ===================================================================
Parameters
=============== ===================================================================
 iinput          The controller input.
 ioutput         The controller output.
 ikp             The P term gain.
 ikD             The D term gain.
 ikF             The Feed-Forward gain.
 iTPR            The sensor ticks per revolution (see ``VelMath`` docs).
=============== ===================================================================
