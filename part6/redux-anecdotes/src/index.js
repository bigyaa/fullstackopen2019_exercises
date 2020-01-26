import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import App from "./App";
import anecdoteReducer from "./reducers/anecdoteReducer";
import notificationReducer, {setNotification} from "./reducers/notificationReducer";

const reducer = combineReducers({
	anecdotes: anecdoteReducer,
	notification: notificationReducer
});

const store = createStore(reducer);
store.dispatch(setNotification("6.9 Better anecdote => \"DONE\""));
//state values= initial states of reducers
console.log("main store", store.getState());

const render = () => {
	ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

render();
store.subscribe(render);
