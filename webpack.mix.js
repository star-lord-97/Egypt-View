const mix = require("laravel-mix");
require("laravel-mix-purgecss");

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css")
    .purgeCss()
    .browserSync({
        proxy: "http://127.0.0.1:8000/en",
        files: ["public/js/app.js"],
        notify: false
    });
