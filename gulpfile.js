const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

/**
 * Default task
 *
 * Runs dev server.
 */
gulp.task('default', ['bundle'], function () {
    gulp.start('server');
    gulp.watch('./src/scss/**/*.scss', ['bundle'], browserSync.reload);
    gulp.watch('./*.html', browserSync.reload);
});

/**
 * Starts browserSync server.
 */
gulp.task('server', function () {
    browserSync({
        server: {
            baseDir: './'
        },
        port: 9000,
        https:{
            cert: './ssl/tobitag.crt',
            key: './ssl/tobitag.key'
        },
        logPrefix: 'chayns',
        browser: []
    })
});

/**
 * Bundles sass files to css
 */
gulp.task('bundle', function () {
    gulp.src('./src/scss/chayns.scss')
        .pipe(sass({
            outFile: './build/chayns.css',
            sourceComments: false,
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});