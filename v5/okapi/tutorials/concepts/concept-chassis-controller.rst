=====================================================
What is a ChassisController, and why is it important?
=====================================================

A `ChassisController <../../api/chassis/controller/abstract-chassis-controller.html>`_ is an
interface to your robot's chassis. It helps you program both autonomous and driver-controlled
movement. This page aims to present the idea behind a
`ChassisController <../../api/chassis/controller/abstract-chassis-controller.html>`_.

What can a ChassisController do for me?
---------------------------------------

Closed-loop Control Methods
~~~~~~~~~~~~~~~~~~~~~~~~~~~

- moveDistance
    Drives the robot straight for a distance (using closed-loop control). Blocks while the robot is
    driving.
- turnAngle
    Turns the robot clockwise in place with units of motor degrees (using closed-loop control). Blocks
    while the robot is turning.

Open-loop Control Methods
~~~~~~~~~~~~~~~~~~~~~~~~~

- tank
    Drives the robot with a tank drive layout.
    `ChassisControllerIntegrated <../../api/chassis/controller/chassis-controller-integrated.html>`_
    implements this using the V5 motor's voltage mode.
- arcade
    Drives the robot with an arcade drive layout.
    `ChassisControllerIntegrated <../../api/chassis/controller/chassis-controller-integrated.html>`_
    implements this using the V5 motor's voltage mode.
- forward
    Drives the robot forwards.
- rotate
    Turns the robot clockwise.
- driveVector
    Drives the robot in an arc.
- stop
    Stops the robot (set all the motors to ``0``).
- left
    Powers the left side motors.
- right
    Powers the right side motors.

Other Methods
~~~~~~~~~~~~~

- getSensorVals
    Returns the current sensor values. The
    `ChassisController <../../api/chassis/controller/abstract-chassis-controller.html>`_
    implementations OkapiLib comes with returns these values in the format ``{left, right, ...}``.
- resetSensors
    Resets the sensors to their zero point.
- setBrakeMode
    Sets the brake mode for all chassis motors.
- setEncoderUnits
    Sets the encoder units for all chassis motors.
- setGearing
    Sets the gearset for all chassis motors.

What types of ChassisControllers does OkapiLib come with?
---------------------------------------------------------

1. `ChassisControllerIntegrated <../../api/chassis/controller/chassis-controller-integrated.html>`_,
which uses the V5 motor's built-in control wherever possible.

2. `ChassisControllerPID <../../api/chassis/controller/chassis-controller-pid.html>`_, which does
not use the V5 motor's built-in control and instead uses OkapiLib's PID control.

`ChassisControllerIntegrated <../../api/chassis/controller/chassis-controller-integrated.html>`_ is
a good choice if you don't have a specific need for manual PID control. Take a look at the
`ChassisControllerFactory <../../api/chassis/controller/chassis-controller-factory.html>`_ to learn
how to make instances of these classes.
