const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
  target: 'https://pg-drive-backend-new.onrender.com',
      changeOrigin: true,
      secure: false,
      logLevel: 'silent'
    })
  );
};
