import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const blogData = [
  {
    id: 1,
    title: 'How AI is Transforming Retail',
    summary: 'Discover how artificial intelligence is revolutionizing the retail industry, from personalized shopping to inventory management.',
    category: 'Retail',
  },
  {
    id: 2,
    title: 'AI in Healthcare: Opportunities & Challenges',
    summary: 'Explore the impact of AI on healthcare, including diagnostics, patient care, and operational efficiency.',
    category: 'Healthcare',
  },
  {
    id: 3,
    title: 'Finance Gets Smarter with AI',
    summary: 'Learn how AI is driving innovation in the finance sector, from fraud detection to customer service.',
    category: 'Finance',
  },
  {
    id: 4,
    title: 'AI for Small Businesses',
    summary: 'See how small businesses can leverage AI tools to compete with larger enterprises.',
    category: 'Business',
  },
];

const BlogSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate('/all-blogs');
  };

  return (
    <section className="bg-[#f5f5f5] py-8 font-[Poppins]">
      <div style={{ backgroundColor: '#f5f5f5', padding: '100px 0' }}>
      <Container style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth:'1350px' }}>
        <h3 className="text-center mb-4 font-bold">Latest Blog Articles</h3>
        <Row className="g-4">
          {blogData.map((blog) => (
            <Col md={3} key={blog.id}>
              <Card className="h-100 shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <Card.Body>
                  <Card.Title className="font-bold">{blog.title}</Card.Title>
                  <Card.Text className="text-muted">{blog.summary}</Card.Text>
                  <Button variant="primary" onClick={() => handleReadMore(blog.id)} className="mt-3">Read More</Button>
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