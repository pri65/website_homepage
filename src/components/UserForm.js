import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const UserForm = () => {
  return (
    <section className="contact-section p-4">
      <Container>
        <Row>
          <Col md={8} className="d-flex align-items-center">
            <div>
              <h3 className="contrast-color">We Offer 30,000+</h3>
              <h3 className="contrast-color">Job Vacancies Right Now</h3>
              <h6 className="contrast-color">Find Jobs, Employment & Career Opportunities</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button variant="info" type="submit">
                Get Started
              </Button>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-items-center">
            <div style={{ width: "30rem" }}>
              <h5 className="mt-3">FIND YOUR JOB</h5>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label> </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="What are you looking for?"
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label> </Form.Label>
                  <Form.Control type="text" placeholder="Location" />
                </Form.Group>
                <Form.Group>
                  <Form.Label> </Form.Label>
                  <Form.Select>
                    <option>All Types</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label> </Form.Label>
                  <Form.Select>
                    <option>Choose a category</option>
                  </Form.Select>
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
      </Container>
    </section>
  );
};

export default UserForm;
