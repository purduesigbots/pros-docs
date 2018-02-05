===
LCD
===

The LCD screen communicates to the Cortex Microcontroller via a UART
cable. This communication needs to be initialized in ``init.c``:

.. code:: c

    void initialize() {
      // ...
      // Select "uart1" or "uart2" as appropriate
      lcdInit(uart1);
      lcdClear(uart1);
      // ...
    }

And in any function you can do the following:

.. code:: c

    //...
    // Print formatted text to LCD (line #1) like printf
    // supposing that "x" is an existing integer variable
    lcdPrint(uart1, 1, "X is %d", x);
    // Print plain text to LCD (much faster than lcdPrint)
    lcdSetText(uart1, 2, "Hello World");
    // Print current battery voltage
    lcdPrint(uart1, 1, "Batt: %1.3f V", (double)powerLevelMain() / 1000);
    // ...
