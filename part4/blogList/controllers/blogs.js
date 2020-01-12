const Blog = require("../models/Blog");
const blogsRouter = require("express").Router();

blogsRouter.get("/", async (request, response, next) => {
  const blogs = await Blog.find({});

  try {
    response.json(blogs);
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.post("/", async (request, response, next) => {
  const blog = new Blog(request.body);

  const newBlog = await blog.save();

  try {
    response.status(201).json(newBlog);
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.delete("/:id", async (request, response, next) => {
  const id = request.params.id;

  try {
    await Blog.findByIdAndRemove(id);
    response.status(204).end();
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.put("/:id", async (request, response, next) => {
  const body = request.body;

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  };

  try {
  updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
    new: true
  });

    response.json(updatedBlog.toJSON());
  } catch (exception) {
    next(exception);
  }
});

module.exports = blogsRouter;
