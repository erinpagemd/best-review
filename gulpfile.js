var gulp = require('gulp');
var jade = require('gulp-jade');
var copy = require('gulp-copy');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//////////WATCH////////////////////////////////////
gulp.task('watch', function () {
  gulp.src('./app/')
    .pipe(watch('./app/'))
    .pipe(gulp.dest('build'));
});

//////////SASS////////////////////////////////////

gulp.task('sass', function () {
  gulp.src('./app/style/*.scss')
    .pipe(sass())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/css/'));
});

//////////COPY////////////////////////////////////

gulp.task('copy', function () {
  gulp.src('./app/js/*.js')
  .pipe(copy('./public/scripts/', {prefix:2}))

});

//////////JADE////////////////////////////////////

gulp.task('jade', function() {
  gulp.src('./app/*.jade')
    .pipe(jade({pretty: true, doctype: 'html'}))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/'))
});

//////////DEFAULT////////////////////////////////////

gulp.task('build', ['copy', 'jade', 'sass']);
