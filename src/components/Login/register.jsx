import React, { useState } from "react";
import loginImg from "./login.svg";
import './login.css';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Card, Container, Form, Button } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validName = (val) => /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/i.test(val);

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [UID, setUID] = useState("");

  // const handleSubmit = (values) => {
  //   console.log(name, email, UID, password1, password2);
  //   const regData = {
  //     name,
  //     email,
  //     UID: Number(UID),
  //     password: password1
  //   }
  //   if (password1 === password2) {
  //     axiosInstance.post('user/signup', regData)
  //       .then(res => {
  //         store.addNotification({
  //           title: `${res.data.message}`,
  //           message: 'Check your mailbox for account activation!',
  //           type: "success",
  //           container: 'top-right',
  //           animationIn: ["animated", "fadeIn"],
  //           animationOut: ["animated", "fadeOut"],
  //           dismiss: {
  //             duration: 3000,
  //             showIcon: true
  //           }
  //         })
  //         window.location.reload(false);
  //       })
  //       .catch(err => {
  //         store.addNotification({
  //           title: `${err.response.data.error}`,
  //           message: 'Try again with another account!',
  //           type: "danger",
  //           container: 'top-right',
  //           animationIn: ["animated", "fadeIn"],
  //           animationOut: ["animated", "fadeOut"],
  //           dismiss: {
  //             duration: 3000,
  //             showIcon: true
  //           }
  //         })
  //         window.location.reload(false);
  //       })
  //   } else {
  //     store.addNotification({
  //       title: 'Passwords are not matching!',
  //       message: 'Please enter same passwords!',
  //       type: "danger",
  //       container: 'top-right',
  //       animationIn: ["animated", "fadeIn"],
  //       animationOut: ["animated", "fadeOut"],
  //       dismiss: {
  //         duration: 3000,
  //         showIcon: true
  //       }
  //     })
  //   }
  // }
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className='col-md-5 mt-3'>
        <FadeTransform
            in
            transformProps={{
              exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card className="frm">
              <div className="text-center mt-4 mb-4"><h1 className="">Register</h1></div>
              <Card.Img varient="top" src={loginImg}></Card.Img>
              <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
              <Card.Body>
                <LocalForm>
                  <Row><Col>
                    <div className="form-group">
                      <Row><Col className="col-md-5 offset-md-1">
                        <Form.Label>Email Address:</Form.Label>
                      </Col>
                        <Col className="col-md-6">
                          <Control.text
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="off"
                            model=".email"
                            id="email"
                            value={email}
                            className="form-control"
                            placeholder="Enter Your Email Id"
                            onChange={(e) => setEmail(e.target.value)}
                            validators={{
                              required, validEmail
                            }} />
                          <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            messages={{
                              required: 'Required ',
                              validEmail: 'Enter a valid email address!'
                            }}
                          />
                        </Col></Row>
                    </div></Col></Row>
                  <Row><Col>
                    <div className="form-group mt-3">
                      <Row><Col className="col-md-5 offset-md-1">
                        <Form.Label>Password:</Form.Label>
                      </Col>
                        <Col className="col-md-6">
                          <Control.text
                            model=".password"
                            type="password"
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="off"
                            id="password"
                            className="form-control"
                            placeholder="Enter Your Password"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                            validators={{
                              required, minLength: minLength(8)
                            }} />
                          <Errors
                            className="text-danger"
                            model=".password"
                            show="touched"
                            messages={{
                              required: 'Required ',
                              minLength: 'Password should be greater than 8 characters!'
                            }}
                          />
                        </Col></Row>
                    </div></Col></Row>
                  <Row><Col>
                    <div className="form-group mt-3">
                      <Row><Col className="col-md-5 offset-md-1">
                        <Form.Label>Confirm Password:</Form.Label>
                      </Col>
                        <Col className="col-md-6">
                          <Control.text
                            model=".rpassword"
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="off"
                            id="rpassword"
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            validators={{
                              required, minLength: minLength(8)
                            }} />
                          <Errors
                            className="text-danger"
                            model=".rpassword"
                            show="touched"
                            messages={{
                              required: 'Required ',
                              minLength: 'Password should be greater than 8 characters!'
                            }}
                          />
                        </Col></Row>
                    </div></Col></Row>
                  <div className="text-center mt-3"><Button variant="primary" type="submit">Register</Button></div>
                </LocalForm>
              </Card.Body>
            </Card></FadeTransform>
        </Col>
      </Row>
    </Container>
  );
}
export default Register;