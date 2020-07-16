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
  Jumbotron,
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
import FAQ from "../entraprenureship/faq";

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
    <br />
    <br />
    <h2>Services for Entrepreneurs</h2>
    <Jumbotron>
      <Container>
        <Row>
          <Col sm={4}>
            <h3>01.Mentoring</h3>
            <p style={{ textAlign: "justify" }}>
              Guiding and grooming yourself to see your business become
              profitable and established in the market
            </p>
          </Col>
          <Col sm={4}>
            <h3>02.Incubation</h3>
            <p style={{ textAlign: "justify" }}>
              We provide you work space and all other facilities to grow under
              the roof of Insfra
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
    </Jumbotron>
    <br />

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
    <br />
    <br />
    <br />
    <h2>Why Us?</h2>
    <br />

    <Container>
      <Row>
        <Col sm={4}>
          <WhyUs1 />
          <Card.Title>Startup Experience</Card.Title>
          <Card.Text>
            We know startups by experience. Today, we are a company that
            services USA and Europe with our Search Engine Optimization
            expertise
          </Card.Text>
        </Col>
        <Col sm={4}>
          <WhyUs2 />

          <Card.Title>Our Expertise</Card.Title>
          <Card.Text>
            We have skilled professionals to meet startup needs and
            requirements. Each is equipped with Professional qualifications and
            possesses a successful track record of doing their expert area.
          </Card.Text>
        </Col>
        <Col sm={4}>
          <WhyUs3 />

          <Card.Title>Proven Results</Card.Title>
          <Card.Text>
            We have mentored and given facilities to several startups already
            and they have now become companies who generate revenue from both
            local and international level.
          </Card.Text>
        </Col>

       
        
      </Row>
      <Row>
        <Col>
        <br/>
        <br/>
        <p>
          We are happy parents of newly born Priwoo and Kodex. The ones who took
          the initiative to come to us with a new idea and became entrepreneurs
          under our roof.
        </p>
        </Col>
        </Row>
    </Container>
    <br />
    <h1>FAQs</h1>
    <FAQ />
    <br />
    <br />
  </Layout>
);

export default EntraprenureshipPage;
