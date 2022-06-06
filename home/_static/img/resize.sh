#! /bin/bash

for SIZE in 360 480 640 1080
do
    convert $1 -resize ${SIZE}x${SIZE} ./${SIZE}/$1
done