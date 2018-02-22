#!/bin/bash

bash -ic "nvm install --lts; nvm exec --lts node ./indexer.js"
hugo
./minify.sh
tar -czvf pros-website.tar.gz -C ./public .
