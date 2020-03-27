var sass = require('gulp-sass');
var gulp = require('gulp');

gulp.task('sass', function(done){
    gulp.src('./project/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./project'));
});

gulp.task('sass:watch', function(){
    gulp.watch('./project/**/*.scss', gulp.series('sass'));
});