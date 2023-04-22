import React from "react";
import "../custom.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const HeroBanner = () => {
  return (
    <div>
      {/* About Section */}
      <section className="about-section">
        <Container className="p-4 main-container">
          <Row>
            <Col lg={6} xs={12} className="d-flex align-items-center" >
             <div>
             <h1 className="contrast-color">Recruiters,</h1>
              <h3>Help Us Close Roles faster</h3>
                <h3> & 10X Your Income</h3>
              <Button size="lg" variant="info">Sign Up Now</Button>
             </div>
            </Col>
            <Col lg={6} xs={12}>
              <Row>
                <Col md={4} xs={12} className="d-flex align-items-center mt-3">
                  <div>
                  <h2 className="contrast-color">16,780 Jobs</h2>
                  <h3>For You</h3>
                  </div>
                </Col>
                <Col md={8} xs={12}>
                <div className="border border-2 rounded bg-light p-2 mt-3">
                <h2>Find your perfect job</h2>
                  <Form>
                    <Form.Group controlId="formName">
                      <Form.Label> </Form.Label>
                      <Form.Control type="text" placeholder="Keywords" />
                    </Form.Group>
                    <Form.Group controlId="formName">
                      <Form.Label> </Form.Label>
                      <Form.Control type="text" placeholder="Location" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label> </Form.Label>
                      <Form.Select>
                        <option>Choose a category</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                      <Form.Check inline type="checkbox" label="Freelancce" />
                      <Form.Check inline type="checkbox" label="Full Time" />
                      <Form.Check inline type="checkbox" label="Internship" />
                      <Form.Check inline type="checkbox" label="Part Time" />
                      <Form.Check inline type="checkbox" label="Temprory" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                    <Button size="lg" variant="info" type="submit">
                      Search
                    </Button>
                    </div>
                    
                  </Form>
                </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HeroBanner;


