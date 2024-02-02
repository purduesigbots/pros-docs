=====================
Installing on Windows
=====================

.. note:: 
   The recommended method for installing PROS on all platforms is now using our
   VS Code extension. Instructions for this can be found on the :doc:`./index`
   page.
   
   If you do not want to use VS Code, the method below will allow you to install
   the CLI by iteslf. This method does require the knowledge and access to change environment variables on your computer. 
   You can learn more about changing environment variables `here <https://www.imatest.com/docs/editing-system-environment-variables/#Windows>`_. 
   
   If you are an advanced user looking to install the PROS CLI through Python pip,
   check out the instructions on the :doc:`./linux` page instead.

#. Download the latest CLI release from `here: https://github.com/purduesigbots/pros-cli/releases <https://github.com/purduesigbots/pros-cli/releases>`_, it will be named in this format pros_cli-X.X.X-win-64bit.zip
#. Extract the zip file
#. Open your environment variables and Add the extracted folder to PATH.
#.  Download the latest Toolchain from `here https://github.com/purduesigbots/toolchain/releases <https://github.com/purduesigbots/toolchain/releases>`_. Be sure to download the one called pros-toolchain-windows-formatted.zip.
#. Extract the zip file.
#. ensure that there is an empty folder called tmp inside. If there is not, create it.
#. Add the usr folder to an environment variable called PROS_TOOLCHAIN
