#!/usr/bin/env sh
echo "woohoo! we are deploying!!!"
rsync -av --exclude=.git /Users/LOGIN/code/bookmarkervanilla/* leia:/home/valerie/prj/bookmarkervanilla
echo ""
