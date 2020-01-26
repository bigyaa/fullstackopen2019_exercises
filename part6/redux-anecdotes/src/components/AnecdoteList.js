import React from "react";
import { voteRequest } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = ({ store }) => {
	const anecdotes = store.getState().anecdotes;

	const vote = (id, content) => {
		store.dispatch(voteRequest(id));
		store.dispatch(setNotification(`Voted: "${content}"`));
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

export default AnecdoteList;
