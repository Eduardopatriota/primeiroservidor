const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>home page</h1>");
  }
  if (req.url === "/user") {
    const users = [
      {
        name: "eduardo",
        email: "eduardo@email.com",
      },
      {
        name: "Joohn Doe",
        email: "jimi@email.com",
      },
    ];
    res.writeHead(200, { "Content-Type": "text/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`rodando na porta ${port}`));
