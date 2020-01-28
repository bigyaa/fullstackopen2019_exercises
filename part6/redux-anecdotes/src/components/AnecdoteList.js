import React from "react";
import { connect } from "react-redux";

import { voteRequest } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = props => {
  const anecdotes = props.anecdotes;

  const vote = (id, content) => {
    props.voteRequest(id);
    props.setNotification(`Voted: "${content}"`);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes
  };
};

const mapDispatchToProps = {
  voteRequest,
  setNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
