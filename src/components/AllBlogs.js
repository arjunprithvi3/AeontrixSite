import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Form, Pagination, Badge } from 'react-bootstrap';

const blogData = [
  { 
    id: 1, 
    title: 'How AI is Transforming Retail', 
    summary: '', 
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  { 
    id: 2, 
    title: 'AI in Healthcare: Opportunities & Challenges', 
    summary: '', 
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
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
  { 
    id: 5, 
    title: 'AI and Education: The Future of Learning', 
    summary: '', 
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  { 
    id: 6, 
    title: 'Manufacturing with AI: Smarter Production', 
    summary: 'AI-driven automation and predictive maintenance in manufacturing.', 
    category: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  { 
    id: 7, 
    title: 'Real Estate and AI: Smarter Investments', 
    summary: 'AI-powered property valuation and investment strategies.', 
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80'
  },
  { 
    id: 8, 
    title: 'AI for Customer Service', 
    summary: 'How AI chatbots and virtual assistants are transforming customer support.', 
    category: 'Customer Service',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  // Add more blogs as needed
];

const categories = ['All', 'Retail', 'Healthcare', 'Finance', 'Business', 'Education', 'Manufacturing', 'Real Estate', 'Customer Service'];

const blogsPerPage = 8;

const AllBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Filter blogs by category and search
  const filteredBlogs = blogData.filter(
    (blog) =>
      (selectedCategory === 'All' || blog.category === selectedCategory) &&
      (blog.title.toLowerCase().includes(search.toLowerCase()) || blog.summary.toLowerCase().includes(search.toLowerCase()))
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage);

  const handleReadFullArticle = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '12px 0' }}>
      <Container style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', maxWidth: '1350px', marginTop: '20px' }}>
        {/* Back Button */}
        <div className="mb-4">
          <Button 
            variant="outline-secondary" 
            onClick={() => navigate('/', { state: { scrollTo: 'blog-section' } })}
            style={{
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: '500',
              border: '1px solid #6c757d',
              color: '#6c757d',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            ← Back to Blog Section
          </Button>
        </div>

        <div className="text-center mb-4">
          <h1 className="fw-bold" style={{ color: '#2c3e50', marginBottom: '12px' }}>All Blog Articles</h1>
          <p className="text-muted" style={{ fontSize: '16px' }}>Browse our latest insights, guides, and stories about AI in business</p>
        </div>

        {/* Category Filter */}
        <div className="mb-4 d-flex flex-wrap gap-2 justify-content-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? 'primary' : 'outline-secondary'}
              size="sm"
              onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}
              style={{ 
                borderRadius: '20px', 
                padding: '8px 16px',
                fontWeight: '500',
                boxShadow: category === selectedCategory ? '0 2px 8px rgba(0,123,255,0.3)' : 'none'
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Search Filter */}
        <Form className="mb-4">
          <Form.Control
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            style={{ 
              maxWidth: '400px', 
              margin: '0 auto',
              borderRadius: '8px',
              border: '1px solid #e8e8e8',
              padding: '12px 16px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          />
        </Form>

        {/* Blog Cards */}
        <Row className="g-4">
          {paginatedBlogs.map((blog) => (
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
                    onClick={() => handleReadFullArticle(blog.id)} 
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
                    Read Full Article
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-5">
          <Pagination style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
            <Pagination.Prev 
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} 
              disabled={currentPage === 1}
              style={{ border: 'none', padding: '12px 16px' }}
            />
            {[...Array(totalPages)].map((_, idx) => (
              <Pagination.Item
                key={idx + 1}
                active={currentPage === idx + 1}
                onClick={() => setCurrentPage(idx + 1)}
                style={{ 
                  border: 'none', 
                  padding: '12px 16px',
                  fontWeight: currentPage === idx + 1 ? '600' : '400'
                }}
              >
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next 
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} 
              disabled={currentPage === totalPages}
              style={{ border: 'none', padding: '12px 16px' }}
            />
          </Pagination>
        </div>
      </Container>
    </div>
  );
};

export default AllBlogs; 