peculiar-ui [![Build Status](https://travis-ci.org/johnnycopperstone/peculiar-ui.svg?branch=master)](https://travis-ci.org/johnnycopperstone/peculiar-ui)
===========

A (User Interface) Documentation Library built using AngularJS.

##Why 'peculiar'?

Naming is the worst. So to solve this problem, at the time of deciding what to name a project, I take the name of the song currently playing (my [soundcloud](https://soundcloud.com/johnny-copperstone/likes) is usually always on while I'm working). At the time, this was on:

[Ain't That Peculiar - Oddisee Remix](https://soundcloud.com/oddiseemusic/oddisee-aint-that-peculiar-remix)

##Why This Library?

I'll be writing a blog post about this in the coming days, but the tl;dr version is I wanted a tool to quickly and easily document a user interface neatly, and not worry about the documentation site styles and the user interface styles interfering with each other.

Documentation for internal use is usually a low priority, and involves quite a lot of work. So this tool can greatly speed up the process, as well as being maintainable.

##Using the Library

This library is available as a `bower` package. With bower installed, run:

```shell
bower install peculiar
```

This library has a number of dependencies you'd also need to add when including the scripts in your markup.

For CSS, it requires the `peculiar-ui` styles, the default highlight-js theme (feel free to replace this with any other hightlight-js theme, however this was used to tie in with the peculiar style - pun not intended) and the Google Font used.

```html
<link rel="stylesheet" href="bower_components/peculiar/build/peculiar-ui.css" />
<link rel="stylesheet" href="bower_components/peculiar/build/highlightjs-googlecode.css" />
<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900,300italic,400italic,700italic' rel='stylesheet' type='text/css'>
```

The scripts required:

```html
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/highlightjs/highlight.pack.js"></script>
<script src="bower_components/angular-highlightjs/angular-highlightjs.min.js"></script>
<script src="bower_components/lodash/dist/lodash.min.js"></script>
<script src="bower_components/peculiar/build/peculiar.js"></script>
```

To load this tool into your page, you then need to add `peculiar` as a dependency of your angular app. If you don't have an angular app, then just create one:

```javascript
angular.module('your-app', ['peculiar'])
```

and add the app to your DOM

```html
<html ng-app='your-app'>
```

Otherwise, you will need to create an app. You can either create one and add `peculiar` as a dependency, as in the previous example, or just

##Working on this Library

If you'd like to contribute or modify this library for your own needs, make sure you've got node, grunt-cli and bower installed.

```shell
npm install -g grunt-cli
npm install -g bower
```

There are two `grunt` tasks registered to aid in development.

```shell
grunt watch
```

Watches a change to `.js` and `.styl` and runs `grunt concat` and `grunt stylus` respectively.

```shell
grunt build
```

Runs: `stylus`, `html2js`, `karma`, `jshint:beforeconcat`, `concat`, `jshint:afterconcat`, `uglify`

####List of all available commands

```shell
grunt stylus
grunt html2js
grunt karma
grunt jshint (beforeconcat/afterconcat)
grunt uglify
grunt watch
grunt build
```
