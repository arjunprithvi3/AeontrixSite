import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const blogData = [
  {
    id: 1,
    title: 'How AI is Transforming Retail',
    summary: 'Discover how artificial intelligence is revolutionizing the retail industry, from personalized shopping to inventory management.',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    title: 'AI in Healthcare: Opportunities & Challenges',
    summary: '',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 3,
    title: 'Finance Gets Smarter with AI',
    summary: '',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 4,
    title: 'AI for Small Businesses',
    summary: '',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
];

const BlogSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate('/all-blogs');
  };

  return (
    <section id="blog-section" className="bg-[#f5f5f5] py-8 font-[Poppins]">
      <div style={{ backgroundColor: '#f5f5f5', padding: '100px 0' }}>
      <Container style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', maxWidth:'1350px' }}>
        <h3 className="text-center mb-4 font-bold">Latest Blog Articles</h3>
        <Row className="g-4">
          {blogData.map((blog) => (
            <Col md={3} key={blog.id}>

              <Card className="h-100" style={{ 
                borderRadius: '16px', 
                backgroundColor: '#ffffff', 
                border: '1px solid #e8e8e8', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)';
              }}>
                <Card.Img 
                  variant="top" 
                  src={blog.image}
                  alt={blog.title}
                  style={{ 
                    height: '200px', 
                    objectFit: 'cover',
                    borderBottom: '1px solid #f0f0f0'
                  }}
                />
                <Card.Body style={{ 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%' 
                }}>
                  <Badge bg="light" text="dark" className="mb-2" style={{ alignSelf: 'flex-start', fontSize: '12px', padding: '6px 12px', fontWeight: '500' }}>{blog.category}</Badge>
                  <Card.Title className="font-bold" style={{ fontSize: '18px', marginBottom: '12px', color: '#2c3e50' }}>{blog.title}</Card.Title>
                  <Card.Text className="text-muted" style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '20px', flex: '1' }}>{blog.summary}</Card.Text>
                  <Button 
                    variant="primary" 
                    onClick={() => handleReadMore(blog.id)} 
                    className="mt-auto"
                    style={{
                      borderRadius: '8px',
                      padding: '8px 20px',
                      fontSize: '14px',
                      fontWeight: '500',
                      boxShadow: '0 2px 8px rgba(0,123,255,0.3)',
                      border: 'none',
                      alignSelf: 'flex-start'
                    }}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </section>
  );
};

export default BlogSection; 