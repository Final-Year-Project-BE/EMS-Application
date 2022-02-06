import React from "react";
import { NavbarText, Navbar, DropdownItem, DropdownMenu, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink, Container } from 'reactstrap';

const adminHeader = () => {
  return (
    <div>
      <Navbar
        color="dark"
        expand="md"
        dark
      >
        <NavbarBrand href="/">
          EMS
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink className="nav-link active" href="/cases">
                Cases
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link active" href="/registerevidence">
                Verifications
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link active" href="/registerevidence">
                About us
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <button type="button" class="btn btn-outline-success btn-sm">
              <NavLink className="nav-link active" href="/login">
                <span>Login</span>
              </NavLink>
            </button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default adminHeader;