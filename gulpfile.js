var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var config = {
    i18numbr: ['src/i18numbr.module.js', 'src/i18numbr.filter.js']
};

gulp.task('i18numbr-min', function () {

    return gulp.src(config.i18numbr)
        .pipe(concat('i18numbr.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});


gulp.task('i18numbr-watch', function () {
    gulp.watch('src/*.js', ['i18numbr-min']);
});