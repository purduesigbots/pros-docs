var path = require('path');
var fs = require('fs');
var CONTENT_PATH_PREFIX = "./content";
var indexAPI = function() {
  var index = processFile();
  return index;
};
var processFile = function() {
  var indices = [];
  var content = fs.readFileSync(path.resolve("./content/api/index.md"), 'utf-8');


  // Strip out top-level headers
  content = content.replace(/---\r\ntitle\W.+\r\n---\r\n/g, '');
  content = content.replace(/{{< \/?div\W.+}}/g, '');
  content = content.replace(/## Macros|.+\W+# Functions/g, '');
  var titles = content.match(/#{2,3}.+/g);
  var titlesFormatted = [];
  titles.forEach(function(title, index, titles) {
    titlesFormatted.push(title.replace(/#{2,3}\s/, '').replace(/\s{#.+}/, '')); // Strip off markdown formatting
  });
  var entries = content.split(/#{2,3}.+\s/g);
  var links = []
  titlesFormatted.forEach(function(title, index, titles) {
    var t = title;
    if(t.includes("define")) {
      t = t.toLowerCase().replace(/#/, '').replace(/_/g,'-').replace(/\s+/g, '-');
    }
    t = '#' + t;
    links.push(t);
  });
  titlesFormatted.forEach(function(title, index, titles) {
    indices.push({
      title: title,
      href: links[index],
      content: entries[index+1]
    });
  });
  return indices;
};

fs.writeFileSync(__dirname + '/static/search_index.json', JSON.stringify(indexAPI())); // make lunr happy
