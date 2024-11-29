module.exports = function override(config, env) {
    config.module.rules = config.module.rules.map(rule => {
        if (rule.enforce === 'pre' && rule.use && rule.use.some(loader => loader.loader.includes('source-map-loader'))) {
            rule.exclude = [/node_modules\/@react-three\/drei\/node_modules\/@mediapipe\/tasks-vision/];
        }
        return rule;
    });
    return config;
};
