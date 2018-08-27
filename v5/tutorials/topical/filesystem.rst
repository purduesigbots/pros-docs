==========
Filesystem
==========

You can interact with files on the V5 brain and the microSD card through standard
C/C++ file I/O methods. For the most part, you can follow along with any standard C
tutorial for file I/O and it will work with PROS. Here are a couple of recommended
tutorials:

- https://www.cprogramming.com/tutorial/cfileio.html
- https://www.tutorialspoint.com/cprogramming/c_file_io.htm

The only additional detail needed for interacting with the filesystem in PROS is
that any files on the microSD card need to be prefaced with ``/usd/`` to distinguish
them from files on the V5 Brain. A file on the microSD card can be written to in the
following manner:

.. highlight: cpp
.. code-block:: cpp

   FILE* usd_file_write = fopen("/usd/example.txt", "w");
   fputs("Example text", usd_fil_writee);
   fclose(usd_file_write);

   FILE* usd_file_read = fopen("/usd/example.txt", "r");
   char buf[50]; // This just needs to be larger than the contents of the file
   fread(buf, 1, 50, usd_file_read); // passing 1 because a `char` is 1 byte, and 50 b/c it's the length of buf
   printf("%s\n", buf); // print the string read from the file
   // Should print "Example text" to the terminal
   fclose(usd_file_read); // always close files when you're done with them
