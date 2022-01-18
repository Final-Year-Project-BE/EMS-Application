import React from "react";
import { NavbarText, UncontrolledDropdown, DropdownToggle, Navbar, DropdownItem, DropdownMenu, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink, Container } from 'reactstrap';
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
              <NavLink className="nav-link active" href="/registeradmin">
                register Admin
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link active" href="/registerevidence">
                register Evidence
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <NavLink href="/components/">
              Logout
            </NavLink>

          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default adminHeader;