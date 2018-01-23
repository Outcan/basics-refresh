var gulp = require("gulp"),
    watch = require("gulp-watch");


gulp.task("default", function() {
    console.log("Default gulp task");
});

gulp.task("html", function() {
    console.log("Image something happening to your HTML file");
});

gulp.task("styles", function() {
    console.log("Imagine some processing happening to your css files");
});

gulp.task("watch", function() {
    watch("./app/index.html", function() {
        gulp.start("html");
    });
    watch("./app/assets/styles/**/*.css", function() {
        gulp.start("styles");
    });
});