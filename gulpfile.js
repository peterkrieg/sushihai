var gulp = require('gulp');
var sass = require('gulp-sass');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var ngAnnotate = require('gulp-ng-annotate');


//___________________Watcher________________________

var watcher = gulp.watch(['./js/**/*.js', './css/**/*.scss'], ['default']);

watcher.on('change', function(event){
	console.log('File ' + event.path + ' was ' + event.type + ' at ' + new Date() + ' , running tasks...');
})


// JS task, for all JS, compile into one big all.js file
gulp.task('javascript', function() {
	gulp.src([
		'./bower_components/jquery/dist/jquery.js',
		// './bower_components/lodash/lodash.js',



		// loading each bootstrap JS component in right order
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js',
		// './bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
		// './bower_components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
		'./bower_components/bootstrap-sass/assets/javascripts/bootstrap/popover.js',


		// './bower_components/bootstrap-sass/assets/javascripts/bootstrap/*js',



		'./bower_components/angular/angular.js',
		// './bower_components/ngSmoothScroll/lib/angular-smooth-scroll.js',
		'./bower_components/angular-ui-router/release/angular-ui-router.js',

		// jquery library for slideshows/carousels
		'./bower_components/slick-carousel/slick/slick.js',



		//_________________________GSAP animation__________________________

		// './bower_components/gsap/src/uncompressed/TweenMax.js',

		//_________________________Scroll magic__________________________
		// './bower_components/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
		// './bower_components/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js',
		// './bower_components/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js',
		// './js/other/*.js',



		//_______My controllers, directives, app.js__________________________
		'./js/app.js',
		'./js/*.js',
		'./js/directives/*.js',
		'./js/services/*.js',
		'./js/controllers/*.js',
		'./js/filters/*.js',
		'./demo/**/*.js',


		])
	.pipe(sourcemaps.init())
	.pipe(ngAnnotate())
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./scripts'))
}); // end of javascript gulp task



//__________________Sass task, for minifying all CSS___________________

gulp.task('sass', function () {
	return gulp.src([
		'./css/main.scss',
		])
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'})
		// .pipe(sass()

		.on('error', sass.logError))

	.pipe(concat('main.css'))
	.pipe(sourcemaps.write())

	.pipe(gulp.dest('./css'));
});



































gulp.task('default', ['javascript', 'sass']);