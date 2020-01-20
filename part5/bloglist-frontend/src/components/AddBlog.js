import React, { useState } from 'react';
import PropTypes from 'prop-types';

import blogServices from '../services/blogs';

const AddBlog = props => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setURL] = useState('');
  const [likes, setLikes] = useState(0);

  const resetFields = () => {
    setTitle('');
    setAuthor('');
    setURL('');
    setLikes(0);
  };

  const addBlog = async event => {
    event.preventDefault();

    try {
      const newBlog = { title, author, url, likes };

      await blogServices.create(newBlog);
      await window.location.reload();
      props.setNotificationMessage('New Blog added successfully!');
      setTimeout(() => props.setNotificationMessage(''), 5000);

      resetFields();
    } catch (exception) {
      console.error(exception);
    }
  };

  return (
    <form onSubmit={addBlog} className={'add-form'}>
      <div>
        Title:{' '}
        <input
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <br />
      <div>
        Author:{' '}
        <input
          type="text"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <br />
      <div>
        URL:{' '}
        <input
          type="url"
          value={url}
          onChange={({ target }) => setURL(target.value)}
        />
      </div>
      <br />
      <div>
        Likes:{' '}
        <input
          type="number"
          value={likes}
          onChange={({ target }) => setLikes(target.value)}
        />
      </div>
      <br />
      <div>
        <button type="submit">Add Blog</button>
      </div>
    </form>
  );
};

AddBlog.propTypes = {
  setNotificationMessage: PropTypes.func.isRequired
};

export default AddBlog;
