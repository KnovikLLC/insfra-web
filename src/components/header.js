import PropTypes from "prop-types";
import React from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="/">
      <div style={{ margin: "0px 70px 0px 0px" }}>
        <img
          id="navbar-logo"
          alt="Insfra Logo"
          src="https://insfra.com/assets/img/logo.png"
          width="200px"
          height="50px"
          className="d-inline-block"
        />
      </div>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" style={{ fontSize: "20px" }}>
        <Nav.Link style={{}} href="/about/">
          About Us
        </Nav.Link>
        <NavDropdown title="Our Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="/seo"> SEO/ASO</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/entraprenureship/">
            Entrepreneurship
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link style={{}} href="/news/">
          News & Events
        </Nav.Link>
        <Nav.Link style={{}} href="/blog/">
          Blog
        </Nav.Link>

        <Nav.Link style={{}} href="/careers/">
          Careers
        </Nav.Link>

        <Nav.Link style={{}} href="/contact/">
          Contact Us
        </Nav.Link>
      </Nav>
      <Button
        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=hello@insfra.com"
        variant="primary"
      >
        Write to Insfra
      </Button>
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
