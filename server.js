const { createServer } = require('http');
const express = require('express');
const path = require('path');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;
const compression = require('compression');

app.prepare().then(_ => {
  const app = express();
  app.use(compression());
  app.use((req, res) => {
    if (req.url === '/sw.js') {
      app.serveStatic(req, res, path.resolve('./src/static/sw.js'));
    } else {
      handle(req, res);
    }
  });
  createServer(app).listen(PORT, err => {
    if (err) throw err
    console.log(`> App running on port ${PORT}`);
  })
});
