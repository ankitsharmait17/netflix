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

const NavBar = ({ searchText, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleChange = e => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <React.Fragment>
      <Navbar
        style={{ backgroundColor: "#231f1e" }}
        expand="md"
        fixed="top"
        id="navbar-lg"
      >
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
                value={searchText}
                onChange={handleChange}
              />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
