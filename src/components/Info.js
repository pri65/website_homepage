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
            <Col md={6}>
              <p className="text-danger">RECRUITMENT TECHNOLOGIES</p>
              <h3>Solving Recruitment Using</h3>
              <h3>Technology</h3>
              <p>
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form.
              </p>
              <Card className="bg-light">
                <Card.Body>
                  <Card.Img variant="top" src="human-mind.jpg" alt="Verified" />
                  <Card.Title>01</Card.Title>
                  <Card.Title>Verified Jobs, Verified Candidates</Card.Title>
                  <Card.Text>
                    All the lorem ipsum generators on the internet tend.
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
              <Card className="bg-light">
                <Card.Body>
                  <Card.Img variant="top" src="user.jpg" alt="Access" />
                  <Card.Title>02</Card.Title>
                  <Card.Title>
                    Access Validated Requirements Globally
                  </Card.Title>
                  <Card.Text>
                    On the other hand, we denounce with righteous.
                  </Card.Text>
                </Card.Body>
              </Card>

              <br />

              <Card className="bg-light">
                <Card.Body>
                  <Card.Img variant="top" src="quality.jpg" alt="Hire" />
                  <Card.Title>03</Card.Title>
                  <Card.Title>Hire Quality Talent Quickly</Card.Title>
                  <Card.Text>
                    Man therefore always holds in these matters to this
                  </Card.Text>
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
