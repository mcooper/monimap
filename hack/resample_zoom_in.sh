#!/bin/bash -ex

cd ~/monimap/app/projecttiles/

z=$1
if [ -z "$2" ]; then
  xmin=0
else
  xmin=$2
fi

if [ -z "$3" ]; then
  xmax=$(echo "2^$z - 1" | bc)
else
  xmax=$3
fi

if [ -z "$4" ]; then
  ymin=0
else
  ymin=$4
fi

if [ -z "$5" ]; then
  ymax=$(echo "2^$z - 1" | bc)
else
  ymax=$5
fi

for x in $(seq $xmin $xmax)
do
  mkdir -p $((z + 1))/$((x*2))
  mkdir -p $((z + 1))/$((x*2 + 1))
  for y in $(seq $ymin $ymax)
  do
    convert $z/$x/$y.jpg -crop 128x128+0+0 -resize 256x256 $((z + 1))/$((x*2))/$((y*2)).jpg
    convert $z/$x/$y.jpg -crop 128x128+128+0 -resize 256x256 $((z + 1))/$((x*2 + 1))/$((y*2)).jpg
    convert $z/$x/$y.jpg -crop 128x128+0+128 -resize 256x256 $((z + 1))/$((x*2))/$((y*2 + 1)).jpg
    convert $z/$x/$y.jpg -crop 128x128+128+128 -resize 256x256 $((z + 1))/$((x*2 + 1))/$((y*2 + 1)).jpg
  done
done
