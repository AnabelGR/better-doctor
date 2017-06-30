## Configuration/dependencies
1. Create a {.gitignore_global} file on the top directory with the following file names to ignore for all OS generated and Modern Javascript files:
  - .DS_Store
  - .DS_Store?
  <!-- - ._\* -->
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

7. Write gulpfile.js document, requires the following variables and their associated tasks:
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

8. API key needs to be downloaded from https://developer.betterdoctor.com/.
  - create an account for a free API key
  - open the .env file and type ' exports.apiKey = "{paste in your API key here}"; '
  - save the document and create the project

## Specs
|Behavior| Input (User Action/Selection) |Output|
|---|:---:|:---:|
|User can find doctors close by |enters city name|sees a list of doctors|
|User can find a doctor by specialty |pediatrics|"doctor name, pediatrics"|
|User can search by ailment|"sore throat"|"Dr. Doctor, general practitioner"|
