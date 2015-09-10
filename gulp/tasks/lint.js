'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

var config = require('../config');

gulp.task('lint', function () {
    return gulp.src([config.scripts.src, '!app/js/templates.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});
