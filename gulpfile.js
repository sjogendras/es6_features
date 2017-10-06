var gulp = require("gulp"),
    babel = require("gulp-babel"),
    watch = require('gulp-watch');

gulp.task("transpile", function() {
    return watch('src/**/*.js', function () {
        gulp.src('src/**/*.js')
        .pipe(babel())        
        .pipe(gulp.dest("dist"));
    });
});