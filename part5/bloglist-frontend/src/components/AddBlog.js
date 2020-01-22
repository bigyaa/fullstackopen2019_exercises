import React, { useState } from 'react';
import PropTypes from 'prop-types';

import blogServices from '../services/blogs';
import { useField } from '../hooks/index';

const AddBlog = props => {
  const title= useField('text');
  const author = useField('text');
  const url =  useField('url');
  const likes=  useField('number');

  const resetFields = () => {
    title.resetValue();
    author.resetValue();
    url.resetValue();
    likes.resetValue();
  };

  const addBlog = async event => {
    event.preventDefault();

    try {
      const newBlog = { title:title.value, author: author.value, url: url.value, likes: likes.value };

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
          type={title.type}
          value={title.value}
          onChange={title.onChange}
        />
      </div>
      <br />
      <div>
        Author:{' '}
        <input
          type={author.type}
          value={author.value}
          onChange={author.onChange}
        />
      </div>
      <br />
      <div>
        URL:{' '}
        <input
          type={url.type}
          value={url.value}
          onChange={url.onChange}
        />
      </div>
      <br />
      <div>
        Likes:{' '}
        <input
          type={likes.type}
          value={likes.value}
          onChange={likes.onChange}
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
  setNotificationMessage: PropTypes.func.isRequired,
};

export default AddBlog;
