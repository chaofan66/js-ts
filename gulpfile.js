const gulp = require('gulp');
const less = require('gulp-less');
const webpack =require('webpack-stream');
const config = require('./config/webpack.config');
const connect = require('gulp-connect');
const rename =require('gulp-rename');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

gulp.task('server',()=>{
    browserSync.init({
        server:{
            baseDir:["dist"]
        },
        port:3000
    });

    gulp.watch("src/less/**/*.less",['less']);
    gulp.watch("src/js/**/*.js",['webpack']);
    gulp.watch("dist/**/*.html").on('change',browserSync.reload);

});

gulp.task("webpack",()=>{
    gulp.src("src/**/*.js")
    .pipe(webpack(config))
    .pipe(rename('main.js'))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
})
gulp.task('html',()=>{
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
})

gulp.task('less',()=>{
    gulp.src('src/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());

})

gulp.task('default',['html','server','less','webpack'])


