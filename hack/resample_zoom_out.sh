#!/bin/bash -ex

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

# Resample to larger tiles
z=$((z - 1))
for x in $(seq $xmin $xmax)
do
  for y in $(seq $ymin $$ymax)
  do
    A=$((z + 1))/$((x*2))/$((y*2)).jpg
    B=$((z + 1))/$((x*2 + 1))/$((y*2)).jpg
    C=$((z + 1))/$((x*2))/$((y*2 + 1)).jpg
    D=$((z + 1))/$((x*2 + 1))/$((y*2 + 1)).jpg

    if [ -f $A ]
    then
      A=$((z + 1))/0/0.jpg
    fi

    if [ -f $B ]
    then
      A=$((z + 1))/0/0.jpg
    fi

    if [ -f $C ]
    then
      A=$((z + 1))/0/0.jpg
    fi

    if [ -f $D ]
    then
      A=$((z + 1))/0/0.jpg
    fi

    montage $A $B $C $D \
      -tile 2x2 -geometry +0+0 -resize 256x256 \
      $z/$x/$y.jpg
  done
done
