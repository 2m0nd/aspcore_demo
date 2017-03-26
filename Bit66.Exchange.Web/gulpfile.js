/// <binding BeforeBuild='tsd-load-eboard-models, views-copy, sass' AfterBuild='ts-compile' Clean='clean' />

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    tsd = require("gulp-tsd"),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    merge = require('merge');
var project = { webroot : 'wwwroot'}
var paths = {
    webroot: "./" + project.webroot + "/",
    ts: {
        source: './TypeScripts/**/*.{ts,tsx}',
        output: "./" + project.webroot + '/js/TypeScriptBuild/',
        def: "./typings/"
    }
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/**/*";
paths.concatCssDest = paths.webroot + "css/site.min.css";

gulp.task('tsd-load-repo', function (callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded',
    includePaths: [paths.webroot + '/lib/']
};

gulp.task("clean", ["clean:js"]);

var tsProject = ts.createProject({
    declarationFiles: true,
    noExternalResolve: false,
    module: 'AMD',
    removeComments: true,
    target: "ES5"
});

gulp.task('ts-compile', function () {
    var tsResult = gulp.src(paths.ts.source)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(gulp.dest('dist'))
        ;

    return merge([
        //tsResult.dts.pipe(gulp.dest(paths.ts.def)),
        tsResult.pipe(gulp.dest(paths.ts.output))
    ]);
});

gulp.task('watch', ['ts-compile'], function () {
    gulp.watch(paths.ts.source, ['ts-compile']);
});