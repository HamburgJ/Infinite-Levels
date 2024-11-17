#!/bin/bash

# Build the project
npm run build:itch

# Create itch.io package
cd build
cp itch.html index.itch.html
zip -r ../itch-build.zip *
cd .. 