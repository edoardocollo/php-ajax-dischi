const mix = require('laravel-mix');

mix.js('src/js/main.js', 'js').vue()
    .js('src/js/gsap.js', 'gsap')
   .sass('src/css/style.scss', 'css')
   .setPublicPath('dist');
