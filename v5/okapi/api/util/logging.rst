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

Methods
-------

initialize
~~~~~~~~~~

Initializes the logger. If the logger is not initialized when logging methods are called, nothing
will be logged.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static void initialize(std::unique_ptr<AbstractTimer> itimer, std::string_view filename, LogLevel level) noexcept

============ ===============================================================
 Parameters
============ ===============================================================
 itimer       A timer used to get the current time for log statements.
 filename     The name of the log file to open. ``/ser/sout`` for ``stdout``.
 level        The log level. Log statements above this level will be disabled.
============ ===============================================================

----

initialize
~~~~~~~~~~

Initializes the logger. If the logger is not initialized when logging methods are called, nothing
will be logged.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static void initialize(std::unique_ptr<AbstractTimer> itimer, FILE *file, LogLevel level) noexcept

============ ===============================================================
 Parameters
============ ===============================================================
 itimer       A timer used to get the current time for log statements.
 file         The file to write log statements to.
 level        The log level. Log statements above this level will be disabled.
============ ===============================================================

----

instance
~~~~~~~~

Get the logger instance.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static Logger *instance() noexcept

**Returns:** The logger instance.

----

setLogLevel
~~~~~~~~~~~

Set a new logging level. Log statements above this level will be disabled. For example, if the
level is set to ``LogLevel::warn``, then ``LogLevel::warn`` and ``LogLevel::error`` will be
enabled, but ``LogLevel::info`` and ``LogLevel::debug`` will be disabled.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        static void setLogLevel(LogLevel level) noexcept

============ ===============================================================
 Parameters
============ ===============================================================
 level        The log level. Log statements above this level will be disabled.
============ ===============================================================

----

debug
~~~~~

Log at the ``LogLevel::debug`` level.

.. tabs ::
   .. tab :: Prototype
      .. highlight:: cpp
      ::

        void debug(std::string_view message) const noexcept

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

        void info(std::string_view message) const noexcept

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

        void warn(std::string_view message) const noexcept

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

        void error(std::string_view message) const noexcept

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
