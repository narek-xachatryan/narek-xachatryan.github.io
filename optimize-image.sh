#!/bin/bash

# Install required tools if not present
if ! command -v convert &> /dev/null; then
    echo "Installing ImageMagick..."
    brew install imagemagick
fi

# Optimize the image
echo "Optimizing meta_image.png..."
convert public/meta_image.png -strip -quality 85 -resize 1200x630\> public/meta_image.png

echo "Done! The image has been optimized." 