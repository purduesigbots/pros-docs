.. highlight:: cpp
   :linenothreshold: 5

=====================
Motor Groups C++ API
=====================

.. note:: Motor Groups function similar to motors but with multiple motors, and there is a C++ API for them.

.. note:: :code:`pros::MotorGroup` is an alias for :code:`pros::Motor_Group`

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

      void opcontrol() {
        pros::Motor motor_1 (1);
        pros::Motor motor_2 (2);
        pros::Motor_Group motor_group ({motor_1, motor_2});
        pros::Controller master (E_CONTROLLER_MASTER);

        while (true) {
          motor_group.move(master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y));
          pros::delay(5);
        }
      }

============ ========================================================
 Parameters
============ ========================================================
 motors       An initializer_list of motors to be in the motor group
============ ========================================================

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

============ ================================================================
 Parameters
============ ================================================================
 motors       A Vector with the ports of the motors. Negative ports indicate
              that the motor is reversed
============ ================================================================

----

Operator Overloads
------------------

Sets the voltage for all the motors in the motor group from -128 to 127.
	
This is designed to map easily to the input from the controller's analog
stick for simple opcontrol use. The actual behavior of the motor is
analogous to use of `pros::Motor::move()` on each motor individually

This function uses the following values of ``errno`` when an error state is reached:

 - ``ENODEV`` - One of the ports cannot be configured as a motor
 - ``EACCESS`` - The Motor group mutex can't be taken or given
	
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

============ ========================================
 Parameters
============ ========================================
 voltage      The new motor voltage from -127 to 127
============ ========================================

----

Functions
---------

move
~~~~

Sets the voltage for the motors in the motor group from -127 to 127.

This is designed to map easily to the input from the controller's analog
stick for simple opcontrol use. The actual behavior of the motor is
analogous to use of `motor_move()`, or `motorSet()`` from the 
PROS 2 API on each motor.

This function uses the following values of ``errno`` when an error state is reached:

 - ``ENODEV`` - The port cannot be configured as a motor
 - ``EACCESS`` - The Motor group mutex can't be taken or given

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

============ ========================================
 Parameters
============ ========================================
 voltage      The new motor voltage from -127 to 127
============ ========================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation
failed, setting ``errno``.

----

move_absolute
~~~~~~~~~~~~~

Sets the target absolute position for the motors to move to.
	
This movement is relative to the position of the motors when initialized or
the position when it was most recently reset with	pros::Motor::set_zero_position().

.. note:: This function simply sets the target for the motor, it does not block program
          execution until the movement finishes. The example code shows how to block
          until a movement is finished.
	
This function uses the following values of ``errno`` when an error state is reached:

 - ``ENODEV`` - The port cannot be configured as a motor
 - ``EACCESS`` - The Motor group mutex can't be taken or given
	
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


Analogous to `motor_move_velocity <../c/motors.html#motor-move-velocity>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::move_velocity ( cosnt std::int16_t velocity )

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
          pros::Motor_Group motor_group ({1,2});
          motor_group.move_voltage(12000);
          pros::delay(1000); // Move at max voltage for 1 second
          motor_group.brake(); // Brakes all motor
        }

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_zero_position
~~~~~~~~~~~~~~~~~

Sets the position for the motor in its encoder units.

This will be the future reference point for the motors' "absolute"
position.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_set_zero_position <../c/motors.html#motor-set-zero-position>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::set_zero_position ( double position )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor_Group motor_group ({1,2});
          motor_group.move_absolute(100, 100); // Moves 100 units forward
          motor_group.move_absolute(100, 100); // This does not cause a movement

          motor_group.set_zero_position(80);
          motor_group.move_absolute(100, 100); // Moves 80 units forward
        }

============ =================================================
 Parameters
============ =================================================
 position     The new reference position in its encoder units
============ =================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed, setting ``errno``.

----

set_brake_modes
~~~~~~~~~~~~~~~


Sets one of motor_brake_mode_e_t to the motor group.

This function uses the following values of errno when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::set_brake_modes ( pros::motor_brake_mode_e_t mode)

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor_Group motor_group ({1, 2});
          motor_group.set_brake_modes(pros::E_MOTOR_BRAKE_HOLD);
          std::cout << "Brake Modes: " << motor_group.get_brake_modes();
        }

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_reversed
~~~~~~~~~~~~

Sets the reverse flag for all the motors in the motor group.

This will invert its movements and the values returned for its position.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_set_reversed <../c/motors.html#motor-set-reversed>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::set_reversed ( bool reverse )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor_Group motor_group ({1,2});
          motor_group.set_reversed(true);
          std::cout << "Is this motor group reversed? " << motor_group.is_reversed();
        }

