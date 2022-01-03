const express = require('express');
const fs = require('fs');
const url = require('url');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  fs.readFile('client/home.html', (err, data) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
});

app.get('/one', (req, res) => {
  fs.readFile('client/one.html', (err, data) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
});

app.get('/two', (req, res) => {
  fs.readFile('client/two.html', (err, data) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
});

app.get('*', (req, res) => {
  fs.readFile('client/404.html', (err, data) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
