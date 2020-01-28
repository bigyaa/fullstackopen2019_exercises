import React from "react";
import { connect } from "react-redux";

import { emptyNotification } from "../reducers/notificationReducer";

const Notification = props => {
  let style = {
    border: "solid",
    padding: 10,
    borderWidth: 1
  };

  const notification = props.notification;

  let timer;

  const hideNotification = () => {
    timer = setTimeout(() => {
      props.emptyNotification();
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

const mapStateToProps = state => {
  return {
    notification: state.notification
  };
};

const mapDispatchToProps = {
  emptyNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
