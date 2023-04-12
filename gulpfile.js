'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

gulp.task('styles', () => {
  return gulp.src([
    './global/scss/global.scss',
    './global/scss/**/*.scss',
  ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .on('error', sass.logError)
    .pipe(rename({dirname: ''}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch(['global/**/*', 'Components/**/*'], { ignoreInitial: false }, gulp.series(['styles']));
});

gulp.task('default', gulp.series(['styles', 'watch']));
