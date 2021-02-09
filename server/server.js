const path = require('path');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const app = express();
const distPath = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 9000;

app.use(
  '/',
  expressStaticGzip(distPath, {
    enableBrotli: true,
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log('server is up');
});
