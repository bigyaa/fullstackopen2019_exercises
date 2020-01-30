const initialState = "No new notifications";

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_NOTIFICATION":
			return action.notification;
		default:
			return state;
	}
};

//action creators
export const setNotification = notification => {
	return {
		type: "SET_NOTIFICATION",
		notification
	};
};

export const emptyNotification = () => {
	return {
		type: "SET_NOTIFICATION",
		notification: null
	};
};

export const setTimedNotification = (message, timeInSeconds) => {
	const timeInMiliSecond = timeInSeconds * 1000;

	return dispatch => {
		dispatch(setNotification(message));
		setTimeout(() => dispatch(emptyNotification()), timeInMiliSecond);
	};
};

export default notificationReducer;
