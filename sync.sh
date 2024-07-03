#!/bin/bash

# Navigate to the local repository
cd ~/Desktop/GitHub/Portfolio

# Fetch the latest changes from the private repository
git fetch origin
git merge origin/main

# Check for merge conflicts
if [ $? -ne 0 ]; then
    echo "Merge conflicts detected from origin. Please resolve them and then run this script again."
    exit 1
fi

# Fetch the latest changes from the public repository
git fetch https://github.com/babikerbabiker/babikerbabiker.github.io.git

# Merge the changes from the public repository
git merge FETCH_HEAD

# Check for merge conflicts
if [ $? -ne 0 ]; then
    echo "Merge conflicts detected from public repository. Please resolve them and then run this script again."
    exit 1
fi

# Push the local changes to the public repository
git push https://github.com/babikerbabiker/babikerbabiker.github.io.git main

echo "Successfully synchronized with the public repository."
