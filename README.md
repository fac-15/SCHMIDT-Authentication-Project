# schmidt-authentication-project

### Start instructions 

- git clone 
- get the config.env
- npm i 
- npm run dev

### Requirements
+ [ ] Login form with 2 fields - username and password
+ [ ] Users only have to log in once (i.e. implement a cookie-based session on login)
+ [ ] Username is visible on each page of the site after logging in
+ [ ] Any user-submitted content should be labelled with the authors username
+ [ ] There should be protected routes and unprotected routes that depend on the user having a cookie or not (or what level of access they have).
+ [ ] Website content should be stored in a database
+ [ ] Include thorough tests on the back-end, testing pure functions and testing routes using Supertest. If you make external API calls, use Nock to mock the response for your tests.
+ [ ] Test front-end logic, we don't expect tests on the DOM.
authentication with cookies and jwt

### Planning and setup 

![](https://files.gitter.im/foundersandcoders/schmidt/BpSq/1523787368241925065.jpg)
![](https://files.gitter.im/foundersandcoders/schmidt/59LQ/1752501801988654219.jpg)

## Day 1

- Hannah and Charmaine worked together to create and populate database
- Sack and Mike set up signup page with client-side validation 
  - we had trouble not exporting roots in handler, not requiring the JS files.
  
## Day 2

- Hannah and Sak working on getting the post request working so that we can add new users to our user table in our database.
- Mike and Charmaine working on client-side authorisation and sign up/log in pages



