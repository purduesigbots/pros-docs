=====================
Installing on Windows
=====================

.. warning::
   During the initial beta phase of PROS 3, we want to focus on developing the
   CLI and kernel - the bread and butter of developing with PROS. To this end,
   we won't be creating complete Windows installers until closer to full release
   in order to help reduce the delay between us developing features and pushing
   them out to you.

During the beta phase of PROS 3, you need to do the following:

- Acquire the PROS toolchain. This can be done simply by installing PROS 2 today, or by visiting the GNU Arm Embedded Toolchain website. GCC 6+ is recommended, older versions of GCC may work but will be unsupported.
- Download Python 3.6+.
- Download the PROS CLI wheel. Please check the VEX Forum or the PROS Development V5 Beta Channel for the latest link.
- Run
   .. code-block:: batch

      python -m pip install <path_to_file_downloaded>

Depending on if you have other Python interpreters installed, you may need to run :code:`python3` or :code:`python3.6`
instead of simply :code:`python`.
