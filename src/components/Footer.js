import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#111111', color: '#fff', padding: '40px 0' }}>
      <Container>
        <Row>
          <Col md={3}>
            <h5 style={{ color: '#00FF93' }}>Aeontrix Logo</h5>
            <p>A Call-To-Action sentence</p>
          </Col>

          <Col md={3}>
            <h6 style={{ fontWeight: 'bold' }}>Products</h6>
            <ul className="list-unstyled">
              <li>Sales AI</li>
              <li>Marketing AI</li>
              <li>HR AI</li>
              <li>Customer Service AI</li>
              <li>Executive AI</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 style={{ fontWeight: 'bold' }}>Resources</h6>
            <ul className="list-unstyled">
              <li>Industry Use Case</li>
              <li>AI Plan Generator</li>
              <li>Blog</li>
              <li>Free AI Audit – For your business</li>
              <li>Video Demo</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 style={{ fontWeight: 'bold' }}>Connect</h6>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
            </ul>
            <div className="d-flex gap-3 mt-2">
                <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                    <FaTwitter />
                </a>
                <a href="https://linkedin.com/in/yourpage" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                    <FaLinkedin />
                </a>
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                    <FaFacebook />
                </a>
                <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
                    <FaInstagram />
                </a>
                </div>

          </Col>
        </Row>

        <hr style={{ backgroundColor: '#444' }} />

        <Row className="mt-3">
          <Col md={6}>
            <small>© 2025 iEmployee. All rights reserved.</small>
          </Col>
          <Col md={6} className="text-md-end">
            <small className="me-3">Privacy Policy</small>
            <small className="me-3">Terms of Service</small>
            <small>Cookie Policy</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
