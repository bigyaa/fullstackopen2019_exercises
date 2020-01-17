import React, { useState, useEffect } from "react";

import "./App.css";
import Notification from "./components/Notification";
import Blog from "./components/Blog";

import blogServices from "./services/blogs";
import loginServices from "./services/login";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [blogs, setBlogs] = useState([""]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleNameChange = event => setUsername(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const user = await loginServices.login({
        username,
        password
      });

      setUser(user);
      setUsername("");
      setPassword("");

      setNotificationMessage("Logged in successfully");
      setTimeout(() => setNotificationMessage(""), 2000);
    } catch (exception) {
      setNotificationMessage("Wrong Credentials");
      setTimeout(() => setNotificationMessage(""), 2000);
    }
  };

  useEffect(() => {
    blogServices.getAll().then(response => setBlogs(response));
  }, []);

  const showLoginForm = () => (
    <LoginForm
      handleNameChange={handleNameChange}
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
      username={username}
      password={password}
    />
  );

  const showBlogs = () => (
    <div>
      <h2>Blogs</h2>
      {blogs &&
        blogs.map(blog =>
          blog.title && blog.author ? (
            <Blog title={blog.title} author={blog.author} key={blog.id} />
          ) : (
            ""
          )
        )}
    </div>
  );

  return (
    <>
      <Notification notificationMessage={notificationMessage}></Notification>
      {!user ? showLoginForm() : showBlogs()}
    </>
  );
};

export default App;
