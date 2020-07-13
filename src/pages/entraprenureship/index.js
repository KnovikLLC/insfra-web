import React from "react";
import { Link } from "gatsby";
import { ArrowRightCircle, Award } from "react-bootstrap-icons";

import {
  Card,
  CardGroup,
  Container,
  Row,
  Col,
  Button,
  CardDeck,
  Carousel,
  Alert,
  Jumbotron,
  Accordion,
} from "react-bootstrap";
import Layout from "../../components/layout";
import Image from "../../components/image";
import SEO from "../../components/seo";

import One from "../../components/images/entreprenureship/1";
import Two from "../../components/images/entreprenureship/2";
import Three from "../../components/images/entreprenureship/3";

import WhyUs1 from "../../components/images/entreprenureship/startup";
import WhyUs2 from "../../components/images/entreprenureship/expertise";
import WhyUs3 from "../../components/images/entreprenureship/proven";
import Entrepreneurship from "../../components/images/entreprenureship/entre";
import Freelancing from "../../components/images/entreprenureship/free";

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
    <CardDeck>
      <Card>
        <Entrepreneurship />
      </Card>
      <Card>
        <Freelancing />
      </Card>
    </CardDeck>
    <br />
    <p style={{ textAlign: "justify" }}>
      We help community to craft themselves into digital entrepreneurs with
      ideas, knowledge and techniques
    </p>

    <br />
    <h2>SERVICES FOR ENTREPRENEURS</h2>

    <br />
    <CardDeck>
      <Card>
        <Card.Header style={{ backgroundColor: "#7B5CC1", color: "#F5F3F9" }}>
          Mentoring
        </Card.Header>

        <Card.Body>
          <Card.Text>
            Guiding and grooming yourself to see your business become profitable
            and established in the market
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header style={{ backgroundColor: "#7B5CC1", color: "#F5F3F9" }}>
          Incubation
        </Card.Header>
        <Card.Body>
          <Card.Text>
            We provide you work space and all other facilities to grow under the
            roof of Insfra
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header style={{ backgroundColor: "#7B5CC1", color: "#F5F3F9" }}>
          Webinars / Trainings
        </Card.Header>
        <Card.Body>
          <Card.Text>
            We delivers you online webinars/trainings to those who have
            determination to be entrepreneurs
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>

    <br />
    <br />
    <h1>Partnership Companies/Startups</h1>
    <CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.forum.entrepreneursclub.lk/uploads/RBKHVMNCNUV1.png"
          />
          <Card.Body>
            <Card.Title>Online Entrepreneurs’ Club Sri Lanka</Card.Title>
            <Card.Text>
              OECSL is the largest entrepreneurial community on Facebook
              platform. The Club has been designed to cater both emerging and
              existing entrepreneurs while by connecting them together
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQx7oF7JAujln-7f0kBz2_WwSOlqNB6erc-hg&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Aukod</Card.Title>
            <Card.Text>
              Aukod is an international app based news provider that delivers a
              range of news in different areas such as psychology, health,
              cooking, relationships, people etc.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.builtapps.com/images/logo_skin-default.png"
          />
          <Card.Body>
            <Card.Title>Built Apps</Card.Title>
            <Card.Text>
              Built Apps is an App and Game development company which designs
              experience based apps. So far it has been able to reach global
              audience with its game and app developing expertise.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="data:image/png;base64,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"
          />
          <Card.Body>
            <Card.Title>OutSmart Hub</Card.Title>
            <Card.Text>expertise.</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </CardDeck>

    <CardDeck>
      <h1 align="center">Why Us?</h1>
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

    <CardDeck>
      <h1 align="center">News and Events</h1>

      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22675%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20675%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17293681466%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A34pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17293681466%22%3E%3Crect%20width%3D%22675%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22250.5390625%22%20y%3D%22105.30000000000001%22%3E675x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
          <Card.Body>
            <Card.Title>Priwoo, the First Company under USH</Card.Title>
            <Card.Text>
              Priwoo Labs, The first startup under the guidance of Uva Startup
              Hub was launched.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22675%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20675%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17293681466%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A34pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17293681466%22%3E%3Crect%20width%3D%22675%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22250.5390625%22%20y%3D%22105.30000000000001%22%3E675x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
          <Card.Body>
            <Card.Title>Insfra joined with Uva Startup Hub</Card.Title>
            <Card.Text>
              Insfra Technologies joined with Uva Startup Hub and the USH office
              is at Insfra HQ.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22675%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20675%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17293681466%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A34pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17293681466%22%3E%3Crect%20width%3D%22675%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22250.5390625%22%20y%3D%22105.30000000000001%22%3E675x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
          <Card.Body>
            <Card.Title>Grand Opening of Insfra HQ, Badulla</Card.Title>
            <Card.Text>
              Insfra Technologies moved to its new own office at Colombo Road,
              Badulla.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </CardDeck>
    <h1>FAQs</h1>
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
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
        <Accordion.Toggle as={Card.Header} eventKey="1">
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
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Do I need to pay for the Startup Hub services?
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            No. You will not have to pay for the entitled benefits.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
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
