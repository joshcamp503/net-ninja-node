const http = require(`http`);
const fs = require(`fs`);
const _ = require(`lodash`);

// createServer function comes out of the box with access to 2 objects... the request (req) object and the resonse (res) object
// request object has info about the request itself
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);

  // lodash package examples
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log(`hello`);
  }); 

  greet();

  // set header content type
  res.setHeader(`Content-Type`, `text/html`);

  // send text
  // res.write(`<head><link rel="stylesheet" href="#"></head>`)
  // res.write(`<p>hello, ninjas</p>`);
  // res.write(`<p>hello again, ninjas</p>`);
  // res.end();

  let path = `./views/`;
  switch(req.url) {
    case `/`:
      path += `index.html`;
      res.statusCode = 200;
      break;
    case `/about`:
      path += `about.html`;
      res.statusCode = 200;
      break;
    case `/about-me`:
      res.statusCode = 301;
      // 301 means the resource you are trying to access has been permanently moved
      res.setHeader(`Location`, `/about`);
      res.end();
      break;
    default:
      path += `404.html`;
      res.statusCode = 404;
      break;
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end;
    } else {
      // res.write(data);
      // ^^^ redundant in this case because res.end will write the data
      
      res.end(data);
    }
  })


});

// listen function takes in port number as an argument
// localhost is default argument, but written out explicitly in this example
// localhost IP address is 127.0.0.1
server.listen(3000, `localhost`, () => {
  console.log(`listening for requests on port 3000`)
});