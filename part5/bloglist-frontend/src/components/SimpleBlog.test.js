import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import SimpleBlog from './SimpleBlog';

describe('<SimpleBlog/>', () => {
  const blog = {
    title: 'Important title',
    author: 'John Doe',
    likes: 34
  };

  let component;

  beforeEach(() => {
    component = render(<SimpleBlog blog={blog} />);
  });

  test('render the title', () => {
    const heading = component.container.querySelector('.heading');

    expect(heading).toHaveTextContent('Important title');
  });

  test('render the author', () => {
    const author = component.container.querySelector('.heading');

    expect(author).toBeDefined();
  });

  test('render the likes', () => {
    const likes = component.container.querySelector('.likes');

    expect(likes).toHaveTextContent(34);
  });
});
