import React from "react";
import { createAnecdoteRequest } from "../reducers/anecdoteReducer";

const AnecdoteForm = props => {
  const store = props.store;

  const createAnecdote = event => {
    event.preventDefault();

    const anecdote = event.target.anecdote.value;
    store.dispatch(createAnecdoteRequest(anecdote));

    event.target.anecdote.value = "";
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
