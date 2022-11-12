#!/bin/bash
cd ..
git stash && git stash clear
git fetch origin && git pull origin master && npm install -y && npm run build && systemctl restart ibadone