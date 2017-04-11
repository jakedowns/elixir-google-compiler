var compiler = require('google-closure-compiler-js').gulp();

var gulp = require('gulp');
var Elixir = require('laravel-elixir');

Elixir.extend('compile', function(src, dest, options) {
  const task = new Elixir.Task('compile', () => {
    return gulp.src(src, {base: './'})
      .pipe(compiler(options))
      .pipe(gulp.dest(dest));
  });
});
