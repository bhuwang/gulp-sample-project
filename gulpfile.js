var gulp = require('gulp');
var saas = require('gulp-sass');

gulp.task('fruit', function(){
    console.log('fruit is so juicy');
});

gulp.task('leapfrog', function(){
    console.log('Leapfrog is a software developement company.');
});

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
            .pipe(saas())
            .pipe(gulp.dest('app/css'));
});


