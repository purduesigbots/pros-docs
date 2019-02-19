==============
Chassis Scales
==============

.. contents:: :local:

okapi::ChassisScales
====================

Constructor(s)
--------------

The scales a Chassis Controller needs to do all of its closed-loop control. First index is the wheel
diameter, second index is the wheel track. An optional third index is the middle wheel diameter if
you are using a 3-encoder setup.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisScales(
          const std::initializer_list<QLength> &idimensions,
          std::int32_t itpr,
          const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>()
        )

   .. tab :: Example
     .. highlight:: cpp
     ::

       // Wheel diameter is 4 inches
       // Wheel track is 11.5 inches
       okapi::ChassisScales scales({4_in, 11.5_in}, imev5GreenTPR);

=================   ===================================================================
 Parameters
=================   ===================================================================
 idimensions         {wheel diameter, wheel track} or {wheel diameter, wheel track, length to middle wheel, middle wheel diameter}
 itpr                The ticks per revolution of the encoders.
 ilogger             The logger this instance will log to.
=================   ===================================================================

The scales a Chassis Controller needs to do all of its closed-loop control. First index is the
straight scale, second index is the turn scale. An optional third index is the middle scale. The
straight scale converts motor degrees to meters, the turn scale converts motor degrees to robot turn
degrees, and the middle scale converts middle wheel degrees to meters.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisScales(
          const std::initializer_list<double> &iscales,
          std::int32_t itpr,
          const std::shared_ptr<Logger> &ilogger = std::make_shared<Logger>()
        )

   .. tab :: Example
     .. highlight:: cpp
     ::

       // Straight scale is 1128
       // Turn scale is 2.875
       okapi::ChassisScales scales({1128, 2.875}, imev5GreenTPR);

=================   ===================================================================
 Parameters
=================   ===================================================================
 iscales             {straight scale, turn scale} or {straight scale, turn scale, length to middle wheel in meters, middle scale}
 itpr                The ticks per revolution of the encoders.
 ilogger             The logger this instance will log to.
=================   ===================================================================
