=========================
PROS Kernel 3.1.3 Release
=========================

.. post:: 14 November, 2018
   :tags: blog, kernel-release

New Features:

- Vision Sensor Signature Read/Write, you can now configure signatures in your PROS project (though the existing method of saving signatures through the Vision Utility still works)
- Vision Sensor Color Code functionality, you can now configure color codes for the sensor (this must be done programmatically, not through the Vision Utility) and filter objects by their color code with the ``get_by_code()`` and ``read_by_code()`` functions

Usability Impovements:

- The errno values for Vision Sensor object retrieval functions are now more clear.