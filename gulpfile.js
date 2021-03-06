var gulp          = require('gulp')
    browserSync   = require('browser-sync').create(),
    sass          = require('gulp-sass'),
    notify        = require("gulp-notify"),
    autoprefixer  = require('gulp-autoprefixer'),
    jshint        = require('gulp-jshint'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    imagemin      = require('gulp-imagemin'),
    pug           = require('gulp-pug'),
    del           = require('del');


gulp.task('sass', function () {
 return gulp.src('./scss/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error compiling scss"
      })))
   .pipe(autoprefixer('last 2 version'))
   .pipe(gulp.dest('./dist/styles'))
   .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('js', function() {
  return gulp.src('./scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify({ message: 'JS task complete' }));
});

gulp.task('images', function() {
  return gulp.src('./img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('./dist/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('views', function buildHTML() {
  return gulp.src('./*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./dist/'))
  .pipe(notify({ message: 'Views task complete' }));
});

gulp.task('clean', function() {
    return del(['./dist/']);
});

gulp.task('watch', ['default'], function() {

  browserSync.init({
    server: "./dist"
  });

  gulp.watch('./*.pug', ['views'], browserSync.reload);
  gulp.watch('./scss/**/*.scss', ['sass'], browserSync.reload);
  gulp.watch('./scripts/**/*.js', ['js'], browserSync.reload);
  gulp.watch('./img/**/*', ['images'], browserSync.reload);

});

// To run other tasks AFTER folder has been cleaned out
gulp.task('default', ['clean'], function() {
    gulp.start('views', 'sass', 'js', 'images');
});

