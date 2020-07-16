import React from "react";

import {
  Calendar2,
  GeoAlt,
  Tag,
  Envelope,
  Telephone,
} from "react-bootstrap-icons";

import {
  Image,
  Card,
  Nav,
  CardDeck,
  Tabs,
  Tab,
  Row,
  Col,
  Container,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";
import Layout from "../../components/layout";

import SEO from "../../components/seo";

const CareersPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Contact Us</h1>

    <br />
    <Container>
      <Row>
        <Col style={{ textAlign: "center" }} sm={6} md={6}>
          <br />
          <br />

          <ListGroup>
            <ListGroup.Item>
              <span
                style={{
                  textAlign: "justify",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                hello@insfra.com
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span
                style={{
                  textAlign: "justify",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                +94 55 229 3141
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span
                style={{
                  textAlign: "justify",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                HQ : 213, Colombo Rd, Sinhapura, Badulla, Sri Lanka.
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span
                style={{
                  textAlign: "justify",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                R&D : 16/2A, 2/1, Meegahawatte Rd, Gangodawila, Nugegoda, Sri
                Lanka.
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span
                style={{
                  textAlign: "justify",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                Support : 64/2, Thappawaththa Road, Godigamuwa, Maharagama, Sri
                Lanka.
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6} md={6}>
          <Image
            src="https://www.mspmbeed.com/sites/default/files/upload/contact-img.png"
            alt="Contact"
          />
        </Col>
      </Row>
    </Container>
    <br />
    <br />
    <h2>Need a better response?</h2>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group controlId="formGridState">
        <Form.Label>Entrepreneurship Help</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option>SEO</option>
          <option>ASO</option>
          <option>Other Request</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Message..." />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit now
      </Button>
    </Form>
    <br />
  </Layout>
);

export default CareersPage;
