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

echo Building project
make clean all
rm -r ./build/v5/pros-4
cp -r pros-doxygen-docs/ ./build/v5/pros-4

mkdir artifacts
pushd build
tar -zcf ../artifacts/pros-docs.tar.gz *
popd
