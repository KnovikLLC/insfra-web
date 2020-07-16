import React from "react";

import { Calendar2, GeoAlt, Tag } from "react-bootstrap-icons";

import {
  Card,
  Nav,
  CardDeck,
  Tabs,
  Tab,
  Row,
  Col,
  Container,
  Image
} from "react-bootstrap";
import Layout from "../../components/layout";

import SEO from "../../components/seo";

const CareersPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Join Team Insfra</h1>
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="ALL">
        <br />
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="http://insfra.com/assets/img/WebDevelopment.png"
            />
            <Card.Body>
              <Card.Text>
                <span style={{ color: "#0D54C1 " }}>Web Development </span>
              </Card.Text>
              <Card.Title>Web Development Trainee</Card.Title>
              <Card.Text>
                We are looking for a web developer with experience in HTML, CSS,
                and JavaScript.
              </Card.Text>
              <footer className="text-muted">
                &nbsp; <GeoAlt size={18} /> Insfra Colombo
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </footer>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="http://insfra.com/assets/img/AppDevelopment.png"
            />
            <Card.Body>
              <Card.Text>
                <span style={{ color: "#0D54C1 " }}>Mobile Development </span>
              </Card.Text>
              <Card.Title>iOS / Android Developer</Card.Title>
              <Card.Text>
                There is an opportunity for a mobile developer who is
                experienced in both iOS and Android mobile app development
                skills.
              </Card.Text>
              <footer className="text-muted">
                &nbsp; <GeoAlt size={18} />
                Insfra Colombo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </footer>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="http://insfra.com/assets/img/WebDevelopment.png"
            />
            <Card.Body>
              <Card.Text>
                <span style={{ color: "#0D54C1 " }}>Web Development </span>
              </Card.Text>
              <Card.Title>Associate Web Developer</Card.Title>
              <Card.Text>
                We are looking for a talented web developer with React.Js and
                PHP development skills.
              </Card.Text>
              <footer className="text-muted">
                &nbsp; <GeoAlt size={18} />
                Insfra Colombo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </footer>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="http://insfra.com/assets/img/DigitalMarketing.png"
            />
            <Card.Body>
              <Card.Text>
                <span style={{ color: "#0D54C1 " }}>Marketing </span>
              </Card.Text>
              <Card.Title>Associate Marketing Executive</Card.Title>
              <Card.Text>
                Insfra Technologies joined with Uva Startup Hub and the USH
                office is at Insfra HQ.
              </Card.Text>
              <footer className="text-muted">
                &nbsp; <GeoAlt size={18} />
                Insfra Colombo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </footer>
            </Card.Body>
          </Card>
        </CardDeck>
      </Tab>
      <Tab eventKey="profile" title=" DIGITAL MARKETING">
        <br />
        <Container>
          <Row>
            <Col sm={3}>
              <CardDeck>
                <Card>
                  <Card.Img
                    variant="top"
                    src="http://insfra.com/assets/img/DigitalMarketing.png"
                  />
                  <Card.Body>
                    <Card.Text>
                      <span style={{ color: "#0D54C1 " }}>Marketing </span>
                    </Card.Text>
                    <Card.Title>Associate Marketing Executive</Card.Title>
                    <Card.Text>
                      Insfra Technologies joined with Uva Startup Hub and the
                      USH office is at Insfra HQ.
                    </Card.Text>
                    <footer className="text-muted">
                      &nbsp; <GeoAlt size={18} />
                      Insfra Colombo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </footer>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="mobile" title="MOBILE DEVELOPMENT">
        <br />
        <Container>
          <Row>
            <Col sm={3}>
              <CardDeck>
                <Card>
                  <Card.Img
                    variant="top"
                    src="http://insfra.com/assets/img/AppDevelopment.png"
                  />
                  <Card.Body>
                    <Card.Text>
                      <span style={{ color: "#0D54C1 " }}>
                        Mobile Development{" "}
                      </span>
                    </Card.Text>
                    <Card.Title>iOS / Android Developer</Card.Title>
                    <Card.Text>
                      There is an opportunity for a mobile developer who is
                      experienced in both iOS and Android mobile app development
                      skills.
                    </Card.Text>
                    <footer className="text-muted">
                      &nbsp; <GeoAlt size={18} />
                      Insfra Colombo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </footer>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="web" title="WEB DEVELOPMENT">
        <br />
        <Container>
          <Row>
            <Col sm={3}>
              <CardDeck>
                <Card>
                  <Card.Img
                    variant="top"
                    src="http://insfra.com/assets/img/WebDevelopment.png"
                  />
                  <Card.Body>
                    <Card.Text>
                      <span style={{ color: "#0D54C1 " }}>
                        Web Development{" "}
                      </span>
                    </Card.Text>
                    <Card.Title>Associate Web Developer</Card.Title>
                    <Card.Text>
                      We are looking for a talented web developer with React.Js
                      and PHP development skills.
                    </Card.Text>
                    <footer className="text-muted">
                      &nbsp; <GeoAlt size={18} />
                      Insfra Colombo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </footer>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="uiux" title="UI/UX"></Tab>
    </Tabs>
    
    <br />
    <br />
    <Image src="https://infoworker.no/app/uploads/2019/08/Collaboration-768x468-1.png" alt="Team" width="100%" height="100%"/>
    <Container>
      <Row>
        <Col style={{ textAlign: "center" }} sm={6}>
          <h1 style={{ textAlign: "center" }}>hello@insfra.com</h1>

          <p style={{ textAlign: "center" }}>
            We welcome your inquiries and calls for quotations. Email us now to
            let us help you best in your business
          </p>
          <div className="card-body gradient-buttons">
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "50%", textAlign: "center" }}
            >
              {" "}
              Contact Now
            </button>
          </div>
        </Col>
        <Col sm={6}>
          <h1 style={{ textAlign: "center" }}>
            To make requests for further information, Do not hesitate to contact
            us.
          </h1>
        </Col>
      </Row>
    </Container>

    <br />
  </Layout>
);

export default CareersPage;
