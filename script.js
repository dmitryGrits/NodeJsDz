`use strict`;

const http = require('http');
let firstPageCounter = 0;
let secondPageCounter = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    firstPageCounter++;
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(`<h1>Корневая страница</h1>
    <h2>Количество переходов на страницу : ${firstPageCounter}</h2>
    <a href="/about">Ссылкаа на страницу About</a>`);
  } else if (req.url === '/about') {
    secondPageCounter++;
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(`<h1>Страница About</h1>
    <h2>Количество переходов на страницу : ${secondPageCounter}</h2>
    <a href="/">Ссылка на главную страницу</a>`);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h1>Erorr page</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});