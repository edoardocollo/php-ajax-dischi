const mix = require('laravel-mix');

mix.js('src/js/main.js', 'js')
   .sass('src/css/style.scss', 'css')
   .setPublicPath('dist');
