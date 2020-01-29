import React, { useEffect } from "react";
import { connect } from "react-redux";

import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import anecdoteService from "./services/anecdotes";
import { initializeAnecdotesRequest } from "./reducers/anecdoteReducer";

const App = props => {
  useEffect(() => {
    anecdoteService
      .getAll()
      .then(anecdotes => props.initializeAnecdotesRequest(anecdotes));
  });

  return (
    <div>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};
export default connect(null, { initializeAnecdotesRequest })(App);
