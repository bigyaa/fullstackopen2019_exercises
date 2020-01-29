import React from "react";
import { connect } from "react-redux";

import { createAnecdoteRequest } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes";

const AnecdoteForm = props => {
  const createAnecdote = async event => {
    event.preventDefault();

    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";

    const newAnecdote = await anecdoteService.createNew(content);
    console.log("new anecdote", newAnecdote);
    props.createAnecdoteRequest(newAnecdote);
    props.setNotification(`Successfully added new anecdote: "${newAnecdote}"`);
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
