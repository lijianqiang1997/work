var gulp = require("gulp"),
    cssMinify = require("gulp-clean-css"),
    htmlMinify = require("gulp-html-minify"),
    postcss = require("gulp-postcss"),
    cssnext = require("postcss-cssnext"),
    pxToVw = require("postcss-px-to-viewport");

gulp.task("cssMinify", function() {
    
    return gulp.src("./myCss/*.css")
        .pipe(postcss([
            cssnext
        ]))
        .pipe(cssMinify())
        .pipe(gulp.dest("css"));
});
gulp.task("htmlMinify", function() {
    /** 
    return gulp.src("./myHtml/*.html")
        .pipe(htmlMinify({
            minifyCSS: true,
            minifyJs: true
        }))
        .pipe(gulp.dest("./"));
    **/
    return gulp.src("./myHtml/*.html")
        .pipe(gulp.dest("./"));
});
gulp.task("default", ["cssMinify", "htmlMinify"],function(){
    return gulp.src("./myCss/*-m.css")
        .pipe(postcss([
            cssnext,
            pxToVw({
                viewportWidth: 1080,
                unitPrecision: 5,
                viewport: 'vw',
                selectorBlackList: ['.ignore'],
                minPixelValue: 6
            })
        ]))
        .pipe(cssMinify())
        .pipe(gulp.dest("css"));
});

var watcher  = gulp.watch(["./myCss/*.css","./myHtml/*.html"],["default"]);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});