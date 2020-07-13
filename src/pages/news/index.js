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
    <SEO title="Home" />
    <h1>Latest News</h1>

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

    <CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/siteimage/4%20Insfra%20Awrudu%202019.jpg"
          />
          <Card.Body>
            <Card.Title>Insfra Awrudu 2019</Card.Title>
            <Card.Text>
              Insfra Research and Development Team Celebrated Sinhala and Hindu
              New Year with Awurudu sports
            </Card.Text>
            <footer className="text-muted">
              &nbsp; <GeoAlt size={18} /> Nugegoda &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Calendar2 size={18} /> 11.04.2019
            </footer>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/siteimage/5%20National%20Garbage%20Cleanup%20Day%202019.jpg"
          />
          <Card.Body>
            <Card.Title>National Garbage Cleanup Day</Card.Title>
            <Card.Text>
              Cleaning and explaining the people of the importance of proper
              waste management.
            </Card.Text>
            <footer className="text-muted">
              &nbsp; <GeoAlt size={18} />
              Bellanvila
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Calendar2 size={18} /> 04.02.2019
            </footer>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/siteimage/6%20Grand%20Opening%20of%20Insfra%20HQ,%20Badulla.jpg"
          />
          <Card.Body>
            <Card.Title>Grand Opening of Insfra HQ, Badulla</Card.Title>
            <Card.Text>
              Insfra Technologies moved to its new own office at Colombo Road,
              Badulla.
            </Card.Text>
            <footer className="text-muted">
              &nbsp; <Tag size={18} /> Insfra
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Calendar2 size={18} /> 01.08.2018
            </footer>
          </Card.Body>
        </Card>
      </CardDeck>
    </CardDeck>

    <br />

    <CardDeck>
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/siteimage/7%20New%20Chapter%20at%20Colombo.jpg"
          />
          <Card.Body>
            <Card.Title>New Chapter at Colombo</Card.Title>
            <Card.Text>
              Insfra turns a new Leaf starting an Engineering Department at the
              heart of Nugegoda, Sri Lanka.
            </Card.Text>
            <footer className="text-muted">
              &nbsp; <GeoAlt size={18} /> Nugegoda
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Calendar2 size={18} /> 20.09.2017
            </footer>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/siteimage/8%20Insfra%201st%20Anniversary.jpg"
          />
          <Card.Body>
            <Card.Title>Insfra 1st Anniversary</Card.Title>
            <Card.Text>
              Insfra celebrated the first birthday with all the employees in
              2017s January at Badulla Heritage Inn.
            </Card.Text>
            <footer className="text-muted">
              &nbsp; <Tag size={18} /> First Birthday
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Calendar2 size={18} /> 01.01.2017
            </footer>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/siteimage/3%20Insfra%20joined%20with%20Uva%20Startup0Hub.jpg"
          />
          <Card.Body>
            <Card.Title>we can add another news</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </CardDeck>

    <br />
  </Layout>
);

export default EntraprenureshipPage;
