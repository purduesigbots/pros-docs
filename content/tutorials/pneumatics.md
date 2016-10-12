---
title: Pneumatics
---

Pneumatics in VEX provide two-state linear actuation. They differ from other
digital sensors in that they are output signals. Therefore, the default digital
sensor configuration is insufficient.

init.c:
```c
void initializeIO() {
  pinMode(solenoid_pin, OUTPUT);
  digitalWrite(solenoid_pin, LOW);
}
```

opcontrol.c, auto.c, etc.
```c
void myFunction() {
  // ...
  digitalWrite(solenoid_pin, new_value);
  // ...
}
```
