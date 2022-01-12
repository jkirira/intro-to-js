const { watch, series, parallel, source, dest } = require('gulp');

var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    //var chmod = require('gulp-chmod');
    rename = require('gulp-rename');



// exports.custom = function() {
//   return source('source/**/*.js')
//     .pipe(dest('./output/'));
// }


// const rename = require('gulp-rename');

// gulp-sass and node sass: transform Sass into CSS
// •  gulp-autoprefixer: adds vendor prefixes to CSS rules 

// •  gulp-cssnano: minifies CSS

// •  gulp-concat: merges several CSS or several JS files

// •  gulp-uglify: minifies JS

// •  gulp-rename: adds .min to the name of a minified file

// •  gulp-imagemin: minifies images

// •  gulp-changed: detects whether files were changed and excludes unchanged files: every time you run gulp all your files would not be rewritten regardless of whether the source files were changed

// •  gulp-clean: clears the build directory and deletes everything in it

// •  browser-sync: provides you with a simple web server and auto-reloads the page in all browsers on all devices


exports.runSass = function (){
    return gulp.src("source/scss/index.scss")
        .pipe(sass())
        .pipe(gulp.dest('public/css'));
}



// exports.default = function() {
//   return gulp.src('source/**/*.js')
//     .pipe(uglify())
//     .pipe(rename({ extname: '.min.js' }))
//     .pipe(gulp.dest('output/'));
// }

// gulp.task('jshint', function() {
//     return gulp.src('source/js/**/*.js')
//       .pipe(jshint())
// });




gulp.task('build-css', function() {
    return gulp.src('source/scss/**/*.scss')
        .pipe(sass())
        .pipe(dest('public/assets/stylesheets'));
});


// function jshinter() {
//     return gulp.src('source/js/**/*.js')
//     .pipe(dest('public/js', {"mode": "0777"}));
// }

function jshinter(cb) {
    gulp.src('source/js/**/*.js')
    .pipe(dest('public/js'));
    cb();
}

exports.hintjs = jshinter;


//exports.default = series(jshinter,'build-css');





exports.watch = function() {
    watch('source/js/**/*.js', jshinter);
};



// exports.build = series(transpile, bundle);
