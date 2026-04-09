const webpack = require('webpack');
const config = require('../webpack.config');

webpack(
  {
    ...config,
    mode: 'production',
    devtool: false
  },
  (error, stats) => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    if (stats.hasErrors()) {
      console.error(
        stats.toString({
          all: false,
          colors: true,
          errors: true,
          warnings: true
        })
      );
      process.exit(1);
    }

    console.log(
      stats.toString({
        colors: true,
        chunks: false,
        modules: false
      })
    );
  }
);
