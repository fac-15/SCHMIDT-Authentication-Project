const fs = require("fs");
const path = require("path");
const request = require("request");
const getData = require("./dynamic.js");
const querystring = require("querystring");
const addUserToDatabase = require("./postData.js");

const serverError = (error, response) => {
  response.writeHead(500, { "Content-Type": "text/html" });
  response.end("<h1> sorry there was an error loading sever </h1>");
  console.log(error);
};

const home = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error)
      //return serverError(error, response);
      response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  });
};

const public = (request, response, url) => {
  const ext = url.split(".")[1];
  const extType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-ico",
    jpg: "image/jpeg",
    png: "image/png"
  };

  const filePath = path.join(__dirname, "..", "public", url);

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1> we've hit and error </h1>");
    } else {
      response.writeHead(200, { "Content-Type": `${extType[ext]}` });
      response.end(file);
    }
  });
};

const signup = (request, response, url) => {
  const filePath = path.join(__dirname, "..", "public", "signup.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1> we've hit and error </h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const login = (request, response, url) => {
  const filePath = path.join(__dirname, "..", "public", "login.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1> we've hit and error </h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const authIndex = (request, response, url) => {
  const filePath = path.join(__dirname, "..", "auth", "auth_index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log("auth error: ", error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1> we've hit and error </h1>");
    } else {
      response.writeHead(301, {
        Location: "/",
        "Content-Type": "text/html"
        // "Content-Type": `${extType[ext]}`,
        // "Set-Cookie": "logged_in=true; HttpOnly; Max-Age=9000;"
      });
      // response.writeHead(200, { "Content-Type": `${extType[ext]}` });
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const logout = (request, response, url) => {
  response.writeHead(301, {
    Location: "/",
    "Content-Type": "text/html",
    "Set-Cookie": "logged_in=false; HttpOnly; Max-Age=0"
  });
  response.end();
};

const dynamic = (request, response, url) => {
  const obj = querystring.parse(url);
  console.log(obj);

  const type = obj["/?type_list"];
  const skill = obj["skill_list"];
  const level = obj["level_list"];

  getData(type, skill, level, (err, res) => {
    if (err) return console.log(err);
    let dynamicData = JSON.stringify(res);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(dynamicData);
  });
};

const handlerPost = (req, res) => {
  let body = "";
  req.on("data", function(data) {
    body += data;
  });
  // console.log("THISIS BODY", body);
  req.on("end", function() {
    let post = querystring.parse(body);
    console.log(post);
    const { email, username, password } = post;
    addUserToDatabase(email, username, password, (err, response) => {
      if (err) {
        return console.log(err, "posting error");
      }
      res.writeHead(302, { Location: "/login?" });

      res.end();
    });
  });
};

module.exports = {
  serverError,
  home,
  dynamic,
  public,
  signup,
  handlerPost,
  authIndex,
  logout,
  login
};
