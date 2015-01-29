'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the grand' + chalk.red('CustomElements') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption; // true || false

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.copy('_app/_index.html', 'app/index.html');

      this.copy('_app/_styles/_main.css', 'app/styles/main.css');
      this.copy('_app/_scripts/_main.js', 'app/scripts/main.js');

      this.copy('_app/_images/_yeoman.svg', 'app/images/yeoman.svg');


      this.copy('_app/_elements/_elements.html', 'app/elements/elements.html');

      this.copy('_app/_elements/_yeoman-greeter/_index.html', 'app/elements/yeoman-greeter/index.html');

      this.copy('_app/_elements/_break-out/_index.html', 'app/elements/break-out/index.html');
      this.copy('_app/_elements/_break-out/_background.jpg', 'app/elements/break-out/background.jpg');

      this.copy('_app/_elements/_parent-element/_index.html', 'app/elements/parent-element/index.html');
      this.copy('_app/_elements/_parent-element/_parent-element.html', 'app/elements/parent-element/parent-element.html');
      this.copy('_app/_elements/_parent-element/_child-element/_index.html', 'app/elements/parent-element/child-element/index.html');
    },

    projectfiles: function () {
      this.copy('_bower.json', 'bower.json');
      this.copy('_package.json', 'package.json');
      this.copy('editorconfig', '.editorconfig');
      this.copy('jshintrc', '.jshintrc');
      this.copy('bowerrc', '.bowerrc');
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
