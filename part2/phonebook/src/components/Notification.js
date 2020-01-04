import React from "react";
import '../style.css';

const Notification = ({ successMessage }) => (
	<div>
		<p className='success'>{successMessage}</p>
	</div>
);

export default Notification;
