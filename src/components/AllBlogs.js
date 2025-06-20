import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Form, Pagination } from 'react-bootstrap';

const blogData = [
  { id: 1, title: 'How AI is Transforming Retail', summary: 'Discover how artificial intelligence is revolutionizing the retail industry, from personalized shopping to inventory management.', category: 'Retail' },
  { id: 2, title: 'AI in Healthcare: Opportunities & Challenges', summary: 'Explore the impact of AI on healthcare, including diagnostics, patient care, and operational efficiency.', category: 'Healthcare' },
  { id: 3, title: 'Finance Gets Smarter with AI', summary: 'Learn how AI is driving innovation in the finance sector, from fraud detection to customer service.', category: 'Finance' },
  { id: 4, title: 'AI for Small Businesses', summary: 'See how small businesses can leverage AI tools to compete with larger enterprises.', category: 'Business' },
  { id: 5, title: 'AI and Education: The Future of Learning', summary: 'How AI is personalizing education and improving outcomes for students and teachers.', category: 'Education' },
  { id: 6, title: 'Manufacturing with AI: Smarter Production', summary: 'AI-driven automation and predictive maintenance in manufacturing.', category: 'Manufacturing' },
  { id: 7, title: 'Real Estate and AI: Smarter Investments', summary: 'AI-powered property valuation and investment strategies.', category: 'Real Estate' },
  { id: 8, title: 'AI for Customer Service', summary: 'How AI chatbots and virtual assistants are transforming customer support.', category: 'Customer Service' },
  // Add more blogs as needed
];

const categories = ['All', 'Retail', 'Healthcare', 'Finance', 'Business', 'Education', 'Manufacturing', 'Real Estate', 'Customer Service'];

const blogsPerPage = 4;

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
      <Container style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth: '1350px', marginTop: '20px' }}>
        <div className="text-center mb-4">
          <h1 className="fw-bold">All Blog Articles</h1>
          <p className="text-muted">Browse our latest insights, guides, and stories about AI in business</p>
        </div>

        {/* Category Filter */}
        <div className="mb-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? 'primary' : 'outline-secondary'}
              size="sm"
              onClick={() => { setSelectedCategory(category); setCurrentPage(1); }}
              style={{ borderRadius: '20px', padding: '8px 16px' }}
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
            style={{ maxWidth: '400px', margin: '0 auto' }}
          />
        </Form>

        {/* Blog Cards */}
        <Row className="g-4">
          {paginatedBlogs.map((blog) => (
            <Col md={3} key={blog.id}>
              <Card className="h-100 shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#f5f5f5', border: '1px solid #e0e0e0', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <Card.Body>
                  <Card.Title className="font-bold">{blog.title}</Card.Title>
                  <Card.Text className="text-muted">{blog.summary}</Card.Text>
                  <Button variant="primary" onClick={() => handleReadFullArticle(blog.id)} className="mt-3">Read Full Article</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            <Pagination.Prev onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1} />
            {[...Array(totalPages)].map((_, idx) => (
              <Pagination.Item
                key={idx + 1}
                active={currentPage === idx + 1}
                onClick={() => setCurrentPage(idx + 1)}
              >
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} />
          </Pagination>
        </div>
      </Container>
    </div>
  );
};

export default AllBlogs; 