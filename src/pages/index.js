import React from "react";
import { Link } from "gatsby";

import { Card, CardGroup, Container, Row, Col, Button } from "react-bootstrap";
import Layout from "../components/homeLayout.js";
import Image from "../components/image";
import SEO from "../components/seo";
import Seoimage from "../components/images/home/seoimage";
import Entraimage from "../components/images/home/entraimage";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Row>
      <Col>
        <CardGroup>
          <Card style={{ backgroundColor: "#ffe0b2" }}>
            <Card.Body>
              <Seoimage />
              <Card.Title as={"h2"}>SEO</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <div style={{ textAlign: "center" }}>
                <Link to="/seo">
                  <Button variant="primary">Explore SEO Service</Button>{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ backgroundColor: "#ffe0b2" }}>
            <Card.Body>
              <Entraimage />
              <Card.Title as={"h2"}>Entraprenureship</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <div style={{ textAlign: "center" }}>
                <Link to="/entraprenureship">
                  <Button variant="primary">
                    Explore Entraprenureship Service
                  </Button>{" "}
                </Link>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    </Row>
    {/* <Row style={{marginBottom:"0px important", backgroundColor:"red"}}><footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer></Row> */}
  </Layout>
);

export default IndexPage;
