import React, { useState, useEffect } from "react";

import "./App.css";
import Notification from "./components/Notification";
import Blog from "./components/Blog";
import AddBlog from "./components/AddBlog";
import blogServices from "./services/blogs";
import loginServices from "./services/login";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [blogs, setBlogs] = useState([""]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleNameChange = event => setUsername(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleLogin = async event => {
    event.preventDefault();

    try {
      const user = await loginServices.login({
        username,
        password
      });

      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      blogServices.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");

      setNotificationMessage("Logged in successfully");
      setTimeout(() => setNotificationMessage(""), 2000);
    } catch (exception) {
      setNotificationMessage("Wrong Credentials");
      setTimeout(() => setNotificationMessage(""), 2000);
    }

    toggleVisibility();
  };

  const handleLogout = () => {
    window.localStorage.removeItem("loggedUser");
    window.location.reload();
  };

  useEffect(() => {
    blogServices.getAll().then(response => setBlogs(response));

    const loggedUserJSON = window.localStorage.getItem("loggedUser");

    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON);
      setUser(loggedUser);
      blogServices.setToken(loggedUser.token);
    }
  }, []);

  const hideWhenVisible = { display: isVisible ? "none" : "" };
  const showWhenVisible = { display: isVisible ? "" : "none" };

  console.log("loooioi", isVisible, hideWhenVisible, showWhenVisible);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const showLoginForm = () => (
    <div>
      <button style={hideWhenVisible} onClick={() => toggleVisibility()}>
        Log In
      </button>
      <div style={showWhenVisible}>
        <LoginForm
          handleNameChange={handleNameChange}
          handlePasswordChange={handlePasswordChange}
          handleLogin={handleLogin}
          username={username}
          password={password}
        />
      </div>
      <button style={showWhenVisible} onClick={() => toggleVisibility()}>
        Cancel
      </button>
    </div>
  );

  const showBlogs = () => (
    <div>
      <div>
        <button style={hideWhenVisible} onClick={() => toggleVisibility()}>
          Add New Blog
        </button>
        <div style={showWhenVisible}>
          <AddBlog setNotificationMessage={setNotificationMessage} />
        </div>
        <button style={showWhenVisible} onClick={() => toggleVisibility()}>
          Cancel
        </button>
      </div>
      <div className="blog-list">
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
    </div>
  );

  const showLogoutButton = () => (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );

  const showUserInfo = () => <h3>{`${user.username} logged in`}</h3>;

  return (
    <>
      {user && showUserInfo()}
      {user && showLogoutButton()}
      <Notification notificationMessage={notificationMessage}></Notification>
      {!user ? showLoginForm() : showBlogs()}
    </>
  );
};

export default App;
