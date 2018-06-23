=====================
Chassis Model Factory
=====================

.. contents:: :local:

okapi::ChassisModelFactory
==========================

A `factory <https://sourcemaking.com/design_patterns/factory_method>`_ which creates instances of
`ChassisModel <abstract-chassis-model.html>`_. This is the preferred way of creating a
`ChassisModel <abstract-chassis-model.html>`_.

You can read more about the factory pattern
`here <https://sourcemaking.com/design_patterns/factory_method>`_.

SkidSteerModel
--------------

create
~~~~~~

Model for a skid steer drive (wheels parallel with robot's direction of motion). When all
motors are powered ``+127``, the robot should move forward in a straight line.

This constructor infers the two encoders from the left and right motors (using the integrated
encoders).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static SkidSteerModel create(Motor ileftSideMotor, Motor irightSideMotor,
                                     const double imaxOutput = 127)

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 imaxOutput        The maximum output value sent to the motors.
================= ===================================================================

create
~~~~~~

Model for a skid steer drive (wheels parallel with robot's direction of motion). When all
motors are powered ``+127``, the robot should move forward in a straight line.

This constructor infers the two encoders from the left and right motors (using the integrated
encoders).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static SkidSteerModel create(MotorGroup ileftSideMotor, MotorGroup irightSideMotor,
                                     const double imaxOutput = 127)

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 imaxOutput        The maximum output value sent to the motors.
================= ===================================================================

create
~~~~~~

Model for a skid steer drive (wheels parallel with robot's direction of motion). When all
motors are powered ``+127``, the robot should move forward in a straight line.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static SkidSteerModel create(MotorGroup ileftSideMotor, MotorGroup irightSideMotor,
                                     ADIEncoder ileftEnc, ADIEncoder irightEnc,
                                     const double imaxOutput = 127)

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 ileftEnc          The left side encoder.
 irightEnc         The right side encoder.
 imaxOutput        The maximum output value sent to the motors.
================= ===================================================================

XDriveModel
-----------

create
~~~~~~

Model for an x drive (wheels at 45 deg from a skid steer drive). When all motors are powered
``+127``, the robot should move forward in a straight line.

This constructor infers the two encoders from the top left and top right motors (using the
integrated encoders).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static XDriveModel create(Motor itopLeftMotor, Motor itopRightMotor, Motor ibottomRightMotor, Motor ibottomLeftMotor,
                                  const double imaxOutput = 127)

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor.
 itopRightMotor      The top right motor.
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 imaxOutput          The maximum output value sent to the motors.
=================== ===================================================================

create
~~~~~~

Model for an x drive (wheels at 45 deg from a skid steer drive). When all motors are powered
``+127``, the robot should move forward in a straight line.

This constructor infers the two encoders from the top left and top right motors (using the
integrated encoders).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static XDriveModel create(Motor itopLeftMotor, Motor itopRightMotor, Motor ibottomRightMotor, Motor ibottomLeftMotor,
                                  ADIEncoder ileftEnc, ADIEncoder irightEnc,
                                  const double imaxOutput = 127)

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor.
 itopRightMotor      The top right motor.
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 ileftEnc            The left side encoder.
 irightEnc           The right side encoder.
 imaxOutput          The maximum output value sent to the motors.
=================== ===================================================================

ThreeEncoderSkidSteerModel
--------------------------

create
~~~~~~

Model for a skid steer drive (wheels parallel with robot's direction of motion). When all
motors are powered ``+127``, the robot should move forward in a straight line.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ThreeEncoderSkidSteerModel create(Motor ileftSideMotor, Motor irightSideMotor,
                                                 ADIEncoder ileftEnc, ADIEncoder imiddleEnc, ADIEncoder irightEnc,
                                                 const double imaxOutput = 127)

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 ileftEnc          The left side encoder.
 imiddleEnc        The middle encoder (mounted perpendicular to the left and right side encoders).
 irightEnc         The right side encoder.
 imaxOutput        The maximum output value sent to the motors.
================= ===================================================================

create
~~~~~~

Model for a skid steer drive (wheels parallel with robot's direction of motion). When all
motors are powered ``+127``, the robot should move forward in a straight line.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static ThreeEncoderSkidSteerModel create(MotorGroup ileftSideMotor, MotorGroup irightSideMotor,
                                                 ADIEncoder ileftEnc, ADIEncoder imiddleEnc, ADIEncoder irightEnc,
                                                 const double imaxOutput = 127)

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 ileftEnc          The left side encoder.
 imiddleEnc        The middle encoder (mounted perpendicular to the left and right side encoders).
 irightEnc         The right side encoder.
 imaxOutput        The maximum output value sent to the motors.
================= ===================================================================
