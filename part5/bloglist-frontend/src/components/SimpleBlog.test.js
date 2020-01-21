import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render , fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import SimpleBlog from './SimpleBlog';

describe('<SimpleBlog/>', () => {
  const blog = {
    title: 'Important title',
    author: 'John Doe',
    likes: 34
  };
  const onClick=jest.fn();

  let component;

  beforeEach(() => {
    component = render(<SimpleBlog blog={blog} onClick={onClick} />);
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

  test(' if the like button of a component is pressed twice, the event handler function passed in the props is called twice', async () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <SimpleBlog blog={blog} onClick={onClick} />
    );

    const button = getByText('like');
    console.log(prettyDOM(button));
    // console.log(button);

    fireEvent.click(button);
    fireEvent.click(button);

    await expect(onClick.mock.calls.length).toBe(2);
  });
});