============ ============================================
 Parameters
============ ============================================
 reverse      ``1`` reverses the motor, ``0`` is default
============ ============================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_voltage_limit
~~~~~~~~~~~~~~~~~

Sets the voltage limit for all the motors in Volts.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_set_voltage_limit <../c/motors.html#motor-set-voltage-limit>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::set_voltage_limit ( std::int32_t limit )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor_Group motor_group ({1,2});
          pros::Controller master (E_CONTROLLER_MASTER);

          motor_group.set_voltage_limit(10000);
          while (true) {
            motor_group = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            // The motor will not output more than 10 V
            pros::delay(2);
          }
        }

============ ================================
 Parameters
============ ================================
 limit        The new voltage limit in Volts
============ ================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_gearing
~~~~~~~~~~~

Sets one of `motor_gearset_e_t <motor_gearset_e_t_>`_ for all the motors in the motor group.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_set_gearing <../c/motors.html#motor-set-gearing>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::set_gearing ( pros::motor_gearset_e_t_ gearset )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor_Group motor_group ({1,2});
          motor_group.set_gearing(E_MOTOR_GEARSET_06);
          std::cout << "Motor group gearing: " << motor_group.get_gearing();
        }

============ =======================
 Parameters
============ =======================
 gearset      The new motor gearset
============ =======================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

set_encoder_units
~~~~~~~~~~~~~~~~~

Sets one of `motor_encoder_units_e_t`_ for the all the motor encoders in the motor group.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_set_encoder_units <../c/motors.html#motor-set-encoder-units>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::set_encoder_units ( pros::motor_encoder_units_e_t units )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor_Group motor_group ({1,2});
          motor_group.set_encoder_units(E_MOTOR_ENCODER_DEGREES);
          std::cout << "Encoder Units: " << motor_group.get_encoder_units();
        }

============ ===============================================================
 Parameters
============ ===============================================================
 units        The new `motor encoder units <motor_encoder_units_e_t_>`_
============ ===============================================================

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

tare_position
~~~~~~~~~~~~~

Sets the "absolute" zero position of the motor group to its current position.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_tare_position <../c/motors.html#motor-tare-position>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::Motor_Group::tare_position ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor_Group motor_group ({1,2});
          motor_group.move_absolute(100, 100); // Moves 100 units forward
          motor_group.move_absolute(100, 100); // This does not cause a movement

          motor_group.tare_position();
          motor_group.move_absolute(100, 100); // Moves 100 units forward
        }

**Returns:** ``1`` if the operation was successful or ``PROS_ERR`` if the operation failed,
setting ``errno``.

----

get_actual_velocities
~~~~~~~~~~~~~~~~~~~~~

Gets the actual velocity of each motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_get_actual_velocity <../c/motors.html#motor-get-actual-velocity>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         double pros::Motor_Group::get_actual_velocities ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor_Group motor_group ({1, 2});
          while (true) {
            motor_group = controller_get_analog(E_CONTROLLER_MASTER, E_CONTROLLER_ANALOG_LEFT_Y);
            printf("Actual velocities: %lf\n", motor_group.get_actual_velocities());
            pros::delay(2);
          }
        }

**Returns:** A vector with the each motor's actual velocity in RPM in the order
or a vector filled with ``PROS_ERR_F`` if the operation failed, setting errno.

----

get_target_velocities
~~~~~~~~~~~~~~~~~~~~~

Gets the velocity commanded to the motor by the user.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor

Analogous to `motor_get_target_velocity <../c/motors.html#motor-get-target-velocity>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::get_target_velocities ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor_Group motor_group ({1, 2});
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor_group.move_velocity(master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y));
            std::cout << "Motor Velocities: " << motor.get_target_velocities();
            // Prints the value of E_CONTROLLER_ANALOG_LEFT_Y
            pros::delay(2);
          }
        }

**Returns:** A vector filled with The commanded motor velocities from
+-100, +-200, or +-600, or a vector filled with ``PROS_ERR`` if the operation
failed, setting ``errno``.

----

get_target_positions
~~~~~~~~~~~~~~~~~~~~

Gets the target position set for the motor by the user.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_get_target_position <../c/motors.html#motor-get-target-position>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double pros::Motor_Group::get_target_positions ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor_Group motor_group ({1, 2});
          motor_group.move_absolute(100, 100);
          std::cout << "Motor Target: " << motor_group.get_target_positions();
          // Prints 100
        }

**Returns:** A vector filled with the target position in its encoder units
or a vector filled with ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----

get_positions
~~~~~~~~~~~~~

Gets the absolute position of the motor in its encoder units.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor

Analogous to `motor_get_position <../c/motors.html#motor-get-position>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        double pros::Motor_Group::get_positions ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor_Group motor_group ({1, 2});
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor_group = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Positions: " << motor_group.get_positions();
            pros::delay(2);
          }
        }

