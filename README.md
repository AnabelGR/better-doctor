# Better Doctor API

#### An Epicodus independent project in Javascript and API building, 06.30.17

#### **By Anabel Ramirez**

## Description

This web application will allow a user to call upon an API for (project aim goes here example: search a film API for information about a film).

|Behavior| Input (User Action/Selection) |Output|
|---|:---:|:---:|
|User can search the Better Doctor API| "search"|API results|
|User can search by ailment|"sore throat"|"Dr. Doctor, bio"|
|User can clear results|"click clear search button"|"returns to symptoms input field"|

## Setup/Installation Requirements

To download and run this project:
1. Clone this repository to your desktop.
2. To access the API:
  * visit https://developer.betterdoctor.com/ and request an API key.
  * Open your text editor and create a file in the project directory named '.env'.
  * Type in ' exports.apiKey = "{paste in your API key here}"; ' and save the file.
3. Run {$ npm install} and {$ bower install} in your terminal to gather required packages.
4. Run {$ gulp build} and then {$ gulp serve} to view the project in a web browser via a localhost.


## GH-Pages

https://github.com/AnabelGR/better-doctor/tree/gh-pages

## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact the contributor through Github.

## Technologies Used

* Javascript
* API keys
* JSON
* HTML
* CSS
* Bootstrap
* SASS

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **Anabel Ramirez**
_________________________________________________

##Planning Notes

### Configuration/dependencies
1. Create a {.gitignore_global} file on the top directory with the following file names to ignore for all OS generated and Modern Javascript files:
  - .DS_Store
  - .DS_Store?
  - ._\*
  - .Spotlight-V100
  - .Trashes
  - ehthumbs.db
  - Thumbs.db
  - bower_components/
  - build/
  - node_modules/
  - tmp/
  - temp/
  - .env

2. Run {	$ git config --global core.excludesfile ~/.gitignore_global } in the console log.

3. Create project folder with the following files:
  - README.md
  - .env (for storing all API keys)
  - index.html
  - gulpfile.js (main document to run npm and bower packages)
  - JS and SCSS folders for .js and .scss files respectively

4. initialize project
  - npm init (initializes project for gulp/npm installs)
  - bower init (initializes project for bower installs)

5. Install gulp packages
  - npm install gulp --save-dev
  - npm install browserify --save-dev
  - npm install gulp-concat --save-dev
  - npm install vinyl-source-stream --save-dev
  - npm install gulp-uglify --save-dev
  - npm install gulp-util --save-dev
  - npm install del --save-dev
  - npm install jshint --save-dev
  - npm install gulp-jshint --save-dev  

6. Install bower packages
  - npm install bower -g
  - npm install bower-files --save-dev
  - npm install browser-sync --save-dev
  - bower install moment --save
  - bower install jquery --save
  - bower install bootstrap --save

7. Install sass packages
  - gem install sass
  - npm install gulp-sass gulp-sourcemaps --save-dev

8. Write gulpfile.js document, requires the following variables and their associated tasks:
  - var gulp = require('gulp');
  - var concat = require('gulp-concat');
  - var browserify = require('browserify');
  - var source = require('vinyl-source-stream');
  - var uglify = require('gulp-uglify');
  - var utilities = require('gulp-util');
  - var del = require('del');
  - var jshint = require('gulp-jshint');
  - var browserSync = require('browser-sync').create();
  - var buildProduction = utilities.env.production;
  - var sass = require('gulp-sass');
  - var sourcemaps = require('gulp-sourcemaps');
  - var lib = require('bower-files')({
   "overrides":{
    "bootstrap" : {
     "main": [
      "less/bootstrap.less",
      "dist/css/bootstrap.css",
      "dist/js/bootstrap.js"
      ]
     }
   }
  });
  
  - *see gulpfile.js for all tasks associated with the above variables*
9. API key needs to be downloaded from https://developer.betterdoctor.com/.
  - create an account for a free API key
  - open the .env file and type ' exports.apiKey = "{paste in your API key here}"; '
  - save the document and create the project
