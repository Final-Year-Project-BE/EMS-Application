import React, { useEffect } from "react";
import { Container, Media, Row, Card, Accordion, Button, Col, Table } from 'react-bootstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { useDispatch, useSelector } from 'react-redux';
import { userEvidences } from '../../Redux/actions/evidenceAction';
import "../Styles/schemes-style.css";
import '../Styles/components.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../helpers/axios';
import 'react-toastify/dist/ReactToastify.css';
import history from '../../helpers/history';
import { isAdmin,isAuth} from '../../helpers/auth';


toast.configure()

const UserEvidences = () => {

    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userEvidences())
    }, [])
    const evidenceData = useSelector(state => state.evidenceData);
    
    const reject = (data) => {
        const formData={
            id:data._id
        }
        axiosInstance.post('user/reject', formData)
        .then(res => {
  
          toast.success(res.data.message, { position: toast.POSITION.TOP_RIGHT })
        })
        .catch(err => {
          console.log(err)
          toast.error("Error while rejecting user", { position: toast.POSITION.TOP_RIGHT })
        })
        setTimeout(() => { 
          history.push('/userrequests')
  
          window.location.reload(false);
      }, 5000);
    }

    var Evidences;
    if (evidenceData?.userEvidences) {
        console.log(evidenceData)
         Evidences = evidenceData?.userEvidences.map((data, key) => {
            return (
                <tr id={key}>
                    <td>{key + 1}</td>
                    <td>{data.ownerName}</td>
                    <td>{data.description}</td>
                    <td>{data.location}</td>
                    <td>{data.date}</td>
                    
                </tr>
            );
        });
    }


    if(!isAuth()){
        history.push("/login");
        window.location.reload(false);
      }else
    return (


        <Container fluid className="mt-5 mb-5">

            <Row className="d-flex justify-content-md-center">
                <Col className="col-md-6 col-xs-6 mt-2">
                    <h3 className="text-center brand">My Evidences</h3>
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Sr. No:</th>
                                    <th>OwnerName</th>
                                    <th>Evidence Description</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    
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

export default UserEvidences;
