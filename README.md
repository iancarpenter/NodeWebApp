﻿# NodeWebApp
Node web app using express and pug/jade with bootstrap and jquery ready to roll.

Built with Visual Studio 15 Preview 4, this is a nodeJS web app using ExpressJS and the Pug templating engine (formerly known as jade). JQuery and bootstrap are pre-configured from npm.

There is a gruntfile which is responsible for copying the JQuery and Bootstrap scripts and css files from their respective locations in node_modules to a the ‘content’ directory in the route.

I encountered a slight complication in that Jade has recently been renamed to Pug. Even in this preview version of Visual Studio there is no template with the .pug file extension. If your happy enough not using express (ie: just use pug and Node’s built in http module) then you can render .jade files using the pug package. Not so if you want to use ExpressJS (or rather I couldn’t figure out how).

I wanted to use ExpressJS as the main server.js file is much simpler and more elegant, and I didn’t want to sacrifice the intellisense by using a blank Visual Studio template (and suffice to say admitting defeat and reverting to jade wasn’t going to happen!). I therefore created my view in a folder called ‘views.jade’ and created a new Grunt task that fires post build to rename the files to .pug and copy them to the ‘views’ folder (ExpressJS looks for pug templates in the views folder by default).

There isn’t a whole lot to look at but it does give you a starting point with ExpressJS, Pug, Bootstrap and JQuery all wired up ready to go. Feel free to clone have a play with it and let me know any suggestions. :)
