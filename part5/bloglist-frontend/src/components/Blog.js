import React from 'react';

const Blog = ({ blog }) => (
  <div><br/>
    Title: <strong>{blog.title}</strong><br />
    Author: {blog.author}<br/>
    URL: {blog.url && <a href={blog.url}>{blog.url}</a>}<br/>
    {blog.likes && `Likes: ${blog.likes}`}
  </div>
);

export default Blog;