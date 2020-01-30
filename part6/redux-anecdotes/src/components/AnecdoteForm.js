import React from "react";
import { connect } from "react-redux";

import { createAnecdote } from "../reducers/anecdoteReducer";
import { setTimedNotification } from "../reducers/notificationReducer";

const AnecdoteForm = props => {
  const createAnecdote = async event => {
    event.preventDefault();

    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";

    props.createAnecdote(content);
    props.setTimedNotification(`Successfully added new anecdote: "${content}"`, 5);
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
  setTimedNotification
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
