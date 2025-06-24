import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheck2, BsStarFill } from 'react-icons/bs';

const plans = [
  {
    title: 'Consultation - AI Advisor',
    subtitle: 'Strategy & Planning',
    description: 'Perfect if you need expert guidance to plan your AI strategy',
    features: [
      '60-minute deep-dive strategy session',
      'Custom AI roadmap & priority tool recommendations',
      'Hallucination guardrails & reliability checks',
      'Team training on how to manage your AI Agents',
      'Bonus: KPI checklist to prove ROI',
    ],
    popular: false,
  },
  {
    title: 'Done & Built For You',
    subtitle: 'Full Implementation',
    description: 'Ideal when you want a turnkey AI solution up and running fast',
    features: [
      'End-to-end design & deployment of your AI Agents',   
      'Full integration with Slack, WhatsApp, CRM, calendar, etc',
      'Real-time lead qualification, outreach, or customer support bot',
      'Complete testing, fallback strategies, and documentation',
      '30-day tuning & performance guarantee',
    ],
    popular: true,
  },
  {
    title: 'AI Partner (All your AI needs)',
    subtitle: 'Ongoing Partnership',
    description: 'Your on-demand AI team for every project and request.',
    features: [
      'Dedicated fractional AI specialists at your service',
      'Unlimited agent builds, updates, and custom features',
      '24/7 monitoring, maintenance & reliability audits',
      'Quarterly ROI reviews with cost-savings report',
      'Priority support & instant scaling for peak periods',
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className='content-section grid-background' style={{ 
      padding: '100px 0',
      position: 'relative',
    }}>
    
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '100px',
        height: '100px',
       
        borderRadius: '50%',
        opacity: '0.1',
        filter: 'blur(20px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        width: '150px',
        height: '150px',
       
        borderRadius: '50%',
        opacity: '0.1',
        filter: 'blur(25px)'
      }}></div>

      <Container className='content-box highlighted-box'  style={{ padding: '60px 40px', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.04)', maxWidth: '1200px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <div className="text-center mb-5">
          <div style={{
            display: 'inline-block',
            padding: '8px 24px',
           
            borderRadius: '50px',
            marginBottom: '20px'
          }}>
            <span style={{ color: '#111', fontWeight: '600', fontSize: '14px' }}>PRICING PLANS</span>
          </div>
          <h2 style={{ 
            fontWeight: 800, 
            fontSize: '3.2rem', 
            color: '#1a1a1a',
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #1a1a1a, #2c3e50)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Choose Your AI Journey
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6c757d',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            From strategic consultation to full implementation and ongoing partnership
          </p>
        </div>

        <Row className="g-5 justify-content-center">
          {plans.map((plan, idx) => (
            <Col lg={4} md={6} key={idx}>
              <Card
                className="h-60 border-0 position-relative"
                style={{ 
                  borderRadius: '20px', 
                  overflow: 'hidden',
                  background: plan.popular 
                    ? 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
                    : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  border: plan.popular 
                    ? '2px solid #00FF93'
                    : '1px solid rgba(0,0,0,0.08)',
                  boxShadow: plan.popular
                    ? '0 20px 60px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.08)'
                    : '0 12px 40px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: plan.popular ? 'scale(1.02)' : 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = plan.popular ? 'translateY(-15px) scale(1.03)' : 'translateY(-12px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 80px rgba(0,0,0,0.15), 0 12px 40px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = plan.popular ? 'scale(1.02)' : 'scale(1)';
                  e.currentTarget.style.boxShadow = plan.popular
                    ? '0 20px 60px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.08)'
                    : '0 12px 40px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)';
                }}
              >
               

                <Card.Body className="d-flex flex-column p-5">
                  <div className="text-center mb-4">
                    <h5 className="fw-bold mb-2" style={{ 
                      color: '#1a1a1a', 
                      fontSize: '1.3rem',
                      lineHeight: '1.3'
                    }}>
                      {plan.title}
                    </h5>
                    <div style={{
                      display: 'inline-block',
                      padding: '6px 16px',
                      background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#6c757d',
                      marginBottom: '16px'
                    }}>
                      {plan.subtitle}
                    </div>
                    <p style={{ 
                      color: '#6c757d',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      margin: '0'
                    }}>
                      {plan.description}
                    </p>
                  </div>

                  <Button
                    variant="dark"
                    className="w-100 fw-bold mb-4"
                    size="lg"
                    style={{ 
                      background: '#111111',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '14px 24px',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.background = '#00FF93';
                      e.currentTarget.style.color = '#111';
                      e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 255, 147, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = '#111111';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                    }}
                  >
                    Contact Us
                  </Button>

                  <div style={{ flex: 1 }}>
                    <h6 style={{ 
                      color: '#1a1a1a', 
                      fontWeight: '700', 
                      fontSize: '16px',
                      marginBottom: '20px',
                      textAlign: 'center'
                    }}>
                      What's Included:
                    </h6>
                    <ul className="list-unstyled" style={{ color: '#555' }}>
                      {plan.features.map((feature, index) => (
                        <li key={index} className="d-flex align-items-start mb-3" style={{ fontSize: '15px' }}>
                          <span style={{ 
                            color: '#00FF93', 
                            marginRight: '14px', 
                            marginTop: '3px',
                            flexShrink: 0
                          }}>
                            <BsCheck2 size={18} />
                          </span>
                          <span style={{ 
                            fontWeight: '500',
                            lineHeight: '1.6',
                            color: '#2c3e50'
                          }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        
      </Container>
    </section>
  );
};

export default PricingSection;