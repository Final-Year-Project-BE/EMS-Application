import React, { useState } from "react";
import {useLocation} from 'react-router-dom';
import { Control, LocalForm, Errors } from "react-redux-form";
import { Row, Col, Card, Container, Button, Form } from "react-bootstrap";
import { FadeTransform } from "react-animation-components";
import {Link, useNavigate} from 'react-router-dom';
import { isAdmin,isAuth } from '../../helpers/auth';
import history from "../../helpers/history";

const Case = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const view=(ref)=>{
        navigate('/listevidences',{state:ref});
    }
    const add=(ref)=>{
        navigate('/addevidence',{state:ref});
    }

    if(!isAuth()){
        history.push("/login");
        window.location.reload(false);
      }else 
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
                                <p>Owner : {location.state.ownerName }</p>
                                <p>Description : {location.state.description}</p>
                                <p>Timestamp : {location.state.createdAt}</p>
                                {/* <p>Filename: evidence.jpg</p> */}
                            </div>
                            <Card.Body></Card.Body>
                        </Card>
                    </FadeTransform>
                </Col>
                <Col className="col-md-5 mt-3">
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: "scale(0.5) translateY(-50%)",
                        }}
                    >
                        <Card className="frm">

                            <Card.Body>
                                <Row>
                                    <div>
                                        <h3>Access Holders</h3>
                                        <p>Rohit Naikade</p>
                                        <p>Mehul Lokhande</p>
                                        <p>Sunny Dhadiwal</p>
                                    </div></Row>

                                <Row className="mt-5">
                                    <Col><button type="button" class="btn btn-primary" onClick={e=>view(location.state)}>View Evidences</button>
                                    </Col>
                                    <Col><button type="button" class="btn btn-success" onClick={e=>add(location.state)}>Add Evidence </button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </FadeTransform>
                </Col>
            </Row>
        </Container>
    );
};

export default Case;
