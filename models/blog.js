const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  snippet: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
}, { timestamps: true })

const Blog = mongoose.model(`Blog`, blogSchema);
// Blog is gonna be the model we create (convention is to capitalize Blog), mongoose.model takes in the name of the model as the first argument and preps it to
// be used it in the future (pluralized as `blogs`)
// 2nd argument is the Schema we just created
// Schema defines data structure, Model defines ways to access the data within the Schema
module.exports = Blog;