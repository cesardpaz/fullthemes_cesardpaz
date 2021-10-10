const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');

function css(done){
    //compile sass
    // indentificar archivo, compilar, save .css
    src('src/assets/scss/app.scss')
    //.pipe( sass({outputStyle:'expanded'}) )
    .pipe( sass() )
    .pipe( dest('src/assets/css') );
    done();
}

function dev() {
    watch('src/assets/scss/**/*.scss', css);
    watch('src/assets/scss/app.scss', css);
}

exports.css     = css;
exports.dev     = dev;
exports.default = series(css, dev);  //parallel or series