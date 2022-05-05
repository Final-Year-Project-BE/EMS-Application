import React, { useEffect } from "react";
import { Container, Media, Row, Card, Accordion, Button, Col } from 'react-bootstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { useDispatch, useSelector } from 'react-redux';
import { evidenceFetch } from '../../Redux/actions/evidenceAction';
import {useLocation} from 'react-router-dom';
import DataImg from '../images/data.jpg';
import "../Styles/schemes-style.css";
import '../Styles/components.css';
import {Link, useNavigate} from 'react-router-dom';

import { isAdmin, isAuth } from '../../helpers/auth';
import history from "../../helpers/history";

const ListEvidences = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(evidenceFetch(location.state._id))
  }, [])
  const evidences = useSelector(state => state.evidenceData);

  const toComponentB=(evidence)=>{
    navigate('/evidence',{state:evidence});
    }

  const evidenceComponent = evidences?.data?.evidences?.map((evidence) => {
    return (
      <Fade in>
        <Row key={evidence._id} className="mt-3 justify-content-center">
            <Accordion defaultActiveKey="0" className="col-md-8 col-sm-8 col-xs-8">
              <Accordion.Item eventKey={evidence._id}>
                <Accordion.Header>{ evidence.ownerName }</Accordion.Header>
                <Accordion.Body>
                  <p className="mt-3 ml-0">Description : { evidence.description }</p>
                  <p className="mt-3 ml-0">Owner Name: { evidence.ownerName }</p>
                  <p className="mt-3 ml-0">Location: { evidence.location }</p>
                  <Button onClick={()=>{toComponentB(evidence)}}>Know More</Button>
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
          <h2 className="text-center brand">Registered Evidences.</h2>
        </Col>
      </Row>

      {evidences?.data?.evidences?.length ? <Stagger in>{evidenceComponent}</Stagger> :
        <div className="text-center mt-5"><h4>No Evidences Available</h4>
          <img className="mt-2" src={DataImg} width="300" height="200" /></div>}


    </Container>
  );

}

export default ListEvidences;
