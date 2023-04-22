import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Info = () => {
  return (
    <>
      <section className="about-section">
        <Container className="p-10 mt-5 mb-5 ">
          <Row>
            <Col md={6}>
              <img
                src="/images/download.jpeg"
                alt="About Me"
                className="img-fluid w-100"
              />
            </Col>
            <Col md={6} >
              <h6 className="text-danger">RECRUITMENT TECHNOLOGIES</h6>
              <h3>Solving Recruitment Using</h3>
              <h3>Technology</h3>
              <p>
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form.
              </p>
              <Card className="bg-light">
                <Card.Body className="d-flex">
                  <Card.Img className="card-image" variant="top" src="/images/human-mind.jpg" alt="Verified" />
                  
                  <div>
                  <Card.Title as="h6">
                    <span className="text-danger">01 &nbsp; &nbsp;</span>
                    Verified Jobs, Verified Candidates
                  </Card.Title>
                  <Card.Text>
                    All the lorem ipsum generators on the internet tend.
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <br />
              <Card className="bg-light">
                <Card.Body className="d-flex">
                  <Card.Img className="card-image" variant="top" src="/images/user.jpg" alt="Access" />

                 <div>
                 <Card.Title as="h6">
                    <span className="text-danger">02 &nbsp; &nbsp;</span>
                    Access Validated Requirements Globally
                  </Card.Title>
                  <Card.Text>
                    On the other hand, we denounce with righteous.
                  </Card.Text>
                 </div>
                </Card.Body>
              </Card>

              <br />

              <Card className="bg-light">
                <Card.Body className="d-flex">
                  <Card.Img className="card-image" variant="top" src="/images/quality.jpg" alt="Hire" />

                  <div>
                  <Card.Title as="h6">
                    {" "}
                    <span className="text-danger">03 &nbsp; &nbsp;</span>Hire
                    Quality Talent Quickly
                  </Card.Title>
                  <Card.Text>
                    Man therefore always holds in these matters to this
                  </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Info;
