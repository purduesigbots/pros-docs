---
title: Buttons and digitalRead
---

Buttons such as the limit switch that Vex provides are digital sensors. These sensors are generally used as triggers for various events such as a robot hitting an object or the wall. One special difference from other sensors is that you need to configure the pin they are connected to as an input. PROS provides a simple interface to perform such tasks that is as follows:

main.h:
```c
// digital port number limit switch is plugged into
#define LIMIT_SWITCH 1
```

init.c:
```c
void initializeIO(){
    // configure the pin that the limit swith is plugged into as an input
    pinMode(LIMIT_SWITCH, INPUT);
}
```

opcontrol.c or auto.c:
```c
void myFunction(){
    // ... Do work
    // digitalRead() will return LOW if PRESSED and HIGH if RELEASED
    if (digitalRead(LIMIT_SWITCH) == LOW){
        // ...
    }

    // ...
}
```
