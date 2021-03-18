import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            HOME
          </NavLink>
          <NavLink to="/services" activeStyle>
            SERVICES
          </NavLink>
          <NavLink to="/projects" activeStyle>
            OUR PROJECTS
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            CONTACT US
          </NavLink>

          <NavLink to="/num" activeStyle>
            &#9742;__+91 9948171190
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
