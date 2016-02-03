---
title: Eigenes Plugin - Quellcode
---

```javascript
module.exports = function (options) {

  return function (files, metalsmith, done) {

    Object.keys(files).forEach(function (filename) {
      var file = files[filename];

      file.title; // metadata
      file.contents.toString(); // Contents -> Buffer
      file.mode; // File-System mode
      file.stats; // Ergebnis von fs.stats()
    });

    done(); // callback
  };
};
```
