var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var shortSize = require('postcss-short-size');
var cssnano = require('cssnano');
var postcssDiscardComments = require('postcss-discard-comments');
var focus = require('postcss-focus');
var precss = require('precss');


gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 4 version']}),
        shortSize,
        cssnano,
        postcssDiscardComments,
        focus,
        precss
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});