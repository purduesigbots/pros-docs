.. highlight:: cpp
   :linenothreshold: 5

=====================
Motor Groups C++ API
=====================

.. note:: Motor Groups function similar to motors but with multiple motors, and there is a C++ API for them.

.. contents:: :local:

pros::Motor_Group
=================

Constructor(s)
--------------
 This function uses the following values of ``errno`` when an error state is reached:

- ``ENXIO``  - The given value is not within the range of V5 ports (1-21).
- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

.. tabs ::
   .. tab ::Prototype
      .. highlight:: cpp
      ::

        pros::Motor_Group::Motor_Group(const std::initializer_list<Motor> motors)
   .. tab :: Example
     .. highlight:: cpp
     ::

      void opcontrol(){
        pros::Motor motor_1 (1);
        pros::Motor motor_2 (2);

        pros::Motor_Group motor_group ({motor_1, motor_2});
        pros::Controller master (E_CONTROLLER_MASTER);
        while (true) {
          motor_group.move(master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y));
          pros::delay(5);
        }
      }

=============== ===================================================================
 Parameters
=============== ===================================================================
 motors            An initializer_list of motors to be in the motor group
=============== ===================================================================

----

.. tabs ::
   .. tab ::Prototype
      .. highlight:: cpp
      ::

        pros::Motor_Group::Motor_Group(const std::vector<std::int8_t> motor_ports)
   .. tab :: Example
     .. highlight:: cpp
     ::

      void opcontrol(){
        pros::Motor_Group motor_group ({1, 2});
        pros::Controller master (E_CONTROLLER_MASTER);
        while (true) {
          motor_group.move(master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y));
          pros::delay(5);
        }
      }

=============== ===================================================================
 Parameters
=============== ===================================================================
 motors         A Vector with the ports of the motors. Negative ports indicate
                that the motor is reversed
=============== ===================================================================

----

Operator Overloads
------------------
Sets the voltage for all the motors in the motor group from -128 to 127.
	
	This is designed to map easily to the input from the controller's analog
	stick for simple opcontrol use. The actual behavior of the motor is
  analogous to use of `pros::Motor::move()` on each motor individually
	This function uses the following values of errno when an error state is
	reached:
	ENODEV - One of the ports cannot be configured as a motor
	EACCESS - The Motor group mutex can't be taken or given
	
.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        virtual std::int32_t operator= ( std::int8_t voltage ) const

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor_Group motor_group ({1, 2});
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor_group = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            pros::delay(5);
          }
        }

=============== ===================================================================
 Parameters
=============== ===================================================================
 voltage          The new motor voltage from -127 to 127
=============== ===================================================================

----

move
~~~~

Sets the voltage for the motors in the motor group from -127 to 127.

