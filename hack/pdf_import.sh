#!/bin/bash -ex

cd ~/monimap/app/projecttiles/

filename=$1

IFS="_." read -r prefix z xmin xmax ymin ymax ext <<< "$filename"

XSIZE=$((($xmax - $xmin + 1)*256))
YSIZE=$((($ymax - $ymin + 1)*256))
convert -density 200 -resize $YSIZEx$XSIZE ../../hack/scenes/$filename ../../hack/scenes/${filename/pdf/jpg}

# Create subtiles, put in folders
for x in $(seq $xmin $xmax)
do
  for y in $(seq $ymin $ymax)
  do
    xind=$((256*($x - $xmin)))
    yind=$((256*($y - $ymin)))
    convert ../../hack/scenes/${filename/pdf/jpg} -crop 256x256+$xind+$yind $z/$x/$y.jpg
  done
done

rm ../../hack/scenes/${filename/pdf/jpg}
