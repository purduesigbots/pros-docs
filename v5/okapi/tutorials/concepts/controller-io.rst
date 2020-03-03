=============================
Controller Inputs and Outputs
=============================

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.X.X and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

Fundamentally, a feedback control system needs both an input and an output.
In OkapiLib, Iterative Controllers do not require Controller Inputs and Outputs
to be passed into the constructor like Async Controllers do, but they are still
a necessary for making use of the controller. This tutorial will explain more
about what Controller Inputs and Outputs are, and what classes can be used for
such purposes.

General Usage
=============

Using Controller Inputs and Outputs is quite simple, they each only have one function.
Controller Inputs will return their current state with the ``controllerGet()`` function,
and Controller Outputs can be given a desired output with ``controllerSet()``. The exact
implementation of these functions varies depending on what device you are using, but all
Controller Outputs will accept a range of ``[-1, 1]`` as the input to ``controllerSet()``
for the sake of standardization across multiple different devices and configurations (i.e.
motors with different gearings)

What Classes are of Each Type?
==============================

**Controller Inputs:** All sensor classes can be used as Controller Inputs, such as:

* ``FilteredControllerInput``
* ``RotarySensor``
* ``ContinuousRotarySensor``
* ``ADIEncoder``
* ``IntegratedEncoder``
* ``ADIGyro``
* ``ADIUltrasonic``
* ``Potentiometer``

**Controller Outputs:**

* ``Motor``
* ``MotorGroup``
* ``ADIMotor``
