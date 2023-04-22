import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Cards = () => {
  return (
      <section id="services" className="services-section bg-light p-4">
        <Container>
          <Row>
            <Col md={4}>
              <Card className="mt-3 bg-primary text-light">
                <Card.Body>
                  <h3>LOOKING FOR A JOB?</h3>
                  <h5>PROFESSIONAL & ADMINISTRATIVE JOBS</h5>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button variant="primary text-light border" type="submit">
                    Browse & Apply for a job
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mt-3 bg-info text-light" >
                <Card.Body>
                  <h3>ARE YOU A RECRUITER?</h3>
                  <h5>PROFESSIONAL & ADMINISTRATIVE JOBS</h5>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button variant="info text-light border " type="submit">
                    Refer Candidates & Earn
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
            <Card className="mt-3 bg-light">
                <Card.Body>
                  <h3 className="contrast-color">ARE YOU A RECRUITER?</h3>
                  <h5 className="contrast-color">PROFESSIONAL & ADMINISTRATIVE JOBS</h5>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <Button variant="light border" type="submit">
                    <b>Refer Candidates & Earn</b>
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
