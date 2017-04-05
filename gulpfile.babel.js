import gulp from 'gulp';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

/**
 * Default task
 *
 * Runs dev server.
 */
gulp.task('default', ['bundle'], () => {
	gulp.start('server');
	gulp.watch('./src/scss/**/*.scss', ['bundle'], browserSync.reload);
	gulp.watch('./*.html', browserSync.reload);
});

/**
 * Starts browserSync server.
 */
gulp.task('server', () => (
	browserSync({
		server: {
			baseDir: './'
		},
		logPrefix: 'chayns',
		browser: []
	})
));

/**
 * Bundles sass files to css
 */
gulp.task('bundle', () => (
	gulp.src('./src/scss/chayns.scss')
		.pipe(sass({
			outFile: './dist/chayns.css',
			sourceComments: false,
			errLogToConsole: true
		}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./dist/'))
		.pipe(browserSync.reload({ stream: true }))
));