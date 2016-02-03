---
title: Dont's
---

# Dont's

<!-- slide:start -->
### Pluginreihenfolge beachten!

```javascript
metalsmith(__dirname)
  .use(layouts()) // wrapped Markdown in Template zu HTML
  .use(markdown()) // konvertiert HTML mit Markdown
```

```javascript
metalsmith(__dirname)
  .use(markdown()) // konvertiert *.md nach *.html
  .use(layouts()) // wrapped HTML in Template
```
<!-- slide:end -->
