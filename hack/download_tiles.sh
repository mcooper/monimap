#!/bin/bash +ex

TILEURL=https://stamen-tiles-b.a.ssl.fastly.net/watercolor
cd ~/monimap/app/projecttiles/
MAXDOWNLOADS=400

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
