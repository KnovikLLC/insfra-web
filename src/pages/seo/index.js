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
import LayoutPage from "../../components/layoutpages";
import Image from "../../components/image";
import SEO from "../../components/seo";
import Seoimage from "../../components/images/home/seoimage";
import One from "../../components/images/seo/1";
import Two from "../../components/images/seo/2";
import Three from "../../components/images/seo/3";

import SEOModel from "../seo/seoModel";
import ASOModel from "../seo/asoModel";
import SEOASOConsult from "./seo-aso-consultancyModel";
import LocalSEO from "./localSEOModel";

const SeoPage = () => (
  <LayoutPage>
    <SEO title="Home" />

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
    <p>
      Get expert Search Engine Optimization and App Store Optimization services
      for your business. We cater from sole proprietorship to corporate to get
      the website/pages ranked in searches and convert for sales
    </p>

    <br />
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>Search Engine Optimization</h1>
          </Card.Title>
          <Card.Text>
            We will make your website, blog, product or service ranked in online
            environments. Therefore it reaches a broad audience in your
            segmented market and increases conversions.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>App Store Optimization</h1>{" "}
          </Card.Title>
          <Card.Text>
            We will naturally get your app to the most downloaded app list of
            App Store and PlayStore through App Store Optimization with which
            most customers convert for sales
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <br />
    <br />
    <h2>Small & Medium Business Solutions</h2>

    <br />
    <CardDeck>
      <Card>
        <Card.Header style={{ backgroundColor: "#7B5CC1", color: "#F5F3F9" }}>
          SEO Getting ranked in Search Results?
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <Award color="royalblue" size={30} /> Market research
            <br />
            <br />
            <Award color="royalblue" size={30} /> On page optimization
            <br />
            <br />
            <Award color="royalblue" size={30} /> Off page optimization
            <br />
            <br />
            <SEOModel />
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button variant="primary" size="lg" block>
            Get a quote
          </Button>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header style={{ backgroundColor: "#7B5CC1", color: "#F5F3F9" }}>
          ASO Getting ranked in App Store
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Award color="royalblue" size={30} /> App Store Optimization
            <br />
            <br />
            <Award color="royalblue" size={30} /> Play Store Optimization
            <br />
            <br />
            <Award color="royalblue" size={30} /> Off page optimization
            <br />
            <br />
            <ASOModel />
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button variant="primary" size="lg" block>
            Get a quote
          </Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header style={{ backgroundColor: "#7B5CC1", color: "#F5F3F9" }}>
          SEO/ASO Consultancy - How to Optimize
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Award color="royalblue" size={30} /> App Store Optimization
            <br />
            <br />
            <Award color="royalblue" size={30} /> Play Store Optimization
            <br />
            <br />
            <Award color="royalblue" size={30} /> Off page optimization
            <br />
            <br />
            <SEOASOConsult />
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button variant="primary" size="lg" block>
            Get a quote
          </Button>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header style={{ backgroundColor: "#7B5CC1", color: "#F5F3F9" }}>
        Local SEO Services
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <Award color="royalblue" size={30} /> App Store Optimization
            <br />
            <br />
            <Award color="royalblue" size={30} /> Play Store Optimization
            <br />
            <br />
            <Award color="royalblue" size={30} /> Off page optimization
            <br />
            <br />
           <LocalSEO/>
          </Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button variant="primary" size="lg" block>
            Get a quote
          </Button>
        </Card.Footer>
      </Card>
    </CardDeck>

  

    
    <br />

    <CardDeck>
      <Jumbotron>
        <h1 align="center">Why Choose Us?</h1>
        <br />
        <p>
          {" "}
          We believe in conversions more than the impressions. Therefore, we
          analyze customers, their search intent, psychological needs and their
          search behaviors and do optimization in Search Engines, AppStore and
          PlayStore, Social Media while ensuring that your brands are reached to
          the right audience though sales funnel strategies.
        </p>
        <Card.Text></Card.Text>

        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17292fffbf2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17292fffbf2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            />
            <Card.Body>
              <Card.Title>10+ Experience</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17292fffbf2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17292fffbf2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            />
            <Card.Body>
              <Card.Title>SEO Expertise</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17292fffbf2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17292fffbf2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            />
            <Card.Body>
              <Card.Title>ASO Expertise</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17292fffbf2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17292fffbf2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            />
            <Card.Body>
              <Card.Title>Proven Track Record</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Jumbotron>
    </CardDeck>

    <br />
    <CardDeck>
      <Jumbotron>
        <h1 align="center">Top Articles from SEO/ASO blog</h1>
        <br />
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22675%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20675%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17293681466%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A34pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17293681466%22%3E%3Crect%20width%3D%22675%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22250.5390625%22%20y%3D%22105.30000000000001%22%3E675x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            />
            <Card.Body>
              <Card.Title>Article 1</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22675%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20675%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17293681466%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A34pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17293681466%22%3E%3Crect%20width%3D%22675%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22250.5390625%22%20y%3D%22105.30000000000001%22%3E675x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            />
            <Card.Body>
              <Card.Title>Article 2</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22675%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20675%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17293681466%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A34pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17293681466%22%3E%3Crect%20width%3D%22675%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22250.5390625%22%20y%3D%22105.30000000000001%22%3E675x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            />
            <Card.Body>
              <Card.Title>Article 3</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Jumbotron>
    </CardDeck>
    <h1>FAQs</h1>
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            What is SEO?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            SEO is the process of growing the quality and the quantity of web
            traffic by increasing the visibility of a website/web page of a web
            search engine. This mainly involves helping a website/page getting
            at the top of the search engine results page.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            What is ASO?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            ASO is the process of increasing the visibility of a mobile
            application in the App Store/Play Store environment. This involves
            helping the app get ranked in the App search in the store.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Can we optimize in the Play Store only?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            Yes. you may get only the Play Store optimization if you wish to.
            You will not be charged for the whole ASO optimization package as
            you only request for Play Store Optimization
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            Can we optimize in the App Store only?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            Yes. you may get only the App Store optimization if you wish to. You
            will not be charged for the whole ASO optimization package as you
            only request for App Store Optimization
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
            Do you offer a flat rate for SEO?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            Yes. we do depending on the project. Reach us via hello@insfra.com
            to check your project’s eligibility.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </LayoutPage>
);

export default SeoPage;
