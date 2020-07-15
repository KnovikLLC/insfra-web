import React from "react";
import { Link } from "gatsby";
import { Calendar2, GeoAlt, Tag } from "react-bootstrap-icons";

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

const EntraprenureshipPage = () => (
  <Layout>
    <SEO title="Team" />
    <h1>Insfra Team</h1>

    <CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/siteimage/1%20Priwoo,%20the%20First%20Company%20under%20USH.jpg"
          />
          <Card.Body>
            <Card.Title>Priwoo, the First Company under USH</Card.Title>
            <Card.Text>
              Priwoo Labs, The first startup under the guidance of Uva Startup
              Hub was launched.{" "}
            </Card.Text>
            <footer className="text-muted">
              &nbsp; <Tag size={18} /> Entreprenurship
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Calendar2 size={18} /> 23.09.2019
            </footer>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/siteimage/2%20Google%20AMP%20Conference,%20Japan.jpg"
          />
          <Card.Body>
            <Card.Title>Google AMP Conference, Japan Tokyo</Card.Title>
            <Card.Text>
              Core Team Members of the R&D team during the Google AMP Conference
              2019.
            </Card.Text>
            <footer className="text-muted">
              &nbsp; <GeoAlt size={18} /> Roppongi, Tokyo
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Calendar2 size={18} /> 17.04.2019
            </footer>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/siteimage/3%20Insfra%20joined%20with%20Uva%20Startup%20Hub.jpg"
          />
          <Card.Body>
            <Card.Title>Insfra joined with Uva Startup Hub</Card.Title>
            <Card.Text>
              Insfra Technologies joined with Uva Startup Hub and the USH office
              is at Insfra HQ.
            </Card.Text>
            <footer className="text-muted">
              &nbsp; <Tag size={18} /> Uva Startup Hub
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Calendar2 size={18} /> 20.05.2019
            </footer>
          </Card.Body>
        </Card>
      </CardDeck>
    </CardDeck>

    <br />

    

   

    <br />
  </Layout>
);

export default EntraprenureshipPage;
