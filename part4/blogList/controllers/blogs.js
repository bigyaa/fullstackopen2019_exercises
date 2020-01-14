const Blog = require("../models/Blog");
const blogsRouter = require("express").Router();
const User = require("../models/User");

blogsRouter.get("/", async (request, response, next) => {
  const blogs = await Blog.find({}).populate('user', {username:1, name:1});

  try {
    response.json(blogs);
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;

  const user = await User.findById(body.userId);

  const blog = new Blog({
    ...body,
    user: user._id
  })

  try {
    const savedBlog = await blog.save();

    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save();

    response.json(savedBlog.toJSON());
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
    ...body
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
