const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = withCSS(withSass({
  webpack: (config, {dev}) => {
    const oldEntry = config.entry;
    config.entry = () => oldEntry().then(entry => {
      if (!entry['main.js']) return entry;
      console.log(__dirname);
      entry['main.js'].push(path.join(__dirname, '/utils/offline'));
      return entry;
    });

    if(!dev){
      config.plugins.push(new SWPrecacheWebpackPlugin({
        cacheId: 'codalyze-web',
        filepath: path.resolve('./static/sw.js'),
        staticFileGlobs: [
          'static/**/*'
        ],
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [{
          handler: 'fastest',
          urlPattern: /[.](png|jpg|css|svg)/
        },{
          handler: 'networkFirst',
          urlPattern: /^http.*/
        }]
      }));

      config.plugins = config.plugins.filter(
        (plugin) => (plugin.constructor.name !== 'UglifyJsPlugin')
      );
      config.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
      );
    };

    return config;
  }
}));
