import React, { useEffect } from "react";
import { Container, Media, Row, Card, Accordion, Button, Col } from 'react-bootstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCases } from '../../Redux/actions/caseAction';
import DataImg from '../images/data.jpg';
import "../Styles/schemes-style.css";
import '../Styles/components.css';
import {Link, useNavigate} from 'react-router-dom';
import { isAdmin,isAuth } from '../../helpers/auth';
import history from "../../helpers/history";

const ListCases = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCases())
  }, [])
  const cases = useSelector(state => state.case.data);

  console.log(cases)
  const toComponentB=(scase)=>{
    navigate('/case',{state:scase});
    }

  const caseComponent = cases.map((scase) => {
    return (
      <Fade in>
        <Row key={scase._id} className="mt-3 justify-content-center">
            <Accordion defaultActiveKey="0" className="col-md-8 col-sm-8 col-xs-8">
              <Accordion.Item eventKey={scase._id}>
                <Accordion.Header>{ scase.name }</Accordion.Header>
                <Accordion.Body>
                  <p className="mt-3 ml-0">Description : { scase.description }</p>
                  <p className="mt-3 ml-0">Owner Name: { scase.ownerName }</p>
                  <Button onClick={()=>{toComponentB(scase)}}>Know More</Button>
                </Accordion.Body>
              </Accordion.Item>
              
            </Accordion>

        </Row>
      </Fade>
    );
  });

  if(!isAuth()){
    history.push("/login");
    window.location.reload(false);
  }else 
  return (


    <Container fluid className="mt-5 mb-5">
      <Row className="mt-3 mb-3">
        <Col>
          <h2 className="text-center brand">Registered Cases.</h2>
        </Col>
      </Row>

      {cases.length ? <Stagger in>{caseComponent}</Stagger> :
        <div className="text-center mt-5"><h4>No Cases Available</h4>
          <img className="mt-2" src={DataImg} width="300" height="200" /></div>}


    </Container>
  );

}

export default ListCases;
