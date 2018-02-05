=============
JINX Debugger
=============

.. warning::
   JINX is in Beta.
   JINX is in active development and could change at any time.
   This document is intended to introduce
   JINX to advanced PROS users who may wish to experiment with JINX.

JINX is the graphical debugger and interactive data visualization tool
for PROS. With JINX, you get to graph data, generate CSV files, send
commands back to the cortex, and more, all from the browser of choice.
JINX works by using a computer connected to the cortex via serial as the
central hub enabling other computers and mobile devices on the network
to connect as clients and enjoy the use of the interactive features.

Before you can run JINX there are some required setup tasks.

JINX Installation Requirements
------------------------------

-  `Python 3.4.3+ <https://www.python.org/downloads/>`__
-  `pySerial
   3.2.1+ <http://pyserial.readthedocs.io/en/latest/pyserial.html>`__

Once you have python3 installed on your machine you can easily install
pySerial from the command line via:

``pip3 install pyserial`` or ``pip3 install --upgrade pyserial`` to
upgrade to the latest if a previous instance is already installed.

JINX Installation
-----------------

Release 0.1: https://github.com/purduesigbots/JINX/releases/tag/v0.1

Debugging with JINX
-------------------

To utilize the power of JINX simply:

1. Connect your desired host computer to the VEX Cortex
2. Upload JINX enabled code
3. Start the JINX server on your host computer with ``python3 JINX.py``
   You must run this command in the JINX directory for the server to
   work correctly.
4. Navigate to the JINX Dashboard by connecting to
   ``http://localhost:9001/views/combined.html`` on your host computer
   and watch the information flow

If at any point in time you want to stop the JINX server simply type
``q`` in the active terminal used to launch JINX or send a keyboard
interrupt via ``ctrl + c``.

**Note**: Since JINX is a network application not everyone has to crowd
around a single machine to observe the data feed. If you are on the same
local network you can navigate to the IP address of the JINX host
machine to get access to the dashboard as well. For example, if the IP
address of the JINX host machine is ``192.168.1.105`` you would navigate
to http://192.168.1.105:9001/views/combined.html.

Sending data from the Cortex
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Create a "large enough" char array, 20 characters or so should work.
2. Use ``sprintf(destination, formatString, dataToSend)`` to save data.
3. Use ``writeJINXData("DataID", char_array)`` to send data.

Alternatively, use ``writeJINXMessage("Message")`` to send a message
with no data value.

initJINX
--------

.. code:: c

    void initJINX ( FILE * port )

| Initializes and enables JINX on the specified port.
| This should be called in ``initialize()``

This call prints an error message over stdout if unable to initialize
and set port.

+--------------+----------------------------------------------------+
| Parameters   |                                                    |
+==============+====================================================+
| ``port``     | the port to open, either stdout, UART1, or UART2   |
+--------------+----------------------------------------------------+

writeJINXSerial
---------------

.. code:: c

    void writeJINXSerial ( const char *  message )

Sends a simple string to the JINX host with appropriate header and
terminator.

This function only takes one character pointer, and does **not** work
like ``printf()``. Therefore, it is advised that users calling this
function directly use
``sprintf(char *src, const char *formatString, ...)`` to compose their
message before calling this.

+---------------+-----------------------+
| Parameters    |                       |
+===============+=======================+
| ``message``   | The message to send   |
+---------------+-----------------------+

writeJINXData
-------------

.. code:: c

    void writeJINXData ( const char *  name
    const char *  value
    )

Sends a name/value pair of data to to the JINX host.

If ``value`` is strictly numeric (as defined by javascript's ``isNaN``
then the variable can be graphed. Otherwise, the name/value pair will be
displayed in the terminal.

This function does not allow for string formatting. Therefore, it is
advised that users calling this function directly use
``sprintf(char *src, const char *formatString, ...)`` to compose both
``name`` and ``value`` before calling this.

+--------------+---------------------------------------------------+
| Parameters   |                                                   |
+==============+===================================================+
| ``name``     | The identifier key sent to the GUI.               |
+--------------+---------------------------------------------------+
| ``value``    | The value to be graphed or displayed in the GUI   |
+--------------+---------------------------------------------------+

writeJINXMessage
----------------

.. code:: c

    void writeJINXMessage ( const char *  message )

Simple wrapper function for `writeJINXData`_ with ``name`` as "msg" and
``value`` set to ``message``.

+---------------+-----------------------+
| Parameters    |                       |
+===============+=======================+
| ``message``   | The message to send   |
+---------------+-----------------------+

JINX Reader
-----------

The read task is started by calling

.. code:: c

    taskCreate(JINXRun, TASK_DEFAULT_STACK_SIZE, NULL, (TASK_PRIORITY_DEFAULT));

in ``initialize()``

parseMessage
------------

.. code:: c

    void parseMessage ( JINX *  inStr )

Automatically called by whenever a message is sent to the cortex. The
user should implement the body of this function to call their method of
choice based on the incoming message. See below for an example.

.. code:: c

    //Example parse. User can and should replace with own body.
    void parseMessage(JINX * inStr) {
      //Echo entire recieved message
      writeJINXMessage(inStr->command);
      //Set inStr->token to first token (space-delimated word)
      getToken(inStr, 0);

      if (strcmp(inStr->token, "Option_1") == 0) {
        //Do option 1
        writeJINXMessage("Option 1 chosen.");
      } else if(strcmp(inStr->token, "get") == 0) {
        //Call another function to handle "get"
        handleGet(inStr);
      } else {
        //Do default
        writeJINXMessage("No comparison found");
      }
    }

and ``handleGet()``

.. code:: c

      //Example of user defined JINX helper function.
      //Since it is at the top of this file, it can be called from anywhere   else in this file.
      //Good practice is to put its prototype in JINX.h, though.
      void handleGet(JINX * inStr) {
      //Get the first token from the sent command
      getToken(inStr, 1);

      //Host outgoing messages
      char * message = (char *)malloc(sizeof(char) * (strlen(inStr->token) + 30));
      if (strcmp(inStr->token, "DEBUG_JINX") == 0) {
        writeJINXMessage("Asked for Debug");
        sprintf(message, "%s, %d", inStr->token, DEBUG_JINX);
      } else {
        sprintf(message, "%s %s", inStr->token, " was unable to be gotten.");
      }

      //Free malloc'd string
      writeJINXMessage(message);
      free(message);
      message = NULL;
    }

getToken
--------

.. code:: c

    int getToken ( JINX *  inStr
      int     tokenNum
    )

Sets ``inStr->token`` to the ``tokenNum``th + 1 space-delimated word
within ``inStr->command`` ``tokenNum`` is 0-based, so 0 will get the 1st
token, 1 will get the 2nd token...
