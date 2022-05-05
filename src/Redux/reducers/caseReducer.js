import { constants } from "../actions/constants"

const initState={
    data:[]
}

export const caseReducer=(state=initState,action)=>{
    switch(action.type){
        case constants.CASE_FETCH:
            return state={
                data:action.payload
            }
        default:
            return state
    }
}