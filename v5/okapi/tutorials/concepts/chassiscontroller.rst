=====================================================
What is a ChassisController, and why is it important?
=====================================================

Why should I use a ChassisController?
-------------------------------------

OkapiLib uses the
`ChassisController <../../api/chassis/controller/abstract-chassis-controller.html>`_ (and
`ChassisModel <../../api/chassis/model/abstract-chassis-model.html>`_) interfaces to manage your
robot's chassis.
`ChassisController <../../api/chassis/controller/abstract-chassis-controller.html>`_ provides easy
to use methods for open and closed loop control that you can use during both autonomous and
opcontrol. Rather than writing methods to drive the robot around yourself, OkapiLib provides
battle-tested implementations for you.

.. note:: A ChassisModel has all of the same open loop control functionality as a ChassisController,
   but none of the closed loop control functionality.

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

How can I make a ChassisController?
-----------------------------------

The `ChassisControllerFactory <../../api/chassis/controller/chassis-controller-factory.html>`_ is
the recommended way of making a
`ChassisController <../../api/chassis/controller/abstract-chassis-controller.html>`_.

Let's say you want to make a
`ChassisControllerIntegrated <../../api/chassis/controller/chassis-controller-integrated.html>`_.
First, let's look at the code:

.. highlight:: cpp
.. code-block:: cpp
   :linenos:

   using namespace okapi;

   auto myChassis = ChassisControllerFactory::create(
     {-1, -2}, // Left motors
     {3, 4},   // Right motors
     AbstractMotor::gearset::red, // Torque gearset
     {4_in, 12.5_in} // 4 inch wheels, 12.5 inch wheelbase width
   );

Breaking that down further, there are three distinct parts:

First, the motor port configuration, ``{-1, -2}, {3, 4}``. This creates two
`MotorGroup <../../api/device/motor/motor-group.html>`_ instances. The first contains two motors in
ports 1 and 2 and reverses them, and the second contains two motors in ports 3 and 4.