This is designed to map easily to the input from the controller's analog
stick for simple opcontrol use. The actual behavior of the motor is
analogous to use of `motor_move()`, or `motorSet()`` from the 
PROS 2 API on each motor.

This function uses the following values of errno when an error state is
reached:
ENODEV - The port cannot be configured as a motor
EACCESS - The Motor group mutex can't be taken or given

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::Motor_Group::move ( std::int32_t voltage )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor_Group motor_group ({1, 2});
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor_group.move(master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y));
            pros::delay(5);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 voltage      The new motor voltage from -127 to 127
============ ===============================================================


**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation
failed, setting ``errno``.

----

move_absolute
~~~~~~~~~~~~~

Sets the target absolute position for the motors to move to.
	
This movement is relative to the position of the motors when initialized or
the position when it was most recently reset with	pros::Motor::set_zero_position().
	.. note:: This function simply sets the target for the motors, it does not block
	          program execution until the movement finishes.
	
  This function uses the following values of errno when an error state is
	reached:
	ENODEV - The port cannot be configured as a motor
 	EACCESS - The Motor group mutex can't be taken or given
	
  .. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::move_absolute ( double position,
                                                  std::int32_t velocity )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor_Group motor_group ({1, 2});
          motor_group.move_absolute(100, 100); // Moves 100 units forward
          Motor_Group::get_positions() 
          while (!((motor_group.get_positions() < 105) && (motor_group.get_positions() > 95))) {
            // Continue running this loop as long as the motor is not within +-5 units of its goal
            pros::delay(5);
          }
          motor_group.move_absolute(100, 100); // This does not cause a movement
          while (!((motor_group.get_positions() < 105) && (motor_group.get_positions() > 95))) {
            pros::delay(5);
          }
          motor_group.tare_positions();
          motor_group.move_absolute(100, 100); // Moves 100 units forward
          while (!((motor_group.get_positions() < 105) && (motor_group.get_positions() > 95))) {
            pros::delay(5);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 position     The absolute position to move to in the motors' encoder units
 velocity     The maximum allowable velocity for the movement
============ ===============================================================

	
  **Returns** ``1`` if the operation was successful or ``PROS_ERR`` if the operation
	failed, setting ``errno``.
	
----

move_relative
~~~~~~~~~~~~~

Sets the relative target position for the motors to move to.

This movement is relative to the current position of the motor as given in
`get_position`_.

.. note:: This function simply sets the target for the motor, it does not block program
          execution until the movement finishes. The example code shows how to block
          until a movement is finished.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_move_relative <../c/motors.html#motor-move-relative>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::move_relative ( double position,
                                                  std::int32_t velocity )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor_Group motor_group ({1, 2});
          motor_group.move_relative(100, 100); // Moves 100 units forward
          while (!((motor_group.get_positions() < 105) && (motor_group.get_positions() > 95))) {
            // Continue running this loop as long as the motor_group is not within +-5 units of its goal
            pros::delay(5);
          }
          motor_group.move_relative(100, 100); // Also moves 100 units forward
          while (!((motor_group.get_positions() < 205) && (motor_group.get_positions() > 195))) {
            pros::delay(5);
          }
        }

============ ===============================================================
 Parameters
============ ===============================================================
 position     The relative position to move to in the motor's encoder units
 velocity     The maximum allowable velocity for the movement
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

move_velocity
~~~~~~~~~~~~~

Sets the velocity for the motor.

This velocity corresponds to different actual speeds depending on the gearset
used for the motor. This results in a range of +-100 for
`E_MOTOR_GEARSET_36 <motor_gearset_e_t_>`_,
+-200 for `E_MOTOR_GEARSET_18 <motor_gearset_e_t_>`_, and +-600 for
`blue <motor_gearset_e_t_>`_. The velocity
is held with PID to ensure consistent speed, as opposed to setting the motor's
voltage.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given


Analogous to `motor_move_velocity <../c/motors.html#motor-move-velocity>`_.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::move_velocity ( std::uint8_t port,
                                                  std::int16_t velocity )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor_Group motor_group ({1, 2});
          motor_group.move_velocity(100);
          pros::delay(1000); // Move at 100 RPM for 1 second
          motor_group.move_velocity(0);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 velocity     The new motor velocity from +-100, +-200, or +-600 depending
              on the motor's `gearset <motor_gearset_e_t_>`_
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

move_voltage
~~~~~~~~~~~~

Sets the voltage for the motor from -12000 mV to 12000 mV.

.. note:: This function will not respect brake modes, and simply sets the voltage
          to the desired value.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given


