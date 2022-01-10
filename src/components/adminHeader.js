import React, { useEffect } from 'react'
import { Container, Nav, Navbar, NavDropdown, Button, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from 'react-notifications-component';

const Header = (props) => {

    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home"><h3 className="text-white">EMS</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="text-white" href="#link">Login</Nav.Link>
                    <Nav.Link className="text-white float-right" href="#link">Register Evidence</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;