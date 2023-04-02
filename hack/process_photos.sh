cd ~/monimap/hack/photos/

# Delete MP4s, since they are all also in HEIC format
rm *MP4

# Iterate and delete any without GPS data :-(
for img in $(ls)
do
  GPS=$(exiftool $img | grep GPS | wc -l)
  if [[ $GPS == 0 ]]
  then
    rm $img
  fi
done

# Convert all HEIC to jpg
for img in $(ls | grep HEIC)
do
  heif-convert $img ${img/HEIC/jpg}
done

# Manually sort images by how they should be cropped

# Now crop according to how they say
cd ../sorted
for folder in North South East West center
do
  cd $folder
  for img in $(ls)
  do
    print $img
    name=${img%.*}
    convert $img -gravity $folder -extent 1:1 tmp.jpg
    exiftool -overwrite_original_in_place -tagsFromFile $img tmp.jpg
    mv tmp.jpg ../../final/$img
  done
  cd ..
done

