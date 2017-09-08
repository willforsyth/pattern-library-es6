# Pattern Library Template

This template gets you set up with everything you need to get started on your own responsive pattern library. It uses Jekyll, grunt, sass out of the box and is ready to add in as many components as you wish. Use includes and set up page templates as you see fit.

Becasue of NPM modules and the dependancies which can easily be broken when new versions of python come out etc this version runs from inside a vagrant box so all of the dependancies are tightly controlled.

## Set up
In order to run this pattern library generator correctly you'll need to follow a couple of steps first.


You will need node on your machine visit [https://nodejs.org/](https://nodejs.org/) and install.

Steps to get the set up the project
1. Navigate to the correct folder using the command line
2. Run `sudo vagrant up` — To fire up the box
3. Run `sudo vagrant ssh` — To access the box.
4. Run `npm install` — To get all the dependencies for grunt.
5. Run `bower install` — To get all the dependencies for bower.


## Running the project
Run `grunt` or `grunt serve` on the command line and the project will build itself, set up a server, open the index page, and wait for you to make changes.

## Building the project
Once you're happy with everything, run `grunt build` and it will compile everything ready for production. All the built files will go into the `web` directory, just point your server here and you're good to go.

Optionally, you can set your pattern library up on GitHub pages. I'll pull together a more tailored walk through but for now you can get the basic jist [here](https://help.github.com/articles/creating-project-pages-manually).

## What's included
We've included some basic stuff to get you started but feel free to rip anything out you don't need and add anything you do.

* Vagrant

* Grunt
	* Autoprefixer
	* Clean
	* Connect
	* Copy
	* Htmlmin
	* Requirejs
	* Browserify
	* Sass
	* Watch
	* Jekyll
	* Processhtml
	* Svgstore
	* Jit-grunt
	* svg2png
	* Load-grunt-config

* Bower
	* Require.js
	* Modernizr
	* Jquery

* Jekyll

## Support
This template supports IE8 and above and Evergreen browsers.

## Issues
If you come across any bugs or would like a feature implimented, [log an issue](https://github.com/sambeckham/pattern-library-template/issues/new); or better yet fix it and submit a pull request.

## Git clean install
Some general git instructions to start yourself a fresh repo for your project.

rm -f README.md
rm -rf .git
git init
git add -A .
git commit -am "Initial project creation"
git checkout -b develop
