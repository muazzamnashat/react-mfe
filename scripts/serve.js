const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');

async function start() {
  const compiler = webpack(config);
  const server = new WebpackDevServer(config.devServer, compiler);

  await server.start();
  console.log('mfe5 running at http://localhost:4900');
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
