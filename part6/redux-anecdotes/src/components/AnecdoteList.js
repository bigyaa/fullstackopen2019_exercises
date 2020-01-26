import React from "react";
import { voteRequest } from "../reducers/anecdoteReducer";

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes;

  const vote = id => {
    store.dispatch(voteRequest(id));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
