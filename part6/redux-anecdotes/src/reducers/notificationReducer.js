const initialState='No new notifications';

const notificationReducer= (state=initialState, action) => {
    console.log("ANEnotificationReducerCDOTE", action)
    switch (action.type){
        case 'SET_NOTIFICATION':
            return action.notification;
        default:
            return state;
    }
}

//action creator
export const setNotification = notification => {
    return ({
        type: 'SET_NOTIFICATION',
        notification
    })
}

export default notificationReducer;