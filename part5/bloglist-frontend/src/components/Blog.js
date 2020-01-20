import React from 'react';

const Blog = (blog) => (
  <div><br/>
    Title: <strong>{blog.title}</strong><br />
    Author: {blog.author}
  </div>
);

export default Blog;