**Return:** The motors' absolute position in its encoder units or PROS_ERR_F
if the operation failed, setting errno.

----

get_efficiencies
~~~~~~~~~~~~~~~~

Gets the efficiency of the motors in percent.

An efficiency of 100% means that the motor is moving electrically while
drawing no electrical power, and an efficiency of 0% means that the motor
is drawing power but not moving.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_get_efficiency <../c/motors.html#motor-get-efficiency>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::Motor_Group::get_efficiencies ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor_Group motor_group ({1, 2});
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Efficiencies: " << motor_group.get_efficiencies();
            pros::delay(2);
          }
        }

**Returns:** A vector filled with the motor's efficiency in percent
or a vector filled with ``PROS_ERR_F`` if the operation failed, setting ``errno``.

----

are_over_current
~~~~~~~~~~~~~~~~

Checks if the motors are drawing over its current limit.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_is_over_current <../c/motors.html#motor-is-over-current>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::Motor_Group::are_over_current ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor_Group motor_group ({1, 2});
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Are the motors over their current limits?: " << motor_group.are_over_current();
            pros::delay(2);
          }
        }

**Returns:** ``1`` if the motor's current limit is being exceeded and ``0`` if the
current limit is not exceeded, or ``PROS_ERR`` if the operation failed, setting
``errno``.

----

are_over_temp
~~~~~~~~~~~~~

Gets the temperature limit flag for the motors.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor

Analogous to `motor_is_over_temp <../c/motors.html#motor-is-over-temp>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::int32_t pros::Motor_Group::are_over_temp ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor_Group motor_group ({1, 2});
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor_group = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Are the motors over their temperature limits?: " << motor_group.are_over_temp();
            pros::delay(2);
          }
        }

**Returns:** A vector with for each motor a ``1`` if the temperature limit is
exceeded and ``0`` if the temperature is below the limit,
or a vector filled with ``PROS_ERR`` if the operation failed, setting ``errno``.

----

get_brake_modes
~~~~~~~~~~~~~~~

Gets the brake mode that was set for the motors.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_get_brake_mode <../c/motors.html#motor-get-brake-mode>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        pros::motor_brake_mode_e_t pros::Motor_Group::get_brake_modes ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor_Group motor_group ({1, 2});
          motor_group.set_brake_modes(pros::E_MOTOR_BRAKE_HOLD);
          std::cout << "Brake Modes: " << motor_group.get_brake_modes();
        }

**Returns:** A vector with for each motor one of `motor_brake_mode_e_t <motor_brake_mode_e_t_>`_,
according to what was set for the motor, or a vector filled with
``E_MOTOR_BRAKE_INVALID`` if the operation failed, setting ``errno``.

----

get_gearing
~~~~~~~~~~~

Gets the gearset that was set for the motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::vector<pros::motor_gearset_e_t> pros::Motor_Group::get_gearing (  )

   .. tab :: Example
      .. highlight:: cpp
      ::
        
        void initialize() {
          pros::Motor_Group motor_group ({1,2});
          motor_group.set_gearing(E_MOTOR_GEARSET_06);
          std::cout << "Motor group gearing: " << motor_group.get_gearing();
        }

**Returns:** A Vector with a ``motor_gearset_e_t`` for each motor according to what is set for the motor, or ``E_GEARSET_INVALID`` if the operation failed for that motor.

----

get_current_draws
~~~~~~~~~~~~~~~~~

Gets the current drawn by each motor in mA.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_get_current_draw <../c/motors.html#motor-get-current-draw>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::Motor_Group::get_current_draws ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor_Group motor_group ({1, 2});
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor_group = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Current Draws: " << motor_group.get_current_draw();
            pros::delay(2);
          }
        }

**Returns:** A vector containing each motor's current in mA
or a vector filled with ``PROS_ERR`` if the operation failed, setting ``errno``.

----

get_current_limits
~~~~~~~~~~~~~~~~~~

Gets the current limit for each motor in mA.

The default value is 2500 mA.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_get_current_limit <../c/motors.html#motor-get-current-limit>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::Motor_Group::get_current_limits ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor_Group motor_group ({1, 2});
          while (true) {
            std::cout << "Motor Current Limits: " << motor_group.get_current_limits();
            pros::delay(2);
          }
        }

**Returns:** A vector with each motors' current limits in mA or a vector filled
with ``PROS_ERR`` if the operation failed, setting ``errno``.

----

get_ports
~~~~~~~~~

Gets the port number of each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        std::vector<std::uint8_t> pros::Motor_Group::get_ports ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void autonomous() {
          pros::Motor_Group motor_group ({1, 2});
          std::vector<std::uint8_t> ports = motor_group.get_ports(); // Returns {1, 2}
        }

**Returns:** A vector with each motor's port number.

----

get_directions
~~~~~~~~~~~~~~

Gets the direction of movement for the motors.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor

Analogous to `motor_get_direction <../c/motors.html#motor-get-direction>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         std::int32_t pros::Motor_Group::get_directions ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void opcontrol() {
          pros::Motor_Group motor_group (1);
          pros::Controller master (E_CONTROLLER_MASTER);
          while (true) {
            motor_group = master.get_analog(E_CONTROLLER_ANALOG_LEFT_Y);
            std::cout << "Motor Directions: " << motor_group.get_directions();
            pros::delay(2);
          }
        }

