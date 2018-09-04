#!/bin/bash

python=python
echo Testing python executable version
$python -c "import sys; exit(0 if sys.version_info > (3,6) else 1)"
if [ $? -ne 0 ]
then
    python=python3.6
fi

echo Installing requirements.txt
$python -m pip install -r requirements.txt

echo Installing PROS CLI
$python -m pip install pros_cli*.whl

echo Building project
make clean all

pushd build
tar -zcf ../pros-docs.tar.gz *
popd
