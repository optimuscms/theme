const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.sass('src/sass/index.scss', 'dist/styles.css')
   .options({
       processCssUrls: false,
       postCss: [ tailwindcss('./src/sass/tailwind.js') ],
   })
   .setPublicPath('dist');
