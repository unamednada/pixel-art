const express = require('express');

const app = express();
const http = require('http');

app.use('/public', express.static(__dirname.concat('/public')));
app.get('/', (_req, res) => {
  res.sendFile(__dirname.concat('/index.html'));
  res.status(200);
});

http.createServer(app).listen(3000, () => {
  console.log('Server running on port 3000');
});
