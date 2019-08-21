const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/index.js', 'dist/index.js')
    .sass('src/sass/index.scss', 'dist/styles.css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./src/sass/tailwind.config.js') ],
    })
    .setPublicPath('dist');
