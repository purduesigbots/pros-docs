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

        int32_t pros::Vision::clear_led ( )

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

        vision_object_s_t pros::Vision::get_by_sig ( const uint32_t size_id,
                                                     const uint8_t sig_id )

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

         vision_object_s_t pros::Vision::get_by_size ( const uint32_t size_id )

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

        int32_t pros::Vision::get_exposure ( )

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

         int32_t pros::Vision::get_object_count ( )

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

        int32_t pros::Vision::get_white_balance ( )

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

        int32_t pros::Vision::read_by_sig ( uint8_t port,
                                            const uint32_t size_id,
                                            const uint32_t sig_id,
                                            const uint32_t object_count,
                                            vision_object_s_t *const object_arr )

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

**Returns:** Returns PROS_ERR if the port was invalid or an error occurred.

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

        int32_t pros::Vision::read_by_size ( const uint32_t size_id,
                                             const uint32_t object_count,
                                             vision_object_s_t *const object_arr )

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

**Returns:** Returns PROS_ERR if the port was invalid or an error occurred.

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

        int32_t pros::Vision::set_auto_white_balance ( const uint8_t enable )

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

        int32_t pros::Vision::set_exposure ( const uint8_t percent )

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

        int32_t pros::Vision::set_led ( const int32_t rgb )

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

        int32_t pros::Vision::set_white_balance ( const int32_t rgb )

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
