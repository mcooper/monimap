cd ~/monimap/hack/scenes

pdfseparate Blank.pdf Blank%d.pdf

for i in $(seq 1 8)
do
  convert Blank$i.pdf -density 200 -rotate 90 -resize 256x256 Blank${i}.jpg
done

for z in $(seq 1 8)
do\
  mkdir -p ../../app/projecttiles/1$z/0
  cp Blank$z.jpg ../../app/projecttiles/1$z/0/0.jpg
done


