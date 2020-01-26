import React from "react";
import { emptyNotification } from "../reducers/notificationReducer";

const Notification = ({ store }) => {
	let style = {
		border: "solid",
		padding: 10,
		borderWidth: 1
	};

	const notification = store.getState().notification;

	let timer;

	const hideNotification = () => {
		timer = setTimeout(() => {
			store.dispatch(emptyNotification());
		}, 5000);
	};

	const showNotification = () => {
		return <div style={style}>{notification}</div>;
	};

	return notification ? (
		<div>
			{clearTimeout(timer)}
			{showNotification()}
			{hideNotification()}
		</div>
	) : null;
};

export default Notification;
