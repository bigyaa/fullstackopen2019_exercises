import React   from "react";
import { connect } from "react-redux";

const Notification = props => {
	let style = {
		border: "solid",
		padding: 10,
		borderWidth: 1
	};

	const notification = props.notification;

	const showNotification = () => {
		return <div style={style}>{notification}</div>;
	};

	return notification ? <div>{showNotification()}</div> : null;
};

const mapStateToProps = state => {
	return {
		notification: state.notification
	};
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
