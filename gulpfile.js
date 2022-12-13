const gulp = require('gulp')
const uglify = require('gulp-uglify')

const javascript = (done) => {
    
    gulp.src("./src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js/"))

    done()
}
exports.default = javascript