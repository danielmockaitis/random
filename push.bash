#!/bin/bash

echo Pushing
set -x
git add .
git commit -m "random"
git push origin master
set +x
