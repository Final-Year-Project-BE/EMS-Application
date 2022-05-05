import {constants } from './constants';
import axiosInstance from '../../helpers/axios';

export const evidenceFetch=(id)=>{

    const data={
        id:id
    }
    return async (dispatch)=>{
        const evidences=await axiosInstance.post('/case/getEvidences',data);
        if(evidences.status===200){
            // console.log(evidences.data.data[0].evidences)
            dispatch({
                type:constants.GET_EVIDENCES,
                payload:evidences.data.data[0]
            })
        }
    }
}

export const evidenceRequestsFetch=()=>{

    return async (dispatch)=>{
        const evidences=await axiosInstance.get('evidencerequest/fetch');
        if(evidences.status===200){
            console.log(evidences.data.data)
            dispatch({
                type:constants.GET_EVIDENCE_REQUESTS,
                payload:evidences.data.data
            })
        }
    }
}

export const myEvidenceRequests=()=>{

    const user=JSON.parse(localStorage.getItem('user'))
    const data={
        email:user.email
    }
    return async (dispatch)=>{
        const evidences=await axiosInstance.post('evidencerequest/myrequests',data);
        if(evidences.status===200){
            console.log(evidences.data.data)
            dispatch({
                type:constants.MY_EVIDENCE_REQUESTS,
                payload:evidences.data.data
            })
        }
    }
}

export const userEvidences=()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    const data={
        email:user.email
    }
    return async (dispatch)=>{
        const evidences=await axiosInstance.post('evidence/userevidences',data);
        if(evidences.status===200){
            dispatch({
                type:constants.GET_USER_EVIDENCES,
                payload:evidences.data.data[0].evidences
            })
        }
    }
}
