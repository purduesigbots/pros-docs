#!/bin/bash

echo Building project
make clean all
rm -r ./build/v5/pros-4
mkdir ./build/v5/pros-4
cp -r pros-doxygen-docs/* ./build/v5/pros-4/

mkdir artifacts
pushd build
tar -zcf ../artifacts/pros-docs.tar.gz *
popd
