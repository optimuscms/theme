import sass from 'node-sass';
import cssnano from 'cssnano';
import pkg from '../package.json';
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
    'vuex': 'vuex',
    '@fortawesome/vue-fontawesome': 'vueFontawesome',
    '@fortawesome/fontawesome-svg-core': 'fontawesomeSvgCore',
    '@fortawesome/free-solid-svg-icons': 'freeSolidSvgIcons',
};

const external = [
    'vuex',
    '@fortawesome/vue-fontawesome',
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-solid-svg-icons',
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
            'vue-multiselect',
            'escape-string-regexp',
        ],
    }),
    commonjs(),
    vue({
        compileTemplate: true,
    }),
    babel({
        exclude: 'node_modules/**',
        configFile: './build/babel.config.js',
    }),
];

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: pkg.main,
                name: 'OptimuscmsTheme',
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
        plugins: [
            ...plugins,
            postcss({
                output: false,
            }),
        ],
    },
    {
        input: 'src/index.js',
        output: {
            file: 'dist/optimus.min.js',
            name: 'OptimuscmsTheme',
            format: 'umd',
            globals,
            exports: 'named',
            sourcemap: true,
        },
        external,
        plugins: [
            ...plugins,
            postcss({
                extract: 'dist/optimus.min.css',
                minimize: true,
                sourceMap: true,
                extensions: [ '.sass' ],
                plugins: [
                    cssnano(),
                    autoprefixer,
                    tailwindcss('./src/sass/tailwind.config.js'),
                ],
                preprocessor: (content, id) => new Promise(resolve => {
                    const result = sass.renderSync({ file: id });

                    resolve({
                        code: result.css.toString(),
                    });
                }),
            }),
            terser(),
        ],
    },
];
