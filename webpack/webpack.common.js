const path = require('path');

const config = {
  resolve: {
    alias: {
      '@reactoso-ui': path.resolve('src/packages/ui'),
      '@reactoso-redux': path.resolve('src/packages/redux'),
      '@reactoso-saga': path.resolve('src/packages/saga'),
      '@reactoso-intl': path.resolve('src/packages/intl'),
      '@reactoso-request': path.resolve('src/packages/request'),

      '@providers': path.resolve('src/app/providers'),
      '@components': path.resolve('src/app/components'),
      '@implementation': path.resolve('src/app/implementation'),
    },
    modules: ['node_modules', 'src'],
  },
};

module.exports = config;
