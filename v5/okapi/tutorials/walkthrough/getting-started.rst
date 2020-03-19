=============================
Getting Started with OkapiLib
=============================

.. warning:: This documentation is for OkapiLib version 3.x.x, and might be inaccurate for versions 4.x.x and above. Documentation for the latest version can be found
         `here <https://okapilib.github.io/OkapiLib/index.html>`_.

.. note:: The latest version of this tutorial can be found 
         `here <https://okapilib.github.io/OkapiLib/md_docs_tutorials_index.html>`_.         
Introduction
============

OkapiLib is installed in all new PROS projects by default. If you are unsure if OkapiLib is
installed, you can check the output of ``prosv5 conduct info-project``. Additionally, OkapiLib's
header files reside in ``include/okapi``. Once you know that OkapiLib is installed, you can start
using it by uncommenting OkapiLib's API header include statement in the file ``include/main.h``
(line 4 below):

.. highlight: cpp
.. code-block:: cpp
   :linenos:

   /**
    * You should add more #includes here
    */
    #include "okapi/api.hpp"
    //#include "pros/api_legacy.h"

Then, in file ``src/opcontrol.cpp``, remove the statement ``using namespace pros::literals`` (if it exists).

That's it! Take a look at the `other tutorials <../index.html>`_ to get a better understanding
of the tools Okapilib has.

Troubleshooting
===============

If OkapiLib is not getting downloaded from GitHub correctly during installation, you can `download
it manually here <https://github.com/OkapiLib/OkapiLib/releases>`_
and then install it by running ``prosv5 conduct fetch path/to/okapilib.zip``. Once OkapiLib is
installed, try creating a PROS project again.
