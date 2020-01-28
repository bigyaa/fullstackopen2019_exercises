import React from "react";
import { connect } from "react-redux";

import { createAnecdoteRequest } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = props => {
  const createAnecdote = event => {
    event.preventDefault();

    const anecdote = event.target.anecdote.value;
    props.createAnecdoteRequest(anecdote);
    props.setNotification(`Successfully added new anecdote: "${anecdote}"`);

    event.target.anecdote.value = "";
  };

  return (
    <div>
      <h2>Create New Anecdote</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  createAnecdoteRequest,
  setNotification
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
