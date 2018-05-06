var gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssvars = require("postcss-custom-properties"),
    cssImport = require("postcss-import"),
    mixins = require("postcss-mixins"),
    nested = require("postcss-nested"),
    mqpacker = require("css-mqpacker");

gulp.task("styles", function() {
    return gulp.src("./styles/main.css")
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer, mqpacker]))
        .on("error", function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit("end");
        })
        .pipe(gulp.dest("./app/temp/styles"));
});