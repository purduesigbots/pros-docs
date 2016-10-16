---
weight: 1
title: Getting Started
---

Getting started with PROS is simple. Download the installer for your platform from [GitHub](https://github.com/purduesigbots/pros/releases/latest). You may also choose to manually install each of the components required for PROS. You can view detailed installation instructions for [Windows](./windows), [OS X](./os-x), and [Debian-based Linux](./debian-linux).

Once you've installed PROS, open Atom. Click PROS -> Create New Project to create your first PROS project.

_PROS Menu on Atom_
{{< figure src="/images/atom/menu-create-new.png" >}}

_Creating a new project in Atom_
{{< figure src="/images/atom/window-create-new.png" >}}

Pick a directory to create the new project in and click Create. The PROS CLI will now copy the latest kernel template into the specified directory and Atom will open it.
{{< figure src="/images/atom/proj-brand-new.png" >}}


Let's write a simple operator control for a 4-motor robot. Notice that as you type, the Atom Linter is checking your syntax.
```c
void operatorControl() {
	int leftJoystick, rightJoystick;
	while (1) {
		leftJoystick = joystickGetAnalog(1, 2);
		rightJoystick = joystickGetAnalog(1, 3);
		motorSet(1, leftJoystick); // Front Left Motor
		motorSet(2, -leftJoystick); // Rear Left Motor
		motorSet(3, rightJoystick); // Front Right Motor
		motorSet(4, -rightJoystick); // Rear Right Motor
		delay(20);
	}
}
```
Once you are complete your `opcontrol.c` file should look like this:
{{< figure src="/images/atom/first-program.png" >}}

Congratulations you have completed your first PROS program!
