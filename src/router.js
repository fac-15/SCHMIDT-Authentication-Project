const handler = require("./handler.js");
const routes = ["/style.css", "/signup.js", "/index.html"];

const router = (req, res) => {
  const method = req.method;
  console.log(method);
  const url = req.url;
  if (req.method == "POST") {
    handler.handlerPost(req, res);
  } else {
    if (url === "/") {
      console.log("home is home");
      handler.home(req, res);
    } else if (routes.includes(url)) {
      console.log("./public/index.html");
      handler.public(req, res, url);
    } else if (url === "/favicon.ico") {
      res.end();
    } else if (url === "/signup") {
      console.log("signup");
      handler.signup(req, res, url);
    } else if (method === "GET") {
      handler.dynamic(req, res, url);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404, file not found!!!!!!");
      console.log("404");
    }
    // }
  }
};
module.exports = router;
