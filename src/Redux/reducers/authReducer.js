import { constants } from "../actions/constants"

const initState = {
    requests: []
}
export const authReducer = (state = initState, action) => {
    switch (action.type) {
    
        case constants.FETCH_USERS:
            state = {
                ...state,
                requests:action.payload
            }
            break;
        
        default:
            state = {
                ...initState
            }
            break;
    }
    return state;
}