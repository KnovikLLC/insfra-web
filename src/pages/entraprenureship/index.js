import React from "react";
import {
  Card,
  Button,
  CardDeck,
  Carousel,
  Accordion,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import One from "../../components/images/entreprenureship/1";
import Two from "../../components/images/entreprenureship/2";
import Three from "../../components/images/entreprenureship/3";
import WhyUs1 from "../../components/images/entreprenureship/startup";
import WhyUs2 from "../../components/images/entreprenureship/expertise";
import WhyUs3 from "../../components/images/entreprenureship/proven";
import Entrepreneurship from "../../components/images/entreprenureship/entre";
import Freelancing from "../../components/images/entreprenureship/free";
import OESL from "../../components/images/entreprenureship/oesl";
import Aukod from "../../components/images/entreprenureship/aukod";
import OutSmartHub from "../../components/images/entreprenureship/outsmart";
import Builtapps from "../../components/images/entreprenureship/builtapps";

const EntraprenureshipPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Entrepreneurship</h1>
    <Carousel>
      <Carousel.Item>
        <One />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Two />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Three />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br />

    <br />
    <br />

    <br />
    <Container>
      <p style={{ textAlign: "justify" }}>
        We help community to craft themselves into digital entrepreneurs with
        ideas, knowledge and techniques
      </p>
      <Row>
        <Col sm={6}>
          <Entrepreneurship />
        </Col>
        <Col sm={6}>
          <Freelancing />
        </Col>
      </Row>
    </Container>
    <br />

    <br />
    <h2>Services for Entrepreneurs</h2>

    <br />
    <Container>
      <Row>
        <Col sm={4}>
          <h3>01.Mentoring</h3>
          <p style={{ textAlign: "justify" }}>
            Guiding and grooming yourself to see your business become profitable
            and established in the market
          </p>
        </Col>
        <Col sm={4}>
          <h3>02.Incubation</h3>
          <p style={{ textAlign: "justify" }}>
            We provide you work space and all other facilities to grow under the
            roof of Insfra
          </p>
        </Col>
        <Col sm={4}>
        <h3>03.Webinars / Trainings</h3>
          <p style={{ textAlign: "justify" }}>
          We delivers you online webinars/trainings to those who have
          determination to be entrepreneurs
          </p>
        </Col>
      </Row>
    </Container>

    
    

    <br />
    <br />
    <h2>Partnership Companies/Startups</h2>
    <br />
    <Container>
      <Row>
        <Col sm={3}>
          <OESL />
          <br />
          <h3>OECSL</h3>
          <p style={{ textAlign: "justify" }}>
            Online Entrepreneurs’ Club Sri Lanka is the largest entrepreneurial
            community on Facebook platform. The Club has been designed to cater
            both emerging and existing entrepreneurs while by connecting them
            together
          </p>
        </Col>
        <Col sm={3}>
          <Aukod />
          <br />
          <h3>Aukod</h3>
          <p style={{ textAlign: "justify" }}>
            Aukod is an international app based news provider that delivers a
            range of news in different areas such as psychology, health,
            cooking, relationships, people etc.
          </p>
        </Col>
        <Col sm={3}>
          <Builtapps />
          <br />
          <h3>Built Apps</h3>
          <p style={{ textAlign: "justify" }}>
            Built Apps is an App and Game development company which designs
            experience based apps. So far it has been able to reach global
            audience with its game and app developing expertise.
          </p>
        </Col>
        <Col sm={3}>
          <OutSmartHub />

          <br />
          <h3>OutSmart Hub</h3>
          <p style={{ textAlign: "justify" }}>
            OutSmart Hub is a New Zealand based software solution company which
            addresses both local and international markets with its expertise in
            Software Development.
          </p>
        </Col>
      </Row>
    </Container>
    <br />
    <CardDeck>
      <h2 align="center">Why Us?</h2>
      <br />

      <CardDeck>
        <Card>
          <WhyUs1 />
          <Card.Body>
            <Card.Title>Startup Experience</Card.Title>
            <Card.Text>
              We know startups by experience. Today, we are a company that
              services USA and Europe with our Search Engine Optimization
              expertise
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <WhyUs2 />
          <Card.Body>
            <Card.Title>Our Expertise</Card.Title>
            <Card.Text>
              We have skilled professionals to meet startup needs and
              requirements. Each is equipped with Professional qualifications
              and possesses a successful track record of doing their expert
              area.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <WhyUs3 />
          <Card.Body>
            <Card.Title>Proven Results</Card.Title>
            <Card.Text>
              We have mentored and given facilities to several startups already
              and they have now become companies who generate revenue from both
              local and international level.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <br />
      <p>
        We are happy parents of newly born Priwoo and Kodex. The ones who took
        the initiative to come to us with a new idea and became entrepreneurs
        under our roof.
      </p>
    </CardDeck>

    <h1>FAQs</h1>
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Button}
          eventKey="0"
          style={{
            backgroundColor: "#FDFDFE",
            color: "#000000",
            borderColor: "#FDFDFE",
            textAlign: "left",
          }}
        >
          What is Startup Hub?
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Startup Hub is a group of entrepreneurs registered under the roof of
            Insfra Technologies. By registering, you will be able to turn your
            business idea into a reality, get mentored, transfer knowledge,
            share experience and grow with Insfra Technologies.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Accordion.Toggle
          as={Button}
          eventKey="1"
          style={{
            backgroundColor: "#FDFDFE",
            color: "#000000",
            borderColor: "#FDFDFE",
            textAlign: "left",
          }}
        >
          How to Register?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Simple. Click “Register for Entrepreneurship” and follow the steps.
            This link is also available in the Entrepreneurship page of the
            site.{" "}
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Accordion.Toggle
          as={Button}
          eventKey="2"
          style={{
            backgroundColor: "#FDFDFE",
            color: "#000000",
            borderColor: "#FDFDFE",
            textAlign: "left",
          }}
        >
          Do I need to pay for the Startup Hub services?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            No. You will not have to pay for the entitled benefits.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Accordion.Toggle
          as={Button}
          eventKey="3"
          style={{
            backgroundColor: "#FDFDFE",
            color: "#000000",
            borderColor: "#FDFDFE",
            textAlign: "left",
          }}
        >
          Do I have to travel to Uva for registrations?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>No. You may reach us via email.</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </Layout>
);

export default EntraprenureshipPage;
