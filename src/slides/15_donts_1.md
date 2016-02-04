---
title: Dont's
order: 15
---

# Dont's

### Pluginreihenfolge beachten!

<!-- slide:start -->
```javascript
metalsmith(__dirname)
  .use(layouts()) // wrapped Markdown in Template zu HTML
  .use(markdown()) // !!konvertiert HTML mit Markdown :-(
```
<!-- slide:end -->
<!-- slide:start -->
```javascript
metalsmith(__dirname)
  .use(markdown()) // konvertiert *.md nach *.html
  .use(layouts()) // wrapped HTML in Template :-)
```
<!-- slide:end -->
