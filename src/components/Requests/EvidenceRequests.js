import React, { useEffect } from "react";
import { Container, Media, Row, Card, Accordion, Button, Col, Table } from 'react-bootstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { useDispatch, useSelector } from 'react-redux';
import { evidenceRequestsFetch } from '../../Redux/actions/evidenceAction';
import DataImg from '../images/data.jpg';
import axiosInstance from '../../helpers/axios';
import "../Styles/schemes-style.css";
import '../Styles/components.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../../helpers/history';
import { isAdmin,isAuth} from '../../helpers/auth';


toast.configure()

const EvidenceRequests = () => {

    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(evidenceRequestsFetch())
    }, [])
    const evidenceData = useSelector(state => state.evidenceData);

    const approve = (data) => {
        console.log(data)
        const formData={
            requester:data.requester,
            evidenceId:data.evidenceId._id,
            id:data._id
        }
        axiosInstance.post('evidencerequest/approve', formData)
        .then(res => {
  
          toast.success(res.data.message, { position: toast.POSITION.TOP_RIGHT })
        })
        .catch(err => {
          toast.error(err.response.data.message, { position: toast.POSITION.TOP_RIGHT })
        })
        setTimeout(() => { 
          history.push('/evidencerequests')
  
          window.location.reload(false);
      }, 5000);
    }

    const reject = (data) => {
        // console.log(data)
        const formData={
            id:data._id
        }
        axiosInstance.post('evidencerequest/delete', formData)
        .then(res => {
  
          toast.success(res.data.message, { position: toast.POSITION.TOP_RIGHT })
        })
        .catch(err => {
          console.log(err)
          toast.error("Error while deleting request", { position: toast.POSITION.TOP_RIGHT })
        })
        setTimeout(() => { 
          history.push('/evidencerequests')
  
          window.location.reload(false);
      }, 5000);
    }

    var Evidences;
    if (evidenceData?.evidenceRequests) {

         Evidences = evidenceData?.evidenceRequests.map((data, key) => {
            return (
                <tr id={key}>
                    <td>{key + 1}</td>
                    <td>{data.requester}</td>
                    <td>{data.evidenceId.description}</td>
                    <td>{data.evidenceId.location}</td>
                    <td>
                        <Button onClick={e=>approve(data)}>Approve</Button>
                        <Button className="ml-4 btn-danger" onClick={e=>reject(data)}>Reject</Button>
                    </td>
                </tr>
            );
        });
    }


    if(!isAuth()){
        history.push("/login");
        window.location.reload(false);
      }else if(!isAdmin()){
        return(
            <div>You are not authorized to access this page</div>
        )
      }else
    return (


        <Container fluid className="mt-5 mb-5">

            <Row className="d-flex justify-content-md-center">
                <Col className="col-md-6 col-xs-6 mt-2">
                    <h3 className="text-center brand">Evidence Requests</h3>
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Sr. No:</th>
                                    <th>Requester</th>
                                    <th>Evidence Description</th>
                                    <th>Location</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Evidences}
                            </tbody>
                        </Table></FadeTransform>
                </Col>
            </Row>


        </Container>
    );

}

export default EvidenceRequests;
