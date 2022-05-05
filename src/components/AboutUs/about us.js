import React from "react";
import mehul from './images/mehul.jpg';
import rohit from './images/rohit1n.jpg';
import sunny from './images/sunny1.jpg';
import harsh from './images/harsh.jpg';
import Cards from './card';
import './card-style.css';
import { Row, Col, Container } from 'react-bootstrap';
class Village extends React.Component {
  render() {
    return (
      <Container fluid className="mb-5">
        <Row className="d-flex justify-content-center text-center">
          <Col className="mt-5">
            <h2 className="head brand">Team Baltic Knights.</h2>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center text-center mt-5">
          <Col className="col-md-3 col-sm-10 col-xs-10">
            <Cards imgsrc={rohit}
              name="Rohit Naikade."
              designation="Full Stack Developer."
              profile="MERN stack Application development."
              github="https://github.com/RohitNaikade264"
              instagram="https://www.instagram.com/bhole_sarkar._/"
              twitter="https://twitter.com/BholeSarkar3"
              facebook="https://www.facebook.com/rohit.naikade.37"
            />
          </Col>
          <Col className="col-md-3 col-sm-10 col-xs-10">
            <Cards imgsrc={mehul}
              name="Mehul Lokhande."
              designation="Backend Develoment."
              profile="Lead Programmer."
              github="https://github.com/MEHUL25"
              instagram="https://www.instagram.com/mehullokhande.js/"
              twitter=""
              facebook="https://m.facebook.com/mehul.lokhande.39?ref=bookmarks"
            />
          </Col>
          <Col className="col-md-3 col-sm-10 col-xs-10">
            <Cards imgsrc={sunny}
            name="Sunny Dhadiwal."
            designation="Blockchain & Encryption Integration."
            profile="Database Expert."
            github=""
            instagram=""
            twitter=""
            facebook="" />
          </Col>
          <Col className="col-md-3 col-sm-10 col-xs-10">
            <Cards imgsrc={harsh} 
            name="Govind Madankar."
            designation="Team Leader."
            profile="Python Developer." 
            github=""
            instagram=""
            twitter=""
            facebook=""/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Village;