/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Container, Col } from "react-bootstrap";
import Header from "./homeHeader.js";
import "./layout.css";
import { Button, Nav, Navbar } from "react-bootstrap";

import FacebookLogo from "../images/social/facebook.png";
import InstagramLogo from "../images/social/instagram.png";
import PinterestLogo from "../images/social/pinterest.png";
import TwitterLogo from "../images/social/twitter.png";
import YoutubeLogo from "../images/social/youtube.png";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery1 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div
        style={{
          margin: `auto auto`,
          maxWidth: 'auto',
          // padding: `0 0.0875rem 1.45rem`,
        }}
      >
       
        <main>{children}</main>
        {/* <Container style={{marginBottom:"0 important"}}><Row><footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer></Row></Container> */}
      </div>
      <footer>
        <div className="commonFooter" >
          <Row>
            <Col md={9}>
              <Navbar bg="dark" variant="dark" expand="lg" >
                <Navbar.Brand href="/"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto" style={{ fontSize: "25px" }}>
                    <Nav.Link href="/">Home</Nav.Link>

                    <Nav.Link style={{ marginLeft: "30px" }} href="/seo">
                      SEO/ASO
                    </Nav.Link>
                    <Nav.Link
                      style={{  }}
                      href="/entraprenureship/"
                    >
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
            </Col>

            <h5>Follow us</h5>
            <Col style={{ marginTop: "15px" }}>
              <a href="https://www.facebook.com/InsfraTechnologies/">
                <img
                  src={FacebookLogo}
                  style={{ width: "32px", margin: "10px" }}
                ></img>
              </a>
              <a href="https://www.pinterest.com/">
                <img
                  src={PinterestLogo}
                  style={{ width: "32px", margin: "10px" }}
                ></img>
              </a>
              <a href="https://twitter.com/InsfraConnect">
                <img
                  src={TwitterLogo}
                  style={{ width: "32px", margin: "10px" }}
                ></img>
              </a>
              <a href="https://www.youtube.com/channel/UCv22BcKsQOI7GYSXNkHXeKA">
                <img
                  src={YoutubeLogo}
                  style={{ width: "32px", margin: "10px" }}
                ></img>
              </a>
              <a href="https://www.instagram.com/">
                <img
                  src={InstagramLogo}
                  style={{
                    width: "32px",
                    margin: "10px",
                    borderRadius: "50px",
                  }}
                ></img>
              </a>
            </Col>
          </Row>
          <hr />

          <Row className="justify-content-md-center text-center">
            © {new Date().getFullYear()} | Insfra technologies{` `}
          </Row>
          <br />
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
