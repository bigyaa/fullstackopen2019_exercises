import React from "react";

const Notification = ({ successMessage, errorMessage }) =>
	successMessage ? (
		<div>
			<p className="success">{successMessage}</p>
		</div>
	) : (
		<div>
			<p className="error">{errorMessage}</p>
		</div>
	);

export default Notification;
