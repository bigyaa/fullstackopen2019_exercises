const Blog = require("../models/Blog");
const blogsRouter = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const getTokenFrom = request => {
  const authorization = request.get("Authorization");

  return authorization && authorization.toLowerCase().startsWith("bearer ")
    ? authorization.substring(7)
    : null;
};

blogsRouter.get("/", async (request, response, next) => {
  const blogs = await Blog.find({}).populate("user", { username: 1, name: 1 });

  try {
    response.json(blogs);
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;

  const token = getTokenFrom(request);

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);

    if (!token) {
      return response.status(401).json({ error: "token missing" });
    } else if (!decodedToken.id) {
      return response.status(401).json({ error: "invalid token" });
    } else {
      const user = await User.findById(decodedToken.id);

      const blog = new Blog({
        ...body,
        user: user._id
      });

      const savedBlog = await blog.save();

      user.blogs = user.blogs.concat(savedBlog._id);
      await user.save();

      response.json(savedBlog.toJSON());
    }
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.delete("/:id", async (request, response, next) => {
  const id = request.params.id;

  const token = getTokenFrom(request);

  try {
    const blogToDelete = await Blog.findById(id);
    const decodedToken = jwt.verify(token, process.env.SECRET);

    if (!token) {
      return response.status(401).json({ error: "token missing" });
    } else if (!decodedToken.id) {
      return response.status(401).json({ error: "invalid token" });
    } else if (!blogToDelete.user) {
      return response.status(401).json({ error: "Blog doesn't have a user" });
    } else if (decodedToken.id.toString() === blogToDelete.user.toString()) {
      await Blog.findByIdAndRemove(id);
      response.status(204).end();
    }
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
