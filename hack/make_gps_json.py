import os
from PIL import Image
import piexif # pip install piexif

# Path to the directory containing the images
path = '../app/photos/'

# List to store the results
results = []

# Loop over all files in the directory
for filename in os.listdir(path):
    # Check if the file is an image
    if filename.endswith('.jpg') or filename.endswith('.jpeg') or filename.endswith('.JPG'):
        # Open the image and extract the EXIF data
        image = Image.open(os.path.join(path, filename))
        exif_data = piexif.load(image.info['exif'])
        
        # Extract the GPS data
        gps_data = exif_data['GPS']
        
        # Convert latitude and longitude to decimal degrees
        latitude = gps_data[2][0][0] / gps_data[2][0][1] + gps_data[2][1][0] / (60 * gps_data[2][1][1]) + gps_data[2][2][0] / (3600 * gps_data[2][2][1])
        if gps_data[1] == b'S':
            latitude = -latitude
        longitude = gps_data[4][0][0] / gps_data[4][0][1] + gps_data[4][1][0] / (60 * gps_data[4][1][1]) + gps_data[4][2][0] / (3600 * gps_data[4][2][1])
        if gps_data[3] == b'W':
            longitude = -longitude
        
        # Add the result to the list
        results.append({
            'filename': 'photos/' + filename,
            'latitude': latitude,
            'longitude': longitude
        })

# Write the results to a JSON file
import json
with open('../app/data/gpsdata.json', 'w') as f:
    json.dump(results, f)

