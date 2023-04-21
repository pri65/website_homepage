import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Cards = () => {
  return (
      <section id="services" className="services-section bg-light p-4">
        <Container>
          <Row>
            <Col md={4}>
              <Card >
                <Card.Body>
                  <Card.Title>LOOKING FOR A JOB?</Card.Title>
                  <h3>PROFESSIONAL & ADMINISTRATIVE JOBS</h3>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button variant="primary" type="submit">
                    Browse & Apply for a job
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card >
                <Card.Body>
                  <Card.Title>ARE YOU A RECRUITER?</Card.Title>
                  <h3>PROFESSIONAL & ADMINISTRATIVE</h3>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button variant="primary" type="submit">
                    Refer Candidates & Earn
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card >
                <Card.Body>
                  <Card.Title>ARE YOU A RECRUITER?</Card.Title>
                  <h3>PROFESSIONAL & ADMINISTRATIVE</h3>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button variant="primary" type="submit">
                    Refer Candidates & Earn
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
   
  );
};

export default Cards;
