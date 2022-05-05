import React, { useState } from "react";
import loginImg from "./login.svg";
import './login.css';
import jwt from 'jwt-decode';
import axiosInstance from '../../helpers/axios';
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Card, Container, Button, Form } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import history from '../../helpers/history'
toast.configure()

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const Login = () => {

  const [email, setEmail] = useState("")
  const [password1, setPassword1] = useState("")

  const doLogin = () => {
    const regData = {
      email,
      password: password1
    }
    
    axiosInstance.post('user/signin', regData)
      .then(res => {

        const user = jwt(res.data.token); // decode your token here
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user));

        toast.success(res.data.message, { position: toast.POSITION.TOP_RIGHT })
      })
      .catch(err => {
        toast.error("Signin failed!", { position: toast.POSITION.TOP_RIGHT })
      })
      setTimeout(() => { 
        history.push('/')

        window.location.reload(false);
    }, 5000);
  }

  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col className='col-md-5 mt-3' >
          <FadeTransform
            in
            transformProps={{
              exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card className="frm">
              <div className="text-center mt-4 mb-4"><h1 className="">Login</h1></div>
              <Card.Img varient="top" src={loginImg}></Card.Img>
              <div className="text-center mt-4 mb-4"><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span><span className="fa fa-star fa-lg mr-2"></span></div>
              <Card.Body>
                <LocalForm onSubmit={e => doLogin()}>
                  <div className="form-group">
                    <Row><Col className="col-md-4 offset-md-1">
                      <Form.Label>Email Id:</Form.Label></Col>
                      <Col className="col-md-6">
                        <Control.text
                          autoComplete="off"
                          autoCorrect="off"
                          spellCheck="off"
                          model=".email"
                          id="email"
                          className="form-control"
                          placeholder="Enter Your Email Id"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          validators={{
                            required, validEmail
                          }}
                        />
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
                  </div>
                  <Row><Col>
                    <div className="form-group mt-3">
                      <Row><Col className="col-md-4 offset-md-1"><Form.Label>Password:</Form.Label></Col>
                        <Col className="col-md-6">
                          <Control.text
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck="off"
                            model=".password"
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter Your Password"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                            validators={{
                              required, minLength: minLength(8)
                            }}
                          />
                          <Errors
                            className="text-danger"
                            model=".password"
                            show="touched"
                            messages={{
                              required: 'Required ',
                              minLength: 'Password should be greater than 8 characters!'
                            }}
                          />
                          <Link to="/forgotPassword">
                            <p className="float-right text-dark font-italic mt-2">Forgot Password?</p>
                          </Link>
                        </Col></Row>

                    </div></Col></Row>

                  <div className="text-center mt-2">
                    <Button variant="primary" type="submit">Login</Button>
                  </div>
                </LocalForm>
              </Card.Body>
            </Card></FadeTransform>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

