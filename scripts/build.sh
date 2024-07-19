#!/bin/bash

echo Building project
make clean all
mkdir -p ./build/v5/pros-4
rm -rf ./build/v5/pros-4/*
cp -r pros-doxygen-docs/* ./build/v5/pros-4/
