import sass from 'node-sass';
import cssnano from 'cssnano';
import pkg from './package.json';
import vue from 'rollup-plugin-vue';
import tailwindcss from 'tailwindcss';
import babel from 'rollup-plugin-babel';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import { eslint } from 'rollup-plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const globals = {
    'vuex': 'Vuex',
    'lodash': 'lodash',
    '@optix/vue-select': 'VueSelect',
};

const external = [
    'vuex',
    'lodash',
    'VueSelect',
];

const plugins = [
    eslint({
        include: [
            '**/*.js',
            '**/*.vue',
        ],
    }),
    resolve({
        only: [
            'matcher',
            'escape-string-regexp',
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-solid-svg-icons',
            '@optix/vue-select',
        ],
    }),
    commonjs({
        namedExports: {
            'node_modules/lodash/lodash.js': [ 'isEqual' ],
        },
    }),
    vue({
        compileTemplate: true,
    }),
    babel({
        extensions: ['.js', '.vue'],
    }),
];

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: pkg.main,
                name: 'AdminTheme',
                format: 'umd',
                globals,
                exports: 'named',
            },
            {
                file: pkg.module,
                format: 'esm',
                globals,
                exports: 'named',
            },
        ],
        external,
        plugins,
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/optimus.min.js',
            name: 'AdminTheme',
            format: 'umd',
            globals,
            exports: 'named',
            sourcemap: true,
        },
        external,
        plugins: [
            ...plugins,
            terser(),
        ],
    },
    {
        input: 'src/styles/index.scss',
        output: {
            file: 'dist/optimus.min.css',
            format: 'es',
        },
        plugins: [
            postcss({
                extract: true,
                minimize: true,
                sourceMap: true,
                extensions: [ '.sass' ],
                plugins: [
                    cssnano(),
                    autoprefixer,
                    tailwindcss('./src/styles/tailwind.config.js'),
                ],
                preprocessor: (content, id) => new Promise(resolve => {
                    const result = sass.renderSync({ file: id });

                    resolve({
                        code: result.css.toString(),
                    });
                }),
            }),
        ],
    },
];
