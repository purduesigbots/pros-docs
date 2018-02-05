=======
Speaker
=======

PROS supports playing Ring Tone Text Transfer Language (RTTTL) tones on
the VEX Speaker as demonstrated below:

init.c:

.. code:: c

    void initialize() {
      speakerInit();
    }

opcontrol.c or auto.c:

.. code:: c

    void ...() {
      // Play a tune on the speaker
      speakerPlayRtttl("Super Mario:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g,8p,"
       "8c6,16p,8g,16p,8e,16p,8a,8b,16a#,8a,16g.,16e6,16g6,8a6,16f6,8g6,8e6,16c6,16d6,8b,16p,"
       "8c6,16p,8g,16p,8e,16p,8a,8b,16a#,8a,16g.,16e6,16g6,8a6,16f6,8g6,8e6,16c6,16d6,8b,16p,"
       "8p,16g6,16f#6,16f6,16d#6,16p,16e6,16p,16g#,16a,16c6,16p,16a,16c6,16d6,"
       "8p,16g6,16f#6,16f6,16d#6,16p,16e6,16p,16c7,16p,16c7,16c7,8p.,"
       "8p,16g6,16f#6,16f6,16d#6,16p,16e6,16p,16g#,16a,16c6,16p,16a,16c6,16d6," "8p,16d#6,8p,16d6,8p,16c6");
      // Play a polyphonic tune on the speaker with 2 tracks
      const char* rtttl[] = {
        "Super Mario:d=4,o=5,b=100:"
          "16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g,8p,"
          "8c6,16p,8g,16p,8e,16p,8a,8b,16a#,8a,16g.,16e6,16g6,8a6,16f6,8g6,8e6,16c6,16d6,8b,16p,"
          "8c6,16p,8g,16p,8e,16p,8a,8b,16a#,8a,16g.,16e6,16g6,8a6,16f6,8g6,8e6,16c6,16d6,8b,16p,"
          "8p,16g6,16f#6,16f6,16d#6,16p,16e6,16p,16g#,16a,16c6,16p,16a,16c6,16d6,"
          "8p,16g6,16f#6,16f6,16d#6,16p,16e6,16p,16c7,16p,16c7,16c7,8p.,"
          "8p,16g6,16f#6,16f6,16d#6,16p,16e6,16p,16g#,16a,16c6,16p,16a,16c6,16d6,"
          "8p,16d#6,8p,16d6,8p,16c6",
        "Super Mario:d=4,o=4,b=100:"
          "16d,16d,32p,8d,16d,8d,8g5,8p,8g,8p,"
          "8g5,16p,8e,16p,8c,16p,8f,8g,16f#,8f,16e.,16c5,16e5,8f5,16d5,8e5,8c5,16a,16b,8g,16p,"
          "8g5,16p,8e,16p,8c,16p,8f,8g,16f#,8f,16e.,16c5,16e5,8f5,16d5,8e5,8c5,16a,16b,8g,16p,"
          "8c,16p,16g,8p,8c5,8f,16p,16c5,16c5,16c5,8f,"
          "8c,16p,16e,8p,16g,16c5,p.,8g,"
          "8c,16p,16g,8p,8c5,8f,16p,16c5,16c5,16c5,8f,"
          "8c,16g#,8p,16a#,8p,16c5",
        NULL
      };
      speakerPlayArray(rtttl);
    }
