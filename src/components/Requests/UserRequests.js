import React, { useEffect } from "react";
import { Container, Media, Row, Card, Accordion, Button, Col, Table } from 'react-bootstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequests } from '../../Redux/actions/authActions';
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

const UserRequests = () => {

    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserRequests())
    }, [])
    const auth = useSelector(state => state.auth);

    
    const approve = (data) => {

        const formData={
            id:data._id
        }
        axiosInstance.post('user/approve', formData)
        .then(res => {
  
          toast.success(res.data.message, { position: toast.POSITION.TOP_RIGHT })
        })
        .catch(err => {
          toast.error("Error while updating status", { position: toast.POSITION.TOP_RIGHT })
        })
        setTimeout(() => { 
          history.push('/userrequests')
  
          window.location.reload(false);
      }, 5000);
    }

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

    var Requests;
    if (auth?.requests?.data) {
        console.log(auth?.requests?.data)
         Requests = auth?.requests?.data.data.map((data, key) => {
            return (
                <tr id={key}>
                    <td>{key + 1}</td>
                    <td>{data.email}</td>
                    <td>{data.role}</td>
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
                    <h3 className="text-center brand">User Requests</h3>
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Table striped bordered hover className="mt-3">
                            <thead>
                                <tr>
                                    <th>Sr. No:</th>
                                    <th>Email ID</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Requests}
                            </tbody>
                        </Table></FadeTransform>
                </Col>
            </Row>


        </Container>
    );

}

export default UserRequests;
