import React from "react";
import { Container, Image } from "react-bootstrap";
import Header from "./Headers/adminHeader";
import Court from "./images/court.jpg"
function Home () {
    return (

        <div>
            <Container>
                <h1 className="mt-5">Digital Evidence Management System.</h1>
                <img
                    className="d-block h-50 w-100 image mt-3"
                    src={Court}
                    alt="village"
                />
            </Container>

        </div>


    )
}

export default Home;