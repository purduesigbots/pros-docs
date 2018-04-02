.. highlight:: cpp
   :linenothreshold: 5

=====================
Vision Sensor C++ API
=====================

.. contents:: :local:

pros::Vision
============

Constructor(s)
--------------

::

  pros::Vision::Vision ( uint8_t port )

============ ==============================
 Parameters
============ ==============================
 port         The V5 port number from 1-21
============ ==============================

----

Functions
---------

clear_led
~~~~~~~~~

Clears the vision sensor LED color, reseting it back to its default behavior,
displaying the most prominent object signature color.

::

  int32_t pros::Vision::clear_led ( )

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

----

get_object_count
~~~~~~~~~~~~~~~~

Returns the number of objects currently detected by the Vision Sensor.

::

  int32_t pros::Vision::get_object_count ( )

**Returns:** The number of objects detected on the specified vision sensor.
Returns PROS_ERR if the port was invalid or an error occurred.

----

read_object
~~~~~~~~~~~

Copies the specified object descriptor into object_ptr.

::

  int32_t pros::Vision::read_object ( const uint32_t object_id,
                               vision_object_s_t* object_ptr )

============ ========================================================
 Parameters
============ ========================================================
 object_id    Which object to read, approximately which largest item
              (0 is the largest item, 1 is the second largest, etc.)
 object_ptr   A pointer to copy the data into
============ ========================================================

**Returns:** 1 if the data was successfuly copied
Returns PROS_ERR if the port was invalid, the object_id was out of range, or an error occurred.

----

read_objects
~~~~~~~~~~~~

Reads up to object_count object descriptors into object_arr.

::

  int32_t pros::Vision::read_objects ( const uint32_t object_count,
                                       vision_object_s_t* object_arr )

============== ========================================================
 Parameters
============== ========================================================
 object_count   How many objects to read
 object_arr     A pointer to copy the data into
============== ========================================================

**Returns:** The number of object signatures copied. This number will be less than object_count if there are fewer
objects detected by the vision sensor.
Returns PROS_ERR if the port was invalid or an error occurred.

----

get_object
~~~~~~~~~~

Returns the object descriptor at ``object_id``.

.. note::
   This function is slightly less performant than `read_object`_ since the object descriptor
   must be copied at the end of the function call. This may not be an issue for most users.

::

  vision_object_s_t pros::Vision::get_object ( const uint32_t object_id )

============ ========================================================
 Parameters
============ ========================================================
 object_id    Which object to read, approximately which largest item
              (0 is the largest item, 1 is the second largest, etc.)
============ ========================================================

**Returns:** An object descriptor. If the ``object_id`` was invalid or an error otherwise occurred, then the object
signature will be set to 255.

----

read_signature
~~~~~~~~~~~~~~

Loads the object detection signature into the supplied pointer to memory.

::

  int32_t pros::Vision::read_signature ( const uint8_t signature_id,
                                         vision_signature_s_t* signature_ptr )

=============== ========================================================
 Parameters
=============== ========================================================
 signature_id    The signature id to read
 signature_ptr   A pointer to load the signature into
=============== ========================================================

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

----

save_signature
~~~~~~~~~~~~~~

Stores the supplied object detection signature onto the vision sensor.

::

  int32_t pros::Vision::save_signature ( const uint8_t signature_id,
                                         vision_signature_s_t* signature_ptr )

=============== ========================================================
 Parameters
=============== ========================================================
 signature_id    The signature id to store into
 signature_ptr   A pointer to the signature to save
=============== ========================================================

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

----

set_led
~~~~~~~

Sets the vision sensor LED color, overriding the automatic behavior.

::

  int32_t pros::Vision::set_led ( const int32_t rgb )

============ ==============================
 Parameters
============ ==============================
 rgb          An RGB code to set the LED to
============ ==============================

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

----

get_exposure
~~~~~~~~~~~~

Gets the exposure parameter of the Vision Sensor.

::

  int32_t pros::Vision::get_exposure ( )

**Returns:** the current exposure percentage parameter from [0,100],
PROS_ERR if an error occurred

----

set_exposure
~~~~~~~~~~~~

Sets the exposure parameter of the Vision Sensor.

::

  int32_t pros::Vision::set_exposure ( const uint8_t percent )

============ ==============================
 Parameters
============ ==============================
 percent      The new exposure percentage
              from [0,100]
============ ==============================

**Returns:** 0 if no errors occurred, PROS_ERR otherwise

----

set_auto_white_balance
~~~~~~~~~~~~~~~~~~~~~~

Enable/disable auto white-balancing on the Vision Sensor.

::

  int32_t pros::Vision::set_auto_white_balance ( const uint8_t enable )

============ ===============================
 Parameters
============ ===============================
 enable       Pass 0 to disable, 1 to enable
============ ===============================

**Returns:** Returns 0 if no errors occurred, PROS_ERR otherwise

----

set_white_balance
~~~~~~~~~~~~~~~~~

Set the white balance parameter manually on the Vision Sensor.

This function will disable auto white-balancing.

::

  int32_t pros::Vision::set_white_balance ( const int32_t rgb )

============ ===============================
 Parameters
============ ===============================
 rgb          The white balance parameter
============ ===============================

**Returns:** Returns 0 if no errors occurred, PROS_ERR otherwise

----

get_white_balance
~~~~~~~~~~~~~~~~~

Gets the white balance parameter of the Vision Sensor.

::

  int32_t pros::Vision::get_white_balance ( )

**Returns:** Returns the current RGB white balance setting of the sensor
