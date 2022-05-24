const gulp = require("gulp");
const browserSync = require("browser-sync");
const dartSass = require('sass');
const gulpSass = require("gulp-sass");
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
 * Starts browserSync server.
 */
gulp.task('server', function () {
    return browserSync({
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
    return gulp.src('./src/scss/chayns.scss')
        .pipe(gulpSass(dartSass)({
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

/**
 * Default task
 *
 * Runs dev server.
 */
gulp.task('default',
    gulp.series([
        'bundle',
        gulp.parallel([
            'server',
            () => gulp.watch('./src/scss/**/*.scss', gulp.series([
                'bundle',
                (done) => {
                    browserSync.reload();
                    done();
                }
            ])),
            () => gulp.watch('./*.html', (done) => {
                browserSync.reload();
                done();
            }),
        ]),
    ]),
);
