import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const navigate = useNavigate();

  const handleNavigateToAllCaseStudies = () => {
    navigate('/all-case-studies');
  };

  return (
    <section id="case-studies" className="section py-5 content-section grid-background">
      <div className='grid-background' style={{ padding: '50px 0' }}>
        <Container className='content-box highlighted-box' style={{ padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth:'1200px' }}>
          <h3 className="text-center mb-4">Case Studies</h3>
          <p className="text-center mb-5 text-muted" style={{ fontSize: '0.95rem' }}>
            Real-world examples of AI transformation across industries
          </p>
          
          <Row className="g-4">
            {/* Card 1: Retail */}
            <Col md={4}>
              <Card style={{ 
                borderRadius: '15px', 
                overflow: 'hidden', 
                height: '100%',
                backgroundColor: '#f5f5f5',
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                 <Card.Img
                  variant="top"
                  src=""
                  alt="Retail Case Study"
                  style={{ height: '250px', objectFit: 'cover',color:'black' }}
                />
                {/* <div style={{ backgroundColor: '#343a40', padding: '70px', color: 'white' }}>
                  <h5>Retail Case Study</h5>
                </div> */}
                
                <Card.Body>
                  <Badge bg="light" text="dark" className="mb-2" style={{marginRight:'350px'}}>Retail</Badge>
                  <Card.Title style={{ fontWeight: '500', color: 'black',textAlign:'left' }}>Accelerated Lead Response</Card.Title>
                  {/* <p style={{ marginBottom: '4px', color: '#6c757d' }}><strong>Problem:</strong> Slow lead follow-up causing lost sales</p>
                  <p style={{ marginBottom: '4px', color: '#6c757d' }}><strong>Solution:</strong> Speed-to-lead AI agent</p>
                  <p style={{ marginBottom: '12px', color: '#6c757d' }}><strong>Outcome:</strong> +68% conversion rate</p> */}
                  <span
                    role="button"
                    onClick={handleNavigateToAllCaseStudies}
                    style={{ color: '#0d6efd', cursor: 'pointer', fontWeight: '500',textAlign:'left',display:'block' }}
                  >
                    Read full case study →
                  </span>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2: Healthcare */}
            <Col md={4}>
              <Card style={{ 
                borderRadius: '15px', 
                overflow: 'hidden', 
                height: '100%',
                backgroundColor: '#f5f5f5',
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                 <Card.Img
                  variant="top"
                  src=""
                  alt="Health Case Study"
                  style={{ height: '250px', objectFit: 'cover',color:'black' }}
                />
                {/* <div style={{ backgroundColor: '#343a40', padding: '70px', color: 'white' }}>
                  <h5>Healthcare Case Study</h5>
                </div> */}
                <Card.Body>
                  <Badge bg="light" text="dark" className="mb-2" style={{marginRight:'350px'}}>Healthcare</Badge>
                  <Card.Title style={{ fontWeight: '500', color: 'black',textAlign:'left' }}>Patient Appointment Management</Card.Title>
                  {/* <p style={{ marginBottom: '4px', color: '#6c757d' }}><strong>Problem:</strong> High no-show rates and scheduling inefficiency</p>
                  <p style={{ marginBottom: '4px', color: '#6c757d' }}><strong>Solution:</strong> Scheduling & reminder AI agent</p>
                  <p style={{ marginBottom: '12px', color: '#6c757d' }}><strong>Outcome:</strong> 42% reduction in no-shows</p> */}
                  <span
                    role="button"
                    onClick={handleNavigateToAllCaseStudies}
                    style={{ color: '#0d6efd', cursor: 'pointer', fontWeight: '500',textAlign:'left',display:'block' }}
                  >
                    Read full case study →
                  </span>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3: Finance */}
            <Col md={4}>
              <Card style={{ 
                borderRadius: '15px', 
                overflow: 'hidden', 
                height: '100%',
                backgroundColor: '#f5f5f5',
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                 <Card.Img
                  variant="top"
                  src=""
                  alt="Finance Case Study"
                  style={{ height: '250px', objectFit: 'cover',color:'black' }}
                />
                {/* <div style={{ backgroundColor: '#343a40', padding: '70px', color: 'white' }}>
                  <h5>Finance Case Study</h5>
                </div> */}
                <Card.Body>
                  <Badge bg="light" text="dark" className="mb-2" style={{marginRight:'350px'}}>Finance</Badge>
                  <Card.Title style={{ fontWeight: '500', color: 'black',textAlign:'left' }}>24/7 Customer Support</Card.Title>
                  {/* <p style={{ marginBottom: '4px', color: '#6c757d' }}><strong>Problem:</strong> Limited support hours and high ticket volume</p>
                  <p style={{ marginBottom: '4px', color: '#6c757d' }}><strong>Solution:</strong> Financial services AI support agent</p>
                  <p style={{ marginBottom: '12px', color: '#6c757d' }}><strong>Outcome:</strong> 93% resolution rate, 24/7 availability</p> */}
                  <span
                    role="button"
                    onClick={handleNavigateToAllCaseStudies}
                    style={{ color: '#0d6efd', cursor: 'pointer', fontWeight: '500',textAlign:'left',display:'block' }}
                  >
                    Read full case study →
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>

         
        </Container>
      </div>
    </section>
  );
};

export default CaseStudies;
