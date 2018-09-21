======================
OkapiLib 3.3.0 Release
======================

.. post:: 21 September, 2018
   :tags: blog, okapilib-release

Features
 - 1D motion profiling (#207).
 - `RQuantity` got a unary minus operator overload so negation of units works as expected (#206).
 - Kernel upgraded to v3.1.1
 - `ChassisModel` parameters have been renamed to be more approachable and internally consistent (#204).

Bug Fixes
 - `AsyncPosIntegratedController` now uses the maximum motor velocity for profiled movements by default (#210).
 - `MotorGroup` will now throw a `std::invalid_argument` exception if it is not given any motors (#208).
