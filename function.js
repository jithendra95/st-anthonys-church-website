const { https } = require('firebase-functions');
const { default: next } = require('next');

const isDev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost'
const port = 3000
const server = next({
  dev: isDev,
  hostname,
  port,
  conf: { distDir: '.next' },
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
  return server.prepare().then(() => nextjsHandle(req, res));
});