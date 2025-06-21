import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PricingSection = () => {
  return (
    <section style={{ background: '#f5f5f5', padding: '80px 0' }}>
      <Container style={{ background: 'white', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', padding: '40px 24px', maxWidth: '1350px' }}>
        <h2 className=" mb-2 text-center" style={{ color: '#2c3e50', fontSize: '2.5rem' }}>Pricing</h2>
        <p className="text-muted mb-5 text-center" style={{ fontSize: '1.1rem' }}>Flexible plans designed to scale with your business</p>
        <Row className="justify-content-center g-4">
          {/* Basic Plan */}
          <Col md={4}>
            <div className="card h-100 border-0" style={{ borderRadius: '14px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', width: '80%',marginLeft:'120px', transition: 'all 0.3s ease',overflow: 'hidden' }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)';
              }}>
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title mb-5" style={{ fontSize: '1.3rem', color: '#555',textAlign:'left' }}>Consultation - AI Advisor</h5>
               
                <h2 className="fw-bold mb-3"><span className="fs-6"></span></h2>
                <Button 
                  variant="outline-dark" 
                  className="w-100 mb-3 fw-bold" 
                  style={{
                    background:'#111111',
                    color: 'white',
                    border: '2px solid #111111',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#00FF93';
                    e.currentTarget.style.color = 'black';
                    e.currentTarget.style.borderColor = '#00FF93';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#111111';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = '#111111';
                  }}
                >
                  Contact Us
                </Button>
                <ul className="list-unstyled text-start mt-3 w-100" style={{ fontSize: '1rem', color: '#555' }}>
                 
                </ul>
              </div>
            </div>
          </Col>
          {/* Professional Plan */}
          <Col md={4}>
            <div className="card h-100 border-0 mx-auto" style={{ borderRadius: '14px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', width: '80%',background: 'white',transition: 'all 0.3s ease',overflow: 'hidden' }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)';
               }}>
              <div className="card-body d-flex flex-column align-items-center text-white">
                <h5 className="card-title fw-bold mb-5"  style={{ fontSize: '1.3rem', color: '#555',textAlign:'left' }}>Done & Built For You</h5>
               
                <h2 className="fw-bold mb-3"><span className="fs-6"></span></h2>
                <Button 
                  variant="outline-dark" 
                  className="w-100 mb-3 fw-bold" 
                  style={{
                    background:'#111111',
                    color: 'white',
                    border: '2px solid #111111',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#00FF93';
                    e.currentTarget.style.color = 'black';
                    e.currentTarget.style.borderColor = '#00FF93';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#111111';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = '#111111';
                  }}
                >
                  Contact Us
                </Button>
                <ul className="list-unstyled text-start mt-3 w-100" style={{ fontSize: '1rem', color: '#e9ecef' }}>
                  
                </ul>
              </div>
            </div>
          </Col>
          {/* Enterprise Plan */}
          <Col md={4}>
            <div className="card h-100 border-0" style={{ borderRadius: '14px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', width: '80%',marginLeft:'-30px',transition: 'all 0.3s ease',overflow: 'hidden' }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)';
               }}>
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title fw-bold mb-5"  style={{ fontSize: '1.2rem', color: '#555',textAlign:'left' }}>AI Partner (All your AI needs)</h5>
               
                <h2 className="fw-bold mb-3"></h2>
                <Button 
                  variant="outline-dark" 
                  className="w-100 mb-3 fw-bold" 
                  style={{
                    background:'#111111',
                    color: 'white',
                    border: '2px solid #111111',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#00FF93';
                    e.currentTarget.style.color = 'black';
                    e.currentTarget.style.borderColor = '#00FF93';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#111111';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = '#111111';
                  }}
                >
                  Contact Us
                </Button>
                <ul className="list-unstyled text-start mt-3 w-100" style={{ fontSize: '1rem', color: '#555' }}>
                 
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PricingSection;
