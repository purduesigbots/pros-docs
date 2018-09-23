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
                                     double imaxVelocity,
                                     double imaxVoltage = 12000)

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor (also used for controller input).
 irightSideMotor   The right side motor (also used for controller input).
 imaxVelocity      The maximum velocity output value to the motors.
 imaxVoltage       The maximum voltage output value to the motors.
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
                                     double imaxVelocity,
                                     double imaxVoltage = 12000)

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor (also used for controller input).
 irightSideMotor   The right side motor (also used for controller input).
 imaxVelocity      The maximum velocity output value to the motors.
 imaxVoltage       The maximum voltage output value to the motors.
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
                                     double imaxVelocity,
                                     double imaxVoltage = 12000)

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 ileftEnc          The left side encoder.
 irightEnc         The right side encoder.
 imaxOutput        The maximum output value sent to the motors.
 imaxVelocity      The maximum velocity output value to the motors.
 imaxVoltage       The maximum voltage output value to the motors.
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
                                  double imaxVelocity,
                                  double imaxVoltage = 12000)

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor (also used for controller input).
 itopRightMotor      The top right motor (also used for controller input).
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 imaxVelocity        The maximum velocity output value to the motors.
 imaxVoltage         The maximum voltage output value to the motors.
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
                                  double imaxVelocity,
                                  double imaxVoltage = 12000)

=================== ===================================================================
Parameters
=================== ===================================================================
 itopLeftMotor       The top left motor.
 itopRightMotor      The top right motor.
 ibottomRightMotor   The bottom right motor.
 ibottomLeftMotor    The bottom left motor.
 ileftEnc            The left side encoder.
 irightEnc           The right side encoder.
 imaxVelocity        The maximum velocity output value to the motors.
 imaxVoltage         The maximum voltage output value to the motors.
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
                                                 double imaxVelocity,
                                                 double imaxVoltage = 12000)

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 ileftEnc          The left side encoder.
 imiddleEnc        The middle encoder (mounted perpendicular to the left and right side encoders).
 irightEnc         The right side encoder.
 imaxVelocity      The maximum velocity output value to the motors.
 imaxVoltage       The maximum voltage output value to the motors.
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
                                                 double imaxVelocity,
                                                 double imaxVoltage = 12000)

================= ===================================================================
Parameters
================= ===================================================================
 ileftSideMotor    The left side motor.
 irightSideMotor   The right side motor.
 ileftEnc          The left side encoder.
 imiddleEnc        The middle encoder (mounted perpendicular to the left and right side encoders).
 irightEnc         The right side encoder.
 imaxVelocity      The maximum velocity output value to the motors.
 imaxVoltage       The maximum voltage output value to the motors.
================= ===================================================================
