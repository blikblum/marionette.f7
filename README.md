# marionette.f7

[![NPM version](http://img.shields.io/npm/v/generator-javascript.svg?style=flat-square)](https://www.npmjs.com/package/marionette.f7)
[![NPM downloads](http://img.shields.io/npm/dm/generator-javascript.svg?style=flat-square)](https://www.npmjs.com/package/marionette.f7)
[![Dependency Status](http://img.shields.io/david/dev/blikblum/marionette.f7.svg?style=flat-square)](https://david-dm.org/blikblum/marionette.f7#info=devDependencies)

> Marionette.js integration with Framework7


### Features

&nbsp; &nbsp; ✓ Small, no need for intermediary layer, use Framework7 as is<br>
&nbsp; &nbsp; ✓ Configure Framework7 views (page stacks)<br>
&nbsp; &nbsp; ✓ Manipulate page stacks (push page, switch active one)<br>


### Usage

#### <code>createApp(args) [-> Promise]</code>

Creates a Framework7 application instance. The `args` is a hash accepting the following keys:

`options`: a hash with the [application options](https://framework7.io/docs/init-app.html)

`views`: a hash with the views* configuration where the key is the view name and the
value hold the view options:
 
 * `el`: the selector for the view element
 * `rootPage`: a Marionette view instance. It can be defined as a function or a promise
 * `preRender`: a boolean value to determine with the root page must be pre rendered
 * `popup`: a boolean value to determine if the view should be show in a popup
 

> \* In Framework7 parlance, view is a ”separate visual part of app with its own settings, navigation and history” which can contains one or more pages. Not to confuse with Marionette.js View. 


#### <code>pushPage(mnView [, f7ViewName])</code>

Pushes a page into the page stack. 
`mnView` should be a Marionette view instance and `f7ViewName` the Framework7
 view name where the page should be pushed unto. If `f7ViewName` is omitted the 
 page is pushed into the active Framework7 view
 
#### <code>popPage([f7ViewName])</code>
 
 Pops a page from the page stack. 
 
 `f7ViewName` should be the Framework7 view name where the page should be popped. If `f7ViewName`
  is omitted the page is popped from the active Framework7 view
  
#### <code>showView(f7ViewName)</code>
 
 Shows a Framework7 view. 
 
 `f7ViewName` should be the Framework7 view name that must be show / activated. 
 If is already active nothing is done.
   
#### <code>showPopup(mnView)</code>
 
 Shows a Marionette view as a standalone popup. 
 
 `mnView` should be a Marionette view instance
 
### Examples

See examples [folder](https://github.com/blikblum/marionette.f7/tree/master/examples)
 and [live demo](https://blikblum.github.io/marionette.f7/examples/tab-bar/dist/).


### License

Copyright © 2017 Luiz Américo Pereira Câmara. This source code is licensed under the MIT license found in
the [LICENSE.txt](https://github.com/blikblum/marionette.f7/blob/master/LICENSE.txt) file.
The documentation to the project is licensed under the [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
license.
