const express = require(`express`);
const morgan = require(`morgan`);
const mongoose = require(`mongoose`);
const { render } = require("ejs");
const blogRoutes = require(`./routes/blogRoutes`);

// connect to mongodb
const dbURI = `mongodb+srv://admin:pword123@net-ninja-node-tuts.8d3oe.mongodb.net/net-ninja-node-tuts?retryWrites=true&w=majority`
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
// ^^^ second argument here eliminates 'deprecation warning'
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// express app
const app = express();

// register view engine
app.set(`view engine`, `ejs`);
// ejs allows for use of .render and creating .ejs files instead of .html


// listen for requests, instead of using switch cases
// app.listen(3000);
// moved app.listen(3000) to database connection code (mongoose.connect()) so that the server would not be able to listen for get requests without the db being connected


// middleware and static files (public files)
app.use(express.static(`public`))
// express.statiic gives public access to any files in the specified folder... in this case a folder we named `public`
app.use(express.urlencoded({ extended: true }));
// morgan package example, outputs info to console (?)
app.use(morgan(`dev`));



// routes
app.get(`/`, (req, res) => {
  res.redirect(`/blogs`);
});

app.get(`/about`, (req, res) => {
  res.render(`about`, { title: `About` });
});

// redirects
// app.get(`/about-us`, (req, res) => {
//   res.redirect(`/about`);
// });


// blog routes
app.use(`/blogs`, blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render(`404`, { title: `404` });
});