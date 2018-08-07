===============================
Factory Object Creation Pattern
===============================

OkapiLib uses a pattern of **Factories** to create objects. This means that while you can find constructors
for any classes you may want to use in ``/okapi/api``, creating these classes is best done with
a method from the class's related factory in ``/okapi/impl``. These factories are designed to make it as easy as possible
to create objects, you won't have to worry about smart pointers and other more complex concepts that Okapilib relies on.

Creating an object with a factory is quite simple, as shown in the below example:

.. highlight: cpp
.. code-block:: cpp
   :linenos:

   const double kP = 1.0;
   const double kI = 0.001;
   const double kD = 0.1;
   const int MOTOR_PORT = 1;

   okapi::Motor exampleMotor (MOTOR_PORT);
   auto exampleController = okapi::AsyncControllerFactory::posPID(exampleMotor, kP, kI, kD);

As opposed to creating the same object without factories:

.. highlight: cpp
.. code-block:: cpp
   :linenos:

   const double kP = 1.0;
   const double kI = 0.001;
   const double kD = 0.1;
   const int MOTOR_PORT = 1;

   okapi::Motor exampleMotor (MOTOR_PORT);

   okapi::SettledUtil exampleSettledUtil (std::make_unique<Timer>());
   okapi::TimeUtil timeUtil (
     Supplier<std::unique_ptr<AbstractTimer>>([]() { return std::make_unique<Timer>(); }),
     Supplier<std::unique_ptr<AbstractRate>>([]() { return std::make_unique<Rate>(); }),
     Supplier<std::unique_ptr<SettledUtil>>([]() { return std::make_unique<SettledUtil>(exampleSettledUtil); }));
   okapi::AsyncPosPIDController exampleController (exampleMotor.getEncoder(), std::make_shared<Motor>(exampleMotor),
                                                   timeUtil, kP, kI, kD);
