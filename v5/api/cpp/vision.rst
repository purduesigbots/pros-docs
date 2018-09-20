=====================
Vision Sensor C++ API
=====================

.. note:: Additional example code for this module can be found in
          `its Tutorial <../../tutorials/topical/vision.html>`_.

.. contents:: :local:

pros::Vision
============

Constructor(s)
--------------

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::Vision::Vision ( std::uint8_t port,
                               vision_zero_e_t zero_point = E_VISION_ZERO_TOPLEFT )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1

        void initialize() {
          pros::Vision vision_sensor (VISION_PORT);
          vision_sensor.clear_led();
        }

============ =========================================================================
 Parameters
============ =========================================================================
 port         The V5 port number from 1-21
 zero_point   One of ``pros::vision_zero_e_t`` to set the (0,0) coordinate for the FOV
============ =========================================================================

----

Functions
---------

clear_led
~~~~~~~~~

Clears the vision sensor LED color, resetting it back to its default behavior,
displaying the most prominent object signature color.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Vision::clear_led ( )

   .. tab :: Example
      .. highlight:: cpppp
      ::

        #define VISION_PORT 1

        void initialize() {
          pros::Vision vision_sensor (VISION_PORT);
          vision_sensor.clear_led();
        }

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

----

get_by_sig
~~~~~~~~~~

