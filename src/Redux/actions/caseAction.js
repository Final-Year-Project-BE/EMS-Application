import {constants} from './constants';
import axiosInstance from '../../helpers/axios';

export const fetchCases=()=>{
    return async (dispatch)=>{
        const caseData=await axiosInstance.get('/case/view');
        if(caseData.status===200){
            const data=caseData.data.data;
             dispatch({
                type:constants.CASE_FETCH,
                payload:data
            })
        }
    }
}