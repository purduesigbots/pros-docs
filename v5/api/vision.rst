=================
Vision Sensor API
=================

Functions
=========

vision_get_object_count
-----------------------

::

  int32_t vision_get_object_count (  uint8_t port )

Returns the number of objects currently detected by the Vision Sensor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** The number of objects detected on the specified vision sensor.
Returns PROS_ERR if the port was invalid or an error occurred.

vision_read_object
------------------

::

  int32_t vision_read_object (  uint8_t port,
                               const uint32_t object_id,
                               vision_object_s_t* object_ptr )

Copies the specified object descriptor into object_ptr.

============ ========================================================
 Parameters
============ ========================================================
 port         The V5 port number from 1-21
 object_id    Which object to read, approximately which largest item
              (0 is the largest item, 1 is the second largest, etc.)
 object_ptr   A pointer to copy the data into
============ ========================================================

**Returns:** 1 if the data was successfuly copied
Returns PROS_ERR if the port was invalid, the object_id was out of range, or an error occurred.

vision_read_objects
-------------------

::

  int32_t vision_read_objects (  uint8_t port,
                                const uint32_t object_count,
                                vision_object_s_t* object_arr )

Reads up to object_count object descriptors into object_arr.

============== ========================================================
 Parameters
============== ========================================================
 port           The V5 port number from 1-21
 object_count   How many objects to read
 object_arr     A pointer to copy the data into
============== ========================================================

**Returns:** The number of object signatures copied. This number will be less than object_count if there are fewer
objects detected by the vision sensor.
Returns PROS_ERR if the port was invalid or an error occurred.

vision_get_object
-----------------

::

  vision_object_s_t vision_get_object (  uint8_t port,
                                        const uint32_t object_id )

Returns the object descriptor at ``object_id``.

.. note::
   This function is slightly less performant than `vision_read_object`_ since the object descriptor
   must be copied at the end of the function call. This may not be an issue for most users.

============ ========================================================
 Parameters
============ ========================================================
 port         The V5 port number from 1-21
 object_id    Which object to read, approximately which largest item
              (0 is the largest item, 1 is the second largest, etc.)
============ ========================================================

**Returns:** An object descriptor. If the ``object_id`` was invalid or an error otherwise occurred, then the object
signature will be set to 255.

vision_read_signature
---------------------

::

  int32_t vision_read_signature (  uint8_t port,
                                  const uint8_t signature_id,
                                  vision_signature_s_t* signature_ptr )

Loads the object detection signature into the supplied pointer to memory.

=============== ========================================================
 Parameters
=============== ========================================================
 port            The V5 port number from 1-21
 signature_id    The signature id to read
 signature_ptr   A pointer to load the signature into
=============== ========================================================

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

vision_save_signature
---------------------

::

  int32_t vision_save_signature (  uint8_t port,
                                  const uint8_t signature_id,
                                  vision_signature_s_t* signature_ptr )

Stores the supplied object detection signature onto the vision sensor.

=============== ========================================================
 Parameters
=============== ========================================================
 port            The V5 port number from 1-21
 signature_id    The signature id to store into
 signature_ptr   A pointer to the signature to save
=============== ========================================================

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

vision_clear_led
----------------

::

  int32_t vision_clear_led (  uint8_t port )

Clears the vision sensor LED color, reseting it back to its default behavior,
displaying the most prominent object signature color.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

vision_set_led
--------------

::

  int32_t vision_set_led (  uint8_t port,
                           const int32_t rgb )

Sets the vision sensor LED color, overriding the automatic behavior.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
 rgb          An RGB code to set the LED to
============ ==============================

**Returns:** 0 if no errors occured, PROS_ERR otherwise

vision_get_exposure
-------------------

::

  int32_t vision_get_exposure (  uint8_t port )

Gets the exposure parameter of the Vision Sensor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** the current exposure percentage parameter from [0,100],
PROS_ERR if an error occurred

vision_set_exposure
-------------------

::

  int32_t vision_set_exposure (  uint8_t port,
                                const uint8_t percent )

Sets the exposure parameter of the Vision Sensor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
 percent      The new exposure percentage
              from [0,100]
============ ==============================

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

vision_set_auto_white_balance
-----------------------------

::

  int32_t vision_set_auto_white_balance (  uint8_t port,
                                          const uint8_t enable )

Enable/disable auto white-balancing on the Vision Sensor.

============ ===============================
 Parameters
============ ===============================
 port         The V5 port number from 1-21
 enable       Pass 0 to disable, 1 to enable
============ ===============================

**Returns:** Returns 0 if no errors occurred, PROS_ERR otherwise

vision_set_white_balance
------------------------

::

  int32_t vision_set_white_balance (  uint8_t port,
                                     const int32_t rgb )


Set the white balance parameter manually on the Vision Sensor.

This function will disable auto white-balancing.

============ ===============================
 Parameters
============ ===============================
 port         The V5 port number from 1-21
 rgb          The white balance parameter
============ ===============================

**Returns:** Returns 0 if no errors occurred, PROS_ERR otherwise

vision_get_white_balance
------------------------

::

  int32_t vision_get_white_balance (  uint8_t port )

Gets the white balance parameter of the Vision Sensor.

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

**Returns:** Returns the current RGB white balance setting of the sensor

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
 type             `Object type <vision_object_e_t>`_,
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

None.
