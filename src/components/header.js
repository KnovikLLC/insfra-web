import PropTypes from "prop-types";
import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";


const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="/">
      <img
        id="navbar-logo"
        alt="Insfra Logo"
        src="https://insfra.com/assets/img/logo.png"
        width="200px"
        height="50px"
       
        className="d-inline-block"
      />
    </Navbar.Brand>
  
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        className="mr-auto"
        style={{ fontSize: "20px" }}
      >
        <Nav.Link href="/">Home</Nav.Link>

        <Nav.Link style={{  }} href="/seo">
          SEO/ASO
        </Nav.Link>
        <Nav.Link style={{  }} href="/entraprenureship/">
        Entrepreneurship
        </Nav.Link>
        <Nav.Link style={{  }} href="/ourteam/">
          Our Team
        </Nav.Link>
        <Nav.Link style={{  }} href="/careers/">
          Careers
        </Nav.Link>
        <Nav.Link style={{  }} href="/about/">
          About Us
        </Nav.Link>
        <Nav.Link style={{  }} href="/contact/">
          Contact Us
        </Nav.Link>
      </Nav>
      {/* <Button href="/explore/" variant="success">
        Explore Website
      </Button> */}
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
