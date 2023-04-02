#!/bin/bash +ex

TILEURL=https://stamen-tiles-b.a.ssl.fastly.net/watercolor
cd ~/monimap/app/projecttiles/
MAXDOWNLOADS=400

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
  mkdir -p $z/$x
  for y in $(seq $ymin $ymax)
  do
    if [ -f "$z/$x/$y.jpg" ]; then
      echo "File Exists"
    else
      echo "$z/$x/$y.jpg" >> tiles$z
    fi
  done
done
cat tiles$z | wc -l
cat tiles$z | parallel -j $MAXDOWNLOADS wget -O {} $TILEURL/{}
rm tiles$z
