// Imports the Storybook's configuration API
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config = {
  "stories": ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  "staticDirs": ['../public'],
  "addons": [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  "framework": '@storybook/react',
  "core": {
    "builder": 'webpack4',
  },  
  webpackFinal: async (config) => {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
      return config;
  },
};
module.exports = config;