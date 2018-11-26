=======
Logging
=======

.. contents:: :local:

okapi::Logger
=============

A logger which supports multiple log levels and a configurable output file. This class is used by
OkapiLib to log internal events to help users trying to debug their programs. The output file
can be ``/ser/sout`` (output to the PROS terminal) or any other custom stream or file. Logging is
disabled by default unless explicitly configured.

Constructor(s)
--------------

This constructor configures the logger to do nothing.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Logger() noexcept

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Logger(
          std::unique_ptr<AbstractTimer> itimer,
          std::string_view ifileName,
          const LogLevel &ilevel
        ) noexcept

   .. tab :: Example
      .. highlight:: cpp
      ::

        // Output to standard out (shows in the PROS terminal)
        Logger(
          TimeUtilFactory::create().getTimer(),
          "/ser/sout,
          Logger::LogLevel::debug
        )

============ ===============================================================
 Parameters
============ ===============================================================
 itimer       A timer used to get the current time for log statements.
 ifileName    The name of the log file to open with append permissions.
 ilevel       The log level. Log statements more verbose than this level will be disabled.
============ ===============================================================

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        Logger(
          std::unique_ptr<AbstractTimer> itimer,
          FILE *const ifile,
          const LogLevel &ilevel
        ) noexcept

============ ===============================================================
 Parameters
============ ===============================================================
 itimer       A timer used to get the current time for log statements.
 ifile        The log file to open. Will be closed by the logger!
 ilevel       The log level. Log statements more verbose than this level will be disabled.
============ ===============================================================

----

Methods
-------

debug
~~~~~

Log at the ``LogLevel::debug`` level.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        constexpr void debug(std::string_view message) const noexcept

============ ===============================================================
 Parameters
============ ===============================================================
 message      The message to log.
============ ===============================================================

----

info
~~~~

Log at the ``LogLevel::info`` level.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        constexpr void info(std::string_view message) const noexcept

============ ===============================================================
 Parameters
============ ===============================================================
 message      The message to log.
============ ===============================================================

----

warn
~~~~

Log at the ``LogLevel::warn`` level.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        constexpr void warn(std::string_view message) const noexcept

============ ===============================================================
 Parameters
============ ===============================================================
 message      The message to log.
============ ===============================================================

----

error
~~~~~

Log at the ``LogLevel::error`` level.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        constexpr void error(std::string_view message) const noexcept

============ ===============================================================
 Parameters
============ ===============================================================
 message      The message to log.
============ ===============================================================

----

close
~~~~~

Closes the connection to the log file.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void close() noexcept

----

Enumerations
------------

LogLevel
~~~~~~~~

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        enum class LogLevel { debug = 4, info = 3, warn = 2, error = 1, off = 0 };