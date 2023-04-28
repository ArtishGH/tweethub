import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <div className="bar">
      <h2>
      <>
        <Nav>
          <NavMenu>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
            <NavLink to="/contact" activeStyle>
              Contact
            </NavLink>
            <NavLink to="/login" activeStyle>
              Login
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
              Sign Up
            </NavLink>
          </NavMenu>
        </Nav>
      </>
      </h2>
    </div>
  );
};

export default Navbar;