**Returns:** ``1`` for moving in the positive direction, ``-1`` for moving in the
negative direction, and ``PROS_ERR`` if the operation failed, setting ``errno``.

----

get_encoder_units
~~~~~~~~~~~~~~~~~

Gets the encoder units that were set for each motor.

This function uses the following values of ``errno`` when an error state is reached:

- ``ENODEV``  - The port cannot be configured as a motor
- ``EACCESS`` - The Motor group mutex can't be taken or given

Analogous to `motor_get_encoder_units <../c/motors.html#motor-get-encoder-units>`_ on each motor.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

         pros::motor_encoder_units_e_t pros::Motor_Group::get_encoder_units ( )

   .. tab :: Example
      .. highlight:: cpp
      ::

        void initialize() {
          pros::Motor motor (1, E_MOTOR_GEARSET_06, false, E_MOTOR_ENCODER_COUNTS);
          pros::Motor_Group motor_group ({motor});
          std::cout << "Motor Group Encoder Units: " << motor_group.get_encoder_units();
        }

**Returns:** A vector filled with one of `motor_encoder_units_e_t`_ for each motor
according to what is set for the motor or a vector filled with
``E_MOTOR_ENCODER_INVALID`` if the operation failed.

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

============================= ===========================================================
 Value
============================= ===========================================================
 pros::E_MOTOR_BRAKE_COAST     Motor coasts when stopped, default behavior
 pros::E_MOTOR_BRAKE_BRAKE     Motor short brakes when stopped by shorting (directly connecting) the motor’s positive and negative lead
                               https://en.m.wikipedia.org/wiki/Dynamic_braking
 pros::E_MOTOR_BRAKE_HOLD      Motor actively holds position when stopped 
 pros::E_MOTOR_BRAKE_INVALID   Invalid brake mode
============================= ===========================================================

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
    E_MOTOR_GEARSET_36 = 0, // 36:1
    E_MOTOR_GEAR_RED = E_MOTOR_GEARSET_36, // Red gear set
    E_MOTOR_GEAR_100 = E_MOTOR_GEARSET_36, // 100 RPM
    E_MOTOR_GEARSET_18 = 1, // 18:1
    E_MOTOR_GEAR_GREEN = E_MOTOR_GEARSET_18, // Green gear set
    E_MOTOR_GEAR_200 = E_MOTOR_GEARSET_18, // 200 RPM
    E_MOTOR_GEARSET_06 = 2, // 6:1
    E_MOTOR_GEAR_BLUE  = E_MOTOR_GEARSET_06, // Blue gear set
    E_MOTOR_GEAR_600 = E_MOTOR_GEARSET_06, // 600 RPM
    E_MOTOR_GEARSET_INVALID = INT32_MAX
  } motor_gearset_e_t;

================================== ===========================================================
 Value
================================== ===========================================================
 pros::E_MOTOR_GEARSET_36           36:1 
 pros::E_MOTOR_GEAR_RED             Red gear set
 pros::E_MOTOR_GEAR_100             100 RPM
 pros::E_MOTOR_GEARSET_18           18:1
 pros::E_MOTOR_GEAR_GREEN           Green gear set
 pros::E_MOTOR_GEAR_200             200 RPM
 pros::E_MOTOR_GEARSET_06           6:1
 pros::E_MOTOR_GEAR_BLUE            Blue Gear Set
 pros::E_MOTOR_GEAR_600             200 RPM
 pros::E_MOTOR_GEARSET_INVALID      Error return code
================================== ===========================================================

.. _motor_gearset_e_t: ../c/motors.html#motor-gearset-e-t
.. _motor_encoder_units_e_t: ../c/motors.html#motor-encoder-units-e-t
.. _motor_brake_mode_e_t: ../c/motors.html#motor-brake-mode-e-t
