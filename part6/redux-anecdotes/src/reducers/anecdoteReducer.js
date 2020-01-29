import anecdoteService from '../services/anecdotes';

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = anecdote => ({
  content: anecdote,
  id: getId(),
  votes: 0
});

const initialState = [];

export const voteRequest = id => ({
  type: "VOTE",
  data: { id }
});

export const createAnecdote = anecdote => (async dispatch => {
  const newAnecdote= await anecdoteService.createNew(anecdote);
  dispatch({
  type: "CREATE",
  data: newAnecdote
});
});

export const initializeAnecdotes = () => (async dispatch => {
  const anecdotes = await anecdoteService.getAll();
  dispatch({
  type: "INIT",
  data: anecdotes
});
});

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VOTE":
      const id = action.data.id;
      const selectedAnecdote = state.find(anecdote => anecdote.id === id);
      const newObject = {
        ...selectedAnecdote,
        votes: selectedAnecdote.votes + 1
      };
      return state.map(anecdote => (anecdote.id === id ? newObject : anecdote));

    case "CREATE":
      const newAnecdote = asObject(action.data.content);
      return [...state, newAnecdote];

    case "INIT":
      return action.data;

    default:
      return state;
  }
};

export default anecdoteReducer;
