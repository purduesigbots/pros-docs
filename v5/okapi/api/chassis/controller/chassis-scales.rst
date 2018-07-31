==============
Chassis Scales
==============

.. contents:: :local:

okapi::ChassisScales
====================

Constructor(s)
--------------

The two scales a `ChassisController <abstract-chassis-controller.html>`_ needs to do all of its
closed-loop control. First index is the wheel diameter, second index is the wheelbase width. Read
the `clawbot programming tutorial <../../../tutorials/walkthrough/clawbot.html>`_ for more
information behind the meaning of these two numbers.

The wheelbase diameter is the center-to-center distance between the wheels (center-to-center
meaning the width between the centers of both wheels).

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisScales(const std::initializer_list<QLength> &iwheelbase)

   .. tab :: Example
     .. highlight:: cpp
     ::

       // Wheel diameter is 4 inches
       // Wheelbase width is 11.5 inches
       okapi::ChassisScales scales(4_in, 11.5_in);

=================   ===================================================================
 Parameters
=================   ===================================================================
 iscales             An initializer list of two lengths representing the wheel diameter and wheelbase width.
=================   ===================================================================

The two scales a Chassis Controller needs to do all of its closed-loop control. First index is the
straight scale, second index is the turn scale. The straight scale converts motor degrees to meters
and the turn scale converts motor degrees to robot turn degrees. Read the clawbot programming
tutorial for more information behind the meaning of these two numbers.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        ChassisScales(const std::initializer_list<double> &iscales)

   .. tab :: Example
     .. highlight:: cpp
     ::

       // Straight scale is 1128
       // Turn scale is 2.875
       okapi::ChassisScales scales(1128, 2.875);

=================   ===================================================================
 Parameters
=================   ===================================================================
 iscales             An initializer list of two doubles representing the straight and turn scales.
=================   ===================================================================
