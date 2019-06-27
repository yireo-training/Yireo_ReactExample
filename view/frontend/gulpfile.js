const gulp = require("gulp");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");
const sourcemaps = require('gulp-sourcemaps');

var jsFiles = {
    vendor: [],
    source: [
        "react_source/*.js",
        "react_source/**/*.js",
        "react_source/**/**/*.js",
        "react_source/**/**/**/*.js"
    ]
};

gulp.task("build", function () {
    return gulp
        .src(jsFiles.source)
        .pipe(sourcemaps.init())
        .pipe(eslint({
            baseConfig: {
                "ecmaFeatures": {
                    "jsx": true
                }
            }
        }))
        .pipe(babel({ presets: ['react'] }))
        .pipe(eslint.format())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("web/js/compiled/"));
});

gulp.task("watch", function () {
    gulp.watch(jsFiles.source, ["build"]);
});

gulp.task("default", ["build", "watch"]);