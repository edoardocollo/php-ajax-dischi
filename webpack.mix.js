const mix = require('laravel-mix');

mix.js('src/js/main.js', 'js').vue()
   .sass('src/css/style.scss', 'css')
   .setPublicPath('dist');
