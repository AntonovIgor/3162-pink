"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var pump = require("pump");
var svgmin = require("gulp-svgmin");
var svgstore = require("gulp-svgstore");
var rename = require("gulp-rename");
var minify = require("gulp-csso");

gulp.task("style", function() {
  gulp.src("source/sass/main.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(server.stream());
});

gulp.task("makeSprite", function() {
  pump([
    gulp.src("source/img/icons/*.svg"),
    svgmin(),
    svgstore({ inlineSvg: true} ),
    rename("sprite.svg"),
    gulp.dest("source/img/icons")
  ]);
});

gulp.task("serve", ["style", "makeSprite"], function() {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/js/**/*.js", ["style"]);

  gulp.watch("source/*.html").on("change", server.reload);
});
