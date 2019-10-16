import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Input
} from "reactstrap";
import logo from "../logo.jpg";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar dark expand="md" fixed="top" id="navbar-lg">
        <NavbarBrand href={"/"}>
          <img src={logo} alt="Netflix" width="32px" height="32px" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Input
                type="text"
                style={{ color: "white", backgroundColor: "#181a19" }}
                placeholder="Search"
              />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
