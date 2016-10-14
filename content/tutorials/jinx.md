---
title: JINX
---

JINX is the graphical debugger for PROS. To run JINX, you must have [Python 3](https://www.python.org/downloads/) and [pySerial](http://pyserial.readthedocs.io/en/latest/pyserial.html). You can install pySerial from the command line with Pip 3 using `pip3 install --upgrade pyserial`, or `pip install pyserial` if Python 3 is your only version of Python. JINX has 3 

* Connect your desired host computer to the VEX Cortex
* Upload code with [JINX enabled][JINX on Cortex]  
* [Start the server][JINX Hub] on your host computer with `python3 JINX.py`
* [View the GUI][JINX GUI] by connecting to `http://localhost:9001/views/combined.html`if on the same computer, or replace "localhost" with the host computer's IP address if connecting from a remote computer. E.g. `http://192.168.1.24:9001/views/combined.html`   
You must be on the same network to connect!  
Tested on Chrome and Safari.
* Stop the server by entering `q` in the console you used to launch `JINX.py`, or send a Keyboard Interrupt with `ctrl + c`
LINK TO CORTEX


#Putting Code on the Cortex {#Cortex}
##initJINX {#initJINX}
```
void initJINX(FILE* port)
```  

JINX on the cortex is capable of reading messages, writing messages, or doing both, depending on what you need.   
Whether you need reading or writing capabilities, if you want to set the serial port to something other than Standard Input and Output (`UART1` or `UART2`), you call . This also allows you to change which port you use dynamically.  This call prints an error message over stdout if unable to set port
| Parameters | |
| ---:|:--- |
| `port` | One of stdout, UART1, and UART2 |


###### Sending Messages from the Cortex
## writeJINXSerial {#writeJINXSerial}
```
void writeJINXSerial ( const char *  message )
```  
Send single string with appropriate header and terminator

This function can only take 1 character pointer, and does __not__ work like `printf()`. Therefore, it is advised that users calling this function directly use `sprintf(char *src, const char *formatString, ...)` to compose their message before calling this.  
| Parameters | |
| ---:|:--- |
| `message` | The entire message to send |

## writeJINXData {#writeJINXData}
```
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

**Returns ** The number of characters read, or the `strlen(inStr->command)`

## getToken {#getToken}
```
int getToken ( JINX *  inStr
               int     tokenNum
             )
```
Sets `inStr->token` to the `tokenNum`th + 1 space-delimated word within `inStr->command`
`tokenNum` is 0-based, so 0 will get the 1st token, 1 will get the 2nd token...




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
