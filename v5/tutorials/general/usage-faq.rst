=================
General Usage FAQ
=================

Why do I get a "Could not open port" error when flashing?
=========================================================

You might have seen an error like this:

::

  Uploading bin/output.bin to v5 device on COM11 as hello to slot 1
  ERROR - pros.cli.upload:upload - could not open port 'COM11': PermissionError(13, 'Access is denied.', None, 5)
  File "c:\users\jonathan\appdata\local\programs\python\python36-32\lib\site-packages\serial\serialwin32.py", line 62, in open
    raise SerialException("could not open port {!r}: {!r}".format(self.portstr, ctypes.WinError()))
  serial.serialutil.SerialException: could not open port 'COM11': PermissionError(13, 'Access is denied.', None, 5)

That means that some other resource is using the port. If you also have the V5
Utility open, that would cause this error to occur. Close the V5 Utility if you want
to flash.
