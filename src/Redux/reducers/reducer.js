import {evidenceReducer} from './evidenceReducer';
import {caseReducer} from './caseReducer';
import {authReducer} from './authReducer';

import { combineReducers } from 'redux';


const rootReducer=combineReducers({
    // oAuthReducer,
    evidenceData:evidenceReducer,
    case:caseReducer,
    auth:authReducer,
});
export default rootReducer;