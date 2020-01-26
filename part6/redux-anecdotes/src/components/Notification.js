import React from "react";
import { emptyNotification } from "../reducers/notificationReducer";

const Notification = ({ store }) => {
	let style;

	const notification = store.getState().notification;

	if (notification) {
		style = {
			border: "solid",
			padding: 10,
			borderWidth: 1
		};
	} else {
		style = {
			display: "none"
		};
	}

	let timer;

	const hideNotification = () => {
		timer = setTimeout(() => {
			clearTimeout(timer);
			store.dispatch(emptyNotification());
		}, 5000);
	};
	console.log(timer);

	const showNotification = () => {
		return <div style={style}>{notification}</div>;
	};

	return (
		<div>
			{showNotification()}
			{hideNotification()}
		</div>
	);
};

export default Notification;
