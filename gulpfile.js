const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

const path = require('path');
const fs = require('fs');

let ssl;
try {
    fs.readFileSync(path.join(__dirname, 'ssl', 'ssl.crt'));
    fs.readFileSync(path.join(__dirname, 'ssl', 'ssl.key'));
    ssl = true;
} catch (err) {
    ssl = false;
}

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
        https: ssl ? {
            cert: './ssl/ssl.crt',
            key: './ssl/ssl.key'
        } : false,
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
