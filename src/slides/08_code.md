---
title: Beispiel
order: 8
---

# Beispielanwendung

<!-- slide:start -->
```
npm install metalsmith metalsmith-markdown --save
```
<!-- slide:end -->
<!-- slide:start -->
```javascript
var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');

metalsmith(__dirname)
  .use(markdown())
  .build(function (err, files) {
    if (err) {
      throw err;
    }
  });
```
<!-- slide:end -->
