import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import anecdoteReducer, {
  initializeAnecdotesRequest
} from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import anecdoteService from "./services/anecdotes";

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer
});

const store = createStore(reducer);

anecdoteService
  .getAll()
  .then(anecdotes => store.dispatch(initializeAnecdotesRequest(anecdotes)));

//state values= initial states of reducers
console.log("main store", store.getState());

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

render();
store.subscribe(render);
