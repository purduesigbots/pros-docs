========
API Home
========

This document covers the main PROS API, which is completely sufficient for most users' needs.

.. toctree::
   :caption: C API Headers
   :titlesonly:

   ./c/adi
   ./c/adi_ext
   ./c/distance
   ./c/gps
   ./c/imu
   ./c/llemu
   ./c/misc
   ./c/motors
   ./c/optical
   ./c/rotation
   ./c/rtos
   ./c/vision
   ./c/link


.. toctree::
   :caption: C++ API Headers
   :titlesonly:

   ./cpp/adi
   ./cpp/distance
   ./cpp/gps
   ./cpp/imu
   ./cpp/llemu
   ./cpp/misc
   ./cpp/motors
   ./cpp/optical
   ./cpp/rotation
   ./cpp/rtos
   ./cpp/vision
   ./cpp/link

To aid in transitioning from `PROS 2 <../../cortex/index.html>`_ syntax to PROS 3, a `Legacy API Header <./api-legacy.html>`_
is provided. This header provides PROS 2 functionality in its original syntax.

.. toctree::
   :titlesonly:

   ./api-legacy

For additional RTOS-related features, check out the `Extended API <../extended/apix.html>`_. Be warned, these features
are intended for advanced users only and may be very complex to use.

- :doc:`../extended/apix`
