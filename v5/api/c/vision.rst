===================
Vision Sensor C API
===================

.. note:: Additional example code for this module can be found in
          `its Tutorial <../../tutorials/topical/vision.html>`_.

.. contents:: :local:

Functions
=========

vision_clear_led
----------------

Clears the vision sensor LED color, resetting it back to its default behavior,
displaying the most prominent object signature color.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t vision_clear_led ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1

        void initialize() {
          vision_clear_led(VISION_PORT);
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

----

vision_create_color_code
------------------------

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

				vision_color_code_t vision_create_color_code ( uint8_t port,
				                                               const uint32_t sig_id1,
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
          vision_color_code_t code1 = vision_create_color_code(VISION_PORT, EXAMPLE_SIG, OTHER_SIG);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 sig_id1      The first signature id [1-7] to add to the color code
 sig_id2      The second signature id [1-7] to add to the color code
 sig_id3      The third signature id [1-7] to add to the color code
 sig_id4      The fourth signature id [1-7] to add to the color code
 sig_id5      The fifth signature id [1-7] to add to the color code
============ ===============================================================

**Returns:** A ``vision_color_code_t`` object containing the color code information.

----

vision_get_by_sig
-----------------

Gets the nth largest object of the given signature according to size_id.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.
- ``EDOM`` - size_id is greater than the number of available objects.
- ``EHOSTDOWN`` - Reading the vision sensor failed for an unknown reason.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        vision_object_s_t vision_get_by_sig ( uint8_t port,
                                              const uint32_t size_id,
                                              const uint8_t sig_id )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
        #define EXAMPLE_SIG 1

        void opcontrol() {
          while (true) {
            vision_object_s_t rtn = vision_get_by_sig(VISION_PORT, 0, EXAMPLE_SIG);
            // Gets the largest object of the EXAMPLE_SIG signature
            printf("sig: %d", rtn.signature);
            // Prints "sig: 1"
            delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 size_id      The object to read from a list roughly ordered by object size
              (0 is the largest item, 1 is the second largest, etc.)
 sig_id       The signature number for which an object will be returned
============ ===============================================================

**Returns:** The vision_object_s_t object corresponding to the given signature and
size_id, or PROS_ERR if an error occurred.

----

vision_get_by_size
------------------

Gets the nth largest object according to size_id.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.
- ``EDOM`` - size_id is greater than the number of available objects.
- ``EHOSTDOWN`` - Reading the vision sensor failed for an unknown reason.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         vision_object_s_t vision_get_by_size ( uint8_t port,
                                                const uint32_t size_id )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1

        void opcontrol() {
          while (true) {
            vision_object_s_t rtn = vision_get_by_size(VISION_PORT, 0);
            // Gets the largest object
            printf("sig: %d", rtn.signature);
            delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 size_id      The object to read from a list roughly ordered by object size
              (0 is the largest item, 1 is the second largest, etc.)
============ ===============================================================

**Returns:** The vision_object_s_t object corresponding to the given size id, or
PROS_ERR if an error occurred.

----

vision_get_by_code
------------------

Gets the nth largest object of the given color code according to size_id.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.
- ``EDOM`` - size_id is greater than the number of available objects.
- ``EHOSTDOWN`` - Reading the vision sensor failed for an unknown reason.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         vision_object_s_t vision_get_by_code ( uint8_t port,
				                                        const uint32_t size_id,
																								const vision_color_code_t color_code )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
				#define EXAMPLE_SIG 1
				#define OTHER_SIG 2

        void opcontrol() {
					vision_color_code_t code1 = vision_create_color_code(VISION_PORT, EXAMPLE_SIG, OTHER_SIG);
          while (true) {
            vision_object_s_t rtn = vision_get_by_code(VISION_PORT, 0, code1);
            // Gets the largest object
            printf("sig: %d", rtn.signature);
            delay(2);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 port         The V5 port number from 1-21
 size_id      The object to read from a list roughly ordered by object size
              (0 is the largest item, 1 is the second largest, etc.)
 color_code   The vision_color_code_t for which an object will be returned
============ ===============================================================

**Returns:** The vision_object_s_t object corresponding to the given color code
and size_id, or PROS_ERR if an error occurred.

----

vision_get_exposure
-------------------

Gets the exposure parameter of the Vision Sensor.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t vision_get_exposure ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1

        void initialize() {
          if (vision_get_exposure(VISION_PORT) < 50)
            vision_set_exposure(VISION_PORT, 50);
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** the current exposure percentage parameter from [0,100],
PROS_ERR if an error occurred

----

vision_get_object_count
-----------------------

Returns the number of objects currently detected by the Vision Sensor.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

         int32_t vision_get_object_count ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1

        void opcontrol() {
          while (true) {
            printf("Number of Objects Detected: %d\n", vision_get_object_count(VISION_PORT));
            delay(2);
          }
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The number of objects detected on the specified vision sensor.
Returns PROS_ERR if the port was invalid or an error occurred.

----

vision_get_signature
--------------------

Gets the object detection signature with the given id number.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        vision_signature_s_t vision_get_signature ( uint8_t port,
				                                            const uint8_t signature_id )

   .. tab :: Example
      .. highlight:: c
      ::

				#define VISION_PORT 1
				#define EXAMPLE_SIG 1

				void opcontrol() {
					vision_signature_s_t sig = vision_get_signature(VISION_PORT, EXAMPLE_SIG);
					vision_print_signature(sig);
				}

=============== ==============================
 Parameters
=============== ==============================
 port            The V5 port number from 1-21
 signature_id    The signature id to read
============== ==============================

**Returns:** A ``vision_signature_s_t`` containing information about the signature.

----

vision_get_white_balance
------------------------

Gets the white balance parameter of the Vision Sensor.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t vision_get_white_balance ( uint8_t port )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
        #define VISION_WHITE 0xff

        void initialize() {
          if (vision_get_white_balance(VISION_PORT) != VISION_WHITE)
            vision_set_white_balance(VISION_PORT, VISION_WHITE);
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** Returns the current RGB white balance setting of the sensor

----

vision_print_signature
----------------------

Prints the contents of the signature as an initializer list to the terminal.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t vision_print_signature ( const vision_signature_s_t sig )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
        #define EXAMPLE_SIG 1

        void opcontrol() {
					vision_signature_s_t sig = vision_get_signature(VISION_PORT, EXAMPLE_SIG);
          vision_print_signature(sig);
        }

============== ========================================================
 Parameters
============== ========================================================
 sig            The signature for which the contents will be printed
============== ========================================================

**Returns:** 1 if no errors occured, PROS_ERR otherwise

----

vision_read_by_sig
------------------

Reads up to object_count object descriptors into object_arr.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.
- ``EDOM`` - size_id is greater than the number of available objects.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t vision_read_by_sig ( uint8_t port,
                                     const uint32_t size_id,
                                     const uint32_t sig_id,
                                     const uint32_t object_count,
                                     vision_object_s_t *const object_arr )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
        #define EXAMPLE_SIG 1
        #define NUM_VISION_OBJECTS 4

        void opcontrol() {
          vision_object_s_t object_arr[NUM_VISION_OBJECTS];
          while (true) {
            vision_read_by_sig(VISION_PORT, 0, EXAMPLE_SIG, NUM_VISION_OBJECTS, object_arr);
            printf("sig: %d", object_arr[0].signature);
            // Prints "sig: 1"
            delay(2);
          }
        }

============== ========================================================
 Parameters
============== ========================================================
 port           The V5 port number from 1-21
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

vision_read_by_size
-------------------

Reads up to object_count object descriptors into object_arr.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.
- ``EDOM`` - size_id is greater than the number of available objects.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t vision_read_by_size ( uint8_t port,
                                      const uint32_t size_id,
                                      const uint32_t object_count,
                                      vision_object_s_t *const object_arr )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
        #define NUM_VISION_OBJECTS 4

        void opcontrol() {
          vision_object_s_t object_arr[NUM_VISION_OBJECTS];
          while (true) {
            vision_read_by_size(VISION_PORT, 0, NUM_VISION_OBJECTS, object_arr);
            printf("sig: %d", object_arr[0].signature);
            // Prints the signature of the largest object found
            delay(2);
          }
        }

============== ========================================================
 Parameters
============== ========================================================
 port           The V5 port number from 1-21
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

vision_read_by_code
-------------------

Reads up to object_count object descriptors into object_arr.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.
- ``EDOM`` - size_id is greater than the number of available objects.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

				int32_t vision_read_by_code ( uint8_t port,
				                              const uint32_t size_id,
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
          vision_object_s_t object_arr[NUM_VISION_OBJECTS];
					vision_color_code_t code1 = vision_create_color_code(VISION_PORT, EXAMPLE_SIG, OTHER_SIG);
          while (true) {
            vision_read_by_code(VISION_PORT, 0, code1, NUM_VISION_OBJECTS, object_arr);
            printf("sig: %d", object_arr[0].signature);
            // Prints the signature of the largest object found
            delay(2);
          }
        }

============== ========================================================
 Parameters
============== ========================================================
 port           The V5 port number from 1-21
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

vision_set_auto_white_balance
-----------------------------

Set the white balance parameter manually on the Vision Sensor.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t vision_set_auto_white_balance ( uint8_t port,
                                                const int32_t rgb )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1

        void initialize() {
          vision_set_auto_white_balance(VISION_PORT, true);
        }

============ ===============================
 Parameters
============ ===============================
 port         The V5 port number from 1-21
 enabled      Pass 0 to disable, 1 to enable
============ ===============================

**Returns:** Returns 0 if no errors occurred, PROS_ERR otherwise

----

vision_set_exposure
-------------------

Sets the exposure parameter of the Vision Sensor.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t vision_set_exposure ( uint8_t port,
                                      const uint8_t percent )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1

        void initialize() {
          if (vision_get_exposure(VISION_PORT) < 50)
            vision_set_exposure(VISION_PORT, 50);
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
 percent      The new exposure percentage
              from [0,100]
============ ==============================

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

----

vision_set_led
--------------

Sets the vision sensor LED color, overriding the automatic behavior.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t vision_set_led ( uint8_t port,
                                 const int32_t rgb )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1

        void initialize() {
          vision_set_led(VISION_PORT, COLOR_BLANCHED_ALMOND);
        }

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
 rgb          An RGB code to set the LED to
============ ==============================

**Returns:** 0 if no errors occured, PROS_ERR otherwise

----

vision_set_signature
--------------------

Stores the supplied object detection signature onto the vision sensor.

.. note:: This saves the signature in volatile memory, and the signature will be
          lost as soon as the sensor is powered down.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t vision_set_signature ( uint8_t port,
				                               const uint8_t signature_id,
																			 vision_signature_s_t* const signature_ptr )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
				#define EXAMPLE_SIG 1

        void opcontrol() {
          vision_signature_s_t sig = vision_get_signature(VISION_PORT, EXAMPLE_SIG);
					sig.range = 10.0;
					vision_set_signature(VISION_PORT, EXAMPLE_SIG, &sig);
        }

================ ===================================
 Parameters
================ ===================================
 port            The V5 port number from 1-21
 signature_id    The signature id to store into
 signature_ptr   A pointer to the signature to save
================ ===================================

**Returns:** 1 if no errors, occurred, PROS_ERR otherwise

----

vision_set_white_balance
------------------------

Set the white balance parameter manually on the Vision Sensor.

This function will disable auto white-balancing.

This function uses the following values of errno when an error state is
reached:

- ``EINVAL`` - The given value is not within the range of V5 ports (1-21).
- ``EACCES`` - Another resource is currently trying to access the port.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: c
      ::

        int32_t vision_set_white_balance ( uint8_t port,
                                           const int32_t rgb )

   .. tab :: Example
      .. highlight:: c
      ::

        #define VISION_PORT 1
        #define VISION_WHITE 0xff

        void initialize() {
          vision_set_white_balance(VISION_PORT, VISION_WHITE);
        }

============ ===============================
 Parameters
============ ===============================
 port         The V5 port number from 1-21
 rgb          The white balance parameter
============ ===============================

**Returns:** Returns 0 if no errors occurred, PROS_ERR otherwise

----

Macros
======

None.

Data Structures
===============

vision_signature_s_t
--------------------

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

vision_object_s_t
-----------------

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

vision_object_type_e_t
----------------------

This enumeration defines the different types of objects
that can be detected by the Vision Sensor

::

  typedef enum vision_object_type {
    E_VISION_OBJECT_NORMAL = 0,
    E_VISION_OBJECT_COLOR_CODE = 1,
    E_VISION_OBJECT_LINE = 2
  } vision_object_type_e_t;

Typedefs
========

vision_color_code_t
-------------------

Color codes are just signatures with multiple IDs and a different type.

::
	typedef uint16_t vision_color_code_t;
