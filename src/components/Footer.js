import React from "react";
import { Form, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

const Footer = () => {
  return (
      <footer className="footer bg-dark text-light p-4 mt-4">
        <div className="container">
          <div className="row">     
              <div className="col-md-3">
              <h5>Product</h5>
              <ul className="list-unstyled">
                <li>
                  <h7>All Jobs</h7>
                </li>
                <li>
                  <h7>Companies</h7>
                </li>
                <li>
                  <h7>Candidates</h7>
                </li>
              </ul>
             </div>
            <div className="col-md-3">
              <h5>Resources</h5>
              <ul className="list-unstyled">
                <li>
                  <h7>Blog</h7>
                </li>
                <li>
                  <h7>User guides</h7>
                </li>
                <li>
                  <h7>Webinars</h7>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>
                  <h7>About</h7>
                </li>
                <li>
                  <h7>Join Us</h7>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="contrast-color">Subscribe to our news</h5>
              <ul className="list-unstyled">
                <li>
                  <p>For product announcements and exclusive insights</p>
                </li>
                <li>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Input your email"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="info" id="button-addon2">
                      Subscribe
                    </Button>
                  </InputGroup>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <Form.Group className="mb-3">
                <Form.Label> </Form.Label>
                <Form.Select>
                  <option>English</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-md-3">
              <p>2022 Brand, Inc * Privacy * Terms * Sitemap</p>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
