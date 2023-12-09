#!/bin/bash

# From apps/firebase-cloud-functions: yarn migrate-firestore
# Replaces folder apps/firebase-cloud-functions/emulator-data/firestore_export with current firestore data
# Can set which collections to export by changing collection_names variable
# Export/import via GCS is actually redudnant, see the auth script above for a better way to migrate firestore data
# Was unable to make object versioning work.

# Define variables
# fileName="first-export"  # Replace with your desired export file name
collection_names="test"  # Comma separated list of collection names to expor
folder_name="firestore_export"
local_path="./emulator-data"

# Generate a unique identifier (e.g., timestamp or random string)
# uniqueIdentifier=$(date +"%Y%m%d%H%M%S")  # You can use a timestamp
# exportFileName="${fileName}_${uniqueIdentifier}"

# url="gs://event-dee-staging.appspot.com/firestore-migrations/${exportFileName}"
url="gs://event-dee-staging.appspot.com/${folder_name}"

# Delete the previous export file in GCS
gcloud storage rm -r $url
# Export data from Firebase to GCS
gcloud firestore export $url --collection-ids "${collection_names}"
# Import data from GCS to local
gcloud storage cp -r $url $local_path
