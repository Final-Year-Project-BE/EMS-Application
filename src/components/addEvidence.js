import React, { useState } from "react";
import evidenceImg from "./images/evidence1.svg";
import './Login/login.css';
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Card, Container, Button, Form } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';
const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);

const AddEvidence = () => {

    // const { email, password1, textChange } = formData;
    const [owner, setOwner] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [picture, setPicture] = useState();

    const onFileChange=(file)=>{
        setPicture(file)
    }

    const submit=()=>{
        let formData = new FormData();

        formData.append('owner', owner);
        formData.append('location', location);
        formData.append('date', date);
        formData.append('picture', picture);
        
        console.log(formData)
        window.location.reload(true)   
     }
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col className='col-md-4 mt-4' >
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                        <Card className="frm">
                            <div className="text-center mt-4 mb-4"><h1 className="">Add Evidence</h1></div>
                            <Card.Img varient="top" wdth="200" height="200" src={evidenceImg}></Card.Img>
                            <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
                            <Card.Body>
                                <LocalForm onSubmit={submit}>
                                    <div className="form-group">
                                        <Row><Col className="col-md-4 offset-md-1">
                                            <Form.Label>Owner Name:</Form.Label></Col>
                                            <Col className="col-md-6">
                                                <Control.text
                                                    autoComplete="off"
                                                    autoCorrect="off"
                                                    spellCheck="off"
                                                    model=".owner"
                                                    id="owner"
                                                    className="form-control"
                                                    placeholder="Enter Owner Name"
                                                    value={owner}
                                                    onChange={e => { setOwner(e.target.value) }}
                                                    validators={{
                                                        required
                                                    }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".owner"

                                                    show="touched"
                                                    messages={{
                                                        required: 'Required '
                                                    }}
                                                />
                                            </Col></Row>
                                    </div>
                                    <Row><Col>
                                        <div className="form-group mt-3">
                                            <Row><Col className="col-md-4 offset-md-1"><Form.Label>Location:</Form.Label></Col>
                                                <Col className="col-md-6">
                                                    <Control.text
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        spellCheck="off"
                                                        model=".location"
                                                        type="text"
                                                        id="location"
                                                        className="form-control"
                                                        placeholder="Enter Location"
                                                        value={location}
                                                        onChange={e => { setLocation(e.target.value) }}
                                                        validators={{
                                                            required
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".location"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required'
                                                        }}
                                                    />

                                                </Col></Row>

                                        </div></Col></Row>

                                    <Row><Col>
                                        <div className="form-group mt-3">
                                            <Row><Col className="col-md-4 offset-md-1"><Form.Label>Date:</Form.Label></Col>
                                                <Col className="col-md-6">
                                                    <Control.text
                                                        autoComplete="off"
                                                        autoCorrect="off"
                                                        spellCheck="off"
                                                        model=".date"
                                                        type="date"
                                                        id="date"
                                                        className="form-control"
                                                        // placeholder="Enter Location"
                                                        value={date}
                                                        onChange={e => { setDate(e.target.value) }}
                                                        validators={{
                                                            required
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".date"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required'
                                                        }}
                                                    />

                                                </Col></Row>

                                        </div></Col></Row>

                                    <Row><Col>
                                        <div className="form-group mt-3">
                                            <Row><Col className="col-md-4 offset-md-1"><Form.Label>File:</Form.Label></Col>
                                                <Col className="col-md-6">
                                                    <input type="file" onChange={e=>{onFileChange(e.target.files[0])}}/>

                                                </Col></Row>

                                        </div>
                                    </Col></Row>

                                    <div className="text-center mt-3">
                                        <Button variant="primary" type="submit">Add Evidence</Button>
                                    </div>
                                </LocalForm>
                            </Card.Body>
                        </Card></FadeTransform>
                </Col>
            </Row>
        </Container>
    );
}

export default AddEvidence;

