import React from "react";
// import { Link } from "gatsby";
// import { ArrowRightCircle, Award } from "react-bootstrap-icons";

import { Card, Container, Row, Col, CardDeck } from "react-bootstrap";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Kosala from "../../components/images/seo/1";
import Madushanka from "../../components/images/seo/2";
import WhatMakes from "../../components/images/about/whatmakes";
import BackgroundImage from "gatsby-background-image";
import { graphql } from "gatsby";

const EntraprenureshipPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <h1>About Insfra</h1>
    <br />
    <h2>Preparing for your success, we find pleasure giving the solutions.</h2>
    <br />
    <Container>
      <Row>
        <Col sm={6}>
          <iframe
            src="https://www.youtube.com/embed/lBgTLAuafqQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            width="100%"
            height="300px"
            allowFullScreen
          ></iframe>
        </Col>
        <Col sm={6}>
          <p style={{ textAlign: "justify" }}>
            Our passion over inspiring both businesses’ and individuals’ lives
            with the advancement of technological environment is what has driven
            us to who we are today. We put our IT expertise and excellence into
            practicality so as to fit into our clients’ equirements thereby we
            find pleasure in doing our business.
          </p>
          <p style={{ textAlign: "justify" }}>
            We help transform the world's most important businesses into
            vigorous, agile organizations that anticipate the agile
            unpredictable.
          </p>
        </Col>
      </Row>
    </Container>

    <br />

    <h1>Meet our key team members</h1>

    <CardDeck>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/team/kosala.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Kosala Sandaruwan</Card.Title>
          <Card.Text>CEO, Co-Founder</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/team/Madus.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Madusanka Premaratne</Card.Title>
          <Card.Text>COO,CO-Founder</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/team/sampath.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Sampath Thilakarathna</Card.Title>
          <Card.Text>Chief Information Officer</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="https://insfra.com/assets/img/team/Radikaa.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Radika Thilakarathna</Card.Title>
          <Card.Text>Chief Marketing Officer</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
    <br />
    <CardDeck>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/Hiroshan.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Hiroshan Thennakoon</Card.Title>
          <Card.Text>Project Manager</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/Yahani.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Yahani Dissanayake</Card.Title>
          <Card.Text>Project Manager(PMP)</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/Neranja.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Nehranja Dharmasena</Card.Title>
          <Card.Text>Administration Officer</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/Sashika.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Sashika Dilshan</Card.Title>
          <Card.Text>Senior Marketing Executive</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
    <br />
    <CardDeck>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/mahesh.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Mahesh Rathnayake</Card.Title>
          <Card.Text>Software Engineer</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/nilmini.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Nilmini Rathnayake</Card.Title>
          <Card.Text>Software Engineer</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/suresh%20.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Suresh Ranasinghe</Card.Title>
          <Card.Text>Software Engineer</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/eranga.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Eranga Gamagedara</Card.Title>
          <Card.Text>Software Engineer</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
    <br />
    <CardDeck>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/Iro.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Iroshana Wickramasinghe</Card.Title>
          <Card.Text>Software Engineer-Mobile</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/Heshani.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Heshani Hettiarachchi</Card.Title>
          <Card.Text>Software Engineer</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/Radika.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Radika Dilanka</Card.Title>
          <Card.Text>Software Engineer</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/Keshani.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Keshani De Silva</Card.Title>
          <Card.Text>Software Engineer-UI/UX</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
    <br />
    <CardDeck>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/nipuna.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Nipuna Weerasinghe</Card.Title>
          <Card.Text>Software Engineer</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/Iresha.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Iresha Samarathunga</Card.Title>
          <Card.Text>Content Developer</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/Sashitha.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Sashitha Imalka</Card.Title>
          <Card.Text>Marketing Executive</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/eranda.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Eranda Thennakoon</Card.Title>
          <Card.Text>Marketing Executive</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
    <br />
    <CardDeck>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/chandana.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Chandana Konara</Card.Title>
          <Card.Text>Marketing Executive</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/rinu.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Rinusha Samsudeen</Card.Title>
          <Card.Text>SEO Specialist</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/Bevindya.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Bevindya Dediyagala</Card.Title>
          <Card.Text>Trainee Associate Software Engineer</Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <div className="overflow">
          <Card.Img
            variant="top"
            src="http://insfra.com/assets/img/team/isuru.jpg"
          />
        </div>
        <Card.Body>
          <Card.Title>Isuru Ekanayake</Card.Title>
          <Card.Text>Associate Marketing Executive</Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
    <br />
    <br />
    <br />
    <br />

    <h2>Our Vision & Mission</h2>

    <Container style={{ maxWidth: "1200px" }}>
      <Row>
        <Col sm={6}>
          <br />
          <h3>Vision</h3>

          <p style={{ textAlign: "justify" }}>
            To be the company that best understands clients’ requirements and
            bring them innovative solutions to reach their success through our
            services
          </p>

          <h3>Mission</h3>

          <p>
            Our mission is to enrich businesses with innovative web and mobile
            development services while providing digital strategy to help them
            gain a broader market share, making the society more advanced and
            connected together.
          </p>
        </Col>
        <Col sm={6}>
          <BackgroundImage
            fluid={props.data.indexImage.childImageSharp.fluid}
            style={{ width: "100%", height: "100%" }}
          >
            <p
              style={{
                textAlign: "justify",
                marginLeft: "80px",
              }}
            >
              <br />
              <br />
              <br />
              <span
                style={{
                  fontSize: "29px",
                  fontWeight: "600",
                  color: "#034BC9",
                }}
              >
                I
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ fontSize: "20px" }}>nspire people</span>
              <br />
              <span
                style={{
                  fontSize: "29px",
                  fontWeight: "600",
                  color: "#034BC9",
                }}
              >
                N
              </span>
              &nbsp;&nbsp;
              <span style={{ fontSize: "20px" }}>
                avigate our clients to success
              </span>
              <br />
              <span
                style={{
                  fontSize: "29px",
                  fontWeight: "600",
                  color: "#034BC9",
                }}
              >
                S
              </span>
              &nbsp;&nbsp;
              <span style={{ fontSize: "20px" }}>olve customer problems</span>
              <br />
              <span
                style={{
                  fontSize: "29px",
                  fontWeight: "600",
                  color: "#034BC9",
                }}
              >
                F
              </span>
              &nbsp;&nbsp;
              <span style={{ fontSize: "20px" }}>
                acilitate clients in every aspect
              </span>
              <br />
              <span
                style={{
                  fontSize: "29px",
                  fontWeight: "600",
                  color: "#034BC9",
                }}
              >
                R
              </span>
              &nbsp;&nbsp;
              <span style={{ fontSize: "20px" }}>edesign future</span>
              <br />
              <span
                style={{
                  fontSize: "29px",
                  fontWeight: "600",
                  color: "#034BC9",
                }}
              >
                A
              </span>
              &nbsp;&nbsp;
              <span style={{ fontSize: "20px" }}>ppreciate Quality</span>
              <br />
            </p>
          </BackgroundImage>

          {/* <WhatMakes/> */}
        </Col>
      </Row>
    </Container>

    <br />
    <br />
    <br />
    <br />

    <h2>Check where Insfra is located at.</h2>
    <Container>
      <Row>
        <Col sm={4}>
          <Card.Title>Badulla</Card.Title>
          <Card.Text>
            Insfra Head office is located at Bandarawela Rd, Badulla. In the
            head office of Insfra we have to seperate departments as
            Administration and Marketing.
          </Card.Text>

          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17292fffbf2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17292fffbf2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
        </Col>
        <Col sm={4}>
          <Card.Title>Nugegoda</Card.Title>
          <Card.Text>
            Engineering and Research and Development Department of Insfra is
            located at Gangodawila, Nugegoda. We have main Engineering
            Department of Insfra.
          </Card.Text>

          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17292fffbf2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17292fffbf2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
        </Col>
        <Col sm={4}>
          <Card.Title>Maharagama</Card.Title>
          <Card.Text>
            Marketing and Administration Support Team is located at Maharagama
            and they closely work with Marketing Department at Head Office while
            suporting customers who work with Insfra.
          </Card.Text>

          <Card.Img
            variant="top"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17292fffbf2%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17292fffbf2%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.390625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          />
        </Col>
      </Row>
    </Container>
<br/>
<br/>
<br/>
<br/>
    <Container>
      <Row>
        <Col style={{ width: "50%", textAlign: "center" }}>
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
        <Col>
          <h1 style={{ textAlign: "center" }}>
            To make requests for further information, Do not hesitate to contact
            us.
          </h1>
        </Col>
      </Row>
    </Container>
 
<br/>
<br/>
  </Layout>
);

export default EntraprenureshipPage;

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "about/whatmakes.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
