import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Control, LocalForm, Errors } from "react-redux-form";
import { Row, Col, Card, Container, Button, Form } from "react-bootstrap";
import { FadeTransform } from "react-animation-components";
import { Link, useNavigate } from 'react-router-dom';
import { isAdmin, isAuth } from '../../helpers/auth';
import axiosInstance from "../../helpers/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import history from "../../helpers/history";
toast.configure();

const Evidence = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const access = (id) => {
        const user=JSON.parse(localStorage.getItem('user'))
        console.log(user.role)
        const data={
            requester:user.email,
            evidenceId:id
        }

        axiosInstance
      .post("evidencerequest/add", data)
      .then((res) => {
        toast.success(res.data.message, { position: toast.POSITION.TOP_RIGHT });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });

    setTimeout(() => {
      history.push("/cases");

      window.location.reload(false);
    }, 5000);
    }

    if (!isAuth()) {
        history.push("/login");
        window.location.reload(false);
    } else
        return (
            <Container fluid>
                <Row className="justify-content-md-center mt-5">
                    <Col className="col-md-5 mt-3">
                        <FadeTransform
                            in
                            transformProps={{
                                exitTransform: "scale(0.5) translateY(-50%)",
                            }}
                        >
                            <Card className="frm">
                                <div className="text-center mt-4 mb-4">
                                    <h1 className="">{location.state.name}</h1>
                                </div>
                                <Card.Img varient="top"></Card.Img>
                                <div className="text-center mt-4 mb-4">
                                    <span className="fa fa-star fa-lg mr-2"></span>
                                    <span className="fa fa-star fa-lg mr-2"></span>
                                    <span className="fa fa-star fa-lg mr-2"></span>
                                    <span className="fa fa-star fa-lg mr-2"></span>
                                    <span className="fa fa-star fa-lg mr-2"></span>
                                </div>

                                <div>
                                    <p>Owner : {location.state.ownerName}</p>
                                    <p>Description : {location.state.description}</p>
                                    <p>Location : {location.state.location}</p>
                                    <p>Timestamp : {location.state.createdAt}</p>
                                </div>

                                <div>
                                    <Button onClick={e=>access(location.state._id)}>Request Access</Button>
                                </div>
                                <Card.Body></Card.Body>
                            </Card>
                        </FadeTransform>
                    </Col>

                </Row>
            </Container>
        );
};

export default Evidence;
