var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    lodash = require("lodash"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    vars = require('../variables');

// compile and concate js
const compileJs = function () {
    const out = vars.getDistAssetsPath() + "js/";
    const baseAssets = vars.getBaseAssetsPath();

    //copying demo pages related assets
    var appPagesAssets = {
        js: [
            baseAssets + "js/pages/demo.dashboard.js"
           
        ]
    };

    lodash(appPagesAssets).forEach(function (assets, type) {
        gulp.src(assets)
            .pipe(uglify())
            .on("error", function (err) {
                console.log(err.toString());
            })
            .pipe(gulp.dest(out + "pages"));
    });

    // optional components
    var componentsAssets = {
        js: [
           
            baseAssets + "js/ui/component.fileupload.js",
           
        ]
    };

    lodash(componentsAssets).forEach(function (assets, type) {
        gulp.src(assets)
            .pipe(uglify())
            .on("error", function (err) {
                console.log(err.toString());
            })
            .pipe(gulp.dest(out + "ui"));
    });

    // creating separate vendor js file
    gulp
        .src([
            baseAssets + "js/vendor/jquery.js",
            baseAssets + "js/vendor/bootstrap.bundle.js",
            
        ])
        .pipe(sourcemaps.init())
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest(out))
        .pipe(
            rename({
                // rename app.js to app.min.js
                suffix: ".min"
            })
        )
        .pipe(uglify())
        .on("error", function (err) {
            console.log(err.toString());
        })
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(out));

    // It's important to keep files at this order
    // so that `app.min.js` can be executed properly
    return gulp
        .src([baseAssets + "js/layout.js", baseAssets + "js/hyper.js"])
        .pipe(sourcemaps.init())
        .pipe(concat("app.js"))
        .pipe(gulp.dest(out))
        .pipe(
            rename({
                // rename app.js to app.min.js
                suffix: ".min"
            })
        )
        .pipe(uglify())
        .on("error", function (err) {
            console.log(err.toString());
        })
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(out));
}

gulp.task(compileJs);