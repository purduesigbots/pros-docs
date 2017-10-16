#!/bin/bash

bash -ic "nvm install --lts; nvm --lts exec node ./indexer.js"
hugo
tar -czvf pros-website.tar.gz -C ./public .