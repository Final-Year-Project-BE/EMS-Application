import {constants} from './constants';
import axiosInstance from '../../helpers/axios';


export const fetchUserRequests=()=>{
    return async (dispatch)=>{
        const userRequests=await axiosInstance.get('/user/getRequests');
        if(userRequests.status===200){
            const data=userRequests;
            dispatch({
                type:constants.FETCH_USERS,
                payload:data
            })
        }
    }
}
