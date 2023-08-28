const http = require("http");
const appendToFile = require("./fileManipulation");

const port = 3000;
const host = "localhost";

const requestListener = (req, res) => {
  const url = req.url;
  const requestTime = new Date().toLocaleString();
  appendToFile("requests.txt", `${requestTime} -- ${url}\n`);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Request Logged Successfully");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`listening on http://${host}:${port}`);
});
