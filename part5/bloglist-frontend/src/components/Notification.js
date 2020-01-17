import React from "react";
import '../App.css';

const Notification = ({ notificationMessage }) => (
	<div>
		<p className='success'>{notificationMessage}</p>
	</div>
);

export default Notification;
