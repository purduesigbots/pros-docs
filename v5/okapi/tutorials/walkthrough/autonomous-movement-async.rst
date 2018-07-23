================================
Asynchronous Autonomous Movement
================================

.. note:: This tutorial covers asynchronous movement (multiple subsystems operating at a time).
          For a more basic tutorial on sequential movements, see `Moving Autonomously <./autonomous-movement-basic.html>`_.
          
Oftentimes the fastest way to move in autonomous involves actuating multiple subsystems at once
(i.e. driving and raising/lowering a lift). This is made possible with 
`Async Controllers <../../api/control/async/async-controller-factory.html>`_.

To create an Async Controller for a given system, modify the below example to fit your subsystem
(You'll most likely want more than one motor for your drivetrain).

.. highlight: cpp
.. code-block:: cpp
   :linenos:
   :name: autonomous.cpp

   const double drivekP = 1.0;
   const double drivekI = 0.001;
   const double drivekD = 0.1;
   const int DRIVE_MOTOR_PORT = 1;
  
   okapi::Motor driveMotor (DRIVE_MOTOR_PORT);
   auto driveController = okapi::AsyncControllerFactory::posPID(driveMotor, drivekP, drivekI, drivekD);
  
And then we'll duplicate this to add a lift subsystem:

.. highlight: cpp
.. code-block:: cpp
   :linenos:
   :name: autonomous.cpp

   const double drivekP = 1.0;
   const double drivekI = 0.001;
   const double drivekD = 0.1;
   const int DRIVE_MOTOR_PORT = 1;
  
   const double liftkP = 1.0;
   const double liftkI = 0.001;
   const double liftkD = 0.1;
   const int LIFT_MOTOR_PORT = 2;
  
   okapi::Motor driveMotor (DRIVE_MOTOR_PORT);
   auto driveController = okapi::AsyncControllerFactory::posPID(driveMotor, drivekP, drivekI, drivekD);
  
   okapi::Motor liftMotor (LIFT_MOTOR_PORT);
   auto liftController = okapi::AsyncControllerFactory::posPID(liftMotor, liftkP, liftkI, liftkD);
  
Now that we have two subsystems to run, let's execute a few different movements. 

If we want both systems to move, and the next movement in the autonomous routine only depends on the drive
completing its movement (and it doesn't care about the lift's status), we'll run ``waitUntilSettled()``
with just the drive controller.


.. highlight: cpp
.. code-block:: cpp
   :linenos:
   :name: autonomous.cpp

   const double drivekP = 1.0;
   const double drivekI = 0.001;
   const double drivekD = 0.1;
   const int DRIVE_MOTOR_PORT = 1;
  
   const double liftkP = 1.0;
   const double liftkI = 0.001;
   const double liftkD = 0.1;
   const int LIFT_MOTOR_PORT = 2;
  
   void autonomous() {
     okapi::Motor driveMotor (DRIVE_MOTOR_PORT);
     auto driveController = okapi::AsyncControllerFactory::posPID(driveMotor, drivekP, drivekI, drivekD);
  
     okapi::Motor liftMotor (LIFT_MOTOR_PORT);
     auto liftController = okapi::AsyncControllerFactory::posPID(liftMotor, liftkP, liftkI, liftkD);
    
     // Begin movements
     driveController.setTarget(1000); // Move 1000 ticks forward
     liftController.setTarget(200); // Move 100 ticks upward
     driveController.waitUntilSettled();
    
     // Then the next movement will execute after the drive movement finishes
   }

If blocking the next movement with regard only to the lift is desired, swap ``driveController`` for ``liftController``
in the last line.

If both movements need to finish before executing the next movement, then calling ``waitUntilSettled()``
on both controllers is necessary.

.. highlight: cpp
.. code-block:: cpp
   :linenos:
   :name: autonomous.cpp
   :emphasize-lines: 22

   const double drivekP = 1.0;
   const double drivekI = 0.001;
   const double drivekD = 0.1;
   const int DRIVE_MOTOR_PORT = 1;
  
   const double liftkP = 1.0;
   const double liftkI = 0.001;
   const double liftkD = 0.1;
   const int LIFT_MOTOR_PORT = 2;
  
   void autonomous() {
     okapi::Motor driveMotor (DRIVE_MOTOR_PORT);
     auto driveController = okapi::AsyncControllerFactory::posPID(driveMotor, drivekP, drivekI, drivekD);
  
     okapi::Motor liftMotor (LIFT_MOTOR_PORT);
     auto liftController = okapi::AsyncControllerFactory::posPID(liftMotor, liftkP, liftkI, liftkD);
    
     // Begin movements
     driveController.setTarget(1000); // Move 1000 ticks forward
     liftController.setTarget(200); // Move 100 ticks upward
     driveController.waitUntilSettled();
     liftController.waitUntilSettled();
    
     // Then the next movement will execute after the drive movement finishes
   }
