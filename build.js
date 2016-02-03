'use strict';

var env = process.env.NODE_ENV || 'development';
var metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var collections = require('metalsmith-collections');
var serve = require('metalsmith-express');
var watch = require('metalsmith-watch');
var markdown = require('metalsmith-markdown');

var ms = metalsmith(__dirname);

if (env === 'development') {
  ms
    .use(serve())
    .use(watch({
      paths: {
        '${source}/**/*': '**/*',
        '${source}/assets/**/*': true,
        'layouts/*': '**/*'
      },
      livereload: true
    }));
}

ms
  .use(collections({
    slides: {
      sortBy: 'path',
      pattern: 'slides/*.md'
    }
  }))
  .use(markdown())
  // add subslides
  .use(function (files, ms, done) {
    Object.keys(files).forEach(function (file) {
      if (file.indexOf('.html') === -1) return;

      files[file].contents = new Buffer(files[file].contents.toString()
        .replace(/\<\!-- slide:start --\>/g, '<section class="delayed">')
        .replace(/\<\!-- slide:end --\>/g, '</section>'), 'utf8');
    });
    done();
  })
  .use(layouts({
    pattern: '*.html',
    engine: 'ejs',
    default: 'default.html.ejs'
  }))
  // remove html files under slides/
  .use(function (files, ms, done) {
    Object.keys(files).forEach(function (file) {
      if (file.indexOf('slides/') === 0) {
        delete files[file];
      }
    });
    done();
  })

  // build this thing
  .build(function (err, files) {
    if (err) {
      console.error(err);
      return;
    }
  });
