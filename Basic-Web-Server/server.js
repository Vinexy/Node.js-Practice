const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/index") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>WELCOME TO INDEX PAGE</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>WELCOME TO ABOUT PAGE</h2>");
  } else if (url === "/communication") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>WELCOME TO COMMUNICATION PAGE</h2>");
  }
  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
