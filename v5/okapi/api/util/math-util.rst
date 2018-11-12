==============
Math Utilities
==============

.. contents:: :local:

Math utilities.

Constants
---------

A collection of ``static constexpr double`` constants that help with math.

================ ================
 Name             Value
================ ================
 analogInToV      286.0
 inchToMM         25.4
 mmToInch         0.0393700787
 degreeToRadian   0.01745
 radianToDegree   57.2957795
 imeTorqueTPR     627.2
 imeSpeedTPR      392.0
 imeTurboTPR      261.333
 ime269TPR        240.448
 imev5TPR         1800.0
 quadEncoderTPR   360.0
 pi               3.1415926535897932
 pi2              1.5707963267948966
 gravity          9.80665 (m/s^2)
================ ================

"V5 Brain"-specific constants.

================= ================
 Name              Value
================= ================
 motorUpdateRate   10 (ms)
 adiUpdateRate     5  (ms)
================= ================

Methods
-------

ipow
~~~~

Integer power function. Computes ``base^expo``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        constexpr double ipow(const double base, const int expo)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::ipow(0.5, 2); // Equals 0.25
        }

============ ===============================================================
 Parameters
============ ===============================================================
 base         The base term.
 expo         The exponent term.
============ ===============================================================

**Returns:** ``base^expo``.

----

cutRange
~~~~~~~~

Cut out a range from the number. The new range of the input number will be
``(-inf, min]U[max, +inf)``. If value sits equally between ``min`` and ``max``, ``max`` will be
returned.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        constexpr double cut_range(const double value, const double min, const double max)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::cut_range(0, -2, 2);  // Equals 2
          okapi::cut_range(1, -2, 2);  // Equals 2
          okapi::cut_range(-1, -2, 2); // Equals -2
          okapi::cut_range(3, -2, 2);  // Equals 3
        }

============ ===============================================================
 Parameters
============ ===============================================================
 value        The number to bound.
 min          The lower bound of the range.
 max          The upper bound of the range.
============ ===============================================================

**Returns:** The remapped value.

----

deadband
~~~~~~~~

Deadbands a range of the number. Returns the input value, or ``0`` if it is in the range
``[min, max]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        constexpr double deadband(const double value, const double min, const double max)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          okapi::deadband(1, -2, 2);   // Equals 0
          okapi::deadband(2, -2, 2);   // Equals 0
          okapi::deadband(3, -2, 2);  // Equals 3
          okapi::deadband(-3, -2, 2); // Equals -3
        }

============ ===============================================================
 Parameters
============ ===============================================================
 value        The number to bound.
 min          The lower bound of the deadband.
 max          The upper bound of the deadband.
============ ===============================================================

**Returns:** The remapped value.

----

remapRange
~~~~~~~~~~

Remap a value in the range ``[oldMin, oldMax]`` to the range ``[newMin, newMax]``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        constexpr double remapRange(const double value, const double oldMin, const double oldMax, const double newMin, const double newMax)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
              okapi::remapRange(0, -1, 1, -2, 2);    // Equals 0
              okapi::remapRange(0.1, -1, 1, -2, 2);  // Equals 0.2
              okapi::remapRange(-0.1, -1, 1, 2, -2); // Equals 0.2
              okapi::remapRange(0, -1, 1, -5, 2);    // Equals -1.5
        }

============ ===============================================================
 Parameters
============ ===============================================================
 value        The value in the old range.
 oldMin       The old range's lower bound.
 oldMax       The old range's upper bound.
 newMin       The new range's lower bound.
 newMax       The new range's upper bound.
============ ===============================================================

**Returns:** The remapped value in the new range ``[newMin, newMax]``.

----

toUnderlyingType
~~~~~~~~~~~~~~~~

Converts an enum to its value type.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        template <typename E> constexpr auto toUnderlyingType(const E e) noexcept

============ ===============================================================
 Parameters
============ ===============================================================
 e            The enum to convert.
============ ===============================================================

**Returns:** The value type for the enum.

----

boolToSign
~~~~~~~~~~

Converts a bool to a sign. ``true`` corresponds to ``1`` and ``false`` corresponds to ``-1``.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        constexpr auto boolToSign(const bool b) noexcept

============ ===============================================================
 Parameters
============ ===============================================================
 b            The bool to convert.
============ ===============================================================

**Returns:** The sign value of the bool.

----

modulus
~~~~~~~

Computes ``lhs`` mod ``rhs`` using Euclidean division. C's ``%`` symbol computes the remainder,
not modulus.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        constexpr long modulus(const long lhs, const long rhs) noexcept

============ ===============================================================
 Parameters
============ ===============================================================
 lhs          The left-hand side.
 rhs          The right-hand side.
============ ===============================================================

**Returns:** ``lhs`` mod ``rhs``.
