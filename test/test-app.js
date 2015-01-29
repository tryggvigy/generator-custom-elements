'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('custom-elements:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        someOption: true
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'bower.json',
      'package.json',
      '.editorconfig',
      '.jshintrc',
      '.bowerrc',
      'app/index.html',
      'app/images/yeoman.svg',
      'app/scripts/main.js',
      'app/styles/main.css',
      'app/elements/elements.html',
      'app/elements/break-out/index.html',
      'app/elements/break-out/background.jpg',
      'app/elements/parent-element/index.html',
      'app/elements/parent-element/parent-element.html',
      'app/elements/parent-element/child-element/index.html',
      'app/elements/yeoman-greeter/index.html'
    ]);
  });
});
