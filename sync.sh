cd ~/Desktop/GitHub/Portfolio

git fetch origin
git merge origin/main

if [ $? -ne 0 ]; then
    echo "Merge conflicts detected from origin. Please resolve them and then run this script again."
    exit 1
fi

git fetch https://github.com/babikerbabiker/babikerbabiker.github.io.git

git merge FETCH_HEAD --allow-unrelated-histories

if [ $? -ne 0 ]; then
    echo "Merge conflicts detected from public repository. Please resolve them and then run this script again."
    exit 1
fi

git push https://github.com/babikerbabiker/babikerbabiker.github.io.git main

echo "Successfully made changes live."