JINX is the graphical debugger for PROS. To run JINX, you must have [Python 3](https://www.python.org/downloads/) and [pySerial](http://pyserial.readthedocs.io/en/latest/pyserial.html). You can install pySerial from the command line with Pip 3 using `pip3 install --upgrade pyserial`, or `pip install pyserial` if Python 3 is your only version of Python. JINX has 3 pieces, each of which must be started separately.

1. Write a program for the VEX Cortex that implements [JINX][JINX on Cortex]

2. Connect your desired host computer to the VEX Cortex and upload the program from step 1.
3. Open a console (Terminal on macOS and Linux, Command Prompt on Windows) and [start the server][JINX Hub] on your host computer with `python3 JINX.py` (Make sure you run this in the JINX directory!)

4. [View the GUI][JINX GUI] by connecting to `http://localhost:9001/views/combined.html`if on the same computer, or replace "localhost" with the host computer's IP address if connecting from a remote computer. E.g. `http://192.168.1.24:9001/views/combined.html`
You must be on the same network to connect!   It is recommended that you run this from a secure network, as JINX does not guarantee security against outside interference.

5. Stop the server by entering `q` in the console you used to launch `JINX.py`, or send a Keyboard Interrupt with `ctrl + c`


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


## writeJINXMessage {#writeJINXMessage}
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

**Returns ** The number of characters read, or `strlen(inStr->command)`

## getToken {#getToken}
```
int getToken ( JINX *  inStr
int     tokenNum
)
```
Sets `inStr->token` to the `tokenNum`th + 1 space-delimated word within `inStr->command`
`tokenNum` is 0-based, so 0 will get the 1st token, 1 will get the 2nd token...
There is no guarantee that `inStr->command` will have enough tokens, in which case `inStr->token` is set to null.

| Parameters | |
| ---:|:--- |
| `inStr` | A pointer to a `JINX` struct |
| `tokenNum` | 0 based index of space-delimited word in `inStr->command` |

**Returns** -1 on failure to get token, 0 on success

## parseMessage {#parseMessage}
```
void parseMessage ( JINX *  inStr)
```
Called after [readLine](#readLine) has set `inStr->command`, the body of this function should be implemented by the user to handle incoming requests.
By default, this function will populate `inStr->token` with the first token, though the user may choose to use something else.

| Parameters | |
| ---:|:--- |
| `inStr` | A pointer to a `JINX` struct |

#Starting the JINX Server {#JINXHub}
###First Run
1. Download [Python 3](https://www.python.org/downloads/) if necessary. During installation, choose to add `environment variables` or `PATH` if available.
2. Open a command line interface.   {#CLIChoice}
a. On macOS and Linux: Open `Terminal`
b. On Windows:               Open `Command Prompt`
3. Check to see if Python was installed correctly
a. Run `python3 --version`
b. If you receive and error, run `python --version`
1. If you are still getting errors, then Python was not installed correctly. Try reinstalling Python, or contact us for support.
2. If either command returns `Python 3.X.X`, that is the command to use every time you see `python3` (don't include `--version`).
3. If either command returns `Python 2.X.X`, you have an old version of Python. Make sure you install Python version 3.4 or newer
4. Run `pip3 install --upgrade pyserial`. You must be connected to the internet for this command to work.

###Starting the Hub
1. Open your [command line interface (CLI)](#CLIChoice) of choice.
2. [`cd`](https://en.wikipedia.org/wiki/Cd_(command)) into the directory where `JINX` is saved. On some operating systems, you can get the path of JINX by copying the folder, and then pasting it into your CLI. For example:
a. JINX is saved in the Downloads folder of your Home directory: run `cd ~/Downloads/JINX/` (macOS, Linux)
b. JINX is saved to your Desktop: run `cd c:\users\<username>\Desktop\JINX\ (Windows)
3. Connect your computer to a Cortex already running its program and to your network of choice, and then run `python3 JINX.py`
4. Do not close the CLI! JINX needs to be able to properly release its hold on certain networking ports before other processes (including future calls to JINX) can reuse them. This is much more easily done by shutting down JINX properly than by simply  quitting the CLI.
5. To shut down JINX, type the character `q` and press enter, or send a Keyboard Interrupt with `ctrl-c`.

# The Pretty Graphs {#JINXGUI}
1. Connect to the same network as the server. If you are hosting the server and the GUI on the same computer, you can be on any network, or no network at all.
2. Connect to page `views/Combined.html` on port `9001` of the server.  Safari and Chrome are tested and known to work. IE is known to __not__ work. Due to caching issues, if you need to reload the page, go to a different page and then return (i.e. Do not directly reload the page).
a. If your server and client are on the same computer: connect to `localhost:9001/views/Combined.html/`
b. Otherwise, substitute the __local__ IP address of the server in for `localhost`. For example, if the server has an IP address of `192.168.1.24` connect to  `192.168.1.24:9001/views/Combined.html`.
3. You should now be able to use the GUI! You can write outgoing messages in the terminal and scroll through previous commands with your arrow keys, graph numeric data thanks to [Flot](http://www.flotcharts.org), and download a CSV file with the link underneath the Recent Value Tracker.

[Comm Protocol]: FakeProtocolURL

[JINX on Cortex]: #Cortex
[JINX Hub]: #JINXHub
[JINX GUI]: #JINXGUI

