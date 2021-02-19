const http = require("http");
const URL = require("url");
const data = require("./urls.json");
const fs = require("fs");
const path = require("path");

function writeFile(callback) {
  fs.writeFile(
    path.join(__dirname, "urls.json"),
    JSON.stringify(data, null, 2),
    (error) => {
      if (error) throw error;
      callback(JSON.stringify({ message: "ok" }));
    }
  );
}

http
  .createServer((req, resp) => {
    const { name, url, del } = URL.parse(req.url, true).query;

    //all resources
    if (!name || !url) return resp.end(JSON.stringify(data));

    if (del) {
      data.urls = data.urls.filter((item) => String(item.url) !== String(url));
      return writeFile((message) => resp.end(message));
    }

    data.urls.push({ name, url });
    return writeFile((message) => resp.end(message));
  })
  .listen(3000, () => console.log("API is running"));
