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

signature_from_utility
~~~~~~~~~~~~~~~~~~~~~~

Creates a signature from the Vision Sensor utility

This function is parameter-equivalent to the functions used in VCS and RMS for constructing
vision signatures.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        vision_signature_s_t pros::Vision::signature_from_utility ( const int32_t id,
                                                                    const int32_t u_min,
                                                                    const int32_t u_max,
                                                                    const int32_t u_mean,
                                                                    const int32_t v_min,
                                                                    const int32_t v_max,
                                                                    const int32_t v_mean,
                                                                    const float range,
                                                                    const int32_t type )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1
        #define EXAMPLE_SIG 1

        void opcontrol() {
          pros::Vision sensor(VISION_PORT);
          // values acquired from the vision utility
          pros::vision_signature_s_t RED_SIG =
            pros::Vision::signature_from_utility(EXAMPLE_SIG, 8973, 11143, 10058, -2119, -1053, -1586, 5.4, 0);
          
          sensor.set_signature(EXAMPLE_SIG, &RED_SIG);
          while (true) {
            pros::vision_signature_s_t rtn = sensor.get_by_sig(VISION_PORT, 0, EXAMPLE_SIG);
            // Gets the largest object of the EXAMPLE_SIG signature
            std::cout << "sig: " << rtn.signature << std::endl;
            // Prints "sig: 1"
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 id           The signature ID
 u_min        Minimum value on U axis
 u_max        Maximum value on U axis
 u_mean       Mean value on U axis
 v_min        Minimum value on V axis
 v_max        Maximum value on V axis
 v_mean       Mean value on V axis
 range        Signature range scale factor
 type         The signature type
============ ==============================

**Returns:** A ``pros::vision_signature_s_t`` initialized with the given values.

----

create_color_code
~~~~~~~~~~~~~~~~~

Creates a color code that represents a combination of the given signature
IDs. If fewer than 5 signatures are to be a part of the color code, pass 0
for the additional function parameters.

This function uses the following values of errno when an error state is
reached:

	- ``EINVAL`` - Fewer than two signatures have been provided, or one of the
             		 signatures is out of its [1-7] range.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      :: 
            
        pros::vision_color_code_t pros::Vision::create_color_code ( const uint32_t sig_id1,
                                                                    const uint32_t sig_id2,
                                                                    const uint32_t sig_id3,
                                                                    const uint32_t sig_id4,
                                                                    const uint32_t sig_id5 )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
        #define EXAMPLE_SIG 1
				#define OTHER_SIG 2

        void opcontrol() {
          pros::Vision vis (VISION_PORT);
          pros::vision_color_code_t code1 = vis.create_color_code(EXAMPLE_SIG, OTHER_SIG);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 sig_id1      The first signature id [1-7] to add to the color code
 sig_id2      The second signature id [1-7] to add to the color code
 sig_id3      The third signature id [1-7] to add to the color code
 sig_id4      The fourth signature id [1-7] to add to the color code
 sig_id5      The fifth signature id [1-7] to add to the color code
============ ===============================================================

**Returns:** A ``pros::vision_color_code_t`` object containing the color code information.

----

get_by_sig
~~~~~~~~~~

Gets the nth largest object of the given signature according to size_id.

This function uses the following values of errno when an error state is
reached:

- ``EACCES`` - Another resource is currently trying to access the port.
- ``EDOM`` - size_id is greater than the number of available objects.
- ``EHOSTDOWN`` - Reading the vision sensor failed for an unknown reason.

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

- ``EACCES`` - Another resource is currently trying to access the port.
- ``EDOM`` - size_id is greater than the number of available objects.
- ``EHOSTDOWN`` - Reading the vision sensor failed for an unknown reason.

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

get_by_code
~~~~~~~~~~~

Gets the nth largest object of the given color code according to size_id.

This function uses the following values of errno when an error state is
reached:

- ``EACCES`` - Another resource is currently trying to access the port.
- ``EDOM`` - size_id is greater than the number of available objects.
- ``EHOSTDOWN`` - Reading the vision sensor failed for an unknown reason.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         pros::vision_object_s_t pros::Vision::get_by_code ( const uint32_t size_id,
                                                             const vision_color_code_t color_code )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
        #define EXAMPLE_SIG 1
        #define OTHER_SIG 2

        void opcontrol() {
          pros::Vision vis (VISION_PORT);
          pros::vision_color_code_t code1 = vis.create_color_code(EXAMPLE_SIG, OTHER_SIG);
          while (true) {
            pros::vision_object_s_t rtn = vis.get_by_code(0, code1);
            // Gets the largest object
            printf("sig: %d", rtn.signature);
            delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 size_id      The object to read from a list roughly ordered by object size
              (0 is the largest item, 1 is the second largest, etc.)
 color_code   The vision_color_code_t for which an object will be returned
============ ===============================================================

**Returns:** The vision_object_s_t object corresponding to the given color code
and size_id, or PROS_ERR if an error occurred.

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

get_signature
~~~~~~~~~~~~~

Gets the object detection signature with the given id number.

This function uses the following values of errno when an error state is
reached:

- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        pros::vision_signature_s_t pros::Vision::get_signature ( const std::uint8_t signature_id )

   .. tab :: Example
      .. highlight:: c
      ::

				#define VISION_PORT 1
        #define EXAMPLE_SIG 1

				void opcontrol() {
          pros::Vision vis (VISION_PORT);
          pros::vision_signature_s_t sig = vis.get_signature(EXAMPLE_SIG);
          pros::Vision::print_signature(sig);
				}

=============== ==============================
 Parameters
=============== ==============================
 signature_id    The signature id to read
============== ==============================

**Returns:** A ``pros::vision_signature_s_t`` containing information about the signature.

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

print_signature
~~~~~~~~~~~~~~~

Prints the contents of the signature as an initializer list to the terminal.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        static std::int32_t pros::Vision::print_signature ( const vision_signature_s_t sig )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
        #define EXAMPLE_SIG 1

        void opcontrol() {
					pros::Vision vis (VISION_PORT);
					pros::vision_signature_s_t sig = vis.get_signature(EXAMPLE_SIG);
          pros::Vision::print_signature(sig);
        }

============== ========================================================
 Parameters
============== ========================================================
 sig            The signature for which the contents will be printed
============== ========================================================

**Returns:** 1 if no errors occured, PROS_ERR otherwise

----

read_by_sig
~~~~~~~~~~~

Reads up to object_count object descriptors into object_arr.

This function uses the following values of errno when an error state is
reached:

- ``EACCES`` - Another resource is currently trying to access the port.
- ``EDOM`` - size_id is greater than the number of available objects.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Vision::read_by_sig ( const std::uint32_t size_id,
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

- ``EACCES`` - Another resource is currently trying to access the port.
- ``EDOM`` - size_id is greater than the number of available objects.

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

read_by_code
~~~~~~~~~~~~

Reads up to object_count object descriptors into object_arr.

This function uses the following values of errno when an error state is
reached:

- ``EACCES`` - Another resource is currently trying to access the port.
- ``EDOM`` - size_id is greater than the number of available objects.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        std::int32_t pros::Vision::read_by_code ( const uint32_t size_id,
                                                  const vision_color_code_t color_code,
                                                  const uint32_t object_count,
                                                  vision_object_s_t* const object_arr )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
        #define EXAMPLE_SIG 1
        #define OTHER_SIG 2
        #define NUM_VISION_OBJECTS 4

        void opcontrol() {
          pros::vision_object_s_t object_arr[NUM_VISION_OBJECTS];
          pros::Vision vis (VISION_PORT);
          pros::vision_color_code_t code1 = vis.create_color_code(EXAMPLE_SIG, OTHER_SIG);
          while (true) {
            vis.read_by_code(0, code1, NUM_VISION_OBJECTS, object_arr);
            printf("sig: %d", object_arr[0].signature);
            // Prints the signature of the largest object found
            delay(2);
          }
        }

============== ========================================================
 Parameters
============== ========================================================
 size_id        The first object to read from a list roughly ordered
                by object size (0 is the largest item, 1 is the second
                largest, etc.)
 color_code     The vision_color_code_t for which objects will be
                returned
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

set_signature
~~~~~~~~~~~~~

Stores the supplied object detection signature onto the vision sensor.

.. note:: This saves the signature in volatile memory, and the signature will be
          lost as soon as the sensor is powered down.

This function uses the following values of errno when an error state is
reached:

- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        std::int32_t pros::Vision::set_signature ( const std::uint8_t signature_id,
                                                   pros::vision_signature_s_t* const signature_ptr )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
        #define EXAMPLE_SIG 1

        void opcontrol() {
          pros::Vision vis (VISION_PORT);
          pros::vision_signature_s_t sig = vis.get_signature(EXAMPLE_SIG);
          sig.range = 10.0;
          vis.set_signature(EXAMPLE_SIG, &sig);
        }

================ ===================================
 Parameters
================ ===================================
 signature_id    The signature id to store into
 signature_ptr   A pointer to the signature to save
================ ===================================

**Returns:** 1 if no errors, occurred, PROS_ERR otherwise

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

**Returns:** Returns 1 if no errors occurred, PROS_ERR otherwise

----

set_zero_point
~~~~~~~~~~~~~~

Set the (0,0) coordinate for the Field of View.

This will affect the coordinates returned for each request for a
``vision_object_s_t`` from the sensor, so it is recommended that this
function only be used to configure the sensor at the beginning of its use.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Vision::set_zero_point ( vision_zero_e_t zero_point )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1

        void initialize() {
          pros::Vision vision_sensor (VISION_PORT);
          vision_sensor.set_zero_point(pros::E_VISION_ZERO_CENTER);
        }

============ ===============================
 Parameters
============ ===============================
 zero_point   One of ``vision_zero_e_t`` to
              set the (0,0) coordinate for
              the FOV
============ ===============================

**Returns:** Returns 0 if no errors occurred, PROS_ERR otherwise

----


set_wifi_mode
~~~~~~~~~~~~~

Set the Wi-Fi mode of the Vision Sensor.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Vision::set_wifi_mode ( const std::uint8_t enable )

   .. tab :: Example
      .. highlight:: cpp
      ::

        #define VISION_PORT 1

        void initialize() {
          pros::Vision vision_sensor (VISION_PORT);
          vision_sensor.set_wifi_mode(0);
        }

============ ===============================
 Parameters
============ ===============================
 enable       Disable Wi-Fi mode on the
              Vision Sensor if 0, enable
              otherwise (e.g. 1).
============ ===============================

**Returns:** Returns 0 if no errors occurred, PROS_ERR otherwise

----

Macros
======

 
VISION_FOV_WIDTH
----------------

The width of the Vision Sensor's field of view.

**Value:** 316

----

VISION_FOV_HEIGHT
----------------- 

The height of the Vision Sensor's field of view.

**Value:** 212

----

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

pros::vision_zero_e_t
---------------------

This enumeration defines different zero points for returned vision objects.

::

  typedef enum vision_zero {
    E_VISION_ZERO_TOPLEFT = 0,
    E_VISION_ZERO_CENTER = 1
  } vision_zero_e_t;

======================= =============================================
 Value
======================= =============================================
 E_VISION_ZERO_TOPLEFT   (0,0) coordinate is the top left of the FOV
 E_VISION_ZERO_CENTER    (0,0) coordinate is the center of the FOV
======================= =============================================

Typedefs
========

vision_color_code_t
-------------------

Color codes are just signatures with multiple IDs and a different type.

::

	typedef uint16_t vision_color_code_t;