Analogous to `motor_move_voltage <../c/motors.html#motor-move-voltage>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::move_voltage ( std::int16_t voltage )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
        pros::Motor_Group motor_group ({1,2});
          motor_group.move_voltage(12000);
          pros::delay(1000); // Move at max voltage for 1 second
          motor_group.move_voltage(0);
        }

============ ===============================================================
 Parameters
============ ===============================================================
 voltage      The new voltage for the motor from -12000 mV to 12000 mV
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

brake
~~~~~

Stops the motor group using the currently configured brake mode.

This function sets motor velocity to zero, which will cause it to act according to the
set brake mode. If brake mode is set to MOTOR_BRAKE_HOLD.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_brake <../c/motors.html#motor-brake>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::brake ( void )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          mg.move_voltage(12000);
          pros::delay(1000); // Move at max voltage for 1 second
          mg.brake(); // Brakes all motor
        }

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

Macros
======

None.

Enumerated Values
=================

pros::motor_brake_mode_e_t
--------------------------

Indicates the current 'brake mode' of the motor.

::

  typedef enum motor_brake_mode_e {
    E_MOTOR_BRAKE_COAST = 0, // Motor coasts when stopped, default behavior
    E_MOTOR_BRAKE_BRAKE = 1, // Motor short brakes when stopped 
    E_MOTOR_BRAKE_HOLD = 2, // Motor actively holds position when stopped
    E_MOTOR_BRAKE_INVALID = INT32_MAX
  } motor_brake_mode_e_t;

================================== ===========================================================
 Value
================================== ===========================================================
 pros::E_MOTOR_BRAKE_COAST          Motor coasts when stopped, default behavior
 pros::E_MOTOR_BRAKE_BRAKE          Motor short brakes when stopped by shorting (directly connecting) the motor’s positive and negative lead
                                    https://en.m.wikipedia.org/wiki/Dynamic_braking
 pros::E_MOTOR_BRAKE_HOLD           Motor actively holds position when stopped 
 pros::E_MOTOR_BRAKE_INVALID        Invalid brake mode
================================== ===========================================================

----

pros::motor_encoder_units_e_t
-----------------------------

Indicates the units used by the motor's encoder.

::

  typedef enum motor_encoder_units_e {
    E_MOTOR_ENCODER_DEGREES = 0,   // Position is recorded as angle in degrees
                                   // as a floating point number
    E_MOTOR_ENCODER_ROTATIONS = 1, // Position is recorded as angle in rotations
                                   // as a floating point number
    E_MOTOR_ENCODER_COUNTS = 2,    // Position is recorded as raw encoder ticks
                                   // as a whole number
    E_MOTOR_ENCODER_INVALID = INT32_MAX
  } motor_encoder_units_e_t;

================================== =======================================================================
 Value
================================== =======================================================================
 pros::E_MOTOR_ENCODER_DEGREES      Position is recorded as angle in degrees as a floating point number 
 pros::E_MOTOR_ENCODER_ROTATIONS    Position is recorded as angle in rotations as a floating point number 
 pros::E_MOTOR_ENCODER_COUNTS       Position is recorded as raw encoder ticks as a whole number 
 pros::E_MOTOR_BRAKE_INVALID        Invalid motor encoder units
================================== =======================================================================

----

pros::motor_fault_e_t
---------------------

::

  typedef enum motor_fault_e {
  	E_MOTOR_FAULT_NO_FAULTS = 0x00,
  	E_MOTOR_FAULT_MOTOR_OVER_TEMP = 0x01,  // Analogous to motor_is_over_temp()
  	E_MOTOR_FAULT_DRIVER_FAULT = 0x02,     // Indicates a motor h-bridge fault
  	E_MOTOR_FAULT_OVER_CURRENT = 0x04,     // Analogous to motor_is_over_current()
  	E_MOTOR_FAULT_DRV_OVER_CURRENT = 0x08  // Indicates an h-bridge over current
  } motor_fault_e_t;

======================================= ===========================================================
 Value
======================================= ===========================================================
 pros::E_MOTOR_FAULT_NO_FAULTS           No faults
 pros::E_MOTOR_FAULT_MOTOR_OVER_TEMP     Analogous to motor_is_over_temp()
 pros::E_MOTOR_FAULT_DRIVER_FAULT        Indicates a motor h-bridge fault
 pros::E_MOTOR_FAULT_OVER_CURRENT        Analogous to motor_is_over_current()
 pros::E_MOTOR_FAULT_DRV_OVER_CURRENT    Indicates an h-bridge over current
======================================= ===========================================================

----

pros::motor_flag_e_t
--------------------

::

  typedef enum motor_flag_e {
    E_MOTOR_FLAGS_NONE = 0x00,
    E_MOTOR_FLAGS_BUSY = 0x01,           // Cannot currently communicate to the motor
    E_MOTOR_FLAGS_ZERO_VELOCITY = 0x02,  // Analogous to motor_is_stopped()
    E_MOTOR_FLAGS_ZERO_POSITION = 0x04   // Analogous to motor_get_zero_position_flag()
  } motor_flag_e_t;

================================== ===========================================================
 Value
================================== ===========================================================
 pros::E_MOTOR_FLAGS_NONE           There are no flags raised
 pros::E_MOTOR_FLAGS_BUSY           Cannot currently communicate to the motor 
 pros::E_MOTOR_FLAGS_ZERO_VELOCITY  Analogous to pros::Motor::is_stopped() 
 pros::E_MOTOR_FLAGS_ZERO_POSITION  Analogous to pros::Motor::get_zero_position_flag()
================================== ===========================================================

----

pros::motor_gearset_e_t
-----------------------

Indicates the internal gearing used by the motor.

::

  typedef enum motor_gearset_e {
  	E_MOTOR_GEARSET_36 = 0, // 36:1, 100 RPM, Red gear set
  	E_MOTOR_GEARSET_18 = 1, // 18:1, 200 RPM, Green gear set
  	E_MOTOR_GEARSET_06 = 2, // 6:1, 600 RPM, Blue gear set
  	E_MOTOR_GEARSET_INVALID = INT32_MAX
  } motor_gearset_e_t;

================================== ===========================================================
 Value
================================== ===========================================================
 pros::E_MOTOR_GEARSET_36           36:1, 100 RPM, Red gear set
 pros::E_MOTOR_GEARSET_18           18:1, 200 RPM, Green gear set
 pros::E_MOTOR_GEARSET_06           6:1, 600 RPM, Blue Gear Set
 pros::E_MOTOR_GEARSET_INVALID      Error return code
================================== ===========================================================

.. _motor_gearset_e_t: ../c/motors.html#motor-gearset-e-t
.. _motor_encoder_units_e_t: ../c/motors.html#motor-encoder-units-e-t
.. _motor_brake_mode_e_t: ../c/motors.html#motor-brake-mode-e-t
