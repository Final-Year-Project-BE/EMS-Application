import { constants } from "../actions/constants"

const initState = {
    data: [],
    evidenceRequests: [],
    userEvidences: [],
    myEvidenceRequests: []
}

export const evidenceReducer = (state = initState, action) => {
    switch (action.type) {

        case constants.GET_EVIDENCES:
            return state = {
                ...state,
                data: action.payload
            }

        case constants.GET_EVIDENCE_REQUESTS:
            return state = {
                ...state,
                evidenceRequests: action.payload
            }

        case constants.GET_USER_EVIDENCES:
            return state = {
                ...state,
                userEvidences: action.payload
            }

        case constants.MY_EVIDENCE_REQUESTS:
            return state = {
                ...state,
                myEvidenceRequests: action.payload
            }

        default:
            return state
    }
}