---
title: JINX
---

JINX is the graphical debugger and interactive data visualization tool for PROS. With JINX, you get to graph data, generate CSV files, send commands back to the cortex, and more, all from the browser of choice. JINX works by using a computer connected to the cortex via serial as the central hub enabling other computers and mobile devices on the network to connect as clients and enjoy the use of the interactive features.

Before you can run JINX there are some required setup tasks.

## JINX Installation Requirements

 * [Python 3.4.3+](https://www.python.org/downloads/)
 * [pySerial 3.2.1+](http://pyserial.readthedocs.io/en/latest/pyserial.html)

Once you have python3 installed on your machine you can easily install pySerial from the command line via:

`pip3 install pyserial` or `pip3 install --upgrade pyserial` to upgrade to the latest if a previous instance is already installed.

## JINX Installation
//TODO JINX Installation instructions

## Debugging with JINX
To utilize the power of JINX simply:

 1. Connect your desired host computer to the VEX Cortex
 2. Upload JINX enabled code
 3. Start the JINX server on your host computer with `python3 JINX.py`
 4. Navigate to the JINX Dashboard by connecting to `http://localhost:9001/views/combined.html` on your host computer and watch the information flow

 If at any point in time you want to stop the JINX server simply type `q` in the active terminal used to launch JINX or send a keyboard interrupt via `ctrl + c`.

__Note__:
Since JINX is a network application not everyone has to crowd around a single machine to observe the data feed. If you are on the same local network you can navigate to the IP address of the JINX host machine to get access to the dashboard as well. For example, if the IP address of the JINX host machine is `192.168.1.105` you would navigate to http://192.168.1.105:9001/views/combined.html.

## initJINX {#initJINX}
```c
void initJINX ( FILE * port )
```
Initializes and enables JINX on the specified port.

This call prints an error message over stdout if unable to initialize and set port.

| Parameters | |
| ---:|:--- |
| `port` | the port to open, either stdout, UART1, or UART2 |


## writeJINXSerial {#writeJINXSerial}
```c
void writeJINXSerial ( const char *  message )
```  
Sends a simple string to the JINX host with appropriate header and terminator.

This function only takes one character pointer, and does __not__ work like `printf()`. Therefore, it is advised that users calling this function directly use `sprintf(char \*src, const char \*formatString, ...)` to compose their message before calling this.

| Parameters | |
| ---:|:--- |
| `message` | The message to send |

## writeJINXData {#writeJINXData}
```c
void writeJINXData ( const char *  name
                     const char *  value
                   )
```
Sends a name/value pair of data to to the JINX host.

If `value` is strictly numeric (as defined by javascript's `isNaN` then the variable can be graphed. Otherwise, the name/value pair will be displayed in the terminal.

This function does not allow for string formatting. Therefore, it is advised that users calling this function directly use `sprintf(char \*src, const char \*formatString, ...)` to compose both `name` and `value` before calling this.

| Parameters | |
| ---:|:--- |
| `name` | The identifier key sent to the GUI. |
| `value` | The value to be graphed or displayed in the GUI |

## writeJINXMessage {#writeJINXMessage}
```c
void writeJINXMessage ( const char *  message )
```
Simple wrapper function for `writeJINXData` with `name` as "msg" and `value` set to `message`.

| Parameters | |
| ---:|:--- |
| `message` | The message to send |

//TODO figure out what is going on with reading JINX commands
## JINX Reader {#JINX_Reader}
```c
typedef struct { char *  command;
                 char *  token;
               } JINX;
```
Hold incoming messages sent to the cortex and a single message token at a time.
An entire message can be stored in `command` with a call to [readLine](#readline).
A single token can be stored in `token` by calling [getToken](#getToken)

## readLine {#readLine}
```
int readLine ( JINX * inStr )
```
Reads a single character at a time from the set `comPort` until a newline `\n` is read or the `MAX_IN_SIZE` is exceeded (100 characters by default). The characters are saved in `inStr->command`, and null terminated.
| Parameters | |
| ---:|:--- |
| `inStr` | A pointer to a `JINX` struct |

**Returns** The number of characters read, or the `strlen(inStr->command)`

## getToken {#getToken}
```c
int getToken ( JINX *  inStr
               int     tokenNum
             )
```
Sets `inStr->token` to the `tokenNum`th + 1 space-delimated word within `inStr->command`
`tokenNum` is 0-based, so 0 will get the 1st token, 1 will get the 2nd token...
