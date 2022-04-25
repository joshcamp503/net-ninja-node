const Blog = require(`../models/blog`);

// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req, res) => {
  // find the collection of blogs and output, sorted by createdAt (-1 means newer blogs go to top)
  Blog.find().sort({ createdAt: -1 })
  .then((result) => {
    res.render(`blogs/index`, { title: `All Blogs`, blogs: result })
  })
  .catch((err) => {
    console.log(err)
  })
}

const blog_details = (req, res) => {
  const id = req.params.id;
  // ^^^isolates /:id part of route and stores it in a var 
  Blog.findById(id)
    .then(result => {
      res.render(`blogs/details`, { blog: result, title: `Blog details` })
    })
    .catch((err) => {
      // return 404 page if get request is made for id that doesnt exist
      res.status(404).render(`404`, { title: `Blog not found` });
    });
}

const blog_create_get = (req, res) => {
  res.render(`blogs/create`, { title: `Create a new Blog` });
}

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body)

  blog.save()
    .then((result) => {
      res.redirect(`/`);
    })
    .catch((err) => {
      console.log(err)
    });
}

const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
  .then(result => {
    res.json({ redirect: `/` })
  })
  .catch((err) => {
    console.log(err)
  }) 
}

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post, 
  blog_delete
}