Gets the nth largest object of the given signature according to size_id.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.
- ``EAGAIN`` - Reading the Vision Sensor failed for an unknown reason.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::vision_object_s_t pros::Vision::get_by_sig ( const std::uint32_t size_id,
                                                           const std::uint8_t sig_id )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1
        #define EXAMPLE_SIG 1

        void opcontrol() {
          pros::Vision vision_sensor (VISION_PORT);
          while (true) {
            vision_object_s_t rtn = vision_sensor.get_by_sig(0, EXAMPLE_SIG);
            // Gets the largest object of the EXAMPLE_SIG signature
            std::cout << "sig: " << rtn.signature;
            // Prints "sig: 1"
            pros::delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 size_id      The object to read from a list roughly ordered by object size
              (0 is the largest item, 1 is the second largest, etc.)
 sig_id       The signature number for which an object will be returned
============ ===============================================================

**Returns:** The vision_object_s_t object corresponding to the given signature and
size_id, or PROS_ERR if an error occurred.

----

get_by_size
~~~~~~~~~~~

Gets the nth largest object according to size_id.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         pros::vision_object_s_t pros::Vision::get_by_size ( const std::uint32_t size_id )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1

        void opcontrol() {
          pros::Vision vision_sensor (VISION_PORT);
          while (true) {
            vision_object_s_t rtn = vision_sensor.get_by_size(0);
            // Gets the largest object
            std::cout << "sig: " << rtn.signature;
            delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 size_id      The object to read from a list roughly ordered by object size
              (0 is the largest item, 1 is the second largest, etc.)
============ ===============================================================

**Returns:** The vision_object_s_t object corresponding to the given size id, or
PROS_ERR if an error occurred.

----

get_exposure
~~~~~~~~~~~~

Gets the exposure parameter of the Vision Sensor.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Vision::get_exposure ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1

        void initialize() {
          pros::Vision vision_sensor (VISION_PORT);
          if (vision_sensor.get_exposure() < 50)
            vision_sensor.set_exposure(50);
        }

**Returns:** the current exposure percentage parameter from [0,100],
PROS_ERR if an error occurred

----

get_object_count
~~~~~~~~~~~~~~~~

Returns the number of objects currently detected by the Vision Sensor.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::Vision::get_object_count ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Vision vision_sensor (VISION_PORT);
          while (true) {
            std::cout << "Number of Objects Detected: " << vision_sensor.get_object_count());
            pros::delay(2);
          }
        }

**Returns:** The number of objects detected on the specified vision sensor.
Returns PROS_ERR if the port was invalid or an error occurred.

----

get_white_balance
~~~~~~~~~~~~~~~~~

Gets the white balance parameter of the Vision Sensor.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Vision::get_white_balance ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1
        #define VISION_WHITE 0xff

        void initialize() {
          pros::Vision vision_sensor (VISION_PORT);
          if (vision_sensor.get_white_balance() != VISION_WHITE)
            vision_sensor.set_white_balance(VISION_WHITE);
        }

**Returns:** Returns the current RGB white balance setting of the sensor

----

read_by_sig
~~~~~~~~~~~

Reads up to object_count object descriptors into object_arr.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Vision::read_by_sig ( std::uint8_t port,
                                                 const std::uint32_t size_id,
                                                 const std::uint32_t sig_id,
                                                 const std::uint32_t object_count,
                                                 pros::vision_object_s_t *const object_arr )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1
        #define EXAMPLE_SIG 1
        #define NUM_VISION_OBJECTS 4

        void opcontrol() {
          pros::Vision vision_sensor (VISION_PORT);
          vision_object_s_t object_arr[NUM_VISION_OBJECTS];
          while (true) {
            vision_sensor.read_by_sig(0, EXAMPLE_SIG, NUM_VISION_OBJECTS, object_arr);
            std::cout << "sig: " << object_arr[0].signature;
            // Prints "sig: 1"
            pros::delay(2);
          }
        }

============== ========================================================
 Parameters
============== ========================================================
 size_id        The first object to read from a list roughly ordered
                by object size (0 is the largest item, 1 is the second
                largest, etc.)
 sig_id         The signature number for which objects will be returned
 object_count   How many objects to read
 object_arr     A pointer to copy the data into
============== ========================================================

**Returns:** The number of object signatures copied. This number will be less than
object_count if there are fewer objects detected by the vision sensor.
Returns PROS_ERR if the port was invalid, an error occurred, or fewer objects
than size_id were found. All objects in object_arr that were not found are
given VISION_OBJECT_ERR_SIG as their signature.

----

read_by_size
~~~~~~~~~~~~

Reads up to object_count object descriptors into object_arr.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Vision::read_by_size ( const std::uint32_t size_id,
                                                  const std::uint32_t object_count,
                                                  pros::vision_object_s_t *const object_arr )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1
        #define NUM_VISION_OBJECTS 4

        void opcontrol() {
          pros::Vision vision_sensor (VISION_PORT);
          vision_object_s_t object_arr[NUM_VISION_OBJECTS];
          while (true) {
            vision_sensor.read_by_size(0, NUM_VISION_OBJECTS, object_arr);
            std::cout << "sig: " << object_arr[0].signature;
            // Prints the signature of the largest object found
            pros::delay(2);
          }
        }

============== ========================================================
 Parameters
============== ========================================================
 size_id        The first object to read from a list roughly ordered
                by object size (0 is the largest item, 1 is the second
                largest, etc.)
 object_count   How many objects to read
 object_arr     A pointer to copy the data into
============== ========================================================

**Returns:** The number of object signatures copied. This number will be less than
object_count if there are fewer objects detected by the vision sensor.
Returns PROS_ERR if the port was invalid, an error occurred, or fewer objects
than size_id were found. All objects in object_arr that were not found are
given VISION_OBJECT_ERR_SIG as their signature.

----

set_auto_white_balance
~~~~~~~~~~~~~~~~~~~~~~

Enable/disable auto white-balancing on the Vision Sensor.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Vision::set_auto_white_balance ( const std::uint8_t enable )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1

        void initialize() {
          pros::Vision vision_sensor (VISION_PORT);
          vision_sensor.set_auto_white_balance(true);
        }

============ ===============================
 Parameters
============ ===============================
 enable       Pass 0 to disable, 1 to enable
============ ===============================

**Returns:** Returns 0 if no errors occurred, PROS_ERR otherwise

----

set_exposure
~~~~~~~~~~~~

Sets the exposure parameter of the Vision Sensor.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Vision::set_exposure ( const std::uint8_t percent )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1

        void initialize() {
          pros::Vision vision_sensor (VISION_PORT);
          if (vision_sensor.get_exposure() < 50)
            vision_sensor.set_exposure(50);
        }

============ ==============================
 Parameters
============ ==============================
 percent      The new exposure percentage
              from [0,100]
============ ==============================

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

----

set_led
~~~~~~~

Sets the vision sensor LED color, overriding the automatic behavior.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Vision::set_led ( const std::int32_t rgb )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1

        void initialize() {
          pros::Vision vision_sensor (VISION_PORT);
          vision_sensor.set_led(COLOR_BLANCHED_ALMOND);
        }

============ ==============================
 Parameters
============ ==============================
 rgb          An RGB code to set the LED to
============ ==============================

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

----

set_white_balance
~~~~~~~~~~~~~~~~~

Set the white balance parameter manually on the Vision Sensor.

This function will disable auto white-balancing.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Vision::set_white_balance ( const std::int32_t rgb )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1
        #define VISION_WHITE 0xff

        void initialize() {
          pros::Vision vision_sensor (VISION_PORT);
          vision_sensor.set_white_balance(VISION_WHITE);
        }

============ ===============================
 Parameters
============ ===============================
 rgb          The white balance parameter
============ ===============================

**Returns:** Returns 0 if no errors occurred, PROS_ERR otherwise

----

Macros
======

None.

Data Structures
===============

pros::vision_signature_s_t
--------------------------

This structure contains the parameters used by the Vision Sensor
to detect objects.

::

  typedef struct __attribute__((__packed__)) vision_signature {
    uint8_t id;
    uint8_t _pad[3];
    float range;
    int32_t u_min;
    int32_t u_max;
    int32_t u_mean;
    int32_t v_min;
    int32_t v_max;
    int32_t v_mean;
    uint32_t rgb;
    uint32_t type;
  } vision_signature_s_t;

pros::vision_object_s_t
-----------------------

This structure contains a descriptor of an object detected
by the Vision Sensor

::

  typedef struct __attribute__((__packed__)) vision_object {
    // Object signature
    uint16_t signature;
    // Object type, e.g. normal, color code, or line detection
    vision_object_type_e_t type;
    // left boundary coordinate of the object
    uint16_t left_coord;
    // top boundary coordinate of the object
    uint16_t top_coord;
    // width of the object
    uint16_t width;
    // height of the object
    uint16_t height;
    // Angle of a color code object in 0.1 degree units (e.g. 10 -> 1 degree, 155 -> 15.5 degrees)
    uint16_t angle;

    // coordinates of the middle of the object (computed from the values above)
    uint16_t x_middle_coord;
    uint16_t y_middle_coord;
  } vision_object_s_t;

================ ==========================================================================
 Value
================ ==========================================================================
 signature        Object signature
 type             `Object type <vision.html#vision-object-e-t>`_,
                  e.g. normal, color code, or line detection
 left_coord       left boundary coordinate of the object
 top_coord        top boundary coordinate of the object
 width            width of the object
 height           height of the object
 angle            angle of a color code object in 0.1 degree units
                  (e.g. 10 -> 1 degree, 155 -> 15.5 degrees)
 x_middle_coord   coordinates of the middle of the object (computed from the values above)
 y_middle_coord   coordinates of the middle of the object (computed from the values above)
================ ==========================================================================

Enumerated Values
=================

pros::vision_object_type_e_t
----------------------------

This enumeration defines the different types of objects
that can be detected by the Vision Sensor

::

  typedef enum vision_object_type {
    E_VISION_OBJECT_NORMAL = 0,
    E_VISION_OBJECT_COLOR_CODE = 1,
    E_VISION_OBJECT_LINE = 2
  } vision_object_type_e_t;

================================== ====================================================================================================
 Value
================================== ====================================================================================================
 pros::E_VISION_OBJECT_NORMAL       Default behavior for the vision sensor 
 pros::E_VISION_OBJECT_COLOR_CODE   Object returned is a `color code <http://www.cmucam.org/projects/cmucam5/wiki/Using_Color_Codes>`_ 
 pros::E_VISION_OBJECT_LINE         Object returned is a line type.
================================== ====================================================================================================

Typedefs
========

None.
