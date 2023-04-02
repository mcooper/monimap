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

res_z=$((z - 1))
res_xmin=$((xmin/2))
res_xmax=$((xmax/2))
res_ymin=$((ymin/2))
res_ymax=$((ymax/2))

# Resample to larger tiles
for x in $(seq $res_xmin $res_xmax)
do
  mkdir -p $res_z/$x
  for y in $(seq $res_ymin $res_ymax)
  do
    A=$z/$((x*2))/$((y*2)).jpg
    B=$z/$((x*2 + 1))/$((y*2)).jpg
    C=$z/$((x*2))/$((y*2 + 1)).jpg
    D=$z/$((x*2 + 1))/$((y*2 + 1)).jpg

    if [ ! -f $A ]
    then
      A=$res_z/0/0.jpg
    fi

    if [ ! -f $B ]
    then
      B=$res_z/0/0.jpg
    fi

    if [ ! -f $C ]
    then
      C=$res_z/0/0.jpg
    fi

    if [ ! -f $D ]
    then
      D=$res_z/0/0.jpg
    fi

    montage $A $B $C $D \
      -tile 2x2 -geometry +0+0 -resize 256x256 \
      $res_z/$x/$y.jpg
  done
done

echo "New extent: $res_xmin $res_xmax $res_ymin $res_ymax"

