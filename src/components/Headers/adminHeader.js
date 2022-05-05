import React from "react";
import { NavbarText, Navbar, DropdownItem, DropdownMenu, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink, Container } from 'reactstrap';
import { isAdmin,isAuth,logout} from '../../helpers/auth';
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
              <NavLink className="nav-link active" href="/addcase">
                Add case
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink className="nav-link active" href="/userrequests">
                User Requests
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link active" href="/evidencerequests">
                Evidence Requests
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link active" href="/aboutus">
                About us
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
          {isAuth()?<button type="button" onClick={e=>logout()} class="btn btn-outline-danger btn-sm">
              <NavLink className="nav-link active" href="/login">
                <span>Logout</span>
              </NavLink>
            </button>:
            <button type="button" class="btn btn-outline-success btn-sm">
              <NavLink className="nav-link active" href="/login">
                <span>Login</span>
              </NavLink>
            </button>}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default adminHeader;