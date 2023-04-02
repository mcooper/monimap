#!/bin/bash +ex

cd ~/monimap/app/projecttiles/

z=$1
xmin=$2
xmax=$3
ymin=$4
ymax=$5
prefix=$6

cd ~/monimap/app/projecttiles/

for x in $(seq $xmin $xmax)
do
  convert -append $z/$x/{$ymin..$ymax}.jpg $z/$x.jpg
done
convert +append $z/{$xmin..$xmax}.jpg ~/monimap/hack/scenes/${prefix}_${z}_${xmin}_${xmax}_${ymin}_${ymax}.jpg

cd ~/monimap/hack/scenes/
convert -density 10 ${prefix}_${z}_${xmin}_${xmax}_${ymin}_${ymax}.jpg ${prefix}_${z}_${xmin}_${xmax}_${ymin}_${ymax}.pdf
