const initialState='No new notifications';

const notificationReducer= (state=initialState, action) => {
    switch (action.type){
        case 'SET_NOTIFICATION':
            return action.notification;
        default:
            return state;
    }
}

//action creators
export const setNotification = notification => {
    return ({
        type: 'SET_NOTIFICATION',
        notification
    })
}

export const emptyNotification = () => {
    console.log("empty")
    return ({
        type: 'SET_NOTIFICATION',
        notification: null
    })
}

export default notificationReducer;