---
title: JINX
---

JINX is the graphical debugger and interactive data visualization tool for PROS. With JINX, you get to graph data, generate CSV files, send commands back to the cortex, and more, all from your browser of choice. JINX works by using a computer connected to the cortex via serial as the central hub of a webserver. Other computers and mobile devices on the network can then connect as clients and enjoy the use of the interactive features.

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
Since JINX is a network application not everyone has to crowd around a single machine to observe the data feed. If you are on the same local network you can navigate to the ip address of the JINX host machine to get access to the dashboard as well. For example, if the ip address of the JINX host machine is `192.168.1.105` you would navigate to http://192.168.1.105:9001/views/combined.html.

## initJINX {#initJINX}
```c
void initJINX ( FILE * port )
```
JINX on the cortex is capable of reading messages, writing messages, or doing both, depending on what you need.

Whether you need reading or writing capabilities, if you want to set the serial port to something other than Standard Input and Output (`UART1` or `UART2`), you call . This also allows you to change which port you use dynamically.  This call prints an error message over stdout if unable to set port

| Parameters | |
| ---:|:--- |
| `port` | One of stdout, UART1, and UART2 |


## writeJINXSerial {#writeJINXSerial}
```c
void writeJINXSerial ( const char *  message )
```  
Send single string with appropriate header and terminator

This function can only take 1 character pointer, and does __not__ work like `printf()`. Therefore, it is advised that users calling this function directly use `sprintf(char *src, const char *formatString, ...)` to compose their message before calling this.  

| Parameters | |
| ---:|:--- |
| `message` | The entire message to send |

## writeJINXData {#writeJINXData}
```c
void writeJINXData ( const char *  name
                     const char *  value
                   )
```
Send a name/value pair of data to be sent to the JINX GUI. This function does not allow for string formatting. Therefore, it is advised that users calling this function directly use `sprintf(char *src, const char *formatString, ...)` to compose both `name` and `value` before calling this.  
If `value` is strictly numeric (as definied by javascript's `isNaN` then the variable can be graphed. Otherwised, the name/value pair will be displayed in the terminal.

| Parameters | |
| ---:|:--- |
| `name` | The identifier to be sent to the GUI. |
| `value` | The value to be graphed or displayed in the GUI |

{{< div class="api" >}}
##
```
void writeJINXMessage ( const char *  message )
```
Simple wrapper function for `writeJINXData` with `name` "msg" and `value` `message`.

###### Reading Incoming Messages on the Cortex
## JINX Reader {#JINX_Reader}
```
typedef struct { char *  command;
                 char *  token;
               } JINX;
```
Hold incoming messages sent to the cortex and a single message token at a time.
An entire message can be stored in `command` with a call to [readLine](#readline).
A single token can be stored in `token` by calling [getToken](#getToken)

## readLine {#readLine}
```
int readLine ( JINX *  inStr )
```
Reads a single character at a time from the set `comPort` until a newline `\n` is read or the `MAX_IN_SIZE` is exceeded (100 characters by default). The characters are saved in `inStr->command`, and null terminated.
| Parameters | |
| ---:|:--- |
| `inStr` | A pointer to a `JINX` struct |

**Returns** The number of characters read, or the `strlen(inStr->command)`

## getToken {#getToken}
```
int getToken ( JINX *  inStr
               int     tokenNum
             )
```
Sets `inStr->token` to the `tokenNum`th + 1 space-delimated word within `inStr->command`
`tokenNum` is 0-based, so 0 will get the 1st token, 1 will get the 2nd token...
{{< /div >}}



[Comm Protocol]: FakeProtocolURL

[JINX on Cortex]: fakeCortexURL
[JINX Hub]: fakeHubURL
[JINX GUI]: fakeGUIURL



## analogCalibrate {#analogCalibrate}
```
int analogCalibrate ( unsigned char  channel )
```
Calibrates the analog sensor on the specified channel.

This method assumes that the true sensor value is not actively changing at this time and computes an average from approximately 500 samples, 1 ms apart, for a 0.5 s period of calibration. The average value thus calculated is returned and stored for later calls to the analogReadCalibrated() and analogReadCalibratedHR() functions. These functions will return the difference between this value and the current sensor value when called.

Do not use this function in initializeIO(), or when the sensor value might be unstable (gyro rotation, accelerometer movement).

This function may not work properly if the VEX Cortex is tethered to a PC using the orange USB A to A cable and has no VEX 7.2V Battery connected and powered on, as the VEX Battery provides power to sensors.

| Parameters | |
| ---:|:--- |
| `channel` | the channel to calibrate from 1-8 |
