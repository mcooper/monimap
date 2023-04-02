#!/bin/bash

cd ~/monimap/app/projecttiles/

z=$1

if [[ "$2" -eq "1" ]]; then
  xmin=$2
else
  xmin=0
fi

if [[ "$3" -eq "1" ]]; then
  xmax=$3
else
  xmax=$(echo "2^$z - 1" | bc)
fi

if [[ "$4" -eq "1" ]]; then
  ymin=$4
else
  ymin=0
fi

if [[ "$5" -eq "1" ]]; then
  ymax=$5
else
  ymax=$(echo "2^$z - 1" | bc)
fi

for x in $(xmin $xmax)
do
  for y in $(ymin $ymax)
  do
    convert $z/$x/$y.jpg -crop 128x128+0+0 -resize 256x256 $((z + 1))/$((xmin*2))/$((ymin*2)).jpg
    convert $z/$x/$y.jpg -crop 128x128+128+0 -resize 256x256 $((z + 1))/$((xmin*2 + 1))/$((ymin*2)).jpg
    convert $z/$x/$y.jpg -crop 128x128+0+128 -resize 256x256 $((z + 1))/$((xmin*2))/$((ymin*2 + 1)).jpg
    convert $z/$x/$y.jpg -crop 128x128+128+128 -resize 256x256 $((z + 1))/$((xmin*2 + 1))/$((ymin*2 + 1)).jpg
  done
done
