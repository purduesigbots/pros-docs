#!/bin/bash

# sudo npm install -g uglify-js
echo Start minify JS
find public -name "*.js" -exec uglifyjs {} -o {} \;
echo End minify JS
# sudo npm install -g html-minifier
echo Start minify html
find public -name "*.html" -exec html-minifier --collapse-whitespace {} -o {} \;
echo End minify html
# sudo npm install -g clean-css-cli
echo Start minify css
find public -name "*.css" -exec cleancss {} -o {} \;
echo End minify css
