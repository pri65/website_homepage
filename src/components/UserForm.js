import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const UserForm = () => {
  return (
    <section className="contact-section p-4">
      <Container>
        <Row>
          <Col md={8} className="d-flex align-items-center">
            <div>
            <h3>We Offer 30,000+</h3>
            <h3>Job Vacancies Right Now</h3>
            <h6>Find Jobs, Employment & Career Opportunities</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button variant="primary" type="submit">
              Get Started
            </Button>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-items-center">
            <div>
              <p>FIND YOUR JOB</p>
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
                  <Form.Control type="email" placeholder="Location" />
                </Form.Group>
                <Form.Group className="mb-3">
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
                <Button variant="primary" type="submit">
                  Search
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserForm;
