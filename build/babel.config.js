module.exports = api => {
    api.cache(true);

    return {
        presets: [
            ['@babel/preset-env', {
                targets: {
                    esmodules: true,
                },
            }],
        ],
        plugins: [
            '@babel/plugin-proposal-object-rest-spread',
        ],
    };
};
