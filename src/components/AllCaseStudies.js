import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

const AllCaseStudies = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('Retail');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();


  useEffect(() => {
    const industryParam = searchParams.get('industry');
    if (industryParam && ['Retail', 'Healthcare', 'Finance', 'Manufacturing', 'Real Estate', 'Education'].includes(industryParam)) {
      setActiveTab(industryParam);
    }
  }, [searchParams]);

  const industries = ['Retail', 'Healthcare', 'Finance', 'Manufacturing', 'Real Estate', 'Education'];
  const categories = ['All', 'Customer Service', 'Sales & Marketing', 'Operations', 'Data Analytics', 'Automation'];


  const caseStudyData = {
    'Retail': {
      title: 'Accelerated Lead Response',
      problem: 'Major retail chain was losing sales due to 12+ hour delays in responding to online inquiries. Sales team couldn\'t keep up with volume during peak seasons.',
      solution: 'Implemented 24/7 response AI that qualifies leads, answers product questions, and schedules appointments with human sales reps when needed.',
      implementation: [
        'Integrated with existing CRM and e-commerce platform',
        'Trained on product catalog and common customer questions',
        'Deployed across all digital customer touchpoints'
      ],
      results: [
        { metric: '+68%', label: 'Conversion Rate' },
        { metric: '3 min', label: 'Average Response Time' },
        { metric: '42%', label: 'Reduced Labor Costs' },
        { metric: '24/7', label: 'Availability' }
      ],
      testimonial: {
        text: 'The AI agent has transformed our sales process completely. Our team now focuses on closing deals rather than chasing leads.',
        author: 'Robert Chen, VP of Sales at RetailGiant'
      },
      category: 'Sales & Marketing'
    },
    'Healthcare': {
      title: 'Patient Appointment Management',
      problem: 'High no-show rates and scheduling inefficiency were costing the hospital significant revenue and affecting patient care quality.',
      solution: 'Deployed AI-powered scheduling system with automated reminders and intelligent rescheduling capabilities.',
      implementation: [
        'Integrated with existing patient management system',
        'Implemented automated reminder system via SMS and email',
        'Added intelligent rescheduling based on patient preferences'
      ],
      results: [
        { metric: '42%', label: 'Reduction in No-shows' },
        { metric: '65%', label: 'Faster Scheduling' },
        { metric: '89%', label: 'Patient Satisfaction' },
        { metric: '30%', label: 'Cost Savings' }
      ],
      testimonial: {
        text: 'The AI scheduling system has revolutionized our patient management. We\'ve seen dramatic improvements in efficiency and patient satisfaction.',
        author: 'Dr. Sarah Johnson, Chief Medical Officer'
      },
      category: 'Operations'
    },
    'Finance': {
      title: '24/7 Customer Support',
      problem: 'Limited support hours and high ticket volume were causing customer dissatisfaction and increased operational costs.',
      solution: 'Implemented AI-powered customer support system with natural language processing for instant query resolution.',
      implementation: [
        'Trained AI on financial regulations and common queries',
        'Integrated with existing banking systems and databases',
        'Implemented escalation protocols for complex issues'
      ],
      results: [
        { metric: '93%', label: 'Resolution Rate' },
        { metric: '24/7', label: 'Availability' },
        { metric: '2 min', label: 'Average Response Time' },
        { metric: '45%', label: 'Cost Reduction' }
      ],
      testimonial: {
        text: 'Our customers now get instant support anytime, anywhere. The AI system handles 80% of queries without human intervention.',
        author: 'Michael Rodriguez, Head of Customer Experience'
      },
      category: 'Customer Service'
    },
    'Manufacturing': {
      title: 'Predictive Maintenance System',
      problem: 'Unexpected equipment failures were causing production delays and expensive emergency repairs.',
      solution: 'Deployed AI-powered predictive maintenance system using IoT sensors and machine learning algorithms.',
      implementation: [
        'Installed IoT sensors across production equipment',
        'Developed ML models for failure prediction',
        'Created automated maintenance scheduling system'
      ],
      results: [
        { metric: '85%', label: 'Fewer Breakdowns' },
        { metric: '60%', label: 'Reduced Downtime' },
        { metric: '40%', label: 'Maintenance Cost Savings' },
        { metric: '95%', label: 'Prediction Accuracy' }
      ],
      testimonial: {
        text: 'The predictive maintenance system has transformed our operations. We now prevent issues before they occur.',
        author: 'Lisa Thompson, Operations Director'
      },
      category: 'Automation'
    },
    'Real Estate': {
      title: 'Property Valuation AI',
      problem: 'Manual property valuations were time-consuming and often inaccurate, leading to poor investment decisions.',
      solution: 'Developed AI system that analyzes market data, property features, and trends for accurate valuations.',
      implementation: [
        'Integrated with multiple real estate databases',
        'Trained AI on historical sales data and market trends',
        'Developed automated reporting system'
      ],
      results: [
        { metric: '92%', label: 'Valuation Accuracy' },
        { metric: '80%', label: 'Faster Processing' },
        { metric: '50%', label: 'Cost Reduction' },
        { metric: '75%', label: 'Better ROI' }
      ],
      testimonial: {
        text: 'The AI valuation system has given us a competitive edge. We make better investment decisions faster.',
        author: 'David Park, Real Estate Investment Manager'
      },
      category: 'Data Analytics'
    },
    'Education': {
      title: 'Personalized Learning Platform',
      problem: 'One-size-fits-all education approach was failing to meet individual student needs and learning styles.',
      solution: 'Created AI-powered adaptive learning platform that personalizes content and pace for each student.',
      implementation: [
        'Developed student profiling algorithms',
        'Created adaptive content delivery system',
        'Implemented progress tracking and analytics'
      ],
      results: [
        { metric: '78%', label: 'Improved Grades' },
        { metric: '85%', label: 'Student Engagement' },
        { metric: '40%', label: 'Learning Time Reduction' },
        { metric: '92%', label: 'Student Satisfaction' }
      ],
      testimonial: {
        text: 'The personalized learning platform has revolutionized how we teach. Every student gets the attention they need.',
        author: 'Prof. Emily Watson, Dean of Education'
      },
      category: 'Data Analytics'
    }
  };

  const handleBackToMain = () => {
    navigate('/', { state: { scrollTo: 'case-studies' } });
  };

  const currentCaseStudy = caseStudyData[activeTab];

  const filteredIndustries = selectedCategory === 'All' 
    ? industries 
    : industries.filter(industry => caseStudyData[industry]?.category === selectedCategory);

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '12px 0' }}>
      <Container style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth: '1350px', marginTop: '20px' }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="fw-bold">Industry Wise Case Studies</h1>
          <p className="text-muted">See how our AI systems can transform businesses across industries</p>
        </div>

        {/* Browse by Category */}
        <div className="mb-4">
          <h5 className="fw-bold mb-3">Browse by Category</h5>
          <div className="d-flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? 'primary' : 'outline-secondary'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                style={{ borderRadius: '20px', padding: '8px 16px' }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Industry Tabs */}
        <div className="mb-4">
          <h5 className="fw-bold mb-3">Select Industry</h5>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {filteredIndustries.map((industry) => (
              <Button
                key={industry}
                variant={industry === activeTab ? 'dark' : 'outline-dark'}
                onClick={() => setActiveTab(industry)}
                style={{ borderRadius: '8px' }}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>

        {/* Case Study Card */}
        <Card className="p-4 shadow-sm" style={{ border: '1px solid #dee2e6', borderRadius: '8px' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <Badge bg="dark">{activeTab}</Badge>
            <Badge bg="info">{currentCaseStudy?.category}</Badge>
          </div>
          
          <Row className="g-4">
            {/* Problem */}
            <Col md={6}>
              <h6 className="text-uppercase text-muted">Problem</h6>
              <Card className="p-3 mb-3" style={{ border: '1px solid #dee2e6', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h5><strong>{currentCaseStudy?.title}</strong></h5>
                <p className="text-muted mb-0">
                  {currentCaseStudy?.problem}
                </p>
              </Card>

              <h6 className="text-uppercase text-muted mt-4">Solution</h6>
              <Card className="p-3" style={{ border: '1px solid #dee2e6', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <h5><strong>AI-Powered Solution</strong></h5>
                <p className="text-muted mb-2">
                  {currentCaseStudy?.solution}
                </p>
                <small className="text-muted">⚙️ Powered by our {activeTab} Specialist AI</small>
              </Card>
            </Col>

            {/* Implementation & Results */}
            <Col md={6}>
              <h6 className="text-uppercase text-muted">Implementation</h6>
              <Card className="p-3 mb-3" style={{ border: '1px solid #dee2e6', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <ul className="mb-0">
                  {currentCaseStudy?.implementation.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </Card>

              <h6 className="text-uppercase text-muted mt-4">Results</h6>
              <Row className="text-center g-3">
                {currentCaseStudy?.results.map((result, index) => (
                  <Col xs={6} key={index}>
                    <Card className="p-3" style={{ border: '1px solid #dee2e6', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                      <strong>{result.metric}</strong>
                      <div className="text-muted">{result.label}</div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* Testimonial */}
          <Card className="mt-4 p-3 bg-light border-0" style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <Row className="align-items-center">
              <Col xs="auto">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="user"
                  width="50"
                  height="50"
                  style={{ borderRadius: '50%' }}
                />
              </Col>
              <Col>
                <p className="mb-1 text-dark" >
                  <strong>"{currentCaseStudy?.testimonial.text}"</strong>
                </p>
                <small className="text-muted">{currentCaseStudy?.testimonial.author}</small>
              </Col>
            </Row>
          </Card>
        </Card>

        {/* Back Button */}
        <div className="text-center mt-4">
          <Button 
            variant="outline-dark" 
            onClick={handleBackToMain}
            style={{ padding: '10px 30px' }}
          >
            ← Back to Case Studies
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AllCaseStudies;
