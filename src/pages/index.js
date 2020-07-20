import React from "react";
import { Link } from "gatsby";
import { Card, Row, Col, CardDeck, Container, Image } from "react-bootstrap";
import Layout from "../components/homeLayout.js";

import SEO from "../components/seo";
import Seoimage from "../components/images/home/seoimage";
import Entraimage from "../components/images/home/entraimage";
import BackgroundImage from "gatsby-background-image";
import { graphql } from "gatsby";
import "../components/css/homebackground.css";

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    {/* <BackgroundImage
      fluid={props.data.indexImage.childImageSharp.fluid}
      className="masthead"
    > */}
    <div>
      <div className="content-box">
        <Container className="content-box">
          <Row>
            <Col sm={6}>
              <Seoimage />
              <br />
              {/* <Image src="http://localhost:8000/static/b21ff96f51a61917890eda6ff0c61ad0/37d5a/seo.png" /> */}
              <h2>Come on in !</h2>
              <p>
                {" "}
                All who want to be ranked in Search Engine/App Store & Play
                Store
              </p>
              <div style={{ textAlign: "center" }}>
                <Link
                  to="/seo"
                  type="button"
                  className="myButton"
                  style={{ width: "80%", fontSize: "25px" }}
                >
                  
                     SEO/ASO Service
                 
                </Link>
              </div>
            </Col>
            <Col sm={6}>
              <Entraimage />
              <br />
              {/* <Image src="http://localhost:8000/static/b21ff96f51a61917890eda6ff0c61ad0/37d5a/seo.png" /> */}
              <h2>Welcome board !</h2>
              <p>
                {" "}
                All who are passionate to form a business of their own and earn
              </p>
              <br />
              <div style={{ textAlign: "center" }}>
                <Link
                  to="/entraprenureship"
                  type="button"
                  className="myButton"
                  style={{ width: "80%", fontSize: "25px" }}
                >
                  Entrepreneurship Service
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    {/* </BackgroundImage> */}

    {/* <CardDeck>
      <Card
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
        }}
      >
        <Card.Body>
          <h1 style={{ marginTop: "5px" }}>SEO/ASO</h1>
          <Card.Text
            style={{
              textAlign: "justify",
              fontWeight: "600",
              fontSize: "30px",
            }}
          >
            Come on in !
          </Card.Text>
          <Card.Text>
            All who want to be ranked in Search Engine/App Store & Play Store
          </Card.Text>

          <Seoimage />
          <br />
          <div style={{ textAlign: "center" }}>
            <Link to="/seo">
              <div className="card-body gradient-buttons">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "100%", fontSize: "25px" }}
                >
                  {" "}
                  Explore SEO/ASO Service
                </button>
              </div>
            </Link>
          </div>
        </Card.Body>
      </Card>
      <Card
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
        }}
      >
        <Card.Body>
          <h1 style={{ marginTop: "5px" }}>Entrepreneurship</h1>
          <Card.Text
            style={{
              textAlign: "justify",
              fontWeight: "600",
              fontSize: "30px",
            }}
          >
            Welcome board !
          </Card.Text>
          <Card.Text>
            All who are passionate to form a business of their own and earn
          </Card.Text>
          <br />
          <Entraimage />

          <br />
          <div style={{ textAlign: "center" }}>
            <Link to="/entraprenureship">
              <div className="card-body gradient-buttons">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "100%", fontSize: "25px" }}
                >
                  {" "}
                  Explore Entrepreneurship Service
                </button>
              </div>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </CardDeck> */}

    {/* <Row style={{marginBottom:"0px important", backgroundColor:"red"}}><footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer></Row> */}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "home/homebg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
