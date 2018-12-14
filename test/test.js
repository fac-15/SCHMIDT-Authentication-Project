const test = require("tape");
const supertest = require("supertest");
const router = require("../src/router.js");

test("Check that tape is working", t => {
  t.equals(1, 1, "1 should equal 1, duh.");
  t.end();
});

test("Home route returns 200 status code", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});

test("style.css file loading as expected", t => {
  supertest(router)
    .get("/css/styles.css")
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});

test("index.js file loading as expected", t => {
  supertest(router)
    .get("/js/index.js")
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});

test("GET request from /getTalks on page load", t => {
  supertest(router)
    .get("/getTalks")
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Should return 200");
      t.end();
    });
});

test("POST request with incorrect url fails - returns 500", t => {
  supertest(router)
    .post("/dashboard")
    .expect(500)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 500, "Should return 500");
      t.end();
    });
});
