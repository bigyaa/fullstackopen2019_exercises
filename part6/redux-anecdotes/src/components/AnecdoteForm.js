import React from "react";
import { connect } from "react-redux";

import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = props => {
  const createAnecdote = async event => {
    event.preventDefault();

    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";

    props.createAnecdote(content);
    props.setNotification(`Successfully added new anecdote: "${content}"`);
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
  createAnecdote,
  setNotification
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
