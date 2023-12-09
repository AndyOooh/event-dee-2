
# From apps/firebase-cloud-functions: yarn migrate-auth
# Creates a file in root of firebase-cloud-functions name auth-users.json
# Take the contents of the file (except outer curly brackets) and replave the users array in: apps/firebase-cloud-functions/emulator-data/auth_export/accounts.json
# Delete the file auth-users.json
firebase auth:export ./auth-users.json --format=json

