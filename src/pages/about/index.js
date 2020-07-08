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
import Seoimage from "../../components/images/home/seoimage";
import One from "../../components/images/seo/1";
import Two from "../../components/images/seo/2";
import WhatMakes from "../../components/images/about/whatmakes";

const EntraprenureshipPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Insfra</h1>

    <CardDeck>
      <Card>
        <Card.Body>
          <Container>
            <h2>
              Preparing for your success, we find pleasure giving the solutions.
            </h2>
            <Row>
              <Col>
                <Card.Title></Card.Title>

                <Card.Text style={{ textAlign: "justify" }}>
                  Our passion over inspiring both businesses’ and individuals’
                  lives with the advancement of technological environment is
                  what has driven us to who we are today. We put our IT
                  expertise and excellence into practicality so as to fit into
                  our clients’ equirements thereby we find pleasure in doing our
                  business.
                </Card.Text>
                <Card.Text>
                  We help transform the world's most important businesses into
                  vigorous, agile organizations that anticipate the agile
                  unpredictable.
                </Card.Text>
              </Col>
              <Col>
                <iframe
                  width="791"
                  height="445"
                  src="https://www.youtube.com/embed/lBgTLAuafqQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  width="100%"
                  height="300px"
                  allowFullScreen
                ></iframe>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </CardDeck>
    <br />

    <h1>Meet our key team members</h1>
    
   
    <CardDeck>
      <Card>
        <Card.Img
          variant="top"
          src="https://insfra.com/assets/img/team/kosala.jpg"
        />
        <Card.Body>
          <Card.Title>Kosala Sandaruwan</Card.Title>
          <Card.Text>CEO, Co-Founder</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://insfra.com/assets/img/team/Madus.jpg"
        />
        <Card.Body>
          <Card.Title>Madusanka Premaratne</Card.Title>
          <Card.Text>COO,CO-Founder</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://insfra.com/assets/img/team/sampath.jpg"
        />
        <Card.Body>
          <Card.Title>Sampath Thilakarathna</Card.Title>
          <Card.Text>Chief Information Officer</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img
          variant="top"
          src="https://insfra.com/assets/img/team/Radikaa.jpg"
        />
        <Card.Body>
          <Card.Title>Radika Thilakarathna</Card.Title>
          <Card.Text>Chief Marketing Officer</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
    <br />
    <br />
    <h2>Our Vision & Mission</h2>
    <CardDeck>
      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <Card.Title>
                  <h4>Vision</h4>
                </Card.Title>

                <Card.Text style={{ textAlign: "justify" }}>
                  To be the company that best understands clients’ requirements
                  and bring them innovative solutions to reach their success
                  through our services
                </Card.Text>
                <Card.Title>
                  <h4>Mission</h4>
                </Card.Title>
                <Card.Text>
                  Our mission is to enrich businesses with innovative web and
                  mobile development services while providing digital strategy
                  to help them gain a broader market share, making the society
                  more advanced and connected together.
                </Card.Text>
              </Col>
              <Col>
                <WhatMakes />
                {/* <iframe
                  width="791"
                  height="445"
                  src="https://www.youtube.com/embed/lBgTLAuafqQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  width="100%"
                  height="300px"
                  allowFullScreen
                ></iframe> */}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </CardDeck>
    <CardDeck>
      <h1>Check where Insfra is located at.</h1>
      <br />

      <CardDeck>
        <Card>
         
          <Card.Body>
            <Card.Title>Badulla</Card.Title>
            <Card.Text>
              Insfra Head office is located at Bandarawela Rd, Badulla. In the
              head office of Insfra we have to seperate departments as
              Administration and Marketing.
            </Card.Text>
          </Card.Body>
          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17292fffbf2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17292fffbf2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
        </Card>
        <Card>
         
          <Card.Body>
            <Card.Title>Nugegoda</Card.Title>
            <Card.Text>
              Engineering and Research and Development Department of Insfra is
              located at Gangodawila, Nugegoda. There we have the main
              Engineering Department of Insfra.
            </Card.Text>
          </Card.Body>
          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17292fffbf2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17292fffbf2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
        </Card>
        <Card>
          
          <Card.Body>
            <Card.Title>Maharagama</Card.Title>
            <Card.Text>
              Marketing and Administration Support Team is located at Maharagama
              and they closely work with Marketing Department at Head Office
              while suporting customers.
            </Card.Text>
          </Card.Body>
          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17292fffbf2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17292fffbf2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
        </Card>
      </CardDeck>
      <br />
     
    </CardDeck>

    
    <CardDeck>
      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <Card.Title>
                  <h1 style={{textAlign:"center"}}>hello@insfra.com</h1>
                </Card.Title>

                <Card.Text style={{textAlign:"center"}}>
                We welcome your inquiries and calls for quotations. Email us now to let us help you best in your business
                </Card.Text>
                <div className="card-body gradient-buttons">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "50%",textAlign:"center" }}
          >
            {" "}
            Contact Now
          </button>
        </div>
              </Col>
              <Col>
               <h1 style={{textAlign:"center"}}>
               To make requests for further information, Do not hesitate to contact us.
               </h1>
                
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </CardDeck>
    
  </Layout>
);

export default EntraprenureshipPage;
