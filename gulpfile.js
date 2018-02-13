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
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");

gulp.task("images", function () {
    gulp.src("source/img/**/*.{png, jpg, svg}")
      .pipe(imagemin([
          imagemin.optipng( { optimizationLevel: 3 }),
          imagemin.jpegtran( { progressive: true }),
          imagemin.svgo()
      ]))

      .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png, jpg}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("source/img"));
});

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
    .pipe(gulp.dest("source/css"))
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

gulp.task("serve", ["images", "makeSprite", "style"], function() {
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
