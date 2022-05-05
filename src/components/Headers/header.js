import React from "react";
import { NavbarText, Navbar, DropdownItem, DropdownMenu, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink, Container } from 'reactstrap';
import { isAdmin,isAuth} from '../../helpers/auth';
import AdminHeader from './adminHeader'
import UserHeader from './userHeader'
const Header = () => {
  
  if(isAuth() && isAdmin()){
    return < AdminHeader />
  }else{
      return < UserHeader />
  }
 
}

export default Header;