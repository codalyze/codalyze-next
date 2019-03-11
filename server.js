const { createServer } = require('http');
const path = require('path');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare().then(_ => {
  const server = createServer((req, res) => {
    if (req.url === '/sw.js') {
      app.serveStatic(req, res, path.resolve('./src/static/sw.js'));
    } else {
      handle(req, res);
    }
  })
  server.listen(PORT, err => {
    if (err) throw err
    console.log(`> App running on port ${PORT}`);
  })
})
.catch(e => {
  console.log(e);
});

