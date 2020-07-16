import React from "react";
import { Link } from "gatsby";
import { Card, Row, Col, CardDeck } from "react-bootstrap";
import Layout from "../components/homeLayout.js";

import SEO from "../components/seo";
import Seoimage from "../components/images/home/seoimage";
import Entraimage from "../components/images/home/entraimage";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Row>
      <Col>
        <CardDeck>
          <Card style={{ backgroundColor: "#FFFFFF",boxShadow:"0px 0px 0px 0px rgba(0,0,0,0)" }}>
            <Card.Body>
              <h1 style={{ marginTop: "5px" }}>SEO/ASO</h1>
              <Card.Text
                // style={{
                //   textAlign: "justify",
                //   position: "absolute",
                //   zIndex: "999",
                //   top: "465px",
                //   left: "40px",
                //   color: "#FFFFFF",
                //   width: "85%",
                //   fontSize: "21px",
                //   margin: "5px auto",
                // }}
                style={{
                  textAlign: "justify",
                  fontWeight: "600",
                  fontSize: "30px",
                }}
              >
                Come on in !
              </Card.Text>
              <Card.Text>
                All who want to be ranked in Search Engine/App Store & Play
                Store
              </Card.Text>

              <Seoimage />
              <br />
              <div style={{ textAlign: "center" }}>
                <Link to="/seo">
                  <div className="card-body gradient-buttons">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ width: "100%", fontSize: "25px" }}
                    >
                      {" "}
                      Explore SEO/ASO Service
                    </button>
                  </div>
                </Link>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ backgroundColor: "#FFFFFF", boxShadow:"0px 0px 0px 0px rgba(0,0,0,0)" }}>
            <Card.Body>
              <h1 style={{ marginTop: "5px" }}>Entrepreneurship</h1>
              <Card.Text
                // style={{
                //   textAlign: "justify",
                //   position: "absolute",
                //   zIndex: "999",
                //   top: "465px",
                //   left: "40px",
                //   color: "#FFFFFF",
                //   width: "85%",
                //   fontSize: "21px",
                //   margin: "5px auto",
                // }}
                style={{
                  textAlign: "justify",
                  fontWeight: "600",
                  fontSize: "30px",
                }}
              >
                Welcome board !
              </Card.Text>
              <Card.Text>
                All who are passionate to form a business of their own and earn
              </Card.Text>
              <br/>
              <Entraimage />
              
              {/* <Card.Title as={"h2"}>Entraprenureship</Card.Title> */}
              <br />
              <div style={{ textAlign: "center" }}>
                <Link to="/entraprenureship">
                  <div className="card-body gradient-buttons">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ width: "100%", fontSize: "25px" }}
                    >
                      {" "}
                      Explore Entrepreneurship Service
                    </button>
                  </div>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </CardDeck>
      </Col>
    </Row>
    {/* <Row style={{marginBottom:"0px important", backgroundColor:"red"}}><footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer></Row> */}
  </Layout>
);

export default IndexPage;
