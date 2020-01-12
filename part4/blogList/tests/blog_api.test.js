const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Blog = require("../models/Blog");

const api = supertest(app);

const initialBlogs = [
  {
    title: "First blog",
    author: "John Doe",
    url: "bbloggg.com",
    likes: 12
  }
];

beforeEach(async () => {
  await Blog.deleteMany({});

  let blogObject = new Blog(initialBlogs[0]);
  await blogObject.save();
});

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("all blogs are returned", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body.length).toBe(initialBlogs.length);
});

test("new blog can be created", async () => {
  const newBlog = {
    title: "Tested",
    author: "ko hola",
    url: "beeeep.com",
    likes: 88
  };

  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

    const blogsAfterAddition = await api.get("/api/blogs");
    const blogTitles = blogsAfterAddition.body.map(blog => blog.title);

    expect(blogsAfterAddition.body.length).toBe(initialBlogs.length+1);
    expect(blogTitles).toContain('Tested');
});

afterAll(() => {
  mongoose.connection.close();
});
